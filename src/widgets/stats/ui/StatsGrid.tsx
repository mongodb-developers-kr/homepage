import type { Stat } from '@entities/stat'
import { FiCalendar, FiInfo, FiUsers } from 'react-icons/fi'

const stats: Stat[] = [
  {
    id: 'members',
    icon: <FiUsers className="text-primary" size={24} />,
    value: 200,
    label: '회원',
  },
  {
    id: 'events',
    icon: <FiCalendar className="text-primary" size={24} />,
    value: 4,
    label: '이벤트',
  },
]

export const StatsGrid = () => {
  return (
    <div className="container mx-auto px-4">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
        {stats.map((stat: Stat) => (
          <div key={stat.id} className="flex flex-col items-center text-center">
            <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center mb-4">
              {stat.icon}
            </div>
            <div className="text-xl font-bold mb-1">
              {stat.label === '회원' ? (
                <span>{'{ 커뮤니티 멤버: '} {'{ \$gte: '}{stat.value}{' }'}{' }'} 
                <div className="text-xs text-gray-400">
                  <div className="flex items-center gap-2 justify-center mt-1">
                    <FiInfo size={16} /> Slack 기준
                  </div>
                </div>
                </span>
                
              ) : (
                <span>{'{ 누적 이벤트: '}{stat.value}{' }'} <div className="text-sm text-gray-400">
                    <div className="flex items-center gap-2 justify-center mt-1">
                      <FiInfo size={16} /> 공식 밋업 & 기술 세션
                    </div>
                  </div>
                </span>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
