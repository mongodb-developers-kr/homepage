import { EventsGrid } from './ui/EventsGrid'

export const Events = () => {
  return (
    <section id="events" className="relative isolate py-24 bg-bg-primary -mt-px">
      <div className="container mx-auto px-4">
        <div className="mb-16">
          <h2 className="text-4xl font-bold mb-4">이벤트 목록</h2>
          <p className="text-gray-400">
            MongoDB User Group Korea에서 진행한 공식 밋업과 기술 세션을
            모았습니다.
          </p>
        </div>
        <EventsGrid />
      </div>
    </section>
  )
}
