import React from 'react'
import { projects } from '../../data/projects'
import { careerYears } from '../../data/profile'

// 年数は職務経歴書・求人サービスの登録値と揃えている。習熟度バーは根拠を示せないため廃止し、
// 年数と使用した案件名で示す。
interface Skill {
  name: string
  years: string
  usedIn: string[] // 使用した案件・個人開発
}

interface SkillCategory {
  name: string
  skills: Skill[]
}

const skillCategories: SkillCategory[] = [
  {
    name: 'モバイル開発',
    skills: [
      { name: 'iOS（UIKit）', years: '5年以上', usedIn: ['MaaS', '店頭タブレット', 'ファンサイト', '勤怠管理アプリ'] },
      { name: 'Swift', years: '3年', usedIn: ['MaaS', '店頭タブレット', 'ファンサイト', '勤怠管理アプリ', '個人開発'] },
      { name: 'Objective-C', years: '2〜3年', usedIn: ['ソーシャルゲーム開発', 'スマホゲーム共同開発'] },
      { name: 'Kotlin', years: '1年未満', usedIn: ['勤怠管理アプリ'] },
      { name: 'Android', years: '1年未満〜', usedIn: ['テスト自動化', '流通システム', '勤怠管理アプリ'] },
    ],
  },
  {
    name: 'Web フロントエンド',
    skills: [
      { name: 'TypeScript', years: '3年', usedIn: ['タスク・人材管理', '勤怠管理アプリ', '個人開発'] },
      { name: 'JavaScript', years: '5年', usedIn: ['保険加入者登録サイト', '個人開発'] },
      { name: 'Vue', years: '1〜2年', usedIn: ['タスク・人材管理', '勤怠管理アプリ'] },
      { name: 'React', years: '1年', usedIn: ['個人開発（SSR サイト）'] },
      { name: 'Next.js', years: '1年未満', usedIn: ['個人開発'] },
    ],
  },
  {
    name: 'バックエンド',
    skills: [
      { name: 'PHP', years: '3年', usedIn: ['社内システム保守', '保険加入者登録サイト', 'タスク・人材管理', '勤怠管理アプリ'] },
      { name: 'Laravel', years: '1年', usedIn: ['保険加入者登録サイト', 'タスク・人材管理', '勤怠管理アプリ'] },
      { name: 'Java', years: '3年', usedIn: ['テスト自動化', '就活支援サイト', '予約システム', '流通システム', '社内システム保守'] },
      { name: 'Spring Framework', years: '1年', usedIn: ['就活支援サイト', '予約システム'] },
      { name: 'Python', years: '1年', usedIn: ['金融機関向け業務自動化'] },
    ],
  },
  {
    name: 'データ・インフラ',
    skills: [
      { name: 'SQL', years: '7年', usedIn: ['流通システム', '保険加入者登録サイト', '金融機関向け分析基盤 ほか'] },
      { name: 'MySQL', years: '5年', usedIn: ['ソーシャルゲーム運用', '社内システム保守', '勤怠管理アプリ'] },
      { name: 'PostgreSQL', years: '1年', usedIn: ['流通システム', '保険加入者登録サイト', 'タスク・人材管理'] },
      { name: 'Looker／LookML', years: '1年', usedIn: ['金融機関向け分析基盤'] },
      { name: 'AWS', years: '3年', usedIn: ['予約システム', '個人開発（ECS, CDK, Lambda）'] },
      { name: 'GCP', years: '1年', usedIn: ['予約システム', '金融機関向け分析基盤（BigQuery）'] },
      { name: 'Docker', years: '3年', usedIn: ['個人開発', '各案件の開発環境'] },
      { name: 'Git', years: '10年以上', usedIn: ['全案件'] },
    ],
  },
  {
    name: 'AI 活用',
    skills: [
      { name: 'Claude Code', years: '1年', usedIn: ['金融機関向け業務支援', '勤怠管理アプリ（AI 前提の開発環境）', '個人開発'] },
      { name: '生成AI 活用（業務支援ツール構築）', years: '1年', usedIn: ['金融機関向け業務支援'] },
      { name: 'LLM API／RAG／エージェント', years: '自習中', usedIn: ['自習プロダクト（2026年11月公開予定）'] },
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
            <p className="text-sm text-gray-500 mb-8">
              年数は職務経歴書と同じ値です。各スキルの下に、実際に使用した案件を示しています。
            </p>

            <div className="space-y-8">
              {skillCategories.map((category) => (
                <div key={category.name} className="bg-gray-50 rounded-lg p-6">
                  <h2 className="text-xl font-semibold text-gray-900 mb-4">{category.name}</h2>
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                    {category.skills.map((skill) => (
                      <div key={skill.name} className="bg-white p-4 rounded-lg shadow-sm">
                        <div className="flex justify-between items-baseline gap-2 mb-2">
                          <h3 className="font-medium text-gray-900">{skill.name}</h3>
                          <span className="text-sm font-semibold text-primary-700 whitespace-nowrap">{skill.years}</span>
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

            <div className="mt-8 bg-blue-50 border border-blue-200 rounded-lg p-6">
              <h2 className="text-lg font-semibold text-blue-900 mb-3">技術スタック（職務経歴書より）</h2>
              <dl className="text-blue-900 text-sm space-y-2">
                <div><dt className="inline font-semibold">言語: </dt><dd className="inline">Swift, TypeScript, JavaScript, Kotlin, Java, Ruby, C#, Objective-C, PHP, C, Python, SQL, LookML, SAS, PowerShell</dd></div>
                <div><dt className="inline font-semibold">フレームワーク: </dt><dd className="inline">Vue, React, Rails, Spring, Redux, Laravel, FuelPHP, jQuery, Backbone.js, Express, Next.js</dd></div>
                <div><dt className="inline font-semibold">ソフトウェア: </dt><dd className="inline">Git, Docker, Vim, MySQL, Redis, Eclipse, Looker, KARTE, kintone, Claude Code</dd></div>
                <div><dt className="inline font-semibold">クラウド: </dt><dd className="inline">Amazon EC2, AWS ECS, Route 53, S3, Lambda, GCP, BigQuery, Firebase</dd></div>
              </dl>
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
