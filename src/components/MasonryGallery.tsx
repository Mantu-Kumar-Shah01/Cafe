import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { GALLERY_ITEMS, GalleryItem } from '../data/cafeData';
import { X } from 'lucide-react';

export const MasonryGallery: React.FC = () => {
  const [selectedImage, setSelectedImage] = useState<GalleryItem | null>(null);
  const [activeFilter, setActiveFilter] = useState<string>('all');

  const categories = ['all', 'Specialty Brew', 'Interior & Space', 'Artisan Bakery', 'Evening Moments'];

  const filteredGallery = activeFilter === 'all'
    ? GALLERY_ITEMS
    : GALLERY_ITEMS.filter((item) => item.category === activeFilter);

  return (
    <section id="gallery" className="py-12 md:py-16 lg:py-20 px-5 sm:px-8 lg:px-12 bg-white relative overflow-hidden">
      {/* Background Section Index Number */}
      <motion.div 
        initial={{ opacity: 0, x: 30 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 1 }}
        className="absolute top-10 right-6 select-none pointer-events-none font-serif text-[90px] sm:text-[140px] lg:text-[180px] font-bold text-warmSand/25 leading-none"
      >
        05
      </motion.div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 md:mb-12 pb-6 md:pb-8 border-b border-espresso/10 gap-4 md:gap-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="inline-flex items-center gap-2 text-terracotta uppercase tracking-[0.3em] text-xs font-semibold mb-2 md:mb-3">
              <span>Visual Anthology</span>
            </div>
            <h2 className="font-serif text-3xl sm:text-5xl md:text-6xl text-espresso tracking-tight">
              Life at CafeDemo
            </h2>
          </motion.div>

          {/* Filter Pills */}
          <div className="flex items-center gap-2 overflow-x-auto pb-2 scrollbar-none -mx-5 px-5 sm:mx-0 sm:px-0">
            {categories.map((cat) => (
              <motion.button
                key={cat}
                onClick={() => setActiveFilter(cat)}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                transition={{ type: 'spring', stiffness: 400, damping: 25 }}
                className={`px-3.5 sm:px-4 py-1.5 sm:py-2 rounded-full text-[11px] sm:text-xs uppercase tracking-[0.18em] font-semibold whitespace-nowrap transition-colors duration-300 ${
                  activeFilter === cat
                    ? 'bg-espresso text-cream shadow-sm'
                    : 'bg-warmSand/40 text-espresso/70 hover:bg-warmSand/70'
                }`}
              >
                {cat === 'all' ? 'All Frames' : cat}
              </motion.button>
            ))}
          </div>
        </div>

        {/* Editorial Masonry Grid */}
        <motion.div
          layout
          className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6 auto-rows-[240px] sm:auto-rows-[280px]"
        >
          <AnimatePresence mode="popLayout">
            {filteredGallery.map((item, idx) => (
              <motion.div
                layout
                key={item.id}
                initial={{ opacity: 0, scale: 0.9, y: 20 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.9 }}
                whileHover={{ y: -6, scale: 1.01 }}
                transition={{ duration: 0.4, delay: idx * 0.04 }}
                onClick={() => setSelectedImage(item)}
                className={`group relative rounded-2xl sm:rounded-3xl overflow-hidden cursor-pointer border border-warmSand shadow-xs hover:shadow-2xl transition-shadow duration-500 ${item.spanClass}`}
              >
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-108"
                />

                {/* Gradient & Title */}
                <div className="absolute inset-0 bg-gradient-to-t from-espresso/85 via-espresso/25 to-transparent opacity-90 sm:opacity-0 sm:group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-4 sm:p-6">
                  <div className="transform translate-y-0 sm:translate-y-4 sm:group-hover:translate-y-0 transition-transform duration-300">
                    <span className="text-[9px] sm:text-[10px] uppercase tracking-[0.25em] text-warmSand font-semibold block mb-0.5 sm:mb-1">
                      {item.category}
                    </span>
                    <h4 className="font-serif text-lg sm:text-2xl text-offWhite font-normal leading-snug">
                      {item.title}
                    </h4>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>

      {/* Lightbox Modal */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedImage(null)}
            className="fixed inset-0 z-50 bg-espresso/90 backdrop-blur-md flex items-center justify-center p-4 sm:p-8"
          >
            <motion.div
              initial={{ scale: 0.92, opacity: 0, y: 15 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.92, opacity: 0, y: 15 }}
              transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
              onClick={(e) => e.stopPropagation()}
              className="relative max-w-4xl w-full bg-cream rounded-3xl overflow-hidden shadow-2xl border border-warmSand"
            >
              <button
                onClick={() => setSelectedImage(null)}
                className="absolute top-4 right-4 z-10 p-2.5 rounded-full bg-espresso/80 text-cream hover:bg-espresso transition-colors text-xs font-mono uppercase tracking-wider"
                aria-label="Close Lightbox"
              >
                <X className="w-5 h-5" />
              </button>

              <div className="relative aspect-[16/11] sm:aspect-[16/10] bg-espresso">
                <img
                  src={selectedImage.image}
                  alt={selectedImage.title}
                  className="w-full h-full object-cover"
                />
              </div>

              <div className="p-5 sm:p-8 flex items-center justify-between bg-cream">
                <div>
                  <span className="text-[10px] sm:text-xs uppercase tracking-[0.25em] text-terracotta font-semibold">
                    {selectedImage.category}
                  </span>
                  <h3 className="font-serif text-xl sm:text-3xl text-espresso mt-1">
                    {selectedImage.title}
                  </h3>
                </div>
                <div className="hidden sm:block text-xs font-mono text-espresso/60 tracking-wider">
                  CAFÉDEMO ARCHIVES
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};
