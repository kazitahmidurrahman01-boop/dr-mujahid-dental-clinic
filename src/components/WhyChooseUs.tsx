import React from 'react';
import { motion } from 'framer-motion';
import { Shield, Cpu, Heart, Grid3X3, User, Building2, CheckCircle2 } from 'lucide-react';

const features = [
  {
    icon: <Shield className="w-6 h-6 text-[#0E4D6E]" />,
    title: 'Consultant-Led Care',
    description: 'Post-graduate orthodontic and dental surgical specialists oversee every diagnostic assessment and clinical step.',
  },
  {
    icon: <Cpu className="w-6 h-6 text-[#0E4D6E]" />,
    title: 'Modern Digital Technology',
    description: 'Equipped with RVG digital radiography, electronic apex locators, and rotary endodontic motors for rapid precision.',
  },
  {
    icon: <Heart className="w-6 h-6 text-[#0E4D6E]" />,
    title: 'Gentle, Pain-Free Approach',
    description: 'We prioritize patient comfort, local anesthesia techniques, and calming treatment environments for anxiety-free visits.',
  },
  {
    icon: <Grid3X3 className="w-6 h-6 text-[#0E4D6E]" />,
    title: '8 Specialized Disciplines',
    description: 'From braces and implants to avulsed tooth emergencies and geriatric care, all under one roof in Tilpapara, Khilgaon.',
  },
  {
    icon: <User className="w-6 h-6 text-[#0E4D6E]" />,
    title: 'Custom Treatment Planning',
    description: 'No one-size-fits-all treatments. Every care pathway is designed around your aesthetic goals, clinical needs, and timeline.',
  },
  {
    icon: <Building2 className="w-6 h-6 text-[#0E4D6E]" />,
    title: 'Strict Infection Control',
    description: 'Hospital-grade autoclave sterilization, vacuum pouches, and sanitized surfaces protecting you and your family.',
  },
];

const WhyChooseUs: React.FC = () => {
  return (
    <section id="why-us" className="py-20 lg:py-28 bg-slate-50/80 relative overflow-hidden">
      {/* Soft ambient blur */}
      <div className="absolute top-1/2 left-0 w-80 h-80 bg-blue-100/40 rounded-full blur-3xl pointer-events-none -translate-y-1/2" />
      <div className="absolute bottom-0 right-0 w-80 h-80 bg-teal-100/30 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-50 border border-blue-200/80 text-[#0E4D6E] text-xs font-semibold uppercase tracking-wider mb-4"
          >
            <CheckCircle2 className="w-3.5 h-3.5 text-[#0E4D6E]" />
            <span>Why Patients Trust Us</span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="font-headline font-bold text-3xl sm:text-4xl lg:text-5xl text-slate-900 tracking-tight"
          >
            The <span className="text-[#0E4D6E]">Dr. Mujahid's Clinic</span> Standard
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-slate-600 max-w-2xl mx-auto text-base sm:text-lg mt-3"
          >
            Combining academic expertise, compassionate care, and modern dental apparatus to give you a healthier, confident smile.
          </motion.p>
        </div>

        {/* 6 Feature Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, i) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.07, duration: 0.5 }}
              className="bg-white rounded-3xl p-7 border border-slate-200/80 shadow-xs hover:border-blue-200 hover:shadow-md transition-all duration-300 group flex flex-col justify-between"
            >
              <div>
                <div className="w-13 h-13 rounded-2xl bg-blue-50 border border-blue-100 flex items-center justify-center mb-5 group-hover:scale-105 transition-transform">
                  {feature.icon}
                </div>
                <h3 className="font-headline font-bold text-xl text-slate-900 mb-2 group-hover:text-[#0E4D6E] transition-colors">
                  {feature.title}
                </h3>
                <p className="text-slate-600 text-sm leading-relaxed">
                  {feature.description}
                </p>
              </div>

              <div className="pt-4 mt-5 border-t border-slate-100 flex items-center gap-1.5 text-xs font-semibold text-[#0E4D6E]">
                <span>Certified Clinical Quality</span>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default WhyChooseUs;
