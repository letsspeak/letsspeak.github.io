import React, { useState } from 'react'
import { projects } from '../../data/projects'

const Projects: React.FC = () => {
  const [selectedProject, setSelectedProject] = useState<string | null>(null)

  const getStatusBadge = (status: string) => {
    switch (status) {
      case 'completed':
        return <span className="bg-green-100 text-green-800 text-xs font-medium px-2.5 py-0.5 rounded-full">完了</span>
      case 'in-progress':
        return <span className="bg-blue-100 text-blue-800 text-xs font-medium px-2.5 py-0.5 rounded-full">進行中</span>
      case 'planned':
        return <span className="bg-yellow-100 text-yellow-800 text-xs font-medium px-2.5 py-0.5 rounded-full">計画中</span>
      default:
        return null
    }
  }

  const selectedProjectData = selectedProject ? projects.find(p => p.id === selectedProject) : null

  return (
    <section id="projects" className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white shadow rounded-lg">
          <div className="px-4 py-5 sm:p-6">
            <div className="flex justify-between items-center mb-8">
              <h1 className="text-3xl font-bold text-gray-900">プロジェクト一覧</h1>
              <div className="text-sm text-gray-500">
                {projects.length} プロジェクト
              </div>
            </div>

            {!selectedProject ? (
              <>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {projects.map((project) => (
                    <div key={project.id} className="bg-gray-50 rounded-lg p-6 hover:shadow-md transition-shadow">
                      <div className="flex justify-between items-start mb-3">
                        <h2 className="text-lg font-semibold text-gray-900 line-clamp-2">
                          {project.title}
                        </h2>
                        {getStatusBadge(project.status)}
                      </div>
                      
                      <p className="text-gray-600 text-sm mb-4 line-clamp-3">
                        {project.description}
                      </p>

                      <div className="mb-4">
                        <div className="flex flex-wrap gap-1">
                          {project.technologies.slice(0, 3).map((tech, index) => (
                            <span key={index} className="bg-primary-100 text-primary-800 text-xs px-2 py-1 rounded">
                              {tech}
                            </span>
                          ))}
                          {project.technologies.length > 3 && (
                            <span className="text-xs text-gray-500 px-2 py-1">
                              +{project.technologies.length - 3}
                            </span>
                          )}
                        </div>
                      </div>

                      <div className="text-xs text-gray-500 mb-4">
                        <div>期間: {project.period}</div>
                        <div>役割: {project.role}</div>
                      </div>

                      <div className="flex justify-between items-center">
                        <button
                          onClick={() => setSelectedProject(project.id)}
                          className="text-primary-600 hover:text-primary-500 text-sm font-medium"
                        >
                          詳細を見る →
                        </button>
                        <div className="flex space-x-2">
                          {project.githubUrl && (
                            <a
                              href={project.githubUrl}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="text-gray-400 hover:text-gray-500"
                            >
                              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                                <path fillRule="evenodd" d="M10 0C4.477 0 0 4.484 0 10.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0110 4.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.203 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.942.359.31.678.921.678 1.856 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0020 10.017C20 4.484 15.522 0 10 0z" clipRule="evenodd" />
                              </svg>
                            </a>
                          )}
                          {project.demoUrl && (
                            <a
                              href={project.demoUrl}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="text-gray-400 hover:text-gray-500"
                            >
                              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                              </svg>
                            </a>
                          )}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>

                <div className="mt-8 bg-blue-50 border border-blue-200 rounded-lg p-6">
                  <h2 className="text-lg font-semibold text-blue-900 mb-3">
                    プロジェクトへの取り組み方針
                  </h2>
                  <div className="text-blue-800 space-y-2">
                    <p>
                      • <strong>技術選択</strong>: プロジェクトの要件に最適な技術スタックの選定
                    </p>
                    <p>
                      • <strong>品質重視</strong>: テスト駆動開発、コードレビュー、継続的インテグレーション
                    </p>
                    <p>
                      • <strong>協調性</strong>: チームメンバーとの密な連携とナレッジシェア
                    </p>
                    <p>
                      • <strong>継続改善</strong>: プロジェクト振り返りと次回への知見活用
                    </p>
                  </div>
                </div>
              </>
            ) : selectedProjectData && (
              <div>
                <div className="mb-6">
                  <button
                    onClick={() => setSelectedProject(null)}
                    className="inline-flex items-center text-primary-600 hover:text-primary-500 text-sm font-medium"
                  >
                    <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                    </svg>
                    プロジェクト一覧に戻る
                  </button>
                </div>

                <div className="flex justify-between items-start mb-6">
                  <div>
                    <h1 className="text-3xl font-bold text-gray-900 mb-2">{selectedProjectData.title}</h1>
                    <p className="text-lg text-gray-600">{selectedProjectData.description}</p>
                  </div>
                  {getStatusBadge(selectedProjectData.status)}
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                  <div className="lg:col-span-2 space-y-8">
                    <div>
                      <h2 className="text-xl font-semibold text-gray-900 mb-3">プロジェクト概要</h2>
                      <p className="text-gray-700 leading-relaxed">{selectedProjectData.longDescription}</p>
                    </div>

                    <div>
                      <h2 className="text-xl font-semibold text-gray-900 mb-3">技術的課題</h2>
                      <ul className="space-y-2">
                        {selectedProjectData.challenges.map((challenge, index) => (
                          <li key={index} className="flex items-start">
                            <svg className="w-5 h-5 text-red-500 mr-2 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                              <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clipRule="evenodd" />
                            </svg>
                            <span className="text-gray-700">{challenge}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div>
                      <h2 className="text-xl font-semibold text-gray-900 mb-3">成果・実績</h2>
                      <ul className="space-y-2">
                        {selectedProjectData.achievements.map((achievement, index) => (
                          <li key={index} className="flex items-start">
                            <svg className="w-5 h-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                              <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                            </svg>
                            <span className="text-gray-700">{achievement}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  <div className="lg:col-span-1">
                    <div className="bg-gray-50 p-6 rounded-lg space-y-6">
                      <div>
                        <h3 className="text-lg font-semibold text-gray-900 mb-3">プロジェクト詳細</h3>
                        <dl className="space-y-3">
                          <div>
                            <dt className="text-sm font-medium text-gray-500">期間</dt>
                            <dd className="text-sm text-gray-900">{selectedProjectData.period}</dd>
                          </div>
                          <div>
                            <dt className="text-sm font-medium text-gray-500">役割</dt>
                            <dd className="text-sm text-gray-900">{selectedProjectData.role}</dd>
                          </div>
                        </dl>
                      </div>

                      <div>
                        <h3 className="text-lg font-semibold text-gray-900 mb-3">使用技術</h3>
                        <div className="flex flex-wrap gap-2">
                          {selectedProjectData.technologies.map((tech, index) => (
                            <span key={index} className="bg-primary-100 text-primary-800 text-xs px-2.5 py-1 rounded-full">
                              {tech}
                            </span>
                          ))}
                        </div>
                      </div>

                      {(selectedProjectData.githubUrl || selectedProjectData.demoUrl) && (
                        <div>
                          <h3 className="text-lg font-semibold text-gray-900 mb-3">リンク</h3>
                          <div className="space-y-2">
                            {selectedProjectData.githubUrl && (
                              <a
                                href={selectedProjectData.githubUrl}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex items-center text-primary-600 hover:text-primary-500 text-sm"
                              >
                                <svg className="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 20 20">
                                  <path fillRule="evenodd" d="M10 0C4.477 0 0 4.484 0 10.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0110 4.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.203 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.942.359.31.678.921.678 1.856 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0020 10.017C20 4.484 15.522 0 10 0z" clipRule="evenodd" />
                                </svg>
                                GitHubで見る
                              </a>
                            )}
                            {selectedProjectData.demoUrl && (
                              <a
                                href={selectedProjectData.demoUrl}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex items-center text-primary-600 hover:text-primary-500 text-sm"
                              >
                                <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                                </svg>
                                デモを見る
                              </a>
                            )}
                          </div>
                        </div>
                      )}
                    </div>
                  </div>
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