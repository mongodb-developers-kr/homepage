import { Button } from '@shared/ui/Button'
import { FiMessageSquare } from 'react-icons/fi'

export const Hero = () => {
  return (
    <section id="about" className="relative isolate pt-40 pb-20 overflow-hidden">
      {/* Background Glow */}

      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-primary/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="container mx-auto px-4 text-center relative z-10">
        <h1 className="text-3xl md:text-5xl mb-6 tracking-tight leading-tight">
          {'{ '}MongoDB : "한국 개발자 모임" {'}'} <br />
        </h1>
        <div className="text-lg md:text-xl text-gray-400 max-w-2xl mx-auto mb-10 leading-relaxed">
          <p>
            MongoDB 한국 개발자 모임에 오신 것을 환영합니다. <br /> MongoDB 를 사용하며 고민했던 경험, 배운 것, 시행착오를 <br/>개발자들끼리 편하게 나누는 커뮤니티 입니다.
          </p>
          <div className="mt-3">
            (
            <b>
              현재는 가오픈 상태입니다. <br /> 커뮤니티와 함께 천천히 다듬어갈
              예정이며, <br /> 피드백과 아이디어는 언제든 환영합니다 🙂
            </b>)
          </div>
        </div>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Button
            className="gap-2 font-bold"
            onClick={() => {
              window.open(
                'https://mongodevkr.slack.com/archives/C09J83YK45P',
                '_blank',
                'noopener,noreferrer',
              )
            }}
          >
            <FiMessageSquare size={20} />
            Slack 커뮤니티에 참여하기
          </Button>
        </div>
      </div>
    </section>
  )
}
