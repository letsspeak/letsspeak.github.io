import React from 'react'
import { projects } from '../../data/projects'
import { careerYears } from '../../data/profile'

const Home: React.FC = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      window.scrollTo({ top: element.offsetTop - 80, behavior: 'smooth' })
    }
  }

  const years = careerYears()
  const recent = projects.slice(0, 3)

  return (
    <section id="home" className="min-h-screen bg-gray-50 flex items-center -mt-16 pt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="relative bg-white overflow-hidden rounded-lg shadow-sm">
          <div className="max-w-7xl mx-auto">
            <div className="relative z-10 pb-8 bg-white sm:pb-16 md:pb-20 lg:max-w-2xl lg:w-full lg:pb-28 xl:pb-32">
              <main className="mt-10 mx-auto max-w-7xl px-4 sm:mt-12 sm:px-6 md:mt-16 lg:mt-20 lg:px-8 xl:mt-28">
                <div className="sm:text-center lg:text-left">
                  <p className="text-sm font-semibold text-primary-600 tracking-wide mb-3">大宮 将嗣 / letsspeak</p>
                  <h1 className="text-3xl tracking-normal font-extrabold text-gray-900 sm:text-4xl lg:text-[2.6rem] leading-tight">
                    <span className="block">AI 機能を備えた</span>
                    <span className="block" style={{
                      background: 'linear-gradient(90deg, #2563eb 0%, #1d4ed8 30%, #7c3aed 100%)',
                      WebkitBackgroundClip: 'text',
                      WebkitTextFillColor: 'transparent',
                      backgroundClip: 'text',
                    }}>ユーザー向けプロダクト</span>
                    <span className="block">
                      を作る<span className="inline-block whitespace-nowrap">フルスタックエンジニア</span>
                    </span>
                  </h1>
                  <p className="mt-3 text-base text-gray-500 sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-5 md:text-xl lg:mx-0">
                    iOS／Web／バックエンドを横断して {years} 年。Claude Code を日常的に設計・実装・テスト・レビューに組み込み、
                    データ分析基盤から生成AI を使った業務支援ツールまで手がけています。
                  </p>
                  <div className="mt-5 sm:mt-8 sm:flex sm:justify-center lg:justify-start">
                    <div className="rounded-md shadow">
                      <button
                        onClick={() => scrollToSection('projects')}
                        className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-primary-600 hover:bg-primary-700 md:py-4 md:text-lg md:px-10"
                      >
                        プロジェクト一覧
                      </button>
                    </div>
                    <div className="mt-3 sm:mt-0 sm:ml-3">
                      <button
                        onClick={() => scrollToSection('contact')}
                        className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-primary-700 bg-primary-100 hover:bg-primary-200 md:py-4 md:text-lg md:px-10"
                      >
                        お問い合わせ
                      </button>
                    </div>
                  </div>
                </div>
              </main>
            </div>
          </div>
          <div className="lg:absolute lg:inset-y-0 lg:right-0 lg:w-1/2">
            <div className="h-56 w-full bg-gradient-to-r from-primary-400 to-primary-600 sm:h-72 md:h-96 lg:w-full lg:h-full flex items-center justify-center">
              <div className="text-white text-center px-6">
                <p className="text-xl font-semibold">iOS / Web / Backend / Data / AI</p>
                <p className="text-sm mt-2 opacity-90">設計・実装からリリース、PM／PMO まで</p>
              </div>
            </div>
          </div>
        </div>

        {/* Recent Activity Section */}
        <div className="mt-12">
          <div className="bg-white shadow rounded-lg">
            <div className="px-4 py-5 sm:p-6">
              <h2 className="text-lg leading-6 font-medium text-gray-900 mb-4">最近の活動</h2>
              <div className="space-y-4">
                {recent.map((project) => (
                  <div key={project.id} className="border-l-4 border-primary-500 pl-4">
                    <h3 className="text-sm font-medium text-gray-900">
                      {project.title}
                      {project.status === 'in-progress' && (
                        <span className="ml-2 bg-blue-100 text-blue-800 text-xs font-medium px-2 py-0.5 rounded-full">進行中</span>
                      )}
                    </h3>
                    <p className="text-sm text-gray-500">{project.description}</p>
                    <p className="text-xs text-gray-400 mt-1">{project.period}（{project.role}）</p>
                  </div>
                ))}
                <div className="border-l-4 border-purple-400 pl-4">
                  <h3 className="text-sm font-medium text-gray-900">
                    LLM API／RAG／エージェントの自習プロダクト
                    <span className="ml-2 bg-purple-100 text-purple-800 text-xs font-medium px-2 py-0.5 rounded-full">開発中</span>
                  </h3>
                  <p className="text-sm text-gray-500">Next.js + TypeScript + Claude API。2026年11月に成果物を公開予定。</p>
                  <p className="text-xs text-gray-400 mt-1">2026年10月 - （個人開発）</p>
                </div>
              </div>
              <div className="mt-6">
                <button
                  onClick={() => scrollToSection('projects')}
                  className="text-primary-600 hover:text-primary-500 text-sm font-medium"
                >
                  プロジェクト一覧を見る →
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Home
