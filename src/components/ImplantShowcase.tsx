import { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { RotateCcw, Calendar } from 'lucide-react';

const IMPLANT_STEPS = [
  { id: 0, label: 'Jawbone Assessment', color: '#D4B896', description: 'Healthy alveolar bone provides a secure base. Digital radiographic evaluation confirms optimal width and bone density.' },
  { id: 1, label: 'Titanium Fixture Placement', color: '#8090A8', description: 'A biocompatible medical-grade titanium screw is gently placed into the jawbone, initiating biological osseointegration.' },
  { id: 2, label: 'Custom Abutment Connection', color: '#64748B', description: 'Following stable bone integration, an precision anatomical titanium or zirconia abutment is secured to anchor the crown.' },
  { id: 3, label: 'Full Aesthetic Crown', color: '#0E4D6E', description: 'A custom ceramic or zirconia crown is bonded in place, restoring 100% natural chewing strength and lifelike appearance.' },
];

export default function ImplantShowcase() {
  const [visibleStep, setVisibleStep] = useState(0);
  const [autoPlay, setAutoPlay] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setAutoPlay(true);
        }
      },
      { threshold: 0.15 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!autoPlay) return;
    if (visibleStep >= IMPLANT_STEPS.length - 1) return;
    const timer = setTimeout(() => setVisibleStep(s => s + 1), 900);
    return () => clearTimeout(timer);
  }, [autoPlay, visibleStep]);

  const scrollToBooking = () => {
    document.getElementById('booking')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section
      ref={sectionRef}
      id="implants"
      className="py-20 lg:py-28 bg-slate-50/80 relative overflow-hidden"
    >
      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-50 border border-blue-200/80 text-[#0E4D6E] text-xs font-semibold uppercase tracking-wider mb-4"
          >
            <span>Advanced Prosthodontics</span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="font-headline font-bold text-3xl sm:text-4xl lg:text-5xl text-slate-900 tracking-tight"
          >
            Permanent Tooth Restoration with{' '}
            <span className="text-[#0E4D6E]">Dental Implants</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-slate-600 max-w-2xl mx-auto text-base sm:text-lg mt-3"
          >
            Explore how modern titanium fixtures replicate the strength and root stability of natural teeth for lifelong comfort.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left: SVG Interactive Implant Visual */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-5 flex justify-center"
          >
            <div className="relative w-64 md:w-80 bg-white p-6 rounded-3xl border border-blue-100 shadow-[0_10px_30px_rgba(14,77,110,0.06)]">
              <svg viewBox="0 0 260 400" className="w-full">
                <defs>
                  <linearGradient id="boneGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#E2D4C0" />
                    <stop offset="100%" stopColor="#C4B094" />
                  </linearGradient>
                  <linearGradient id="implantGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#CBD5E1" />
                    <stop offset="100%" stopColor="#64748B" />
                  </linearGradient>
                  <linearGradient id="crownGrad2" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#FFFFFF" />
                    <stop offset="100%" stopColor="#E2E8F0" />
                  </linearGradient>
                  <linearGradient id="gumGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="rgba(244,114,182,0.6)" />
                    <stop offset="100%" stopColor="rgba(251,113,133,0.4)" />
                  </linearGradient>
                </defs>

                {/* Jawbone — step 0 */}
                <motion.g initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.5 }}>
                  <rect x="20" y="270" width="220" height="120" rx="14" fill="url(#boneGrad)" />
                  {[0, 1, 2, 3].map(i => (
                    <line key={i} x1="20" y1={285 + i * 28} x2="240" y2={285 + i * 28} stroke="rgba(160,120,70,0.25)" strokeWidth="1" />
                  ))}
                  <text x="130" y="335" textAnchor="middle" fill="#6B5637" fontSize="11" fontWeight="600" letterSpacing="1.5">
                    ALVEOLAR BONE
                  </text>
                </motion.g>

                {/* Gum tissue */}
                <motion.g initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.2 }}>
                  <path d="M 65 270 Q 60 238 72 220 Q 98 200 130 200 Q 162 200 188 220 Q 200 238 195 270 Z" fill="url(#gumGrad)" />
                </motion.g>

                {/* Implant fixture — step 1 */}
                {visibleStep >= 1 && (
                  <motion.g initial={{ opacity: 0, y: -40 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
                    <rect x="118" y="190" width="24" height="100" rx="4" fill="url(#implantGrad)" stroke="#475569" strokeWidth="1" />
                    {[0, 1, 2, 3, 4, 5, 6, 7].map(i => (
                      <line key={i} x1="118" y1={200 + i * 12} x2="142" y2={203 + i * 12} stroke="rgba(255,255,255,0.4)" strokeWidth="1" />
                    ))}
                    <polygon points="118,290 142,290 130,305" fill="#475569" />
                    <text x="162" y="245" fill="#0E4D6E" fontSize="9" fontWeight="bold">Fixture</text>
                    <line x1="144" y1="243" x2="159" y2="243" stroke="#0E4D6E" strokeWidth="1" />
                  </motion.g>
                )}

                {/* Abutment — step 2 */}
                {visibleStep >= 2 && (
                  <motion.g initial={{ opacity: 0, scaleY: 0 }} animate={{ opacity: 1, scaleY: 1 }} transition={{ duration: 0.4 }} style={{ transformOrigin: '130px 195px' }}>
                    <rect x="122" y="160" width="16" height="32" rx="3" fill="#64748B" stroke="#334155" strokeWidth="1" />
                    <text x="156" y="178" fill="#0E4D6E" fontSize="9" fontWeight="bold">Abutment</text>
                    <line x1="140" y1="176" x2="153" y2="176" stroke="#0E4D6E" strokeWidth="1" />
                  </motion.g>
                )}

                {/* Crown — step 3 */}
                {visibleStep >= 3 && (
                  <motion.g initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
                    <path
                      d="M 90 160 Q 85 130 92 105 Q 100 80 130 75 Q 160 80 168 105 Q 175 130 170 160 Q 162 185 148 192 Q 138 197 130 197 Q 122 197 112 192 Q 98 185 90 160 Z"
                      fill="url(#crownGrad2)"
                      stroke="#94A3B8"
                      strokeWidth="1.5"
                    />
                    <path d="M 102 100 Q 110 88 130 86" stroke="rgba(255,255,255,0.9)" strokeWidth="2.5" fill="none" strokeLinecap="round" />
                    <text x="65" y="135" fill="#0E4D6E" fontSize="9" fontWeight="bold">Zirconia Crown</text>
                    <line x1="88" y1="133" x2="98" y2="133" stroke="#0E4D6E" strokeWidth="1" />
                  </motion.g>
                )}

                {/* Progress dots */}
                <g>
                  {IMPLANT_STEPS.map((_, i) => (
                    <circle
                      key={i}
                      cx={65 + i * 14}
                      cy={380}
                      r={4}
                      fill={i <= visibleStep ? '#0E4D6E' : '#CBD5E1'}
                      style={{ transition: 'fill 0.3s' }}
                    />
                  ))}
                </g>
              </svg>
            </div>
          </motion.div>

          {/* Right: Steps and Explanations */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-7 space-y-5"
          >
            <div className="space-y-3">
              {IMPLANT_STEPS.map((s, i) => (
                <div
                  key={s.id}
                  onClick={() => setVisibleStep(i)}
                  className={`p-4 sm:p-5 rounded-2xl cursor-pointer transition-all duration-200 border ${
                    visibleStep >= i
                      ? 'bg-white border-[#0E4D6E] shadow-sm'
                      : 'bg-white/60 border-slate-200 opacity-60 hover:opacity-80'
                  }`}
                >
                  <div className="flex items-start gap-3.5">
                    <div className={`w-7 h-7 rounded-xl flex items-center justify-center text-xs font-bold shrink-0 transition-colors ${
                      visibleStep >= i ? 'bg-[#0E4D6E] text-white' : 'bg-slate-100 text-slate-500'
                    }`}>
                      {i + 1}
                    </div>
                    <div>
                      <h4 className={`font-headline font-bold text-base ${visibleStep >= i ? 'text-[#0E4D6E]' : 'text-slate-700'}`}>
                        {s.label}
                      </h4>
                      {visibleStep >= i && (
                        <p className="text-slate-600 text-sm leading-relaxed mt-1">{s.description}</p>
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Controls */}
            <div className="flex flex-wrap items-center gap-3 pt-2">
              <button
                onClick={() => {
                  setVisibleStep(0);
                  setAutoPlay(false);
                  setTimeout(() => setAutoPlay(true), 150);
                }}
                className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl border border-slate-200 bg-white text-slate-700 text-xs sm:text-sm font-semibold hover:bg-slate-50 transition-colors"
              >
                <RotateCcw size={14} />
                <span>Replay Steps</span>
              </button>

              <button
                onClick={scrollToBooking}
                className="inline-flex items-center gap-2 px-6 py-2.5 rounded-xl bg-[#0E4D6E] text-white text-xs sm:text-sm font-semibold hover:bg-[#0A3850] shadow-xs transition-colors"
              >
                <Calendar size={14} />
                <span>Consult Implant Specialist</span>
              </button>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
