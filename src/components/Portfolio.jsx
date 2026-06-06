import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaSearchPlus, FaTimes } from 'react-icons/fa';
import { categories, portfolioItems } from '../data/portfolio.js';

export default function Portfolio({ featured = false }) {
  const [active, setActive] = useState('All');
  const [selected, setSelected] = useState(null);
  const items = featured ? portfolioItems.slice(0, 6) : portfolioItems;
  const filtered = active === 'All' ? items : items.filter((item) => item.category === active);

  return (
    <section className="bg-white py-20 transition-colors duration-300 dark:bg-dark-surface lg:py-28">
      <div className="container-lux">
        <div className="flex flex-col justify-between gap-8 lg:flex-row lg:items-end">
          <div className="max-w-3xl">
            <p className="section-kicker">Interior Design Projects</p>
            <h2 className="section-title">False ceilings, wall panels and refined interior transformations.</h2>
          </div>
          {!featured && (
            <div className="flex flex-wrap gap-2">
              {categories.map((category) => (
                <button
                  key={category}
                  type="button"
                  onClick={() => setActive(category)}
                  className={`px-4 py-2 text-xs font-bold uppercase tracking-[0.16em] transition ${
                    active === category
                      ? 'bg-gold text-white'
                      : 'bg-ivory text-charcoal hover:bg-beige dark:bg-dark-card dark:text-dark-muted dark:hover:bg-dark-panel'
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>
          )}
        </div>

        <div className="mt-12 columns-1 gap-6 sm:columns-2 lg:columns-3">
          {filtered.map((item, index) => (
            <motion.button
              key={item.title}
              type="button"
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.04 }}
              onClick={() => setSelected(item)}
              className="group mb-6 block w-full break-inside-avoid overflow-hidden bg-charcoal text-left dark:bg-dark-card"
            >
              <img
                src={item.image}
                alt={`${item.title} by INTERIOR DECOR`}
                loading="lazy"
                className="h-auto w-full object-cover transition duration-700 group-hover:scale-105"
              />
              <div className="relative -mt-24 min-h-24 bg-gradient-to-t from-black/80 to-transparent p-5 text-white">
                <p className="text-xs font-bold uppercase tracking-[0.18em] text-gold">{item.category}</p>
                <div className="mt-2 flex items-center justify-between gap-4">
                  <h3 className="text-xl font-bold">{item.title}</h3>
                  <FaSearchPlus className="shrink-0 opacity-80" />
                </div>
              </div>
            </motion.button>
          ))}
        </div>
      </div>

      <AnimatePresence>
        {selected && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[70] grid place-items-center bg-dark-bg/90 p-5"
            onClick={() => setSelected(null)}
          >
            <button
              type="button"
              className="absolute right-5 top-5 grid h-11 w-11 place-items-center bg-white text-charcoal dark:bg-dark-card dark:text-dark-text"
              aria-label="Close project preview"
              onClick={() => setSelected(null)}
            >
              <FaTimes />
            </button>
            <motion.figure
              initial={{ scale: 0.95, y: 18 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.95, y: 18 }}
              className="max-h-[86vh] max-w-5xl overflow-hidden bg-white dark:bg-dark-card"
              onClick={(event) => event.stopPropagation()}
            >
              <img src={selected.image} alt={selected.title} className="max-h-[72vh] w-full object-cover" />
              <figcaption className="p-5">
                <p className="text-xs font-bold uppercase tracking-[0.18em] text-gold">{selected.location}</p>
                <h3 className="mt-1 text-2xl font-bold text-charcoal dark:text-dark-text">{selected.title}</h3>
              </figcaption>
            </motion.figure>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
