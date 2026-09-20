import { MapPin, Phone, MessageCircle, Mail, ArrowUp, Calendar } from 'lucide-react';

function FacebookIcon({ size = 16, className = '' }: { size?: number; className?: string }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" className={className}>
      <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
    </svg>
  );
}

const quickLinks = [
  { label: 'Home', href: '#home' },
  { label: 'About Us', href: '#about' },
  { label: 'Treatments & Services', href: '#services' },
  { label: 'Cases / Before & After', href: '#cases' },
  { label: 'Our Doctors', href: '#doctors' },
  { label: 'Dental Technology', href: '#technology' },
  { label: 'Contact & Location', href: '#contact' },
];

export default function Footer() {
  const scrollToTop = () => window.scrollTo({ top: 0, behavior: 'smooth' });
  const handleNavClick = (href: string) => {
    const id = href.replace('#', '');
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <footer id="footer" className="bg-[#0A2F45] text-white relative">
      {/* Top Accent Line */}
      <div className="h-1 w-full bg-gradient-to-r from-blue-400 via-teal-300 to-amber-300" />

      {/* Main Footer Content */}
      <div className="container mx-auto px-4 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-12">

          {/* Brand Column (5 cols) */}
          <div className="lg:col-span-4 space-y-5">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-full overflow-hidden border-2 border-white/20 bg-white shrink-0 flex items-center justify-center shadow-sm">
                <img
                  src="/images/logo.jpeg"
                  alt="Dr. Mujahid's Clinic Logo"
                  className="w-full h-full object-cover"
                />
              </div>
              <div>
                <div className="font-headline font-bold text-lg text-white leading-tight">
                  Dr. Mujahid's
                </div>
                <div className="text-xs uppercase tracking-wider text-teal-200 font-semibold">
                  Oro-Dental Clinic
                </div>
              </div>
            </div>

            <p className="text-slate-300 text-sm leading-relaxed">
              Specialized orthodontic smile realignment, precision restorative endodontics, and surgical care delivered with modern digital equipment and hospital-grade sterilization in Khilgaon, Dhaka.
            </p>

            <p className="font-headline italic text-teal-100 text-base font-semibold">
              "Crafting Your Confident Smile"
            </p>

            {/* Social Icons */}
            <div className="flex gap-2.5 pt-1">
              <a
                href="https://facebook.com/dr.mujahid.dental"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-xl bg-white/10 hover:bg-blue-600 flex items-center justify-center text-white transition-colors"
                aria-label="Facebook"
              >
                <FacebookIcon size={16} />
              </a>
              <a
                href="https://wa.me/8801745917009"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-xl bg-white/10 hover:bg-[#25D366] flex items-center justify-center text-white transition-colors"
                aria-label="WhatsApp"
              >
                <MessageCircle size={16} />
              </a>
              <a
                href="mailto:shammomujahid@gmail.com"
                className="w-9 h-9 rounded-xl bg-white/10 hover:bg-teal-600 flex items-center justify-center text-white transition-colors"
                aria-label="Email"
              >
                <Mail size={16} />
              </a>
            </div>
          </div>

          {/* Quick Links Column (3 cols) */}
          <div className="lg:col-span-3">
            <h4 className="font-headline font-bold text-white text-base mb-5 flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-teal-400" />
              <span>Quick Navigation</span>
            </h4>
            <ul className="space-y-2.5">
              {quickLinks.map(link => (
                <li key={link.href}>
                  <button
                    onClick={() => handleNavClick(link.href)}
                    className="text-slate-300 hover:text-white text-sm font-body transition-colors flex items-center gap-2 text-left"
                  >
                    <span className="w-1 h-1 rounded-full bg-slate-500" />
                    <span>{link.label}</span>
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Details (3 cols) */}
          <div className="lg:col-span-3 space-y-4">
            <h4 className="font-headline font-bold text-white text-base mb-5 flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-teal-400" />
              <span>Contact &amp; Location</span>
            </h4>
            <div className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-300 leading-relaxed">
              <MapPin size={16} className="text-teal-300 shrink-0 mt-0.5" />
              <span>
                168/A (1st Floor), Road 12, Main Road,<br />
                Tilpapara, Khilgaon, Dhaka 1219
              </span>
            </div>
            <div className="flex items-center gap-2.5 text-xs sm:text-sm text-slate-300">
              <Phone size={15} className="text-teal-300 shrink-0" />
              <a href="tel:+8801745917009" className="hover:text-white transition-colors">
                +880 1745-917009
              </a>
            </div>
            <div className="flex items-center gap-2.5 text-xs sm:text-sm text-slate-300">
              <Mail size={15} className="text-teal-300 shrink-0" />
              <a href="mailto:shammomujahid@gmail.com" className="hover:text-white transition-colors truncate">
                shammomujahid@gmail.com
              </a>
            </div>
          </div>

          {/* Evening Hours + Action (2 cols) */}
          <div className="lg:col-span-2 space-y-4">
            <h4 className="font-headline font-bold text-white text-base mb-5 flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-teal-400" />
              <span>Visiting Hours</span>
            </h4>
            <div className="text-xs text-slate-300 space-y-1.5">
              <p className="font-semibold text-white">Sat – Thu:</p>
              <p>5:00 PM – 10:00 PM</p>
              <p className="font-semibold text-white pt-1">Friday:</p>
              <p className="text-rose-300">Closed (On Emergency)</p>
            </div>

            <button
              onClick={() => handleNavClick('#booking')}
              className="mt-2 w-full py-2.5 px-3 rounded-xl bg-[#0E4D6E] text-white border border-teal-400/40 text-xs font-semibold hover:bg-teal-700 transition-colors flex items-center justify-center gap-1.5"
            >
              <Calendar size={13} />
              <span>Book Appointment</span>
            </button>
          </div>

        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-slate-700/60 py-6">
        <div className="container mx-auto px-4 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-slate-400 text-xs text-center sm:text-left">
            © {new Date().getFullYear()} Dr. Mujahid's Oro-Dental Clinic. All rights reserved.
            <span className="mx-2 hidden sm:inline">|</span>
            <span className="block sm:inline mt-1 sm:mt-0">
              BMDC Reg: Dr. M. M. Al Hussain (#6443) &amp; Dr. M. M. Rumana (#6442)
            </span>
          </p>

          <button
            onClick={scrollToTop}
            className="w-9 h-9 rounded-xl bg-white/10 hover:bg-white/20 text-white flex items-center justify-center transition-colors"
            aria-label="Scroll back to top"
          >
            <ArrowUp size={16} />
          </button>
        </div>
      </div>
    </footer>
  );
}
