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

## ✅ 注意点

* Lambda IAM は SES 送信権限を持つこと (AmazonSESFullAccess)
* SES の送信元・送信先メールは事前に証明
* CloudWatch Logs の余分な保存を防ぐ
* API Gateway は CORS 完全対応 (Access-Control-Allow-Origin)

---

## 🛠 今後の拡張候補

* CAPTCHA 検証 (Bot 対策)
* GitHub Actions による自動デプロイ
* CloudFront + Lambda\@Edge 構成
* SES の多言語対応テンプレート
