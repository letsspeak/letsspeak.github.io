import React from 'react'
import { Link } from 'react-router-dom'

const Home: React.FC = () => {
  return (
    <div className="px-4 sm:px-0">
      <div className="relative bg-white overflow-hidden rounded-lg shadow-sm">
        <div className="max-w-7xl mx-auto">
          <div className="relative z-10 pb-8 bg-white sm:pb-16 md:pb-20 lg:max-w-2xl lg:w-full lg:pb-28 xl:pb-32">
            <main className="mt-10 mx-auto max-w-7xl px-4 sm:mt-12 sm:px-6 md:mt-16 lg:mt-20 lg:px-8 xl:mt-28">
              <div className="sm:text-center lg:text-left">
                <h1 className="text-4xl tracking-tight font-extrabold text-gray-900 sm:text-5xl md:text-6xl">
                  <span className="block xl:inline">大宮将嗣</span>{' '}
                  <span className="block text-primary-600 xl:inline">Portfolio</span>
                </h1>
                <p className="mt-3 text-base text-gray-500 sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-5 md:text-xl lg:mx-0">
                  AI・機械学習エンジニアとして技術開発に携わっています。フリーランスとして様々なプロジェクトに参画し、技術力とプレゼンスの向上を目指しています。
                </p>
                <div className="mt-5 sm:mt-8 sm:flex sm:justify-center lg:justify-start">
                  <div className="rounded-md shadow">
                    <Link
                      to="/projects"
                      className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-primary-600 hover:bg-primary-700 md:py-4 md:text-lg md:px-10"
                    >
                      プロジェクト一覧
                    </Link>
                  </div>
                  <div className="mt-3 sm:mt-0 sm:ml-3">
                    <Link
                      to="/contact"
                      className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-primary-700 bg-primary-100 hover:bg-primary-200 md:py-4 md:text-lg md:px-10"
                    >
                      お問い合わせ
                    </Link>
                  </div>
                </div>
              </div>
            </main>
          </div>
        </div>
        <div className="lg:absolute lg:inset-y-0 lg:right-0 lg:w-1/2">
          <div className="h-56 w-full bg-gradient-to-r from-primary-400 to-primary-600 sm:h-72 md:h-96 lg:w-full lg:h-full flex items-center justify-center">
            <div className="text-white text-center">
              <div className="text-6xl mb-4">🤖</div>
              <p className="text-xl font-semibold">AI & Tech Innovation</p>
            </div>
          </div>
        </div>
      </div>
      
      {/* Recent Activity Section */}
      <div className="mt-12">
        <div className="bg-white shadow rounded-lg">
          <div className="px-4 py-5 sm:p-6">
            <h2 className="text-lg leading-6 font-medium text-gray-900 mb-4">
              最近の活動
            </h2>
            <div className="space-y-4">
              <div className="border-l-4 border-primary-500 pl-4">
                <h3 className="text-sm font-medium text-gray-900">新しいAIプロジェクト開始</h3>
                <p className="text-sm text-gray-500">機械学習を活用した画像認識システムの開発を開始しました。</p>
                <p className="text-xs text-gray-400 mt-1">2024年6月</p>
              </div>
              <div className="border-l-4 border-primary-500 pl-4">
                <h3 className="text-sm font-medium text-gray-900">技術ブログ更新</h3>
                <p className="text-sm text-gray-500">React + TypeScriptでのポートフォリオサイト構築についてブログで解説。</p>
                <p className="text-xs text-gray-400 mt-1">2024年5月</p>
              </div>
              <div className="border-l-4 border-primary-500 pl-4">
                <h3 className="text-sm font-medium text-gray-900">OSS貢献</h3>
                <p className="text-sm text-gray-500">オープンソースプロジェクトへの機能追加とバグ修正を実施。</p>
                <p className="text-xs text-gray-400 mt-1">2024年4月</p>
              </div>
            </div>
            <div className="mt-6">
              <a href="https://blog.lsklab.com" target="_blank" rel="noopener noreferrer" className="text-primary-600 hover:text-primary-500 text-sm font-medium">
                ブログで詳細を見る →
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Home