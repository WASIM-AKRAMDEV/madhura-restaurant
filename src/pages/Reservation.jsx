import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import SectionWrapper from '../components/SectionWrapper';
import Ornament from '../components/Ornament';

const initialForm = { name: '', date: '', time: '', guests: 1 };

const timeSlots = [
  '12:00 PM','12:30 PM','1:00 PM','1:30 PM','2:00 PM','2:30 PM',
  '5:00 PM','5:30 PM','6:00 PM','6:30 PM','7:00 PM','7:30 PM',
  '8:00 PM','8:30 PM','9:00 PM','9:30 PM','10:00 PM',
];

export default function Reservation() {
  const [form, setForm] = useState(initialForm);
  const [errors, setErrors] = useState({});
  const [confirmed, setConfirmed] = useState(false);

  const validate = () => {
    const errs = {};
    if (!form.name.trim()) errs.name = 'Full name is required';
    if (!form.date) errs.date = 'Please select a date';
    else {
      const selected = new Date(form.date);
      const today = new Date();
      today.setHours(0, 0, 0, 0);
      if (selected < today) errs.date = 'Please select a future date';
    }
    if (!form.time) errs.time = 'Please select a time';
    if (!form.guests || form.guests < 1) errs.guests = 'At least 1 guest required';
    if (form.guests > 20) errs.guests = 'Maximum 20 guests per reservation';
    return errs;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm(prev => ({ ...prev, [name]: name === 'guests' ? parseInt(value) || 1 : value }));
    setErrors(prev => ({ ...prev, [name]: '' }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const errs = validate();
    if (Object.keys(errs).length) { setErrors(errs); return; }
    setConfirmed(true);
  };

  const handleReset = () => {
    setConfirmed(false);
    setForm(initialForm);
  };

  const today = new Date().toISOString().split('T')[0];

  return (
    <div className="min-h-screen py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <SectionWrapper>
          <p className="font-sans text-gold-500 tracking-widest uppercase text-xs text-center mb-2">Secure Your Evening</p>
          <h1 className="section-title">Table Reservation</h1>
          <Ornament className="mb-16" />
        </SectionWrapper>

        <div className="card-luxury overflow-hidden max-w-4xl mx-auto">
          <div className="grid md:grid-cols-2">
            {/* FORM SIDE */}
            <div className="p-10">
              <h2 className="font-display text-3xl text-gold-300 mb-2">Book Your Table</h2>
              <p className="font-body text-forest-400 text-sm mb-8">Experience Culinary Excellence.</p>

              <AnimatePresence mode="wait">
                {!confirmed ? (
                  <motion.form
                    key="form"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    onSubmit={handleSubmit}
                    className="space-y-5"
                  >
                    <div>
                      <label className="block font-sans text-xs text-gold-400 tracking-widest uppercase mb-2">Full Name</label>
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
                      <label className="block font-sans text-xs text-gold-400 tracking-widest uppercase mb-2">Date</label>
                      <input
                        name="date"
                        type="date"
                        min={today}
                        value={form.date}
                        onChange={handleChange}
                        className={`input-luxury ${errors.date ? 'border-red-500' : ''}`}
                        style={{ colorScheme: 'dark' }}
                      />
                      {errors.date && <p className="text-red-400 text-xs mt-1 font-sans">{errors.date}</p>}
                    </div>

                    <div>
                      <label className="block font-sans text-xs text-gold-400 tracking-widest uppercase mb-2">Time</label>
                      <select
                        name="time"
                        value={form.time}
                        onChange={handleChange}
                        className={`input-luxury ${errors.time ? 'border-red-500' : ''}`}
                      >
                        <option value="" disabled>Select a time</option>
                        {timeSlots.map(t => (
                          <option key={t} value={t} className="bg-forest-900">{t}</option>
                        ))}
                      </select>
                      {errors.time && <p className="text-red-400 text-xs mt-1 font-sans">{errors.time}</p>}
                    </div>

                    <div>
                      <label className="block font-sans text-xs text-gold-400 tracking-widest uppercase mb-2">Number of Guests</label>
                      <input
                        name="guests"
                        type="number"
                        min="1"
                        max="20"
                        value={form.guests}
                        onChange={handleChange}
                        className={`input-luxury ${errors.guests ? 'border-red-500' : ''}`}
                      />
                      {errors.guests && <p className="text-red-400 text-xs mt-1 font-sans">{errors.guests}</p>}
                    </div>

                    <motion.button type="submit" className="btn-gold w-full mt-2" whileTap={{ scale: 0.97 }}>
                      Reserve Now
                    </motion.button>
                  </motion.form>
                ) : (
                  <motion.div
                    key="confirmed"
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="text-center py-8"
                  >
                    <div className="w-16 h-16 bg-gold-500/20 border-2 border-gold-500 rounded-full flex items-center justify-center mx-auto mb-6">
                      <svg className="w-8 h-8 text-gold-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <h3 className="font-display text-2xl text-gold-300 mb-3">Reservation Confirmed!</h3>
                    <div className="card-luxury p-4 mb-6 text-left space-y-2">
                      <p className="font-sans text-sm text-gold-400"><span className="text-forest-400">Guest:</span> {form.name}</p>
                      <p className="font-sans text-sm text-gold-400"><span className="text-forest-400">Date:</span> {new Date(form.date + 'T12:00:00').toLocaleDateString('en-US', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' })}</p>
                      <p className="font-sans text-sm text-gold-400"><span className="text-forest-400">Time:</span> {form.time}</p>
                      <p className="font-sans text-sm text-gold-400"><span className="text-forest-400">Guests:</span> {form.guests}</p>
                    </div>
                    <p className="font-body text-forest-300 text-sm mb-6">We look forward to welcoming you. A confirmation email will be sent shortly.</p>
                    <button onClick={handleReset} className="btn-outline">Make Another Reservation</button>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {/* IMAGE SIDE */}
            <div className="relative hidden md:block">
              <img
                src="https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=800&q=80"
                alt="Restaurant interior"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-forest-800/60 to-transparent" />
              <div className="absolute bottom-8 left-8 right-8">
                <div className="bg-forest-950/80 backdrop-blur-sm border border-gold-700/30 rounded-lg p-4">
                  <p className="font-display text-gold-400 text-lg mb-1">Private Dining Available</p>
                  <p className="font-body text-forest-300 text-sm">For parties of 10+, contact us for exclusive private dining experiences.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
