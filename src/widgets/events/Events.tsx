import { EventsGrid } from './ui/EventsGrid'

export const Events = () => {
  return (
    <section className="relative isolate py-24 bg-bg-primary -mt-px">
      <div className="container mx-auto px-4">
        <div className="mb-16">
          <h2 className="text-4xl font-bold mb-4">이벤트 목록</h2>
          <p className="text-gray-400">
            다가오는 이벤트와 지난 이벤트를 확인할 수 있습니다.
          </p>
        </div>
        <EventsGrid />
      </div>
    </section>
  )
}
