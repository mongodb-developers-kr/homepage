import { site, upcomingEvents } from '@shared/content'
import { Button } from '@shared/ui/Button'
import { FiArrowRight, FiCalendar, FiMessageSquare } from 'react-icons/fi'

const nextEvent = [...upcomingEvents].sort((a, b) =>
  a.date.localeCompare(b.date),
)[0]

const formatDate = (date: string) =>
  new Date(date).toLocaleDateString('ko-KR', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  })

const openExternal = (url: string) => {
  window.open(url, '_blank', 'noopener,noreferrer')
}

export const Hero = () => {
  return (
    <section id="about" className="relative isolate pt-40 pb-20 overflow-hidden">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-primary/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="container mx-auto px-4 text-center relative z-10">
        <h1 className="text-3xl md:text-5xl mb-6 tracking-tight leading-tight">
          {'{ '}MongoDB : "한국 개발자 모임" {'}'}
        </h1>
        <div className="text-lg md:text-xl text-gray-400 max-w-2xl mx-auto mb-10 leading-relaxed">
          <p>
            MongoDB 한국 개발자 모임에 오신 것을 환영합니다. <br /> MongoDB 를
            사용하며 고민했던 경험, 배운 것, 시행착오를 <br />
            개발자들끼리 편하게 나누는 커뮤니티 입니다.
          </p>
        </div>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Button
            className="gap-2 font-bold"
            onClick={() => openExternal(site.links.slackJoin)}
          >
            <FiMessageSquare size={20} />
            Slack 워크스페이스 가입하기
          </Button>
          <Button
            variant="ghost"
            className="gap-2"
            onClick={() => openExternal(site.links.meetupPastEvents)}
          >
            지난 밋업 둘러보기
            <FiArrowRight size={18} />
          </Button>
        </div>

        <div className="mt-12 flex justify-center">
          {nextEvent ? (
            <button
              onClick={() => {
                if (nextEvent.link) openExternal(nextEvent.link)
              }}
              className="flex flex-col sm:flex-row items-center gap-x-3 gap-y-1 rounded-full border border-primary/40 bg-primary/5 px-5 py-3 text-sm text-gray-300 hover:border-primary transition-colors"
            >
              <span className="flex items-center gap-2 text-primary font-semibold">
                <FiCalendar size={16} />
                다음 밋업
              </span>
              <span>
                {formatDate(nextEvent.date)} · {nextEvent.location}
              </span>
              <span className="text-text-primary font-medium">
                {nextEvent.title}
              </span>
            </button>
          ) : (
            <p className="flex items-center gap-2 rounded-full border border-border bg-white/5 px-5 py-3 text-sm text-gray-400">
              <FiCalendar size={16} />
              다음 밋업을 준비하고 있습니다. 일정이 확정되면 Slack에서 가장 먼저
              안내드립니다.
            </p>
          )}
        </div>
      </div>
    </section>
  )
}
