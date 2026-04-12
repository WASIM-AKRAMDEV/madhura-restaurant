import { Routes, Route } from 'react-router-dom';
import MainLayout from '../layouts/MainLayout';
import Home from '../pages/Home';
import Menu from '../pages/Menu';
import About from '../pages/About';
import Contact from '../pages/Contact';
import Reservation from '../pages/Reservation';
import Cart from '../pages/Cart';

export default function AppRoutes() {
  return (
    <Routes>
      <Route element={<MainLayout />}>
        <Route path="/" element={<Home />} />
        <Route path="/menu" element={<Menu />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/reservation" element={<Reservation />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="*" element={<Home />} />
      </Route>
    </Routes>
  );
}
