import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { useCart } from '../context/CartContext';
import SectionWrapper from '../components/SectionWrapper';
import Ornament from '../components/Ornament';
import { useState } from 'react';

function CartItemRow({ item }) {
  const { removeItem, updateQty } = useCart();
  return (
    <motion.div
      layout
      initial={{ opacity: 0, x: -20 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: 20, height: 0 }}
      className="flex items-center gap-4 py-5 border-b border-forest-700/50"
    >
      <img src={item.image} alt={item.name} className="w-20 h-16 object-cover rounded-lg flex-shrink-0 border border-gold-700/20" />
      <div className="flex-1 min-w-0">
        <h3 className="font-display text-lg text-gold-300 truncate">{item.name}</h3>
        <p className="font-body text-forest-400 text-sm truncate">{item.description?.slice(0, 50)}...</p>
        <p className="font-sans text-gold-500 font-semibold mt-1">${item.price.toFixed(2)}</p>
      </div>
      <div className="flex items-center gap-2 flex-shrink-0">
        <button
          onClick={() => updateQty(item.id, item.quantity - 1)}
          className="w-7 h-7 rounded border border-gold-700/50 text-gold-400 hover:bg-gold-500 hover:text-forest-950 hover:border-gold-500 transition-all flex items-center justify-center font-sans text-lg leading-none"
        >−</button>
        <span className="w-6 text-center font-sans text-gold-200 text-sm">{item.quantity}</span>
        <button
          onClick={() => updateQty(item.id, item.quantity + 1)}
          className="w-7 h-7 rounded border border-gold-700/50 text-gold-400 hover:bg-gold-500 hover:text-forest-950 hover:border-gold-500 transition-all flex items-center justify-center font-sans text-lg leading-none"
        >+</button>
      </div>
      <div className="w-20 text-right flex-shrink-0">
        <p className="font-sans font-semibold text-gold-300">${(item.price * item.quantity).toFixed(2)}</p>
      </div>
      <button
        onClick={() => removeItem(item.id)}
        className="text-forest-500 hover:text-red-400 transition-colors flex-shrink-0 ml-2"
        title="Remove item"
      >
        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
        </svg>
      </button>
    </motion.div>
  );
}

export default function Cart() {
  const { cart, subtotal, tax, total, clearCart } = useCart();
  const [checkedOut, setCheckedOut] = useState(false);

  if (checkedOut) {
    return (
      <div className="min-h-screen flex items-center justify-center px-6">
        <motion.div initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} className="text-center max-w-md">
          <div className="w-20 h-20 bg-gold-500/20 border-2 border-gold-500 rounded-full flex items-center justify-center mx-auto mb-6">
            <svg className="w-10 h-10 text-gold-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
            </svg>
          </div>
          <h2 className="font-display text-4xl text-gold-300 mb-4">Order Placed!</h2>
          <p className="font-body text-forest-300 text-lg mb-8">Thank you for your order. Our team will prepare your exquisite selections with the utmost care.</p>
          <Link to="/menu" className="btn-gold">Continue Dining</Link>
        </motion.div>
      </div>
    );
  }

  return (
    <div className="min-h-screen py-20 px-6">
      <div className="max-w-7xl mx-auto">
        <SectionWrapper>
          <h1 className="section-title">Your Gourmet Cart</h1>
          <Ornament className="mb-16" />
        </SectionWrapper>

        {cart.length === 0 ? (
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="text-center py-24">
            <div className="text-6xl mb-6">🍽️</div>
            <h2 className="font-display text-3xl text-gold-300 mb-4">Your cart is empty</h2>
            <p className="font-body text-forest-400 mb-8 text-lg">Discover our exquisite menu selections and begin your culinary journey.</p>
            <Link to="/menu" className="btn-gold">Explore Menu</Link>
          </motion.div>
        ) : (
          <div className="grid lg:grid-cols-3 gap-8 items-start">
            {/* CART ITEMS */}
            <div className="lg:col-span-2">
              <div className="card-luxury p-6 md:p-8">
                <div className="flex justify-between items-center mb-2">
                  <h2 className="font-display text-2xl text-gold-300">Cart Items</h2>
                  <button onClick={clearCart} className="font-sans text-xs text-forest-500 hover:text-red-400 transition-colors uppercase tracking-widest">Clear All</button>
                </div>
                {/* Table header */}
                <div className="hidden md:grid grid-cols-4 gap-4 py-3 border-b border-forest-700/50 mb-1">
                  {['Item', 'Price', 'Quantity', 'Total'].map(h => (
                    <p key={h} className={`font-sans text-xs text-forest-400 uppercase tracking-widest ${h === 'Total' ? 'text-right' : ''}`}>{h}</p>
                  ))}
                </div>
                <AnimatePresence>
                  {cart.map(item => <CartItemRow key={item.id} item={item} />)}
                </AnimatePresence>
              </div>
            </div>

            {/* ORDER SUMMARY */}
            <div className="lg:col-span-1">
              <motion.div
                className="card-luxury p-6 sticky top-24"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
              >
                <div className="text-center mb-6">
                  <Ornament className="mb-4" />
                  <h2 className="font-display text-2xl text-gold-300">Order Summary</h2>
                  <Ornament className="mt-4" />
                </div>

                <div className="space-y-3 mb-6">
                  <div className="flex justify-between">
                    <span className="font-sans text-sm text-forest-400">Subtotal:</span>
                    <span className="font-sans text-sm text-gold-300">${subtotal.toFixed(2)}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="font-sans text-sm text-forest-400">Taxes (10%):</span>
                    <span className="font-sans text-sm text-gold-300">${tax.toFixed(2)}</span>
                  </div>
                  <div className="border-t border-gold-700/30 pt-3 flex justify-between">
                    <span className="font-display text-lg text-gold-400">Grand Total:</span>
                    <span className="font-display text-xl text-gold-400">${total.toFixed(2)}</span>
                  </div>
                </div>

                <motion.button
                  onClick={() => { setCheckedOut(true); clearCart(); }}
                  className="btn-gold w-full"
                  whileTap={{ scale: 0.97 }}
                >
                  Proceed to Checkout
                </motion.button>

                <Link to="/menu" className="block text-center font-sans text-xs text-forest-400 hover:text-gold-400 transition-colors mt-4 uppercase tracking-widest">
                  ← Continue Shopping
                </Link>
              </motion.div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
