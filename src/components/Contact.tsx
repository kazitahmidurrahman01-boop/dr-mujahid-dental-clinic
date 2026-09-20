import { motion } from 'framer-motion';
import { MapPin, Phone, MessageCircle, Mail, Clock, ExternalLink, ShieldCheck } from 'lucide-react';

function FacebookIcon({ size = 20, className = '' }: { size?: number; className?: string }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" className={className}>
      <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
    </svg>
  );
}

export default function Contact() {
  const mapEmbedUrl = "https://maps.google.com/maps?q=168/A+Road+12+Tilpapara+Khilgaon+Dhaka+1219&t=&z=16&ie=UTF8&iwloc=&output=embed";

  return (
    <section id="contact" className="py-20 lg:py-28 bg-slate-50/70 relative">
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
            <span>Visit Us in Khilgaon</span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="font-headline font-bold text-3xl sm:text-4xl lg:text-5xl text-slate-900 tracking-tight"
          >
            Clinic Location &amp; <span className="text-[#0E4D6E]">Contact</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-slate-600 max-w-xl mx-auto text-base sm:text-lg mt-3"
          >
            Centrally located in Tilpapara, Khilgaon with dedicated evening appointment slots.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-start">
          
          {/* Left Column — Contact Cards */}
          <motion.div
            initial={{ opacity: 0, x: -25 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-5 space-y-4"
          >
            {/* Address */}
            <div className="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-xs flex items-start gap-4">
              <div className="w-11 h-11 rounded-xl bg-blue-50 text-[#0E4D6E] flex items-center justify-center shrink-0">
                <MapPin size={20} />
              </div>
              <div>
                <h3 className="font-headline font-bold text-slate-900 text-base mb-1">
                  Clinic Address
                </h3>
                <p className="text-slate-600 text-sm leading-relaxed">
                  168/A (1st Floor), Road 12, Main Road,<br />
                  Tilpapara, Khilgaon, Dhaka 1219
                </p>
                <a
                  href="https://maps.google.com/?q=168/A+Road+12+Tilpapara+Khilgaon+Dhaka+1219"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1 text-[#0E4D6E] text-xs font-semibold mt-2 hover:underline"
                >
                  <span>Open Directions</span>
                  <ExternalLink size={12} />
                </a>
              </div>
            </div>

            {/* Direct Phone */}
            <div className="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-xs flex items-start gap-4">
              <div className="w-11 h-11 rounded-xl bg-blue-50 text-[#0E4D6E] flex items-center justify-center shrink-0">
                <Phone size={20} />
              </div>
              <div>
                <h3 className="font-headline font-bold text-slate-900 text-base mb-0.5">
                  Phone Consultation
                </h3>
                <a
                  href="tel:+8801745917009"
                  className="text-slate-700 font-semibold text-sm hover:text-[#0E4D6E] transition-colors"
                >
                  +880 1745-917009
                </a>
              </div>
            </div>

            {/* WhatsApp Booking */}
            <div className="bg-white p-5 rounded-2xl border border-emerald-100 shadow-xs flex items-start gap-4">
              <div className="w-11 h-11 rounded-xl bg-emerald-50 text-emerald-600 flex items-center justify-center shrink-0">
                <MessageCircle size={20} />
              </div>
              <div>
                <h3 className="font-headline font-bold text-slate-900 text-base mb-0.5">
                  Instant WhatsApp Booking
                </h3>
                <a
                  href="https://wa.me/8801745917009"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-emerald-600 font-semibold text-sm hover:underline"
                >
                  <span>+880 1745-917009</span>
                  <ExternalLink size={12} />
                </a>
              </div>
            </div>

            {/* Timings */}
            <div className="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-xs flex items-start gap-4">
              <div className="w-11 h-11 rounded-xl bg-blue-50 text-[#0E4D6E] flex items-center justify-center shrink-0">
                <Clock size={20} />
              </div>
              <div className="flex-1 text-xs sm:text-sm">
                <h3 className="font-headline font-bold text-slate-900 text-base mb-2">
                  Visiting Hours
                </h3>
                <div className="flex justify-between py-1 border-b border-slate-100">
                  <span className="text-slate-500">Saturday – Thursday</span>
                  <span className="font-semibold text-slate-800">5:00 PM – 10:00 PM</span>
                </div>
                <div className="flex justify-between py-1">
                  <span className="text-slate-500">Friday</span>
                  <span className="font-semibold text-rose-600">Closed (Emergency Only)</span>
                </div>
              </div>
            </div>

            {/* Social & Email */}
            <div className="flex gap-3">
              <a
                href="mailto:shammomujahid@gmail.com"
                className="flex-1 p-3.5 rounded-xl bg-white border border-slate-200/80 hover:bg-slate-50 flex items-center gap-2.5 text-xs text-slate-700 font-medium transition-colors"
              >
                <Mail size={16} className="text-[#0E4D6E]" />
                <span className="truncate">shammomujahid@gmail.com</span>
              </a>
              <a
                href="https://facebook.com/dr.mujahid.dental"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3.5 rounded-xl bg-white border border-slate-200/80 hover:bg-blue-50 text-blue-600 flex items-center gap-2 text-xs font-semibold transition-colors"
              >
                <FacebookIcon size={16} />
                <span>Facebook</span>
              </a>
            </div>
          </motion.div>

          {/* Right Column — Google Map Embed */}
          <motion.div
            initial={{ opacity: 0, x: 25 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-7 space-y-4"
          >
            <div className="bg-white p-3 rounded-3xl border border-blue-100 shadow-sm overflow-hidden">
              <div className="w-full h-[400px] sm:h-[460px] rounded-2xl overflow-hidden bg-slate-100">
                <iframe
                  src={mapEmbedUrl}
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Dr. Mujahid's Oro-Dental Clinic Location Map"
                />
              </div>
            </div>

            <div className="p-4 rounded-2xl bg-white border border-blue-100 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-slate-600">
              <div className="flex items-center gap-2">
                <MapPin size={16} className="text-[#0E4D6E]" />
                <span>168/A (1st Floor), Road 12, Main Road, Tilpapara, Khilgaon</span>
              </div>
              <a
                href="https://maps.google.com/?q=168/A+Road+12+Tilpapara+Khilgaon+Dhaka+1219"
                target="_blank"
                rel="noopener noreferrer"
                className="px-4 py-2 rounded-xl bg-[#0E4D6E] text-white font-semibold hover:bg-[#0A3850] transition-colors shrink-0"
              >
                Get Google Navigation
              </a>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
