import { FaPhoneAlt, FaWhatsapp } from 'react-icons/fa';
import { business } from '../data/business.js';

export default function FloatingActions() {
  return (
    <div className="fixed bottom-5 right-5 z-50 flex flex-col gap-3">
      <a
        href={business.whatsapp}
        className="grid h-14 w-14 place-items-center rounded-full bg-[#25D366] text-2xl text-white shadow-luxury"
        aria-label="Chat on WhatsApp"
      >
        <FaWhatsapp />
      </a>
      <a
        href={business.phoneHref}
        className="grid h-14 w-14 place-items-center rounded-full bg-gold text-xl text-white shadow-luxury md:hidden"
        aria-label="Call INTERIOR DECOR"
      >
        <FaPhoneAlt />
      </a>
    </div>
  );
}
