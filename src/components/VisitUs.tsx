import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { MapPin, Clock, Phone, Mail, Navigation, Compass, CalendarCheck, Check } from 'lucide-react';

interface VisitUsProps {
  onOpenBooking: () => void;
}

export const VisitUs: React.FC<VisitUsProps> = ({ onOpenBooking }) => {
  const [copied, setCopied] = useState(false);

  const handleCopyAddress = () => {
    navigator.clipboard.writeText('Via Montenapoleone 18, 20121 Milano MI, Italy');
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  return (
    <section id="visit" className="py-24 md:py-36 px-6 sm:px-8 lg:px-12 bg-cream relative overflow-hidden">
      {/* Background Section Index Number */}
      <div className="absolute top-12 right-12 select-none pointer-events-none font-serif text-[120px] lg:text-[180px] font-bold text-warmSand/25 leading-none">
        07
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left Column: Address, Times & Concierge */}
          <div className="lg:col-span-6 flex flex-col justify-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <div className="inline-flex items-center gap-2 text-terracotta uppercase tracking-[0.3em] text-xs font-semibold mb-3">
                <Compass className="w-3.5 h-3.5" />
                <span>Sanctuary & Coordinates</span>
              </div>

              <h2 className="font-serif text-4xl sm:text-5xl md:text-6xl text-espresso tracking-tight mb-8">
                Visit Us
              </h2>

              <p className="text-espresso-muted text-base sm:text-lg font-sans font-light leading-relaxed mb-10">
                Located in the historic heart of Milan. Step off the cobblestones into a calm, sun-drenched courtyard of specialty coffee and quiet moments.
              </p>
            </motion.div>

            {/* Info Items List */}
            <div className="space-y-6 divide-y divide-espresso/10">
              {/* Address */}
              <div className="pt-4 first:pt-0 flex items-start gap-4">
                <div className="p-3 rounded-full bg-warmSand/40 text-terracotta flex-shrink-0">
                  <MapPin className="w-5 h-5" />
                </div>
                <div className="flex-1">
                  <span className="text-[10px] uppercase tracking-[0.25em] text-espresso/50 font-semibold block mb-0.5">
                    Location
                  </span>
                  <p className="font-serif text-xl text-espresso">
                    Via Montenapoleone 18, 20121 Milano, Italy
                  </p>
                  <p className="text-xs text-espresso-muted mt-0.5">
                    District: Quadrilatero della Moda • Metro: Montenapoleone M3
                  </p>
                </div>
              </div>

              {/* Hours */}
              <div className="pt-6 flex items-start gap-4">
                <div className="p-3 rounded-full bg-warmSand/40 text-terracotta flex-shrink-0">
                  <Clock className="w-5 h-5" />
                </div>
                <div className="flex-1">
                  <span className="text-[10px] uppercase tracking-[0.25em] text-espresso/50 font-semibold block mb-0.5">
                    Opening Hours
                  </span>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-sm">
                    <div>
                      <span className="font-medium text-espresso">Monday – Friday:</span>
                      <p className="text-xs text-espresso-muted">07:30 – 21:30</p>
                    </div>
                    <div>
                      <span className="font-medium text-espresso">Saturday – Sunday:</span>
                      <p className="text-xs text-espresso-muted">08:00 – 22:30</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Contact */}
              <div className="pt-6 flex items-start gap-4">
                <div className="p-3 rounded-full bg-warmSand/40 text-terracotta flex-shrink-0">
                  <Phone className="w-5 h-5" />
                </div>
                <div className="flex-1">
                  <span className="text-[10px] uppercase tracking-[0.25em] text-espresso/50 font-semibold block mb-0.5">
                    Concierge & Enquiries
                  </span>
                  <p className="font-serif text-lg text-espresso">+39 02 8945 7712</p>
                  <p className="text-xs text-espresso-muted">atelier@lelixir-coffee.com</p>
                </div>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-wrap items-center gap-4 mt-10">
              <button
                onClick={handleCopyAddress}
                className="px-6 py-3.5 rounded-full border border-espresso/20 hover:border-espresso text-espresso text-xs font-semibold uppercase tracking-[0.18em] transition-colors inline-flex items-center gap-2"
              >
                {copied ? <Check className="w-3.5 h-3.5 text-sage" /> : <Navigation className="w-3.5 h-3.5 text-terracotta" />}
                <span>{copied ? 'Address Copied!' : 'Copy Address'}</span>
              </button>

              <button
                onClick={onOpenBooking}
                className="px-7 py-3.5 rounded-full bg-terracotta hover:bg-terracotta-hover text-offWhite text-xs font-semibold uppercase tracking-[0.18em] transition-all duration-300 shadow-md inline-flex items-center gap-2"
              >
                <CalendarCheck className="w-3.5 h-3.5" />
                <span>Reserve a Table</span>
              </button>
            </div>
          </div>

          {/* Right Column: Architectural Exterior & Minimalist Map Card */}
          <div className="lg:col-span-6 space-y-6">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl border border-warmSand aspect-[16/11]">
              <img
                src="https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?q=80&w=1200&auto=format&fit=crop"
                alt="Exterior Courtyard of L'Élixir Atelier"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-espresso/60 via-transparent to-transparent" />
              
              <div className="absolute bottom-5 left-5 right-5 flex items-center justify-between text-cream text-xs">
                <span className="font-serif italic text-lg">Historic Courtyard Entrance</span>
                <span className="font-mono text-[10px] text-warmSand uppercase tracking-wider">
                  Valet Available
                </span>
              </div>
            </div>

            {/* Minimalist Stylized Architectural Blueprint Map */}
            <div className="p-6 rounded-2xl bg-offWhite border border-espresso/10 shadow-sm relative">
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-sage animate-ping" />
                  <span className="text-xs font-semibold uppercase tracking-wider text-espresso">
                    Milano Centro Live Status
                  </span>
                </div>
                <span className="text-xs font-mono text-espresso/40">Open for Walk-ins & Reservations</span>
              </div>

              <div className="p-4 rounded-xl bg-warmSand/20 border border-espresso/5 flex items-center justify-between">
                <div>
                  <p className="font-serif text-base text-espresso">Current Atelier Ambience</p>
                  <p className="text-xs text-espresso-muted">Warm Natural Sunlight • Jazz Vinyl Selection</p>
                </div>
                <div className="text-right">
                  <span className="px-2.5 py-1 rounded bg-sage/20 text-sage-dark text-[11px] font-semibold">
                    Moderate Seating Available
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
