import React from 'react';
import { motion } from 'framer-motion';
import { EXPERIENCE_POINTS } from '../data/cafeData';

interface CafeExperienceProps {
  onOpenBooking: () => void;
}

export const CafeExperience: React.FC<CafeExperienceProps> = ({ onOpenBooking }) => {
  return (
    <section id="experience" className="py-12 md:py-16 lg:py-20 px-6 sm:px-8 lg:px-12 bg-white relative overflow-hidden">
      {/* Background Section Index Number */}
      <motion.div 
        initial={{ opacity: 0, x: -30 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 1 }}
        className="absolute top-12 left-12 select-none pointer-events-none font-serif text-[120px] lg:text-[180px] font-bold text-warmSand/25 leading-none"
      >
        02
      </motion.div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left Column: Asymmetrical Image Composition */}
          <div className="lg:col-span-6 relative">
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 30 }}
              whileInView={{ opacity: 1, scale: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
              whileHover={{ scale: 1.01 }}
              className="relative rounded-2xl overflow-hidden shadow-2xl aspect-[4/5] border border-warmSand group cursor-pointer"
            >
              <img
                src="https://images.unsplash.com/photo-1554118811-1e0d58224f24?q=80&w=1200&auto=format&fit=crop"
                alt="Architectural Luxury Cafe Interior"
                className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
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
              initial={{ opacity: 0, y: 40, x: 20 }}
              whileInView={{ opacity: 1, y: 0, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.3 }}
              whileHover={{ y: -6, scale: 1.03 }}
              className="hidden sm:block absolute -bottom-10 -right-8 w-52 rounded-xl overflow-hidden shadow-xl border-2 border-cream z-20 cursor-pointer"
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
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
            >
              <div className="inline-flex items-center gap-2 text-terracotta uppercase tracking-[0.3em] text-xs font-semibold mb-4">
                <span>The Atmosphere</span>
              </div>

              <h2 className="font-serif text-4xl sm:text-5xl md:text-6xl text-espresso tracking-tight leading-[1.05] mb-6">
                A place to <br />
                <span className="italic text-terracotta font-light">slow down.</span>
              </h2>

              <p className="text-espresso-muted text-base sm:text-lg font-sans font-light leading-relaxed mb-10">
                Designed with minimalist Japanese-Nordic sensibilities, CafeDemo is an intentional pause in the pace of the city. 
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
                  whileHover={{ y: -4, backgroundColor: 'rgba(232, 216, 195, 0.45)' }}
                  className="group p-4 rounded-xl bg-warmSand/20 transition-all duration-300 border border-espresso/5 cursor-default"
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
              transition={{ duration: 0.6, delay: 0.4 }}
              className="mt-10"
            >
              <motion.button
                onClick={onOpenBooking}
                whileHover={{ scale: 1.04, y: -2 }}
                whileTap={{ scale: 0.96 }}
                transition={{ type: 'spring', stiffness: 400, damping: 20 }}
                className="w-full sm:w-auto inline-flex items-center justify-center px-6 sm:px-8 py-3.5 rounded-full bg-espresso text-cream hover:bg-terracotta transition-colors text-xs uppercase tracking-[0.16em] sm:tracking-[0.2em] font-semibold shadow-md whitespace-nowrap"
              >
                <span className="whitespace-nowrap">Reserve Table Sanctuary</span>
              </motion.button>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};
