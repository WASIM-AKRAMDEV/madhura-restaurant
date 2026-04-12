import { useState, useEffect } from "react";
import { Link, NavLink, useNavigate } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { useCart } from "../context/CartContext";
import logoImg from "../assets/logo.png";

const links = [
  { to: "/", label: "Home" },
  { to: "/menu", label: "Menu" },
  { to: "/about", label: "About" },
  { to: "/reservation", label: "Reservation" },
  { to: "/contact", label: "Contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const { itemCount } = useCart();
  const navigate = useNavigate();

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handler);
    return () => window.removeEventListener("scroll", handler);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 py-2 md:py-4  transition-all duration-500 ${scrolled ? "bg-forest-950/95 backdrop-blur-md shadow-lg shadow-black/50" : "bg-transparent"}`}
    >
      <div className="max-w-7xl mx-auto  px-6 h-16 flex items-center justify-between">
        {/* Left nav */}
        <nav className="hidden md:flex items-center gap-8">
          {links.slice(0, 2).map((l) => (
            <NavLink
              key={l.to}
              to={l.to}
              className={({ isActive }) =>
                `nav-link ${isActive ? "text-gold-400 border-b border-gold-400 pb-0.5" : ""}`
              }
            >
              {l.label}
            </NavLink>
          ))}
        </nav>

        {/* Logo center */}
        <Link to="/" className="flex flex-col items-center">
          <div className="w-14 h-14 md:w-20 md:h-20 flex items-center justify-center">
            <img
              src={logoImg}
              alt="Logo"
              className="rounded-lg w-full h-full object-cover object-top"
            />
          </div>
        </Link>

        {/* Right nav */}
        <nav className="hidden md:flex items-center gap-8">
          {links.slice(2).map((l) => (
            <NavLink
              key={l.to}
              to={l.to}
              className={({ isActive }) =>
                `nav-link ${isActive ? "text-gold-400 border-b border-gold-400 pb-0.5" : ""}`
              }
            >
              {l.label}
            </NavLink>
          ))}
          <button
            onClick={() => navigate("/cart")}
            className="relative text-gold-400 hover:text-gold-300 transition-colors"
          >
            <svg
              className="w-5 h-5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={1.5}
                d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z"
              />
            </svg>
            {itemCount > 0 && (
              <span className="absolute -top-2 -right-2 bg-gold-500 text-forest-950 text-xs font-bold rounded-full w-4 h-4 flex items-center justify-center">
                {itemCount}
              </span>
            )}
          </button>
        </nav>

        {/* Mobile hamburger */}
        <div className="md:hidden flex items-center gap-4">
          <button
            onClick={() => navigate("/cart")}
            className="relative text-gold-400"
          >
            <svg
              className="w-5 h-5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={1.5}
                d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z"
              />
            </svg>
            {itemCount > 0 && (
              <span className="absolute -top-2 -right-2 bg-gold-500 text-forest-950 text-xs font-bold rounded-full w-4 h-4 flex items-center justify-center">
                {itemCount}
              </span>
            )}
          </button>
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="text-gold-400 p-1"
          >
            <div className="w-5 space-y-1">
              <span
                className={`block h-0.5 bg-gold-400 transition-transform ${menuOpen ? "rotate-45 translate-y-1.5" : ""}`}
              ></span>
              <span
                className={`block h-0.5 bg-gold-400 transition-opacity ${menuOpen ? "opacity-0" : ""}`}
              ></span>
              <span
                className={`block h-0.5 bg-gold-400 transition-transform ${menuOpen ? "-rotate-45 -translate-y-1.5" : ""}`}
              ></span>
            </div>
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-forest-950/98 border-t border-gold-700/30"
          >
            {links.map((l) => (
              <NavLink
                key={l.to}
                to={l.to}
                onClick={() => setMenuOpen(false)}
                className="block px-6 py-3 nav-link border-b border-forest-800/50"
              >
                {l.label}
              </NavLink>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
