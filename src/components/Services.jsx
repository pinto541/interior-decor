import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { FaArrowRight } from 'react-icons/fa';
import { services } from '../data/services.js';

export default function Services({ limit }) {
  const visibleServices = limit ? services.slice(0, limit) : services;

  return (
    <section className="bg-ivory py-20 transition-colors duration-300 dark:bg-dark-bg lg:py-28">
      <div className="container-lux">
        <div className="max-w-3xl">
          <p className="section-kicker">Interior Design Services Dimapur</p>
          <h2 className="section-title">Premium services for homes, offices, shops and hospitality spaces.</h2>
        </div>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {visibleServices.map((service, index) => {
            const Icon = service.icon;
            return (
              <motion.article
                key={service.title}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05 }}
                className="group border border-charcoal/10 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-luxury dark:border-white/10 dark:bg-dark-card dark:shadow-none dark:hover:shadow-luxury-dark"
              >
                <div className="grid h-12 w-12 place-items-center bg-gold/15 text-gold">
                  <Icon size={22} />
                </div>
                <h3 className="mt-6 text-2xl font-bold text-charcoal dark:text-dark-text">{service.title}</h3>
                <p className="mt-3 text-sm leading-7 text-charcoal/70 dark:text-dark-muted">{service.description}</p>
                <Link to="/services" className="mt-6 inline-flex items-center gap-2 text-sm font-bold text-gold">
                  Explore <FaArrowRight className="transition group-hover:translate-x-1" />
                </Link>
              </motion.article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
