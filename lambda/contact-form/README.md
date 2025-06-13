# Contact Form Lambda Function

AWS Lambda関数を使用したお問い合わせフォームのバックエンド実装です。

## 📋 概要

- **目的**: GitHub Pagesサイトからのお問い合わせをAWS SESで送信
- **言語**: TypeScript
- **ランタイム**: Node.js 18.x
- **サービス**: AWS Lambda + API Gateway + SES

## 🚀 デプロイ方法

### 1. 事前準備

**AWS CLIの設定確認**
```bash
aws configure list
# 適切な認証情報とリージョン（ap-northeast-1推奨）が設定されていることを確認
```

**Amazon SESでのメールアドレス検証**
1. AWSコンソール → Amazon SES
2. リージョンを `ap-northeast-1` に設定
3. `contact@lsklab.com` を検証（Verify）
4. 受信用メールアドレスも検証（サンドボックス環境の場合）

### 2. Lambda関数のデプロイ

**プロジェクトルートから実行**
```bash
# プロジェクトルートにいることを確認
pwd  # /path/to/letsspeak.github.io

# デプロイスクリプトの実行
./scripts/deploy-contact-form.sh
```

**デプロイされる内容**
- IAMロール: `lambda-contact-form-role`
- Lambda関数: `contact-form-handler`
- 環境変数の自動設定

### 3. API Gatewayの設定（手動）

デプロイスクリプト実行後、AWSコンソールで以下を設定：

1. **API作成**
   - API Gateway → REST API作成
   - API名: `contact-form-api`

2. **リソース作成**
   - ルートリソース → リソース作成
   - リソース名: `contact`

3. **メソッド作成**
   - `/contact` → POST メソッド作成
   - 統合タイプ: Lambda プロキシ統合
   - Lambda関数: `contact-form-handler`

4. **CORS有効化**
   - `/contact` → CORSの有効化
   - Origin: `https://letsspeak.github.io,https://lsklab.com`

5. **デプロイ**
   - API のデプロイ → ステージ: `prod`
   - エンドポイントURLを記録

## ⚙️ 環境変数設定

Lambda関数では以下の環境変数が自動設定されます：

| 変数名 | デフォルト値 | 説明 |
|-------|-------------|------|
| `AWS_REGION` | `ap-northeast-1` | AWSリージョン |
| `FROM_EMAIL` | `contact@lsklab.com` | SES送信元メールアドレス |
| `TO_EMAIL` | `contact@lsklab.com` | お問い合わせ受信先メールアドレス |

**注意**: `.env.sample`ファイルは参考用です。実際の環境変数はデプロイスクリプトで自動設定されます。

## 🔐 必要な権限

### AWS CLI使用ユーザーの権限

デプロイを実行するIAMユーザーに必要な権限：

- `AWSLambdaFullAccess` (Lambda関数の作成・更新)
- `IAMFullAccess` (IAMロールの作成)
- `AmazonAPIGatewayAdministrator` (API Gateway設定)
- `AmazonSESFullAccess` (SESの利用)

### Lambda実行ロール

デプロイスクリプトで自動作成される`lambda-contact-form-role`に付与される権限：

- `AWSLambdaBasicExecutionRole` (CloudWatch Logs書き込み)
- `AmazonSESFullAccess` (メール送信)

### Amazon SES設定

**必須設定**
1. **リージョン**: `ap-northeast-1` (東京)
2. **検証済みメールアドレス**:
   - 送信元: `contact@lsklab.com`
   - 受信先: `contact@lsklab.com` (または実際の受信用メール)
3. **サンドボックス制限**: 検証済みアドレス間でのみ送信可能
4. **本番移行**: 送信制限解除申請が必要（実際の運用時）

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
- `https://lsklab.com`
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
# ログ グループの確認
aws logs describe-log-groups --log-group-name-prefix "/aws/lambda/contact-form-handler"

# 最新のログストリームを取得
aws logs describe-log-streams \
  --log-group-name "/aws/lambda/contact-form-handler" \
  --order-by LastEventTime --descending --max-items 1

# ログイベントの確認
aws logs get-log-events \
  --log-group-name "/aws/lambda/contact-form-handler" \
  --log-stream-name [STREAM_NAME]
```

### テスト実行

```bash
# API Gateway エンドポイント経由でテスト
curl -X POST "https://[API-ID].execute-api.ap-northeast-1.amazonaws.com/prod/contact" \
  -H "Content-Type: application/json" \
  -d '{
    "name": "テスト太郎",
    "email": "test@lsklab.com",
    "message": "これはテストメッセージです。"
  }'

# 期待されるレスポンス: {"status":"ok"}
```

## 📝 今後の改善案

- [ ] reCAPTCHA統合でBot対策
- [ ] メール送信テンプレート化
- [ ] 送信履歴の記録（DynamoDB）
- [ ] 自動返信機能
- [ ] レート制限の実装