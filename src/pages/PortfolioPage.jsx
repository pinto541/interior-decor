import Portfolio from '../components/Portfolio.jsx';

export default function PortfolioPage() {
  return (
    <>
      <section className="bg-charcoal py-24 text-white transition-colors duration-300 dark:bg-dark-panel lg:py-32">
        <div className="container-lux max-w-4xl">
          <p className="section-kicker">Portfolio Gallery</p>
          <h1 className="mt-4 text-5xl font-bold leading-tight sm:text-6xl">
            Interior design projects and false ceiling gallery by INTERIOR DECOR.
          </h1>
          <p className="mt-6 text-lg leading-8 text-white/75 dark:text-dark-muted">
            Explore modern false ceiling designs, PVC panels, wall panels, living rooms, bedrooms and commercial interior work across Nagaland.
          </p>
        </div>
      </section>
      <Portfolio />
    </>
  );
}
