import React from 'react';
import { motion } from 'framer-motion';
import { ArrowDown, ArrowUpRight, Sparkles, Compass, MapPin } from 'lucide-react';

interface HeroProps {
  onOpenBooking: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenBooking }) => {
  const wordsRow1 = ['Coffee.'];
  const wordsRow2 = ['Crafted', 'Slowly.'];

  return (
    <section className="relative min-h-[92vh] md:min-h-screen w-full flex flex-col justify-between pt-28 md:pt-36 pb-12 px-6 sm:px-8 lg:px-12 overflow-hidden bg-cream">
      {/* Background Architectural Accent Lines */}
      <div className="absolute inset-0 pointer-events-none opacity-40">
        <div className="absolute top-0 left-1/4 w-[1px] h-full bg-espresso/5" />
        <div className="absolute top-0 right-1/3 w-[1px] h-full bg-espresso/5" />
        <div className="absolute top-1/2 left-0 w-full h-[1px] bg-espresso/5" />
      </div>

      {/* Top Meta Bar */}
      <div className="relative z-10 max-w-7xl mx-auto w-full flex flex-wrap items-center justify-between gap-4 text-xs font-medium uppercase tracking-[0.25em] text-espresso/60 pb-6 border-b border-espresso/10">
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="flex items-center gap-2"
        >
          <span className="w-2 h-2 rounded-full bg-sage animate-pulse" />
          <span className="text-espresso font-semibold">Atelier & Micro-Roastery</span>
          <span className="text-espresso/30">•</span>
          <span>Vol. 04 / 2026</span>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="hidden md:flex items-center gap-6"
        >
          <div className="flex items-center gap-1.5">
            <MapPin className="w-3.5 h-3.5 text-terracotta" />
            <span>Via Montenapoleone 18, Milan</span>
          </div>
          <div className="flex items-center gap-1.5">
            <Compass className="w-3.5 h-3.5 text-terracotta" />
            <span>45.4682° N, 9.1955° E</span>
          </div>
        </motion.div>
      </div>

      {/* Main Hero Body Grid */}
      <div className="relative z-10 max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center my-auto py-8 lg:py-12">
        {/* Left Editorial Headline Column */}
        <div className="lg:col-span-7 flex flex-col justify-center">
          {/* Tagline Badge */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-warmSand/60 border border-espresso/10 w-fit mb-6 sm:mb-8"
          >
            <Sparkles className="w-3.5 h-3.5 text-terracotta" />
            <span className="text-[11px] font-semibold tracking-[0.2em] uppercase text-espresso">
              Single-Origin Micro Lots
            </span>
          </motion.div>

          {/* Large Editorial Headline */}
          <h1 className="font-serif text-5xl sm:text-6xl md:text-7xl lg:text-8xl tracking-tight leading-[0.95] text-espresso font-normal">
            <div className="overflow-hidden">
              <motion.span
                className="inline-block"
                initial={{ y: '100%', opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: 0.4 }}
              >
                Coffee.
              </motion.span>
            </div>
            <div className="overflow-hidden mt-1">
              <motion.span
                className="inline-block italic font-light text-terracotta"
                initial={{ y: '100%', opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: 0.55 }}
              >
                Crafted
              </motion.span>{' '}
              <motion.span
                className="inline-block"
                initial={{ y: '100%', opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: 0.65 }}
              >
                Slowly.
              </motion.span>
            </div>
          </h1>

          {/* Supporting Text */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.8 }}
            className="mt-6 sm:mt-8 text-base sm:text-lg md:text-xl text-espresso-muted max-w-xl font-sans font-light leading-relaxed"
          >
            Specialty coffee, artisan baking, and moments worth slowing down for. 
            An architectural sanctuary designed for contemplative mornings and unhurried afternoons.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.95 }}
            className="mt-8 sm:mt-10 flex flex-wrap items-center gap-4 sm:gap-6"
          >
            <a
              href="#menu"
              className="px-8 py-4 rounded-full bg-espresso text-cream hover:bg-espresso-light text-xs font-semibold uppercase tracking-[0.2em] transition-all duration-300 shadow-md hover:shadow-xl group inline-flex items-center gap-2"
            >
              <span>Explore Menu</span>
              <ArrowDown className="w-3.5 h-3.5 transition-transform duration-300 group-hover:translate-y-0.5 text-terracotta" />
            </a>

            <button
              onClick={onOpenBooking}
              className="px-8 py-4 rounded-full border border-espresso/30 text-espresso hover:border-terracotta hover:text-terracotta text-xs font-semibold uppercase tracking-[0.2em] transition-all duration-300 group inline-flex items-center gap-2 hover:bg-terracotta/5"
            >
              <span>Book a Table</span>
              <ArrowUpRight className="w-3.5 h-3.5 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </button>
          </motion.div>
        </div>

        {/* Right High-End Visual Composition */}
        <div className="lg:col-span-5 relative">
          <motion.div
            initial={{ scale: 1.08, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1], delay: 0.4 }}
            className="relative rounded-2xl overflow-hidden shadow-2xl border border-warmSand aspect-[4/5] group"
          >
            <img
              src="https://images.unsplash.com/photo-1501339847302-ac426a4a7cbb?q=80&w=1200&auto=format&fit=crop"
              alt="Artisanal Barista Brewing Pour Over Coffee"
              className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
            />
            
            {/* Subtle warm gradient overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-espresso/70 via-espresso/20 to-transparent" />

            {/* In-Image Caption */}
            <div className="absolute bottom-6 left-6 right-6 p-5 rounded-xl glass-card-dark text-cream border border-cream/10 backdrop-blur-md">
              <div className="flex items-center justify-between mb-2">
                <span className="text-[10px] tracking-[0.25em] uppercase text-warmSand font-semibold">
                  Today's Featured Lot
                </span>
                <span className="px-2 py-0.5 rounded text-[9px] uppercase tracking-wider bg-terracotta text-offWhite font-bold">
                  Q-Score 89.5
                </span>
              </div>
              <p className="font-serif text-lg text-offWhite leading-snug">
                Ethiopia Guji Hambela • Anaerobic Natural
              </p>
              <p className="text-xs text-cream/70 mt-1 font-sans">
                Notes of wild strawberry, peach nectar, lavender blossom.
              </p>
            </div>
          </motion.div>

          {/* Floating Ceramic Badge / Micro-Card */}
          <motion.div
            initial={{ opacity: 0, y: 30, x: 20 }}
            animate={{ opacity: 1, y: 0, x: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="hidden sm:flex absolute -bottom-6 -left-6 p-4 rounded-xl glass-card-light border border-espresso/10 shadow-lg items-center gap-3.5 max-w-xs"
          >
            <div className="w-10 h-10 rounded-full bg-warmSand flex items-center justify-center text-espresso font-serif font-bold text-lg">
              93°
            </div>
            <div>
              <p className="text-xs font-bold text-espresso tracking-wider uppercase font-sans">
                Thermal Precision
              </p>
              <p className="text-[11px] text-espresso-muted">
                Dialed hourly to exact atmospheric pressure.
              </p>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Bottom Scroll Indicator & Opening Hours */}
      <div className="relative z-10 max-w-7xl mx-auto w-full flex items-center justify-between pt-6 border-t border-espresso/10 text-xs text-espresso/60">
        <div className="flex items-center gap-2 font-medium">
          <span className="w-2 h-2 rounded-full bg-sage" />
          <span>Open Today: <strong className="text-espresso font-semibold">07:30 – 22:00</strong></span>
        </div>

        <a
          href="#menu"
          className="inline-flex items-center gap-2 uppercase tracking-[0.2em] font-semibold text-espresso hover:text-terracotta transition-colors group"
        >
          <span>Scroll to Discover</span>
          <ArrowDown className="w-3.5 h-3.5 animate-bounce text-terracotta" />
        </a>
      </div>
    </section>
  );
};
