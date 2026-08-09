import type { Stat } from '@entities/stat'
import { events, site } from '@shared/content'
import { FiCalendar, FiInfo, FiUsers } from 'react-icons/fi'

const stats: Stat[] = [
  {
    id: 'members',
    icon: <FiUsers className="text-primary" size={24} />,
    label: '커뮤니티 멤버',
    value: `${site.memberCount}+`,
    note: site.memberCountNote,
  },
  {
    id: 'events',
    icon: <FiCalendar className="text-primary" size={24} />,
    label: '누적 이벤트',
    value: `${events.length}`,
    note: '공식 밋업 & 기술 세션',
  },
]

export const StatsGrid = () => {
  return (
    <div className="container mx-auto px-4">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
        {stats.map((stat) => (
          <div key={stat.id} className="flex flex-col items-center text-center">
            <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center mb-4">
              {stat.icon}
            </div>
            <p className="text-xl font-bold mb-1">
              {'{ '}
              {stat.label}: {stat.value}
              {' }'}
            </p>
            <p className="flex items-center gap-2 text-xs text-gray-400">
              <FiInfo size={16} />
              {stat.note}
            </p>
          </div>
        ))}
      </div>
    </div>
  )
}
