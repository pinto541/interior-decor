import { Link, useParams } from 'react-router-dom';
import { FaArrowRight } from 'react-icons/fa';
import Services from '../components/Services.jsx';
import CTA from '../components/CTA.jsx';
import { localPages } from '../data/seo.js';
import { business } from '../data/business.js';

export default function LocalLandingPage() {
  const { slug } = useParams();
  const page = localPages[slug] || localPages['interior-designer-in-dimapur'];

  return (
    <>
      <section className="relative overflow-hidden bg-charcoal py-24 text-white transition-colors duration-300 dark:bg-dark-panel lg:py-32">
        <div
          className="absolute inset-0 bg-cover bg-center opacity-25"
          style={{
            backgroundImage:
              'url(https://images.unsplash.com/photo-1600210491369-e753d80a41f3?auto=format&fit=crop&w=1600&q=85)',
          }}
        />
        <div className="container-lux relative max-w-4xl">
          <p className="section-kicker">Local SEO Service Area</p>
          <h1 className="mt-4 text-5xl font-bold leading-tight sm:text-6xl">{page.title}</h1>
          <p className="mt-6 text-lg leading-8 text-white/75 dark:text-dark-muted">{page.description}</p>
          <div className="mt-9 flex flex-col gap-4 sm:flex-row">
            <a href={business.whatsapp} className="btn-primary">
              Get Free Consultation <FaArrowRight />
            </a>
            <Link to="/portfolio" className="btn-secondary">
              View Projects
            </Link>
          </div>
        </div>
      </section>

      <section className="bg-white py-20 transition-colors duration-300 dark:bg-dark-surface">
        <div className="container-lux grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
          <div>
            <p className="section-kicker">Premium Interior Solutions</p>
            <h2 className="section-title">Interior design, false ceiling and wall panel execution with a refined finish.</h2>
          </div>
          <p className="text-lg leading-8 text-charcoal/70 dark:text-dark-muted">
            INTERIOR DECOR serves Dimapur, Chümoukedima, Kohima and wider Nagaland with home interiors, commercial interiors, PVC panels, gypsum ceilings, POP work, WPC panels, louvers and decorative ceiling panels.
          </p>
        </div>
      </section>

      <Services limit={6} />
      <CTA />
    </>
  );
}
