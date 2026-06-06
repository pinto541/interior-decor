import { motion } from 'framer-motion';
import { FaArrowRight } from 'react-icons/fa';
import CTA from '../components/CTA.jsx';
import { services } from '../data/services.js';
import { business } from '../data/business.js';

export default function ServicesPage() {
  return (
    <>
      <section className="bg-charcoal py-24 text-white transition-colors duration-300 dark:bg-dark-panel lg:py-32">
        <div className="container-lux max-w-4xl">
          <p className="section-kicker">False Ceiling, PVC Panels & Interior Design</p>
          <h1 className="mt-4 text-5xl font-bold leading-tight sm:text-6xl">
            Complete interior design services in Dimapur and across Nagaland.
          </h1>
          <p className="mt-6 text-lg leading-8 text-white/75 dark:text-dark-muted">
            From gypsum false ceilings and PVC wall panels to commercial interiors, INTERIOR DECOR plans, supplies and executes with a premium finish.
          </p>
        </div>
      </section>

      <section className="bg-white py-20 transition-colors duration-300 dark:bg-dark-surface lg:py-28">
        <div className="container-lux grid gap-8">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <motion.article
                key={service.title}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.04 }}
                className="grid overflow-hidden border border-charcoal/10 bg-ivory transition-colors duration-300 dark:border-white/10 dark:bg-dark-card lg:grid-cols-[0.9fr_1.1fr]"
              >
                <img src={service.image} alt={service.title} loading="lazy" className="h-72 w-full object-cover lg:h-full" />
                <div className="p-7 sm:p-10">
                  <div className="grid h-12 w-12 place-items-center bg-gold/15 text-gold">
                    <Icon size={22} />
                  </div>
                  <h2 className="mt-6 text-3xl font-bold text-charcoal dark:text-dark-text">{service.title}</h2>
                  <p className="mt-4 leading-8 text-charcoal/70 dark:text-dark-muted">{service.description}</p>
                  <ul className="mt-6 grid gap-3 text-charcoal/75 dark:text-dark-muted">
                    {service.benefits.map((benefit) => (
                      <li key={benefit}>• {benefit}</li>
                    ))}
                  </ul>
                  <p className="mt-6 text-sm font-semibold text-charcoal/55 dark:text-dark-muted">{service.keywords}</p>
                  <a href={business.whatsapp} className="btn-primary mt-7">
                    Get Quote <FaArrowRight />
                  </a>
                </div>
              </motion.article>
            );
          })}
        </div>
      </section>
      <CTA />
    </>
  );
}
