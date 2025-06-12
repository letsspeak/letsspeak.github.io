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
    id: 'ai-image-recognition',
    title: 'AI画像認識システム',
    description: 'TensorFlowを活用した高精度な画像認識・分類システムの開発',
    longDescription: '機械学習技術を活用して、製品画像の自動分類・品質判定を行うシステムを開発しました。畳み込みニューラルネットワーク（CNN）を用いて、高精度な画像認識を実現し、製造業での品質管理業務の効率化に貢献しました。',
    technologies: ['Python', 'TensorFlow', 'OpenCV', 'Flask', 'PostgreSQL', 'Docker'],
    period: '2024年1月 - 2024年5月',
    role: 'メイン開発者',
    status: 'completed',
    githubUrl: 'https://github.com/letsspeak/ai-image-recognition',
    challenges: [
      '多様な画像条件に対応できる汎用的なモデルの構築',
      'リアルタイム処理要件への対応',
      '既存システムとの統合'
    ],
    achievements: [
      '分類精度95%以上を達成',
      '処理速度を従来比50%向上',
      '月間処理件数10万件を突破'
    ]
  },
  {
    id: 'portfolio-website',
    title: 'ポートフォリオWebサイト',
    description: 'React + TypeScript + Tailwind CSSで構築したレスポンシブなポートフォリオサイト',
    longDescription: 'モダンなWeb技術を活用して、技術者向けのポートフォリオサイトを開発しました。レスポンシブデザイン、高速な表示速度、SEO最適化を重視し、GitHub Pagesでの自動デプロイも実装しています。',
    technologies: ['React', 'TypeScript', 'Tailwind CSS', 'Vite', 'GitHub Pages'],
    period: '2024年6月',
    role: '個人開発',
    status: 'completed',
    githubUrl: 'https://github.com/letsspeak/letsspeak.github.io',
    demoUrl: 'https://letsspeak.github.io',
    challenges: [
      'モバイルファーストなレスポンシブデザインの実装',
      'パフォーマンス最適化',
      'SEO対策とアクセシビリティの向上'
    ],
    achievements: [
      'Lighthouse スコア90点以上を達成',
      'GitHub Pages自動デプロイ環境の構築',
      '複数デバイスでの表示確認・最適化完了'
    ]
  },
  {
    id: 'data-analysis-dashboard',
    title: 'データ分析ダッシュボード',
    description: 'PythonとStreamlitを使用したインタラクティブなデータ可視化ツール',
    longDescription: 'ビジネスデータの可視化・分析を行うためのWebダッシュボードを開発しました。Streamlitを活用してインタラクティブなグラフ表示、リアルタイムデータ更新、カスタムフィルタリング機能を実装しています。',
    technologies: ['Python', 'Streamlit', 'Pandas', 'Plotly', 'PostgreSQL', 'AWS'],
    period: '2023年10月 - 2023年12月',
    role: 'データエンジニア',
    status: 'completed',
    challenges: [
      '大量データのリアルタイム処理',
      'ユーザビリティの高いUI/UX設計',
      'データセキュリティの確保'
    ],
    achievements: [
      '日次100万レコードの処理を実現',
      'ダッシュボード利用率80%向上',
      'データ分析時間を60%短縮'
    ]
  },
  {
    id: 'ml-api-service',
    title: '機械学習APIサービス',
    description: 'FastAPIベースの機械学習モデル推論APIサービスの構築',
    longDescription: '訓練済み機械学習モデルをREST APIとして提供するマイクロサービスを開発しました。高いスループット、自動スケーリング、モデルバージョン管理機能を実装し、本番環境での安定運用を実現しています。',
    technologies: ['Python', 'FastAPI', 'scikit-learn', 'Docker', 'Kubernetes', 'AWS ECS'],
    period: '2023年6月 - 2023年9月',
    role: 'バックエンドエンジニア',
    status: 'completed',
    challenges: [
      '高負荷に対応できるスケーラブルなアーキテクチャ設計',
      'モデルのA/Bテスト環境の構築',
      '監視・ログ収集システムの整備'
    ],
    achievements: [
      '秒間1000リクエストの処理を達成',
      'API可用性99.9%を維持',
      'モデル更新の無停止デプロイを実現'
    ]
  },
  {
    id: 'chatbot-system',
    title: 'AI チャットボットシステム',
    description: '自然言語処理を活用したカスタマーサポート向けチャットボット',
    longDescription: 'Transformerモデルを活用して、顧客からの問い合わせに自動回答するチャットボットシステムを開発しました。意図認識、エンティティ抽出、回答生成の各モジュールを組み合わせ、高い回答精度を実現しています。',
    technologies: ['Python', 'Transformers', 'PyTorch', 'React', 'Node.js', 'MongoDB'],
    period: '2024年3月 - 進行中',
    role: 'AIエンジニア',
    status: 'in-progress',
    challenges: [
      '多様な問い合わせパターンへの対応',
      'コンテキストを考慮した会話の継続',
      '学習データの品質向上'
    ],
    achievements: [
      '回答精度85%を達成',
      '平均応答時間2秒以下を実現',
      '顧客満足度20%向上に貢献'
    ]
  }
]