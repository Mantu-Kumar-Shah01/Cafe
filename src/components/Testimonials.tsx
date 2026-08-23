import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { TESTIMONIALS } from '../data/cafeData';
import { Star, ChevronLeft, ChevronRight, Quote } from 'lucide-react';

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
    <section id="testimonials" className="py-24 md:py-36 px-6 sm:px-8 lg:px-12 bg-offWhite relative overflow-hidden">
      {/* Background Section Index Number */}
      <div className="absolute top-12 left-12 select-none pointer-events-none font-serif text-[120px] lg:text-[180px] font-bold text-warmSand/20 leading-none">
        06
      </div>

      <div className="max-w-5xl mx-auto relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 text-terracotta uppercase tracking-[0.3em] text-xs font-semibold mb-3">
            <span className="w-1.5 h-1.5 rounded-full bg-terracotta" />
            <span>Accolades & Voices</span>
          </div>
          <h2 className="font-serif text-4xl sm:text-5xl text-espresso tracking-tight">
            Words from the Atelier
          </h2>
        </div>

        {/* Testimonial Stage */}
        <div className="relative bg-cream/70 rounded-3xl p-8 sm:p-14 md:p-18 border border-warmSand shadow-sm">
          {/* Oversized Decorative Quotation Mark */}
          <div className="absolute -top-7 left-10 w-14 h-14 rounded-full bg-terracotta text-offWhite flex items-center justify-center shadow-lg">
            <Quote className="w-6 h-6 fill-current" />
          </div>

          <AnimatePresence mode="wait">
            <motion.div
              key={current.id}
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              transition={{ duration: 0.5 }}
              className="space-y-8"
            >
              {/* Star Rating */}
              <div className="flex items-center gap-1 text-terracotta">
                {[...Array(current.rating)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-current" />
                ))}
              </div>

              {/* Editorial Large Quote */}
              <blockquote className="font-serif text-2xl sm:text-3xl md:text-4xl text-espresso leading-relaxed italic font-normal">
                "{current.quote}"
              </blockquote>

              {/* Author Info */}
              <div className="flex items-center justify-between pt-6 border-t border-espresso/10 flex-wrap gap-4">
                <div className="flex items-center gap-4">
                  <img
                    src={current.image}
                    alt={current.author}
                    className="w-12 h-12 rounded-full object-cover border-2 border-warmSand"
                  />
                  <div>
                    <h4 className="font-serif text-lg text-espresso font-semibold">
                      {current.author}
                    </h4>
                    <p className="text-xs text-espresso-muted font-sans font-light">
                      {current.role} • <span className="text-terracotta">{current.location}</span>
                    </p>
                  </div>
                </div>

                {/* Navigation Arrows */}
                <div className="flex items-center gap-3">
                  <button
                    onClick={handlePrev}
                    className="p-3 rounded-full border border-espresso/20 text-espresso hover:border-terracotta hover:text-terracotta hover:bg-terracotta/5 transition-colors"
                    aria-label="Previous Testimonial"
                  >
                    <ChevronLeft className="w-4 h-4" />
                  </button>
                  <button
                    onClick={handleNext}
                    className="p-3 rounded-full border border-espresso/20 text-espresso hover:border-terracotta hover:text-terracotta hover:bg-terracotta/5 transition-colors"
                    aria-label="Next Testimonial"
                  >
                    <ChevronRight className="w-4 h-4" />
                  </button>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Dots Indicator */}
          <div className="flex items-center justify-center gap-2 mt-8">
            {TESTIMONIALS.map((t, idx) => (
              <button
                key={t.id}
                onClick={() => setCurrentIndex(idx)}
                className={`h-1.5 rounded-full transition-all duration-300 ${
                  currentIndex === idx ? 'w-8 bg-terracotta' : 'w-2 bg-warmSand'
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
