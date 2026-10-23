# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Repository Overview

This is a GitHub Pages personal website/portfolio repository (`letsspeak.github.io`). The site is a modern React-based portfolio showcasing:

- AI・機械学習エンジニア 大宮将嗣 のポートフォリオサイト
- プロジェクト実績、技術スキル、経歴の紹介
- レスポンシブデザイン対応（PC/モバイル）
- 自動デプロイ環境

## Architecture

- **Frontend**: React 18 + TypeScript + Tailwind CSS
- **Build Tool**: Vite
- **Routing**: React Router v6
- **Hosting**: GitHub Pages (master branch root deployment)
- **CI/CD**: GitHub Actions for automated build and deployment

### Project Structure

```
src/
├── components/         # 共通コンポーネント
│   └── Layout.tsx     # メインレイアウト（ナビゲーション、フッター、お問い合わせへのフローティングボタン）
├── pages/             # ページコンポーネント
│   ├── Home.tsx       # ホームページ（最近の活動ハイライト）
│   ├── About.tsx      # プロフィール・自己紹介
│   ├── Skills.tsx     # スキル一覧（技術スタック・経験年数の可視化）
│   ├── Projects.tsx   # プロジェクト一覧
│   ├── ProjectDetail.tsx # プロジェクト詳細ページ
│   └── Contact.tsx    # お問い合わせ情報
├── data/              # データファイル
│   └── projects.ts    # プロジェクトデータ（TypeScript interface定義）
├── index.css          # Tailwind CSS設定
└── App.tsx           # メインアプリ（ルーティング設定）

docs/                  # 仕様書・要件定義
├── specifications/
│   ├── requirements.html # ポートフォリオサイト要件定義
│   └── README.md
├── backlog.html      # 残タスク一覧
└── resume.md         # 日本語履歴書（.gitignoreで除外）
```

## Development Commands

```bash
# 依存関係のインストール
npm install

# 開発サーバー起動（localhost:5173）
npm run dev

# TypeScriptコンパイル + プロダクションビルド
npm run build

# ビルド結果のプレビュー
npm run preview

# GitHub Pagesへ手動デプロイ（通常は自動実行）
npm run deploy
```

## Deployment

- **自動デプロイ**: `master`ブランチへのプッシュで GitHub Actions が自動実行
- **ワークフロー**: `.github/workflows/deploy-to-root.yml`
- **デプロイ先**: GitHub Pages（master ブランチルート）
- **URL**: https://letsspeak.github.io

### デプロイフロー

1. コード変更 → `git push origin master`
2. GitHub Actions がビルド実行
3. ビルド成果物を master ブランチルートに配置
4. GitHub Pages が自動更新

## Content Management

- **プロジェクト情報**: `src/data/projects.ts` で管理
- **個人情報**: 各ページコンポーネント内で直接編集
- **スキル情報**: `src/components/sections/Skills.tsx` 内のデータ配列
- **基本情報・個人開発**: `src/data/profile.ts`

## Important Notes

- **ドキュメントは HTML**: `docs/` 配下の文書は HTML で書く（README.md と CLAUDE.md のみ Markdown）。残タスクは `docs/backlog.html` に集約

- **掲載内容は職務経歴書と一致させる**: 数字・技術・年数は `src/data/profile.ts` と `src/data/projects.ts` が正。根拠のない数字（「20+」など）は載せない
- **Search Console の確認ファイル**: `public/google664e37fe6b3f93c4.html` は所有権確認用。削除しない
- **社名は載せない**: 所属・取引先は業種と契約形態のみ。リポジトリは公開されている
- **MIME対応**: ビルド済みファイルを直接配置してMIMEタイプ問題を回避
- **Vite の入口は `src/index.html`**: リポジトリ直下の `index.html` はデプロイ用 Action が置くビルド成果物なので編集しない（`vite.config.ts` の `root: 'src'` 参照）
- **お問い合わせフォーム**: Google フォームを `src/components/sections/Contact.tsx` の `GOOGLE_FORM_URL` で埋め込み（メール転送や Lambda などのサーバー側実装は撤去済み。contact@lsklab.com も廃止）

## Troubleshooting

### ビルドエラー
- TypeScript エラー: `npm run build` でエラー確認
- 依存関係: `npm install` で再インストール

### デプロイ失敗
- GitHub Actions ログ確認: `gh run list` → `gh run view [ID] --log`
- 強制プッシュ: `git push origin master --force`（競合時）