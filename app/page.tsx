import ClientOnly from './components/ClientOnly';
import Hero from './components/Hero';
import About from './components/About';
import Work from './components/Work';
import Projects from './components/Projects';
import CTA from './components/CTA';
import Footer from './components/Footer';
import Aside from './components/Aside';

export default function Home() {
  return (
    <ClientOnly>
      <Aside />
      <Hero />
      <About />
      <Work />
      <Projects />
      <CTA />
      <Footer />
    </ClientOnly>
  );
}
