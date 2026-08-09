import type { Event } from '@entities/event'
import {
  EventCategoryText,
  EventDescription,
  EventTypeText,
} from '@entities/event'
import { events } from '@shared/content'
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

const GAP = 32
const MOBILE_GAP = 16
const SLIDE_PADDING = 48
const DRAG_THRESHOLD = 50

const EventCard = ({ event }: { event: Event }) => {
  const isUpcoming = event.status === 'open' || event.status === 'preparation'

  return (
    <Card className="flex flex-col h-full bg-bg-tertiary border-border">
      <div className="mb-4 flex flex-wrap items-center gap-2">
        <span
          className={cn(
            'text-[11px] font-bold tracking-wider px-2 py-1 rounded-full',
            isUpcoming ? badgeStyles.upcoming : badgeStyles.past,
          )}
        >
          {EventDescription[event.status]}
        </span>
        <span className="text-[11px] font-bold tracking-wider px-2 py-1 rounded-full bg-primary/10 text-text-primary border border-secondary">
          {EventTypeText[event.type]}
        </span>
        <span className="text-[11px] font-bold tracking-wider px-2 py-1 rounded-full bg-primary/10 text-text-primary border border-secondary">
          {EventCategoryText[event.category]}
        </span>
      </div>

      <h3 className="text-xl font-bold leading-tight mb-4 line-clamp-2">
        {event.title}
      </h3>

      <ul className="mb-6 space-y-1 text-gray-400 text-sm">
        {event.description.map((line) => (
          <li key={line} className="flex gap-2">
            <span aria-hidden className="text-primary/60">
              ·
            </span>
            <span>{line}</span>
          </li>
        ))}
      </ul>

      <div className="mt-auto space-y-3 pt-2 text-sm text-gray-400">
        <div className="flex items-center gap-2">
          <FiCalendar size={16} className="flex-shrink-0" />
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
          <FiClock size={16} className="flex-shrink-0" />
          <span>{event.time}</span>
        </div>
        <div className="flex items-center gap-2">
          <FiMapPin size={16} className="flex-shrink-0" />
          <span>{event.location}</span>
        </div>
        {event.attendees !== undefined && (
          <div className="flex items-center gap-2">
            <FiUsers size={16} className="flex-shrink-0" />
            <span>커뮤니티 참여자 {event.attendees} 명</span>
          </div>
        )}
      </div>

      {event.link && (
        <Button
          variant="outline"
          className="group mt-6 w-full border-border text-text-primary hover:bg-primary hover:text-bg-primary hover:border-primary"
          onClick={() => {
            window.open(event.link, '_blank', 'noopener,noreferrer')
          }}
        >
          <span className="text-primary transition-colors group-hover:text-bg-primary">
            {event.linkLabel}
          </span>
        </Button>
      )}
    </Card>
  )
}

export const EventsGrid = () => {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isDragging, setIsDragging] = useState(false)
  const [startX, setStartX] = useState(0)
  const [cardsPerView, setCardsPerView] = useState(3)
  const [translateX, setTranslateX] = useState(0)
  const containerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const updateCardsPerView = () => {
      if (window.innerWidth >= 1024) setCardsPerView(3)
      else if (window.innerWidth >= 768) setCardsPerView(2)
      else setCardsPerView(1)
    }

    updateCardsPerView()
    window.addEventListener('resize', updateCardsPerView)
    return () => window.removeEventListener('resize', updateCardsPerView)
  }, [])

  const shouldShowSlider = events.length > cardsPerView
  const maxIndex = shouldShowSlider ? events.length - cardsPerView : 0
  // 화면 크기가 줄어들면 maxIndex 가 함께 줄어들므로 렌더 시점에 보정합니다.
  const activeIndex = Math.min(currentIndex, maxIndex)
  const isAtStart = activeIndex === 0
  const isAtEnd = activeIndex >= maxIndex

  useEffect(() => {
    if (!shouldShowSlider) return

    const container = containerRef.current
    if (!container) return

    const updateTranslateX = () => {
      const availableWidth = container.clientWidth - SLIDE_PADDING
      const gap = cardsPerView === 1 ? MOBILE_GAP : GAP
      const cardWidth =
        (availableWidth - gap * (cardsPerView - 1)) / cardsPerView
      setTranslateX(activeIndex * (cardWidth + gap))
    }

    updateTranslateX()

    const observer = new ResizeObserver(updateTranslateX)
    observer.observe(container)
    return () => observer.disconnect()
  }, [shouldShowSlider, activeIndex, cardsPerView])

  const goTo = (delta: number) => {
    setCurrentIndex(Math.min(maxIndex, Math.max(0, activeIndex + delta)))
  }

  const handleDrag = (currentX: number) => {
    if (!isDragging || !shouldShowSlider) return
    const diff = startX - currentX
    if (Math.abs(diff) <= DRAG_THRESHOLD) return

    goTo(diff > 0 ? 1 : -1)
    setIsDragging(false)
  }

  if (!shouldShowSlider) {
    return (
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {events.map((event) => (
          <EventCard key={event.id} event={event} />
        ))}
      </div>
    )
  }

  return (
    <div className="relative">
      <button
        onClick={() => goTo(-1)}
        className={cn(
          'absolute left-0 top-1/2 -translate-y-1/2 z-10 w-12 h-12 rounded-full bg-bg-tertiary border border-border text-text-primary flex items-center justify-center transition-all hover:bg-primary hover:text-text-dark hover:border-primary',
          isAtStart && 'hidden',
        )}
        aria-label="이전 이벤트"
      >
        <FiChevronLeft size={20} />
      </button>

      <button
        onClick={() => goTo(1)}
        className={cn(
          'absolute right-0 top-1/2 -translate-y-1/2 z-10 w-12 h-12 rounded-full bg-bg-tertiary border border-border text-text-primary flex items-center justify-center transition-all hover:bg-primary hover:text-text-dark hover:border-primary',
          isAtEnd && 'hidden',
        )}
        aria-label="다음 이벤트"
      >
        <FiChevronRight size={20} />
      </button>

      <div
        ref={containerRef}
        className="overflow-hidden px-12"
        onMouseDown={(e) => {
          setIsDragging(true)
          setStartX(e.pageX)
        }}
        onMouseMove={(e) => handleDrag(e.pageX)}
        onMouseUp={() => setIsDragging(false)}
        onMouseLeave={() => setIsDragging(false)}
        onTouchStart={(e) => {
          setIsDragging(true)
          setStartX(e.touches[0].pageX)
        }}
        onTouchMove={(e) => handleDrag(e.touches[0].pageX)}
        onTouchEnd={() => setIsDragging(false)}
        style={{ cursor: isDragging ? 'grabbing' : 'grab' }}
      >
        <div
          className={cn(
            'flex items-stretch transition-transform duration-300 ease-out',
            cardsPerView === 1 ? 'gap-4' : 'gap-8',
          )}
          style={{ transform: `translateX(-${translateX}px)` }}
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
              <EventCard event={event} />
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
