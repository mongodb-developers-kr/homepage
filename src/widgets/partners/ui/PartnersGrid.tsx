import iinweLogo from '@assets/images/partners/iinwe-logo.png'
import mongodbLogo from '@assets/images/partners/mongodb-logo.png'
import type { Partner } from '@entities/partner'

const partners: Partner[] = [
  {
    id: 'mongodb',
    name: 'MongoDB Korea',
    logo: mongodbLogo,
    imgUrl: mongodbLogo,
    lastUpdated: '2026-01-14',
  },
  {
    id: 'iinwe-partners',
    name: 'I in We',
    logo: iinweLogo,
    imgUrl: iinweLogo,
    lastUpdated: '2026-01-14',
  },
]

export const PartnersGrid = () => {
  return (
    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 justify-center items-center">
      {partners.map((partner: Partner) => (
        <div
          key={partner.id}
          className="h-16 flex items-center justify-center bg-bg-tertiary text-text-primary rounded-lg font-medium text-sm px-4"
        >
          <img
            src={partner.imgUrl}
            alt={partner.name}
            className="w-full h-full object-contain max-w-32 max-h-16"
          />
        </div>
      ))}
    </div>
  )
}
