
import React, { useState, useEffect } from 'react';
import { X, CheckCircle, ArrowRight, Lock, ShieldCheck, ChevronLeft } from 'lucide-react';
import { CactusLogo } from './CommonUI';

interface BookingWidgetProps {
  isOpen: boolean;
  onClose: () => void;
  initialSuite?: string;
}

type Step = 'details' | 'payment' | 'success';

export const BookingWidget: React.FC<BookingWidgetProps> = ({ isOpen, onClose, initialSuite }) => {
  const [step, setStep] = useState<Step>('details');
  const [selectedSuite, setSelectedSuite] = useState(initialSuite || 'The Royal Mesob Suite');

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
        className="absolute inset-0 bg-forest/90 backdrop-blur-md animate-in fade-in duration-500"
        onClick={resetAndClose}
      />
      
      <div className="relative bg-sandstone w-full max-w-5xl shadow-2xl rounded-sm overflow-hidden animate-in zoom-in-95 duration-500 h-[85vh] md:h-auto">
        <div className="absolute top-6 right-6 z-10">
          <button 
            onClick={resetAndClose}
            className="p-2 text-forest hover:bg-forest/5 rounded-full transition-colors"
          >
            <X className="w-6 h-6" />
          </button>
        </div>

        <div className="flex flex-col md:flex-row h-full">
          {/* Left Summary Sidebar */}
          <div className="hidden md:flex md:w-[35%] bg-forest p-10 flex-col justify-between relative overflow-hidden">
            <div className="relative z-10">
              <CactusLogo className="w-10 h-10 text-cactus mb-10" />
              <div className="space-y-8">
                <div>
                  <h3 className="text-2xl serif text-sandstone mb-2">Secure Reservation</h3>
                  <div className="w-12 h-1 bg-cactus" />
                </div>
                
                <div className="space-y-6">
                  <div className="space-y-1">
                    <p className="text-[8px] uppercase tracking-widest text-cactus font-bold">Selection</p>
                    <p className="text-lg serif text-sandstone">{selectedSuite}</p>
                  </div>
                  
                  <div className="space-y-4 pt-6 border-t border-white/5">
                    <div className="flex items-center justify-between text-[10px] tracking-widest text-gray-400 uppercase">
                      <span>Rate / Night</span>
                      <span className="text-sandstone">$450.00</span>
                    </div>
                    <div className="flex items-center justify-between text-[10px] tracking-widest text-gray-400 uppercase">
                      <span>Stay Duration</span>
                      <span className="text-sandstone font-bold">3 Nights</span>
                    </div>
                    <div className="flex items-center justify-between text-[10px] tracking-widest text-cactus uppercase pt-4 border-t border-white/5 font-bold">
                      <span>Total (Inc. Tax)</span>
                      <span className="text-3xl serif text-sandstone">$1,350.00</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="relative z-10 space-y-4">
              <div className="flex items-center space-x-3 text-cactus/60">
                 <ShieldCheck className="w-4 h-4" />
                 <span className="text-[8px] uppercase font-bold tracking-widest">Best Rate Guaranteed</span>
              </div>
              <div className="flex items-center space-x-3 text-cactus/60">
                <Lock className="w-4 h-4" />
                <span className="text-[8px] uppercase font-bold tracking-widest">PCI DSS Compliant Checkout</span>
              </div>
            </div>
          </div>

          {/* Main Form Content */}
          <div className="flex-1 p-8 md:p-16 overflow-y-auto bg-sandstone">
            {step === 'details' && (
              <form onSubmit={handleNext} className="space-y-8 animate-in slide-in-from-right-8 duration-500">
                <div className="flex items-center justify-between">
                  <div>
                    <h2 className="text-4xl serif text-forest mb-2">Guest Information</h2>
                    <p className="text-[10px] uppercase tracking-[0.3em] text-cactus font-bold">Personal Details & Stay</p>
                  </div>
                  <div className="text-[10px] uppercase font-bold text-forest/30">Step 01/02</div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-[9px] uppercase font-bold tracking-widest text-forest/60">Full Name</label>
                    <input required type="text" placeholder="John Doe" className="w-full bg-white border border-forest/5 p-4 text-sm focus:ring-1 focus:ring-cactus outline-none transition-all" />
                  </div>
                  <div className="space-y-2">
                    <label className="text-[9px] uppercase font-bold tracking-widest text-forest/60">Email Address</label>
                    <input required type="email" placeholder="john@example.com" className="w-full bg-white border border-forest/5 p-4 text-sm focus:ring-1 focus:ring-cactus outline-none transition-all" />
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-[9px] uppercase font-bold tracking-widest text-forest/60">Arrival Date</label>
                    <input required type="date" className="w-full bg-white border border-forest/5 p-4 text-sm outline-none" />
                  </div>
                  <div className="space-y-2">
                    <label className="text-[9px] uppercase font-bold tracking-widest text-forest/60">Departure Date</label>
                    <input required type="date" className="w-full bg-white border border-forest/5 p-4 text-sm outline-none" />
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="text-[9px] uppercase font-bold tracking-widest text-forest/60">Suite Tier</label>
                  <select 
                    value={selectedSuite} 
                    onChange={(e) => setSelectedSuite(e.target.value)}
                    className="w-full bg-white border border-forest/5 p-4 text-sm outline-none appearance-none cursor-pointer"
                  >
                    <option>The Royal Mesob Suite</option>
                    <option>Gheralta Vista Deluxe</option>
                    <option>Adigrat Executive</option>
                  </select>
                </div>

                <button 
                  type="submit"
                  className="w-full py-5 bg-forest text-sandstone font-bold uppercase tracking-[0.4em] text-[10px] hover:bg-cactus transition-all flex items-center justify-center gap-3 group"
                >
                  Continue to Payment <ArrowRight className="w-4 h-4 group-hover:translate-x-2 transition-transform" />
                </button>
              </form>
            )}

            {step === 'payment' && (
              <form onSubmit={handleNext} className="space-y-8 animate-in slide-in-from-right-8 duration-500">
                <div className="flex items-center justify-between">
                  <button 
                    type="button" 
                    onClick={() => setStep('details')}
                    className="text-[10px] uppercase font-bold text-cactus flex items-center hover:gap-2 transition-all"
                  >
                    <ChevronLeft className="w-4 h-4 mr-2" /> Back
                  </button>
                  <div className="text-[10px] uppercase font-bold text-forest/30">Step 02/02</div>
                </div>

                <div>
                  <h2 className="text-4xl serif text-forest mb-2">Checkout</h2>
                  <p className="text-[10px] uppercase tracking-[0.3em] text-cactus font-bold">Secure Payment Processing</p>
                </div>

                <div className="space-y-6">
                  <div className="space-y-2">
                    <label className="text-[9px] uppercase font-bold tracking-widest text-forest/60">Card Number</label>
                    <div className="relative">
                       <input required type="text" placeholder="XXXX XXXX XXXX XXXX" className="w-full bg-white border border-forest/5 p-4 text-sm focus:ring-1 focus:ring-cactus outline-none" />
                       <CreditCardIcon className="absolute right-4 top-1/2 -translate-y-1/2 w-6 h-6 text-forest/20" />
                    </div>
                  </div>
                  <div className="grid grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label className="text-[9px] uppercase font-bold tracking-widest text-forest/60">Expiry</label>
                      <input required type="text" placeholder="MM/YY" className="w-full bg-white border border-forest/5 p-4 text-sm outline-none" />
                    </div>
                    <div className="space-y-2">
                      <label className="text-[9px] uppercase font-bold tracking-widest text-forest/60">CVV</label>
                      <input required type="password" placeholder="***" className="w-full bg-white border border-forest/5 p-4 text-sm outline-none" />
                    </div>
                  </div>
                </div>

                <div className="bg-cactus/5 p-6 border border-cactus/10 rounded-sm">
                   <p className="text-xs text-gray-600 leading-relaxed italic">
                      "By clicking complete, you agree to our heritage preservation policy and guest services agreement."
                   </p>
                </div>

                <button 
                  type="submit"
                  className="w-full py-5 bg-cactus text-sandstone font-bold uppercase tracking-[0.4em] text-[10px] hover:bg-forest transition-all"
                >
                  Pay & Complete Reservation
                </button>
              </form>
            )}

            {step === 'success' && (
              <div className="h-full flex flex-col items-center justify-center text-center animate-in zoom-in-95 duration-700">
                <div className="w-24 h-24 bg-cactus/10 rounded-full flex items-center justify-center mb-10 shadow-inner">
                  <CheckCircle className="w-12 h-12 text-cactus" />
                </div>
                <h2 className="text-5xl serif text-forest mb-6">Reservation Confirmed</h2>
                <p className="text-gray-500 text-sm mb-12 max-w-sm mx-auto leading-relaxed">
                  Your journey to the Northern Highlands begins now. A detailed itinerary and receipt has been sent to your primary email.
                </p>
                <button 
                  onClick={resetAndClose}
                  className="px-16 py-5 border-2 border-forest text-forest font-bold uppercase tracking-widest text-[10px] hover:bg-forest hover:text-sandstone transition-all"
                >
                  Return to Sanctuary
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

const CreditCardIcon = ({ className }: { className?: string }) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <rect x="1" y="4" width="22" height="16" rx="2" ry="2" />
    <line x1="1" y1="10" x2="23" y2="10" />
  </svg>
);
