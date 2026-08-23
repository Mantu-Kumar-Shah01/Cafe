import React from 'react';
import { motion } from 'framer-motion';
import { ArrowDown, ArrowUpRight, Sparkles, MapPin } from 'lucide-react';

interface HeroProps {
  onOpenBooking: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenBooking }) => {
  return (
    <section className="relative min-h-[100dvh] lg:h-screen w-full flex flex-col justify-between pt-24 sm:pt-28 pb-8 px-6 sm:px-8 lg:px-12 overflow-hidden bg-cream">
      {/* Background Architectural Accent Lines */}
      <div className="absolute inset-0 pointer-events-none opacity-40">
        <div className="absolute top-0 left-1/4 w-[1px] h-full bg-espresso/5" />
        <div className="absolute top-0 right-1/3 w-[1px] h-full bg-espresso/5" />
        <div className="absolute top-1/2 left-0 w-full h-[1px] bg-espresso/5" />
      </div>

      {/* Main Hero Body Grid */}
      <div className="relative z-10 max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center my-auto py-2 sm:py-4">
        {/* Left Editorial Headline Column */}
        <div className="lg:col-span-7 flex flex-col justify-center text-left">
          {/* Tagline Badge */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-warmSand/60 border border-espresso/10 w-fit mb-3 sm:mb-5 shadow-xs"
          >
            <Sparkles className="w-3 h-3 text-terracotta" />
            <span className="text-[10px] sm:text-[11px] font-semibold tracking-[0.2em] uppercase text-espresso">
              Single-Estate Micro Lots
            </span>
          </motion.div>

          {/* Large Editorial Headline */}
          <h1 className="font-serif text-5xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-[84px] tracking-tight leading-[0.92] text-espresso font-normal">
            <div className="overflow-hidden">
              <motion.span
                className="inline-block"
                initial={{ y: '100%', opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: 0.3 }}
              >
                Coffee.
              </motion.span>
            </div>
            <div className="overflow-hidden mt-0.5">
              <motion.span
                className="inline-block italic font-light text-terracotta"
                initial={{ y: '100%', opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: 0.45 }}
              >
                Crafted
              </motion.span>{' '}
              <motion.span
                className="inline-block"
                initial={{ y: '100%', opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: 0.55 }}
              >
                Slowly.
              </motion.span>
            </div>
          </h1>

          {/* Supporting Text */}
          <motion.p
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.7 }}
            className="mt-4 sm:mt-5 text-sm sm:text-base md:text-lg text-espresso-muted max-w-lg font-sans font-light leading-relaxed"
          >
            Single-origin Indian specialty coffee, slow sourdough viennoiserie, and moments worth pausing for on Lavelle Road.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.85 }}
            className="mt-6 sm:mt-8 flex flex-wrap items-center gap-3 sm:gap-5"
          >
            <a
              href="#menu"
              className="w-full sm:w-auto text-center px-7 sm:px-8 py-3.5 sm:py-4 rounded-full bg-espresso text-cream hover:bg-espresso-light text-xs font-semibold uppercase tracking-[0.2em] transition-all duration-300 shadow-md hover:shadow-xl group inline-flex items-center justify-center gap-2"
            >
              <span>Explore Menu</span>
              <ArrowDown className="w-3.5 h-3.5 transition-transform duration-300 group-hover:translate-y-0.5 text-terracotta" />
            </a>

            <button
              onClick={onOpenBooking}
              className="w-full sm:w-auto px-7 sm:px-8 py-3.5 sm:py-4 rounded-full border border-espresso/30 text-espresso hover:border-terracotta hover:text-terracotta text-xs font-semibold uppercase tracking-[0.2em] transition-all duration-300 group inline-flex items-center justify-center gap-2 hover:bg-terracotta/5"
            >
              <span>Book a Table</span>
              <ArrowUpRight className="w-3.5 h-3.5 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </button>
          </motion.div>
        </div>

        {/* Right Sized Image Composition with Ambient Shadow */}
        <div className="lg:col-span-5 relative flex justify-center mt-4 lg:mt-0">
          <div className="relative w-full max-w-[320px] sm:max-w-[380px] lg:max-w-[360px] xl:max-w-[400px]">
            <motion.div
              initial={{ scale: 1.06, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 1, ease: [0.16, 1, 0.3, 1], delay: 0.3 }}
              className="relative rounded-3xl overflow-hidden shadow-2xl border border-warmSand aspect-[4/4.5] max-h-[340px] sm:max-h-[400px] lg:max-h-[420px] group"
            >
              <img
                src="https://images.unsplash.com/photo-1501339847302-ac426a4a7cbb?q=80&w=1000&auto=format&fit=crop"
                alt="Artisanal Barista Brewing Pour Over Coffee"
                className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
              />
              
              {/* Subtle warm gradient overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-espresso/80 via-espresso/20 to-transparent" />

              {/* In-Image Caption */}
              <div className="absolute bottom-3 left-3 right-3 sm:bottom-4 sm:left-4 sm:right-4 p-3.5 sm:p-4 rounded-2xl glass-card-dark text-cream border border-cream/10 backdrop-blur-md">
                <div className="flex items-center justify-between mb-1">
                  <span className="text-[9px] sm:text-[10px] tracking-[0.25em] uppercase text-warmSand font-semibold">
                    Today's Featured Lot
                  </span>
                  <span className="px-2 py-0.5 rounded text-[8px] sm:text-[9px] uppercase tracking-wider bg-terracotta text-offWhite font-bold">
                    Q-Score 89.5
                  </span>
                </div>
                <p className="font-serif text-sm sm:text-base text-offWhite leading-snug truncate">
                  Baba Budan • Anaerobic Lot
                </p>
                <p className="text-[10px] sm:text-[11px] text-cream/70 mt-0.5 font-sans truncate">
                  Notes of wild honey, cardamom blossom, meyer lemon.
                </p>
              </div>
            </motion.div>

            {/* Floating Ceramic Badge */}
            <motion.div
              initial={{ opacity: 0, y: 20, x: 15 }}
              animate={{ opacity: 1, y: 0, x: 0 }}
              transition={{ duration: 0.7, delay: 0.6 }}
              className="absolute -bottom-3 -left-3 p-2.5 sm:p-3 rounded-2xl glass-card-light border border-espresso/10 shadow-lg flex items-center gap-2.5 max-w-[220px]"
            >
              <div className="w-8 h-8 rounded-full bg-warmSand flex items-center justify-center text-espresso font-serif font-bold text-sm flex-shrink-0">
                93°
              </div>
              <div>
                <p className="text-[10px] font-bold text-espresso tracking-wider uppercase font-sans leading-tight">
                  Thermal Precision
                </p>
                <p className="text-[9px] text-espresso-muted leading-tight">
                  Dialed hourly to pressure.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Bottom Scroll Indicator & Opening Hours */}
      <div className="relative z-10 max-w-7xl mx-auto w-full flex items-center justify-between pt-4 border-t border-espresso/10 text-xs text-espresso/60">
        <div className="flex items-center gap-2 font-medium">
          <span className="w-2 h-2 rounded-full bg-sage" />
          <span>Open Today: <strong className="text-espresso font-semibold">07:30 – 22:00 IST</strong></span>
        </div>

        <a
          href="#menu"
          className="inline-flex items-center gap-2 uppercase tracking-[0.2em] font-semibold text-espresso hover:text-terracotta transition-colors group"
        >
          <span className="hidden sm:inline">Scroll to Discover</span>
          <ArrowDown className="w-3.5 h-3.5 animate-bounce text-terracotta" />
        </a>
      </div>
    </section>
  );
};
