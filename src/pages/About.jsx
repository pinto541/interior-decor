import { motion } from 'framer-motion';
import CTA from '../components/CTA.jsx';

const values = ['Craftsmanship', 'Premium Materials', 'Clear Communication', 'Customer Satisfaction'];
const counters = [
  { value: '100+', label: 'Projects Completed' },
  { value: '80+', label: 'Satisfied Clients' },
  { value: '5+', label: 'Years Experience' },
];

export default function About() {
  return (
    <>
      <section className="bg-charcoal py-24 text-white transition-colors duration-300 dark:bg-dark-panel lg:py-32">
        <div className="container-lux max-w-4xl">
          <p className="section-kicker">About INTERIOR DECOR</p>
          <h1 className="mt-4 text-5xl font-bold leading-tight sm:text-6xl">
            A trusted interior design company in Nagaland built around finish, trust and detail.
          </h1>
          <p className="mt-6 text-lg leading-8 text-white/75 dark:text-dark-muted">
            INTERIOR DECOR delivers premium false ceilings, wall panels, PVC, gypsum, POP, WPC and complete interior solutions for homes and commercial spaces across Dimapur, Kohima, Chümoukedima and Nagaland.
          </p>
        </div>
      </section>

      <section className="bg-white py-20 transition-colors duration-300 dark:bg-dark-surface lg:py-28">
        <div className="container-lux grid gap-12 lg:grid-cols-2 lg:items-center">
          <img
            src="https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&w=1200&q=80"
            alt="Premium interior design workspace"
            className="h-[520px] w-full object-cover"
          />
          <div>
            <p className="section-kicker">Company Story</p>
            <h2 className="section-title">Designing elegant interiors that feel personal and perform beautifully.</h2>
            <p className="mt-6 leading-8 text-charcoal/70 dark:text-dark-muted">
              The company was created to bring organized, premium interior execution to Nagaland. Every site is approached with a balance of design sense, material knowledge and practical workmanship so clients receive interiors that are beautiful, durable and easy to live with.
            </p>
            <div className="mt-8 grid gap-4 sm:grid-cols-3">
              {counters.map((item) => (
                <div key={item.label} className="bg-ivory p-5 text-center transition-colors duration-300 dark:bg-dark-card">
                  <p className="font-heading text-4xl font-bold text-gold">{item.value}</p>
                  <p className="mt-2 text-xs font-bold uppercase tracking-[0.14em] text-charcoal/65 dark:text-dark-muted">{item.label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="bg-ivory py-20 transition-colors duration-300 dark:bg-dark-bg lg:py-28">
        <div className="container-lux grid gap-8 md:grid-cols-3">
          {['Mission', 'Vision', 'Values'].map((title, index) => (
            <motion.article
              key={title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.08 }}
              className="bg-white p-8 transition-colors duration-300 dark:bg-dark-card"
            >
              <h2 className="text-3xl font-bold text-charcoal dark:text-dark-text">{title}</h2>
              {title === 'Values' ? (
                <ul className="mt-6 grid gap-3 text-charcoal/70 dark:text-dark-muted">
                  {values.map((value) => (
                    <li key={value}>{value}</li>
                  ))}
                </ul>
              ) : (
                <p className="mt-5 leading-8 text-charcoal/70 dark:text-dark-muted">
                  {title === 'Mission'
                    ? 'To deliver refined interior spaces through premium materials, skilled execution and design that supports everyday life.'
                    : 'To become one of Northeast India’s most trusted names for interior design, false ceilings and decorative interior solutions.'}
                </p>
              )}
            </motion.article>
          ))}
        </div>
      </section>
      <CTA />
    </>
  );
}
