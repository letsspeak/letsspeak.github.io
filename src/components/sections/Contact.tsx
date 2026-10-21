import React from 'react'

// Google フォームの「送信」→「<>」で表示される埋め込み用 URL（.../viewform?embedded=true）を設定する
const GOOGLE_FORM_URL: string = 'https://docs.google.com/forms/d/e/1FAIpQLSde36kj-Hu004CWZ4ocXdQz6Yfhw9n8KaVX-pAgaESRYSDq1w/viewform?embedded=true'

const SERVICES = [
  {
    title: 'AI 機能を備えたプロダクトの開発',
    detail: 'LLM API／RAG／エージェントは自習中。2026年11月に成果物を提示予定',
    color: 'bg-violet-100 text-violet-700',
    icon: 'M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z',
  },
  {
    title: 'Web アプリケーション開発',
    detail: 'Vue／React、TypeScript、Laravel',
    color: 'bg-sky-100 text-sky-700',
    icon: 'M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9',
  },
  {
    title: 'モバイルアプリ開発',
    detail: 'iOS（Swift／UIKit）、Android（Kotlin）',
    color: 'bg-emerald-100 text-emerald-700',
    icon: 'M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z',
  },
  {
    title: 'データ分析基盤の構築',
    detail: 'Looker／LookML／BigQuery',
    color: 'bg-amber-100 text-amber-700',
    icon: 'M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z',
  },
  {
    title: 'プロジェクト管理・技術支援',
    detail: 'PM／PMO、開発メンバーの技術支援、研修講師',
    color: 'bg-rose-100 text-rose-700',
    icon: 'M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z',
  },
]

const Contact: React.FC = () => {
  return (
    <section id="contact" className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white shadow rounded-lg">
          <div className="px-4 py-5 sm:p-6">
            <h1 className="text-3xl font-bold text-gray-900 mb-8">お問い合わせ</h1>
            
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              <div>
                <div className="mb-8">
                  <h2 className="text-xl font-semibold text-gray-900 mb-4">
                    お気軽にお声がけください
                  </h2>
                  <p className="text-gray-700 leading-relaxed mb-4">
                    プロジェクトのご相談、技術的なお問い合わせ、協業のご提案など、
                    どのような内容でもお気軽にご連絡ください。
                  </p>
                  <p className="text-gray-700 leading-relaxed">
                    AI 機能を備えたプロダクト開発、Web・モバイルアプリ開発、データ分析基盤、プロジェクト管理について、
                    技術的な実現可能性や最適なアプローチをご相談いただけます。
                  </p>
                </div>

                <div className="space-y-6">
                  <div className="flex items-center">
                    <div className="flex-shrink-0">
                      <svg className="w-6 h-6 text-primary-600" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 0C4.477 0 0 4.484 0 10.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0110 4.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.203 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.942.359.31.678.921.678 1.856 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0020 10.017C20 4.484 15.522 0 10 0z" clipRule="evenodd" />
                      </svg>
                    </div>
                    <div className="ml-4">
                      <h3 className="text-lg text-gray-900">GitHub</h3>
                      <a href="https://github.com/letsspeak" target="_blank" rel="noopener noreferrer" className="text-primary-600 hover:text-primary-500">
                        github.com/letsspeak
                      </a>
                    </div>
                  </div>

                  <div className="flex items-center">
                    <div className="flex-shrink-0">
                      <svg className="w-6 h-6 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                      </svg>
                    </div>
                    <div className="ml-4">
                      <h3 className="text-lg text-gray-900">技術ブログ</h3>
                      <a href="https://blog.lsklab.com" target="_blank" rel="noopener noreferrer" className="text-primary-600 hover:text-primary-500">
                        blog.lsklab.com
                      </a>
                    </div>
                  </div>

                  <div className="flex items-center">
                    <div className="flex-shrink-0">
                      <svg className="w-6 h-6 text-primary-600" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
                      </svg>
                    </div>
                    <div className="ml-4">
                      <h3 className="text-lg text-gray-900">Twitter</h3>
                      <a href="https://twitter.com/letsspeak" target="_blank" rel="noopener noreferrer" className="text-primary-600 hover:text-primary-500">
                        @letsspeak
                      </a>
                    </div>
                  </div>
                </div>

                <div className="mt-8">
                  <h3 className="text-lg font-semibold text-gray-900 mb-3">対応可能な案件</h3>
                  <ul className="space-y-2">
                    {SERVICES.map((item) => (
                      <li key={item.title} className="flex items-start gap-3 bg-white border border-gray-200 rounded-lg px-4 py-3">
                        <span className={`flex-shrink-0 w-8 h-8 rounded-lg flex items-center justify-center ${item.color}`} aria-hidden="true">
                          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={item.icon} />
                          </svg>
                        </span>
                        <div className="min-w-0">
                          <p className="text-sm font-bold text-gray-900">{item.title}</p>
                          <p className="text-xs text-gray-500 mt-0.5">{item.detail}</p>
                        </div>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <div>
                <div className="bg-gray-50 p-6 rounded-lg">
                  <h2 className="text-xl font-semibold text-gray-900 mb-4">
                    お問い合わせフォーム
                  </h2>
                  {GOOGLE_FORM_URL ? (
                    <>
                      <p className="text-gray-600 text-sm mb-6">
                        下記フォームよりご連絡ください。通常 2〜3 営業日以内にご返信いたします。
                      </p>
                      <div className="rounded-lg overflow-hidden bg-white border border-gray-200">
                        <iframe
                          src={GOOGLE_FORM_URL}
                          title="お問い合わせフォーム"
                          className="w-full"
                          style={{ height: '900px' }}
                          loading="lazy"
                        >
                          読み込んでいます…
                        </iframe>
                      </div>
                      <div className="mt-4 text-center">
                        <a
                          href={GOOGLE_FORM_URL.replace('?embedded=true', '')}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-sm text-primary-600 hover:text-primary-500"
                        >
                          フォームが表示されない場合はこちら
                        </a>
                      </div>
                    </>
                  ) : (
                    <>
                      <p className="text-gray-600 text-sm mb-6">
                        現在、お問い合わせフォームを準備中です。<br />
                        お急ぎの場合は、GitHub または X のDMにてご連絡ください。
                      </p>
                      <div className="p-4 border-2 border-dashed border-gray-300 rounded-lg text-center">
                        <svg className="w-8 h-8 text-gray-400 mx-auto mb-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 8h10m0 0V6a2 2 0 00-2-2H9a2 2 0 00-2 2v2m10 0v10a2 2 0 01-2 2H9a2 2 0 01-2-2V8m10 0V6a2 2 0 00-2-2H9a2 2 0 00-2 2v2" />
                        </svg>
                        <p className="text-gray-500 text-sm">お問い合わせフォーム</p>
                        <p className="text-gray-400 text-xs">準備中</p>
                      </div>
                    </>
                  )}
                </div>

                <div className="mt-6 bg-green-50 border border-green-200 rounded-lg p-4">
                  <h3 className="text-lg font-semibold text-green-900 mb-2">
                    対応時間
                  </h3>
                  <div className="text-green-800 space-y-1 text-sm">
                    <p>平日: 9:00 - 18:00</p>
                    <p>土日祝: 要相談</p>
                    <p className="text-xs text-green-600 mt-2">
                      ※ お急ぎの場合はその旨をフォームにご記載ください
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Contact