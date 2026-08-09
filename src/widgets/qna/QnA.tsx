import { site } from '@shared/content'
import { Button } from '@shared/ui/Button'
import { QnAList } from './ui/QnAList'

const openExternal = (url: string) => {
  window.open(url, '_blank', 'noopener,noreferrer')
}

export const QnA = () => {
  return (
    <section id="qna" className="relative isolate py-24 bg-bg-primary -mt-px">
      <div className="container mx-auto px-4">
        <div className="mb-16 text-center">
          <h2 className="text-4xl font-bold mb-4">자주 묻는 질문</h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            MongoDB Developers KR에 관심을 가지신 분들이 <br />
            자주 궁금해하시는 질문들을 정리해봤습니다.
          </p>
        </div>

        <QnAList />

        <div className="mt-16 text-center">
          <p className="text-gray-400 mb-6 text-lg">
            더 궁금한 점이 있거나,
            <br />
            커뮤니티에 바라는 점이 있다면
            <br />
            언제든지 편하게 알려주세요.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button
              variant="outline"
              className="w-fit bg-secondary text-text-primary hover:bg-primary hover:text-text-dark hover:border-primary"
              onClick={() => openExternal(site.links.questionForm)}
            >
              질문 폼 작성하기
            </Button>
            <Button
              variant="ghost"
              className="w-fit"
              onClick={() => openExternal(site.links.slackQuestions)}
            >
              Slack #질문 채널에서 바로 묻기
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
