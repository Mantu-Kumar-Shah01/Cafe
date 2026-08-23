import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { GALLERY_ITEMS, GalleryItem } from '../data/cafeData';
import { Maximize2, X, Sparkles } from 'lucide-react';

export const MasonryGallery: React.FC = () => {
  const [selectedImage, setSelectedImage] = useState<GalleryItem | null>(null);
  const [activeFilter, setActiveFilter] = useState<string>('all');

  const categories = ['all', 'Specialty Brew', 'Interior & Space', 'Artisan Bakery', 'Evening Moments'];

  const filteredGallery = activeFilter === 'all'
    ? GALLERY_ITEMS
    : GALLERY_ITEMS.filter((item) => item.category === activeFilter);

  return (
    <section id="gallery" className="py-24 md:py-36 px-6 sm:px-8 lg:px-12 bg-cream relative overflow-hidden">
      {/* Background Section Index Number */}
      <div className="absolute top-12 right-12 select-none pointer-events-none font-serif text-[120px] lg:text-[180px] font-bold text-warmSand/25 leading-none">
        05
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 pb-8 border-b border-espresso/10 gap-6">
          <div>
            <div className="inline-flex items-center gap-2 text-terracotta uppercase tracking-[0.3em] text-xs font-semibold mb-3">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Visual Anthology</span>
            </div>
            <h2 className="font-serif text-4xl sm:text-5xl md:text-6xl text-espresso tracking-tight">
              Life at L'Élixir
            </h2>
          </div>

          {/* Filter Pills */}
          <div className="flex flex-wrap items-center gap-2">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveFilter(cat)}
                className={`px-4 py-2 rounded-full text-xs uppercase tracking-[0.18em] font-semibold transition-all duration-300 ${
                  activeFilter === cat
                    ? 'bg-espresso text-cream'
                    : 'bg-warmSand/40 text-espresso/70 hover:bg-warmSand/70'
                }`}
              >
                {cat === 'all' ? 'All Frames' : cat}
              </button>
            ))}
          </div>
        </div>

        {/* Editorial Masonry Grid */}
        <motion.div
          layout
          className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 auto-rows-[280px]"
        >
          {filteredGallery.map((item, idx) => (
            <motion.div
              layout
              key={item.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.08 }}
              onClick={() => setSelectedImage(item)}
              className={`group relative rounded-2xl overflow-hidden cursor-pointer border border-warmSand shadow-sm hover:shadow-2xl transition-all duration-500 ${item.spanClass}`}
            >
              <img
                src={item.image}
                alt={item.title}
                className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
              />

              {/* Hover Dark Vignette & Title Reveal */}
              <div className="absolute inset-0 bg-gradient-to-t from-espresso/80 via-espresso/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-between p-6">
                <div className="self-end p-2.5 rounded-full bg-cream/20 backdrop-blur-md text-cream">
                  <Maximize2 className="w-4 h-4" />
                </div>

                <div className="transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                  <span className="text-[10px] uppercase tracking-[0.25em] text-warmSand font-semibold block mb-1">
                    {item.category}
                  </span>
                  <h4 className="font-serif text-xl sm:text-2xl text-offWhite font-normal">
                    {item.title}
                  </h4>
                </div>
              </div>
            </motion.div>
          ))}
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
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
              className="relative max-w-4xl w-full bg-cream rounded-2xl overflow-hidden shadow-2xl border border-warmSand"
            >
              <button
                onClick={() => setSelectedImage(null)}
                className="absolute top-4 right-4 z-10 p-2.5 rounded-full bg-espresso/80 text-cream hover:bg-espresso transition-colors"
                aria-label="Close Lightbox"
              >
                <X className="w-5 h-5" />
              </button>

              <div className="relative aspect-[16/10] bg-espresso">
                <img
                  src={selectedImage.image}
                  alt={selectedImage.title}
                  className="w-full h-full object-cover"
                />
              </div>

              <div className="p-6 sm:p-8 flex items-center justify-between bg-cream">
                <div>
                  <span className="text-xs uppercase tracking-[0.25em] text-terracotta font-semibold">
                    {selectedImage.category}
                  </span>
                  <h3 className="font-serif text-2xl sm:text-3xl text-espresso mt-1">
                    {selectedImage.title}
                  </h3>
                </div>
                <div className="hidden sm:block text-xs font-mono text-espresso/60 tracking-wider">
                  L'ÉLIXIR ARCHIVES
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};
