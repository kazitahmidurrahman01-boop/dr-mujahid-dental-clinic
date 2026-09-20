import React from 'react';
import { motion } from 'framer-motion';
import { Zap, Target, Settings, ShieldCheck, Cpu } from 'lucide-react';

const equipment = [
  {
    icon: <Zap className="w-7 h-7 text-[#0E4D6E]" />,
    name: 'RVG Digital X-Ray',
    tag: 'Ultra-Low Radiation',
    description: 'Instant high-resolution intraoral digital radiography revealing dental pulp, root anatomy, and bone height with up to 80% less radiation than traditional films.',
  },
  {
    icon: <Target className="w-7 h-7 text-[#0E4D6E]" />,
    name: 'Electronic Apex Locator',
    tag: 'Sub-Millimeter Precision',
    description: 'Advanced micro-electronic measuring instruments determining the exact apical constriction of the root canal for complete cleaning and hermetic sealing.',
  },
  {
    icon: <Settings className="w-7 h-7 text-[#0E4D6E]" />,
    name: 'Rotary Endomotor',
    tag: 'Quiet & Pain-Free',
    description: 'Precision motorized nickel-titanium rotary file system that shapes root canals smoothly and rapidly, drastically shortening chair time for root canal procedures.',
  },
  {
    icon: <ShieldCheck className="w-7 h-7 text-[#0E4D6E]" />,
    name: 'Advanced Sterilization',
    tag: 'Hospital-Grade Autoclave',
    description: 'Class-B vacuum autoclave sterilization and single-use sealed medical pouches for every patient, preventing cross-contamination and guaranteeing safety.',
  },
];

const Equipment: React.FC = () => {
  return (
    <section id="technology" className="py-20 lg:py-28 bg-white relative overflow-hidden">
      {/* Soft ambient background */}
      <div className="absolute top-1/3 left-0 w-80 h-80 bg-blue-50/50 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 right-0 w-80 h-80 bg-teal-50/40 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-50 border border-blue-200/80 text-[#0E4D6E] text-xs font-semibold uppercase tracking-wider mb-4"
          >
            <Cpu className="w-3.5 h-3.5 text-[#0E4D6E]" />
            <span>Modern Clinical Equipment</span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="font-headline font-bold text-3xl sm:text-4xl lg:text-5xl text-slate-900 tracking-tight"
          >
            Advanced Dental Technology
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-slate-600 max-w-2xl mx-auto text-base sm:text-lg mt-3"
          >
            Dr. Mujahid's Oro-Dental Clinic integrates modern diagnostic and treatment systems to ensure swift, pain-free dental procedures with predictable clinical outcomes.
          </motion.p>
        </div>

        {/* 4 Technology Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {equipment.map((item, i) => (
            <motion.div
              key={item.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08, duration: 0.5 }}
              className="bg-slate-50/70 border border-slate-200/90 rounded-3xl p-6 flex flex-col justify-between hover:bg-white hover:border-blue-200 hover:shadow-md transition-all duration-300 group"
            >
              <div>
                <div className="w-14 h-14 rounded-2xl bg-white border border-blue-100 flex items-center justify-center mb-5 shadow-xs group-hover:scale-105 transition-transform">
                  {item.icon}
                </div>

                <span className="inline-block px-2.5 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider bg-blue-50 text-[#0E4D6E] border border-blue-100 mb-3">
                  {item.tag}
                </span>

                <h3 className="font-headline font-bold text-lg text-slate-900 mb-2 group-hover:text-[#0E4D6E] transition-colors">
                  {item.name}
                </h3>

                <p className="text-slate-600 text-xs sm:text-sm leading-relaxed">
                  {item.description}
                </p>
              </div>

              <div className="pt-4 mt-5 border-t border-slate-200/60 flex items-center gap-2 text-xs font-semibold text-[#0E4D6E]">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
                <span>Calibrated for daily clinic operatory</span>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.p
          className="text-center text-slate-400 text-xs sm:text-sm mt-12"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          All clinical apparatus undergoes daily validation, chemical sterilization testing, and calibration in compliance with Bangladesh Dental Society guidelines.
        </motion.p>
      </div>
    </section>
  );
};

export default Equipment;
