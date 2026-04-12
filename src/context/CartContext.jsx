import { createContext, useContext, useReducer, useEffect } from 'react';

const CartContext = createContext(null);

const cartReducer = (state, action) => {
  switch (action.type) {
    case 'ADD_ITEM': {
      const existing = state.find(i => i.id === action.item.id);
      if (existing) {
        return state.map(i => i.id === action.item.id ? { ...i, quantity: i.quantity + 1 } : i);
      }
      return [...state, { ...action.item, quantity: 1 }];
    }
    case 'REMOVE_ITEM':
      return state.filter(i => i.id !== action.id);
    case 'UPDATE_QTY': {
      if (action.qty <= 0) return state.filter(i => i.id !== action.id);
      return state.map(i => i.id === action.id ? { ...i, quantity: action.qty } : i);
    }
    case 'CLEAR':
      return [];
    case 'LOAD':
      return action.items;
    default:
      return state;
  }
};

export function CartProvider({ children }) {
  const [cart, dispatch] = useReducer(cartReducer, [], () => {
    try {
      const saved = localStorage.getItem('madhura_cart');
      return saved ? JSON.parse(saved) : [];
    } catch { return []; }
  });

  useEffect(() => {
    localStorage.setItem('madhura_cart', JSON.stringify(cart));
  }, [cart]);

  const addItem = (item) => dispatch({ type: 'ADD_ITEM', item });
  const removeItem = (id) => dispatch({ type: 'REMOVE_ITEM', id });
  const updateQty = (id, qty) => dispatch({ type: 'UPDATE_QTY', id, qty });
  const clearCart = () => dispatch({ type: 'CLEAR' });

  const subtotal = cart.reduce((sum, i) => sum + i.price * i.quantity, 0);
  const tax = subtotal * 0.1;
  const total = subtotal + tax;
  const itemCount = cart.reduce((sum, i) => sum + i.quantity, 0);

  return (
    <CartContext.Provider value={{ cart, addItem, removeItem, updateQty, clearCart, subtotal, tax, total, itemCount }}>
      {children}
    </CartContext.Provider>
  );
}

export const useCart = () => {
  const ctx = useContext(CartContext);
  if (!ctx) throw new Error('useCart must be inside CartProvider');
  return ctx;
};
