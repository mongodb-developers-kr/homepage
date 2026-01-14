import type { Event } from '@entities/event'
import { badgeStyles } from '@shared/lib/styles'
import { cn } from '@shared/lib/utils'
import { Button } from '@shared/ui/Button'
import { Card } from '@shared/ui/Card'
import { FiCalendar, FiMapPin, FiUsers } from 'react-icons/fi'

const events: Event[] = [
  {
    id: 'mug-korea-seoul-2026-1',
    status: 'upcoming',
    description: '다가오는 이벤트',
    title: 'MUG Korea Seoul 2026년 1분기 모임',
    date: '2026-02-15',
    location: '서울 지역',
    attendees: '000',
    action: '참여하기',
  },
  {
    id: 'mug-korea-seoul-2025-12',
    status: 'past',
    description: '지난 이벤트',
    title: 'MongoDB AI Skills Session #3: AI Agent 실습',
    date: '2025-12-19',
    location: '온라인',
    attendees: '45',
    action: '녹화본 보기',
  },
  {
    id: 'mug-korea-seoul-2025-11',
    status: 'past',
    description: '지난 이벤트',
    title: 'MongoDB AI Skills Session #2: RAG 실습',
    date: '2025-12-12',
    location: '온라인',
    attendees: '52',
    action: '녹화본 보기',
  },
]

export const EventsGrid = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      {events.map((event: Event) => (
        <Card
          key={event.id}
          className="flex flex-col h-full bg-bg-tertiary border-border"
        >
          <div className="mb-4">
            <span
              className={cn(
                'text-[10px] font-bold uppercase tracking-wider px-2 py-1 rounded-full',
                event.status === 'upcoming'
                  ? badgeStyles.upcoming
                  : badgeStyles.past,
              )}
            >
              {event.description}
            </span>
          </div>
          <h3 className="text-xl font-bold mb-6 flex-grow">{event.title}</h3>

          <div className="space-y-3 mb-8 text-sm text-gray-400">
            <div className="flex items-center gap-2">
              <FiCalendar size={16} />
              <span>{new Date(event.date).toLocaleDateString()}</span>
            </div>
            <div className="flex items-center gap-2">
              <FiMapPin size={16} />
              <span>{event.location}</span>
            </div>
            <div className="flex items-center gap-2">
              <FiUsers size={16} />
              <span>참여 인원 {event.attendees}명</span>
            </div>
          </div>

          <Button
            variant="outline"
            className="w-full border-border text-text-primary hover:bg-primary hover:text-text-dark hover:border-primary"
          >
            {event.action}
          </Button>
        </Card>
      ))}
    </div>
  )
}
