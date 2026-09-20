import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Calendar } from 'lucide-react';
import clsx from 'clsx';

const navLinks = [
  { href: '#home', label: 'Home' },
  { href: '#about', label: 'About' },
  { href: '#services', label: 'Services' },
  { href: '#cases', label: 'Cases / Gallery' },
  { href: '#doctors', label: 'Doctors' },
  { href: '#technology', label: 'Technology' },
  { href: '#contact', label: 'Contact' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);

      // Active section detection
      const sections = navLinks.map(l => l.href.replace('#', ''));
      for (const section of [...sections].reverse()) {
        const el = document.getElementById(section);
        if (el && window.scrollY >= el.offsetTop - 120) {
          setActiveSection(section);
          break;
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (href: string) => {
    setMobileOpen(false);
    const id = href.replace('#', '');
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <>
      <motion.nav
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
        className={clsx(
          'fixed top-0 left-0 right-0 z-50 transition-all duration-300',
          scrolled
            ? 'bg-white/95 backdrop-blur-md border-b border-blue-100/80 shadow-[0_4px_20px_rgba(14,77,110,0.06)] py-3'
            : 'bg-white/80 backdrop-blur-sm border-b border-transparent py-4 sm:py-5'
        )}
      >
        <div className="container mx-auto px-4 lg:px-8">
          <div className="flex items-center justify-between">
            {/* Logo & Clinic Name */}
            <button
              onClick={() => handleNavClick('#home')}
              className="flex items-center gap-3 group text-left"
              aria-label="Go to home"
            >
              <div className="w-10 h-10 sm:w-11 sm:h-11 rounded-full overflow-hidden border-2 border-[#0E4D6E]/20 shadow-sm shrink-0 bg-white flex items-center justify-center group-hover:border-[#0E4D6E] transition-colors">
                <img
                  src="/images/logo.jpeg"
                  alt="Dr. Mujahid's Clinic Logo"
                  className="w-full h-full object-cover"
                />
              </div>
              <div>
                <div className="font-headline font-bold text-base sm:text-lg leading-tight text-[#0E4D6E] tracking-tight">
                  Dr. Mujahid's
                </div>
                <div className="font-body text-[11px] sm:text-xs font-semibold tracking-wider text-slate-500 uppercase">
                  Oro-Dental Clinic
                </div>
              </div>
            </button>

            {/* Desktop Nav Links */}
            <div className="hidden lg:flex items-center gap-1 xl:gap-2">
              {navLinks.map((link) => {
                const isActive = activeSection === link.href.replace('#', '');
                return (
                  <button
                    key={link.href}
                    onClick={() => handleNavClick(link.href)}
                    className={clsx(
                      'relative px-3.5 py-2 font-body font-medium text-sm transition-all duration-200 rounded-lg group',
                      isActive
                        ? 'text-[#0E4D6E] font-semibold'
                        : 'text-slate-600 hover:text-[#0E4D6E] hover:bg-blue-50/60'
                    )}
                  >
                    {link.label}
                    {isActive && (
                      <motion.span
                        layoutId="activeNavIndicator"
                        className="absolute bottom-0 left-3 right-3 h-0.5 bg-[#0E4D6E] rounded-full"
                      />
                    )}
                  </button>
                );
              })}
            </div>

            {/* Book Appointment CTA & Mobile Hamburger */}
            <div className="flex items-center gap-3">
              <button
                onClick={() => handleNavClick('#booking')}
                className="hidden sm:inline-flex items-center gap-2 px-5 py-2.5 rounded-xl font-body font-semibold text-sm bg-[#0E4D6E] text-white shadow-sm hover:bg-[#0A3850] hover:shadow-md active:scale-95 transition-all duration-200"
              >
                <Calendar size={15} />
                <span>Book Appointment</span>
              </button>

              <button
                onClick={() => setMobileOpen(!mobileOpen)}
                className="lg:hidden w-10 h-10 rounded-xl flex items-center justify-center transition-colors border border-slate-200 text-slate-700 hover:bg-slate-100"
                aria-label="Toggle menu"
              >
                {mobileOpen ? <X size={20} /> : <Menu size={20} />}
              </button>
            </div>
          </div>
        </div>
      </motion.nav>

      {/* Mobile Off-Canvas Menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-40 bg-white flex flex-col pt-20 pb-8 px-6 overflow-y-auto"
          >
            <div className="flex items-center justify-between pb-6 border-b border-slate-100">
              <div className="flex items-center gap-3">
                <img
                  src="/images/logo.jpeg"
                  alt="Dr. Mujahid's Clinic Logo"
                  className="w-10 h-10 rounded-full border border-blue-100 object-cover"
                />
                <div>
                  <div className="font-headline font-bold text-base text-[#0E4D6E]">
                    Dr. Mujahid's
                  </div>
                  <div className="text-xs text-slate-500 font-semibold tracking-wide">
                    Oro-Dental Clinic
                  </div>
                </div>
              </div>
              <button
                onClick={() => setMobileOpen(false)}
                className="w-9 h-9 rounded-lg border border-slate-200 text-slate-600 flex items-center justify-center hover:bg-slate-100"
                aria-label="Close menu"
              >
                <X size={18} />
              </button>
            </div>

            <div className="flex-1 flex flex-col justify-center py-6 space-y-1">
              {navLinks.map((link) => {
                const isActive = activeSection === link.href.replace('#', '');
                return (
                  <button
                    key={link.href}
                    onClick={() => handleNavClick(link.href)}
                    className={clsx(
                      'w-full py-3.5 px-4 rounded-xl font-body text-base text-left transition-colors flex items-center justify-between',
                      isActive
                        ? 'bg-blue-50 text-[#0E4D6E] font-bold'
                        : 'text-slate-700 hover:bg-slate-50 font-medium'
                    )}
                  >
                    <span>{link.label}</span>
                    {isActive && <div className="w-2 h-2 rounded-full bg-[#0E4D6E]" />}
                  </button>
                );
              })}
            </div>

            <div className="pt-4 border-t border-slate-100 space-y-3">
              <button
                onClick={() => handleNavClick('#booking')}
                className="w-full py-3.5 px-4 rounded-xl bg-[#0E4D6E] text-white font-body font-semibold text-center flex items-center justify-center gap-2 shadow-sm hover:bg-[#0A3850]"
              >
                <Calendar size={18} />
                <span>Book Appointment</span>
              </button>

              <p className="text-center text-xs text-slate-500">
                168/A (1st Floor), Road 12, Main Road, Tilpapara, Khilgaon, Dhaka
              </p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
