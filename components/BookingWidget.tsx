
import React, { useState, useEffect } from 'react';
import { X, Calendar, User, Mail, CreditCard, CheckCircle, ArrowRight, ShieldCheck, Lock } from 'lucide-react';
import { SectionTitle, CanaanPattern, CactusLogo } from './CommonUI';

interface BookingWidgetProps {
  isOpen: boolean;
  onClose: () => void;
  initialSuite?: string;
}

type Step = 'details' | 'payment' | 'success';

export const BookingWidget: React.FC<BookingWidgetProps> = ({ isOpen, onClose, initialSuite }) => {
  const [step, setStep] = useState<Step>('details');
  const [selectedSuite, setSelectedSuite] = useState(initialSuite || 'Horizon Deluxe Suite');

  useEffect(() => {
    if (isOpen) {
      setStep('details');
      if (initialSuite) setSelectedSuite(initialSuite);
    }
  }, [isOpen, initialSuite]);

  if (!isOpen) return null;

  const handleNext = (e: React.FormEvent) => {
    e.preventDefault();
    if (step === 'details') setStep('payment');
    else if (step === 'payment') setStep('success');
  };

  const resetAndClose = () => {
    setStep('details');
    onClose();
  };

  return (
    <div 
      className="fixed inset-0 z-[100] flex items-center justify-center px-4 overflow-hidden"
      role="dialog"
      aria-modal="true"
      aria-labelledby="booking-modal-title"
    >
      <div 
        className="absolute inset-0 bg-forest/80 backdrop-blur-sm animate-in fade-in duration-300"
        onClick={resetAndClose}
      />
      
      <div className="relative bg-sandstone w-full max-w-4xl shadow-2xl rounded-sm overflow-hidden animate-in zoom-in-95 duration-300">
        <div className="absolute top-4 right-4 z-10">
          <button 
            onClick={resetAndClose}
            className="p-2 text-forest hover:bg-forest/5 rounded-full transition-colors"
          >
            <X className="w-6 h-6" />
          </button>
        </div>

        <div className="flex flex-col md:flex-row h-[600px]">
          {/* Left Summary Sidebar */}
          <div className="hidden md:flex md:w-1/3 bg-forest p-8 flex-col justify-between relative overflow-hidden">
            <div className="relative z-10">
              <CactusLogo className="w-10 h-10 text-cactus mb-6" />
              <div className="space-y-6">
                <div>
                  <h3 className="text-xl serif text-sandstone mb-2">Your Reservation</h3>
                  <div className="w-8 h-px bg-cactus" />
                </div>
                
                <div className="space-y-4">
                  <div className="flex items-center justify-between text-xs tracking-widest text-gray-400 uppercase">
                    <span>Stay Duration</span>
                    <span className="text-sandstone">3 Nights</span>
                  </div>
                  <div className="flex items-center justify-between text-xs tracking-widest text-gray-400 uppercase">
                    <span>Selected Suite</span>
                    <span className="text-sandstone text-right">{selectedSuite}</span>
                  </div>
                  <div className="flex items-center justify-between text-xs tracking-widest text-gray-400 uppercase pt-4 border-t border-white/5">
                    <span className="text-cactus font-bold">Total Rate</span>
                    <span className="text-2xl serif text-sandstone">$1,350.00</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="relative z-10 flex items-center space-x-2 text-cactus/60">
              <Lock className="w-3 h-3" />
              <span className="text-[8px] uppercase font-bold tracking-widest">SSL Encrypted Checkout</span>
            </div>
          </div>

          {/* Main Form Content */}
          <div className="flex-1 p-8 md:p-12 overflow-y-auto">
            {step === 'details' && (
              <form onSubmit={handleNext} className="space-y-6 animate-in slide-in-from-right-4 duration-300">
                <div>
                  <h2 className="text-3xl serif text-forest mb-2">Reservation Details</h2>
                  <p className="text-xs uppercase tracking-widest text-cactus font-bold">Step 1 of 2</p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-1">
                    <label className="text-[10px] uppercase font-bold tracking-widest text-forest/40">Full Name</label>
                    <input required type="text" placeholder="John Doe" className="w-full bg-white border border-forest/10 p-3 text-sm focus:border-cactus outline-none" />
                  </div>
                  <div className="space-y-1">
                    <label className="text-[10px] uppercase font-bold tracking-widest text-forest/40">Email</label>
                    <input required type="email" placeholder="john@example.com" className="w-full bg-white border border-forest/10 p-3 text-sm focus:border-cactus outline-none" />
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-1">
                    <label className="text-[10px] uppercase font-bold tracking-widest text-forest/40">Check In</label>
                    <input required type="date" className="w-full bg-white border border-forest/10 p-3 text-sm" />
                  </div>
                  <div className="space-y-1">
                    <label className="text-[10px] uppercase font-bold tracking-widest text-forest/40">Check Out</label>
                    <input required type="date" className="w-full bg-white border border-forest/10 p-3 text-sm" />
                  </div>
                </div>

                <div className="space-y-1">
                  <label className="text-[10px] uppercase font-bold tracking-widest text-forest/40">Preferred Suite</label>
                  <select 
                    value={selectedSuite} 
                    onChange={(e) => setSelectedSuite(e.target.value)}
                    className="w-full bg-white border border-forest/10 p-3 text-sm outline-none"
                  >
                    <option>The Royal Mesob Suite</option>
                    <option>Highland Deluxe Room</option>
                    <option>Canaanite Executive</option>
                  </select>
                </div>

                <button 
                  type="submit"
                  className="w-full py-4 bg-forest text-sandstone font-bold uppercase tracking-[0.3em] text-[10px] hover:bg-cactus transition-all flex items-center justify-center gap-2"
                >
                  Continue to Payment <ArrowRight className="w-4 h-4" />
                </button>
              </form>
            )}

            {step === 'payment' && (
              <form onSubmit={handleNext} className="space-y-6 animate-in slide-in-from-right-4 duration-300">
                <div>
                  <h2 className="text-3xl serif text-forest mb-2">Secure Payment</h2>
                  <p className="text-xs uppercase tracking-widest text-cactus font-bold">Step 2 of 2</p>
                </div>

                <div className="bg-forest/5 p-4 rounded-sm border border-forest/10 flex items-center space-x-3 mb-6">
                  <CreditCard className="w-6 h-6 text-cactus" />
                  <span className="text-xs font-medium text-forest">All major cards accepted</span>
                </div>

                <div className="space-y-4">
                  <div className="space-y-1">
                    <label className="text-[10px] uppercase font-bold tracking-widest text-forest/40">Card Number</label>
                    <input required type="text" placeholder="XXXX XXXX XXXX XXXX" className="w-full bg-white border border-forest/10 p-3 text-sm focus:border-cactus outline-none" />
                  </div>
                  <div className="grid grid-cols-2 gap-4">
                    <div className="space-y-1">
                      <label className="text-[10px] uppercase font-bold tracking-widest text-forest/40">Expiry Date</label>
                      <input required type="text" placeholder="MM/YY" className="w-full bg-white border border-forest/10 p-3 text-sm focus:border-cactus outline-none" />
                    </div>
                    <div className="space-y-1">
                      <label className="text-[10px] uppercase font-bold tracking-widest text-forest/40">CVV</label>
                      <input required type="password" placeholder="***" className="w-full bg-white border border-forest/10 p-3 text-sm focus:border-cactus outline-none" />
                    </div>
                  </div>
                </div>

                <div className="pt-6 flex flex-col gap-4">
                  <button 
                    type="submit"
                    className="w-full py-4 bg-cactus text-sandstone font-bold uppercase tracking-[0.3em] text-[10px] hover:bg-forest transition-all"
                  >
                    Pay & Complete Booking
                  </button>
                  <button 
                    type="button"
                    onClick={() => setStep('details')}
                    className="text-[10px] uppercase font-bold tracking-widest text-forest/40 hover:text-forest transition-colors"
                  >
                    Go Back to Details
                  </button>
                </div>
              </form>
            )}

            {step === 'success' && (
              <div className="h-full flex flex-col items-center justify-center text-center animate-in zoom-in-95 duration-500">
                <div className="w-20 h-20 bg-cactus/10 rounded-full flex items-center justify-center mb-8">
                  <CheckCircle className="w-12 h-12 text-cactus" />
                </div>
                <h2 className="text-4xl serif text-forest mb-4">Confirmed!</h2>
                <p className="text-gray-600 text-sm mb-12 max-w-xs mx-auto">
                  Your reservation at Canaan International is complete. A confirmation receipt has been sent to your email.
                </p>
                <button 
                  onClick={resetAndClose}
                  className="px-10 py-4 border border-forest text-forest font-bold uppercase tracking-widest text-[10px] hover:bg-forest hover:text-sandstone transition-all"
                >
                  Return to Site
                </button>
              </div>
            )}
          </div>
        </div>
        <CanaanPattern inverted />
      </div>
    </div>
  );
};
