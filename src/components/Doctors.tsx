import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { doctors } from '../data/doctors';
import { Award, Building2, Phone, User, Calendar, ShieldCheck } from 'lucide-react';

export default function Doctors() {
  const [expanded, setExpanded] = useState<number | null>(null);

  const scrollToBooking = () => {
    document.getElementById('booking')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="doctors" className="py-20 lg:py-28 bg-slate-50/70 relative">
      <div className="container mx-auto px-4 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-50 border border-blue-200/80 text-[#0E4D6E] text-xs font-semibold uppercase tracking-wider mb-4"
          >
            <ShieldCheck className="w-3.5 h-3.5 text-[#0E4D6E]" />
            <span>Clinical Leadership</span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="font-headline font-bold text-3xl sm:text-4xl lg:text-5xl text-slate-900 tracking-tight"
          >
            Meet Our <span className="text-[#0E4D6E]">Dental Specialists</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-slate-600 max-w-2xl mx-auto text-base sm:text-lg mt-3"
          >
            Qualified, BMDC-registered dental surgeons and post-graduate specialists providing evidence-based oral healthcare.
          </motion.p>
        </div>

        {/* Doctor Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {doctors.map((doctor, i) => (
            <motion.div
              key={doctor.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.5 }}
              className="bg-white rounded-3xl overflow-hidden border border-slate-200/80 shadow-xs hover:shadow-md transition-all duration-300 flex flex-col justify-between"
            >
              {/* Photo Area */}
              <div className="relative w-full h-72 bg-gradient-to-tr from-slate-100 to-blue-50 overflow-hidden flex items-center justify-center">
                {doctor.photoUrl ? (
                  <img
                    src={doctor.photoUrl}
                    alt={doctor.name}
                    className="w-full h-full object-cover object-top hover:scale-103 transition-transform duration-500"
                  />
                ) : (
                  <div className="flex flex-col items-center justify-center p-6 text-center">
                    <div className="w-20 h-20 rounded-full bg-blue-100/70 text-[#0E4D6E] flex items-center justify-center mb-3">
                      <User size={36} />
                    </div>
                    <span className="text-xs font-semibold uppercase tracking-wider text-slate-400">
                      Profile Being Updated
                    </span>
                  </div>
                )}

                {/* BMDC Badge */}
                {doctor.bmdc !== 'To Be Added' && (
                  <div className="absolute top-4 right-4 bg-white/95 backdrop-blur-md px-3 py-1 rounded-full text-[11px] font-bold text-[#0E4D6E] shadow-sm border border-blue-100">
                    BMDC #{doctor.bmdc}
                  </div>
                )}
              </div>

              {/* Doctor Details */}
              <div className="p-6 flex-1 flex flex-col justify-between">
                <div>
                  <h3 className="font-headline font-bold text-slate-900 text-xl leading-snug mb-1">
                    {doctor.name}
                  </h3>
                  <p className="text-[#0E4D6E] font-semibold text-xs sm:text-sm mb-3">
                    {doctor.specialization}
                  </p>

                  {/* Qualifications Pills */}
                  <div className="flex flex-wrap gap-1.5 mb-4">
                    {doctor.qualifications.map((q, qi) => (
                      <span
                        key={qi}
                        className="px-2.5 py-1 rounded-lg text-xs font-medium text-slate-700 bg-slate-100 border border-slate-200/70"
                      >
                        {q}
                      </span>
                    ))}
                  </div>

                  {/* Hospital Affiliation */}
                  {doctor.designation !== 'To Be Added' && (
                    <div className="space-y-1.5 mb-4 text-xs text-slate-600">
                      <div className="flex items-center gap-2">
                        <Award size={13} className="text-[#0E4D6E] shrink-0" />
                        <span><strong>Designation:</strong> {doctor.designation}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Building2 size={13} className="text-[#0E4D6E] shrink-0" />
                        <span>{doctor.hospital}</span>
                      </div>
                    </div>
                  )}

                  {/* Expandable Bio */}
                  <AnimatePresence>
                    {expanded === doctor.id && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.25 }}
                        className="overflow-hidden"
                      >
                        <p className="text-slate-600 text-xs sm:text-sm leading-relaxed mb-4 bg-blue-50/50 p-3 rounded-xl border border-blue-100">
                          {doctor.bio}
                        </p>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>

                {/* Card Action Buttons */}
                <div className="pt-4 border-t border-slate-100 flex gap-2">
                  <button
                    onClick={() => setExpanded(expanded === doctor.id ? null : doctor.id)}
                    className="flex-1 py-2.5 px-3 rounded-xl text-xs font-semibold border border-slate-200 text-slate-700 hover:bg-slate-50 transition-colors"
                  >
                    {expanded === doctor.id ? 'Hide Details' : 'View Profile'}
                  </button>
                  <button
                    onClick={scrollToBooking}
                    className="inline-flex items-center gap-1.5 py-2.5 px-4 rounded-xl text-xs font-semibold bg-[#0E4D6E] text-white hover:bg-[#0A3850] transition-colors shadow-xs"
                  >
                    <Calendar size={13} />
                    <span>Book</span>
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Direct WhatsApp Consultation Strip */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-16 text-center"
        >
          <div className="inline-flex flex-col sm:flex-row items-center gap-4 bg-white p-4 sm:p-6 rounded-3xl border border-blue-100 shadow-sm max-w-xl mx-auto">
            <div className="text-left">
              <h4 className="font-headline font-bold text-slate-900 text-base">
                Have Clinical Inquiries or Emergency Concerns?
              </h4>
              <p className="text-xs text-slate-500 mt-0.5">
                Reach out directly to clinic staff for urgent consultations or scheduling.
              </p>
            </div>
            <a
              href="https://wa.me/8801745917009"
              target="_blank"
              rel="noopener noreferrer"
              className="shrink-0 inline-flex items-center gap-2 px-5 py-3 rounded-xl font-semibold text-sm bg-[#25D366] text-white hover:bg-[#20bd5a] transition-all shadow-sm"
            >
              <Phone size={15} />
              <span>WhatsApp Us</span>
            </a>
          </div>
        </motion.div>

      </div>
    </section>
  );
}
