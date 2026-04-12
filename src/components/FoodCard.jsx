import { motion } from 'framer-motion';
import { useCart } from '../context/CartContext';
import { useState } from 'react';

export default function FoodCard({ item }) {
  const { addItem } = useCart();
  const [added, setAdded] = useState(false);

  const handleAdd = () => {
    addItem(item);
    setAdded(true);
    setTimeout(() => setAdded(false), 1500);
  };

  return (
    <motion.div
      className="card-luxury group flex flex-col"
      whileHover={{ y: -4, boxShadow: '0 16px 48px rgba(0,0,0,0.5)' }}
      transition={{ duration: 0.3 }}
    >
      <div className="relative overflow-hidden h-52">
        <img
          src={item.image}
          alt={item.name}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-forest-950/80 to-transparent" />
        <div className="absolute top-3 right-3 bg-gold-500 text-forest-950 font-sans font-bold text-sm px-2 py-0.5 rounded">
          ${item.price}
        </div>
      </div>
      <div className="p-5 flex flex-col flex-1">
        <h3 className="font-display text-xl text-gold-300 mb-2 group-hover:text-gold-400 transition-colors">{item.name}</h3>
        <p className="font-body text-forest-300 text-sm flex-1 leading-relaxed mb-4">{item.description}</p>
        <motion.button
          onClick={handleAdd}
          className={`w-full flex items-center justify-center gap-2 py-3 rounded font-sans font-semibold text-sm tracking-wider uppercase transition-all duration-300 ${added ? 'bg-green-600 text-white' : 'bg-gold-500 text-forest-950 hover:bg-gold-400'}`}
          whileTap={{ scale: 0.97 }}
        >
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
          </svg>
          {added ? 'Added!' : 'Add to Cart'}
        </motion.button>
      </div>
    </motion.div>
  );
}
