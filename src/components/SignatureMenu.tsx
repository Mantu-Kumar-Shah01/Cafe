import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight, Plus, Check, Sparkles, Coffee, CupSoda, Cake, UtensilsCrossed, ChevronDown } from 'lucide-react';
import { MENU_ITEMS, MenuItem } from '../data/cafeData';

interface SignatureMenuProps {
  onToggleWishlist: (item: MenuItem) => void;
  savedItemIds: string[];
}

export const SignatureMenu: React.FC<SignatureMenuProps> = ({ onToggleWishlist, savedItemIds }) => {
  const [activeCategory, setActiveCategory] = useState<string>('all');
  const [hoveredItem, setHoveredItem] = useState<MenuItem | null>(MENU_ITEMS[0]);

  const categories = [
    { id: 'all', label: 'Curated All', icon: Sparkles },
    { id: 'espresso', label: 'Specialty Espresso & Brew', icon: Coffee },
    { id: 'elixir', label: 'Signature Elixirs', icon: CupSoda },
    { id: 'patisserie', label: 'Artisan Viennoiserie', icon: Cake },
    { id: 'brunch', label: 'Savoury Plates', icon: UtensilsCrossed },
  ];

  const filteredItems = activeCategory === 'all'
    ? MENU_ITEMS
    : MENU_ITEMS.filter((item) => item.category === activeCategory);

  return (
    <section id="menu" className="py-24 md:py-36 px-6 sm:px-8 lg:px-12 bg-offWhite relative overflow-hidden">
      {/* Background Section Index Number */}
      <div className="absolute top-12 right-12 select-none pointer-events-none font-serif text-[120px] lg:text-[180px] font-bold text-warmSand/20 leading-none">
        01
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 pb-8 border-b border-espresso/10 gap-6">
          <div>
            <div className="inline-flex items-center gap-2 text-terracotta uppercase tracking-[0.3em] text-xs font-semibold mb-3">
              <span className="w-1.5 h-1.5 rounded-full bg-terracotta" />
              <span>Sensory Tasting Menu</span>
            </div>
            <h2 className="font-serif text-4xl sm:text-5xl md:text-6xl text-espresso tracking-tight">
              Signature Flavours
            </h2>
          </div>

          <p className="max-w-md text-espresso-muted text-sm sm:text-base font-sans font-light leading-relaxed">
            Every creation is prepared on-demand with unhurried craft, dialed to single-gram precision, and sourced from single-estate producers.
          </p>
        </div>

        {/* Category Filter Pills */}
        <div className="flex items-center gap-2 sm:gap-3 overflow-x-auto pb-4 mb-12 scrollbar-none">
          {categories.map((cat) => {
            const Icon = cat.icon;
            const isActive = activeCategory === cat.id;
            return (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id)}
                className={`inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-xs uppercase tracking-[0.18em] font-semibold whitespace-nowrap transition-all duration-300 ${
                  isActive
                    ? 'bg-espresso text-cream shadow-md'
                    : 'bg-warmSand/30 text-espresso/80 hover:bg-warmSand/60'
                }`}
              >
                <Icon className={`w-3.5 h-3.5 ${isActive ? 'text-terracotta' : 'text-espresso/60'}`} />
                <span>{cat.label}</span>
              </button>
            );
          })}
        </div>

        {/* Editorial Layout: Left Scrollable List + Right Dynamic Sticky Preview */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* Menu Items Scrollable Column */}
          <div className="lg:col-span-7 flex flex-col">
            {/* Scrollable Container with Custom Luxury Scrollbar */}
            <div className="max-h-[620px] overflow-y-auto pr-3 sm:pr-5 menu-scroller divide-y divide-espresso/10 rounded-xl">
              {filteredItems.map((item, index) => {
                const isSaved = savedItemIds.includes(item.id);
                const isHovered = hoveredItem?.id === item.id;

                return (
                  <motion.div
                    key={item.id}
                    initial={{ opacity: 0, y: 15 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: index * 0.05 }}
                    onMouseEnter={() => setHoveredItem(item)}
                    className={`group relative py-6 sm:py-7 transition-colors duration-300 px-4 -mx-2 rounded-xl cursor-pointer ${
                      isHovered ? 'bg-warmSand/25' : 'hover:bg-warmSand/15'
                    }`}
                  >
                    <div className="flex items-start justify-between gap-4">
                      {/* Item Info */}
                      <div className="flex-1">
                        <div className="flex items-center gap-3 mb-1.5">
                          <h3 className="font-serif text-xl sm:text-2xl text-espresso group-hover:text-terracotta transition-colors duration-200">
                            {item.name}
                          </h3>
                          {item.tag && (
                            <span className="px-2 py-0.5 rounded text-[9px] uppercase tracking-wider bg-warmSand text-espresso font-semibold font-sans">
                              {item.tag}
                            </span>
                          )}
                        </div>

                        <p className="text-xs sm:text-sm text-espresso-muted font-sans font-light max-w-lg mb-3">
                          {item.description}
                        </p>

                        {/* Flavor Notes & Origin */}
                        {item.notes && item.notes.length > 0 && (
                          <div className="flex flex-wrap items-center gap-1.5">
                            <span className="text-[10px] uppercase tracking-wider text-espresso/40 font-semibold mr-1">
                              Notes:
                            </span>
                            {item.notes.map((note, i) => (
                              <span
                                key={i}
                                className="text-[10px] tracking-wide px-2 py-0.5 rounded-full bg-cream text-espresso/70 border border-espresso/5"
                              >
                                {note}
                              </span>
                            ))}
                          </div>
                        )}
                      </div>

                      {/* Price & Action */}
                      <div className="flex flex-col items-end justify-between h-full space-y-3">
                        <span className="font-serif text-xl sm:text-2xl font-normal text-espresso">
                          {item.price}
                        </span>

                        <button
                          onClick={(e) => {
                            e.stopPropagation();
                            onToggleWishlist(item);
                          }}
                          className={`p-2 rounded-full transition-all duration-200 ${
                            isSaved
                              ? 'bg-terracotta text-offWhite'
                              : 'bg-warmSand/40 text-espresso hover:bg-terracotta hover:text-offWhite'
                          }`}
                          title={isSaved ? 'Remove from tasting list' : 'Add to tasting list'}
                        >
                          {isSaved ? <Check className="w-3.5 h-3.5" /> : <Plus className="w-3.5 h-3.5" />}
                        </button>
                      </div>
                    </div>

                    {/* Mobile inline thumbnail */}
                    <div className="lg:hidden mt-4 pt-3 flex items-center gap-3">
                      <img
                        src={item.image}
                        alt={item.name}
                        className="w-16 h-16 rounded-lg object-cover shadow-sm"
                      />
                      {item.origin && (
                        <span className="text-[11px] text-espresso/60 italic font-serif">
                          Terroir: {item.origin}
                        </span>
                      )}
                    </div>
                  </motion.div>
                );
              })}
            </div>

            {/* List Bottom Scroll Hint */}
            <div className="pt-4 flex items-center justify-between text-[11px] text-espresso/50 border-t border-espresso/10 mt-2">
              <span className="font-mono">
                Showing {filteredItems.length} curated selections
              </span>
              <div className="flex items-center gap-1.5 text-terracotta font-medium">
                <span>Scroll to explore full flight</span>
                <ChevronDown className="w-3.5 h-3.5 animate-bounce" />
              </div>
            </div>
          </div>

          {/* Right Column: High-End Live Editorial Showcase (Desktop Sticky) */}
          <div className="hidden lg:block lg:col-span-5 sticky top-32">
            <AnimatePresence mode="wait">
              {hoveredItem && (
                <motion.div
                  key={hoveredItem.id}
                  initial={{ opacity: 0, scale: 0.96 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.96 }}
                  transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
                  className="rounded-2xl overflow-hidden bg-cream border border-warmSand shadow-xl p-6"
                >
                  {/* Photo with slight scale */}
                  <div className="relative aspect-[4/3] rounded-xl overflow-hidden mb-6 bg-espresso/5">
                    <img
                      src={hoveredItem.image}
                      alt={hoveredItem.name}
                      className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
                    />
                    <div className="absolute top-3 right-3 px-3 py-1 rounded-full glass-card-dark text-offWhite text-xs font-serif font-semibold">
                      {hoveredItem.price}
                    </div>
                  </div>

                  {/* Editorial Details */}
                  <div className="space-y-4">
                    <div>
                      <span className="text-[10px] uppercase tracking-[0.25em] text-terracotta font-semibold">
                        Selected Tasting
                      </span>
                      <h4 className="font-serif text-2xl text-espresso font-normal mt-1">
                        {hoveredItem.name}
                      </h4>
                    </div>

                    <p className="text-xs text-espresso-muted leading-relaxed font-sans font-light">
                      {hoveredItem.description}
                    </p>

                    {hoveredItem.origin && (
                      <div className="pt-3 border-t border-espresso/10 flex items-center justify-between text-xs">
                        <span className="text-espresso/60 uppercase tracking-wider text-[10px]">Origin:</span>
                        <span className="font-serif italic text-espresso">{hoveredItem.origin}</span>
                      </div>
                    )}

                    {hoveredItem.elevation && (
                      <div className="flex items-center justify-between text-xs">
                        <span className="text-espresso/60 uppercase tracking-wider text-[10px]">Elevation:</span>
                        <span className="font-sans text-espresso font-medium">{hoveredItem.elevation}</span>
                      </div>
                    )}

                    <button
                      onClick={() => onToggleWishlist(hoveredItem)}
                      className="w-full py-3 mt-2 rounded-full border border-terracotta text-terracotta hover:bg-terracotta hover:text-offWhite uppercase tracking-[0.2em] text-xs font-semibold transition-all duration-300 flex items-center justify-center gap-2"
                    >
                      <span>{savedItemIds.includes(hoveredItem.id) ? 'In Tasting Wishlist' : 'Add to Tasting Wishlist'}</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </button>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
};
