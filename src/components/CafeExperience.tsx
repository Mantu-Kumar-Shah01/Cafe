import React from 'react';
import { motion } from 'framer-motion';
import { EXPERIENCE_POINTS } from '../data/cafeData';
import { Sparkles, ArrowUpRight } from 'lucide-react';

interface CafeExperienceProps {
  onOpenBooking: () => void;
}

export const CafeExperience: React.FC<CafeExperienceProps> = ({ onOpenBooking }) => {
  return (
    <section id="experience" className="py-24 md:py-36 px-6 sm:px-8 lg:px-12 bg-cream relative overflow-hidden">
      {/* Background Section Index Number */}
      <div className="absolute top-12 left-12 select-none pointer-events-none font-serif text-[120px] lg:text-[180px] font-bold text-warmSand/25 leading-none">
        02
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left Column: Asymmetrical Image Composition */}
          <div className="lg:col-span-6 relative">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
              className="relative rounded-2xl overflow-hidden shadow-2xl aspect-[4/5] border border-warmSand"
            >
              <img
                src="https://images.unsplash.com/photo-1554118811-1e0d58224f24?q=80&w=1200&auto=format&fit=crop"
                alt="Architectural Luxury Cafe Interior"
                className="w-full h-full object-cover transition-transform duration-1000 hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-espresso/60 via-transparent to-transparent" />
              
              <div className="absolute bottom-6 left-6 right-6 text-cream">
                <span className="text-[10px] tracking-[0.3em] uppercase text-warmSand font-semibold">
                  Atmospheric Sanctuary
                </span>
                <p className="font-serif text-xl italic text-offWhite mt-1">
                  "Light, travertine stone, and unhurried acoustic calm."
                </p>
              </div>
            </motion.div>

            {/* Overlapping Floating Small Image Card */}
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="hidden sm:block absolute -bottom-10 -right-8 w-52 rounded-xl overflow-hidden shadow-xl border-2 border-cream z-20"
            >
              <img
                src="https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?q=80&w=600&auto=format&fit=crop"
                alt="Artisan ceramic coffee cup"
                className="w-full h-36 object-cover"
              />
              <div className="p-3 bg-espresso text-cream text-[10px] tracking-wider uppercase font-semibold text-center">
                Custom Ceramic Atelier
              </div>
            </motion.div>
          </div>

          {/* Right Column: Narrative & Feature Points */}
          <div className="lg:col-span-6 flex flex-col justify-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <div className="inline-flex items-center gap-2 text-terracotta uppercase tracking-[0.3em] text-xs font-semibold mb-4">
                <Sparkles className="w-3.5 h-3.5" />
                <span>The Atmosphere</span>
              </div>

              <h2 className="font-serif text-4xl sm:text-5xl md:text-6xl text-espresso tracking-tight leading-[1.05] mb-6">
                A place to <br />
                <span className="italic text-terracotta font-light">slow down.</span>
              </h2>

              <p className="text-espresso-muted text-base sm:text-lg font-sans font-light leading-relaxed mb-10">
                Designed with minimalist Japanese-Nordic sensibilities, L'Élixir is an intentional pause in the pace of the city. 
                Natural travertine surfaces, custom acoustic timber louvers, and warm diffused sunlight invite you to savor every sip in tranquility.
              </p>
            </motion.div>

            {/* Feature Points Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-4 border-t border-espresso/10">
              {EXPERIENCE_POINTS.map((feat, idx) => (
                <motion.div
                  key={feat.number}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.1 * idx }}
                  className="group p-4 rounded-xl bg-warmSand/20 hover:bg-warmSand/40 transition-colors duration-300 border border-espresso/5"
                >
                  <span className="font-serif text-xs font-semibold text-terracotta tracking-widest block mb-2">
                    {feat.number}
                  </span>
                  <h4 className="font-serif text-lg text-espresso mb-1 group-hover:text-terracotta transition-colors">
                    {feat.title}
                  </h4>
                  <p className="text-xs text-espresso-muted font-sans font-light leading-relaxed">
                    {feat.desc}
                  </p>
                </motion.div>
              ))}
            </div>

            {/* Reservation CTA prompt */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="mt-10"
            >
              <button
                onClick={onOpenBooking}
                className="inline-flex items-center gap-3 px-8 py-3.5 rounded-full bg-espresso text-cream hover:bg-terracotta transition-all duration-300 text-xs uppercase tracking-[0.2em] font-semibold group shadow-md"
              >
                <span>Reserve Your Table Sanctuary</span>
                <ArrowUpRight className="w-3.5 h-3.5 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 text-warmSand" />
              </button>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};
