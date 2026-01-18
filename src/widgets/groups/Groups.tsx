import { GroupsGrid } from './ui/GroupsGrid'

export const Groups = () => {
  return (
    <section id="groups" className="relative isolate py-24 bg-bg-surface -mt-px z-10">
      <div className="absolute inset-0 bg-bg-surface -z-10" />
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4 text-text-dark">모임</h2>
          <p className="text-gray-500 max-w-2xl mx-auto">
            지역별 모임을 확인할 수 있습니다.
          </p>
        </div>
        <GroupsGrid />
      </div>
    </section>
  )
}
