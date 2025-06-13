import React from 'react'

interface SkillCategory {
  name: string
  skills: Array<{
    name: string
    level: number
    experience: string
  }>
}

const Skills: React.FC = () => {
  const skillCategories: SkillCategory[] = [
    {
      name: 'モバイル開発',
      skills: [
        { name: 'Swift', level: 95, experience: '8年' },
        { name: 'iOS', level: 95, experience: '8年' },
        { name: 'Kotlin', level: 85, experience: '4年' },
        { name: 'Android', level: 85, experience: '6年' },
        { name: 'Objective-C', level: 80, experience: '5年' },
        { name: 'UIKit', level: 90, experience: '8年' },
        { name: 'Core Data', level: 85, experience: '6年' },
      ]
    },
    {
      name: 'Web開発（フロントエンド）',
      skills: [
        { name: 'TypeScript', level: 90, experience: '5年' },
        { name: 'JavaScript', level: 95, experience: '10年' },
        { name: 'React', level: 85, experience: '4年' },
        { name: 'Vue', level: 80, experience: '3年' },
        { name: 'Next.js', level: 75, experience: '2年' },
        { name: 'jQuery', level: 85, experience: '8年' },
        { name: 'HTML/CSS', level: 90, experience: '12年' },
      ]
    },
    {
      name: 'Web開発（バックエンド）',
      skills: [
        { name: 'Java', level: 90, experience: '8年' },
        { name: 'Spring', level: 85, experience: '6年' },
        { name: 'PHP', level: 85, experience: '7年' },
        { name: 'Laravel', level: 80, experience: '4年' },
        { name: 'Ruby', level: 80, experience: '5年' },
        { name: 'Rails', level: 75, experience: '4年' },
        { name: 'C#', level: 75, experience: '4年' },
      ]
    },
    {
      name: 'データベース・インフラ',
      skills: [
        { name: 'MySQL', level: 90, experience: '10年' },
        { name: 'PostgreSQL', level: 80, experience: '6年' },
        { name: 'Redis', level: 75, experience: '4年' },
        { name: 'AWS', level: 85, experience: '6年' },
        { name: 'Docker', level: 80, experience: '5年' },
        { name: 'Linux', level: 85, experience: '12年' },
        { name: 'Git', level: 95, experience: '15年' },
      ]
    },
    {
      name: 'その他技術・ツール',
      skills: [
        { name: 'NFC', level: 80, experience: '2年' },
        { name: 'Jenkins', level: 75, experience: '5年' },
        { name: 'Appium', level: 70, experience: '3年' },
        { name: 'cocos2d', level: 75, experience: '3年' },
        { name: 'Firebase', level: 75, experience: '4年' },
        { name: 'Vim', level: 90, experience: '15年' },
        { name: 'Eclipse', level: 80, experience: '8年' },
      ]
    }
  ]

  const getSkillLevelColor = (level: number) => {
    if (level >= 80) return 'bg-green-500'
    if (level >= 60) return 'bg-yellow-500'
    return 'bg-red-500'
  }

  const getSkillLevelText = (level: number) => {
    if (level >= 80) return '上級'
    if (level >= 60) return '中級'
    return '初級'
  }

  return (
    <section id="skills" className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white shadow rounded-lg">
          <div className="px-4 py-5 sm:p-6">
            <h1 className="text-3xl font-bold text-gray-900 mb-8">スキル一覧</h1>
            
            <div className="space-y-8">
              {skillCategories.map((category, categoryIndex) => (
                <div key={categoryIndex} className="bg-gray-50 rounded-lg p-6">
                  <h2 className="text-xl font-semibold text-gray-900 mb-4">
                    {category.name}
                  </h2>
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                    {category.skills.map((skill, skillIndex) => (
                      <div key={skillIndex} className="bg-white p-4 rounded-lg shadow-sm">
                        <div className="flex justify-between items-center mb-2">
                          <h3 className="font-medium text-gray-900">{skill.name}</h3>
                          <span className={`px-2 py-1 text-xs font-medium rounded-full text-white ${getSkillLevelColor(skill.level)}`}>
                            {getSkillLevelText(skill.level)}
                          </span>
                        </div>
                        <div className="mb-2">
                          <div className="w-full bg-gray-200 rounded-full h-2">
                            <div
                              className={`h-2 rounded-full ${getSkillLevelColor(skill.level)}`}
                              style={{ width: `${skill.level}%` }}
                            ></div>
                          </div>
                        </div>
                        <div className="flex justify-between text-sm text-gray-500">
                          <span>経験年数: {skill.experience}</span>
                          <span>{skill.level}%</span>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-8 bg-blue-50 border border-blue-200 rounded-lg p-6">
              <h2 className="text-lg font-semibold text-blue-900 mb-3">
                スキル習得に対する姿勢
              </h2>
              <div className="text-blue-800 space-y-2">
                <p>
                  • <strong>継続的学習</strong>: 新しい技術動向を常にキャッチアップし、実際のプロジェクトで活用
                </p>
                <p>
                  • <strong>実践重視</strong>: 理論だけでなく、実際の開発を通してスキルを深化
                </p>
                <p>
                  • <strong>技術選択</strong>: プロジェクトの要件に応じて最適な技術スタックを選択・提案
                </p>
                <p>
                  • <strong>知識共有</strong>: ブログやOSS活動を通じて学んだ知識を積極的に共有
                </p>
              </div>
            </div>

            <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="text-center">
                <div className="text-3xl font-bold text-primary-600">25+</div>
                <div className="text-sm font-medium text-gray-500">使用技術数</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-primary-600">20+</div>
                <div className="text-sm font-medium text-gray-500">完了プロジェクト</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-primary-600">30年+</div>
                <div className="text-sm font-medium text-gray-500">プログラミング歴</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Skills