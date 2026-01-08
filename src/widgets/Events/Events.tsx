import { Calendar, MapPin, Users } from 'lucide-react'
import { Button } from '../../shared/ui/Button'
import { Card } from '../../shared/ui/Card'

const events = [
  {
    status: 'upcoming',
    description: '다가오는 이벤트',
    title: 'MUG Korea Seoul 2026년 1분기 모임',
    date: '2026년 2월 15일',
    location: '서울 지역',
    attendees: '참여 인원 000명',
    action: '참여하기',
  },
  {
    status: 'past event',
    description: '지난 이벤트',
    title: 'MongoDB AI Skills Session #3: AI Agent 실습',
    date: '2025년 12월 19일',
    location: '온라인',
    attendees: '참여 인원 45명',
    action: '녹화본 보기',
  },
  {
    status: 'past event',
    description: '지난 이벤트',
    title: 'MongoDB AI Skills Session #2: RAG 실습',
    date: '2025년 12월 12일',
    location: '온라인',
    attendees: '참여 인원 52명',
    action: '녹화본 보기',
  },
]

export const Events = () => {
  return (
    <section className="py-24 bg-[#011621]">
      <div className="container mx-auto px-4">
        <div className="mb-16">
          <h2 className="text-4xl font-bold mb-4">이벤트 목록</h2>
          <p className="text-gray-400">
            다가오는 이벤트와 지난 이벤트를 확인할 수 있습니다.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {events.map((event, index) => (
            <Card
              key={index}
              className="flex flex-col h-full bg-[#061e2b] border-white/5"
            >
              <div className="mb-4">
                <span
                  className={cn(
                    'text-[10px] font-bold uppercase tracking-wider px-2 py-1 rounded-full',
                    event.status === 'upcoming'
                      ? 'bg-[#00ed64]/10 text-[#00ed64] border border-[#00ed64]'
                      : 'bg-white/10 text-gray-400 border border-white/10',
                  )}
                >
                  {event.description}
                </span>
              </div>
              <h3 className="text-xl font-bold mb-6 flex-grow">
                {event.title}
              </h3>

              <div className="space-y-3 mb-8 text-sm text-gray-400">
                <div className="flex items-center gap-2">
                  <Calendar size={16} />
                  <span>{event.date}</span>
                </div>
                <div className="flex items-center gap-2">
                  <MapPin size={16} />
                  <span>{event.location}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Users size={16} />
                  <span>{event.attendees}</span>
                </div>
              </div>

              <Button
                variant="outline"
                className="w-full border-white/10 text-white hover:bg-[#00ed64] hover:text-[#001e2b] hover:border-[#00ed64]"
              >
                {event.action}
              </Button>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}

// Helper for cn in this file since I forgot to import it
import { cn } from '../../shared/lib/utils'
