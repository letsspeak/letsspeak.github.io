import React, { useState, useEffect } from 'react'

interface LayoutProps {
  children: React.ReactNode
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  const [activeSection, setActiveSection] = useState('home')
  const [contactVisible, setContactVisible] = useState(true)
  const [menuOpen, setMenuOpen] = useState(false)

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
            setActiveSection(entry.target.id)
          }
        })
      },
      {
        threshold: 0.1,
        rootMargin: '-80px 0px -30% 0px'
      }
    )

    navigation.forEach(({ id }) => {
      const element = document.getElementById(id)
      if (element) observer.observe(element)
    })

    return () => observer.disconnect()
  }, [])

  // お問い合わせセクション、またはヒーローのお問い合わせボタンが画面内にある間はフローティングボタンを隠す
  useEffect(() => {
    const targets = [document.getElementById('contact'), document.getElementById('hero-cta')].filter(
      (el): el is HTMLElement => el !== null
    )
    if (targets.length === 0) return
    const visible = new Set<Element>()
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) visible.add(entry.target)
          else visible.delete(entry.target)
        })
        setContactVisible(visible.size > 0)
      },
      { threshold: 0 }
    )
    targets.forEach((el) => observer.observe(el))
    return () => observer.disconnect()
  }, [])

  const scrollToSection = (sectionId: string) => {
    setMenuOpen(false)
    const element = document.getElementById(sectionId)
    if (element) {
      const offsetTop = element.offsetTop - 80 // ナビゲーションの高さ + 余白
      window.scrollTo({
        top: offsetTop,
        behavior: 'smooth'
      })
    }
  }

  // モバイルメニューは Escape キーと画面幅の拡大で閉じる
  useEffect(() => {
    if (!menuOpen) return
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setMenuOpen(false)
    }
    const onResize = () => {
      if (window.innerWidth >= 640) setMenuOpen(false)
    }
    window.addEventListener('keydown', onKey)
    window.addEventListener('resize', onResize)
    return () => {
      window.removeEventListener('keydown', onKey)
      window.removeEventListener('resize', onResize)
    }
  }, [menuOpen])

  return (
    <div className="min-h-screen bg-gray-50">
      <nav className="bg-white shadow-sm fixed top-0 left-0 right-0 z-40">
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
            <div className="flex items-center gap-2">
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
              <button
                type="button"
                onClick={() => setMenuOpen((open) => !open)}
                aria-label={menuOpen ? 'メニューを閉じる' : 'メニューを開く'}
                aria-expanded={menuOpen}
                aria-controls="mobile-menu"
                className="sm:hidden inline-flex items-center justify-center w-10 h-10 rounded-md text-gray-500 hover:text-gray-700 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-primary-500"
              >
                {menuOpen ? (
                  <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                ) : (
                  <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                  </svg>
                )}
              </button>
            </div>
          </div>
        </div>

        {/* モバイルメニュー（640px 未満） */}
        {menuOpen && (
          <div id="mobile-menu" className="sm:hidden border-t border-gray-200 bg-white shadow-lg">
            <div className="px-2 py-2 space-y-1">
              {navigation.map((item) => (
                <button
                  key={item.name}
                  onClick={() => scrollToSection(item.id)}
                  className={`w-full text-left px-3 py-3 rounded-md text-base font-medium ${
                    activeSection === item.id
                      ? 'bg-primary-50 text-primary-700'
                      : 'text-gray-700 hover:bg-gray-50 hover:text-gray-900'
                  }`}
                >
                  {item.name}
                </button>
              ))}
            </div>
          </div>
        )}
      </nav>

      {/* メニュー外タップで閉じるための背景 */}
      {menuOpen && (
        <div className="sm:hidden fixed inset-0 z-30 bg-black/20" onClick={() => setMenuOpen(false)} aria-hidden="true"></div>
      )}

      <main className="pt-16">
        {children}
      </main>

      {/* お問い合わせへのフローティングボタン */}
      <button
        type="button"
        onClick={() => scrollToSection('contact')}
        aria-label="お問い合わせセクションへ移動"
        aria-hidden={contactVisible}
        tabIndex={contactVisible ? -1 : 0}
        className={`fixed bottom-5 right-5 sm:bottom-8 sm:right-8 z-40 inline-flex items-center gap-2 rounded-full bg-primary-600 px-4 py-3 sm:px-5 text-sm font-semibold text-white shadow-lg hover:bg-primary-700 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-2 transition-all duration-300 ${
          contactVisible ? 'opacity-0 translate-y-4 pointer-events-none' : 'opacity-100 translate-y-0'
        }`}
      >
        <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
        </svg>
        <span>お問い合わせはこちら</span>
      </button>

      <footer className="bg-white border-t">
        <div className="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center">
            <div>
              <p className="text-gray-500 text-sm">
                © {new Date().getFullYear()} letsspeak. All rights reserved.
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