import { useState } from 'react';
import { motion } from 'framer-motion';
import { CheckCircle2, MessageCircle, AlertCircle, Calendar, Clock, MapPin } from 'lucide-react';
import { doctors } from '../data/doctors';
import { treatmentCategories } from '../data/treatments';

const WHATSAPP_NUMBER = '8801745917009';

function buildWhatsAppMessage(data: Record<string, string>) {
  return encodeURIComponent(
    `Hello Dr. Mujahid's Oro-Dental Clinic,\n\nI would like to book an appointment.\n\n👤 Patient Name: ${data.name}\n📞 Phone: ${data.phone}\n👨‍⚕️ Specialist: ${data.doctor}\n🦷 Service Requested: ${data.treatment}\n📅 Preferred Date: ${data.date}\n⏰ Preferred Time: ${data.time}\n💬 Note: ${data.message || 'N/A'}\n\nPlease confirm availability for this slot.\n\nThank you!`
  );
}

export default function AppointmentBooking() {
  const [form, setForm] = useState({
    name: '',
    phone: '',
    doctor: '',
    treatment: '',
    date: '',
    time: '',
    message: '',
  });
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [submitted, setSubmitted] = useState(false);

  const validate = () => {
    const e: Record<string, string> = {};
    if (!form.name.trim()) e.name = 'Please enter your full name.';
    if (!form.phone.trim()) e.phone = 'Please enter your phone number.';
    if (!form.doctor) e.doctor = 'Please select a specialist or doctor.';
    if (!form.treatment) e.treatment = 'Please select a treatment service.';
    if (!form.date) e.date = 'Please select a preferred date.';
    if (!form.time) e.time = 'Please select a preferred time.';
    return e;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const errs = validate();
    if (Object.keys(errs).length > 0) {
      setErrors(errs);
      return;
    }
    setErrors({});
    const msg = buildWhatsAppMessage(form);
    window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${msg}`, '_blank');
    setSubmitted(true);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setForm(prev => ({ ...prev, [e.target.name]: e.target.value }));
    if (errors[e.target.name]) {
      setErrors(prev => ({ ...prev, [e.target.name]: '' }));
    }
  };

  const inputBase = 'w-full px-4 py-3 rounded-xl border font-body text-sm bg-slate-50 text-slate-800 placeholder-slate-400 focus:bg-white focus:outline-none transition-all duration-200';
  const inputNormal = 'border-slate-200 focus:border-[#0E4D6E] focus:ring-2 focus:ring-[#0E4D6E]/15';
  const inputError = 'border-rose-300 focus:border-rose-500 focus:ring-2 focus:ring-rose-200';

  const minDate = new Date().toISOString().split('T')[0];

  return (
    <section
      id="booking"
      className="py-20 lg:py-28 bg-white relative overflow-hidden"
    >
      {/* Soft background accents */}
      <div className="absolute top-1/4 right-0 w-96 h-96 bg-blue-50/70 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-teal-50/50 rounded-full blur-3xl pointer-events-none" />

      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-14 items-center">

          {/* Left Column — Info & Practice Benefits */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-5 space-y-6"
          >
            <div>
              <span className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-50 border border-blue-200/80 text-[#0E4D6E] text-xs font-semibold uppercase tracking-wider mb-4">
                <Calendar className="w-3.5 h-3.5 text-[#0E4D6E]" />
                <span>Online Appointment Request</span>
              </span>
              <h2 className="font-headline font-bold text-3xl sm:text-4xl lg:text-5xl text-slate-900 leading-tight tracking-tight">
                Schedule Your Visit with Our{' '}
                <span className="text-[#0E4D6E]">Specialists</span>
              </h2>
              <p className="text-slate-600 text-base sm:text-lg leading-relaxed mt-3">
                Complete your details to send a structured instant reservation request directly to our clinic desk on WhatsApp.
              </p>
            </div>

            {/* Clinic Info Cards */}
            <div className="space-y-3 pt-2">
              <a
                href={`https://wa.me/${WHATSAPP_NUMBER}`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 p-4 rounded-2xl bg-emerald-50/70 border border-emerald-100 hover:bg-emerald-50 transition-colors group"
              >
                <div className="w-11 h-11 rounded-xl bg-emerald-500 text-white flex items-center justify-center shrink-0 shadow-xs">
                  <MessageCircle size={20} />
                </div>
                <div>
                  <p className="text-emerald-800 text-xs font-bold uppercase tracking-wide">Direct WhatsApp Desk</p>
                  <p className="text-slate-800 font-semibold text-sm">+880 1745-917009</p>
                </div>
              </a>

              <div className="p-4 rounded-2xl bg-blue-50/60 border border-blue-100/80 flex items-start gap-4">
                <div className="w-11 h-11 rounded-xl bg-[#0E4D6E] text-white flex items-center justify-center shrink-0 shadow-xs">
                  <Clock size={20} />
                </div>
                <div className="flex-1 text-xs sm:text-sm">
                  <p className="text-[#0E4D6E] text-xs font-bold uppercase tracking-wide mb-1">Evening Visiting Hours</p>
                  <div className="flex justify-between text-slate-600">
                    <span>Sat – Thu:</span>
                    <span className="font-semibold text-slate-800">5:00 PM – 10:00 PM</span>
                  </div>
                  <div className="flex justify-between text-slate-600 mt-0.5">
                    <span>Friday:</span>
                    <span className="font-semibold text-rose-600">Closed (By Special Appt)</span>
                  </div>
                </div>
              </div>

              <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200/70 flex items-start gap-3 text-xs text-slate-600">
                <MapPin size={18} className="text-[#0E4D6E] shrink-0 mt-0.5" />
                <span>168/A (1st Floor), Road 12, Main Road, Tilpapara, Khilgaon, Dhaka</span>
              </div>
            </div>
          </motion.div>

          {/* Right Column — Interactive WhatsApp Booking Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-7"
          >
            {submitted ? (
              <motion.div
                initial={{ scale: 0.95, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                className="bg-slate-50 border border-blue-100 rounded-3xl p-8 sm:p-10 text-center shadow-sm"
              >
                <div className="w-16 h-16 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto mb-4">
                  <CheckCircle2 size={36} />
                </div>
                <h3 className="font-headline font-bold text-slate-900 text-2xl mb-2">
                  WhatsApp Conversation Opened!
                </h3>
                <p className="text-slate-600 text-sm max-w-md mx-auto mb-6">
                  Your appointment booking message has been drafted. Please tap 'Send' in WhatsApp to complete your confirmation.
                </p>
                <button
                  onClick={() => {
                    setSubmitted(false);
                    setForm({ name: '', phone: '', doctor: '', treatment: '', date: '', time: '', message: '' });
                  }}
                  className="px-6 py-3 rounded-xl bg-[#0E4D6E] text-white font-semibold text-sm hover:bg-[#0A3850] transition-colors"
                >
                  Book Another Appointment
                </button>
              </motion.div>
            ) : (
              <form
                onSubmit={handleSubmit}
                noValidate
                className="bg-white rounded-3xl p-6 sm:p-9 border border-blue-100/90 shadow-[0_15px_40px_rgba(14,77,110,0.06)] space-y-4"
              >
                <div className="border-b border-slate-100 pb-3 mb-1">
                  <h3 className="font-headline font-bold text-slate-900 text-xl sm:text-2xl">
                    Appointment Details
                  </h3>
                  <p className="text-slate-500 text-xs mt-0.5">
                    Select your preferred doctor and service category below.
                  </p>
                </div>

                {/* Name & Phone */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-semibold text-slate-700 mb-1">Full Name *</label>
                    <input
                      name="name"
                      type="text"
                      placeholder="e.g. Mr. / Ms. Patient"
                      value={form.name}
                      onChange={handleChange}
                      className={`${inputBase} ${errors.name ? inputError : inputNormal}`}
                    />
                    {errors.name && (
                      <p className="text-rose-500 text-xs mt-1 flex items-center gap-1">
                        <AlertCircle size={11} /> {errors.name}
                      </p>
                    )}
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-slate-700 mb-1">Contact Phone Number *</label>
                    <input
                      name="phone"
                      type="tel"
                      placeholder="e.g. 01712-XXXXXX"
                      value={form.phone}
                      onChange={handleChange}
                      className={`${inputBase} ${errors.phone ? inputError : inputNormal}`}
                    />
                    {errors.phone && (
                      <p className="text-rose-500 text-xs mt-1 flex items-center gap-1">
                        <AlertCircle size={11} /> {errors.phone}
                      </p>
                    )}
                  </div>
                </div>

                {/* Doctor Selection */}
                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1">Select Doctor / Specialist *</label>
                  <select
                    name="doctor"
                    value={form.doctor}
                    onChange={handleChange}
                    className={`${inputBase} ${errors.doctor ? inputError : inputNormal}`}
                  >
                    <option value="">-- Choose Specialist --</option>
                    {doctors.filter(d => d.name !== 'Doctor Name — To Be Added').map(d => (
                      <option key={d.id} value={d.name}>
                        {d.name} ({d.specialization})
                      </option>
                    ))}
                    <option value="Any Available Specialist">Any Available Specialist</option>
                  </select>
                  {errors.doctor && (
                    <p className="text-rose-500 text-xs mt-1 flex items-center gap-1">
                      <AlertCircle size={11} /> {errors.doctor}
                    </p>
                  )}
                </div>

                {/* Treatment / Service Category */}
                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1">Select Treatment Service *</label>
                  <select
                    name="treatment"
                    value={form.treatment}
                    onChange={handleChange}
                    className={`${inputBase} ${errors.treatment ? inputError : inputNormal}`}
                  >
                    <option value="">-- Choose Treatment --</option>
                    {treatmentCategories.map(cat => (
                      <optgroup key={cat.id} label={cat.name}>
                        {cat.treatments.map(t => (
                          <option key={t.name} value={t.name}>
                            {t.name}
                          </option>
                        ))}
                      </optgroup>
                    ))}
                  </select>
                  {errors.treatment && (
                    <p className="text-rose-500 text-xs mt-1 flex items-center gap-1">
                      <AlertCircle size={11} /> {errors.treatment}
                    </p>
                  )}
                </div>

                {/* Date & Time */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-semibold text-slate-700 mb-1">Preferred Date *</label>
                    <input
                      name="date"
                      type="date"
                      min={minDate}
                      value={form.date}
                      onChange={handleChange}
                      className={`${inputBase} ${errors.date ? inputError : inputNormal}`}
                    />
                    {errors.date && (
                      <p className="text-rose-500 text-xs mt-1 flex items-center gap-1">
                        <AlertCircle size={11} /> {errors.date}
                      </p>
                    )}
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-slate-700 mb-1">Preferred Time (5 PM - 10 PM) *</label>
                    <input
                      name="time"
                      type="time"
                      min="17:00"
                      max="22:00"
                      value={form.time}
                      onChange={handleChange}
                      className={`${inputBase} ${errors.time ? inputError : inputNormal}`}
                    />
                    {errors.time && (
                      <p className="text-rose-500 text-xs mt-1 flex items-center gap-1">
                        <AlertCircle size={11} /> {errors.time}
                      </p>
                    )}
                  </div>
                </div>

                {/* Note / Symptoms */}
                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1">Brief Symptoms or Query (Optional)</label>
                  <textarea
                    name="message"
                    placeholder="E.g., consultation for braces, severe toothache, routine checkup..."
                    value={form.message}
                    onChange={handleChange}
                    rows={2}
                    className={`${inputBase} ${inputNormal} resize-none`}
                  />
                </div>

                {/* Submit to WhatsApp */}
                <div className="pt-2">
                  <button
                    type="submit"
                    className="w-full flex items-center justify-center gap-2.5 py-3.5 px-6 rounded-xl font-body font-semibold text-white bg-[#25D366] hover:bg-[#20bd5a] shadow-sm hover:shadow-md active:scale-98 transition-all duration-200"
                  >
                    <MessageCircle size={18} />
                    <span>Proceed to Book via WhatsApp</span>
                  </button>
                  <p className="text-slate-400 text-[11px] text-center mt-2">
                    Direct integration with Dr. Mujahid's official clinic WhatsApp: +880 1745-917009
                  </p>
                </div>
              </form>
            )}
          </motion.div>

        </div>
      </div>
    </section>
  );
}
