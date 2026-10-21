import React, { useEffect, useState } from 'react'
import { projects } from '../../data/projects'

// 詳細表示中は URL を #projects/<id> にして、ブラウザの「戻る」で一覧に戻れるようにする
const HASH_PREFIX = '#projects/'

const projectIdFromHash = (): string | null => {
  const hash = window.location.hash
  if (!hash.startsWith(HASH_PREFIX)) return null
  const id = decodeURIComponent(hash.slice(HASH_PREFIX.length))
  return projects.some((p) => p.id === id) ? id : null
}

const scrollToProjects = () => {
  const element = document.getElementById('projects')
  if (element) {
    window.scrollTo({ top: element.offsetTop - 80, behavior: 'smooth' })
  }
}

const statusBadge = (status: string) => {
  if (status === 'in-progress') {
    return <span className="bg-blue-100 text-blue-800 text-xs font-medium px-2.5 py-0.5 rounded-full whitespace-nowrap">進行中</span>
  }
  return <span className="bg-green-100 text-green-800 text-xs font-medium px-2.5 py-0.5 rounded-full whitespace-nowrap">完了</span>
}

const APPROACHES = [
  {
    title: 'AI を前提にした開発',
    detail: 'Claude Code を設計・実装・テスト・レビューに組み込み、開発環境もその前提で構築します。',
    color: 'bg-violet-100 text-violet-700',
    icon: 'M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z',
  },
  {
    title: '技術選択',
    detail: 'プロジェクトの要件に最適な技術スタックを調査・選定し、根拠をドキュメントに残します。',
    color: 'bg-sky-100 text-sky-700',
    icon: 'M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4',
  },
  {
    title: '協調性',
    detail: '多国籍チームや大人数のチームでも、タスク管理と技術支援で全体を前に進めます。',
    color: 'bg-amber-100 text-amber-700',
    icon: 'M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z',
  },
  {
    title: '一貫した担当',
    detail: '要件定義・設計から実装、リリース、運用保守まで通して関わります。',
    color: 'bg-emerald-100 text-emerald-700',
    icon: 'M13 10V3L4 14h7v7l9-11h-7z',
  },
]

const Projects: React.FC = () => {
  const [selectedProject, setSelectedProject] = useState<string | null>(projectIdFromHash)

  // 戻る / 進む で URL が変わったら表示を同期する
  useEffect(() => {
    const syncFromHash = () => {
      setSelectedProject(projectIdFromHash())
      if (window.location.hash.startsWith('#projects')) scrollToProjects()
    }
    window.addEventListener('popstate', syncFromHash)
    return () => window.removeEventListener('popstate', syncFromHash)
  }, [])

  // 初回表示が #projects/<id> 付きならプロジェクト一覧の位置までスクロールする
  useEffect(() => {
    if (projectIdFromHash()) scrollToProjects()
  }, [])

  // 一覧 → 詳細 → 一覧 をそれぞれ履歴に積む。ブラウザの戻る/進むは popstate で同期される
  const openProject = (id: string) => {
    window.history.pushState(null, '', `${HASH_PREFIX}${encodeURIComponent(id)}`)
    setSelectedProject(id)
    scrollToProjects()
  }

  const closeProject = () => {
    window.history.pushState(null, '', '#projects')
    setSelectedProject(null)
    scrollToProjects()
  }

  const selectedProjectData = selectedProject ? projects.find((p) => p.id === selectedProject) : null

  return (
    <section id="projects" className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white shadow rounded-lg">
          <div className="px-4 py-5 sm:p-6">
            <div className="flex justify-between items-center mb-2">
              <h1 className="text-3xl font-bold text-gray-900">プロジェクト一覧</h1>
              <div className="text-sm text-gray-500">{projects.length} 件</div>
            </div>
            <p className="text-sm text-gray-500 mb-8">
              職務経歴書と同じ内容を新しい順に掲載しています。所属・取引先は業種のみ記載しています。
            </p>

            {!selectedProjectData ? (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {projects.map((project) => (
                  <div
                    key={project.id}
                    className={`rounded-lg p-6 hover:shadow-md transition-shadow flex flex-col ${
                      project.highlight ? 'bg-primary-50 border border-primary-200' : 'bg-gray-50'
                    }`}
                  >
                    <div className="flex justify-between items-start gap-2 mb-3">
                      <h2 className="text-lg font-semibold text-gray-900">{project.title}</h2>
                      {statusBadge(project.status)}
                    </div>

                    <p className="text-gray-600 text-sm mb-4">{project.description}</p>

                    {project.technologies.length > 0 && (
                      <div className="mb-4">
                        <div className="flex flex-wrap gap-1">
                          {project.technologies.slice(0, 4).map((tech) => (
                            <span key={tech} className="bg-primary-100 text-primary-800 text-xs px-2 py-1 rounded">
                              {tech}
                            </span>
                          ))}
                          {project.technologies.length > 4 && (
                            <span className="text-xs text-gray-500 px-2 py-1">+{project.technologies.length - 4}</span>
                          )}
                        </div>
                      </div>
                    )}

                    <div className="text-xs text-gray-500 mb-4 mt-auto space-y-0.5">
                      <div>期間: {project.period}（{project.months}ヶ月）</div>
                      <div>
                        役割: {project.role}
                        {project.teamSize ? ` ／ 規模: ${project.teamSize}名` : ''}
                      </div>
                      <div>業種: {project.industry} ／ {project.employment}</div>
                    </div>

                    <button
                      onClick={() => openProject(project.id)}
                      className="text-primary-600 hover:text-primary-500 text-sm font-medium text-left"
                    >
                      詳細を見る →
                    </button>
                  </div>
                ))}
              </div>
            ) : (
              <div>
                <div className="mb-6">
                  <button
                    onClick={closeProject}
                    className="inline-flex items-center text-primary-600 hover:text-primary-500 text-sm font-medium"
                  >
                    <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                    </svg>
                    プロジェクト一覧に戻る
                  </button>
                </div>

                <div className="flex justify-between items-start gap-4 mb-6">
                  <div>
                    <h1 className="text-3xl font-bold text-gray-900 mb-2">{selectedProjectData.title}</h1>
                    <p className="text-lg text-gray-600">{selectedProjectData.description}</p>
                  </div>
                  {statusBadge(selectedProjectData.status)}
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                  <div className="lg:col-span-2">
                    <h2 className="text-xl font-semibold text-gray-900 mb-4">担当内容</h2>
                    <ul className="space-y-2">
                      {selectedProjectData.responsibilities.map((item) => (
                        <li key={item} className="flex items-start text-gray-700">
                          <svg className="w-5 h-5 text-primary-500 mr-2 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                          </svg>
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div>
                    <div className="bg-gray-50 p-6 rounded-lg">
                      <h3 className="text-lg font-semibold text-gray-900 mb-4">プロジェクト詳細</h3>
                      <dl className="space-y-3">
                        <div>
                          <dt className="text-sm font-medium text-gray-500">期間</dt>
                          <dd className="text-sm text-gray-900">{selectedProjectData.period}（{selectedProjectData.months}ヶ月）</dd>
                        </div>
                        <div>
                          <dt className="text-sm font-medium text-gray-500">役割</dt>
                          <dd className="text-sm text-gray-900">{selectedProjectData.role}</dd>
                        </div>
                        {selectedProjectData.teamSize && (
                          <div>
                            <dt className="text-sm font-medium text-gray-500">チーム規模</dt>
                            <dd className="text-sm text-gray-900">{selectedProjectData.teamSize}名</dd>
                          </div>
                        )}
                        <div>
                          <dt className="text-sm font-medium text-gray-500">業種・契約形態</dt>
                          <dd className="text-sm text-gray-900">{selectedProjectData.industry} ／ {selectedProjectData.employment}</dd>
                        </div>
                        {selectedProjectData.technologies.length > 0 && (
                          <div>
                            <dt className="text-sm font-medium text-gray-500 mb-2">使用技術</dt>
                            <dd className="flex flex-wrap gap-1">
                              {selectedProjectData.technologies.map((tech) => (
                                <span key={tech} className="bg-primary-100 text-primary-800 text-xs px-2 py-1 rounded">
                                  {tech}
                                </span>
                              ))}
                            </dd>
                          </div>
                        )}
                      </dl>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {!selectedProjectData && (
              <div className="mt-8">
                <h2 className="text-lg font-semibold text-gray-900 mb-4">プロジェクトへの取り組み方針</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {APPROACHES.map((item) => (
                    <div key={item.title} className="flex gap-4 bg-gray-50 border border-gray-200 rounded-lg p-5">
                      <span className={`flex-shrink-0 w-10 h-10 rounded-lg flex items-center justify-center ${item.color}`} aria-hidden="true">
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={item.icon} />
                        </svg>
                      </span>
                      <div>
                        <h3 className="text-sm font-bold text-gray-900">{item.title}</h3>
                        <p className="text-sm text-gray-600 leading-relaxed mt-1">{item.detail}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}

export default Projects
