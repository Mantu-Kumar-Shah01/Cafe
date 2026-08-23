import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Calendar, Clock, Users, CheckCircle2, Sparkles, ArrowRight, ArrowLeft } from 'lucide-react';
import confetti from 'canvas-confetti';

interface ReservationModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ReservationModal: React.FC<ReservationModalProps> = ({ isOpen, onClose }) => {
  const [step, setStep] = useState<number>(1);
  const [partySize, setPartySize] = useState<number>(2);
  const [seatingArea, setSeatingArea] = useState<string>('courtyard');
  const [selectedDate, setSelectedDate] = useState<string>('2026-08-25');
  const [selectedTime, setSelectedTime] = useState<string>('10:30');
  const [guestName, setGuestName] = useState<string>('');
  const [guestEmail, setGuestEmail] = useState<string>('');
  const [guestPhone, setGuestPhone] = useState<string>('');
  const [notes, setNotes] = useState<string>('');
  const [isSubmitted, setIsSubmitted] = useState<boolean>(false);

  const seatingOptions = [
    { id: 'courtyard', name: 'Sunlit Courtyard', desc: 'Surrounded by olive trees and morning light' },
    { id: 'roastery', name: 'Roaster Bar Counter', desc: 'Direct view of the Loring roaster and Slayer espresso flow' },
    { id: 'mezzanine', name: 'Acoustic Mezzanine', desc: 'Quiet sanctuary with custom oak desks & low noise' },
    { id: 'velvet', name: 'Velvet Evening Lounge', desc: 'Intimate leather and walnut banquettes' },
  ];

  const timeSlots = [
    '08:30', '09:30', '10:30', '11:45', '13:00', '14:30', '16:00', '17:30', '19:00', '20:30'
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitted(true);
    confetti({
      particleCount: 80,
      spread: 70,
      origin: { y: 0.6 },
      colors: ['#B96545', '#E8D8C3', '#1C1714', '#7C8B72']
    });
  };

  const resetModal = () => {
    setIsSubmitted(false);
    setStep(1);
    onClose();
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 overflow-hidden bg-espresso/80 backdrop-blur-md flex items-end sm:items-center justify-center p-0 sm:p-6">
      <motion.div
        initial={{ opacity: 0, scale: 0.96, y: 30 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.96, y: 30 }}
        transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
        className="relative w-full max-w-2xl bg-cream rounded-t-3xl sm:rounded-3xl shadow-2xl border border-warmSand flex flex-col max-h-[92vh] sm:max-h-[88vh] overflow-hidden"
      >
        {/* Close Button */}
        <button
          onClick={resetModal}
          className="absolute top-4 sm:top-6 right-4 sm:right-6 z-10 p-2 sm:p-2.5 rounded-full bg-espresso/5 hover:bg-espresso/10 text-espresso transition-colors"
          aria-label="Close Reservation"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Modal Header (Fixed) */}
        <div className="p-5 sm:p-8 pb-4 sm:pb-6 border-b border-espresso/10 bg-warmSand/30 flex-shrink-0 pr-12">
          <div className="inline-flex items-center gap-2 text-terracotta uppercase tracking-[0.25em] text-[9px] sm:text-[10px] font-semibold mb-1">
            <Sparkles className="w-3 h-3 sm:w-3.5 sm:h-3.5" />
            <span>Table Sanctuary Experience</span>
          </div>
          <h3 className="font-serif text-2xl sm:text-3xl md:text-4xl text-espresso leading-tight">
            Reserve Your Experience
          </h3>
          <p className="text-[11px] sm:text-xs text-espresso-muted font-sans font-light mt-0.5">
            Dedicated tables for thoughtful tasting sessions, morning rituals, and quiet meetings.
          </p>
        </div>

        {/* Modal Scrollable Body */}
        <div className="p-5 sm:p-8 overflow-y-auto flex-1 menu-scroller">
          {!isSubmitted ? (
            <form onSubmit={handleSubmit} className="space-y-5 sm:space-y-6">
              {/* Step 1: Party & Area */}
              {step === 1 && (
                <div className="space-y-5 sm:space-y-6">
                  {/* Party Size */}
                  <div>
                    <label className="block text-xs uppercase tracking-[0.2em] font-semibold text-espresso mb-2.5">
                      1. Select Party Size
                    </label>
                    <div className="grid grid-cols-4 gap-2 sm:gap-3">
                      {[1, 2, 4, 6].map((num) => (
                        <button
                          type="button"
                          key={num}
                          onClick={() => setPartySize(num)}
                          className={`py-2.5 sm:py-3 rounded-xl border text-xs sm:text-sm font-semibold transition-all duration-200 flex flex-col items-center justify-center gap-1 ${
                            partySize === num
                              ? 'bg-espresso text-cream border-espresso shadow-xs'
                              : 'bg-cream border-espresso/15 text-espresso hover:border-terracotta'
                          }`}
                        >
                          <Users className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
                          <span>{num === 6 ? '5+ Guests' : `${num} ${num === 1 ? 'Guest' : 'Guests'}`}</span>
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* Seating Area Preference */}
                  <div>
                    <label className="block text-xs uppercase tracking-[0.2em] font-semibold text-espresso mb-2.5">
                      2. Seating Atmosphere
                    </label>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 sm:gap-3">
                      {seatingOptions.map((opt) => (
                        <button
                          type="button"
                          key={opt.id}
                          onClick={() => setSeatingArea(opt.id)}
                          className={`p-3 sm:p-3.5 rounded-xl border text-left transition-all duration-200 ${
                            seatingArea === opt.id
                              ? 'bg-terracotta/10 border-terracotta text-espresso shadow-xs'
                              : 'bg-cream border-espresso/15 text-espresso hover:border-espresso/40'
                          }`}
                        >
                          <div className="flex items-center justify-between">
                            <span className="font-serif text-sm sm:text-base font-semibold text-espresso">
                              {opt.name}
                            </span>
                            {seatingArea === opt.id && (
                              <span className="w-2 h-2 rounded-full bg-terracotta flex-shrink-0" />
                            )}
                          </div>
                          <p className="text-[10px] sm:text-[11px] text-espresso-muted font-sans mt-0.5 leading-snug">
                            {opt.desc}
                          </p>
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* Next Step Button */}
                  <div className="pt-2 sm:pt-4 flex justify-end">
                    <button
                      type="button"
                      onClick={() => setStep(2)}
                      className="w-full sm:w-auto px-7 py-3.5 rounded-full bg-espresso text-cream text-xs uppercase tracking-[0.2em] font-semibold hover:bg-espresso-light transition-colors flex items-center justify-center gap-2 shadow-sm"
                    >
                      <span>Continue to Date & Time</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </button>
                  </div>
                </div>
              )}

              {/* Step 2: Date, Time & Contact */}
              {step === 2 && (
                <div className="space-y-4 sm:space-y-5">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
                    {/* Date Picker */}
                    <div>
                      <label className="block text-xs uppercase tracking-[0.18em] font-semibold text-espresso mb-1.5 flex items-center gap-1.5">
                        <Calendar className="w-3.5 h-3.5 text-terracotta" />
                        <span>Date</span>
                      </label>
                      <input
                        type="date"
                        value={selectedDate}
                        onChange={(e) => setSelectedDate(e.target.value)}
                        className="w-full px-3.5 py-2.5 sm:py-3 rounded-xl border border-espresso/20 bg-cream text-espresso text-xs sm:text-sm focus:outline-none focus:border-terracotta"
                        required
                      />
                    </div>

                    {/* Time Slot Picker */}
                    <div>
                      <label className="block text-xs uppercase tracking-[0.18em] font-semibold text-espresso mb-1.5 flex items-center gap-1.5">
                        <Clock className="w-3.5 h-3.5 text-terracotta" />
                        <span>Time Slot</span>
                      </label>
                      <select
                        value={selectedTime}
                        onChange={(e) => setSelectedTime(e.target.value)}
                        className="w-full px-3.5 py-2.5 sm:py-3 rounded-xl border border-espresso/20 bg-cream text-espresso text-xs sm:text-sm focus:outline-none focus:border-terracotta font-mono"
                      >
                        {timeSlots.map((time) => (
                          <option key={time} value={time}>
                            {time} IST
                          </option>
                        ))}
                      </select>
                    </div>
                  </div>

                  {/* Guest Info */}
                  <div className="space-y-3 pt-1">
                    <div>
                      <label className="block text-xs uppercase tracking-[0.15em] font-semibold text-espresso mb-1">
                        Full Name *
                      </label>
                      <input
                        type="text"
                        placeholder="e.g. Ananya Sharma"
                        value={guestName}
                        onChange={(e) => setGuestName(e.target.value)}
                        className="w-full px-3.5 py-2.5 sm:py-3 rounded-xl border border-espresso/20 bg-cream text-espresso text-xs sm:text-sm focus:outline-none focus:border-terracotta"
                        required
                      />
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                      <div>
                        <label className="block text-xs uppercase tracking-[0.15em] font-semibold text-espresso mb-1">
                          Email Address *
                        </label>
                        <input
                          type="email"
                          placeholder="ananya@example.com"
                          value={guestEmail}
                          onChange={(e) => setGuestEmail(e.target.value)}
                          className="w-full px-3.5 py-2.5 sm:py-3 rounded-xl border border-espresso/20 bg-cream text-espresso text-xs sm:text-sm focus:outline-none focus:border-terracotta"
                          required
                        />
                      </div>
                      <div>
                        <label className="block text-xs uppercase tracking-[0.15em] font-semibold text-espresso mb-1">
                          Phone Number
                        </label>
                        <input
                          type="tel"
                          placeholder="+91 98860 12345"
                          value={guestPhone}
                          onChange={(e) => setGuestPhone(e.target.value)}
                          className="w-full px-3.5 py-2.5 sm:py-3 rounded-xl border border-espresso/20 bg-cream text-espresso text-xs sm:text-sm focus:outline-none focus:border-terracotta"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-xs uppercase tracking-[0.15em] font-semibold text-espresso mb-1">
                        Special Requests or Tasting Notes (Optional)
                      </label>
                      <input
                        type="text"
                        placeholder="e.g. Dietary preferences, interest in pourover origin flight"
                        value={notes}
                        onChange={(e) => setNotes(e.target.value)}
                        className="w-full px-3.5 py-2 rounded-xl border border-espresso/20 bg-cream text-espresso text-xs focus:outline-none focus:border-terracotta"
                      />
                    </div>
                  </div>

                  {/* Actions */}
                  <div className="pt-2 sm:pt-4 flex items-center justify-between gap-3">
                    <button
                      type="button"
                      onClick={() => setStep(1)}
                      className="px-4 py-2.5 rounded-full text-xs uppercase tracking-wider text-espresso/70 hover:text-espresso font-semibold flex items-center gap-1.5"
                    >
                      <ArrowLeft className="w-3.5 h-3.5" />
                      <span>Back</span>
                    </button>
                    <button
                      type="submit"
                      className="px-6 sm:px-8 py-3 sm:py-3.5 rounded-full bg-terracotta hover:bg-terracotta-hover text-offWhite text-xs uppercase tracking-[0.2em] font-semibold transition-colors shadow-md"
                    >
                      Confirm Reservation
                    </button>
                  </div>
                </div>
              )}
            </form>
          ) : (
            /* Confirmation Screen */
            <div className="py-6 sm:py-8 text-center space-y-5">
              <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-full bg-sage/20 text-sage-dark flex items-center justify-center mx-auto">
                <CheckCircle2 className="w-7 h-7 sm:w-8 sm:h-8" />
              </div>

              <div>
                <span className="text-[10px] uppercase tracking-[0.3em] text-terracotta font-semibold">
                  Reservation Confirmed
                </span>
                <h4 className="font-serif text-2xl sm:text-3xl text-espresso mt-1">
                  We look forward to welcoming you, {guestName || 'Guest'}.
                </h4>
                <p className="text-xs text-espresso-muted max-w-md mx-auto mt-2 font-sans font-light">
                  A confirmation concierge invite has been dispatched to <strong>{guestEmail || 'your email'}</strong>. Your table in the <strong>{seatingArea}</strong> is prepared.
                </p>
              </div>

              <div className="p-3.5 sm:p-4 rounded-xl bg-warmSand/30 max-w-sm mx-auto text-xs text-espresso space-y-1 font-mono">
                <div>Date: {selectedDate} at {selectedTime} IST</div>
                <div>Party: {partySize} Guests • {seatingArea}</div>
              </div>

              <button
                onClick={resetModal}
                className="w-full sm:w-auto px-8 py-3 rounded-full bg-espresso text-cream text-xs uppercase tracking-[0.2em] font-semibold hover:bg-espresso-light transition-colors"
              >
                Close & Return to Atelier
              </button>
            </div>
          )}
        </div>
      </motion.div>
    </div>
  );
};
