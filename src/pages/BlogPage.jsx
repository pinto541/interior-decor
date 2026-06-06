import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { FaArrowRight } from 'react-icons/fa';
import CTA from '../components/CTA.jsx';
import { blogPosts } from '../data/blog.js';

export default function BlogPage() {
  return (
    <>
      <section className="bg-charcoal py-24 text-white transition-colors duration-300 dark:bg-dark-panel lg:py-32">
        <div className="container-lux max-w-4xl">
          <p className="section-kicker">Interior Design Blog</p>
          <h1 className="mt-4 text-5xl font-bold leading-tight sm:text-6xl">
            Expert ideas for false ceilings, wall panels and premium interiors in Nagaland.
          </h1>
          <p className="mt-6 text-lg leading-8 text-white/75 dark:text-dark-muted">
            Helpful guides for homeowners and businesses searching for interior design, false ceiling, PVC panels, gypsum work and renovation advice.
          </p>
        </div>
      </section>

      <section className="bg-white py-20 transition-colors duration-300 dark:bg-dark-surface lg:py-28">
        <div className="container-lux grid gap-7 md:grid-cols-2 lg:grid-cols-3">
          {blogPosts.map((post, index) => (
            <motion.article
              key={post.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.04 }}
              className="group border border-charcoal/10 bg-ivory transition-colors duration-300 dark:border-white/10 dark:bg-dark-card"
            >
              <div className="overflow-hidden">
                <img
                  src={post.image}
                  alt={post.title}
                  loading="lazy"
                  className="h-64 w-full object-cover transition duration-700 group-hover:scale-105"
                />
              </div>
              <div className="p-6">
                <div className="flex items-center justify-between gap-4 text-xs font-bold uppercase tracking-[0.16em] text-gold">
                  <span>{post.category}</span>
                  <span>{post.readTime}</span>
                </div>
                <h2 className="mt-4 text-2xl font-bold leading-tight text-charcoal dark:text-dark-text">{post.title}</h2>
                <p className="mt-4 leading-7 text-charcoal/70 dark:text-dark-muted">{post.excerpt}</p>
                <Link to="/contact" className="mt-6 inline-flex items-center gap-2 text-sm font-bold text-gold">
                  Ask an Expert <FaArrowRight className="transition group-hover:translate-x-1" />
                </Link>
              </div>
            </motion.article>
          ))}
        </div>
      </section>
      <CTA />
    </>
  );
}
