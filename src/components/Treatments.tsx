import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { treatmentCategories } from '../data/treatments';
import {
  Smile, Shield, Crown, Stethoscope, Sparkles, Heart, Users, Activity,
  ChevronDown, ArrowRight, X, Calendar
} from 'lucide-react';
import clsx from 'clsx';

const ICON_MAP: Record<string, React.FC<{ size?: number; className?: string }>> = {
  Smile,
  Shield,
  Crown,
  Stethoscope,
  Sparkles,
  Heart,
  Users,
  Activity,
};

const CATEGORY_STYLES: Record<string, { badge: string; border: string; accent: string; lightBg: string }> = {
  orthodontics: {
    badge: 'bg-blue-50 text-blue-800 border-blue-200',
    border: 'border-blue-100',
    accent: '#0E4D6E',
    lightBg: 'bg-gradient-to-r from-blue-50/90 to-sky-50/50',
  },
  conservative: {
    badge: 'bg-teal-50 text-teal-800 border-teal-200',
    border: 'border-teal-100',
    accent: '#0D9488',
    lightBg: 'bg-gradient-to-r from-teal-50/90 to-emerald-50/50',
  },
  prosthodontics: {
    badge: 'bg-indigo-50 text-indigo-800 border-indigo-200',
    border: 'border-indigo-100',
    accent: '#4F46E5',
    lightBg: 'bg-gradient-to-r from-indigo-50/90 to-blue-50/50',
  },
  surgery: {
    badge: 'bg-rose-50 text-rose-800 border-rose-200',
    border: 'border-rose-100',
    accent: '#E11D48',
    lightBg: 'bg-gradient-to-r from-rose-50/90 to-orange-50/50',
  },
  aesthetic: {
    badge: 'bg-amber-50 text-amber-800 border-amber-200',
    border: 'border-amber-100',
    accent: '#D97706',
    lightBg: 'bg-gradient-to-r from-amber-50/90 to-yellow-50/50',
  },
  pediatric: {
    badge: 'bg-pink-50 text-pink-800 border-pink-200',
    border: 'border-pink-100',
    accent: '#DB2777',
    lightBg: 'bg-gradient-to-r from-pink-50/90 to-rose-50/50',
  },
  geriatric: {
    badge: 'bg-cyan-50 text-cyan-800 border-cyan-200',
    border: 'border-cyan-100',
    accent: '#0891B2',
    lightBg: 'bg-gradient-to-r from-cyan-50/90 to-teal-50/50',
  },
  'oral-medicine': {
    badge: 'bg-slate-100 text-slate-800 border-slate-300',
    border: 'border-slate-200',
    accent: '#334155',
    lightBg: 'bg-gradient-to-r from-slate-100/90 to-blue-50/50',
  },
};

export default function Treatments() {
  const [activeCategory, setActiveCategory] = useState(treatmentCategories[0].id);
  const [modalTreatment, setModalTreatment] = useState<string | null>(null);

  const currentCategory = treatmentCategories.find(c => c.id === activeCategory) || treatmentCategories[0];
  const styles = CATEGORY_STYLES[activeCategory] || CATEGORY_STYLES.orthodontics;

  const scrollToBooking = () => {
    document.getElementById('booking')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="services" className="py-20 lg:py-28 bg-slate-50/70 relative">
      <div className="container mx-auto px-4 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-50 border border-blue-200/80 text-[#0E4D6E] text-xs font-semibold uppercase tracking-wider mb-4"
          >
            <span>Comprehensive Dental Care</span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="font-headline font-bold text-3xl sm:text-4xl lg:text-5xl text-slate-900 tracking-tight"
          >
            Specialized Treatments &amp; Services
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-slate-600 max-w-2xl mx-auto text-base sm:text-lg mt-3"
          >
            Delivering 8 specialized clinical disciplines with certified specialists, modern diagnostics, and tooth-preserving techniques.
          </motion.p>
        </div>

        {/* 8 Category Selection Pills */}
        <div className="flex flex-wrap gap-2 sm:gap-3 justify-center mb-10">
          {treatmentCategories.map((cat, i) => {
            const IconComp = ICON_MAP[cat.icon] || Smile;
            const isActive = activeCategory === cat.id;

            return (
              <motion.button
                key={cat.id}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.03 }}
                onClick={() => setActiveCategory(cat.id)}
                className={clsx(
                  'flex items-center gap-2 px-4 py-2.5 rounded-xl font-body font-semibold text-xs sm:text-sm transition-all duration-200 border',
                  isActive
                    ? 'bg-[#0E4D6E] text-white border-[#0E4D6E] shadow-sm scale-102'
                    : 'bg-white text-slate-700 border-slate-200/90 hover:border-blue-300 hover:text-[#0E4D6E]'
                )}
              >
                <IconComp size={16} className={isActive ? 'text-white' : 'text-[#0E4D6E]'} />
                <span>{cat.name}</span>
              </motion.button>
            );
          })}
        </div>

        {/* Active Category Header Banner */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeCategory}
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.25 }}
            className="space-y-6"
          >
            <div className={clsx('rounded-2xl p-6 md:p-8 border shadow-xs', styles.lightBg, styles.border)}>
              <div className="flex flex-col md:flex-row md:items-center justify-between gap-5">
                <div className="flex items-start gap-4">
                  <div className="w-13 h-13 rounded-2xl flex items-center justify-center bg-white shadow-xs border border-slate-100 p-3 shrink-0">
                    {(() => {
                      const IconComp = ICON_MAP[currentCategory.icon] || Smile;
                      return <IconComp size={28} className="text-[#0E4D6E]" />;
                    })()}
                  </div>
                  <div>
                    <div className="flex items-center gap-2 mb-1">
                      <h3 className="font-headline font-bold text-2xl text-slate-900">
                        {currentCategory.name}
                      </h3>
                      <span className={clsx('text-[11px] font-semibold px-2.5 py-0.5 rounded-full border', styles.badge)}>
                        {currentCategory.treatments.length} Procedures
                      </span>
                    </div>
                    <p className="text-slate-600 text-sm sm:text-base max-w-2xl leading-relaxed">
                      {currentCategory.description}
                    </p>
                  </div>
                </div>

                <button
                  onClick={scrollToBooking}
                  className="self-start md:self-center shrink-0 inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-[#0E4D6E] text-white font-semibold text-sm shadow-xs hover:bg-[#0A3850] transition-colors"
                >
                  <Calendar size={16} />
                  <span>Book Consultation</span>
                </button>
              </div>
            </div>

            {/* Treatment Cards Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {currentCategory.treatments.map((treatment, i) => (
                <motion.div
                  key={treatment.name}
                  initial={{ opacity: 0, y: 12 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.03 }}
                  onClick={() => setModalTreatment(treatment.name)}
                  className={clsx(
                    'bg-white rounded-2xl p-5 border transition-all duration-200 cursor-pointer flex flex-col justify-between group',
                    treatment.highlight
                      ? 'border-blue-200 shadow-xs hover:border-[#0E4D6E] hover:shadow-md'
                      : 'border-slate-200/80 hover:border-slate-300 hover:shadow-sm'
                  )}
                >
                  <div>
                    <div className="flex items-center justify-between mb-2">
                      <div className="flex items-center gap-2">
                        <span className="w-2 h-2 rounded-full bg-[#0E4D6E]" />
                        {treatment.highlight && (
                          <span className="text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded-md bg-blue-50 text-[#0E4D6E] border border-blue-100">
                            Key Procedure
                          </span>
                        )}
                      </div>
                      <ChevronDown size={15} className="text-slate-400 group-hover:text-[#0E4D6E] -rotate-90 transition-transform" />
                    </div>

                    <h4 className="font-headline font-bold text-slate-900 text-base mb-1.5 group-hover:text-[#0E4D6E] transition-colors">
                      {treatment.name}
                    </h4>

                    {treatment.description && (
                      <p className="text-slate-500 text-sm leading-relaxed line-clamp-2">
                        {treatment.description}
                      </p>
                    )}
                  </div>

                  <div className="pt-4 mt-3 border-t border-slate-100 flex items-center justify-between text-xs font-semibold text-[#0E4D6E]">
                    <span>View clinical details</span>
                    <ArrowRight size={13} className="group-hover:translate-x-1 transition-transform" />
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </AnimatePresence>

      </div>

      {/* Modal Dialog for Treatment Details */}
      <AnimatePresence>
        {modalTreatment && (() => {
          const treatment = currentCategory.treatments.find(t => t.name === modalTreatment);
          if (!treatment) return null;
          return (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-xs"
              onClick={() => setModalTreatment(null)}
            >
              <motion.div
                initial={{ scale: 0.95, y: 15 }}
                animate={{ scale: 1, y: 0 }}
                exit={{ scale: 0.95, y: 15 }}
                className="bg-white rounded-3xl p-6 sm:p-8 max-w-lg w-full shadow-2xl border border-slate-100"
                onClick={e => e.stopPropagation()}
              >
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <span className={clsx('text-xs font-semibold uppercase tracking-wider px-3 py-1 rounded-full border', styles.badge)}>
                      {currentCategory.name}
                    </span>
                    <h3 className="font-headline font-bold text-slate-900 text-2xl mt-2.5">
                      {treatment.name}
                    </h3>
                  </div>
                  <button
                    onClick={() => setModalTreatment(null)}
                    className="w-8 h-8 rounded-full bg-slate-100 text-slate-500 flex items-center justify-center hover:bg-slate-200 transition-colors"
                    aria-label="Close details"
                  >
                    <X size={16} />
                  </button>
                </div>

                {treatment.description && (
                  <p className="text-slate-600 text-base leading-relaxed mb-6 font-body">
                    {treatment.description}
                  </p>
                )}

                <div className="bg-blue-50/80 border border-blue-100 rounded-xl p-4 mb-6 text-xs text-slate-600 leading-relaxed space-y-1">
                  <p className="font-bold text-[#0E4D6E]">Clinical Protocol Note</p>
                  <p>
                    Every treatment plan is tailored during clinical examination using digital imaging. Post-operative care and follow-up guidance are provided at each step.
                  </p>
                </div>

                <div className="flex gap-3">
                  <button
                    onClick={() => {
                      setModalTreatment(null);
                      scrollToBooking();
                    }}
                    className="flex-1 py-3 px-4 rounded-xl bg-[#0E4D6E] text-white font-semibold text-sm text-center shadow-xs hover:bg-[#0A3850] transition-colors"
                  >
                    Book This Service
                  </button>
                  <button
                    onClick={() => setModalTreatment(null)}
                    className="py-3 px-4 rounded-xl border border-slate-200 text-slate-700 font-semibold text-sm hover:bg-slate-50 transition-colors"
                  >
                    Close
                  </button>
                </div>
              </motion.div>
            </motion.div>
          );
        })()}
      </AnimatePresence>
    </section>
  );
}
