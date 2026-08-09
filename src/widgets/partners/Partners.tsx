import { site } from '@shared/content'
import { Button } from '@shared/ui/Button'
import { PartnersGrid } from './ui/PartnersGrid'

export const Partners = () => {
  return (
    <section
      id="partners"
      className="relative isolate py-24 bg-bg-surface -mt-px text-center"
    >
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-4 text-text-dark">
          밋업 콜라보 및 후원 파트너
        </h2>
        <div className="mb-12 text-text-dark">
          <p className="text-xl">
            MongoDB Developers KR의 밋업과 기술 세션은 다양한 파트너와의 협업으로
            만들어지고 있습니다.
          </p>
          <p className="mt-4 text-gray-500 text-sm">
            아래 폼은 커뮤니티와의 협업·후원·세션 제안에 대한 관심 표현
            창구입니다.
            <br />
            정식 스폰서 패키지나 일정은 추후 개별적으로 논의됩니다.
          </p>
        </div>

        <div className="mb-12">
          <Button
            variant="outline"
            className="w-fit bg-secondary text-text-primary hover:bg-primary hover:text-text-dark hover:border-primary"
            onClick={() => {
              window.open(
                site.links.partnershipForm,
                '_blank',
                'noopener,noreferrer',
              )
            }}
          >
            협업·후원 제안하기
          </Button>
        </div>
        <PartnersGrid />
      </div>
    </section>
  )
}
