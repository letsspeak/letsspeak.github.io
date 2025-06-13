# docs

## 参考

- AIに聞いた基本構成のベストプラクティスは下記の通り(AIにコード書かせる可能性を加味して準拠）

```
docs/
│── specifications/             # 要件定義・仕様書
│   ├── requirements.md         # 要件定義書
│   ├── functional_spec.md      # 機能仕様書
│   ├── non_functional_spec.md  # 非機能要件
│   ├── user_stories.md         # ユーザーストーリー
│   ├── use_cases.md            # ユースケース図・シナリオ
│   ├── business_rules.md       # 業務ルール
│── architecture/               # システムアーキテクチャ・設計
│   ├── system_overview.md      # システム全体の概要
│   ├── infra_diagram.drawio    # インフラ構成図
│   ├── database_schema.md      # データベース設計
│   ├── component_diagram.md    # コンポーネント図
├── branding/                   # アプリのブランド・ビジュアル設計全般
│   ├── icon.md                 # アプリアイコンの仕様・配置ルールなど
│   ├── colors.md               # イメージカラー、配色ルール
│   └── logo.md                 # ロゴバリエーションや使用例（任意）
│── api/                        # API仕様書・Swagger/OpenAPI定義
│   ├── openapi.yaml            # OpenAPI仕様 (Swagger)
│   ├── rest_api.md             # REST APIの概要
│   ├── graphql_api.md          # GraphQL APIの概要
│── ui/                         # 画面一覧・デザイン関連の資料
│   ├── screen_list.md          # 画面一覧
│   ├── wireframes/             # ワイヤーフレーム（画像/PDF）
│   ├── mockups/                # モックアップ（画像/PDF）
│   ├── ui_guidelines.md        # UIルール
│── frontend/                   # フロントエンド関連のドキュメント
│   ├── ui_guidelines.md        # UI/UXルール
│   ├── component_structure.md  # Vue/Reactのコンポーネント構成
│── backend/                    # バックエンド関連のドキュメント
│   ├── architecture.md         # バックエンドの構成
│   ├── auth_flow.md            # 認証フロー
│── infrastructure/             # 開発インフラ（ローカル/クラウド）の設計・運用
│   ├── overview.md             # インフラ全体の構成概要（ローカル/本番など）
│   ├── local_dev_env.md        # ローカル開発環境（Docker、Vite、DBなど）
│   ├── container_rules.md      # Dockerコンテナの運用ルール（再起動、永続化など）
│   ├── volumes_and_networks.md # ボリューム、ネットワーク構成と共有ルール
│   ├── troubleshooting.md      # よくあるエラーとその対処法（Vite, DB, Docker 等）
│   ├── dev_rules.md            # インフラ作業時のルール
│   ├── aws_resources.md        # 利用するAWSサービス一覧と作成物/目的
│   ├── aws_policies.md         # 作成済みのAWS IAMポリシーの詳細
│   ├── vpc_config.md           # VPC・Subnet・AZ・NAT構成の詳細
│   ├── route_config.md         # ルートテーブル、ルーティングルールの定義
│   ├── security_groups.md      # セキュリティグループのルールと意図
│   ├── cost_estimation.md      # AWS Pricing Calculatorなどに基づいたコスト見積
│   ├── terraform_structure.md  # IaC構成（Terraformのモジュール構成など）※IaC利用時のみ
│   ├── infra_worklog.md        # インフラ作業ログ（インフラの変更履歴を記録
│── environment/                # 環境構成
│   ├── overview.md             # 環境の種類と目的、各環境のドメイン名・APIのベースURLなど
│   ├── feature_flags.md        # 環境ごとの機能ON/OFF（ベータ機能、ステージング専用機能など）
│   ├── mobile_identifiers.md   # モバイルアプリのBundle ID
│   ├── env_vars.md             # 各環境で使われる.env変数のキーと意味（機密値は含めない）
│   ├── credentials_policy.md   # APIキー・シークレット等の管理方針（保存先・アクセス権・方針）
│   ├── deployment_targets.md   # ECSクラスタ名、S3バケット名、デプロイ対象など環境ごとの接続先
│   ├── external_services.md    # Firebase、Auth0、Sentryなど外部サービスごとの設定差異や連携情報
├── ci-cd/                      # CI/CD
│   ├── overview.md             # CI/CD全体の概要
│   ├── pipeline-structure.md   # パイプラインのステージ・ジョブ構成説明
│   ├── gitlab-ci.md            # GitLab CIに関する設定詳細（例：.gitlab-ci.yml解説）
│   ├── deployment.md           # 本番・ステージング等のデプロイ手順
│   ├── runners.md              # GitLab Runnerや実行環境の設定
│   └── troubleshooting.md      # トラブル時の対応方法・FAQ
│── deployment/                 # デプロイ・運用関連
│   ├── deployment_flow.md      # デプロイ手順（CI/CD連携、手動運用フロー）
│   ├── ci_cd.md                # CI/CD 設定
│   ├── docker.md               # Dockerコンテナの構成・運用
│   ├── env_config.md           # 環境変数設定
│── operations/                 # 運用・監視・デプロイ
│   ├── backup_policy.md        # RDS/S3等のバックアップ方針とリテンション
│   ├── monitoring.md           # CloudWatchログ・メトリクスの設定内容
│   ├── alert_policy.md         # アラート条件と通知ルート（例：CPU 90%超 → Slack）
│   ├── runbook.md              # 障害対応・手順書・再起動手順など
│   ├── aws_cost_tagging.md     # AWSのコスト分析の手順
│── guides/                     # 開発者向けのガイド
│   ├── project_overview.md     # 案件の背景・目的・概要（プロジェクト全体の説明）
│   ├── onboarding.md           # 新規開発者向けのセットアップ・参加手順（オンボーディング）
│   ├── team_guidelines.md      # チーム内の開発ルール、命名規則、レビュー方針など
│   ├── tech_stack.md           # 採用技術スタックとその理由（Laravel, React, Docker など）
│   ├── faq.md                  # よくある質問とその回答
│   ├── setup.md                # 初回セットアップ手順
│   ├── coding_style.md         # コーディング規約
│   ├── debugging.md            # デバッグ方法
│── roadmap.md                  # ロードマップ
│── README.md                   # `docs/` ディレクトリの説明
```
