import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { JOURNEY_STEPS } from '../data/cafeData';
import { ArrowRight, CheckCircle2, Flame, Droplet, Mountain, Sparkles } from 'lucide-react';

export const CoffeeJourney: React.FC = () => {
  const [activeStep, setActiveStep] = useState<number>(0);
  const current = JOURNEY_STEPS[activeStep];

  const icons = [Mountain, Flame, Droplet, Sparkles];

  return (
    <section id="journey" className="py-24 md:py-36 px-6 sm:px-8 lg:px-12 bg-espresso text-cream relative overflow-hidden">
      {/* Background Section Index Number */}
      <div className="absolute top-12 right-12 select-none pointer-events-none font-serif text-[120px] lg:text-[180px] font-bold text-cream/5 leading-none">
        03
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Header */}
        <div className="max-w-2xl mb-16">
          <div className="inline-flex items-center gap-2 text-terracotta uppercase tracking-[0.3em] text-xs font-semibold mb-3">
            <span className="w-1.5 h-1.5 rounded-full bg-terracotta" />
            <span>Process & Philosophy</span>
          </div>
          <h2 className="font-serif text-4xl sm:text-5xl md:text-6xl text-cream tracking-tight leading-[1.05]">
            From Bean <br />
            <span className="italic font-light text-warmSand">to Moment.</span>
          </h2>
          <p className="mt-4 text-cream/70 text-sm sm:text-base font-sans font-light leading-relaxed">
            Trace the unhurried craft across continents—from volcanic high-altitude soil to the sensory quiet of your first morning sip.
          </p>
        </div>

        {/* Step Progression Bar / Selector */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4 mb-12">
          {JOURNEY_STEPS.map((s, idx) => {
            const Icon = icons[idx];
            const isActive = activeStep === idx;
            return (
              <button
                key={s.step}
                onClick={() => setActiveStep(idx)}
                className={`p-4 sm:p-5 rounded-xl border text-left transition-all duration-300 relative group overflow-hidden ${
                  isActive
                    ? 'bg-cream/10 border-terracotta text-cream shadow-lg'
                    : 'bg-espresso-light/40 border-cream/10 text-cream/60 hover:bg-cream/5 hover:text-cream'
                }`}
              >
                <div className="flex items-center justify-between mb-3">
                  <span className="text-[11px] font-mono tracking-widest text-terracotta font-semibold">
                    {s.step}
                  </span>
                  <Icon className={`w-4 h-4 transition-transform ${isActive ? 'text-terracotta scale-110' : 'text-cream/40'}`} />
                </div>
                <h4 className="font-serif text-base sm:text-lg text-cream font-medium">
                  {s.title}
                </h4>
                <p className="text-[11px] text-cream/50 mt-1 line-clamp-1 font-sans">
                  {s.subtitle}
                </p>

                {isActive && (
                  <motion.div
                    layoutId="activeJourneyIndicator"
                    className="absolute bottom-0 left-0 right-0 h-[2px] bg-terracotta"
                  />
                )}
              </button>
            );
          })}
        </div>

        {/* Dynamic Display Area */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center bg-espresso-light/60 p-6 sm:p-10 rounded-2xl border border-cream/10">
          {/* Left Visual Area with Transition */}
          <div className="lg:col-span-6 relative aspect-[16/11] sm:aspect-[4/3] rounded-xl overflow-hidden shadow-2xl">
            <AnimatePresence mode="wait">
              <motion.div
                key={current.step}
                initial={{ opacity: 0, scale: 1.06 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.98 }}
                transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
                className="w-full h-full relative"
              >
                <img
                  src={current.image}
                  alt={current.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-espresso/80 via-espresso/20 to-transparent" />
                
                <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between text-xs text-cream/90">
                  <span className="px-3 py-1 rounded-full bg-espresso/80 border border-cream/10 text-[10px] uppercase tracking-wider font-semibold">
                    {current.altitudeOrSpec}
                  </span>
                  <span className="font-mono text-terracotta">Step {current.step} of 04</span>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Right Details Narrative */}
          <div className="lg:col-span-6 flex flex-col justify-center space-y-6">
            <AnimatePresence mode="wait">
              <motion.div
                key={current.step}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.5 }}
                className="space-y-5"
              >
                <div>
                  <span className="text-xs uppercase tracking-[0.25em] text-terracotta font-semibold">
                    Phase {current.step}
                  </span>
                  <h3 className="font-serif text-3xl sm:text-4xl text-cream font-normal mt-1">
                    {current.title}
                  </h3>
                  <h5 className="font-serif italic text-lg text-warmSand mt-0.5">
                    {current.subtitle}
                  </h5>
                </div>

                <p className="text-cream/80 text-sm sm:text-base font-sans font-light leading-relaxed">
                  {current.description}
                </p>

                {/* Key Spec Badges */}
                <div className="space-y-2.5 pt-2">
                  {current.details.map((detail, i) => (
                    <div key={i} className="flex items-center gap-2.5 text-xs sm:text-sm text-cream/90">
                      <CheckCircle2 className="w-4 h-4 text-terracotta flex-shrink-0" />
                      <span className="font-sans font-light">{detail}</span>
                    </div>
                  ))}
                </div>

                {/* Next Step Action Button */}
                <div className="pt-4 flex flex-wrap items-center gap-3 sm:gap-4">
                  <button
                    onClick={() => setActiveStep((prev) => (prev + 1) % JOURNEY_STEPS.length)}
                    className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-terracotta hover:bg-terracotta-hover text-offWhite uppercase tracking-[0.18em] text-xs font-semibold transition-colors whitespace-nowrap"
                  >
                    <span className="whitespace-nowrap">{activeStep === 3 ? 'Restart Journey' : 'Next Stage'}</span>
                    <ArrowRight className="w-3.5 h-3.5 flex-shrink-0" />
                  </button>
                  <span className="text-xs text-cream/40 font-mono">
                    Dialed with micro-lot precision
                  </span>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
};
