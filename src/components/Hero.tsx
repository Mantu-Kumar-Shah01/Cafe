import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface HeroProps {
  onOpenBooking: () => void;
}

const HERO_SLIDES = [
  {
    image: '/hero-slide-1.jpg',
    alt: 'Artisanal Barista Brewing Pour Over Coffee',
    tag: "Today's Featured Lot",
    score: 'Q-Score 89.5',
    title: 'Baba Budan • Anaerobic Lot',
    notes: 'Notes of wild honey, cardamom blossom, meyer lemon.',
  },
  {
    image: '/hero-slide-2.jpg',
    alt: 'Steaming Cappuccino & Sourdough Croissant',
    tag: 'Estate Reserve',
    score: 'Q-Score 90.2',
    title: 'Chikmagalur • Honey Processed',
    notes: 'Notes of dark cocoa, roasted macadamia, dried fig.',
  },
  {
    image: '/hero-slide-3.jpg',
    alt: 'Single-Origin Roasted Coffee Beans',
    tag: 'Single-Origin Cup',
    score: 'Q-Score 88.8',
    title: 'Shevaroy Hills • Wash Processed',
    notes: 'Notes of bergamot tea, white peach, jasmine floral.',
  },
  {
    image: '/hero-slide-4.jpg',
    alt: 'Modern Minimalist Atelier Atmosphere',
    tag: 'Limited Micro-Batch',
    score: 'Q-Score 91.0',
    title: 'Wayanad • Natural Sun-Dried',
    notes: 'Notes of ripe plum, sugarcane molasses, toasted hazelnut.',
  },
];

export const Hero: React.FC<HeroProps> = ({ onOpenBooking }) => {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % HERO_SLIDES.length);
    }, 4500);
    return () => clearInterval(timer);
  }, []);

  const slide = HERO_SLIDES[currentSlide];

  return (
    <section className="relative min-h-[100dvh] lg:h-screen w-full flex flex-col justify-between pt-24 sm:pt-28 pb-8 px-6 sm:px-8 lg:px-12 overflow-hidden bg-espresso text-cream">
      {/* 100% Full-Width Background Auto-Sliding Image Cover */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <AnimatePresence mode="wait">
          <motion.img
            key={slide.image}
            src={slide.image}
            alt={slide.alt}
            initial={{ opacity: 0, scale: 1.08 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 1.03 }}
            transition={{ duration: 1.1, ease: [0.16, 1, 0.3, 1] }}
            className="w-full h-full object-cover"
          />
        </AnimatePresence>

        {/* High-Contrast Gradient Overlay for Crisp Text Readability */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/65 to-black/35 z-10" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-black/40 z-10" />
      </div>

      {/* Main Hero Body Grid (Overlayed on top of full-width slide) */}
      <div className="relative z-20 max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-12 gap-8 items-center my-auto py-4 sm:py-6">
        {/* Left Side Content Overlay */}
        <div className="lg:col-span-8 xl:col-span-7 flex flex-col justify-center text-left">
          {/* Tagline Badge */}
          <motion.div
            initial={{ opacity: 0, x: -25 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1], delay: 0.15 }}
            className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/10 backdrop-blur-md border border-white/20 w-fit mb-4 sm:mb-6 shadow-md"
          >
            <span className="w-2 h-2 rounded-full bg-terracotta animate-pulse" />
            <span className="text-[10px] sm:text-[11px] font-semibold tracking-[0.2em] uppercase text-cream">
              Single-Estate Micro Lots
            </span>
          </motion.div>

          {/* Large Editorial Headline */}
          <h1 className="font-serif text-5xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-[88px] tracking-tight leading-[0.92] text-white font-normal drop-shadow-sm">
            <div className="overflow-hidden">
              <motion.span
                className="inline-block"
                initial={{ y: '100%', opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.85, ease: [0.16, 1, 0.3, 1], delay: 0.3 }}
              >
                Coffee.
              </motion.span>
            </div>
            <div className="overflow-hidden mt-1">
              <motion.span
                className="inline-block italic font-light text-terracotta"
                initial={{ y: '100%', opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.85, ease: [0.16, 1, 0.3, 1], delay: 0.45 }}
              >
                Crafted
              </motion.span>{' '}
              <motion.span
                className="inline-block text-white"
                initial={{ y: '100%', opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.85, ease: [0.16, 1, 0.3, 1], delay: 0.55 }}
              >
                Slowly.
              </motion.span>
            </div>
          </h1>

          {/* Supporting Text */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: 0.7 }}
            className="mt-5 sm:mt-6 text-sm sm:text-base md:text-lg text-cream/85 max-w-xl font-sans font-light leading-relaxed drop-shadow-xs"
          >
            Single-origin Indian specialty coffee, slow sourdough viennoiserie, and moments worth pausing for on Lavelle Road.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: 0.85 }}
            className="mt-7 sm:mt-9 flex flex-wrap items-center gap-3 sm:gap-5"
          >
            <motion.a
              href="#menu"
              whileHover={{ scale: 1.04, y: -2 }}
              whileTap={{ scale: 0.96 }}
              transition={{ type: 'spring', stiffness: 400, damping: 20 }}
              className="w-full sm:w-auto text-center px-8 py-4 rounded-full bg-terracotta text-white hover:bg-terracotta-hover text-xs font-semibold uppercase tracking-[0.2em] shadow-lg hover:shadow-2xl inline-flex items-center justify-center whitespace-nowrap"
            >
              <span className="whitespace-nowrap">Explore Menu</span>
            </motion.a>

            <motion.button
              onClick={onOpenBooking}
              whileHover={{ scale: 1.04, y: -2 }}
              whileTap={{ scale: 0.96 }}
              transition={{ type: 'spring', stiffness: 400, damping: 20 }}
              className="w-full sm:w-auto px-8 py-4 rounded-full border border-white/40 text-white hover:border-white hover:bg-white/10 text-xs font-semibold uppercase tracking-[0.2em] inline-flex items-center justify-center backdrop-blur-xs whitespace-nowrap"
            >
              <span className="whitespace-nowrap">Book a Table</span>
            </motion.button>
          </motion.div>
        </div>
      </div>

      {/* Bottom Scroll Indicator & Status Bar */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1 }}
        className="relative z-20 max-w-7xl mx-auto w-full flex items-center justify-between pt-4 border-t border-white/15 text-xs text-cream/75"
      >
        <div className="flex items-center gap-2 font-medium">
          <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
          <span>Open Today: <strong className="text-white font-semibold">07:30 – 22:00 IST</strong></span>
        </div>

        <motion.a
          href="#menu"
          whileHover={{ x: 3 }}
          className="inline-flex items-center gap-2 uppercase tracking-[0.2em] font-semibold text-white hover:text-warmSand transition-colors"
        >
          <span className="hidden sm:inline">Scroll to Discover</span>
        </motion.a>
      </motion.div>
    </section>
  );
};
