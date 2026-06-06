import { motion } from 'framer-motion';

const stats = [
  { value: '5.0', label: 'Google Rating', prefix: '★★★★★' },
  { value: '50+', label: 'Google Reviews' },
  { value: '13K+', label: 'Instagram Followers' },
  { value: '100+', label: 'Projects Completed' },
];

export default function TrustStats() {
  return (
    <section id="trust" className="bg-white py-8 transition-colors duration-300 dark:bg-dark-surface">
      <div className="container-lux grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {stats.map((stat, index) => (
          <motion.div
            key={stat.label}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.08 }}
            className="border border-charcoal/10 bg-ivory px-6 py-6 text-center transition-colors duration-300 dark:border-white/10 dark:bg-dark-card"
          >
            {stat.prefix && <p className="mb-2 text-sm tracking-[0.12em] text-gold">{stat.prefix}</p>}
            <p className="font-heading text-4xl font-bold text-charcoal dark:text-dark-text">{stat.value}</p>
            <p className="mt-2 text-sm font-semibold uppercase tracking-[0.18em] text-charcoal/65 dark:text-dark-muted">{stat.label}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
