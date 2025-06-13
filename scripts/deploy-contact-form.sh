#!/bin/bash

set -e

# Load environment variables
if [ -f "../lambda/contact-form/.env" ]; then
    source "../lambda/contact-form/.env"
fi

# Default values
FUNCTION_NAME=${FUNCTION_NAME:-"letsspeak-contact-form"}
AWS_REGION=${AWS_REGION:-"ap-northeast-1"}
FROM_EMAIL=${FROM_EMAIL:-"contact@lsklab.com"}
TO_EMAIL=${TO_EMAIL:-"contact@lsklab.com"}

echo "🚀 Deploying Lambda function: $FUNCTION_NAME"
echo "📍 Region: $AWS_REGION"

# Change to lambda directory
cd ../lambda/contact-form

# Install dependencies
echo "📦 Installing dependencies..."
npm install

# Build TypeScript
echo "🔨 Building TypeScript..."
npm run build

# Create deployment package
echo "📦 Creating deployment package..."
rm -f contact-form.zip

# Copy package.json to dist for production dependencies
cp package.json dist/

# Install production dependencies in dist
cd dist
npm install --production --silent
cd ..

# Create zip file
zip -r contact-form.zip dist/ -x "dist/package.json" "dist/package-lock.json"

echo "📤 Uploading function code..."

# Check if function exists
if aws lambda get-function --function-name "$FUNCTION_NAME" --region "$AWS_REGION" >/dev/null 2>&1; then
    # Update existing function
    echo "🔄 Updating existing function..."
    aws lambda update-function-code \
        --function-name "$FUNCTION_NAME" \
        --zip-file fileb://contact-form.zip \
        --region "$AWS_REGION"
    
    # Update environment variables
    aws lambda update-function-configuration \
        --function-name "$FUNCTION_NAME" \
        --environment "Variables={AWS_REGION=$AWS_REGION,FROM_EMAIL=$FROM_EMAIL,TO_EMAIL=$TO_EMAIL}" \
        --region "$AWS_REGION"
else
    # Create new function
    echo "🆕 Creating new function..."
    
    # Create execution role if it doesn't exist
    ROLE_NAME="letsspeak-lambda-role"
    ROLE_ARN=$(aws iam get-role --role-name "$ROLE_NAME" --query 'Role.Arn' --output text 2>/dev/null || echo "")
    
    if [ -z "$ROLE_ARN" ]; then
        echo "🔐 Creating IAM role..."
        
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
        
        # Create role
        aws iam create-role \
            --role-name "$ROLE_NAME" \
            --assume-role-policy-document file://trust-policy.json \
            --region "$AWS_REGION"
        
        # Attach basic execution policy
        aws iam attach-role-policy \
            --role-name "$ROLE_NAME" \
            --policy-arn "arn:aws:iam::aws:policy/service-role/AWSLambdaBasicExecutionRole"
        
        # Attach SES policy
        aws iam attach-role-policy \
            --role-name "$ROLE_NAME" \
            --policy-arn "arn:aws:iam::aws:policy/AmazonSESFullAccess"
        
        # Get role ARN
        ROLE_ARN=$(aws iam get-role --role-name "$ROLE_NAME" --query 'Role.Arn' --output text)
        
        # Wait for role to be available
        echo "⏳ Waiting for IAM role to be ready..."
        sleep 10
        
        rm trust-policy.json
    fi
    
    # Create Lambda function
    aws lambda create-function \
        --function-name "$FUNCTION_NAME" \
        --runtime "nodejs18.x" \
        --role "$ROLE_ARN" \
        --handler "dist/index.handler" \
        --zip-file fileb://contact-form.zip \
        --timeout 30 \
        --memory-size 256 \
        --environment "Variables={AWS_REGION=$AWS_REGION,FROM_EMAIL=$FROM_EMAIL,TO_EMAIL=$TO_EMAIL}" \
        --region "$AWS_REGION"
fi

# Clean up
rm -f contact-form.zip
rm -rf dist/

echo "✅ Lambda function deployed successfully!"

# Get function ARN for API Gateway setup
FUNCTION_ARN=$(aws lambda get-function --function-name "$FUNCTION_NAME" --region "$AWS_REGION" --query 'Configuration.FunctionArn' --output text)
echo "📍 Function ARN: $FUNCTION_ARN"

echo ""
echo "🌐 Next steps:"
echo "1. Set up API Gateway using: scripts/api-gateway-setup.json"
echo "2. Configure SES email addresses in AWS Console"
echo "3. Test the contact form endpoint"