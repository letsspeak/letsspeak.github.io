// サイト全体で共有する基本情報。数字はここだけを直せば全ページに反映される。
// 根拠のない数字は載せない方針（職務経歴書と一致させる）。

// システム開発の開始年月（2009年8月、ゲームのデバッグ業務 PL から）
export const CAREER_START = { year: 2009, month: 8 }

// 年ベースの年齢計算用。生年月日は公開しない。
// 誕生日が年の後半のため、暦年の大半で正しい値になるよう 1986 を基準にしている。
const AGE_BASE_YEAR = 1986

export const careerYears = (now: Date = new Date()): number => {
  const years = now.getFullYear() - CAREER_START.year
  return now.getMonth() + 1 >= CAREER_START.month ? years : years - 1
}

export const age = (now: Date = new Date()): number => now.getFullYear() - AGE_BASE_YEAR

export const profile = {
  name: '大宮 将嗣',
  nameKana: 'オオミヤ マサツグ',
  handle: 'letsspeak',
  github: 'https://github.com/letsspeak',
  blog: 'https://blog.lsklab.com',
  x: 'https://x.com/letsspeak',
  employment: 'フリーランス（個人事業主）',
  employmentNote: '2017年10月から断続的に、2019年3月以降は継続',
  specialties: 'フルスタック開発（iOS／Android／Web／バックエンド／DB／インフラ）、UI/UX、データ分析基盤（Looker）、AI活用開発（Claude Code）',
  education: '北海道大学工学部 中退',
  environment: 'macOS／iPhone／Vim',
}

// 個人開発（公開済みのもの）
export const personalProjects = [
  { year: '2016年', title: 'iOS向け ポケモンGO 個体値スキャナーアプリ', detail: 'App Store で公開' },
  { year: '2019年', title: 'Swift + React + Redux の SSR サイト', detail: 'CircleCI → AWS ECS への自動デプロイを構築' },
  { year: '2020年', title: 'Next.js + redux-observable の商品紹介サイト', detail: '' },
  { year: '2021年', title: 'AWS CDK + Lambda の自動投稿 BOT', detail: '感染者数を毎日ツイートする BOT' },
  { year: '2026年10〜11月', title: 'LLM API + RAG + エージェントの自習プロダクト', detail: 'Next.js + TypeScript + Claude API。2026年11月に公開予定', inProgress: true },
]
