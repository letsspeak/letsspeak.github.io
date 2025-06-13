import React, { useState, useEffect } from 'react'

interface LayoutProps {
  children: React.ReactNode
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  const [activeSection, setActiveSection] = useState('home')

  const navigation = [
    { name: 'ホーム', href: '#home', id: 'home' },
    { name: 'プロフィール', href: '#about', id: 'about' },
    { name: 'スキル', href: '#skills', id: 'skills' },
    { name: 'プロジェクト', href: '#projects', id: 'projects' },
    { name: 'お問い合わせ', href: '#contact', id: 'contact' },
  ]

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            console.log(`Section detected: ${entry.target.id}`)
            setActiveSection(entry.target.id)
          }
        })
      },
      {
        threshold: 0.1,
        rootMargin: '-96px 0px -30% 0px'
      }
    )

    navigation.forEach(({ id }) => {
      const element = document.getElementById(id)
      if (element) observer.observe(element)
    })

    return () => observer.disconnect()
  }, [])

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      const offsetTop = element.offsetTop - 96 // バナー + ナビゲーションの高さを考慮
      window.scrollTo({
        top: offsetTop,
        behavior: 'smooth'
      })
    }
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* プロトタイプ警告バナー */}
      <div className="bg-yellow-500 text-black py-2 px-2 sm:px-4 text-center text-xs sm:text-sm font-medium fixed top-0 left-0 right-0 z-50">
        <div className="max-w-7xl mx-auto flex items-center justify-center space-x-1 sm:space-x-2">
          <svg className="w-4 h-4 sm:w-5 sm:h-5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
            <path fillRule="evenodd" d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
          </svg>
          <span className="leading-tight">
            <strong>【プロトタイプサイト】</strong>
            <span className="hidden sm:inline">このサイトはプロトタイプです。掲載内容は一部サンプルデータを含んでおり、実際の情報と異なる場合があります。今後修正予定です。</span>
            <span className="sm:hidden">プロトタイプサイトです</span>
          </span>
        </div>
      </div>
      
      <nav className="bg-white shadow-sm fixed top-8 left-0 right-0 z-40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16">
            <div className="flex">
              <div className="flex-shrink-0 flex items-center">
                <button
                  onClick={() => scrollToSection('home')}
                  className="text-xl font-bold text-gray-900 hover:text-gray-700"
                >
                  lsk<span className="text-red-700">Lab</span>
                </button>
              </div>
              <div className="hidden sm:ml-6 sm:flex sm:space-x-8">
                {navigation.map((item) => (
                  <button
                    key={item.name}
                    onClick={() => scrollToSection(item.id)}
                    className={`inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium ${
                      activeSection === item.id
                        ? 'border-primary-500 text-gray-900'
                        : 'border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700'
                    }`}
                  >
                    {item.name}
                  </button>
                ))}
              </div>
            </div>
            <div className="flex items-center">
              <a
                href="https://github.com/letsspeak"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-gray-500"
              >
                <span className="sr-only">GitHub</span>
                <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 20 20">
                  <path
                    fillRule="evenodd"
                    d="M10 0C4.477 0 0 4.484 0 10.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0110 4.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.203 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.942.359.31.678.921.678 1.856 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0020 10.017C20 4.484 15.522 0 10 0z"
                    clipRule="evenodd"
                  />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </nav>

      <main className="pt-20 sm:pt-24">
        {children}
      </main>

      <footer className="bg-white border-t">
        <div className="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center">
            <div>
              <p className="text-gray-500 text-sm">
                © 2025 letsspeak. All rights reserved.
              </p>
              <p className="text-gray-400 text-xs mt-1">
                Built with Claude Code ⚡ 
              </p>
            </div>
            <div className="flex space-x-6">
              <a href="https://blog.lsklab.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-gray-500 text-sm">
                技術ブログ
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default Layout