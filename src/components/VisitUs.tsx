import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { MapPin, Clock, Phone, Navigation, Compass, CalendarCheck, Check } from 'lucide-react';

interface VisitUsProps {
  onOpenBooking: () => void;
}

export const VisitUs: React.FC<VisitUsProps> = ({ onOpenBooking }) => {
  const [copied, setCopied] = useState(false);

  const handleCopyAddress = () => {
    navigator.clipboard.writeText('Lavelle Road, Shanthala Nagar, Ashok Nagar, Bengaluru, Karnataka 560001, India');
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  return (
    <section id="visit" className="py-20 md:py-36 px-5 sm:px-8 lg:px-12 bg-cream relative overflow-hidden">
      {/* Background Section Index Number */}
      <div className="absolute top-10 right-6 select-none pointer-events-none font-serif text-[90px] sm:text-[140px] lg:text-[180px] font-bold text-warmSand/25 leading-none">
        07
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-center">
          {/* Left Column: Address, Times & Concierge */}
          <div className="lg:col-span-6 flex flex-col justify-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <div className="inline-flex items-center gap-2 text-terracotta uppercase tracking-[0.3em] text-xs font-semibold mb-2 sm:mb-3">
                <Compass className="w-3.5 h-3.5" />
                <span>Sanctuary & Coordinates</span>
              </div>

              <h2 className="font-serif text-3xl sm:text-5xl md:text-6xl text-espresso tracking-tight mb-4 sm:mb-8">
                Visit Us
              </h2>

              <p className="text-espresso-muted text-sm sm:text-base md:text-lg font-sans font-light leading-relaxed mb-8 sm:mb-10">
                Located on tranquil Lavelle Road in Bengaluru. Step off the avenue into a calm sanctuary of single-estate Indian specialty coffee.
              </p>
            </motion.div>

            {/* Info Items List */}
            <div className="space-y-5 sm:space-y-6 divide-y divide-espresso/10">
              {/* Address */}
              <div className="pt-3 sm:pt-4 first:pt-0 flex items-start gap-3 sm:gap-4">
                <div className="p-2.5 sm:p-3 rounded-full bg-warmSand/40 text-terracotta flex-shrink-0">
                  <MapPin className="w-4 h-4 sm:w-5 sm:h-5" />
                </div>
                <div className="flex-1">
                  <span className="text-[9px] sm:text-[10px] uppercase tracking-[0.25em] text-espresso/50 font-semibold block mb-0.5">
                    Location
                  </span>
                  <p className="font-serif text-lg sm:text-xl text-espresso leading-snug">
                    Lavelle Road, Shanthala Nagar, Bengaluru, Karnataka 560001
                  </p>
                  <p className="text-xs text-espresso-muted mt-0.5">
                    District: Central Bengaluru • Metro: MG Road / Cubbon Park Station
                  </p>
                </div>
              </div>

              {/* Hours */}
              <div className="pt-5 sm:pt-6 flex items-start gap-3 sm:gap-4">
                <div className="p-2.5 sm:p-3 rounded-full bg-warmSand/40 text-terracotta flex-shrink-0">
                  <Clock className="w-4 h-4 sm:w-5 sm:h-5" />
                </div>
                <div className="flex-1">
                  <span className="text-[9px] sm:text-[10px] uppercase tracking-[0.25em] text-espresso/50 font-semibold block mb-0.5">
                    Opening Hours
                  </span>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs sm:text-sm">
                    <div>
                      <span className="font-medium text-espresso">Monday – Friday:</span>
                      <p className="text-xs text-espresso-muted">07:30 – 22:00 IST</p>
                    </div>
                    <div>
                      <span className="font-medium text-espresso">Saturday – Sunday:</span>
                      <p className="text-xs text-espresso-muted">08:00 – 23:00 IST</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Contact */}
              <div className="pt-5 sm:pt-6 flex items-start gap-3 sm:gap-4">
                <div className="p-2.5 sm:p-3 rounded-full bg-warmSand/40 text-terracotta flex-shrink-0">
                  <Phone className="w-4 h-4 sm:w-5 sm:h-5" />
                </div>
                <div className="flex-1">
                  <span className="text-[9px] sm:text-[10px] uppercase tracking-[0.25em] text-espresso/50 font-semibold block mb-0.5">
                    Concierge & Enquiries
                  </span>
                  <p className="font-serif text-base sm:text-lg text-espresso">
                    <a href="tel:+918049658820" className="hover:text-terracotta transition-colors">+91 80 4965 8820</a>
                  </p>
                  <p className="text-xs text-espresso-muted">atelier@lelixir-coffee.in</p>
                </div>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-wrap items-center gap-3 sm:gap-4 mt-8 sm:mt-10">
              <button
                onClick={handleCopyAddress}
                className="w-full sm:w-auto px-6 py-3.5 rounded-full border border-espresso/20 hover:border-espresso text-espresso text-xs font-semibold uppercase tracking-[0.18em] transition-colors inline-flex items-center justify-center gap-2"
              >
                {copied ? <Check className="w-3.5 h-3.5 text-sage" /> : <Navigation className="w-3.5 h-3.5 text-terracotta" />}
                <span>{copied ? 'Address Copied!' : 'Copy Address'}</span>
              </button>

              <button
                onClick={onOpenBooking}
                className="w-full sm:w-auto px-7 py-3.5 rounded-full bg-terracotta hover:bg-terracotta-hover text-offWhite text-xs font-semibold uppercase tracking-[0.18em] transition-all duration-300 shadow-md inline-flex items-center justify-center gap-2"
              >
                <CalendarCheck className="w-3.5 h-3.5" />
                <span>Reserve a Table</span>
              </button>
            </div>
          </div>

          {/* Right Column: Exterior & Ambience Card */}
          <div className="lg:col-span-6 space-y-4 sm:space-y-6">
            <div className="relative rounded-3xl overflow-hidden shadow-2xl border border-warmSand aspect-[16/11]">
              <img
                src="https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?q=80&w=1200&auto=format&fit=crop"
                alt="Exterior Courtyard of L'Élixir Atelier Bengaluru"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-espresso/60 via-transparent to-transparent" />
              
              <div className="absolute bottom-4 left-4 right-4 sm:bottom-5 sm:left-5 sm:right-5 flex items-center justify-between text-cream text-xs">
                <span className="font-serif italic text-base sm:text-lg">Lavelle Courtyard Garden</span>
                <span className="font-mono text-[9px] sm:text-[10px] text-warmSand uppercase tracking-wider">
                  Valet Available
                </span>
              </div>
            </div>

            {/* Ambience Card */}
            <div className="p-4 sm:p-6 rounded-2xl bg-offWhite border border-espresso/10 shadow-xs relative">
              <div className="flex items-center justify-between mb-3">
                <div className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-sage animate-ping" />
                  <span className="text-[11px] sm:text-xs font-semibold uppercase tracking-wider text-espresso">
                    Bengaluru Live Status
                  </span>
                </div>
                <span className="text-[10px] sm:text-xs font-mono text-espresso/40">Walk-ins & Reservations</span>
              </div>

              <div className="p-3 sm:p-4 rounded-xl bg-warmSand/20 border border-espresso/5 flex items-center justify-between">
                <div>
                  <p className="font-serif text-sm sm:text-base text-espresso">Current Ambience</p>
                  <p className="text-[11px] sm:text-xs text-espresso-muted">Cool Canopy Breeze • Jazz Vinyl</p>
                </div>
                <div className="text-right">
                  <span className="px-2 sm:px-2.5 py-1 rounded bg-sage/20 text-sage-dark text-[10px] sm:text-[11px] font-semibold">
                    Seating Available
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
