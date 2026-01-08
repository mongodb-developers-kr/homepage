const partners = ['AWS', 'Microsoft Azure', 'Google Cloud', 'Jira']

export const Partners = () => {
  return (
    <section className="py-24 bg-white text-center">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-4 text-[#001e2b]">
          밋업 콜라보 및 후원 파트너
        </h2>
        <p className="text-gray-500 mb-12">
          밋업 콜라보 및 후원 파트너에게 감사드립니다.
        </p>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 justify-center items-center">
          {partners.map((partner) => (
            <div
              key={partner}
              className="h-16 flex items-center justify-center bg-[#061e2b] text-white rounded-lg font-medium text-sm px-4"
            >
              {partner}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
