import React, { useState, useRef } from 'react';
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
  const filterContainerRef = useRef<HTMLDivElement>(null);

  const categories = [
    { id: 'all', label: 'Curated All', icon: Sparkles },
    { id: 'espresso', label: 'Specialty Brew', icon: Coffee },
    { id: 'elixir', label: 'Signature Elixirs', icon: CupSoda },
    { id: 'patisserie', label: 'Artisan Bakery', icon: Cake },
    { id: 'brunch', label: 'Savoury Plates', icon: UtensilsCrossed },
  ];

  const handleCategoryClick = (catId: string, e: React.MouseEvent<HTMLButtonElement>) => {
    setActiveCategory(catId);
    e.currentTarget.scrollIntoView({
      behavior: 'smooth',
      inline: 'center',
      block: 'nearest',
    });
  };

  const filteredItems = activeCategory === 'all'
    ? MENU_ITEMS
    : MENU_ITEMS.filter((item) => item.category === activeCategory);

  return (
    <section id="menu" className="py-20 md:py-36 px-4 sm:px-8 lg:px-12 bg-offWhite relative overflow-hidden">
      {/* Background Section Index Number */}
      <div className="absolute top-10 right-6 select-none pointer-events-none font-serif text-[90px] sm:text-[140px] lg:text-[180px] font-bold text-warmSand/20 leading-none">
        01
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 md:mb-16 pb-6 md:pb-8 border-b border-espresso/10 gap-4 md:gap-6">
          <div>
            <div className="inline-flex items-center gap-2 text-terracotta uppercase tracking-[0.3em] text-xs font-semibold mb-2 md:mb-3">
              <span className="w-1.5 h-1.5 rounded-full bg-terracotta" />
              <span>Sensory Tasting Menu</span>
            </div>
            <h2 className="font-serif text-3xl sm:text-5xl md:text-6xl text-espresso tracking-tight">
              Signature Flavours
            </h2>
          </div>

          <p className="max-w-md text-espresso-muted text-xs sm:text-base font-sans font-light leading-relaxed">
            Every creation is dialed to single-gram precision with unhurried craft, roasted in micro-lots, and sourced from single-estate Indian and global farms.
          </p>
        </div>

        {/* Category Filter Pills (Auto-Scrolls into View on Click) */}
        <div
          ref={filterContainerRef}
          className="flex items-center gap-2 sm:gap-3 overflow-x-auto pb-4 mb-8 sm:mb-12 scrollbar-none -mx-4 px-4 sm:mx-0 sm:px-0 scroll-smooth"
        >
          {categories.map((cat) => {
            const Icon = cat.icon;
            const isActive = activeCategory === cat.id;
            return (
              <button
                key={cat.id}
                onClick={(e) => handleCategoryClick(cat.id, e)}
                className={`inline-flex items-center gap-2 px-4 sm:px-5 py-2.5 rounded-full text-xs uppercase tracking-[0.16em] font-semibold whitespace-nowrap transition-all duration-300 flex-shrink-0 ${
                  isActive
                    ? 'bg-espresso text-cream shadow-md scale-[1.02]'
                    : 'bg-warmSand/30 text-espresso/80 hover:bg-warmSand/60'
                }`}
              >
                <Icon className={`w-3.5 h-3.5 ${isActive ? 'text-terracotta' : 'text-espresso/60'}`} />
                <span>{cat.label}</span>
              </button>
            );
          })}
        </div>

        {/* Editorial Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 items-start">
          {/* Menu Items Column */}
          <div className="lg:col-span-7 flex flex-col">
            {/* Scrollable Container with Custom Luxury Scrollbar */}
            <div className="max-h-[640px] overflow-y-auto pr-1 sm:pr-4 menu-scroller divide-y divide-espresso/10 rounded-2xl">
              {filteredItems.map((item, index) => {
                const isSaved = savedItemIds.includes(item.id);
                const isHovered = hoveredItem?.id === item.id;

                return (
                  <motion.div
                    key={item.id}
                    initial={{ opacity: 0, y: 15 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: index * 0.04 }}
                    onMouseEnter={() => setHoveredItem(item)}
                    onClick={() => setHoveredItem(item)}
                    className={`group relative py-4 sm:py-6 transition-all duration-300 px-3 sm:px-4 rounded-2xl cursor-pointer ${
                      isHovered ? 'bg-warmSand/30 shadow-xs' : 'hover:bg-warmSand/15'
                    }`}
                  >
                    <div className="flex items-start gap-3 sm:gap-4">
                      {/* Mobile Thumbnail */}
                      <div className="relative w-16 h-16 sm:w-20 sm:h-20 rounded-xl overflow-hidden bg-espresso/5 flex-shrink-0 lg:hidden mt-0.5">
                        <img
                          src={item.image}
                          alt={item.name}
                          className="w-full h-full object-cover"
                        />
                      </div>

                      {/* Item Content */}
                      <div className="flex-1 min-w-0">
                        {/* Title & Price Header Row */}
                        <div className="flex items-baseline justify-between gap-2 mb-1">
                          <div className="flex flex-wrap items-center gap-1.5 flex-1 min-w-0">
                            <h3 className="font-serif text-base sm:text-xl md:text-2xl text-espresso group-hover:text-terracotta transition-colors duration-200 leading-snug break-words">
                              {item.name}
                            </h3>
                            {item.tag && (
                              <span className="px-2 py-0.5 rounded text-[8px] sm:text-[9px] uppercase tracking-wider bg-warmSand text-espresso font-semibold font-sans flex-shrink-0">
                                {item.tag}
                              </span>
                            )}
                          </div>

                          <span className="font-serif text-base sm:text-xl md:text-2xl font-normal text-espresso flex-shrink-0 ml-1">
                            {item.price}
                          </span>
                        </div>

                        {/* Description */}
                        <p className="text-xs text-espresso-muted font-sans font-light mb-2.5 line-clamp-2 sm:line-clamp-none">
                          {item.description}
                        </p>

                        {/* Flavor Notes & Action Bottom Row */}
                        <div className="flex items-center justify-between gap-2 pt-1">
                          <div className="flex flex-wrap items-center gap-1 overflow-hidden">
                            {item.notes && item.notes.slice(0, 3).map((note, i) => (
                              <span
                                key={i}
                                className="text-[9px] sm:text-[10px] tracking-wide px-2 py-0.5 rounded-full bg-cream text-espresso/70 border border-espresso/5 truncate"
                              >
                                {note}
                              </span>
                            ))}
                          </div>

                          <button
                            onClick={(e) => {
                              e.stopPropagation();
                              onToggleWishlist(item);
                            }}
                            className={`p-2 sm:p-2.5 rounded-full transition-all duration-200 shadow-xs flex-shrink-0 ${
                              isSaved
                                ? 'bg-terracotta text-offWhite'
                                : 'bg-warmSand/40 text-espresso hover:bg-terracotta hover:text-offWhite'
                            }`}
                            title={isSaved ? 'Remove from tasting flight' : 'Add to tasting flight'}
                            aria-label={`Save ${item.name} to tasting wishlist`}
                          >
                            {isSaved ? <Check className="w-3.5 h-3.5" /> : <Plus className="w-3.5 h-3.5" />}
                          </button>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                );
              })}
            </div>

            {/* List Bottom Hint */}
            <div className="pt-3 flex items-center justify-between text-[11px] text-espresso/50 border-t border-espresso/10 mt-3 px-1">
              <span className="font-mono">
                {filteredItems.length} curated selections
              </span>
              <div className="flex items-center gap-1 text-terracotta font-medium text-xs">
                <span>Scroll for full flight</span>
                <ChevronDown className="w-3.5 h-3.5 animate-bounce" />
              </div>
            </div>
          </div>

          {/* Right Column: High-End Live Editorial Showcase (Desktop/Tablet Sticky) */}
          <div className="hidden lg:block lg:col-span-5 sticky top-28">
            <AnimatePresence mode="wait">
              {hoveredItem && (
                <motion.div
                  key={hoveredItem.id}
                  initial={{ opacity: 0, scale: 0.96 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.96 }}
                  transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
                  className="rounded-3xl overflow-hidden bg-cream border border-warmSand shadow-xl p-6"
                >
                  {/* Photo */}
                  <div className="relative aspect-[4/3] rounded-2xl overflow-hidden mb-6 bg-espresso/5">
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
                        <span className="text-espresso/60 uppercase tracking-wider text-[10px]">Terroir:</span>
                        <span className="font-serif italic text-espresso">{hoveredItem.origin}</span>
                      </div>
                    )}

                    {hoveredItem.elevation && (
                      <div className="flex items-center justify-between text-xs">
                        <span className="text-espresso/60 uppercase tracking-wider text-[10px]">Altitude:</span>
                        <span className="font-sans text-espresso font-medium">{hoveredItem.elevation}</span>
                      </div>
                    )}

                    <button
                      onClick={() => onToggleWishlist(hoveredItem)}
                      className="w-full py-3.5 mt-2 rounded-full border border-terracotta text-terracotta hover:bg-terracotta hover:text-offWhite uppercase tracking-[0.2em] text-xs font-semibold transition-all duration-300 flex items-center justify-center gap-2"
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
