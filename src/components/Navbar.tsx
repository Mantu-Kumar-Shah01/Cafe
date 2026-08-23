import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, ArrowUpRight, Clock, MapPin, Sparkles } from 'lucide-react';

interface NavbarProps {
  onOpenBooking: () => void;
  savedItemCount?: number;
  onOpenWishlist?: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenBooking, savedItemCount = 0, onOpenWishlist }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 40);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Primary curated desktop links
  const primaryLinks = [
    { label: 'Menu', href: '#menu' },
    { label: 'Experience', href: '#experience' },
    { label: 'Our Story', href: '#story' },
    { label: 'Visit', href: '#visit' },
  ];

  // Full archive of links in the luxury drawer
  const allNavLinks = [
    { label: 'Signature Menu', href: '#menu', subtitle: 'Sensory tasting flights & single-origin espresso' },
    { label: 'The Atmosphere', href: '#experience', subtitle: 'Architectural tranquility & acoustic sanctuary' },
    { label: 'Bean to Moment', href: '#journey', subtitle: 'Western Ghats terroir & Nordic roast curves' },
    { label: 'Our Heritage', href: '#story', subtitle: 'Direct-trade ethos & micro-lot philosophy' },
    { label: 'Visual Anthology', href: '#gallery', subtitle: 'Moments captured inside the atelier' },
    { label: 'Accolades', href: '#testimonials', subtitle: 'Words from guests, architects & critics' },
    { label: 'Coordinates & Hours', href: '#visit', subtitle: 'Lavelle Road, Bengaluru sanctuary' },
  ];

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-500 ${
          isScrolled
            ? 'glass-nav shadow-sm border-b border-espresso/5 py-3.5'
            : 'bg-transparent py-6 md:py-7'
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 flex items-center justify-between">
          {/* Brand Logo */}
          <a
            href="#"
            className="group flex flex-col items-start focus:outline-none"
            aria-label="CafeDemo Specialty Atelier Home"
          >
            <span className="font-accent tracking-[0.22em] text-lg sm:text-xl md:text-2xl font-semibold text-espresso uppercase group-hover:text-terracotta transition-colors duration-300">
              CAFÉDEMO
            </span>
            <span className="font-sans text-[9px] tracking-[0.35em] text-espresso/60 uppercase font-medium -mt-1 group-hover:text-espresso transition-colors">
              Specialty Atelier
            </span>
          </a>

          {/* Minimalist Curated Desktop Navigation Links */}
          <nav className="hidden md:flex items-center space-x-10 text-xs uppercase tracking-[0.25em] font-medium text-espresso/80">
            {primaryLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="relative py-1 hover:text-terracotta transition-colors duration-200 group"
              >
                {link.label}
                <span className="absolute bottom-0 left-0 w-0 h-[1.5px] bg-terracotta transition-all duration-300 group-hover:w-full" />
              </a>
            ))}
          </nav>

          {/* CTA & Actions */}
          <div className="flex items-center space-x-3 sm:space-x-4">
            {savedItemCount > 0 && (
              <button
                onClick={onOpenWishlist}
                className="relative p-2.5 rounded-full hover:bg-espresso/5 text-espresso transition-colors"
                title="View Tasting List"
              >
                <Sparkles className="w-4 h-4 text-terracotta" />
                <span className="absolute -top-1 -right-1 w-4 h-4 rounded-full bg-terracotta text-offWhite text-[10px] flex items-center justify-center font-bold">
                  {savedItemCount}
                </span>
              </button>
            )}

            {/* Book a Table Button (Desktop/Tablet) */}
            <button
              onClick={onOpenBooking}
              className="hidden sm:inline-flex relative items-center justify-center px-5 sm:px-6 py-2.5 rounded-full overflow-hidden text-xs uppercase tracking-[0.2em] font-semibold text-offWhite bg-terracotta hover:bg-terracotta-hover transition-all duration-300 shadow-sm hover:shadow-md group whitespace-nowrap"
            >
              <span className="relative z-10 flex items-center gap-1.5 whitespace-nowrap">
                <span>Book a Table</span>
                <ArrowUpRight className="w-3.5 h-3.5 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </span>
            </button>

            {/* Menu Drawer Toggle */}
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className="p-2 rounded-full hover:bg-espresso/5 text-espresso transition-colors focus:outline-none"
              aria-label={menuOpen ? 'Close Menu' : 'Open Full Menu'}
            >
              {menuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </header>

      {/* Luxury Fullscreen Navigation Drawer */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -15 }}
            transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
            className="fixed inset-0 z-30 bg-espresso text-cream flex flex-col justify-between p-8 sm:p-14 pt-28 sm:pt-32 overflow-y-auto"
          >
            {/* Top Links Grid */}
            <div className="max-w-5xl mx-auto w-full">
              <span className="text-[10px] tracking-[0.35em] uppercase text-warmSand/60 block mb-6">
                Atelier Directory
              </span>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
                {allNavLinks.map((link, idx) => (
                  <motion.a
                    key={link.label}
                    href={link.href}
                    onClick={() => setMenuOpen(false)}
                    initial={{ opacity: 0, x: -15 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.04 * idx, duration: 0.3 }}
                    className="group flex flex-col p-3 -mx-3 rounded-xl hover:bg-cream/5 transition-colors"
                  >
                    <span className="font-serif text-2xl sm:text-3xl text-cream group-hover:text-terracotta transition-colors duration-200">
                      {link.label}
                    </span>
                    <span className="text-xs text-cream/50 font-sans font-light mt-0.5">
                      {link.subtitle}
                    </span>
                  </motion.a>
                ))}
              </div>
            </div>

            {/* Bottom Info & Action Bar */}
            <div className="max-w-5xl mx-auto w-full pt-8 border-t border-cream/10 mt-8 flex flex-col sm:flex-row items-center justify-between gap-6">
              <div className="flex flex-wrap items-center gap-6 text-xs text-cream/70">
                <div className="flex items-center gap-2">
                  <Clock className="w-4 h-4 text-terracotta" />
                  <span>07:30 – 22:00 IST</span>
                </div>
                <div className="flex items-center gap-2">
                  <MapPin className="w-4 h-4 text-terracotta" />
                  <span>Lavelle Road, Bengaluru</span>
                </div>
              </div>

              <button
                onClick={() => {
                  setMenuOpen(false);
                  onOpenBooking();
                }}
                className="w-full sm:w-auto px-8 py-3.5 rounded-full bg-terracotta text-offWhite uppercase tracking-[0.2em] text-xs font-semibold hover:bg-terracotta-hover transition-colors flex items-center justify-center gap-2"
              >
                <span>Reserve a Table</span>
                <ArrowUpRight className="w-4 h-4" />
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};
