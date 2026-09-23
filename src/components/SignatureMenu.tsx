import React, { useState, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
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
    { id: 'all', label: 'Curated All' },
    { id: 'espresso', label: 'Specialty Brew' },
    { id: 'elixir', label: 'Signature Elixirs' },
    { id: 'patisserie', label: 'Artisan Bakery' },
    { id: 'brunch', label: 'Savoury Plates' },
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
    <section id="menu" className="py-12 md:py-16 lg:py-20 px-4 sm:px-8 lg:px-12 bg-white relative overflow-hidden">
      {/* Background Section Index Number */}
      <motion.div 
        initial={{ opacity: 0, x: 30 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 1 }}
        className="absolute top-10 right-6 select-none pointer-events-none font-serif text-[90px] sm:text-[140px] lg:text-[180px] font-bold text-warmSand/20 leading-none"
      >
        01
      </motion.div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 md:mb-16 pb-6 md:pb-8 border-b border-espresso/10 gap-4 md:gap-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="inline-flex items-center gap-2 text-terracotta uppercase tracking-[0.3em] text-xs font-semibold mb-2 md:mb-3">
              <span className="w-1.5 h-1.5 rounded-full bg-terracotta" />
              <span>Sensory Tasting Menu</span>
            </div>
            <h2 className="font-serif text-3xl sm:text-5xl md:text-6xl text-espresso tracking-tight">
              Signature Flavours
            </h2>
          </motion.div>

          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="max-w-md text-espresso-muted text-xs sm:text-base font-sans font-light leading-relaxed"
          >
            Every creation is dialed to single-gram precision with unhurried craft, roasted in micro-lots, and sourced from single-estate Indian and global farms.
          </motion.p>
        </div>

        {/* Category Filter Pills */}
        <div
          ref={filterContainerRef}
          className="flex items-center gap-2 sm:gap-3 overflow-x-auto pb-4 mb-8 sm:mb-12 scrollbar-none -mx-4 px-4 sm:mx-0 sm:px-0 scroll-smooth"
        >
          {categories.map((cat) => {
            const isActive = activeCategory === cat.id;
            return (
              <motion.button
                key={cat.id}
                onClick={(e) => handleCategoryClick(cat.id, e)}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                transition={{ type: 'spring', stiffness: 400, damping: 25 }}
                className={`inline-flex items-center px-4 sm:px-5 py-2.5 rounded-full text-xs uppercase tracking-[0.16em] font-semibold whitespace-nowrap transition-colors duration-300 flex-shrink-0 ${
                  isActive
                    ? 'bg-espresso text-cream shadow-md'
                    : 'bg-warmSand/30 text-espresso/80 hover:bg-warmSand/60'
                }`}
              >
                <span>{cat.label}</span>
              </motion.button>
            );
          })}
        </div>

        {/* Editorial Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 items-start">
          {/* Menu Items Column */}
          <div className="lg:col-span-7 flex flex-col">
            {/* Scrollable Cards Container */}
            <div className="max-h-[660px] overflow-y-auto pr-1 sm:pr-3 menu-scroller space-y-4 p-1">
              <AnimatePresence mode="popLayout">
                {filteredItems.map((item, index) => {
                  const isSaved = savedItemIds.includes(item.id);
                  const isHovered = hoveredItem?.id === item.id;

                  return (
                    <motion.div
                      layout
                      key={item.id}
                      initial={{ opacity: 0, y: 15 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, scale: 0.98 }}
                      transition={{ duration: 0.3, delay: index * 0.03 }}
                      onMouseEnter={() => setHoveredItem(item)}
                      onClick={() => setHoveredItem(item)}
                      className={`group relative p-4 sm:p-5 rounded-3xl border transition-all duration-300 cursor-pointer ${
                        isHovered
                          ? 'bg-cream border-terracotta shadow-md ring-1 ring-terracotta/20 scale-[1.01]'
                          : 'bg-[#FDFBF7] border-warmSand hover:border-terracotta/50 hover:bg-cream shadow-xs'
                      }`}
                    >
                      <div className="flex items-start gap-4">
                        {/* Item Card Image Thumbnail */}
                        <div className="relative w-20 h-20 sm:w-24 sm:h-24 rounded-2xl overflow-hidden bg-espresso/5 flex-shrink-0 shadow-xs group-hover:scale-105 transition-transform duration-500">
                          <img
                            src={item.image}
                            alt={item.name}
                            className="w-full h-full object-cover"
                          />
                        </div>

                        {/* Item Card Content */}
                        <div className="flex-1 min-w-0 flex flex-col justify-between min-h-[96px]">
                          <div>
                            {/* Category Tag & Price Header */}
                            <div className="flex items-start justify-between gap-2 mb-1">
                              <div>
                                <span className="text-[9px] uppercase tracking-[0.22em] text-terracotta font-semibold block">
                                  {item.tag || item.category}
                                </span>
                                <h3 className="font-serif text-base sm:text-lg text-espresso group-hover:text-terracotta transition-colors leading-snug">
                                  {item.name}
                                </h3>
                              </div>

                              <span className="px-3 py-1 rounded-full bg-espresso text-cream font-serif text-xs font-semibold shadow-xs flex-shrink-0">
                                {item.price}
                              </span>
                            </div>

                            {/* Description */}
                            <p className="text-xs text-espresso-muted font-sans font-light line-clamp-2 mt-0.5 leading-relaxed">
                              {item.description}
                            </p>
                          </div>

                          {/* Flavor Notes & Action Bottom Row */}
                          <div className="flex items-center justify-between gap-2 pt-2.5 mt-2 border-t border-espresso/10">
                            <div className="flex flex-wrap items-center gap-1 overflow-hidden">
                              {item.notes && item.notes.slice(0, 3).map((note, i) => (
                                <span
                                  key={i}
                                  className="text-[9px] tracking-wide px-2.5 py-0.5 rounded-full bg-warmSand/40 text-espresso/80 font-medium"
                                >
                                  {note}
                                </span>
                              ))}
                            </div>

                            <motion.button
                              whileTap={{ scale: 0.9 }}
                              whileHover={{ scale: 1.05 }}
                              onClick={(e) => {
                                e.stopPropagation();
                                onToggleWishlist(item);
                              }}
                              className={`px-3.5 py-1.5 rounded-full text-[10px] uppercase font-semibold tracking-wider transition-all duration-200 shadow-xs flex-shrink-0 ${
                                isSaved
                                  ? 'bg-terracotta text-offWhite'
                                  : 'bg-warmSand/50 text-espresso hover:bg-terracotta hover:text-offWhite'
                              }`}
                              title={isSaved ? 'Remove from tasting flight' : 'Add to tasting flight'}
                              aria-label={`Save ${item.name} to tasting wishlist`}
                            >
                              {isSaved ? 'Saved' : 'Add'}
                            </motion.button>
                          </div>
                        </div>
                      </div>
                    </motion.div>
                  );
                })}
              </AnimatePresence>
            </div>

            {/* List Bottom Hint */}
            <div className="pt-3 flex items-center justify-between text-[11px] text-espresso/50 border-t border-espresso/10 mt-3 px-1">
              <span className="font-mono">
                {filteredItems.length} curated selections
              </span>
              <div className="flex items-center gap-1 text-terracotta font-medium text-xs">
                <span>Scroll for full flight</span>
              </div>
            </div>
          </div>

          {/* Right Column: High-End Live Editorial Showcase */}
          <div className="hidden lg:block lg:col-span-5 sticky top-24">
            <AnimatePresence mode="wait">
              {hoveredItem && (
                <motion.div
                  key={hoveredItem.id}
                  initial={{ opacity: 0, scale: 0.95, y: 10 }}
                  animate={{ opacity: 1, scale: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.95, y: -10 }}
                  transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
                  className="rounded-3xl overflow-hidden bg-cream border border-warmSand shadow-xl p-6"
                >
                  {/* Photo */}
                  <div className="relative aspect-[4/3] max-h-[260px] w-full rounded-2xl overflow-hidden mb-4 bg-espresso/5 shadow-xs group">
                    <img
                      src={hoveredItem.image}
                      alt={hoveredItem.name}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                    <div className="absolute top-3 right-3 px-3 py-1 rounded-full glass-card-dark text-offWhite text-xs font-serif font-semibold">
                      {hoveredItem.price}
                    </div>
                  </div>

                  {/* Editorial Details */}
                  <div className="space-y-3">
                    <div>
                      <span className="text-[10px] uppercase tracking-[0.25em] text-terracotta font-semibold">
                        Selected Tasting
                      </span>
                      <h4 className="font-serif text-2xl text-espresso font-normal leading-snug mt-0.5">
                        {hoveredItem.name}
                      </h4>
                    </div>

                    <p className="text-xs text-espresso-muted leading-relaxed font-sans font-light line-clamp-2">
                      {hoveredItem.description}
                    </p>

                    {hoveredItem.origin && (
                      <div className="pt-2.5 border-t border-espresso/10 flex items-center justify-between text-xs">
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

                    <motion.button
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.97 }}
                      onClick={() => onToggleWishlist(hoveredItem)}
                      className="w-full py-3 mt-1 rounded-full border border-terracotta text-terracotta hover:bg-terracotta hover:text-offWhite uppercase tracking-[0.16em] text-xs font-semibold transition-all duration-300 flex items-center justify-center whitespace-nowrap"
                    >
                      <span className="whitespace-nowrap">{savedItemIds.includes(hoveredItem.id) ? 'In Tasting Wishlist' : 'Add to Tasting Wishlist'}</span>
                    </motion.button>
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
