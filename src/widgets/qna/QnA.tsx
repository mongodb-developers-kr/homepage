import { Button } from '@shared/ui/Button'
import { QnAList } from './ui/QnAList'

export const QnA = () => {
  return (
    <section id="qna" className="relative isolate py-24 bg-bg-primary -mt-px">
      <div className="container mx-auto px-4">
        <div className="mb-16 text-center">
          <h2 className="text-4xl font-bold mb-4">자주 묻는 질문</h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            MongoDB Developers KR에 관심을 가지신 분들이 <br/>
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
              onClick={() => {
                window.open(
                  'https://docs.google.com/forms/d/e/1FAIpQLScqHhLlPpEIwumvRaIGapwnVNjCohjngWKKxkzJnTjProxYSg/viewform?usp=publish-editor',
                '_blank',
                'noopener,noreferrer',
              )
            }}
            >
              궁금한 점 남기기
            </Button>
            <Button
              variant="outline"
              className="w-fit bg-secondary text-text-primary hover:bg-primary hover:text-text-dark hover:border-primary"
              onClick={() => {
                window.open(
                  'https://mongodevkr.slack.com/archives/C09HUNQ5P0S',
                  '_blank',
                  'noopener,noreferrer',
                )
              }}
            >
              커뮤니티에 의견 남기기 (Slack)
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
