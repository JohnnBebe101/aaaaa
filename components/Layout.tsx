
import React, { useState, useEffect } from 'react';
import { PageType } from '../types';
import { Menu, X, Phone, Mail, Globe } from 'lucide-react';
import { CactusLogo } from './CommonUI';
import { BookingWidget } from './BookingWidget';

interface LayoutProps {
  children: React.ReactNode;
  currentPage: PageType;
  onPageChange: (page: PageType) => void;
}

export const Layout: React.FC<LayoutProps> = ({ children, currentPage, onPageChange }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isBookingOpen, setIsBookingOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { label: 'Our Story', id: PageType.HOME },
    { label: 'Suites', id: PageType.SUITES },
    { label: 'Canaanite Dining', id: PageType.DINING },
    { label: 'Partnership', id: PageType.INVESTMENT },
  ];

  const useLightText = isScrolled || (currentPage === PageType.HOME || currentPage === PageType.SUITES);

  return (
    <div className="min-h-screen bg-sandstone text-forest overflow-x-hidden">
      <header className="relative z-50">
        {/* Top Info Bar - Stability Focus */}
        <div className={`hidden lg:flex justify-between items-center px-6 py-2 border-b border-white/10 transition-all duration-500 ${isScrolled ? 'h-0 opacity-0 -translate-y-full overflow-hidden' : 'bg-forest/20 backdrop-blur-sm'}`}>
          <div className="flex items-center space-x-6">
            <div className="flex items-center text-[8px] uppercase tracking-widest text-sandstone/60 font-bold">
              <Phone className="w-3 h-3 mr-2 text-cactus" /> +251 941 12 34 56
            </div>
            <div className="flex items-center text-[8px] uppercase tracking-widest text-sandstone/60 font-bold">
              <Mail className="w-3 h-3 mr-2 text-cactus" /> stay@canaanadigrat.com
            </div>
          </div>
          <div className="flex items-center space-x-4">
             <button className="text-[8px] uppercase tracking-widest text-cactus font-bold hover:text-sandstone transition-colors flex items-center">
               <Globe className="w-3 h-3 mr-1" /> EN
             </button>
          </div>
        </div>

        <nav 
          aria-label="Main navigation"
          className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ease-in-out ${
            isScrolled 
              ? 'bg-forest/90 backdrop-blur-md shadow-2xl py-3' 
              : 'lg:top-10 bg-transparent py-6'
          }`}
        >
          <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
            <button 
              className="flex items-center space-x-3 cursor-pointer group focus:outline-none focus:ring-2 focus:ring-cactus/50 rounded-sm"
              onClick={() => onPageChange(PageType.HOME)}
              aria-label="Canaan International Hotel Home"
            >
              <div className={`p-2 rounded-full transition-all duration-500 ${
                isScrolled ? 'bg-cactus text-sandstone scale-90' : 'bg-cactus text-sandstone shadow-xl'
              }`}>
                  <CactusLogo className="w-6 h-6" />
              </div>
              <div className={`text-xl serif font-bold tracking-tight transition-colors duration-500 ${
                useLightText ? 'text-sandstone' : 'text-forest'
              }`}>
                Canaan Hotel
              </div>
            </button>

            <div className="hidden md:flex items-center space-x-10" role="menubar">
              {navItems.map((item) => (
                <button
                  key={item.label}
                  role="menuitem"
                  aria-current={currentPage === item.id ? 'page' : undefined}
                  aria-label={`View ${item.label} page`}
                  onClick={() => onPageChange(item.id)}
                  className={`text-[10px] uppercase tracking-[0.2em] font-bold transition-all duration-500 relative group ${
                    useLightText ? 'text-sandstone/70 hover:text-sandstone' : 'text-forest/70 hover:text-forest'
                  } ${currentPage === item.id ? 'opacity-100' : 'opacity-60'}`}
                >
                  {item.label}
                  <span className={`absolute -bottom-1 left-0 w-0 h-px bg-cactus transition-all duration-300 group-hover:w-full ${
                    currentPage === item.id ? 'w-full' : ''
                  }`}></span>
                </button>
              ))}
              
              <button 
                onClick={() => setIsBookingOpen(true)}
                aria-label="Open booking reservation modal"
                className={`px-6 py-2.5 rounded-sm text-[10px] uppercase tracking-[0.2em] font-bold transition-all duration-500 border ${
                  isScrolled
                  ? 'bg-cactus text-sandstone border-cactus hover:bg-transparent hover:text-cactus' 
                  : useLightText
                    ? 'bg-sandstone text-forest border-sandstone hover:bg-transparent hover:text-sandstone'
                    : 'bg-forest text-sandstone border-forest hover:bg-transparent hover:text-forest'
                }`}
              >
                Book Now
              </button>
            </div>

            <button 
              className="md:hidden p-2 transition-colors duration-500 focus:outline-none focus:ring-2 focus:ring-cactus/50" 
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              aria-label={isMenuOpen ? "Close menu" : "Open menu"}
              aria-expanded={isMenuOpen}
            >
              {isMenuOpen ? (
                <X className="w-8 h-8 text-forest" />
              ) : (
                <Menu className={`w-8 h-8 transition-colors duration-500 ${useLightText ? 'text-sandstone' : 'text-forest'}`} />
              )}
            </button>
          </div>

          {isMenuOpen && (
            <div 
              className="md:hidden absolute top-0 left-0 right-0 h-screen bg-sandstone z-50 p-8 flex flex-col justify-center items-center space-y-8 animate-in slide-in-from-top duration-500"
              role="dialog"
              aria-modal="true"
              aria-label="Mobile navigation"
            >
              <button className="absolute top-8 right-8 p-2" onClick={() => setIsMenuOpen(false)}>
                <X className="w-10 h-10 text-forest" />
              </button>
              <CactusLogo className="w-12 h-12 text-cactus mb-4" />
              <div className="flex flex-col items-center space-y-6" role="menu">
                {navItems.map((item) => (
                  <button
                    key={item.label}
                    onClick={() => { onPageChange(item.id); setIsMenuOpen(false); }}
                    className="text-4xl serif text-forest hover:text-cactus transition-colors"
                  >
                    {item.label}
                  </button>
                ))}
              </div>
              <button 
                onClick={() => { setIsBookingOpen(true); setIsMenuOpen(false); }}
                className="px-12 py-4 bg-forest text-sandstone serif text-2xl mt-4 shadow-xl"
              >
                Check Rates
              </button>
            </div>
          )}
        </nav>
      </header>

      <BookingWidget isOpen={isBookingOpen} onClose={() => setIsBookingOpen(false)} />

      <main>{children}</main>

      <footer className="bg-forest text-sandstone pt-24 pb-12">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-16 mb-20">
            <div className="col-span-1 md:col-span-1">
              <div className="flex items-center space-x-3 mb-8">
                <CactusLogo className="w-8 h-8 text-cactus" />
                <h3 className="text-2xl serif font-bold">Canaan Hotel</h3>
              </div>
              <p className="text-gray-400 leading-relaxed text-sm italic">
                "Where ancient heritage meets modern luxury in the heart of Tigray."
              </p>
            </div>
            <nav aria-label="Footer discovery links">
              <h4 className="text-[10px] uppercase tracking-widest font-bold mb-8 text-cactus">Discover</h4>
              <ul className="space-y-4 text-xs tracking-wide text-gray-400">
                <li><button className="hover:text-cactus transition-colors uppercase">Our Suites</button></li>
                <li><button className="hover:text-cactus transition-colors uppercase">Cultural Dining</button></li>
                <li><button className="hover:text-cactus transition-colors uppercase">Wellness Spa</button></li>
              </ul>
            </nav>
            <div>
              <h4 className="text-[10px] uppercase tracking-widest font-bold mb-8 text-cactus">Connect</h4>
              <p className="text-sm text-gray-400 mb-2">Adigrat, Tigray, Ethiopia</p>
              <a href="mailto:stay@canaanhotel.com" className="text-sm text-cactus underline underline-offset-4">stay@canaanhotel.com</a>
            </div>
          </div>
          <div className="pt-10 border-t border-white/5 text-[10px] uppercase tracking-widest text-gray-600 flex justify-between items-center">
            <span>© 2026 Canaan International Hotel.</span>
            <div className="space-x-8">
                <button className="cursor-pointer hover:text-cactus">Privacy</button>
                <button className="cursor-pointer hover:text-cactus">Legal</button>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};
