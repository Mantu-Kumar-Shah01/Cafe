import React, { useState } from 'react';
import { ArrowUp, Send, Check } from 'lucide-react';

export const Footer: React.FC = () => {
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      setSubscribed(true);
      setEmail('');
      setTimeout(() => setSubscribed(false), 4000);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-espresso text-cream pt-24 pb-12 px-6 sm:px-8 lg:px-12 border-t border-cream/10 relative overflow-hidden">
      {/* Background Subtle Noise Texture */}
      <div className="absolute inset-0 bg-noise-pattern opacity-50 pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Large Statement Headline */}
        <div className="mb-20 pb-16 border-b border-cream/10">
          <span className="text-xs uppercase tracking-[0.3em] text-warmSand/60 font-semibold block mb-4">
            The Atelier Motto
          </span>
          <h2 className="font-serif text-4xl sm:text-6xl md:text-7xl lg:text-8xl tracking-tight leading-[0.95] text-cream font-normal">
            COME FOR THE COFFEE. <br />
            <span className="italic text-terracotta font-light">STAY FOR THE MOMENT.</span>
          </h2>
        </div>

        {/* Footer Navigation & Newsletter Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 lg:gap-8 pb-16 border-b border-cream/10">
          {/* Brand & Mission */}
          <div className="lg:col-span-4 space-y-4">
            <div className="flex flex-col items-start">
              <span className="font-accent tracking-[0.25em] text-2xl font-semibold text-cream uppercase">
                L'ÉLIXIR
              </span>
              <span className="font-sans text-[10px] tracking-[0.35em] text-warmSand/70 uppercase font-medium -mt-1">
                Specialty Atelier
              </span>
            </div>
            <p className="text-xs text-cream/70 font-sans font-light leading-relaxed max-w-sm">
              Single-origin micro lots, slow artisanal baking, and acoustic tranquility in Milan. An homage to the deliberate ritual of slowing down.
            </p>
            <div className="pt-2 flex items-center gap-3 text-cream/80">
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noreferrer"
                className="p-2.5 rounded-full border border-cream/20 hover:border-terracotta hover:text-terracotta hover:bg-terracotta/10 transition-colors"
                aria-label="Instagram"
              >
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                </svg>
              </a>
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noreferrer"
                className="p-2.5 rounded-full border border-cream/20 hover:border-terracotta hover:text-terracotta hover:bg-terracotta/10 transition-colors"
                aria-label="Facebook"
              >
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                  <path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z"/>
                </svg>
              </a>
            </div>
          </div>

          {/* Nav Links */}
          <div className="lg:col-span-2 space-y-3">
            <span className="text-xs uppercase tracking-[0.25em] text-warmSand font-semibold block">
              Navigation
            </span>
            <ul className="space-y-2 text-xs text-cream/70 font-sans">
              <li><a href="#menu" className="hover:text-terracotta transition-colors">Signature Menu</a></li>
              <li><a href="#experience" className="hover:text-terracotta transition-colors">The Atmosphere</a></li>
              <li><a href="#journey" className="hover:text-terracotta transition-colors">Bean to Moment</a></li>
              <li><a href="#story" className="hover:text-terracotta transition-colors">Our Story & Heritage</a></li>
              <li><a href="#gallery" className="hover:text-terracotta transition-colors">Visual Anthology</a></li>
              <li><a href="#visit" className="hover:text-terracotta transition-colors">Coordinates & Hours</a></li>
            </ul>
          </div>

          {/* Operating Hours */}
          <div className="lg:col-span-2 space-y-3">
            <span className="text-xs uppercase tracking-[0.25em] text-warmSand font-semibold block">
              Atelier Hours
            </span>
            <div className="space-y-2 text-xs text-cream/70 font-sans">
              <div>
                <p className="text-cream font-medium">Mon — Fri</p>
                <p className="text-cream/50">07:30 – 21:30</p>
              </div>
              <div>
                <p className="text-cream font-medium">Sat — Sun</p>
                <p className="text-cream/50">08:00 – 22:30</p>
              </div>
              <div>
                <p className="text-cream font-medium">Roasting Lab Tours</p>
                <p className="text-cream/50">Wed & Sat at 14:00</p>
              </div>
            </div>
          </div>

          {/* Newsletter Subscription */}
          <div className="lg:col-span-4 space-y-4">
            <span className="text-xs uppercase tracking-[0.25em] text-warmSand font-semibold block">
              The Gazette
            </span>
            <p className="text-xs text-cream/70 font-sans font-light">
              Receive quarterly harvest dispatches, private cupping invitations, and seasonal menu releases.
            </p>
            <form onSubmit={handleSubscribe} className="space-y-2">
              <div className="relative flex items-center">
                <input
                  type="email"
                  placeholder="Enter your email address"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full px-4 py-3 rounded-full bg-cream/10 border border-cream/20 text-cream placeholder:text-cream/40 text-xs focus:outline-none focus:border-terracotta pr-12"
                  required
                />
                <button
                  type="submit"
                  className="absolute right-1.5 p-2 rounded-full bg-terracotta text-offWhite hover:bg-terracotta-hover transition-colors"
                  aria-label="Subscribe"
                >
                  <Send className="w-3.5 h-3.5" />
                </button>
              </div>
              {subscribed && (
                <p className="text-[11px] text-sage flex items-center gap-1 mt-1">
                  <Check className="w-3.5 h-3.5" />
                  <span>Welcome to the circle. Invitation sent.</span>
                </p>
              )}
            </form>
          </div>
        </div>

        {/* Bottom Credits & Back to Top */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px] text-cream/50 font-sans">
          <div>
            © {new Date().getFullYear()} L'ÉLIXIR ATELIER. All rights reserved. Slow living in Milano.
          </div>

          <div className="flex items-center gap-6">
            <a href="#" className="hover:text-cream transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-cream transition-colors">Terroir Provenance</a>
            <button
              onClick={scrollToTop}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full border border-cream/20 hover:border-terracotta hover:text-cream transition-colors text-xs"
            >
              <span>Top</span>
              <ArrowUp className="w-3.5 h-3.5 text-terracotta" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};
