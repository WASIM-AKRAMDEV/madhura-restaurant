import { useState } from 'react';
import { motion } from 'framer-motion';
import SectionWrapper from '../components/SectionWrapper';
import Ornament from '../components/Ornament';

const initialForm = { name: '', email: '', message: '' };

export default function Contact() {
  const [form, setForm] = useState(initialForm);
  const [errors, setErrors] = useState({});
  const [sent, setSent] = useState(false);

  const validate = () => {
    const errs = {};
    if (!form.name.trim()) errs.name = 'Name is required';
    if (!form.email.trim()) errs.email = 'Email is required';
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) errs.email = 'Enter a valid email';
    if (!form.message.trim()) errs.message = 'Message is required';
    return errs;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const errs = validate();
    if (Object.keys(errs).length) { setErrors(errs); return; }
    setSent(true);
    setForm(initialForm);
    setErrors({});
  };

  const handleChange = (e) => {
    setForm(prev => ({ ...prev, [e.target.name]: e.target.value }));
    setErrors(prev => ({ ...prev, [e.target.name]: '' }));
  };

  return (
    <div className="min-h-screen py-20 px-6">
      <div className="max-w-7xl mx-auto">
        <SectionWrapper>
          <p className="font-sans text-gold-500 tracking-widest uppercase text-xs text-center mb-2">We'd Love to Hear From You</p>
          <h1 className="section-title">Contact & Location</h1>
          <Ornament className="mb-16" />
        </SectionWrapper>

        <div className="grid md:grid-cols-2 gap-12 mb-16">
          {/* FORM */}
          <SectionWrapper delay={0.1}>
            <div className="card-luxury p-8">
              <h2 className="font-display text-3xl text-gold-300 mb-8">Get in Touch</h2>

              {sent && (
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="bg-green-900/40 border border-green-600/40 text-green-300 rounded-lg p-4 mb-6 font-sans text-sm"
                >
                  ✓ Message sent! We'll get back to you within 24 hours.
                </motion.div>
              )}

              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label className="block font-sans text-xs text-gold-400 tracking-widest uppercase mb-2">Name</label>
                  <input
                    name="name"
                    value={form.name}
                    onChange={handleChange}
                    placeholder="Your full name"
                    className={`input-luxury ${errors.name ? 'border-red-500' : ''}`}
                  />
                  {errors.name && <p className="text-red-400 text-xs mt-1 font-sans">{errors.name}</p>}
                </div>
                <div>
                  <label className="block font-sans text-xs text-gold-400 tracking-widest uppercase mb-2">Email</label>
                  <input
                    name="email"
                    type="email"
                    value={form.email}
                    onChange={handleChange}
                    placeholder="your@email.com"
                    className={`input-luxury ${errors.email ? 'border-red-500' : ''}`}
                  />
                  {errors.email && <p className="text-red-400 text-xs mt-1 font-sans">{errors.name}</p>}
                </div>
                <div>
                  <label className="block font-sans text-xs text-gold-400 tracking-widest uppercase mb-2">Message</label>
                  <textarea
                    name="message"
                    value={form.message}
                    onChange={handleChange}
                    rows={5}
                    placeholder="How can we help you?"
                    className={`input-luxury resize-none ${errors.message ? 'border-red-500' : ''}`}
                  />
                  {errors.message && <p className="text-red-400 text-xs mt-1 font-sans">{errors.message}</p>}
                </div>
                <motion.button type="submit" className="btn-gold w-full" whileTap={{ scale: 0.97 }}>
                  Send Message
                </motion.button>
              </form>
            </div>
          </SectionWrapper>

          {/* INFO */}
          <SectionWrapper delay={0.2}>
            <div className="space-y-8">
              {[
                {
                  icon: '📍',
                  title: 'Address',
                  lines: ['123 Luxury Lane', 'Culinary City, CA 90210'],
                },
                {
                  icon: '📞',
                  title: 'Phone',
                  lines: ['(555) 123-4567'],
                },
                {
                  icon: '🕐',
                  title: 'Opening Hours',
                  lines: ['Mon–Fri: 5:00 PM – 11:00 PM', 'Sat–Sun: 12:00 PM – 11:00 PM'],
                },
                {
                  icon: '✉️',
                  title: 'Email',
                  lines: ['reservations@madhura.com', 'info@madhura.com'],
                },
              ].map((info, i) => (
                <motion.div
                  key={info.title}
                  className="flex gap-5"
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.1 }}
                  viewport={{ once: true }}
                >
                  <div className="w-12 h-12 rounded-full border border-gold-600/40 flex items-center justify-center text-xl flex-shrink-0">
                    {info.icon}
                  </div>
                  <div>
                    <h3 className="font-display text-xl text-gold-400 mb-1">{info.title}</h3>
                    {info.lines.map(l => (
                      <p key={l} className="font-body text-forest-300 text-base">{l}</p>
                    ))}
                  </div>
                </motion.div>
              ))}
            </div>
          </SectionWrapper>
        </div>

        {/* MAP */}
        <SectionWrapper delay={0.3}>
          <div className="rounded-xl overflow-hidden border border-gold-700/30 shadow-card" style={{ height: 360 }}>
            <iframe
              title="Madhura Restaurant Location"
              width="100%"
              height="100%"
              style={{ border: 0, filter: 'invert(90%) hue-rotate(180deg) saturate(0.4) brightness(0.7)' }}
              loading="lazy"
              src="https://www.openstreetmap.org/export/embed.html?bbox=-118.2840%2C34.0470%2C-118.2640%2C34.0570&layer=mapnik&marker=34.0522,-118.2737"
            />
          </div>
        </SectionWrapper>
      </div>
    </div>
  );
}
