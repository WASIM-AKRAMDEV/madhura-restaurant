import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { menuItems } from '../data/menuData';
import SectionWrapper from '../components/SectionWrapper';
import Ornament from '../components/Ornament';
import FoodCard from '../components/FoodCard';

const featured = menuItems.slice(0, 3);
const heroImage = "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=1600&q=85";

const categories = [
  { label: 'Appetizers', desc: 'Exquisite bites to awaken your palate and set the stage for greatness.', img: 'https://images.unsplash.com/photo-1551024601-bec78aea704b?w=400&q=80', to: '/menu?cat=starters' },
  { label: 'Main Courses', desc: 'Masterfully crafted entrees showcasing the finest seasonal ingredients.', img: 'https://images.unsplash.com/photo-1546833999-b9f581a1996d?w=400&q=80', to: '/menu?cat=mains' },
  { label: 'Desserts', desc: 'A sweet finale to your journey through flavor and artistry.', img: 'https://images.unsplash.com/photo-1578985545062-69928b1d9587?w=400&q=80', to: '/menu?cat=desserts' },
];

export default function Home() {
  return (
    <div>
      {/* HERO */}
      <section className="relative min-h-screen flex items-center">
        <div className="absolute inset-0">
          <img src={heroImage} alt="Hero" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-r from-forest-950/90 via-forest-950/60 to-transparent" />
          <div className="absolute inset-0 bg-gradient-to-t from-forest-950/80 via-transparent to-forest-950/30" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-6 pt-20">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.9, ease: 'easeOut' }}
            className="max-w-xl"
          >
            <p className="font-sans text-gold-500 tracking-widest uppercase text-sm mb-4">Experience the Extraordinary</p>
            <h1 className="font-display text-6xl md:text-7xl text-gold-100 leading-tight mb-6">
              Premium<br />
              <span className="gold-shimmer">Fine Dining</span>
            </h1>
            <p className="font-body text-forest-200 text-lg leading-relaxed mb-8">
              Where culinary artistry meets timeless elegance. Every dish tells a story of passion, tradition, and exceptional craft.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link to="/reservation" className="btn-gold">Reserve a Table</Link>
              <Link to="/menu" className="btn-outline">View Menu</Link>
            </div>
          </motion.div>
        </div>

        {/* Scroll indicator */}
        <motion.div
          className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
          animate={{ y: [0, 8, 0] }}
          transition={{ repeat: Infinity, duration: 2 }}
        >
          <span className="font-sans text-xs text-gold-600 tracking-widest uppercase">Scroll</span>
          <div className="w-px h-8 bg-gradient-to-b from-gold-600 to-transparent" />
        </motion.div>
      </section>

      {/* FEATURED DISHES */}
      <SectionWrapper className="py-24 px-6">
        <div className="max-w-7xl mx-auto">
          <p className="font-sans text-gold-500 tracking-widest uppercase text-xs text-center mb-2">Culinary Excellence</p>
          <h2 className="section-title">Featured Dishes</h2>
          <Ornament className="mb-14" />
          <div className="grid md:grid-cols-3 gap-8">
            {categories.map((cat, i) => (
              <motion.div
                key={cat.label}
                className="card-luxury group overflow-hidden cursor-pointer"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.15 }}
                viewport={{ once: true }}
                whileHover={{ y: -6 }}
              >
                <div className="relative h-52 overflow-hidden">
                  <img src={cat.img} alt={cat.label} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
                  <div className="absolute inset-0 bg-gradient-to-t from-forest-950 to-transparent opacity-80" />
                </div>
                <div className="p-6">
                  <h3 className="font-display text-2xl text-gold-300 mb-2">{cat.label}</h3>
                  <p className="font-body text-forest-300 text-sm leading-relaxed mb-4">{cat.desc}</p>
                  <Link to={cat.to} className="font-sans text-xs text-gold-500 tracking-widest uppercase hover:text-gold-300 transition-colors">Explore →</Link>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </SectionWrapper>

      {/* OUR STORY */}
      <SectionWrapper className="py-24 bg-forest-900/30">
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-16 items-center">
          <div>
            <p className="font-sans text-gold-500 tracking-widest uppercase text-xs mb-3">Our Story</p>
            <h2 className="font-display text-5xl text-gold-200 mb-6 leading-tight">Crafting Culinary<br />Journeys</h2>
            <p className="font-body text-forest-200 leading-relaxed mb-4 text-lg">
              Founded with a vision to redefine fine dining, MADHURA brings together the world's finest ingredients and time-honored techniques.
            </p>
            <p className="font-body text-forest-300 leading-relaxed mb-4">
              Our culinary team, led by award-winning chefs, crafts each dish as an expression of art — balancing heritage with innovation.
            </p>
            <p className="font-body text-forest-300 leading-relaxed mb-8">
              Every evening at MADHURA is a journey — from aperitifs through to petits fours, orchestrated with the care and precision of a master composer.
            </p>
            <Link to="/about" className="btn-outline">Read More</Link>
          </div>
          <div className="relative">
            <img
              src="https://images.unsplash.com/photo-1577219491135-ce391730fb2c?w=700&q=80"
              alt="Chef at work"
              className="rounded-xl object-cover w-full h-96 shadow-card border border-gold-700/20"
            />
            <div className="absolute -bottom-6 -left-6 bg-gold-500 text-forest-950 p-6 rounded-xl shadow-gold">
              <p className="font-display text-4xl font-bold">25+</p>
              <p className="font-sans text-xs uppercase tracking-widest">Years of Mastery</p>
            </div>
          </div>
        </div>
      </SectionWrapper>

      {/* TESTIMONIALS */}
      <SectionWrapper className="py-24 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="section-title mb-2">What Guests Say</h2>
          <Ornament className="mb-14" />
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { quote: "An unforgettable evening. The scallops were divine, and the service impeccable.", name: "Alexandra V." },
              { quote: "MADHURA has redefined what fine dining means to me. Every visit is a revelation.", name: "James H." },
              { quote: "The truffle gnocchi is worth crossing the world for. A masterpiece on a plate.", name: "Priya M." },
            ].map((t, i) => (
              <motion.div key={i} className="card-luxury p-6" whileHover={{ y: -4 }} initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ delay: i * 0.15 }} viewport={{ once: true }}>
                <p className="text-gold-500 text-2xl mb-3">"</p>
                <p className="font-body text-forest-200 italic leading-relaxed mb-4">{t.quote}</p>
                <p className="font-sans text-gold-400 text-sm tracking-widest">— {t.name}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </SectionWrapper>

      {/* CTA BANNER */}
      <SectionWrapper className="py-20 bg-gradient-to-r from-forest-900 via-forest-800 to-forest-900 border-y border-gold-700/20">
        <div className="max-w-2xl mx-auto text-center px-6">
          <Ornament className="mb-6" />
          <h2 className="font-display text-4xl text-gold-300 mb-4">Reserve Your Table Tonight</h2>
          <p className="font-body text-forest-300 mb-8 text-lg">Join us for an extraordinary dining experience. Limited seatings available.</p>
          <Link to="/reservation" className="btn-gold">Make a Reservation</Link>
        </div>
      </SectionWrapper>
    </div>
  );
}
