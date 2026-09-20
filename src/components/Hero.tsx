import { motion } from 'framer-motion';
import { Calendar, Phone, ArrowRight, MapPin, Clock, ShieldCheck } from 'lucide-react';

export default function Hero() {
  const scrollToBooking = () => {
    document.getElementById('booking')?.scrollIntoView({ behavior: 'smooth' });
  };
  const scrollToServices = () => {
    document.getElementById('services')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section
      id="home"
      className="relative min-h-[90vh] lg:min-h-screen flex items-center pt-24 pb-16 lg:py-28 overflow-hidden bg-gradient-to-b from-sky-50/70 via-blue-50/40 to-white"
    >
      {/* Soft ambient background shapes */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-gradient-to-br from-blue-200/30 to-teal-100/20 rounded-full blur-3xl pointer-events-none -mr-32 -mt-32" />
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-gradient-to-tr from-sky-100/40 to-transparent rounded-full blur-2xl pointer-events-none -ml-20" />

      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column (Content) */}
          <div className="lg:col-span-7 space-y-6 sm:space-y-7">
            {/* Clinic Badge */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-100/80 border border-blue-200/80 text-[#0E4D6E] text-xs font-semibold uppercase tracking-wider"
            >
              <ShieldCheck className="w-4 h-4 text-[#0E4D6E]" />
              <span>Dr. Mujahid's Oro-Dental Clinic • BMDC Registered</span>
            </motion.div>

            {/* Headline */}
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1, duration: 0.6 }}
              className="font-headline font-extrabold text-4xl sm:text-5xl lg:text-6xl text-slate-900 leading-[1.12] tracking-tight"
            >
              Crafting Your{' '}
              <span className="text-[#0E4D6E] inline-block">Confident Smile</span>
            </motion.h1>

            {/* Subtext */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.6 }}
              className="text-slate-600 text-base sm:text-lg leading-relaxed max-w-xl font-body"
            >
              Experience specialized orthodontic alignment, precision dental implants, and gentle restorative treatments guided by senior consultants in Khilgaon, Dhaka.
            </motion.p>

            {/* Clinic Quick Info Box */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.6 }}
              className="bg-white/90 backdrop-blur-sm border border-blue-100 rounded-2xl p-4 sm:p-5 shadow-sm space-y-2.5 max-w-xl"
            >
              <div className="flex items-start gap-2.5 text-slate-700 text-xs sm:text-sm">
                <MapPin className="w-4 h-4 text-[#0E4D6E] shrink-0 mt-0.5" />
                <span>
                  <strong>Address:</strong> 168/A (1st Floor), Road 12, Main Road, Tilpapara, Khilgaon, Dhaka 1219
                </span>
              </div>
              <div className="flex flex-wrap items-center gap-y-2 gap-x-6 text-slate-600 text-xs sm:text-sm pt-1 border-t border-slate-100">
                <div className="flex items-center gap-1.5">
                  <Clock className="w-3.5 h-3.5 text-blue-600" />
                  <span>Sat – Thu: 5:00 PM – 10:00 PM (Friday Closed)</span>
                </div>
                <a
                  href="tel:+8801745917009"
                  className="flex items-center gap-1.5 text-[#0E4D6E] font-semibold hover:underline"
                >
                  <Phone className="w-3.5 h-3.5 text-[#0E4D6E]" />
                  <span>+880 1745-917009</span>
                </a>
              </div>
            </motion.div>

            {/* Action Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.6 }}
              className="flex flex-wrap items-center gap-3.5 pt-1"
            >
              <button
                onClick={scrollToBooking}
                className="inline-flex items-center gap-2.5 px-7 py-3.5 rounded-xl font-body font-semibold text-white bg-[#0E4D6E] shadow-sm hover:bg-[#0A3850] hover:shadow-md active:scale-95 transition-all duration-200"
              >
                <Calendar className="w-4 h-4" />
                <span>Book Appointment</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <button
                onClick={scrollToServices}
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl font-body font-semibold text-[#0E4D6E] bg-white border border-blue-200 hover:bg-blue-50/60 active:scale-95 transition-all duration-200"
              >
                <span>Explore Services</span>
              </button>
            </motion.div>

            {/* Key Assurance Tags */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5, duration: 0.6 }}
              className="flex flex-wrap items-center gap-4 text-xs font-medium text-slate-500 pt-2"
            >
              <div className="flex items-center gap-1.5">
                <span className="w-2 h-2 rounded-full bg-emerald-500" />
                <span>Hospital Sterilization Protocols</span>
              </div>
              <div className="flex items-center gap-1.5">
                <span className="w-2 h-2 rounded-full bg-emerald-500" />
                <span>Modern Digital RVG Imaging</span>
              </div>
              <div className="flex items-center gap-1.5">
                <span className="w-2 h-2 rounded-full bg-emerald-500" />
                <span>Specialist Consultant Led</span>
              </div>
            </motion.div>
          </div>

          {/* Right Column (High-Res Clinical Visual) */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.25, duration: 0.7 }}
            className="lg:col-span-5 relative"
          >
            <div className="relative mx-auto max-w-md lg:max-w-none">
              {/* Outer decorative card frame */}
              <div className="relative rounded-3xl p-2 bg-gradient-to-tr from-blue-100 via-white to-blue-50 border border-blue-100/80 shadow-[0_20px_50px_rgba(14,77,110,0.12)] overflow-hidden">
                <picture>
                  <source srcSet="/images/hero-orthodontic.webp" type="image/webp" />
                  <img
                    src="/images/hero-orthodontic.jpg"
                    alt="Orthodontic Consultation and Smile Care at Dr. Mujahid's Oro-Dental Clinic"
                    className="w-full h-[360px] sm:h-[440px] object-cover rounded-2xl"
                    loading="eager"
                  />
                </picture>

                {/* Floating badge top-right */}
                <div className="absolute top-5 right-5 bg-white/95 backdrop-blur-md px-3.5 py-2 rounded-xl shadow-md border border-blue-100/60 flex items-center gap-2.5">
                  <div className="w-2.5 h-2.5 rounded-full bg-teal-500 animate-pulse" />
                  <div className="text-left">
                    <p className="text-[10px] uppercase font-bold text-slate-400 leading-none">Specialty</p>
                    <p className="text-xs font-bold text-[#0E4D6E] leading-tight">Orthodontics & Implants</p>
                  </div>
                </div>

                {/* Floating doctor credential badge bottom-left */}
                <div className="absolute bottom-5 left-5 right-5 bg-white/95 backdrop-blur-md p-3.5 rounded-xl shadow-lg border border-blue-100 flex items-center gap-3">
                  <img
                    src="/images/doctor.jpeg"
                    alt="Dr. Mostofa Mujahid Al Hussain"
                    className="w-12 h-12 rounded-full object-cover border-2 border-[#0E4D6E]/30 shrink-0"
                  />
                  <div className="min-w-0">
                    <h4 className="font-headline font-bold text-sm text-slate-900 truncate">
                      Dr. Mostofa Mujahid Al Hussain
                    </h4>
                    <p className="text-[11px] text-slate-500 font-medium truncate">
                      BDS (DU), D-Orthodontics • Consultant JIMCH
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
