import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { CheckCircle2, ArrowRight, Sparkles, SlidersHorizontal, ShieldCheck } from 'lucide-react';
import BeforeAfterSlider from './BeforeAfterSlider';

interface ClinicalCase {
  id: string;
  title: string;
  category: string;
  duration: string;
  description: string;
  beforeImg: string;
  afterImg: string;
}

const clinicalCases: ClinicalCase[] = [
  {
    id: 'braces',
    title: 'Comprehensive Orthodontic Realignment',
    category: 'Fixed Orthodontics',
    duration: '14 Months Treatment',
    description: 'Correction of severe maxillary anterior crowding, incisor rotation, and midline discrepancy using fixed precision bracket systems.',
    beforeImg: '/images/cases/braces-before.webp',
    afterImg: '/images/cases/braces-after.webp',
  },
  {
    id: 'whitening',
    title: 'Aesthetic Enamel Bleaching & Smile Brightening',
    category: 'Cosmetic Dentistry',
    duration: 'In-Office Clinical Session',
    description: 'Removal of stubborn extrinsic deep stains and intrinsic discoloration with professional chairside dental whitening.',
    beforeImg: '/images/cases/whitening-before.webp',
    afterImg: '/images/cases/whitening-after.webp',
  },
];

const orthodonticHighlights = [
  'Digital cephalometric & photographic smile analysis',
  'Fixed metal & aesthetic tooth-colored ceramic brackets',
  'Invisible clear aligner therapies for discrete straightening',
  'Habit-breaking myofunctional & arch expansion appliances',
  'Custom fixed lingual wire & clear Hawley retainers',
];

const OrthodonticsShowcase: React.FC = () => {
  const [activeCase, setActiveCase] = useState<ClinicalCase>(clinicalCases[0]);

  const scrollToBooking = () => {
    document.getElementById('booking')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="cases" className="py-20 lg:py-28 bg-white relative overflow-hidden">
      {/* Background ambient decorative shapes */}
      <div className="absolute -top-24 right-0 w-96 h-96 bg-blue-50/50 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute -bottom-24 left-0 w-96 h-96 bg-teal-50/40 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-50 border border-blue-200/80 text-[#0E4D6E] text-xs font-semibold uppercase tracking-wider mb-4"
          >
            <Sparkles className="w-3.5 h-3.5 text-[#0E4D6E]" />
            <span>Clinical Results &amp; Orthodontics</span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="font-headline font-bold text-3xl sm:text-4xl lg:text-5xl text-slate-900 tracking-tight"
          >
            Real Patient <span className="text-[#0E4D6E]">Before &amp; After Cases</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-slate-600 max-w-2xl mx-auto text-base sm:text-lg mt-3"
          >
            Experience authentic smile transformations achieved under the care of Consultant Orthodontist Dr. Mostofa Mujahid Al Hussain.
          </motion.p>
        </div>

        {/* Case Switcher Tabs */}
        <div className="flex justify-center gap-3 mb-10">
          {clinicalCases.map((c) => {
            const isSelected = activeCase.id === c.id;
            return (
              <button
                key={c.id}
                onClick={() => setActiveCase(c)}
                className={`px-5 py-2.5 rounded-xl font-body font-semibold text-xs sm:text-sm transition-all duration-200 border flex items-center gap-2 ${
                  isSelected
                    ? 'bg-[#0E4D6E] text-white border-[#0E4D6E] shadow-sm'
                    : 'bg-slate-50 text-slate-700 border-slate-200 hover:bg-slate-100'
                }`}
              >
                <SlidersHorizontal size={14} className={isSelected ? 'text-white' : 'text-[#0E4D6E]'} />
                <span>{c.title.split(' ')[0]} Case</span>
              </button>
            );
          })}
        </div>

        {/* Case Grid: Interactive Slider on Left, Clinical Analysis on Right */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          
          {/* Draggable Slider Column */}
          <motion.div
            key={activeCase.id}
            initial={{ opacity: 0, scale: 0.98 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.4 }}
            className="lg:col-span-7"
          >
            <div className="bg-slate-50 p-2.5 sm:p-4 rounded-3xl border border-blue-100 shadow-md">
              <BeforeAfterSlider
                beforeImage={activeCase.beforeImg}
                afterImage={activeCase.afterImg}
                beforeLabel="Before"
                afterLabel="After"
                aspectRatio="aspect-[16/11]"
              />
              <div className="mt-3 flex items-center justify-between px-2 text-xs text-slate-500 font-medium">
                <span className="flex items-center gap-1.5">
                  <ShieldCheck size={14} className="text-[#0E4D6E]" />
                  Clinical Photography • Unretouched
                </span>
                <span className="font-semibold text-slate-700 bg-white px-2.5 py-1 rounded-md border border-slate-200">
                  {activeCase.duration}
                </span>
              </div>
            </div>
          </motion.div>

          {/* Clinical Insights & Highlights */}
          <motion.div
            initial={{ opacity: 0, x: 25 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="lg:col-span-5 space-y-6"
          >
            <div>
              <span className="text-xs font-bold uppercase tracking-wider text-[#0E4D6E] bg-blue-50 px-3 py-1 rounded-full border border-blue-200">
                {activeCase.category}
              </span>
              <h3 className="font-headline font-bold text-2xl sm:text-3xl text-slate-900 mt-3 leading-snug">
                {activeCase.title}
              </h3>
              <p className="text-slate-600 text-sm sm:text-base leading-relaxed mt-3">
                {activeCase.description}
              </p>
            </div>

            {/* Orthodontic Pillars */}
            <div className="space-y-2.5 pt-2 border-t border-slate-100">
              <h4 className="font-body font-bold text-xs uppercase tracking-wider text-slate-400 mb-2">
                Why Patients Choose Our Orthodontic Care
              </h4>
              {orthodonticHighlights.map((point) => (
                <div key={point} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-700">
                  <CheckCircle2 className="w-4 h-4 text-[#0E4D6E] shrink-0 mt-0.5" />
                  <span>{point}</span>
                </div>
              ))}
            </div>

            {/* Consultation CTA */}
            <div className="pt-2 flex flex-wrap gap-3">
              <button
                onClick={scrollToBooking}
                className="inline-flex items-center gap-2 px-6 py-3 rounded-xl font-body font-semibold text-sm bg-[#0E4D6E] text-white shadow-sm hover:bg-[#0A3850] active:scale-95 transition-all"
              >
                <span>Book Smile Consultation</span>
                <ArrowRight size={15} />
              </button>
            </div>
          </motion.div>

        </div>

      </div>
    </section>
  );
};

export default OrthodonticsShowcase;
