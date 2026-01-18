import { Events } from '@widgets/events/Events'
import { Footer } from '@widgets/footer/Footer'
import { Groups } from '@widgets/groups/Groups'
import { Header } from '@widgets/header/Header'
import { Hero } from '@widgets/hero/Hero'
import { Partners } from '@widgets/partners/Partners'
import { QnA } from '@widgets/qna/QnA'
import { Stats } from '@widgets/stats/Stats'

export const LandingPage = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <main className="relative overflow-hidden">
        <Hero />
        <Stats />
        <Groups />
        <Events />
        <QnA />
        <Partners />
      </main>
      <Footer />
    </div>
  )
}
