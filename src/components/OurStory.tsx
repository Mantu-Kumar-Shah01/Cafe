import React from 'react';
import { motion } from 'framer-motion';
import { Sparkles, HeartHandshake, Award, Leaf } from 'lucide-react';

export const OurStory: React.FC = () => {
  const stats = [
    { value: '100%', label: 'Direct Trade Farm Partnerships', icon: HeartHandshake },
    { value: '88+', label: 'Specialty Q-Grade Minimum', icon: Award },
    { value: 'Zero', label: 'Single-Use Plastic Footprint', icon: Leaf },
    { value: '8kg', label: 'Micro-Batch Roast Limit', icon: Sparkles },
  ];

  return (
    <section id="story" className="py-24 md:py-36 px-6 sm:px-8 lg:px-12 bg-warmSand/40 relative overflow-hidden">
      {/* Background Section Index Number */}
      <div className="absolute top-12 left-12 select-none pointer-events-none font-serif text-[120px] lg:text-[180px] font-bold text-espresso/5 leading-none">
        04
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left Editorial Narrative */}
          <div className="lg:col-span-6 flex flex-col justify-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <div className="inline-flex items-center gap-2 text-terracotta uppercase tracking-[0.3em] text-xs font-semibold mb-4">
                <span className="w-1.5 h-1.5 rounded-full bg-terracotta" />
                <span>Our Heritage & Origin</span>
              </div>

              <h2 className="font-serif text-4xl sm:text-5xl md:text-6xl text-espresso tracking-tight leading-[1.05] mb-8">
                More than <br />
                <span className="italic font-light text-terracotta">just coffee.</span>
              </h2>

              <div className="space-y-5 text-espresso-muted font-sans font-light text-base sm:text-lg leading-relaxed">
                <p>
                  Founded by two architects and a certified Q-Grader, CafeDemo was conceived not merely as a coffee house, but as a deliberate architectural pause in urban life.
                </p>
                <p className="text-sm sm:text-base">
                  We believe that great coffee is an art of patience. From the volcanic altitudes of Yirgacheffe to the thermal calibration of our bespoke roaster, every detail exists to elevate the simple ritual of drinking coffee into a transcendent, sensory experience.
                </p>
              </div>

              {/* Quote Block */}
              <div className="mt-8 p-6 rounded-xl bg-cream/70 border-l-2 border-terracotta">
                <p className="font-serif italic text-lg sm:text-xl text-espresso">
                  "We do not serve haste. We curate presence, one ceramic cup at a time."
                </p>
                <span className="text-xs uppercase tracking-[0.2em] text-espresso/60 font-semibold block mt-3">
                  — Founders & Head Roasters
                </span>
              </div>
            </motion.div>
          </div>

          {/* Right Visual Composition */}
          <div className="lg:col-span-6">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
              className="relative rounded-2xl overflow-hidden shadow-2xl border border-espresso/10 aspect-[4/5]"
            >
              <img
                src="https://images.unsplash.com/photo-1608198093002-ad4e005484ec?q=80&w=1200&auto=format&fit=crop"
                alt="Artisan Pastry and Specialty Coffee Preparation"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-espresso/50 via-transparent to-transparent" />
              
              <div className="absolute bottom-6 left-6 right-6 p-4 rounded-xl glass-card-light border border-espresso/10 text-espresso">
                <p className="text-xs font-semibold uppercase tracking-wider text-terracotta">
                  Direct Harvest Ethos
                </p>
                <p className="text-xs text-espresso-muted mt-0.5">
                  100% single origin traceability back to the farm lot coordinates.
                </p>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Brand Metrics Bar */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-16 pt-12 border-t border-espresso/10">
          {stats.map((stat, i) => {
            const Icon = stat.icon;
            return (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.1 }}
                className="text-center md:text-left"
              >
                <div className="inline-flex p-2.5 rounded-lg bg-cream/80 text-terracotta mb-3">
                  <Icon className="w-5 h-5" />
                </div>
                <div className="font-serif text-3xl sm:text-4xl text-espresso font-normal">
                  {stat.value}
                </div>
                <div className="text-xs text-espresso-muted font-sans font-light mt-1 uppercase tracking-wider">
                  {stat.label}
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
