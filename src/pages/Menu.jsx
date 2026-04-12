import { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { menuItems, categories } from '../data/menuData';
import FoodCard from '../components/FoodCard';
import SectionWrapper from '../components/SectionWrapper';
import Ornament from '../components/Ornament';

export default function Menu() {
  const [searchParams] = useSearchParams();
  const initCat = searchParams.get('cat') || 'starters';
  const [activeTab, setActiveTab] = useState(initCat);

  useEffect(() => {
    const cat = searchParams.get('cat');
    if (cat) setActiveTab(cat);
  }, [searchParams]);

  const filtered = menuItems.filter(i => i.category === activeTab);

  return (
    <div className="min-h-screen py-20 px-6">
      <div className="max-w-7xl mx-auto">
        <SectionWrapper>
          <p className="font-sans text-gold-500 tracking-widest uppercase text-xs text-center mb-2">Curated for Excellence</p>
          <h1 className="section-title">Gourmet Menu Selection</h1>
          <Ornament className="mb-12" />

          {/* Category Tabs */}
          <div className="flex flex-wrap justify-center gap-3 mb-14">
            {categories.map(cat => (
              <button
                key={cat.id}
                onClick={() => setActiveTab(cat.id)}
                className={`font-sans text-sm tracking-widest uppercase px-8 py-3 rounded-full border transition-all duration-300 ${
                  activeTab === cat.id
                    ? 'bg-gold-500 text-forest-950 border-gold-500 font-semibold shadow-gold'
                    : 'border-gold-700/40 text-gold-400 hover:border-gold-500 hover:text-gold-300'
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>
        </SectionWrapper>

        {/* Menu Grid */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.4 }}
            className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6"
          >
            {filtered.map((item, i) => (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.08 }}
              >
                <FoodCard item={item} />
              </motion.div>
            ))}
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  );
}
