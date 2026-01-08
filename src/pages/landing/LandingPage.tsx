import { Header } from '../../widgets/Header/Header';
import { Hero } from '../../widgets/Hero/Hero';
import { Stats } from '../../widgets/Stats/Stats';
import { Groups } from '../../widgets/Groups/Groups';
import { Events } from '../../widgets/Events/Events';
import { Partners } from '../../widgets/Partners/Partners';
import { Footer } from '../../widgets/Footer/Footer';

export const LandingPage = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <Hero />
        <Stats />
        <Groups />
        <Events />
        <Partners />
      </main>
      <Footer />
    </div>
  );
};
