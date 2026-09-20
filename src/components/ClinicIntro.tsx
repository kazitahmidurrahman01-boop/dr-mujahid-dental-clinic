import React from 'react';
import { motion } from 'framer-motion';
import { Shield, HeartPulse, Clock, Award } from 'lucide-react';

const ClinicIntro: React.FC = () => {
  const scrollToServices = () => {
    document.getElementById('services')?.scrollIntoView({ behavior: 'smooth' });
  };
  const scrollToBooking = () => {
    document.getElementById('booking')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="about" className="py-20 lg:py-28 bg-white relative overflow-hidden">
      {/* Background ambient accents */}
      <div className="absolute top-1/2 left-0 w-80 h-80 bg-blue-50/60 rounded-full blur-3xl pointer-events-none -translate-y-1/2" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-teal-50/50 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-50 border border-blue-200/80 text-[#0E4D6E] text-xs font-semibold uppercase tracking-wider mb-4"
          >
            <Shield className="w-3.5 h-3.5 text-[#0E4D6E]" />
            <span>About Dr. Mujahid's Clinic</span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="font-headline font-bold text-3xl sm:text-4xl lg:text-5xl text-slate-900 tracking-tight leading-tight"
          >
            Specialized Dentistry Centered on{' '}
            <span className="text-[#0E4D6E]">Precision & Patient Comfort</span>
          </motion.h2>

          <motion.div
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.5 }}
            className="w-16 h-1 bg-[#0E4D6E] mx-auto mt-4 rounded-full"
          />
        </div>

        {/* Two-Column Showcase */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-14 items-center">
          
          {/* Left Column: Authentic Clinic Image */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-6"
          >
            <div className="relative rounded-3xl overflow-hidden border border-blue-100 shadow-[0_10px_35px_rgba(14,77,110,0.08)] bg-slate-50 group">
              <img
                src="/images/clinic-interior.jpg"
                alt="Dr. Mujahid's Oro-Dental Clinic Treatment Operatory"
                className="w-full h-[380px] sm:h-[460px] object-cover group-hover:scale-103 transition-transform duration-700 ease-out"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-slate-950/20 to-transparent pointer-events-none" />

              {/* In-Image Information Overlay */}
              <div className="absolute bottom-6 left-6 right-6 flex items-end justify-between pointer-events-none">
                <div className="bg-white/95 backdrop-blur-md px-4 py-3 rounded-2xl shadow-lg border border-slate-100">
                  <div className="flex items-center gap-2 mb-1">
                    <Award className="w-4 h-4 text-[#0E4D6E]" />
                    <span className="text-xs font-bold uppercase tracking-wider text-slate-500">
                      Modern Operatory
                    </span>
                  </div>
                  <p className="font-headline font-bold text-slate-900 text-sm sm:text-base">
                    Equipped with Rotary Endodontics & RVG
                  </p>
                </div>

                <div className="hidden sm:flex items-center gap-2 bg-[#0E4D6E]/90 text-white backdrop-blur-md px-3.5 py-2 rounded-xl text-xs font-semibold shadow-md">
                  <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                  <span>Strict Sterilization</span>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right Column: Narrative & Pillars */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-6 space-y-6"
          >
            <div className="space-y-4 text-slate-600 text-base sm:text-lg leading-relaxed font-body">
              <p>
                Welcome to <strong className="text-slate-900">Dr. Mujahid's Oro-Dental Clinic</strong>, a premier dental sanctuary located at Tilpapara, Khilgaon. Led by <strong>Dr. Mostofa Mujahid Al Hussain</strong>, Consultant Orthodontist (JIMCH), our clinic combines specialist expertise with gentle, individualized care.
              </p>
              <p>
                Whether you require precision orthodontic smile realignment with braces or aligners, dental implants, root canal therapy, or emergency dental trauma management, every procedure is carried out under the strictest international infection control guidelines.
              </p>
            </div>

            {/* Core Practice Highlights */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 pt-2">
              <div className="p-4 rounded-2xl bg-blue-50/50 border border-blue-100/80 flex items-start gap-3">
                <div className="p-2 rounded-xl bg-white text-[#0E4D6E] shadow-xs">
                  <Award className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-headline font-bold text-slate-900 text-sm">Specialist-Led Care</h4>
                  <p className="text-xs text-slate-500 mt-0.5 leading-snug">
                    Orthodontics & Maxillofacial specialists overseeing every diagnosis.
                  </p>
                </div>
              </div>

              <div className="p-4 rounded-2xl bg-blue-50/50 border border-blue-100/80 flex items-start gap-3">
                <div className="p-2 rounded-xl bg-white text-[#0E4D6E] shadow-xs">
                  <Shield className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-headline font-bold text-slate-900 text-sm">Autoclave Sterilization</h4>
                  <p className="text-xs text-slate-500 mt-0.5 leading-snug">
                    Rigorous pouch sterilization protecting every single patient.
                  </p>
                </div>
              </div>

              <div className="p-4 rounded-2xl bg-blue-50/50 border border-blue-100/80 flex items-start gap-3">
                <div className="p-2 rounded-xl bg-white text-[#0E4D6E] shadow-xs">
                  <HeartPulse className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-headline font-bold text-slate-900 text-sm">Minimally Invasive</h4>
                  <p className="text-xs text-slate-500 mt-0.5 leading-snug">
                    Focus on tooth preservation and comfortable, anxiety-free visits.
                  </p>
                </div>
              </div>

              <div className="p-4 rounded-2xl bg-blue-50/50 border border-blue-100/80 flex items-start gap-3">
                <div className="p-2 rounded-xl bg-white text-[#0E4D6E] shadow-xs">
                  <Clock className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-headline font-bold text-slate-900 text-sm">Convenient Hours</h4>
                  <p className="text-xs text-slate-500 mt-0.5 leading-snug">
                    Evening appointments (5 PM – 10 PM) tailored for busy professionals.
                  </p>
                </div>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="pt-3 flex flex-wrap items-center gap-3">
              <button
                onClick={scrollToServices}
                className="px-6 py-3 rounded-xl font-body font-semibold text-white bg-[#0E4D6E] shadow-sm hover:bg-[#0A3850] active:scale-95 transition-all duration-200"
              >
                Our 8 Clinical Services
              </button>
              <button
                onClick={scrollToBooking}
                className="px-6 py-3 rounded-xl font-body font-semibold text-[#0E4D6E] bg-white border border-blue-200 hover:bg-blue-50/60 active:scale-95 transition-all duration-200"
              >
                Schedule an Evening Visit
              </button>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default ClinicIntro;
