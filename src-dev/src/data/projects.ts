export interface Project {
  id: string
  title: string
  description: string
  longDescription: string
  technologies: string[]
  period: string
  role: string
  status: 'completed' | 'in-progress' | 'planned'
  githubUrl?: string
  demoUrl?: string
  imageUrl?: string
  challenges: string[]
  achievements: string[]
}

export const projects: Project[] = [
  {
    id: 'task-management-service',
    title: 'タスク・人材管理サービス開発',
    description: 'TypeScript + React + AWSを活用したタスク・人材管理Webサービスの開発支援',
    longDescription: 'プロジェクト運用支援および要件定義を担当し、海外メンバーとの協業により効率的な開発体制を構築しました。AWSクラウドサービスを活用したスケーラブルなシステム設計を実現しています。',
    technologies: ['TypeScript', 'React', 'AWS', 'Node.js'],
    period: '2024年6月 - 2025年1月',
    role: 'PMO',
    status: 'completed',
    challenges: [
      '海外メンバーとの効果的なコミュニケーション体制の構築',
      'スケーラブルなクラウドアーキテクチャの設計',
      '要件定義からリリースまでの一貫したプロジェクト管理'
    ],
    achievements: [
      '多国籍チームでの円滑なプロジェクト運営を実現',
      'AWS活用による高可用性システムの構築',
      '予定通りのリリーススケジュール達成'
    ]
  },
  {
    id: 'foreign-worker-app',
    title: '外国人労働者 登録・勤怠管理アプリ',
    description: 'Swift + Kotlin + NFC技術を活用したマルチプラットフォーム勤怠管理システム',
    longDescription: 'iOS/Androidアプリおよびバックエンドシステムの開発において、仕様策定からNFC読み取りロジック実装まで技術的リーダーシップを発揮。多国籍チームのタスク管理と技術支援を担当しました。',
    technologies: ['Swift', 'Kotlin', 'Laravel', 'Vue3', 'NFC', 'PHP'],
    period: '2025年2月 - 2025年6月',
    role: 'PM',
    status: 'completed',
    challenges: [
      'NFC技術を活用した勤怠記録システムの実装',
      '多言語対応とユーザビリティの両立',
      '多国籍チームでの効率的なタスク管理'
    ],
    achievements: [
      'NFC読み取り精度99%以上を実現',
      'iOS/Android両プラットフォームでの同時リリース',
      '多国籍チームでの円滑なプロジェクト推進'
    ]
  },
  {
    id: 'insurance-registration-site',
    title: '保険加入者登録 Webサイト開発',
    description: 'Java + Springフレームワークを使用したセキュアな保険加入者登録システム',
    longDescription: 'プロジェクト運用およびセキュリティ診断支援を担当し、Java研修講師としてチームの技術力向上にも貢献しました。高度なセキュリティ要件を満たすWebシステムの構築を実現しています。',
    technologies: ['Java', 'Spring', 'MySQL', 'Tomcat'],
    period: '2024年2月 - 2024年5月',
    role: 'PMO',
    status: 'completed',
    challenges: [
      '高度なセキュリティ要件への対応',
      'プロジェクトメンバーのJavaスキル向上支援',
      '品質とスケジュールの両立'
    ],
    achievements: [
      'セキュリティ診断での脆弱性ゼロを達成',
      'Java研修によるチーム全体のスキル向上',
      '予定通りのシステムリリース完了'
    ]
  },
  {
    id: 'fan-site-ios-app',
    title: '新規ファンサイト iOSアプリ開発',
    description: 'Swift を使用したファンサイト向けiOSアプリの新規開発',
    longDescription: '新人アーティスト向けファンサイトアプリをゼロベースで開発。チャットUIなどの独自機能を実装し、ファンとアーティストをつなぐプラットフォームを構築しました。',
    technologies: ['Swift', 'iOS', 'UIKit', 'Core Data'],
    period: '2021年12月 - 2022年2月',
    role: 'SE',
    status: 'completed',
    challenges: [
      'リアルタイムチャット機能の実装',
      'ユーザーエンゲージメント向上のUI設計',
      '短期間でのゼロベース開発'
    ],
    achievements: [
      'チャットUIなどの独自機能をゼロベース実装',
      'App Storeでの無事リリース完了',
      '高いユーザー評価を獲得'
    ]
  },
  {
    id: 'tablet-pos-app',
    title: '店頭タブレットアプリ開発',
    description: 'iOS タブレット向けPOSアプリの刷新およびマルチタスク対応',
    longDescription: '店頭で使用するiOSタブレットアプリの全面刷新を担当。マルチタスク対応のUI改修により、店舗スタッフの業務効率化を実現しました。',
    technologies: ['Swift', 'iOS', 'UIKit', 'Core Data'],
    period: '2020年4月 - 2021年5月',
    role: 'SE',
    status: 'completed',
    challenges: [
      'レガシーアプリの全面刷新',
      'マルチタスク環境での安定動作の実現',
      '店舗運用に影響しないリリーススケジュール'
    ],
    achievements: [
      'マルチタスク対応により業務効率20%向上',
      '安定性向上によりクラッシュ率90%削減',
      'スムーズな店舗展開を支援'
    ]
  },
  {
    id: 'maas-system',
    title: 'MaaS システムの開発',
    description: 'Swift を使用したMobility as a Service システムのiOSアプリ開発',
    longDescription: 'マスターデータ投入ツールの開発から、エンドユーザー向けiOSアプリの開発・リリースまでを担当。次世代モビリティサービスの基盤構築に貢献しました。',
    technologies: ['Swift', 'iOS', 'REST API', 'Core Location'],
    period: '2019年7月 - 2020年1月',
    role: 'SE',
    status: 'completed',
    challenges: [
      '位置情報を活用したリアルタイム機能の実装',
      'マスターデータ管理ツールの効率化',
      '複雑な料金計算ロジックの実装'
    ],
    achievements: [
      'App Storeでの正式リリース完了',
      'マスターデータ投入の自動化により作業時間80%削減',
      'ユーザーフレンドリーなUI/UXを実現'
    ]
  }
]