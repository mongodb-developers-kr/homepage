import { GroupsGrid } from './ui/GroupsGrid'

export const Groups = () => {
  return (
    <section id="groups" className="relative isolate py-24 bg-bg-surface -mt-px z-10">
      <div className="absolute inset-0 bg-bg-surface -z-10" />
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4 text-text-dark">모임</h2>
          <p className="text-gray-500 max-w-2xl mx-auto">
          지역별 모임부터 다양한 형식의 세션으로 확대될 수 있습니다. <br/>
          MongoDB를 중심으로 한 개발자 모임을 소개합니다.
          </p>
          {/* <br/>
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
            새로운 모임 제안하기
          </Button> */}
        </div>
        <GroupsGrid />
      </div>
    </section>
  )
}
