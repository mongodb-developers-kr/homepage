import { site } from '@shared/content'
import { Button } from '@shared/ui/Button'
import { FiPlus } from 'react-icons/fi'
import { EventsGrid } from './ui/EventsGrid'

export const Events = () => {
  return (
    <section id="events" className="relative isolate py-24 bg-bg-primary -mt-px">
      <div className="container mx-auto px-4">
        <div className="mb-16">
          <h2 className="text-4xl font-bold mb-4">이벤트</h2>
          <p className="text-gray-400 mb-6">
            MongoDB Developers KR에서 진행한 공식 밋업과 기술 세션을 모았습니다.
          </p>
          <p className="text-gray-300 mb-6">
            경험을 공유하고 피드백을 나누고 싶으신가요? <br />
            완성된 발표가 아니어도 괜찮습니다. 짧은 사례 공유, 시행착오, MongoDB
            를 사용하며 경험한 모든 것을 환영합니다.
          </p>

          <Button
            variant="outline"
            className="w-fit bg-secondary text-text-primary hover:bg-primary hover:text-text-dark hover:border-primary"
            onClick={() => {
              window.open(
                site.links.speakerForm,
                '_blank',
                'noopener,noreferrer',
              )
            }}
          >
            <FiPlus size={20} />
            발표 제안하기
          </Button>
        </div>
        <EventsGrid />
      </div>
    </section>
  )
}
