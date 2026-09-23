import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { TESTIMONIALS } from '../data/cafeData';

export const Testimonials: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState<number>(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % TESTIMONIALS.length);
    }, 8000);
    return () => clearInterval(timer);
  }, []);

  const current = TESTIMONIALS[currentIndex];

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev === 0 ? TESTIMONIALS.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % TESTIMONIALS.length);
  };

  return (
    <section id="testimonials" className="py-12 md:py-16 lg:py-20 px-5 sm:px-8 lg:px-12 bg-white relative overflow-hidden">
      {/* Background Section Index Number */}
      <motion.div 
        initial={{ opacity: 0, x: -30 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 1 }}
        className="absolute top-10 left-6 select-none pointer-events-none font-serif text-[90px] sm:text-[140px] lg:text-[180px] font-bold text-warmSand/20 leading-none"
      >
        06
      </motion.div>

      <div className="max-w-5xl mx-auto relative z-10">
        {/* Section Header */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-10 md:mb-16"
        >
          <div className="inline-flex items-center gap-2 text-terracotta uppercase tracking-[0.3em] text-xs font-semibold mb-2 md:mb-3">
            <span className="w-1.5 h-1.5 rounded-full bg-terracotta" />
            <span>Accolades & Voices</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-5xl text-espresso tracking-tight">
            Words from the Atelier
          </h2>
        </motion.div>

        {/* Testimonial Stage */}
        <div className="relative bg-cream/70 rounded-3xl p-6 sm:p-12 md:p-16 border border-warmSand shadow-sm">
          <AnimatePresence mode="wait">
            <motion.div
              key={current.id}
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
              className="space-y-6 sm:space-y-8"
            >
              {/* Editorial Large Quote */}
              <blockquote className="font-serif text-xl sm:text-3xl md:text-4xl text-espresso leading-relaxed italic font-normal">
                "{current.quote}"
              </blockquote>

              {/* Author Info */}
              <div className="flex items-center justify-between pt-4 sm:pt-6 border-t border-espresso/10 flex-wrap gap-4">
                <div className="flex items-center gap-3 sm:gap-4">
                  <img
                    src={current.image}
                    alt={current.author}
                    className="w-10 h-10 sm:w-12 sm:h-12 rounded-full object-cover border-2 border-warmSand"
                  />
                  <div>
                    <h4 className="font-serif text-base sm:text-lg text-espresso font-semibold">
                      {current.author}
                    </h4>
                    <p className="text-[11px] sm:text-xs text-espresso-muted font-sans font-light">
                      {current.role} • <span className="text-terracotta">{current.location}</span>
                    </p>
                  </div>
                </div>

                {/* Text Navigation Buttons */}
                <div className="flex items-center gap-2 sm:gap-3">
                  <motion.button
                    whileHover={{ scale: 1.06 }}
                    whileTap={{ scale: 0.94 }}
                    onClick={handlePrev}
                    className="px-3.5 py-1.5 rounded-full border border-espresso/20 text-espresso hover:border-terracotta hover:text-terracotta hover:bg-terracotta/5 transition-colors text-xs uppercase font-semibold tracking-wider"
                    aria-label="Previous Testimonial"
                  >
                    Prev
                  </motion.button>
                  <motion.button
                    whileHover={{ scale: 1.06 }}
                    whileTap={{ scale: 0.94 }}
                    onClick={handleNext}
                    className="px-3.5 py-1.5 rounded-full border border-espresso/20 text-espresso hover:border-terracotta hover:text-terracotta hover:bg-terracotta/5 transition-colors text-xs uppercase font-semibold tracking-wider"
                    aria-label="Next Testimonial"
                  >
                    Next
                  </motion.button>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Dots Indicator */}
          <div className="flex items-center justify-center gap-1.5 sm:gap-2 mt-6 sm:mt-8">
            {TESTIMONIALS.map((t, idx) => (
              <button
                key={t.id}
                onClick={() => setCurrentIndex(idx)}
                className={`h-1.5 rounded-full transition-all duration-300 ${
                  currentIndex === idx ? 'w-6 sm:w-8 bg-terracotta' : 'w-2 bg-warmSand'
                }`}
                aria-label={`Go to slide ${idx + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
