import { FaEnvelope, FaMapMarkerAlt, FaPhoneAlt, FaWhatsapp } from 'react-icons/fa';
import { business } from '../data/business.js';

export default function Contact() {
  const fieldClass =
    'border border-charcoal/15 bg-ivory px-5 py-4 text-charcoal outline-none transition-colors duration-300 placeholder:text-charcoal/45 focus:border-gold dark:border-white/10 dark:bg-dark-card dark:text-dark-text dark:placeholder:text-dark-muted/60';

  return (
    <section className="bg-white py-20 transition-colors duration-300 dark:bg-dark-surface lg:py-28">
      <div className="container-lux grid gap-10 lg:grid-cols-[1fr_0.9fr]">
        <div>
          <p className="section-kicker">Contact INTERIOR DECOR</p>
          <h2 className="section-title">Book a site visit or free interior consultation.</h2>
          <form className="mt-10 grid gap-4" name="contact">
            <input className={fieldClass} type="text" placeholder="Name" aria-label="Name" />
            <input className={fieldClass} type="tel" placeholder="Phone" aria-label="Phone" />
            <input className={fieldClass} type="email" placeholder="Email" aria-label="Email" />
            <textarea className={`${fieldClass} min-h-36`} placeholder="Message" aria-label="Message" />
            <button className="btn-primary w-fit" type="submit">
              Send Enquiry
            </button>
          </form>
        </div>

        <aside className="bg-ivory p-6 transition-colors duration-300 dark:bg-dark-card sm:p-8">
          <h3 className="text-2xl font-bold text-charcoal dark:text-dark-text">Business Details</h3>
          <div className="mt-7 grid gap-5">
            <a href={business.phoneHref} className="flex gap-4 text-charcoal hover:text-gold dark:text-dark-muted dark:hover:text-gold">
              <FaPhoneAlt className="mt-1 shrink-0 text-gold" />
              {business.phone}
            </a>
            <a href={business.whatsapp} className="flex gap-4 text-charcoal hover:text-gold dark:text-dark-muted dark:hover:text-gold">
              <FaWhatsapp className="mt-1 shrink-0 text-gold" />
              WhatsApp Consultation
            </a>
            <p className="flex gap-4 text-charcoal/75 dark:text-dark-muted">
              <FaEnvelope className="mt-1 shrink-0 text-gold" />
              enquiries@interiordecor-nagaland.com
            </p>
            <p className="flex gap-4 leading-7 text-charcoal/75 dark:text-dark-muted">
              <FaMapMarkerAlt className="mt-1 shrink-0 text-gold" />
              {business.address}
            </p>
          </div>
          <div className="mt-8">
            <h3 className="text-2xl font-bold text-charcoal dark:text-dark-text">Find Us on Google Maps</h3>
            <div className="mt-5 grid gap-3 sm:grid-cols-3">
              <a href={business.directions} className="btn-primary px-4 py-3 text-xs" target="_blank" rel="noreferrer">
                Get Directions
              </a>
              <a href={business.phoneHref} className="btn-primary px-4 py-3 text-xs">
                Call Now
              </a>
              <a href={business.whatsapp} className="btn-primary px-4 py-3 text-xs">
                WhatsApp Us
              </a>
            </div>
          </div>
          <iframe
            title="INTERIOR DECOR Google Map"
            src={business.mapEmbed}
            loading="lazy"
            className="mt-6 h-72 w-full border-0 grayscale-[15%] dark:grayscale dark:invert dark:hue-rotate-180"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </aside>
      </div>
    </section>
  );
}
