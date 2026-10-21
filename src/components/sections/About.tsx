import React from 'react'
import { profile, personalProjects, careerYears, age } from '../../data/profile'

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
                    <div className="border-l-4 border-primary-500 pl-4">
                      <h3 className="font-medium text-gray-900">フリーランスエンジニア</h3>
                      <p className="text-sm text-gray-500">2019年3月 - 現在（2017年10月から断続的に活動）</p>
                      <p className="text-gray-700 mt-2">
                        iOS アプリ開発、Laravel／Vue での Web 開発、PM／PMO、データ分析基盤の構築まで担当。
                        2025年2月からは AI 利用を前提とした開発環境の構築と、Claude Code を組み込んだ開発プロセスの整備を実践しています。
                      </p>
                    </div>
                    <div className="border-l-4 border-gray-300 pl-4">
                      <h3 className="font-medium text-gray-900">ソフトウェアエンジニア・チームリーダー（正社員ほか）</h3>
                      <p className="text-sm text-gray-500">2009年8月 - 2019年1月</p>
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

                <div className="bg-blue-50 border border-blue-200 rounded-lg p-6">
                  <h2 className="text-lg font-semibold text-blue-900 mb-3">強み</h2>
                  <ul className="text-blue-900 text-sm space-y-2">
                    <li>• <strong>AI を組み込んだ開発プロセス</strong>: Claude Code を設計・実装・テスト・レビューに日常的に使用。AI 前提の開発環境をゼロから構築した実績</li>
                    <li>• <strong>フルスタック</strong>: iOS／Android／Web／バックエンド／DB／インフラを横断し、設計からリリースまで一人で通せる</li>
                    <li>• <strong>データ分析基盤</strong>: Looker／LookML／BigQuery による分析基盤と KPI ダッシュボードの設計・実装</li>
                    <li>• <strong>マネジメント</strong>: PM／PMO／PL／TL として多国籍チームや最大 50 名規模のチームを推進</li>
                    <li>• <strong>多業界</strong>: ゲーム、行政、流通、保険、金融、人材、エンタメなど幅広い業種での開発経験</li>
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
