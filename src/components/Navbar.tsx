import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';

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
            ? 'bg-white/95 backdrop-blur-md shadow-md border-b border-espresso/10 py-3.5'
            : 'bg-black/35 backdrop-blur-md border-b border-white/10 py-4 sm:py-5'
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 flex items-center justify-between">
          {/* Brand Logo */}
          <a
            href="#"
            className="group flex items-center gap-3 focus:outline-none"
            aria-label="CafeDemo Specialty Atelier Home"
          >
            <div className="relative h-9 sm:h-10 flex items-center justify-center flex-shrink-0 group-hover:scale-105 transition-transform duration-300 bg-white/90 p-1 rounded-xl shadow-xs">
              <img
                src="/site-logo.png"
                alt="Cafe Brand Logo"
                className="h-full w-auto object-contain"
              />
            </div>
            <div className="flex flex-col items-start">
              <span className={`font-accent tracking-[0.22em] text-lg sm:text-xl md:text-2xl font-bold uppercase group-hover:text-terracotta transition-colors duration-300 ${
                isScrolled ? 'text-espresso' : 'text-white drop-shadow-sm'
              }`}>
                CAFÉDEMO
              </span>
              <span className={`font-sans text-[9px] tracking-[0.35em] uppercase font-semibold -mt-1 transition-colors ${
                isScrolled ? 'text-espresso/60' : 'text-warmSand'
              }`}>
                Specialty Atelier
              </span>
            </div>
          </a>

          {/* Minimalist Curated Desktop Navigation Links */}
          <nav className={`hidden md:flex items-center space-x-10 text-xs uppercase tracking-[0.25em] font-semibold transition-colors ${
            isScrolled ? 'text-espresso' : 'text-white drop-shadow-xs'
          }`}>
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
                className="px-3.5 py-1.5 rounded-full bg-warmSand/40 text-espresso hover:bg-terracotta hover:text-offWhite transition-colors text-xs font-semibold tracking-wider uppercase"
                title="View Tasting List"
              >
                Tasting List ({savedItemCount})
              </button>
            )}

            {/* Book a Table Button (Desktop/Tablet) */}
            <button
              onClick={onOpenBooking}
              className="hidden sm:inline-flex relative items-center justify-center px-5 sm:px-6 py-2.5 rounded-full overflow-hidden text-xs uppercase tracking-[0.2em] font-semibold text-offWhite bg-terracotta hover:bg-terracotta-hover transition-all duration-300 shadow-sm hover:shadow-md group whitespace-nowrap"
            >
              <span className="relative z-10 flex items-center whitespace-nowrap">
                Book a Table
              </span>
            </button>

            {/* Menu Drawer Toggle (Mobile only) */}
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className={`md:hidden p-2 rounded-full transition-colors focus:outline-none ${
                isScrolled ? 'hover:bg-espresso/5 text-espresso' : 'hover:bg-white/10 text-white'
              }`}
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
            className="fixed inset-0 z-30 bg-white text-espresso flex flex-col justify-between p-8 sm:p-14 pt-28 sm:pt-32 overflow-y-auto"
          >
            {/* Top Links Grid */}
            <div className="max-w-5xl mx-auto w-full">
              <span className="text-[10px] tracking-[0.35em] uppercase text-espresso/60 block mb-6">
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
                    className="group flex flex-col p-3 -mx-3 rounded-xl hover:bg-warmSand/30 transition-colors"
                  >
                    <span className="font-serif text-2xl sm:text-3xl text-espresso group-hover:text-terracotta transition-colors duration-200">
                      {link.label}
                    </span>
                    <span className="text-xs text-espresso-muted font-sans font-light mt-0.5">
                      {link.subtitle}
                    </span>
                  </motion.a>
                ))}
              </div>
            </div>

            {/* Bottom Info & Action Bar */}
            <div className="max-w-5xl mx-auto w-full pt-8 border-t border-espresso/10 mt-8 flex flex-col sm:flex-row items-center justify-between gap-6">
              <div className="flex flex-wrap items-center gap-6 text-xs text-espresso-muted">
                <div>
                  <span>07:30 – 22:00 IST</span>
                </div>
                <div>
                  <span>Lavelle Road, Bengaluru</span>
                </div>
              </div>

              <button
                onClick={() => {
                  setMenuOpen(false);
                  onOpenBooking();
                }}
                className="w-full sm:w-auto px-8 py-3.5 rounded-full bg-terracotta text-offWhite uppercase tracking-[0.2em] text-xs font-semibold hover:bg-terracotta-hover transition-colors flex items-center justify-center"
              >
                <span>Reserve a Table</span>
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};
