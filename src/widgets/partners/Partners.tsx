import { PartnersGrid } from './ui/PartnersGrid'

export const Partners = () => {
  return (
    <section className="relative isolate py-24 bg-bg-surface -mt-px text-center">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-4 text-text-dark">
          밋업 콜라보 및 후원 파트너
        </h2>
        <p className="text-gray-500 mb-12">
          밋업 콜라보 및 후원 파트너에게 감사드립니다.
        </p>

        <PartnersGrid />
      </div>
    </section>
  )
}
