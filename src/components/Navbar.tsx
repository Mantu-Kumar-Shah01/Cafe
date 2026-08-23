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
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 40);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'Menu', href: '#menu' },
    { label: 'Experience', href: '#experience' },
    { label: 'Journey', href: '#journey' },
    { label: 'Our Story', href: '#story' },
    { label: 'Gallery', href: '#gallery' },
    { label: 'Accolades', href: '#testimonials' },
    { label: 'Visit', href: '#visit' },
  ];

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-500 ${
          isScrolled
            ? 'glass-nav shadow-sm border-b border-espresso/5 py-3.5'
            : 'bg-transparent py-6 md:py-8'
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 flex items-center justify-between">
          {/* Brand Logo */}
          <a
            href="#"
            className="group flex flex-col items-start focus:outline-none"
            aria-label="L'Élixir Atelier Home"
          >
            <span className="font-accent tracking-[0.25em] text-lg sm:text-xl md:text-2xl font-semibold text-espresso uppercase group-hover:text-terracotta transition-colors duration-300">
              L'ÉLIXIR
            </span>
            <span className="font-sans text-[9px] tracking-[0.35em] text-espresso/60 uppercase font-medium -mt-1 group-hover:text-espresso transition-colors">
              Specialty Atelier
            </span>
          </a>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center space-x-8 text-xs uppercase tracking-[0.2em] font-medium text-espresso/80">
            {navLinks.map((link) => (
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
          <div className="hidden sm:flex items-center space-x-4">
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

            <button
              onClick={onOpenBooking}
              className="relative inline-flex items-center justify-center px-6 py-2.5 rounded-full overflow-hidden text-xs uppercase tracking-[0.2em] font-semibold text-offWhite bg-terracotta hover:bg-terracotta-hover transition-all duration-300 shadow-sm hover:shadow-md group"
            >
              <span className="relative z-10 flex items-center gap-1.5">
                Book a Table
                <ArrowUpRight className="w-3.5 h-3.5 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </span>
            </button>
          </div>

          {/* Mobile Menu Trigger Button */}
          <div className="flex sm:hidden items-center space-x-2">
            <button
              onClick={onOpenBooking}
              className="px-3.5 py-1.5 rounded-full text-[10px] uppercase tracking-wider font-semibold text-offWhite bg-terracotta hover:bg-terracotta-hover transition-colors"
            >
              Reserve
            </button>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 text-espresso hover:text-terracotta transition-colors focus:outline-none"
              aria-label={mobileMenuOpen ? 'Close Menu' : 'Open Menu'}
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Fullscreen Animated Overlay */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
            className="fixed inset-0 z-30 bg-espresso text-cream flex flex-col justify-between p-8 pt-28 lg:hidden"
          >
            {/* Top Links */}
            <div className="flex flex-col space-y-5">
              <span className="text-[10px] tracking-[0.3em] uppercase text-warmSand/60">
                Navigation
              </span>
              {navLinks.map((link, idx) => (
                <motion.a
                  key={link.label}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.05 * idx, duration: 0.3 }}
                  className="font-serif text-3xl sm:text-4xl text-cream hover:text-terracotta transition-colors duration-200"
                >
                  {link.label}
                </motion.a>
              ))}
            </div>

            {/* Bottom Info & Book Button */}
            <div className="space-y-6 pt-8 border-t border-cream/10">
              <div className="flex items-center gap-6 text-xs text-cream/70">
                <div className="flex items-center gap-1.5">
                  <Clock className="w-3.5 h-3.5 text-terracotta" />
                  <span>07:30 – 22:00</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <MapPin className="w-3.5 h-3.5 text-terracotta" />
                  <span>Via Montenapoleone 18</span>
                </div>
              </div>

              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenBooking();
                }}
                className="w-full py-4 rounded-full bg-terracotta text-offWhite uppercase tracking-[0.2em] text-xs font-semibold hover:bg-terracotta-hover transition-colors flex items-center justify-center gap-2"
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
