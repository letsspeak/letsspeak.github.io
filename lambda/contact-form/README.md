# Contact Form Lambda Function

AWS Lambda関数を使用したお問い合わせフォームのバックエンド実装です。

## 📋 概要

- **目的**: GitHub Pagesサイトからのお問い合わせをAWS SESで送信
- **言語**: TypeScript
- **ランタイム**: Node.js 18.x
- **サービス**: AWS Lambda + API Gateway + SES

## 🚀 デプロイ方法

### 1. 環境変数の設定

```bash
cp .env.sample .env
# .envファイルを適切に編集
```

### 2. Lambda関数のデプロイ

```bash
cd scripts
./deploy-contact-form.sh
```

### 3. API Gatewayの設定

```bash
# api-gateway-setup.jsonを使用してAPI Gatewayを設定
# AWSコンソールまたはCLIで実行
```

## ⚙️ 必要な設定

### AWS IAM権限

Lambda実行ロールに以下の権限が必要です：

- `AWSLambdaBasicExecutionRole`
- `AmazonSESFullAccess`

### Amazon SES設定

1. 送信元メールアドレスの検証
2. 受信先メールアドレスの検証（サンドボックス環境の場合）
3. 本番環境では送信制限の解除申請

## 📨 API仕様

### エンドポイント

```
POST /contact
```

### リクエスト例

```json
{
  "name": "大宮 将嗣",
  "email": "example@example.com",
  "message": "お問い合わせ内容..."
}
```

### レスポンス例

成功時:
```json
{
  "status": "ok"
}
```

エラー時:
```json
{
  "error": "エラーメッセージ"
}
```

## 🔧 開発とテスト

### ローカルビルド

```bash
npm install
npm run build
```

### パッケージ作成

```bash
npm run package
```

## 🌍 CORS設定

以下のオリジンからのアクセスを許可：

- `https://letsspeak.github.io`
- `http://localhost:5173` (開発環境)
- `http://localhost:5174` (開発環境)

## 📊 監視とログ

- CloudWatch Logsでログを確認
- エラーや実行状況を監視
- 必要に応じてアラーム設定

## 🔒 セキュリティ考慮事項

- 入力値検証（名前、メール、メッセージ）
- CORS設定による不正アクセス防止
- SESの送信制限活用
- 機密情報の環境変数管理

## 🔧 トラブルシューティング

### よくある問題

1. **SESでメール送信エラー**
   - メールアドレスの検証状況を確認
   - 送信制限を確認

2. **CORS エラー**
   - オリジンの設定を確認
   - API GatewayのCORS設定を確認

3. **IAM権限エラー**
   - Lambda実行ロールの権限を確認
   - SESアクセス権限を確認

### ログの確認

```bash
aws logs describe-log-groups --log-group-name-prefix "/aws/lambda/letsspeak-contact-form"
aws logs get-log-events --log-group-name "/aws/lambda/letsspeak-contact-form" --log-stream-name [STREAM_NAME]
```

## 📝 今後の改善案

- [ ] reCAPTCHA統合でBot対策
- [ ] メール送信テンプレート化
- [ ] 送信履歴の記録（DynamoDB）
- [ ] 自動返信機能
- [ ] レート制限の実装