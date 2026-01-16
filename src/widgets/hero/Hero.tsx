import { Button } from '@shared/ui/Button'
import { FiMessageSquare } from 'react-icons/fi'

export const Hero = () => {
  return (
    <section className="relative isolate pt-40 pb-20 overflow-hidden">
      {/* Background Glow */}

      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-primary/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="container mx-auto px-4 text-center relative z-10">
        <h1 className="text-5xl md:text-7xl mb-6 tracking-tight leading-tight">
          MongoDB <br />
          <span className="text-2xl font-bold">한국 개발자 모임</span>
        </h1>
        <p className="text-lg md:text-xl text-gray-400 max-w-2xl mx-auto mb-10 leading-relaxed">
          MongoDB 한국 개발자 모임에 오신 것을 환영합니다. <br /> 실무 경험,
          학습, 밋업 정보를 함께 나누는 커뮤니티입니다. <br /> (
          <b>현재는 가오픈 상태로, 추후 공식 오픈 예정입니다.</b>)
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Button className="gap-2 font-bold">
            <FiMessageSquare size={20} />
            Slack 커뮤니티에 참여하기
          </Button>
          {/* <Button variant="outline" className="gap-2 border-white/10 text-white hover:bg-white/5">
            Upcoming Meetups
            <ArrowRight size={20} />
          </Button> */}
        </div>
      </div>
    </section>
  )
}
