import { motion } from "framer-motion";
import SectionWrapper from "../components/SectionWrapper";
import Ornament from "../components/Ornament";
import chefImg from "../assets/head chef.png";

const galleryImages = [
   "https://images.unsplash.com/photo-1543353071-873f17a7a088?w=800&q=80",
  "https://images.unsplash.com/photo-1551218808-94e220e084d2?w=800&q=80",
  "https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=800&q=80",
  "https://images.unsplash.com/photo-1559847844-5315695dadae?w=800&q=80",
  "https://images.unsplash.com/photo-1600891964599-f61ba0e24092?w=800&q=80",
  "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=800&q=80",
  "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=800&q=80",
  "https://images.unsplash.com/photo-1555396273-367ea4eb4db5?w=800&q=80",
  "https://images.unsplash.com/photo-1544025162-d76694265947?w=800&q=80",
];

export default function About() {
  return (
    <div className="min-h-screen">
      {/* HERO */}
      <div className="relative py-32 px-6 text-center overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=1400&q=80"
            alt="Restaurant"
            className="w-full h-full object-cover opacity-20"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-forest-950/60 via-forest-950/80 to-forest-950" />
        </div>
        <div className="relative z-10">
          <Ornament className="mb-6" />
          <h1 className="font-display text-5xl md:text-7xl text-gold-300 mb-4">
            Our Culinary Journey
          </h1>
          <p className="font-body text-forest-200 text-xl max-w-xl mx-auto italic">
            A story of passion, heritage, and relentless pursuit of excellence.
          </p>
        </div>
      </div>

      {/* CHEF SECTION */}
      <SectionWrapper className="py-24 px-6">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-16 items-center">
          <div className="relative">
            <div className="border-2 border-gold-600/40 rounded-xl p-2">
              <img
                src={chefImg}
                alt="Head Chef"
                className="rounded-lg w-full h-96 object-cover object-top"
              />
            </div>
            <div className="absolute -bottom-4 -right-4 bg-gold-500 text-forest-950 px-6 py-3 rounded-lg shadow-gold">
              <p className="font-display text-lg font-bold">
                Chef Arjun Madhura
              </p>
              <p className="font-sans text-xs uppercase tracking-widest">
                Executive Chef & Founder
              </p>
            </div>
          </div>
          <div>
            <p className="font-sans text-gold-500 tracking-widest uppercase text-xs mb-3">
              The Visionary
            </p>
            <h2 className="font-display text-4xl text-gold-200 mb-6">
              Chef's Heritage
            </h2>
            <p className="font-body text-forest-200 leading-relaxed mb-4 text-lg">
              Chef Arjun Madhura is a globally renowned culinary artist whose
              journey has taken him from the spice-laden kitchens of Kerala to
              the Michelin-starred establishments of Paris and Tokyo.
            </p>
            <p className="font-body text-forest-300 leading-relaxed mb-4">
              His restaurant represents his life's philosophy — that the finest
              cuisine transcends boundaries of culture and technique, weaving
              together stories of people, land, and seasons.
            </p>
            <p className="font-body text-forest-300 leading-relaxed">
              With over two decades of culinary mastery, Chef Arjun has been
              celebrated by the James Beard Foundation, awarded three Michelin
              stars, and recognized as one of the 50 Best Chefs in the world.
            </p>
          </div>
        </div>
      </SectionWrapper>

      {/* MISSION */}
      <SectionWrapper className="py-20 px-6 bg-forest-900/30">
        <div className="max-w-3xl mx-auto text-center">
          <Ornament className="mb-8" />
          <h2 className="font-display text-4xl text-gold-300 mb-6">
            Our Mission
          </h2>
          <p className="font-body text-forest-200 text-xl leading-relaxed mb-4">
            We exist to create extraordinary dining experiences that stimulate
            every sense — where flavour, atmosphere, and hospitality converge
            into something transcendent.
          </p>
          <p className="font-body text-forest-300 text-lg leading-relaxed">
            Our commitment is to source the finest seasonal ingredients from
            local and global purveyors, treat every guest as family, and honour
            the traditions that make food a universal language.
          </p>
        </div>
      </SectionWrapper>

      {/* GALLERY */}
      <SectionWrapper className="py-24 px-6">
        <div className="max-w-6xl mx-auto">
          <p className="font-sans text-gold-500 tracking-widest uppercase text-xs text-center mb-2">
            A Visual Feast
          </p>
          <h2 className="section-title mb-2">Gallery</h2>
          <Ornament className="mb-12" />
          <div className="grid grid-cols-3 gap-3">
            {galleryImages.map((src, i) => (
              <motion.div
                key={i}
                className={`overflow-hidden rounded-lg border border-gold-700/20 cursor-pointer group ${i === 4 ? "col-span-1 row-span-2" : ""}`}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ delay: i * 0.06 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.02 }}
              >
                <img
                  src={src}
                  alt={`Gallery ${i + 1}`}
                  className={`w-full object-cover transition-transform duration-700 group-hover:scale-110 ${i === 4 ? "h-full min-h-72" : "h-48"}`}
                />
              </motion.div>
            ))}
          </div>
        </div>
      </SectionWrapper>

      {/* AWARDS */}
      <SectionWrapper className="py-20 px-6 bg-forest-900/30 border-t border-gold-700/20">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="section-title mb-2">Accolades</h2>
          <Ornament className="mb-12" />
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { num: "3", label: "Michelin Stars" },
              { num: "#7", label: "World's 50 Best" },
              { num: "25+", label: "Years of Excellence" },
              { num: "12", label: "International Awards" },
            ].map((a, i) => (
              <motion.div
                key={i}
                className="card-luxury p-6"
                whileHover={{ y: -4 }}
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ delay: i * 0.1 }}
                viewport={{ once: true }}
              >
                <p className="font-display text-4xl text-gold-400 mb-2">
                  {a.num}
                </p>
                <p className="font-sans text-xs text-forest-400 tracking-widest uppercase">
                  {a.label}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </SectionWrapper>
    </div>
  );
}
