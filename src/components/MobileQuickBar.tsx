import React from 'react';
import { Sparkles, Calendar, Coffee } from 'lucide-react';

interface MobileQuickBarProps {
  onOpenBooking: () => void;
  savedItemCount: number;
  onOpenWishlist: () => void;
}

export const MobileQuickBar: React.FC<MobileQuickBarProps> = ({
  onOpenBooking,
  savedItemCount,
  onOpenWishlist,
}) => {
  return (
    <div className="md:hidden fixed bottom-5 left-4 right-4 z-40">
      <div className="glass-nav rounded-full border border-espresso/10 shadow-2xl p-2 pl-4 pr-2 flex items-center justify-between backdrop-blur-xl">
        {/* Menu Jump */}
        <a
          href="#menu"
          className="flex items-center gap-2 text-espresso hover:text-terracotta transition-colors py-1 text-xs uppercase tracking-wider font-semibold"
        >
          <Coffee className="w-4 h-4 text-terracotta" />
          <span>Menu</span>
        </a>

        {/* Tasting Flight Pill */}
        {savedItemCount > 0 && (
          <button
            onClick={onOpenWishlist}
            className="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-warmSand/60 text-espresso text-xs font-semibold"
          >
            <Sparkles className="w-3.5 h-3.5 text-terracotta" />
            <span>{savedItemCount} Saved</span>
          </button>
        )}

        {/* Primary Reserve Button */}
        <button
          onClick={onOpenBooking}
          className="px-5 py-2.5 rounded-full bg-terracotta text-offWhite text-xs uppercase tracking-[0.18em] font-semibold hover:bg-terracotta-hover transition-colors flex items-center gap-1.5 shadow-md"
        >
          <Calendar className="w-3.5 h-3.5" />
          <span>Reserve</span>
        </button>
      </div>
    </div>
  );
};
