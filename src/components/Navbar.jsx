import { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { AnimatePresence, motion } from 'framer-motion';
import { FaBars, FaMoon, FaSun, FaTimes } from 'react-icons/fa';
import { business } from '../data/business.js';
import { useTheme } from '../context/ThemeContext.jsx';

const links = [
  { label: 'Home', path: '/' },
  { label: 'About', path: '/about' },
  { label: 'Services', path: '/services' },
  { label: 'Portfolio', path: '/portfolio' },
  { label: 'Contact', path: '/contact' },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const { isDark, toggleTheme } = useTheme();

  const navClass = ({ isActive }) =>
    `text-sm font-semibold uppercase tracking-[0.18em] transition ${
      isActive ? 'text-gold' : 'text-charcoal hover:text-gold dark:text-dark-text dark:hover:text-gold'
    }`;

  return (
    <header className="sticky top-0 z-50 border-b border-charcoal/10 bg-ivory/90 backdrop-blur-xl transition-colors duration-300 dark:border-white/10 dark:bg-dark-bg/90">
      <nav className="container-lux flex h-20 items-center justify-between">
        <Link to="/" className="group flex flex-col" onClick={() => setOpen(false)}>
          <span className="font-heading text-2xl font-bold tracking-wide text-charcoal dark:text-dark-text">INTERIOR DECOR</span>
          <span className="text-[10px] font-semibold uppercase tracking-[0.28em] text-gold">Nagaland</span>
        </Link>

        <div className="hidden items-center gap-8 lg:flex">
          {links.map((link) => (
            <NavLink key={link.path} to={link.path} className={navClass}>
              {link.label}
            </NavLink>
          ))}
        </div>

        <div className="hidden items-center gap-4 lg:flex">
          <button
            type="button"
            onClick={toggleTheme}
            className="grid h-11 w-11 place-items-center border border-charcoal/20 text-charcoal transition hover:border-gold hover:text-gold dark:border-white/15 dark:text-dark-text"
            aria-label={isDark ? 'Switch to light mode' : 'Switch to dark mode'}
          >
            {isDark ? <FaSun /> : <FaMoon />}
          </button>
          <a href={business.phoneHref} className="text-sm font-bold text-charcoal hover:text-gold dark:text-dark-text dark:hover:text-gold">
            {business.phone}
          </a>
        </div>

        <div className="flex items-center gap-3 lg:hidden">
          <button
            type="button"
            onClick={toggleTheme}
            className="grid h-11 w-11 place-items-center border border-charcoal/20 text-charcoal transition hover:border-gold hover:text-gold dark:border-white/15 dark:text-dark-text"
            aria-label={isDark ? 'Switch to light mode' : 'Switch to dark mode'}
          >
            {isDark ? <FaSun /> : <FaMoon />}
          </button>

          <button
            type="button"
            className="grid h-11 w-11 place-items-center border border-charcoal/20 text-charcoal dark:border-white/15 dark:text-dark-text"
            aria-label="Toggle navigation"
            onClick={() => setOpen((value) => !value)}
          >
            {open ? <FaTimes /> : <FaBars />}
          </button>
        </div>
      </nav>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="overflow-hidden border-t border-charcoal/10 bg-white transition-colors duration-300 dark:border-white/10 dark:bg-dark-surface lg:hidden"
          >
            <div className="container-lux flex flex-col gap-5 py-6">
              {links.map((link) => (
                <NavLink key={link.path} to={link.path} className={navClass} onClick={() => setOpen(false)}>
                  {link.label}
                </NavLink>
              ))}
              <a href={business.whatsapp} className="btn-primary w-full">
                Get Free Consultation
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
