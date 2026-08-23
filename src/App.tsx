import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { SignatureMenu } from './components/SignatureMenu';
import { CafeExperience } from './components/CafeExperience';
import { CoffeeJourney } from './components/CoffeeJourney';
import { OurStory } from './components/OurStory';
import { MasonryGallery } from './components/MasonryGallery';
import { Testimonials } from './components/Testimonials';
import { VisitUs } from './components/VisitUs';
import { Footer } from './components/Footer';
import { ReservationModal } from './components/ReservationModal';
import { TastingDrawer } from './components/TastingDrawer';
import { CustomCursor } from './components/CustomCursor';
import { MenuItem } from './data/cafeData';

export const App: React.FC = () => {
  const [isBookingOpen, setIsBookingOpen] = useState(false);
  const [isTastingDrawerOpen, setIsTastingDrawerOpen] = useState(false);
  const [savedItems, setSavedItems] = useState<MenuItem[]>([]);
  const [toastMessage, setToastMessage] = useState<string | null>(null);

  const showToast = (msg: string) => {
    setToastMessage(msg);
    setTimeout(() => {
      setToastMessage(null);
    }, 3000);
  };

  const handleToggleWishlist = (item: MenuItem) => {
    const exists = savedItems.some((i) => i.id === item.id);
    if (exists) {
      setSavedItems(savedItems.filter((i) => i.id !== item.id));
      showToast(`Removed "${item.name}" from your Tasting Wishlist.`);
    } else {
      setSavedItems([...savedItems, item]);
      showToast(`Added "${item.name}" to your Tasting Wishlist.`);
    }
  };

  const handleRemoveSavedItem = (id: string) => {
    const item = savedItems.find((i) => i.id === id);
    setSavedItems(savedItems.filter((i) => i.id !== id));
    if (item) {
      showToast(`Removed "${item.name}".`);
    }
  };

  return (
    <div className="relative min-h-screen bg-cream text-espresso selection:bg-terracotta selection:text-offWhite">
      {/* Subtle Custom Follower Cursor */}
      <CustomCursor />

      {/* Navigation Header */}
      <Navbar
        onOpenBooking={() => setIsBookingOpen(true)}
        savedItemCount={savedItems.length}
        onOpenWishlist={() => setIsTastingDrawerOpen(true)}
      />

      {/* Main Content Sections */}
      <main>
        <Hero onOpenBooking={() => setIsBookingOpen(true)} />
        <SignatureMenu
          onToggleWishlist={handleToggleWishlist}
          savedItemIds={savedItems.map((i) => i.id)}
        />
        <CafeExperience onOpenBooking={() => setIsBookingOpen(true)} />
        <CoffeeJourney />
        <OurStory />
        <MasonryGallery />
        <Testimonials />
        <VisitUs onOpenBooking={() => setIsBookingOpen(true)} />
      </main>

      {/* Footer */}
      <Footer />

      {/* Reservation Modal */}
      <ReservationModal
        isOpen={isBookingOpen}
        onClose={() => setIsBookingOpen(false)}
      />

      {/* Tasting Wishlist Drawer */}
      <TastingDrawer
        isOpen={isTastingDrawerOpen}
        onClose={() => setIsTastingDrawerOpen(false)}
        savedItems={savedItems}
        onRemoveItem={handleRemoveSavedItem}
        onProceedToBooking={() => setIsBookingOpen(true)}
      />

      {/* Elegant Toast Feedback */}
      {toastMessage && (
        <div className="fixed bottom-6 right-6 z-50 px-5 py-3 rounded-full bg-espresso text-cream text-xs font-sans shadow-xl border border-cream/10 flex items-center gap-2 animate-fade-in">
          <span className="w-2 h-2 rounded-full bg-terracotta animate-pulse" />
          <span>{toastMessage}</span>
        </div>
      )}
    </div>
  );
};

export default App;
