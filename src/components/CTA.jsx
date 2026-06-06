import { FaWhatsapp } from 'react-icons/fa';
import { business } from '../data/business.js';

export default function CTA() {
  return (
    <section className="bg-charcoal py-20 text-white transition-colors duration-300 dark:bg-dark-panel">
      <div className="container-lux">
        <div className="border border-gold/30 px-6 py-14 text-center sm:px-10">
          <p className="section-kicker">Free Consultation</p>
          <h2 className="mx-auto mt-3 max-w-3xl text-4xl font-bold leading-tight sm:text-5xl">
            Ready to Transform Your Space?
          </h2>
          <p className="mx-auto mt-5 max-w-2xl text-white/70 dark:text-dark-muted">
            Speak with INTERIOR DECOR for false ceiling, PVC panels, wall panels and complete interior design services in Dimapur and across Nagaland.
          </p>
          <a href={business.whatsapp} className="btn-primary mt-8">
            <FaWhatsapp /> Get Free Consultation
          </a>
        </div>
      </div>
    </section>
  );
}
