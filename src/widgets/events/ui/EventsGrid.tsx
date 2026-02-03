import type { Event } from '@entities/event'
import {
  EventCategoryText,
  EventDescription,
  EventTypeText,
} from '@entities/event'
import { badgeStyles } from '@shared/lib/styles'
import { cn } from '@shared/lib/utils'
import { Button } from '@shared/ui/Button'
import { Card } from '@shared/ui/Card'
import { useEffect, useRef, useState } from 'react'
import {
  FiCalendar,
  FiChevronLeft,
  FiChevronRight,
  FiClock,
  FiMapPin,
  FiUsers,
} from 'react-icons/fi'

/**
 * 이벤트 데이터 입니다.
 * 데이터 소스 API 연동 후 데이터베이스로 이동할 예정입니다.
 */
const events: Event[] = [
  {
    id: 'mug-korea-seoul-2026-1',
    category: 'meetup',
    type: 'inPerson',
    status: 'open',
    statusText: EventDescription.open,
    time: '19:00 ~ 21:30',
    description: `- 2026 MongoDB 최신 기술 동향
    - 인덱스 & 쿼리 최적화 실전 지식 (Community Pick!)
    - 데이터 마이그레이션 & RAG 구축 (실사용 사례)
    - 네트워킹 & 커뮤니티 활동 기회`,
    title: 'MUG Seoul MeetUp #2',
    date: '2026-02-26',
    location: '서울 강남구 역삼동 629-1 인사이트 빌딩 지하1층',
    attendees: '12',
    action: 'MeetUp 페이지 바로가기',
    link: 'https://www.meetup.com/mongodb-usergroup-seoul/events/313060611/?eventOrigin=notifications&notificationId=%3Cinbox%3E%21477271970-1770083887463',
    createdAt: '2026-01-15',
    updatedAt: '2026-01-15',
  },
  {
    id: 'ai-skills-session-3',
    category: 'skillsSession',
    type: 'online',
    status: 'closed',
    statusText: EventDescription.closed,
    time: '09:00 ~ 12:00',
    description: `- AI 에이전트의 기본 개념 이해
    - MongoDB를 활용한 AI 에이전트 상태 관리
    - 다양한 AI 에이전트 프레임워크 사용
    `,
    title: `MongoDB AI Skills Session #3: 
    AI 에이전트 구축 A to Z`,
    date: '2025-12-20',
    location: '온라인',
    attendees: '42',
    action: 'MongoDB University 강의 보기',
    link: 'https://learn.mongodb.com/courses/ai-agents-with-mongodb?sessionFields=%5B%5B%22learning-method%22%2C%22Skill%22%5D%5D',
    createdAt: '2026-01-15',
    updatedAt: '2026-01-15',
  },
  {
    id: 'ai-skills-session-2',
    category: 'skillsSession',
    type: 'online',
    status: 'closed',
    statusText: EventDescription.closed,
    time: '09:00 ~ 12:00',
    description: `- RAG 아키텍처 이해
    - MongoDB와 임베딩 모델 및 LLM 연동 방법
    - 데이터 검색 및 답변 생성 과정 구현
    `,
    title: `MongoDB AI Skills Session #2: 
    MongoDB 를 사용한 RAG앱 구축`,
    date: '2025-12-13',
    location: '온라인',
    attendees: '59',
    action: 'MongoDB University 강의 보기',
    link: 'https://learn.mongodb.com/courses/rag-with-mongodb?sessionFields=%5B%5B%22learning-method%22%2C%22Skill%22%5D%5D',
    createdAt: '2026-01-15',
    updatedAt: '2026-01-15',
  },
  {
    id: 'ai-skills-session-1',
    category: 'skillsSession',
    type: 'online',
    status: 'closed',
    statusText: EventDescription.closed,
    time: '09:00 ~ 12:00',
    description: `- 벡터 검색의 기본 개념 이해
    - MongoDB Atlas Vector Search 설정 및 ㅁ활용
    - 다양한 벡터 검색 알고리즘 및 기법 적용
    `,
    title: `MongoDB AI Skills Session #1: 
    벡터 검색: 초급부터 고급까지`,
    date: '2025-12-06',
    location: '온라인',
    attendees: '122',
    action: 'MongoDB University 강의 보기',
    link: 'https://learn.mongodb.com/courses/vector-search-fundamentals?sessionFields=%5B%5B%22learning-method%22%2C%22Skill%22%5D%5D',
    createdAt: '2026-01-15',
    updatedAt: '2026-01-15',
  },
  {
    id: 'mug-korea-seoul-2025-11',
    category: 'meetup',
    type: 'inPerson',
    status: 'closed',
    statusText: EventDescription.closed,
    time: '12:00 ~ 14:30',
    description: `- MongoDB와 AI 시대의 데이터 전략
    - 실전 의료 데이터 사례 공유
    - 커뮤니티 로드맵 & 네트워킹`,
    title: 'MUG Seoul MeetUp #1:',
    date: '2025-11-28',
    location: '서울 지역',
    attendees: '31',
    action: '후기 보기 (Slack)',
    link: 'https://mongodevkr.slack.com/archives/C09JNUJ5XEC/p1764573035347299',
    createdAt: '2026-01-15',
    updatedAt: '2026-01-15',
  },
]
/* 
이벤트 섹션 카드 그리드를 생성하는 컴포넌트 입니다.
모바일 카드 넓이를 100%로, 화면 위치는 웹과 다르게 가운데로 위치하도록 조정하는 방법을 찾는 중입니다.
**/
export const EventsGrid = () => {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isDragging, setIsDragging] = useState(false)
  const [startX, setStartX] = useState(0)
  const containerRef = useRef<HTMLDivElement>(null)

  const [cardsPerView, setCardsPerView] = useState(3)

  useEffect(() => {
    const updateCardsPerView = () => {
      if (typeof window === 'undefined') return
      if (window.innerWidth >= 1024) {
        setCardsPerView(3)
      } else if (window.innerWidth >= 768) {
        setCardsPerView(2)
      } else {
        setCardsPerView(1)
      }
    }

    updateCardsPerView()
    window.addEventListener('resize', updateCardsPerView)
    return () => window.removeEventListener('resize', updateCardsPerView)
  }, [])

  const shouldShowSlider = events.length > cardsPerView
  const maxIndex = shouldShowSlider ? events.length - cardsPerView : 0

  // 드래그 시작
  const handleMouseDown = (e: React.MouseEvent) => {
    if (!shouldShowSlider || !containerRef.current) return
    setIsDragging(true)
    setStartX(e.pageX)
  }

  // 드래그 중
  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDragging || !shouldShowSlider) return
    e.preventDefault()
    const diff = startX - e.pageX
    const threshold = 50 // 드래그 임계값 (px)

    if (Math.abs(diff) > threshold) {
      if (diff > 0 && !isAtEnd) {
        // 오른쪽으로 드래그 (다음)
        setCurrentIndex((prev) => Math.min(maxIndex, prev + 1))
        setIsDragging(false)
      } else if (diff < 0 && !isAtStart) {
        // 왼쪽으로 드래그 (이전)
        setCurrentIndex((prev) => Math.max(0, prev - 1))
        setIsDragging(false)
      }
    }
  }

  // 드래그 종료
  const handleMouseUp = () => {
    setIsDragging(false)
  }

  // 이전 슬라이드
  const handlePrev = () => {
    setCurrentIndex((prev) => Math.max(0, prev - 1))
  }

  // 다음 슬라이드
  const handleNext = () => {
    setCurrentIndex((prev) => Math.min(maxIndex, prev + 1))
  }

  // 터치 이벤트 지원
  const handleTouchStart = (e: React.TouchEvent) => {
    if (!shouldShowSlider) return
    setIsDragging(true)
    setStartX(e.touches[0].pageX)
  }

  const handleTouchMove = (e: React.TouchEvent) => {
    if (!isDragging || !shouldShowSlider) return
    const diff = startX - e.touches[0].pageX
    const threshold = 50 // 드래그 임계값 (px)

    if (Math.abs(diff) > threshold) {
      if (diff > 0 && currentIndex < maxIndex) {
        // 오른쪽으로 스와이프 (다음)
        setCurrentIndex((prev) => Math.min(maxIndex, prev + 1))
        setIsDragging(false)
      } else if (diff < 0 && currentIndex > 0) {
        // 왼쪽으로 스와이프 (이전)
        setCurrentIndex((prev) => Math.max(0, prev - 1))
        setIsDragging(false)
      }
    }
  }

  const handleTouchEnd = () => {
    setIsDragging(false)
  }

  // 화면 크기 변경 시 인덱스 조정
  useEffect(() => {
    const newMaxIndex = shouldShowSlider ? events.length - cardsPerView : 0
    if (currentIndex > newMaxIndex) {
      setCurrentIndex(newMaxIndex)
    }
  }, [cardsPerView, currentIndex, shouldShowSlider])
  const isAtStart = currentIndex === 0
  const isAtEnd = currentIndex === maxIndex
  const renderEventCard = (event: Event) => (
    <Card className="flex flex-col h-full bg-bg-tertiary border-border">
      <div className="mb-4 flex items-center gap-2">
        <span
          className={cn(
            'text-[11px] font-bold tracking-wider px-2 py-1 rounded-full',
            event.status === 'open' || event.status === 'preparation'
              ? badgeStyles.upcoming
              : badgeStyles.past,
          )}
        >
          {event.statusText}
        </span>
        <span
          className={cn(
            'text-[11px] font-bold tracking-wider px-2 py-1 rounded-full bg-primary/10 text-text-primary border border-secondary',
          )}
        >
          {EventTypeText[event.type]}
        </span>
        <span
          className={cn(
            'text-[11px] font-bold tracking-wider px-2 py-1 rounded-full bg-primary/10 text-text-primary border border-secondary',
          )}
        >
          {EventCategoryText[event.category]}
        </span>
      </div>
      <div className="mb-6 min-h-0 h-[72px] overflow-y-auto overflow-x-hidden">
        <h3 className="text-xl font-bold whitespace-pre-line leading-tight">
          {event.title}
        </h3>
      </div>
      <div className="mb-6 min-h-0 h-[120px] overflow-y-auto overflow-x-hidden">
        <p className="text-gray-400 whitespace-pre-line">{event.description}</p>
      </div>
      <div className="space-y-3 mb-8 text-sm text-gray-400">
        <div className="flex items-center gap-2">
          <FiCalendar size={16} />
          <span>
            {new Date(event.date).toLocaleDateString('ko-KR', {
              year: 'numeric',
              month: 'long',
              day: 'numeric',
              weekday: 'long',
            })}
          </span>
        </div>
        <div className="flex items-center gap-2">
          <FiClock size={16} />
          <span>{event.time}</span>
        </div>
        <div className="flex items-center gap-2">
          <FiMapPin size={16} />
          <span>{event.location}</span>
        </div>
        <div className="flex items-center gap-2">
          <FiUsers size={16} />
          <span>커뮤니티 참여자 {event.attendees} 명</span>
        </div>
      </div>

      <Button
        variant="outline"
        disabled={event.status === 'preparation'}
        className={cn(
          'group w-full border-border text-text-primary',
          event.status === 'preparation'
            ? 'cursor-not-allowed'
            : 'hover:bg-primary hover:text-bg-primary hover:border-primary',
        )}
        onClick={() => {
          if (event.link && event.status !== 'preparation') {
            window.open(event.link, '_blank', 'noopener,noreferrer')
          }
        }}
      >
        <span
          className={cn(
            'transition-colors',
            event.status === 'preparation'
              ? 'text-gray-500'
              : 'text-primary group-hover:text-bg-primary',
          )}
        >
          {event.action}
        </span>
      </Button>
    </Card>
  )

  // 3개 이하일 때는 일반 그리드로 표시
  if (!shouldShowSlider) {
    return (
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {events.map(renderEventCard)}
      </div>
    )
  }
  const GAP = 32 // 데스크톱/태블릿 gap
  const MOBILE_GAP = 16 // 모바일 gap (gap-4)
  const getTranslateX = () => {
    if (!containerRef.current) return 0
    const containerWidth = containerRef.current.clientWidth
    // 모바일에서는 카드 너비를 100%로 계산 (padding 제외 -> 조정 필요.)
    const padding = 48 // px-12 = 48px (좌우 각 24px)
    const availableWidth = containerWidth - padding

    if (cardsPerView === 1) {
      // 모바일: 카드 너비 + gap만큼 이동
      const cardWidth = availableWidth
      return currentIndex * (cardWidth + MOBILE_GAP)
    } else {
      // 데스크톱/태블릿: 카드 너비 + gap만큼 이동
      const cardWidth =
        (availableWidth - GAP * (cardsPerView - 1)) / cardsPerView
      return currentIndex * (cardWidth + GAP)
    }
  }

  // 3개 초과일 때 슬라이드 표시
  return (
    <div className="relative">
      {/* 화살표 버튼 */}
      <button
        onClick={handlePrev}
        disabled={isAtStart}
        className={cn(
          'absolute left-0 top-1/2 -translate-y-1/2 z-10 w-12 h-12 rounded-full bg-bg-tertiary border border-border text-text-primary flex items-center justify-center transition-all hover:bg-primary hover:text-text-dark hover:border-primary disabled:opacity-30 disabled:cursor-not-allowed disabled:hover:bg-bg-tertiary disabled:hover:text-text-primary disabled:hover:border-border shadow-lg',
          isAtStart && 'hidden',
        )}
        aria-label="이전 이벤트"
      >
        <FiChevronLeft size={20} />
      </button>

      <button
        onClick={handleNext}
        disabled={isAtEnd}
        className={cn(
          'absolute right-0 top-1/2 -translate-y-1/2 z-10 w-12 h-12 rounded-full bg-bg-tertiary border border-border text-text-primary flex items-center justify-center transition-all hover:bg-primary hover:text-text-dark hover:border-primary disabled:opacity-30 disabled:cursor-not-allowed disabled:hover:bg-bg-tertiary disabled:hover:text-text-primary disabled:hover:border-border shadow-lg',
          isAtEnd && 'hidden',
        )}
        aria-label="다음 이벤트"
      >
        <FiChevronRight size={20} />
      </button>

      {/* 슬라이드 컨테이너 */}
      <div
        ref={containerRef}
        className="overflow-hidden px-12"
        onMouseDown={handleMouseDown}
        onMouseMove={handleMouseMove}
        onMouseUp={handleMouseUp}
        onMouseLeave={handleMouseUp}
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleTouchEnd}
        style={{ cursor: isDragging ? 'grabbing' : 'grab' }}
      >
        <div
          className={cn(
            'flex transition-transform duration-300 ease-out',
            cardsPerView === 1 ? 'gap-4' : 'gap-8',
          )}
          style={{
            transform: `translateX(-${getTranslateX()}px)`,
          }}
        >
          {events.map((event) => (
            <div
              key={event.id}
              className="flex-shrink-0"
              style={{
                width:
                  cardsPerView === 1
                    ? '100%'
                    : `calc((100% - ${(cardsPerView - 1) * GAP}px) / ${cardsPerView})`,
              }}
            >
              {renderEventCard(event)}
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
