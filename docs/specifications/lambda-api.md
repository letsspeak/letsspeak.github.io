# Lambda / API Gateway / お問い合わせフォーム構成仕様書

本ドキュメントでは、GitHub Pages によるフロントエンド (`letsspeak.github.io`) と統合される形で管理される、お問い合わせフォーム用の AWS Lambda 関数および API Gateway 構成について記述する。

---

## 📁 ディレクトリ構成

```
letsspeak.github.io/
├— docs/                            # GitHub Pages による静的サイト
├— lambda/                          # Lambda 関数と関連ファイル
│   └— contact-form/
│       ├— index.ts                # メール送信用のLambda関数
│       ├— package.json            # 依存パッケージ
│       ├— tsconfig.json           # TypeScript設定
│       ├— .env.sample             # 環境変数テンプレート
│       └— README.md               # 関数詳細
├— scripts/                         # デプロイスクリプト
│   ├— deploy-contact-form.sh      # Lambdaデプロイ用
│   └— api-gateway-setup.json      # API Gatewayの構成
├— .github/workflows/               # CI/CD (任意)
└— ...
```

---

## 🎯 構成の目的

* GitHub Pages (静的サイト) にお問い合わせフォームを安全に実装
* AWS Lambda + API Gateway + SES によるサーバーレス構成
* フロントエンドと同じリポジトリ内に一元管理

---

## ⚙️ 利用サービス構成

| サービス名            | 用途                   |
| ---------------- | -------------------- |
| **GitHub Pages** | 静的サイトホスティング          |
| **AWS Lambda**   | お問い合わせ処理ロジック (SES送信) |
| **Amazon SES**   | メール送信                |
| **API Gateway**  | LambdaへのHTTPSエンドポイント |
| **CloudWatch**   | ログ記録・デバッグ            |

---

## 📩 Lambda関数の仕様 (`lambda/contact-form/index.ts`)

* `POST` リクエストを受け取り、指定のメールアドレスに送信
* 使用予定ライブラリ: `@aws-sdk/client-sesv2`
* 入力例:

  ```json
  {
    "name": "大宮 将嗣",
    "email": "example@example.com",
    "message": "お問い合わせ本文..."
  }
  ```
* 出力例:

  ```json
  { "status": "ok" }
  ```

---

## 🚀 デプロイ手順 (`scripts/deploy-contact-form.sh`)

1. TypeScript のビルド (`tsc`)
2. 関数を ZIP 化
3. AWS CLI で `update-function-code`
4. API Gateway との連携 (CORS 設定含む)

> 初回は `scripts/api-gateway-setup.json` を利用してエンドポイント生成

---

## 🔐 IAM ポリシー定義

### デプロイユーザー用ポリシー

デプロイスクリプト (`deploy-contact-form.sh`) を実行するIAMユーザーに必要な権限：

```json
{
  "Version": "2012-10-17",
  "Statement": [
    {
      "Sid": "LambdaDeploymentPermissions",
      "Effect": "Allow",
      "Action": [
        "lambda:CreateFunction",
        "lambda:UpdateFunctionCode",
        "lambda:UpdateFunctionConfiguration",
        "lambda:GetFunction",
        "lambda:ListFunctions",
        "lambda:TagResource",
        "lambda:UntagResource",
        "lambda:AddPermission",
        "lambda:RemovePermission",
        "lambda:GetPolicy"
      ],
      "Resource": [
        "arn:aws:lambda:ap-northeast-1:*:function:contact-form-handler",
        "arn:aws:lambda:ap-northeast-1:*:function:contact-form-handler:*"
      ]
    },
    {
      "Sid": "IAMRoleManagement",
      "Effect": "Allow",
      "Action": [
        "iam:CreateRole",
        "iam:GetRole",
        "iam:ListRoles",
        "iam:PassRole",
        "iam:AttachRolePolicy",
        "iam:DetachRolePolicy",
        "iam:ListAttachedRolePolicies",
        "iam:TagRole",
        "iam:UntagRole"
      ],
      "Resource": [
        "arn:aws:iam::*:role/lambda-contact-form-role"
      ]
    },
    {
      "Sid": "IAMPolicyAccess",
      "Effect": "Allow",
      "Action": [
        "iam:GetPolicy",
        "iam:ListPolicies"
      ],
      "Resource": [
        "arn:aws:iam::aws:policy/service-role/AWSLambdaBasicExecutionRole",
        "arn:aws:iam::aws:policy/AmazonSESFullAccess"
      ]
    },
    {
      "Sid": "APIGatewayPermissions",
      "Effect": "Allow",
      "Action": [
        "apigateway:GET",
        "apigateway:POST",
        "apigateway:PUT",
        "apigateway:DELETE",
        "apigateway:PATCH"
      ],
      "Resource": [
        "arn:aws:apigateway:ap-northeast-1::/restapis",
        "arn:aws:apigateway:ap-northeast-1::/restapis/*"
      ]
    },
    {
      "Sid": "SESPermissions",
      "Effect": "Allow",
      "Action": [
        "ses:GetIdentityVerificationAttributes",
        "ses:ListIdentities",
        "ses:VerifyEmailIdentity"
      ],
      "Resource": "*"
    },
    {
      "Sid": "CallerIdentityAccess",
      "Effect": "Allow",
      "Action": [
        "sts:GetCallerIdentity"
      ],
      "Resource": "*"
    }
  ]
}
```

### Lambda実行ロール用ポリシー

Lambda関数 (`contact-form-handler`) の実行時に必要な権限（自動作成される `lambda-contact-form-role` に付与）：

**信頼ポリシー (Trust Policy)**
```json
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
```

**実行権限ポリシー (Permission Policy)**

1. **基本実行権限** (AWS管理ポリシー: `AWSLambdaBasicExecutionRole`)
   ```json
   {
     "Version": "2012-10-17",
     "Statement": [
       {
         "Effect": "Allow",
         "Action": [
           "logs:CreateLogGroup",
           "logs:CreateLogStream",
           "logs:PutLogEvents"
         ],
         "Resource": "arn:aws:logs:*:*:*"
       }
     ]
   }
   ```

2. **SESメール送信権限** (カスタムポリシー推奨)
   ```json
   {
     "Version": "2012-10-17",
     "Statement": [
       {
         "Sid": "SESEmailSendingPermissions",
         "Effect": "Allow",
         "Action": [
           "ses:SendEmail",
           "ses:SendRawEmail"
         ],
         "Resource": [
           "arn:aws:ses:ap-northeast-1:*:identity/contact@lsklab.com"
         ]
       },
       {
         "Sid": "SESConfigurationAccess",
         "Effect": "Allow",
         "Action": [
           "ses:GetSendQuota",
           "ses:GetSendStatistics",
           "ses:GetIdentityVerificationAttributes"
         ],
         "Resource": "*"
       }
     ]
   }
   ```

### セキュリティ考慮事項

#### 最小権限の原則
- デプロイユーザーには必要最小限の権限のみ付与
- Lambda実行ロールには `AmazonSESFullAccess` ではなく、カスタムポリシーでSES権限を制限

#### リソース制限
- Lambda関数名とIAMロール名を固定化
- SESアイデンティティを特定メールアドレスに制限
- API Gatewayリソースをリージョンと関数に限定

#### アカウントセキュリティ
- AWS CLIユーザーにはMFAの有効化を推奨
- デプロイ用アクセスキーの定期的なローテーション
- CloudTrailでAPIコールの監査ログを記録

---

## ✅ 注意点

* Lambda IAM ロールには SES 送信権限を付与すること
* SES の送信元・送信先メールは事前に検証 (Verify) すること
* CloudWatch Logs の保存期間を適切に設定すること
* API Gateway は CORS 完全対応 (Access-Control-Allow-Origin) すること
* 本番環境では SES サンドボックスの制限解除を申請すること

---

## 🛠 今後の拡張候補

* CAPTCHA 検証 (Bot 対策)
* GitHub Actions による自動デプロイ
* CloudFront + Lambda\@Edge 構成
* SES の多言語対応テンプレート
