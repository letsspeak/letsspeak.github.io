import React from 'react'
import { profile, personalProjects, careerYears, age } from '../../data/profile'

const strengths = [
  {
    title: '論理的な課題分析',
    detail: '基盤技術を押さえたうえで課題を論理的に分析し、多角的な視点からソリューションを導きます。',
    color: 'bg-indigo-100 text-indigo-700',
    icon: 'M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z',
  },
  {
    title: 'AI を組み込んだ開発プロセス',
    detail: 'Claude Code を設計・実装・テスト・レビューに日常的に使用。AI 前提の開発環境をゼロから構築した実績があります。',
    color: 'bg-violet-100 text-violet-700',
    icon: 'M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z',
  },
  {
    title: 'フルスタック',
    detail: 'iOS／Android／Web／バックエンド／DB／インフラを横断し、設計からリリースまで一人で通せます。',
    color: 'bg-sky-100 text-sky-700',
    icon: 'M4 6h16M4 12h16M4 18h7',
  },
  {
    title: 'データ分析基盤',
    detail: 'Looker／LookML／BigQuery による分析基盤と KPI ダッシュボードの設計・実装。',
    color: 'bg-emerald-100 text-emerald-700',
    icon: 'M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z',
  },
  {
    title: 'マネジメント',
    detail: 'PM／PMO／PL／TL として、多国籍チームや最大 50 名規模のチームを推進してきました。',
    color: 'bg-amber-100 text-amber-700',
    icon: 'M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z',
  },
  {
    title: '多業界',
    detail: 'ゲーム、行政、流通、保険、金融、人材、エンタメなど幅広い業種での開発経験。',
    color: 'bg-rose-100 text-rose-700',
    icon: 'M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4',
  },
]

const About: React.FC = () => {
  const years = careerYears()

  return (
    <section id="about" className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white shadow rounded-lg">
          <div className="px-4 py-5 sm:p-6">
            <h1 className="text-3xl font-bold text-gray-900 mb-8">プロフィール</h1>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              <div className="lg:col-span-2 space-y-8">
                <div>
                  <img
                    src="https://github.com/letsspeak.png"
                    alt="letsspeak profile"
                    className="w-16 h-16 rounded-full shadow-md mb-4"
                  />
                  <h2 className="text-xl font-semibold text-gray-900 mb-4">自己紹介</h2>
                  <div className="text-gray-700 leading-relaxed space-y-4">
                    <p>
                      フリーランスエンジニアの{profile.name}です。ゲーム・スマホアプリ・行政サービス・流通・保険・金融の各領域で{years}年、
                      iOS／Android／Web／バックエンド／DB／インフラを横断して設計・実装からリリース、PM／PMO まで担当してきました。
                    </p>
                    <p>
                      2025年8月からは金融機関向けのマーケティング施策分析案件で、Looker／LookML による分析基盤の設計・実装、
                      Python による業務自動化ツールの開発、生成AI を用いた業務支援ツールの構築、既存業務システムの UI/UX 改善提案を担当しています。
                    </p>
                    <p>
                      Claude Code を日常的に設計・実装・テスト・レビューに組み込んでおり、次は AI 機能を備えたユーザー向けプロダクトを作る側に移りたいと考えています。
                      React／Next.js は個人開発（SSR、CircleCI → AWS ECS 自動デプロイ、AWS CDK + Lambda）、業務では Vue／TypeScript、Laravel、iOS（Swift）が中心です。
                      LLM API／RAG／エージェントは現在自習プロダクト（Next.js + TypeScript）で実装中で、2026年11月に成果物を提示できる予定です。
                    </p>
                  </div>
                </div>

                <div>
                  <h2 className="text-xl font-semibold text-gray-900 mb-4">経歴概要</h2>
                  <div className="space-y-4">
                    <div className="relative border-l-2 border-primary-500 pl-5">
                      <span className="absolute -left-[7px] top-1.5 w-3 h-3 rounded-full bg-primary-500 ring-4 ring-white" aria-hidden="true"></span>
                      <p className="text-xs font-semibold text-primary-600 tracking-wide">2019年3月 - 現在 <span className="font-normal text-gray-400">（2017年10月から断続的に活動）</span></p>
                      <h3 className="text-lg font-bold text-gray-900 mt-0.5">フリーランスエンジニア</h3>
                      <p className="text-gray-700 mt-2">
                        iOS アプリ開発、Laravel／Vue での Web 開発、PM／PMO、データ分析基盤の構築まで担当。
                        2025年2月からは AI 利用を前提とした開発環境の構築と、Claude Code を組み込んだ開発プロセスの整備を実践しています。
                      </p>
                    </div>
                    <div className="relative border-l-2 border-gray-300 pl-5">
                      <span className="absolute -left-[7px] top-1.5 w-3 h-3 rounded-full bg-gray-400 ring-4 ring-white" aria-hidden="true"></span>
                      <p className="text-xs font-semibold text-gray-500 tracking-wide">2009年8月 - 2019年1月</p>
                      <h3 className="text-lg font-bold text-gray-900 mt-0.5">ソフトウェアエンジニア・チームリーダー <span className="text-sm font-medium text-gray-500">正社員ほか</span></h3>
                      <p className="text-gray-700 mt-2">
                        ゲームのデバッグチーム PL（最大 50 名）から始まり、iOS ゲーム開発、テスト自動化、Java／Spring での Web 開発、
                        行政向けサービスの運用保守などを経験。
                      </p>
                    </div>
                  </div>
                </div>

                <div>
                  <h2 className="text-xl font-semibold text-gray-900 mb-4">個人開発</h2>
                  <ul className="space-y-2">
                    {personalProjects.map((item) => (
                      <li key={item.title} className="flex gap-3 text-sm">
                        <span className="text-gray-500 whitespace-nowrap w-28 flex-shrink-0">{item.year}</span>
                        <span className="text-gray-800">
                          {item.title}
                          {item.detail && <span className="text-gray-500">（{item.detail}）</span>}
                          {item.inProgress && (
                            <span className="ml-2 bg-purple-100 text-purple-800 text-xs font-medium px-2 py-0.5 rounded-full">開発中</span>
                          )}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className="space-y-6">
                <div className="bg-gray-50 p-6 rounded-lg">
                  <h2 className="text-xl font-semibold text-gray-900 mb-4">基本情報</h2>
                  <dl className="space-y-3">
                    <div>
                      <dt className="text-sm font-medium text-gray-500">氏名</dt>
                      <dd className="text-sm text-gray-900">{profile.name}（{profile.nameKana}）／ {profile.handle}</dd>
                    </div>
                    <div>
                      <dt className="text-sm font-medium text-gray-500">年齢</dt>
                      <dd className="text-sm text-gray-900">{age()}歳</dd>
                    </div>
                    <div>
                      <dt className="text-sm font-medium text-gray-500">活動形態</dt>
                      <dd className="text-sm text-gray-900">{profile.employment}</dd>
                    </div>
                    <div>
                      <dt className="text-sm font-medium text-gray-500">経験</dt>
                      <dd className="text-sm text-gray-900">システム開発 2009年8月〜（{years}年）、参画案件 18 件。PM／PMO／PL／TL 経験あり</dd>
                    </div>
                    <div>
                      <dt className="text-sm font-medium text-gray-500">専門分野</dt>
                      <dd className="text-sm text-gray-900">{profile.specialties}</dd>
                    </div>
                    <div>
                      <dt className="text-sm font-medium text-gray-500">学歴</dt>
                      <dd className="text-sm text-gray-900">{profile.education}</dd>
                    </div>
                    <div>
                      <dt className="text-sm font-medium text-gray-500">開発環境</dt>
                      <dd className="text-sm text-gray-900">{profile.environment}</dd>
                    </div>
                  </dl>
                </div>

                <div className="bg-white border border-gray-200 rounded-lg p-6">
                  <h2 className="text-lg font-semibold text-gray-900 mb-4">強み</h2>
                  <ul className="space-y-5">
                    {strengths.map((item) => (
                      <li key={item.title} className="flex gap-3">
                        <span className={`flex-shrink-0 w-9 h-9 rounded-lg flex items-center justify-center ${item.color}`} aria-hidden="true">
                          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={item.icon} />
                          </svg>
                        </span>
                        <div>
                          <h3 className="text-sm font-bold text-gray-900">{item.title}</h3>
                          <p className="text-sm text-gray-600 leading-relaxed mt-1">{item.detail}</p>
                        </div>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="bg-gray-50 p-6 rounded-lg">
                  <h2 className="text-lg font-semibold text-gray-900 mb-3">リンク</h2>
                  <ul className="text-sm space-y-2">
                    <li><a href={profile.github} target="_blank" rel="noopener noreferrer" className="text-primary-600 hover:text-primary-500">GitHub: github.com/letsspeak</a></li>
                    <li><a href={profile.blog} target="_blank" rel="noopener noreferrer" className="text-primary-600 hover:text-primary-500">技術ブログ: blog.lsklab.com</a></li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About
