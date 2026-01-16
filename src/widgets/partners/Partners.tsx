import { Button } from '@shared/ui/Button'
import { PartnersGrid } from './ui/PartnersGrid'

export const Partners = () => {
  return (
    <section className="relative isolate py-24 bg-bg-surface -mt-px text-center">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-4 text-text-dark">
          밋업 콜라보 및 후원 파트너
        </h2>
        <p className="text-gray-500 mb-12">
          MongoDB Developers KR의 밋업과 기술 세션은 다양한 파트너와의 협업으로
          만들어지고 있습니다.
        </p>

        <div className="mb-12">
          <Button
            variant="outline"
            className="w-fit bg-secondary text-text-primary hover:bg-primary hover:text-text-dark hover:border-primary"
          >
            커뮤니티 협업 제안하기
          </Button>
        </div>
        <PartnersGrid />
      </div>
    </section>
  )
}
