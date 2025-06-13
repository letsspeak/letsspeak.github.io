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

#### 事前準備

1. **AWSアカウントの設定**
   ```bash
   # AWS CLIの設定
   aws configure
   ```

2. **環境変数の設定**
   ```bash
   cd lambda/contact-form
   cp .env.sample .env
   # .envファイルを編集してメールアドレスなどを設定
   ```

3. **Amazon SESの設定**
   - AWSコンソールでSESにアクセス
   - 送信元メールアドレス（FROM_EMAIL）を検証
   - 受信先メールアドレス（TO_EMAIL）を検証
   - 本番環境では送信制限解除を申請

#### Lambda関数のデプロイ

```bash
# デプロイスクリプトの実行
cd scripts
./deploy-contact-form.sh
```

#### API Gatewayの設定

1. AWSコンソールでAPI Gatewayにアクセス
2. `scripts/api-gateway-setup.json`を使用してAPIを作成
3. Lambda関数との統合を設定
4. CORSを有効化
5. APIをデプロイしてエンドポイントURLを取得

#### フロントエンドとの連携

API GatewayのエンドポイントURLを取得後、フロントエンドのお問い合わせフォームで使用します。

詳細な手順は `lambda/contact-form/README.md` を参照してください。

## 📄 ライセンス

MIT License
