import { Link } from "react-router-dom";
import logoImg from "../assets/logo.png";

export default function Footer() {
  return (
    <footer className="bg-forest-950 border-t border-gold-700/20 pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 mb-12">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-3 mb-4">
              <div className="w-18 h-20 flex items-center justify-center">
                <img
                  src={logoImg}
                  alt="Logo"
                  className="rounded-lg w-full h-full object-cover object-top"
                />
              </div>
            </div>
            <p className="text-forest-400 font-sans text-sm leading-relaxed">
              Fine dining where every meal is a celebration of artistry and
              flavor.
            </p>
            <div className="flex gap-3 mt-4">
              {["Twitter", "Facebook", "Instagram"].map((s) => (
                <a
                  key={s}
                  href="#"
                  className="w-8 h-8 border border-gold-700/40 rounded-full flex items-center justify-center text-gold-600 hover:border-gold-500 hover:text-gold-400 transition-colors text-xs font-sans"
                >
                  {s[0]}
                </a>
              ))}
            </div>
          </div>

          {/* Navigate */}
          <div>
            <h4 className="font-display text-gold-400 text-sm tracking-widest uppercase mb-4">
              Navigate
            </h4>
            {[
              ["Home", "/"],
              ["Menu", "/menu"],
              ["About", "/about"],
              ["Reservation", "/reservation"],
              ["Contact", "/contact"],
            ].map(([l, h]) => (
              <Link
                key={l}
                to={h}
                className="block font-sans text-sm text-forest-400 hover:text-gold-400 transition-colors mb-2"
              >
                {l}
              </Link>
            ))}
          </div>

          {/* Hours */}
          <div>
            <h4 className="font-display text-gold-400 text-sm tracking-widest uppercase mb-4">
              Hours
            </h4>
            <p className="font-sans text-sm text-forest-400 mb-1">
              Mon–Fri: 5:00 pm – 11:00 pm
            </p>
            <p className="font-sans text-sm text-forest-400 mb-1">
              Sat–Sun: 12:00 pm – 11:00 pm
            </p>
          </div>

          {/* Newsletter */}
          <div>
            <h4 className="font-display text-gold-400 text-sm tracking-widest uppercase mb-4">
              Newsletter
            </h4>
            <p className="font-sans text-sm text-forest-400 mb-3">
              Sign up for exclusive events and seasonal menus.
            </p>
            <div className="flex">
              <input
                className="flex-1 bg-forest-800 border border-gold-700/30 rounded-l px-3 py-2 text-sm text-gold-200 placeholder-forest-500 focus:outline-none focus:border-gold-500"
                placeholder="Email address"
              />
              <button className="bg-gold-500 text-forest-950 px-3 py-2 rounded-r text-sm font-sans font-semibold hover:bg-gold-400 transition-colors">
                →
              </button>
            </div>
          </div>
        </div>

        <div className="border-t border-forest-800 pt-6 flex flex-col md:flex-row justify-between items-center gap-3">
          <p className="font-sans text-xs text-forest-500">
            © 2024 MADHURA Restaurant. All rights reserved.
          </p>
          <div className="flex gap-6">
            <a
              href="#"
              className="font-sans text-xs text-forest-500 hover:text-gold-400 transition-colors"
            >
              Privacy Policy
            </a>
            <a
              href="#"
              className="font-sans text-xs text-forest-500 hover:text-gold-400 transition-colors"
            >
              Terms
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
