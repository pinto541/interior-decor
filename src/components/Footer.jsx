import { Link } from 'react-router-dom';
import { FaInstagram, FaPhoneAlt, FaWhatsapp } from 'react-icons/fa';
import { business } from '../data/business.js';
import { services } from '../data/services.js';
import { localPages } from '../data/seo.js';

export default function Footer() {
  return (
    <footer className="bg-[#262626] text-white transition-colors duration-300 dark:bg-dark-bg">
      <div className="container-lux grid gap-10 py-14 md:grid-cols-2 lg:grid-cols-4">
        <div>
          <h2 className="font-heading text-3xl font-bold">INTERIOR DECOR</h2>
          <p className="mt-4 leading-7 text-white/70">{business.tagline}</p>
          <div className="mt-6 flex gap-3">
            <a className="grid h-10 w-10 place-items-center bg-white/10 text-gold hover:bg-gold hover:text-white" href={business.instagram} aria-label="Instagram">
              <FaInstagram />
            </a>
            <a className="grid h-10 w-10 place-items-center bg-white/10 text-gold hover:bg-gold hover:text-white" href={business.whatsapp} aria-label="WhatsApp">
              <FaWhatsapp />
            </a>
          </div>
        </div>

        <div>
          <h3 className="text-lg font-bold">Quick Links</h3>
          <div className="mt-5 grid gap-3 text-white/70">
            {['About', 'Services', 'Portfolio', 'Blog', 'Testimonials', 'Contact'].map((label) => (
              <Link key={label} to={`/${label === 'Testimonials' ? 'testimonials' : label.toLowerCase()}`} className="hover:text-gold">
                {label}
              </Link>
            ))}
          </div>
        </div>

        <div>
          <h3 className="text-lg font-bold">Services</h3>
          <div className="mt-5 grid gap-3 text-white/70">
            {services.slice(0, 6).map((service) => (
              <Link key={service.title} to="/services" className="hover:text-gold">
                {service.title}
              </Link>
            ))}
          </div>
        </div>

        <div>
          <h3 className="text-lg font-bold">Contact</h3>
          <p className="mt-5 leading-7 text-white/70">{business.address}</p>
          <a className="mt-4 flex items-center gap-3 text-white hover:text-gold" href={business.phoneHref}>
            <FaPhoneAlt className="text-gold" /> {business.phone}
          </a>
          <div className="mt-6 grid gap-2 text-sm text-white/60">
            {Object.entries(localPages).slice(0, 4).map(([slug, page]) => (
              <Link key={slug} to={`/locations/${slug}`} className="hover:text-gold">
                {page.title}
              </Link>
            ))}
          </div>
        </div>
      </div>
      <div className="border-t border-white/10 py-5 text-center text-sm text-white/50">
        © {new Date().getFullYear()} INTERIOR DECOR. All rights reserved.
      </div>
    </footer>
  );
}
