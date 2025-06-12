import React from 'react'

const About: React.FC = () => {
  return (
    <div className="px-4 sm:px-0">
      <div className="bg-white shadow rounded-lg">
        <div className="px-4 py-5 sm:p-6">
          <h1 className="text-3xl font-bold text-gray-900 mb-8">プロフィール</h1>
          
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2">
              <div className="space-y-6">
                <div>
                  <h2 className="text-xl font-semibold text-gray-900 mb-3">自己紹介</h2>
                  <p className="text-gray-700 leading-relaxed">
                    AI・機械学習エンジニアとして、最新技術を活用したシステム開発に携わっています。
                    フリーランスとして様々な案件に参画し、技術力の向上とクライアントへの価値提供を重視しています。
                  </p>
                  <p className="text-gray-700 leading-relaxed mt-4">
                    特に、機械学習モデルの構築・最適化、Webアプリケーション開発、
                    データ分析・可視化を得意としており、技術的な課題解決を通じて
                    ビジネス価値の創出に貢献しています。
                  </p>
                </div>

                <div>
                  <h2 className="text-xl font-semibold text-gray-900 mb-3">経歴概要</h2>
                  <div className="space-y-4">
                    <div className="border-l-4 border-primary-500 pl-4">
                      <h3 className="font-medium text-gray-900">フリーランス AI・機械学習エンジニア</h3>
                      <p className="text-sm text-gray-600">2023年 - 現在</p>
                      <p className="text-gray-700 mt-2">
                        機械学習システムの構築、Webアプリケーション開発、データ分析業務に従事。
                        React、Python、TensorFlow等を活用した開発を行っています。
                      </p>
                    </div>
                    <div className="border-l-4 border-gray-300 pl-4">
                      <h3 className="font-medium text-gray-900">ソフトウェアエンジニア</h3>
                      <p className="text-sm text-gray-600">2020年 - 2023年</p>
                      <p className="text-gray-700 mt-2">
                        Web開発、システム設計・運用、チーム開発プロセスの改善に携わりました。
                        フルスタック開発からインフラ構築まで幅広い経験を積みました。
                      </p>
                    </div>
                  </div>
                </div>

                <div>
                  <h2 className="text-xl font-semibold text-gray-900 mb-3">強み・特徴</h2>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="bg-gray-50 p-4 rounded-lg">
                      <h3 className="font-medium text-gray-900 mb-2">技術力</h3>
                      <p className="text-sm text-gray-700">
                        AI・機械学習からWeb開発まで幅広い技術領域をカバー
                      </p>
                    </div>
                    <div className="bg-gray-50 p-4 rounded-lg">
                      <h3 className="font-medium text-gray-900 mb-2">問題解決力</h3>
                      <p className="text-sm text-gray-700">
                        複雑な技術課題を分析し、最適なソリューションを提案
                      </p>
                    </div>
                    <div className="bg-gray-50 p-4 rounded-lg">
                      <h3 className="font-medium text-gray-900 mb-2">継続学習</h3>
                      <p className="text-sm text-gray-700">
                        新しい技術動向をキャッチアップし、実践に活用
                      </p>
                    </div>
                    <div className="bg-gray-50 p-4 rounded-lg">
                      <h3 className="font-medium text-gray-900 mb-2">コミュニケーション</h3>
                      <p className="text-sm text-gray-700">
                        技術的な内容を分かりやすく説明し、チーム連携を重視
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="lg:col-span-1">
              <div className="bg-gray-50 p-6 rounded-lg">
                <h2 className="text-xl font-semibold text-gray-900 mb-4">基本情報</h2>
                <dl className="space-y-3">
                  <div>
                    <dt className="text-sm font-medium text-gray-500">氏名</dt>
                    <dd className="text-sm text-gray-900">大宮将嗣</dd>
                  </div>
                  <div>
                    <dt className="text-sm font-medium text-gray-500">職種</dt>
                    <dd className="text-sm text-gray-900">AI・機械学習エンジニア</dd>
                  </div>
                  <div>
                    <dt className="text-sm font-medium text-gray-500">専門分野</dt>
                    <dd className="text-sm text-gray-900">機械学習、Web開発、データ分析</dd>
                  </div>
                  <div>
                    <dt className="text-sm font-medium text-gray-500">活動形態</dt>
                    <dd className="text-sm text-gray-900">フリーランス</dd>
                  </div>
                </dl>

                <div className="mt-6 pt-6 border-t border-gray-200">
                  <h3 className="text-lg font-medium text-gray-900 mb-3">関連リンク</h3>
                  <div className="space-y-2">
                    <a href="https://github.com/letsspeak" target="_blank" rel="noopener noreferrer" className="flex items-center text-primary-600 hover:text-primary-500">
                      <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 0C4.477 0 0 4.484 0 10.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0110 4.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.203 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.942.359.31.678.921.678 1.856 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0020 10.017C20 4.484 15.522 0 10 0z" clipRule="evenodd" />
                      </svg>
                      GitHub
                    </a>
                    <a href="https://blog.lsklab.com" target="_blank" rel="noopener noreferrer" className="flex items-center text-primary-600 hover:text-primary-500">
                      <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                      </svg>
                      技術ブログ
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default About