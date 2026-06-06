import Hero from '../components/Hero.jsx';
import TrustStats from '../components/TrustStats.jsx';
import Services from '../components/Services.jsx';
import WhyChooseUs from '../components/WhyChooseUs.jsx';
import Portfolio from '../components/Portfolio.jsx';
import Testimonials from '../components/Testimonials.jsx';
import CTA from '../components/CTA.jsx';
import Contact from '../components/Contact.jsx';

export default function Home() {
  return (
    <>
      <Hero />
      <TrustStats />
      <Services limit={8} />
      <WhyChooseUs />
      <Portfolio featured />
      <Testimonials />
      <CTA />
      <Contact />
    </>
  );
}
