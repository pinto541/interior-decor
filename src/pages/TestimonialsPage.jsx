import Testimonials from '../components/Testimonials.jsx';
import CTA from '../components/CTA.jsx';

export default function TestimonialsPage() {
  return (
    <>
      <section className="bg-charcoal py-24 text-white transition-colors duration-300 dark:bg-dark-panel lg:py-32">
        <div className="container-lux max-w-4xl">
          <p className="section-kicker">5.0 Google Rating</p>
          <h1 className="mt-4 text-5xl font-bold leading-tight sm:text-6xl">
            Customer reviews for interior design and false ceiling work in Nagaland.
          </h1>
          <p className="mt-6 text-lg leading-8 text-white/75 dark:text-dark-muted">
            Clients trust INTERIOR DECOR for premium materials, reliable site work and refined finishing.
          </p>
        </div>
      </section>
      <Testimonials />
      <CTA />
    </>
  );
}
