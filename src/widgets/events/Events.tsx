import { Button } from '@shared/ui/Button'
import { FiPlus } from 'react-icons/fi'
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
          </p> <br/>
          <p>
            경험을 공유하고 피드백을 나누고 싶으신가요? <br/>
            - 완성된 발표가 아니어도 괜찮습니다. <br/>
            - 짧은 사례 공유, 시행착오, MongoDB 를 사용하며 겪은 문제 등 모든 것을 환영합니다.
          </p> <br/>
          
          <Button variant="outline" className="w-fit bg-secondary text-text-primary hover:bg-primary hover:text-text-dark hover:border-primary"
          onClick={() => {
            window.open(
              'https://docs.google.com/forms/d/e/1FAIpQLSdLIyRzgC8heWOZZk8fEOsHkBVi6ys5CPLxedrcuStbs10igQ/viewform?usp=publish-editor',
              '_blank',
              'noopener,noreferrer',
            )
          }}
          >
            <FiPlus size={20} />
            Speaker 로 참여하기   
          </Button>
        </div>
        <EventsGrid />
      </div>
    </section>
  )
}
