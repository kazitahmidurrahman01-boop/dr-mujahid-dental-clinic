import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ZoomIn, X, Camera } from 'lucide-react';

const CATEGORIES = ['All', 'Clinic Operatory', 'Clinical Cases', 'Specialists'];

interface GalleryItem {
  id: number;
  category: string;
  label: string;
  imageUrl: string;
  description: string;
}

const GALLERY_ITEMS: GalleryItem[] = [
  {
    id: 1,
    category: 'Clinic Operatory',
    label: 'Modern Dental Treatment Operatory',
    imageUrl: '/images/clinic-interior.jpg',
    description: 'Fully equipped clinical operatory with dental chair, LED examination lighting, and rotary endodontic stations.',
  },
  {
    id: 2,
    category: 'Clinical Cases',
    label: 'Orthodontic Teeth Realignment Result',
    imageUrl: '/images/cases/braces-after.webp',
    description: 'Finished fixed orthodontic treatment achieving ideal arch form, incisor alignment, and balanced occlusion.',
  },
  {
    id: 3,
    category: 'Specialists',
    label: 'Orthodontic Smile Evaluation',
    imageUrl: '/images/hero-orthodontic.webp',
    description: 'One-on-one diagnostic consultation, digital imaging assessment, and treatment planning session.',
  },
  {
    id: 4,
    category: 'Clinical Cases',
    label: 'Aesthetic Enamel Whitening Result',
    imageUrl: '/images/cases/whitening-after.webp',
    description: 'Brightened enamel shade achieved following safe, in-chair clinical dental bleaching.',
  },
  {
    id: 5,
    category: 'Specialists',
    label: 'Dr. Mostofa Mujahid Al Hussain',
    imageUrl: '/images/doctor.jpeg',
    description: 'Consultant Orthodontist (JIMCH) & Oro-Dental Surgeon directing specialist orthodontic and implant care.',
  },
  {
    id: 6,
    category: 'Clinic Operatory',
    label: 'Infection Control & Sterilization Suite',
    imageUrl: '/images/clinic-interior.jpg',
    description: 'Sterile instruments sealed in medical pouches following high-pressure autoclave sterilization.',
  },
];

export default function Gallery() {
  const [activeCategory, setActiveCategory] = useState('All');
  const [lightboxOpen, setLightboxOpen] = useState<number | null>(null);

  const filtered = activeCategory === 'All'
    ? GALLERY_ITEMS
    : GALLERY_ITEMS.filter(item => item.category === activeCategory);

  return (
    <section id="gallery" className="py-20 lg:py-28 bg-white relative overflow-hidden">
      <div className="container mx-auto px-4 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-50 border border-blue-200/80 text-[#0E4D6E] text-xs font-semibold uppercase tracking-wider mb-4"
          >
            <Camera className="w-3.5 h-3.5 text-[#0E4D6E]" />
            <span>Clinic Insights</span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="font-headline font-bold text-3xl sm:text-4xl lg:text-5xl text-slate-900 tracking-tight"
          >
            Clinic Atmosphere &amp; <span className="text-[#0E4D6E]">Gallery</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-slate-600 max-w-xl mx-auto text-base sm:text-lg mt-3"
          >
            Take a visual tour through our sanitized operatory rooms, specialist consultations, and documented clinical outcomes.
          </motion.p>
        </div>

        {/* Category Filter Pills */}
        <div className="flex flex-wrap gap-2 justify-center mb-10">
          {CATEGORIES.map(cat => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-4 py-2 rounded-xl font-body text-xs sm:text-sm font-semibold transition-all duration-200 border ${
                activeCategory === cat
                  ? 'bg-[#0E4D6E] text-white border-[#0E4D6E] shadow-sm'
                  : 'bg-slate-50 text-slate-700 border-slate-200 hover:bg-slate-100 hover:text-[#0E4D6E]'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Gallery Grid */}
        <motion.div layout className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          <AnimatePresence>
            {filtered.map((item, i) => (
              <motion.div
                key={item.id}
                layout
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ delay: i * 0.04 }}
                onClick={() => setLightboxOpen(item.id)}
                className="group relative rounded-3xl overflow-hidden cursor-pointer aspect-[4/3] bg-slate-100 border border-slate-200/80 shadow-xs hover:shadow-lg transition-all duration-300"
              >
                <img
                  src={item.imageUrl}
                  alt={item.label}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 ease-out"
                  loading="lazy"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-slate-950/20 to-transparent opacity-60 group-hover:opacity-40 transition-opacity" />

                {/* Hover zoom indicator */}
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-200">
                  <div className="w-12 h-12 rounded-full bg-white/90 text-[#0E4D6E] flex items-center justify-center shadow-lg backdrop-blur-xs transform scale-75 group-hover:scale-100 transition-transform">
                    <ZoomIn size={22} />
                  </div>
                </div>

                {/* Card footer details */}
                <div className="absolute bottom-3.5 left-3.5 right-3.5 flex items-center justify-between pointer-events-none">
                  <span className="px-2.5 py-1 rounded-lg bg-white/90 text-slate-800 text-[11px] font-bold backdrop-blur-xs border border-white/40 shadow-xs">
                    {item.label}
                  </span>
                  <span className="px-2 py-0.5 rounded-md bg-[#0E4D6E]/90 text-white text-[10px] font-semibold">
                    {item.category}
                  </span>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>

      {/* Lightbox Dialog */}
      <AnimatePresence>
        {lightboxOpen !== null && (() => {
          const item = GALLERY_ITEMS.find(i => i.id === lightboxOpen);
          if (!item) return null;
          return (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-[200] flex items-center justify-center p-4 md:p-8 bg-slate-950/80 backdrop-blur-sm"
              onClick={() => setLightboxOpen(null)}
            >
              <motion.div
                initial={{ scale: 0.95 }}
                animate={{ scale: 1 }}
                exit={{ scale: 0.95 }}
                className="relative rounded-3xl overflow-hidden max-w-4xl w-full max-h-[90vh] flex flex-col items-center justify-center border border-white/20 shadow-2xl bg-white"
                onClick={e => e.stopPropagation()}
              >
                <div className="relative w-full bg-slate-950 flex items-center justify-center max-h-[70vh] overflow-hidden">
                  <img
                    src={item.imageUrl}
                    alt={item.label}
                    className="w-full h-auto max-h-[70vh] object-contain"
                  />
                  <button
                    onClick={() => setLightboxOpen(null)}
                    className="absolute top-4 right-4 w-9 h-9 rounded-full bg-slate-900/80 text-white hover:bg-slate-800 flex items-center justify-center transition-colors"
                    aria-label="Close image"
                  >
                    <X size={18} />
                  </button>
                </div>

                <div className="w-full px-6 py-4 bg-white border-t border-slate-100 flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                  <div>
                    <span className="text-[11px] font-bold text-[#0E4D6E] uppercase tracking-wider">
                      {item.category}
                    </span>
                    <h3 className="font-headline font-bold text-slate-900 text-lg sm:text-xl">
                      {item.label}
                    </h3>
                    <p className="text-slate-500 text-xs sm:text-sm mt-0.5">
                      {item.description}
                    </p>
                  </div>
                  <button
                    onClick={() => {
                      setLightboxOpen(null);
                      document.getElementById('booking')?.scrollIntoView({ behavior: 'smooth' });
                    }}
                    className="shrink-0 px-4 py-2 rounded-xl bg-[#0E4D6E] text-white text-xs sm:text-sm font-semibold hover:bg-[#0A3850] transition-colors"
                  >
                    Book Consultation
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
