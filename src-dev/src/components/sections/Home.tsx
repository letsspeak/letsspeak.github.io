import React from 'react'

const Home: React.FC = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      const offsetTop = element.offsetTop - 120
      window.scrollTo({
        top: offsetTop,
        behavior: 'smooth'
      })
    }
  }

  return (
    <section id="home" className="min-h-screen bg-gray-50 flex items-center -mt-30 pt-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
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
                    プログラミング歴30年以上のソフトウェアエンジニア。モバイルアプリ開発からWeb開発、プロジェクト管理まで幅広い分野で活動しています。
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
                  <h3 className="text-sm font-medium text-gray-900">外国人労働者管理アプリ完了</h3>
                  <p className="text-sm text-gray-500">Swift + Kotlin + NFC技術を活用した勤怠管理システムの開発を完了しました。</p>
                  <p className="text-xs text-gray-400 mt-1">2025年6月</p>
                </div>
                <div className="border-l-4 border-primary-500 pl-4">
                  <h3 className="text-sm font-medium text-gray-900">タスク管理サービス開発支援</h3>
                  <p className="text-sm text-gray-500">TypeScript + React + AWSを活用したWebサービスのPMO業務を担当。</p>
                  <p className="text-xs text-gray-400 mt-1">2024年6月 - 2025年1月</p>
                </div>
                <div className="border-l-4 border-primary-500 pl-4">
                  <h3 className="text-sm font-medium text-gray-900">保険システム開発</h3>
                  <p className="text-sm text-gray-500">Java + Springでの保険加入者登録サイト開発、Java研修講師も担当。</p>
                  <p className="text-xs text-gray-400 mt-1">2024年2月 - 2024年5月</p>
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
    </section>
  )
}

export default Home