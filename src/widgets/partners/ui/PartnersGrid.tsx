import { asset, partners } from '@shared/content'

export const PartnersGrid = () => {
  return (
    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 justify-center items-center">
      {partners.map((partner) => (
        <div
          key={partner.id}
          className="h-16 flex items-center justify-center bg-bg-tertiary text-text-primary rounded-lg font-medium text-sm px-4"
        >
          <img
            src={asset(partner.logo)}
            alt={partner.name}
            loading="lazy"
            className="w-full h-full object-contain max-w-32 max-h-16"
          />
        </div>
      ))}
    </div>
  )
}
