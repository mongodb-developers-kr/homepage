import type { Stat } from '@entities/stat'
import { FiCalendar, FiUsers } from 'react-icons/fi'

const stats: Stat[] = [
  {
    id: 'members',
    icon: <FiUsers className="text-primary" size={24} />,
    value: 300,
    label: '회원',
  },
  {
    id: 'events',
    icon: <FiCalendar className="text-primary" size={24} />,
    value: 1,
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
                <span>{stat.value}+ 회원</span>
              ) : (
                <span>{stat.value} 이벤트</span>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
