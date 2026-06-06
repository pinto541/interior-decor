import { motion } from 'framer-motion';
import { FaCheckCircle } from 'react-icons/fa';

const reasons = [
  'Premium Materials',
  'Modern Designs',
  'Expert Team',
  'Affordable Pricing',
  'On-Time Delivery',
  'Customer Satisfaction',
];

export default function WhyChooseUs() {
  return (
    <section className="bg-charcoal py-20 text-white transition-colors duration-300 dark:bg-dark-panel lg:py-28">
      <div className="container-lux grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
        <div>
          <p className="section-kicker">Why Customers Trust Us</p>
          <h2 className="mt-3 text-3xl font-bold leading-tight sm:text-4xl lg:text-5xl">
            Crafted with discipline, detail and a clear eye for luxury.
          </h2>
          <p className="mt-6 text-lg leading-8 text-white/70 dark:text-dark-muted">
            From false ceilings and PVC panels to complete commercial interiors, every project is planned around finish quality, useful design and reliable execution.
          </p>
        </div>

        <div className="grid gap-4 sm:grid-cols-2">
          {reasons.map((reason, index) => (
            <motion.div
              key={reason}
              initial={{ opacity: 0, x: 24 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.06 }}
              className="flex items-center gap-4 border border-white/10 bg-white/5 p-5 transition-colors duration-300 dark:bg-dark-card"
            >
              <FaCheckCircle className="shrink-0 text-gold" />
              <span className="font-semibold">{reason}</span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
