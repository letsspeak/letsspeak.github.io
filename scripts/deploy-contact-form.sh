#!/bin/bash

# Contact Form Lambda Function Deployment Script
# Usage: ./scripts/deploy-contact-form.sh

set -e

# Configuration
LAMBDA_DIR="lambda/contact-form"
FUNCTION_NAME="contact-form-handler"
RUNTIME="nodejs18.x"
HANDLER="index.handler"
REGION="ap-northeast-1"
ROLE_NAME="lambda-contact-form-role"
TIMEOUT=30
MEMORY_SIZE=128

# Colors for output
RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
NC='\033[0m' # No Color

echo -e "${GREEN}📨 Starting Contact Form Lambda Deployment${NC}"

# Check if AWS CLI is installed
if ! command -v aws &> /dev/null; then
    echo -e "${RED}❌ AWS CLI is not installed. Please install it first.${NC}"
    exit 1
fi

# Check if we're in the correct directory
if [ ! -d "$LAMBDA_DIR" ]; then
    echo -e "${RED}❌ Lambda directory not found. Please run from project root.${NC}"
    exit 1
fi

cd "$LAMBDA_DIR"

echo -e "${YELLOW}📦 Installing dependencies...${NC}"
npm install

echo -e "${YELLOW}🔨 Building TypeScript...${NC}"
npm run build

if [ ! -f "dist/index.js" ]; then
    echo -e "${RED}❌ Build failed. dist/index.js not found.${NC}"
    exit 1
fi

echo -e "${YELLOW}📁 Creating deployment package...${NC}"
zip -r deployment-package.zip dist/ node_modules/ > /dev/null

# Check if IAM role exists, create if not
echo -e "${YELLOW}🔐 Checking IAM role...${NC}"
if ! aws iam get-role --role-name "$ROLE_NAME" --region "$REGION" > /dev/null 2>&1; then
    echo -e "${YELLOW}Creating IAM role: $ROLE_NAME${NC}"
    
    # Create trust policy
    cat > trust-policy.json << EOF
{
    "Version": "2012-10-17",
    "Statement": [
        {
            "Effect": "Allow",
            "Principal": {
                "Service": "lambda.amazonaws.com"
            },
            "Action": "sts:AssumeRole"
        }
    ]
}
EOF

    aws iam create-role \
        --role-name "$ROLE_NAME" \
        --assume-role-policy-document file://trust-policy.json \
        --region "$REGION"

    # Attach policies
    aws iam attach-role-policy \
        --role-name "$ROLE_NAME" \
        --policy-arn "arn:aws:iam::aws:policy/service-role/AWSLambdaBasicExecutionRole" \
        --region "$REGION"

    aws iam attach-role-policy \
        --role-name "$ROLE_NAME" \
        --policy-arn "arn:aws:iam::aws:policy/AmazonSESFullAccess" \
        --region "$REGION"

    echo -e "${GREEN}✅ IAM role created successfully${NC}"
    
    # Wait for role to be available
    echo -e "${YELLOW}⏳ Waiting for IAM role to be ready...${NC}"
    sleep 10
    
    rm trust-policy.json
else
    echo -e "${GREEN}✅ IAM role already exists${NC}"
fi

# Get account ID for ARN
ACCOUNT_ID=$(aws sts get-caller-identity --query Account --output text)
ROLE_ARN="arn:aws:iam::${ACCOUNT_ID}:role/${ROLE_NAME}"

# Check if Lambda function exists
echo -e "${YELLOW}🚀 Deploying Lambda function...${NC}"
if aws lambda get-function --function-name "$FUNCTION_NAME" --region "$REGION" > /dev/null 2>&1; then
    echo -e "${YELLOW}Updating existing Lambda function: $FUNCTION_NAME${NC}"
    
    aws lambda update-function-code \
        --function-name "$FUNCTION_NAME" \
        --zip-file fileb://deployment-package.zip \
        --region "$REGION"

    aws lambda update-function-configuration \
        --function-name "$FUNCTION_NAME" \
        --handler "$HANDLER" \
        --runtime "$RUNTIME" \
        --timeout "$TIMEOUT" \
        --memory-size "$MEMORY_SIZE" \
        --region "$REGION" \
        --environment Variables="{AWS_REGION=$REGION,FROM_EMAIL=contact@lsklab.com,TO_EMAIL=contact@lsklab.com}"

else
    echo -e "${YELLOW}Creating new Lambda function: $FUNCTION_NAME${NC}"
    
    aws lambda create-function \
        --function-name "$FUNCTION_NAME" \
        --runtime "$RUNTIME" \
        --role "$ROLE_ARN" \
        --handler "$HANDLER" \
        --timeout "$TIMEOUT" \
        --memory-size "$MEMORY_SIZE" \
        --zip-file fileb://deployment-package.zip \
        --region "$REGION" \
        --environment Variables="{AWS_REGION=$REGION,FROM_EMAIL=contact@lsklab.com,TO_EMAIL=contact@lsklab.com}"
fi

echo -e "${GREEN}✅ Lambda function deployed successfully${NC}"

# Cleanup
rm deployment-package.zip

echo -e "${GREEN}🎉 Deployment completed!${NC}"
echo -e "${YELLOW}📋 Next steps:${NC}"
echo "1. Configure API Gateway to trigger this Lambda function"
echo "2. Verify SES email addresses (contact@lsklab.com)"
echo "3. Test the contact form functionality"
echo "4. Monitor CloudWatch logs for any issues"

cd - > /dev/null