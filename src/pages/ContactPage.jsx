import Contact from '../components/Contact.jsx';

export default function ContactPage() {
  return (
    <>
      <section className="bg-charcoal py-24 text-white transition-colors duration-300 dark:bg-dark-panel lg:py-32">
        <div className="container-lux max-w-4xl">
          <p className="section-kicker">Contact INTERIOR DECOR</p>
          <h1 className="mt-4 text-5xl font-bold leading-tight sm:text-6xl">
            Speak with an interior designer in Dimapur today.
          </h1>
          <p className="mt-6 text-lg leading-8 text-white/75 dark:text-dark-muted">
            Contact us for false ceilings, wall panels, gypsum work, PVC panels, POP designs and complete interior solutions in Nagaland.
          </p>
        </div>
      </section>
      <Contact />
    </>
  );
}
