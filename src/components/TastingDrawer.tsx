import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Trash2, ArrowUpRight, Sparkles, Coffee } from 'lucide-react';
import { MenuItem } from '../data/cafeData';

interface TastingDrawerProps {
  isOpen: boolean;
  onClose: () => void;
  savedItems: MenuItem[];
  onRemoveItem: (id: string) => void;
  onProceedToBooking: () => void;
}

export const TastingDrawer: React.FC<TastingDrawerProps> = ({
  isOpen,
  onClose,
  savedItems,
  onRemoveItem,
  onProceedToBooking,
}) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 overflow-hidden bg-espresso/60 backdrop-blur-sm flex justify-end">
      <motion.div
        initial={{ x: '100%' }}
        animate={{ x: 0 }}
        exit={{ x: '100%' }}
        transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
        className="w-full max-w-md bg-cream h-full flex flex-col justify-between p-6 sm:p-8 shadow-2xl border-l border-warmSand"
      >
        {/* Header */}
        <div>
          <div className="flex items-center justify-between pb-6 border-b border-espresso/10">
            <div className="flex items-center gap-2">
              <Sparkles className="w-4 h-4 text-terracotta" />
              <h3 className="font-serif text-2xl text-espresso">Tasting Wishlist</h3>
            </div>
            <button
              onClick={onClose}
              className="p-2 rounded-full hover:bg-espresso/5 text-espresso transition-colors"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          <p className="text-xs text-espresso-muted font-sans font-light mt-3">
            Your personalized flight of single-origin brews and artisanal pastries for your next visit.
          </p>

          {/* List */}
          <div className="mt-6 space-y-4 max-h-[55vh] overflow-y-auto pr-2">
            {savedItems.length === 0 ? (
              <div className="py-12 text-center text-espresso-muted space-y-3">
                <Coffee className="w-8 h-8 mx-auto text-warmSand" />
                <p className="text-sm font-serif italic">Your tasting list is currently empty.</p>
                <p className="text-xs">Browse the Signature Menu and tap '+' to curate your tasting flight.</p>
              </div>
            ) : (
              savedItems.map((item) => (
                <div
                  key={item.id}
                  className="flex items-center justify-between gap-3 p-3 rounded-xl bg-warmSand/20 border border-espresso/5"
                >
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-12 h-12 rounded-lg object-cover flex-shrink-0"
                  />
                  <div className="flex-1 min-w-0">
                    <h4 className="font-serif text-sm text-espresso truncate">{item.name}</h4>
                    <span className="font-serif text-xs text-terracotta">{item.price}</span>
                  </div>
                  <button
                    onClick={() => onRemoveItem(item.id)}
                    className="p-1.5 text-espresso/40 hover:text-terracotta transition-colors"
                    title="Remove item"
                  >
                    <Trash2 className="w-4 h-4" />
                  </button>
                </div>
              ))
            )}
          </div>
        </div>

        {/* Footer Actions */}
        <div className="pt-6 border-t border-espresso/10 space-y-3">
          <div className="flex items-center justify-between text-xs font-semibold uppercase tracking-wider text-espresso">
            <span>Selected Items:</span>
            <span className="font-mono text-terracotta">{savedItems.length} Selections</span>
          </div>

          <button
            onClick={() => {
              onClose();
              onProceedToBooking();
            }}
            disabled={savedItems.length === 0}
            className="w-full py-4 rounded-full bg-terracotta hover:bg-terracotta-hover text-offWhite text-xs uppercase tracking-[0.2em] font-semibold transition-colors disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
          >
            <span>Book Table with Wishlist</span>
            <ArrowUpRight className="w-4 h-4" />
          </button>
        </div>
      </motion.div>
    </div>
  );
};
