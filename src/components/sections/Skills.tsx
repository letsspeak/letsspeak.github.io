import React from 'react'
import { projects } from '../../data/projects'
import { careerYears } from '../../data/profile'

// 年数は職務経歴書・求人サービスの登録値と揃えている。習熟度バーは根拠を示せないため廃止し、
// 年数と使用した案件名で示す。
interface Skill {
  name: string
  level: 0 | 1 | 2 | 3 | 4 | 5 // 年数の目安: 1=1年未満, 2=1〜2年, 3=3〜4年, 4=5〜9年, 5=10年以上, 0=自習中
  years: string
  usedIn: string[] // 使用した案件・個人開発
}

// Tailwind にクラス名を認識させるため、動的生成せず定数で持つ
const LEVEL_DOT_COLOR: Record<number, string> = {
  0: 'bg-gray-200',
  1: 'bg-gray-400',
  2: 'bg-sky-400',
  3: 'bg-blue-500',
  4: 'bg-indigo-600',
  5: 'bg-violet-600',
}

const LEVEL_LEGEND = [
  { level: 1, label: '1年未満' },
  { level: 2, label: '1〜2年' },
  { level: 3, label: '3〜4年' },
  { level: 4, label: '5〜9年' },
  { level: 5, label: '10年以上' },
]

const LevelDots: React.FC<{ level: number }> = ({ level }) => (
  <span className="inline-flex items-center gap-1" aria-label={`経験レベル ${level} / 5`}>
    {[1, 2, 3, 4, 5].map((i) => (
      <span
        key={i}
        className={`w-2.5 h-2.5 rounded-full ${i <= level ? LEVEL_DOT_COLOR[level] : 'bg-gray-200'}`}
      />
    ))}
  </span>
)

const TECH_STACK = [
  { label: '言語', color: 'bg-indigo-100 text-indigo-800', items: ['Swift', 'TypeScript', 'JavaScript', 'Kotlin', 'Java', 'Ruby', 'C#', 'Objective-C', 'PHP', 'C', 'Python', 'SQL', 'LookML', 'SAS', 'PowerShell'] },
  { label: 'フレームワーク', color: 'bg-emerald-100 text-emerald-800', items: ['Vue', 'React', 'Rails', 'Spring', 'Redux', 'Laravel', 'FuelPHP', 'jQuery', 'Backbone.js', 'Express', 'Next.js'] },
  { label: 'ソフトウェア', color: 'bg-amber-100 text-amber-800', items: ['Git', 'Docker', 'Vim', 'MySQL', 'Redis', 'Eclipse', 'Looker', 'KARTE', 'kintone', 'Claude Code'] },
  { label: 'クラウド', color: 'bg-sky-100 text-sky-800', items: ['Amazon EC2', 'AWS ECS', 'Route 53', 'S3', 'Lambda', 'GCP', 'BigQuery', 'Firebase'] },
]

interface SkillCategory {
  name: string
  skills: Skill[]
}

const skillCategories: SkillCategory[] = [
  {
    name: 'モバイル開発',
    skills: [
      { name: 'iOS（UIKit）', level: 5, years: '5年以上', usedIn: ['MaaS', '店頭タブレット', 'ファンサイト', '勤怠管理アプリ'] },
      { name: 'Swift', level: 3, years: '3年', usedIn: ['MaaS', '店頭タブレット', 'ファンサイト', '勤怠管理アプリ', '個人開発'] },
      { name: 'Objective-C', level: 3, years: '2〜3年', usedIn: ['ソーシャルゲーム開発', 'スマホゲーム共同開発'] },
      { name: 'Kotlin', level: 1, years: '1年未満', usedIn: ['勤怠管理アプリ'] },
      { name: 'Android', level: 1, years: '1年未満〜', usedIn: ['テスト自動化', '流通システム', '勤怠管理アプリ'] },
    ],
  },
  {
    name: 'Web フロントエンド',
    skills: [
      { name: 'TypeScript', level: 3, years: '3年', usedIn: ['タスク・人材管理', '勤怠管理アプリ', '個人開発'] },
      { name: 'JavaScript', level: 4, years: '5年', usedIn: ['保険加入者登録サイト', '個人開発'] },
      { name: 'Vue', level: 2, years: '1〜2年', usedIn: ['タスク・人材管理', '勤怠管理アプリ'] },
      { name: 'React', level: 2, years: '1年', usedIn: ['個人開発（SSR サイト）'] },
      { name: 'Next.js', level: 1, years: '1年未満', usedIn: ['個人開発'] },
    ],
  },
  {
    name: 'バックエンド',
    skills: [
      { name: 'PHP', level: 3, years: '3年', usedIn: ['社内システム保守', '保険加入者登録サイト', 'タスク・人材管理', '勤怠管理アプリ'] },
      { name: 'Laravel', level: 2, years: '1年', usedIn: ['保険加入者登録サイト', 'タスク・人材管理', '勤怠管理アプリ'] },
      { name: 'Java', level: 3, years: '3年', usedIn: ['テスト自動化', '就活支援サイト', '予約システム', '流通システム', '社内システム保守'] },
      { name: 'Spring Framework', level: 2, years: '1年', usedIn: ['就活支援サイト', '予約システム'] },
      { name: 'Python', level: 2, years: '1年', usedIn: ['金融機関向け業務自動化'] },
    ],
  },
  {
    name: 'データ・インフラ',
    skills: [
      { name: 'SQL', level: 4, years: '7年', usedIn: ['流通システム', '保険加入者登録サイト', '金融機関向け分析基盤 ほか'] },
      { name: 'MySQL', level: 4, years: '5年', usedIn: ['ソーシャルゲーム運用', '社内システム保守', '勤怠管理アプリ'] },
      { name: 'PostgreSQL', level: 2, years: '1年', usedIn: ['流通システム', '保険加入者登録サイト', 'タスク・人材管理'] },
      { name: 'Looker／LookML', level: 2, years: '1年', usedIn: ['金融機関向け分析基盤'] },
      { name: 'AWS', level: 3, years: '3年', usedIn: ['予約システム', '個人開発（ECS, CDK, Lambda）'] },
      { name: 'GCP', level: 2, years: '1年', usedIn: ['予約システム', '金融機関向け分析基盤（BigQuery）'] },
      { name: 'Docker', level: 3, years: '3年', usedIn: ['個人開発', '各案件の開発環境'] },
      { name: 'Git', level: 5, years: '10年以上', usedIn: ['全案件'] },
    ],
  },
  {
    name: 'AI 活用',
    skills: [
      { name: 'Claude Code', level: 2, years: '1年', usedIn: ['金融機関向け業務支援', '勤怠管理アプリ（AI 前提の開発環境）', '個人開発'] },
      { name: '生成AI 活用（業務支援ツール構築）', level: 2, years: '1年', usedIn: ['金融機関向け業務支援'] },
      { name: 'LLM API／RAG／エージェント', level: 0, years: '自習中', usedIn: ['自習プロダクト（2026年11月公開予定）'] },
    ],
  },
]

const Skills: React.FC = () => {
  const years = careerYears()
  const skillCount = skillCategories.reduce((n, c) => n + c.skills.length, 0)

  return (
    <section id="skills" className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white shadow rounded-lg">
          <div className="px-4 py-5 sm:p-6">
            <h1 className="text-3xl font-bold text-gray-900 mb-2">スキル一覧</h1>
            <p className="text-sm text-gray-500 mb-4">
              年数は職務経歴書と同じ値です。各スキルの下に、実際に使用した案件を示しています。
            </p>
            <div className="flex flex-wrap items-center gap-x-5 gap-y-2 mb-8 text-xs text-gray-500">
              {LEVEL_LEGEND.map((item) => (
                <span key={item.level} className="inline-flex items-center gap-2">
                  <LevelDots level={item.level} />
                  {item.label}
                </span>
              ))}
            </div>

            <div className="space-y-8">
              {skillCategories.map((category) => (
                <div key={category.name} className="bg-gray-50 rounded-lg p-6">
                  <h2 className="text-xl font-semibold text-gray-900 mb-4">{category.name}</h2>
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                    {category.skills.map((skill) => (
                      <div key={skill.name} className="bg-white p-4 rounded-lg shadow-sm">
                        <h3 className="font-medium text-gray-900 mb-1">{skill.name}</h3>
                        <div className="flex items-center gap-2 mb-3">
                          <LevelDots level={skill.level} />
                          <span className="text-sm font-semibold text-gray-700 whitespace-nowrap">{skill.years}</span>
                        </div>
                        <div className="flex flex-wrap gap-1">
                          {skill.usedIn.map((name) => (
                            <span key={name} className="bg-gray-100 text-gray-600 text-xs px-2 py-0.5 rounded">
                              {name}
                            </span>
                          ))}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-8 bg-gray-50 border border-gray-200 rounded-lg p-6">
              <h2 className="text-lg font-semibold text-gray-900 mb-1">技術スタック</h2>
              <p className="text-xs text-gray-500 mb-4">職務経歴書に記載している使用経験のある技術の一覧です。</p>
              <div className="space-y-3">
                {TECH_STACK.map((group) => (
                  <div key={group.label} className="flex flex-col sm:flex-row sm:items-start gap-2 sm:gap-4">
                    <span className={`inline-flex self-start whitespace-nowrap text-xs font-semibold px-2.5 py-1 rounded-full sm:w-32 sm:justify-center ${group.color}`}>
                      {group.label}
                    </span>
                    <div className="flex flex-wrap gap-1.5">
                      {group.items.map((item) => (
                        <span key={item} className="bg-white border border-gray-200 text-gray-700 text-xs px-2 py-1 rounded">
                          {item}
                        </span>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="text-center">
                <div className="text-3xl font-bold text-primary-600">{years}年</div>
                <div className="text-sm font-medium text-gray-500">システム開発（2009年8月〜）</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-primary-600">{projects.length}件</div>
                <div className="text-sm font-medium text-gray-500">参画案件</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-primary-600">{skillCount}</div>
                <div className="text-sm font-medium text-gray-500">実務で使用した主要技術</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Skills
