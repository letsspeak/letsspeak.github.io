# 大宮将嗣 Portfolio Website

AI・機械学習エンジニア 大宮将嗣のポートフォリオサイトです。

## 🚀 技術スタック

- **フロントエンド**: React 18 + TypeScript
- **スタイリング**: Tailwind CSS
- **ルーティング**: React Router
- **ビルドツール**: Vite
- **デプロイ**: GitHub Pages

## 📦 開発環境のセットアップ

```bash
# 依存関係のインストール
npm install

# 開発サーバー起動
npm run dev

# プロダクションビルド
npm run build

# GitHub Pagesへデプロイ
npm run deploy
```

## 🏗️ プロジェクト構成

```
src/
├── components/         # 共通コンポーネント
│   └── Layout.tsx     # メインレイアウト
├── pages/             # ページコンポーネント
│   ├── Home.tsx       # ホームページ
│   ├── About.tsx      # プロフィール
│   ├── Skills.tsx     # スキル一覧
│   ├── Projects.tsx   # プロジェクト一覧
│   ├── ProjectDetail.tsx # プロジェクト詳細
│   └── Contact.tsx    # お問い合わせ
├── data/              # データファイル
│   └── projects.ts    # プロジェクトデータ
└── App.tsx           # メインアプリ
```

## 🎯 機能

- ✅ レスポンシブデザイン（PC/モバイル対応）
- ✅ プロジェクト詳細ページ
- ✅ スキル一覧（可視化付き）
- ✅ お問い合わせ情報
- ⏳ 言語切り替え（日本語/英語）- 今後実装予定

## 📱 対応ブラウザ

- Chrome (最新版)
- Firefox (最新版)
- Safari (最新版)
- Edge (最新版)

## 🚢 デプロイ

### フロントエンド (GitHub Pages)

本サイトはGitHub Pagesを使用してデプロイされています。

- **本番URL**: https://letsspeak.github.io
- **カスタムドメイン**: https://lsklab.com (設定予定)

```bash
# フロントエンドのデプロイ
npm run deploy
```

### バックエンド (AWS Lambda)

お問い合わせフォーム機能はAWS Lambda + API Gateway + SESで実装されています。

#### 📋 事前準備

1. **AWS CLIのインストールと設定**
   ```bash
   # AWS CLIのインストール（未インストールの場合）
   # macOS: brew install awscli
   # Windows: AWS公式サイトからダウンロード
   
   # AWS CLIの設定
   aws configure
   # AWS Access Key ID、Secret Access Key、リージョン（ap-northeast-1推奨）を入力
   ```

2. **IAM権限の確認**
   
   AWS CLIで使用するIAMユーザーに以下の権限が必要です：
   - `AWSLambdaFullAccess` (Lambda関数の作成・更新)
   - `IAMFullAccess` (IAMロールの作成)
   - `AmazonAPIGatewayAdministrator` (API Gateway設定)
   - `AmazonSESFullAccess` (SESの利用)

3. **Amazon SESの事前設定**
   
   ```bash
   # AWSコンソールでSESにアクセス
   # 1. リージョンをap-northeast-1（東京）に設定
   # 2. 以下のメールアドレスを検証（Verify）
   ```
   
   検証が必要なメールアドレス：
   - **送信元**: `contact@lsklab.com`
   - **受信先**: `contact@lsklab.com` (または実際の受信用メール)
   
   **重要**: SESサンドボックス環境では検証済みメールアドレス間でのみ送信可能

#### 🚀 Lambda関数のデプロイ

**ステップ1**: プロジェクトルートから実行

```bash
# プロジェクトルートにいることを確認
pwd  # /path/to/letsspeak.github.io

# デプロイスクリプトの実行
./scripts/deploy-contact-form.sh
```

**ステップ2**: デプロイ結果の確認

デプロイが成功すると以下が自動作成されます：
- IAMロール: `lambda-contact-form-role`
- Lambda関数: `contact-form-handler`
- 必要な権限の設定

#### 🌐 API Gateway設定（手動）

Lambda関数のデプロイ後、AWS コンソールで API Gateway を設定します：

**ステップ1**: API作成
1. AWS コンソール → API Gateway
2. 「REST API」を選択
3. API名: `contact-form-api`
4. リージョン: `ap-northeast-1`

**ステップ2**: リソース作成
1. ルートリソース（/）を選択
2. 「アクション」→「リソースの作成」
3. リソース名: `contact`
4. リソースパス: `/contact`

**ステップ3**: メソッド作成
1. `/contact` リソースを選択
2. 「アクション」→「メソッドの作成」
3. `POST` を選択
4. 統合タイプ: Lambda プロキシ統合
5. Lambda 関数: `contact-form-handler`

**ステップ4**: CORS設定
1. `/contact` リソースを選択
2. 「アクション」→「CORS の有効化」
3. 以下を設定：
   ```
   Access-Control-Allow-Origin: https://letsspeak.github.io,https://lsklab.com
   Access-Control-Allow-Headers: Content-Type,X-Amz-Date,Authorization,X-Api-Key,X-Amz-Security-Token
   Access-Control-Allow-Methods: POST,OPTIONS
   ```

**ステップ5**: デプロイ
1. 「アクション」→「API のデプロイ」
2. デプロイされるステージ: `prod`
3. エンドポイントURLをメモ（例: `https://xxxxxxxxxx.execute-api.ap-northeast-1.amazonaws.com/prod`）

#### 🔗 フロントエンドとの連携

現在、フロントエンドのお問い合わせフォームはまだ実装されていません。
API Gatewayのエンドポイントが取得できたら、お問い合わせフォームコンポーネントで以下のように使用します：

```typescript
// 例: Contact.tsx での利用
const API_ENDPOINT = 'https://xxxxxxxxxx.execute-api.ap-northeast-1.amazonaws.com/prod/contact';

const submitForm = async (formData) => {
  const response = await fetch(API_ENDPOINT, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(formData)
  });
  return response.json();
};
```

#### 🧪 テスト方法

デプロイ後、以下のコマンドでテスト可能：

```bash
curl -X POST https://xxxxxxxxxx.execute-api.ap-northeast-1.amazonaws.com/prod/contact \
  -H "Content-Type: application/json" \
  -d '{"name":"テスト太郎","email":"test@example.com","message":"テストメッセージです"}'
```

#### 📚 詳細ドキュメント

より詳細な情報は以下を参照：
- `lambda/contact-form/README.md` - Lambda関数の詳細
- `scripts/api-gateway-setup.json` - API Gateway設定の参考

## 📄 ライセンス

MIT License
