
import React, { useState, useEffect } from 'react';
import { PageType } from '../types';
import { Menu, X, Phone, Mail, Globe, Facebook, Instagram, Twitter, Linkedin, ArrowRight, MapPin } from 'lucide-react';
import { CactusLogo, NewsletterSignup } from './CommonUI';
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
    { label: 'Sanctuary', id: PageType.HOME },
    { label: 'Suites', id: PageType.SUITES },
    { label: 'Dining', id: PageType.DINING },
    { label: 'Experiences', id: PageType.SERVICES },
    { label: 'Heritage', id: PageType.ABOUT },
    { label: 'Partnership', id: PageType.INVESTMENT },
    { label: 'Contact', id: PageType.CONTACT },
  ];

  return (
    <div className="min-h-screen bg-sandstone text-forest overflow-x-hidden">
      <header className="relative z-50">
        <nav 
          aria-label="Main navigation"
          className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ease-in-out ${
            isScrolled 
              ? 'bg-forest/95 backdrop-blur-md shadow-2xl py-4' 
              : 'bg-transparent py-10'
          }`}
        >
          <div className="max-w-7xl mx-auto px-8 flex justify-between items-center">
            <button 
              className="flex items-center space-x-4 cursor-pointer group focus:outline-none"
              onClick={() => onPageChange(PageType.HOME)}
              aria-label="Canaan International Hotel Home"
            >
              <CactusLogo className={`w-8 h-8 transition-all duration-500 ${isScrolled ? 'text-cactus' : 'text-sandstone scale-110'}`} aria-hidden="true" />
              <div className={`text-xl serif font-bold tracking-tight transition-colors duration-500 ${
                isScrolled ? 'text-sandstone' : 'text-sandstone'
              }`}>
                Canaan Hotel
              </div>
            </button>

            <div className="hidden lg:flex items-center space-x-10" role="menubar">
              {navItems.map((item) => (
                <button
                  key={item.label}
                  role="menuitem"
                  aria-label={`View ${item.label} page`}
                  onClick={() => onPageChange(item.id)}
                  className={`text-[9px] uppercase tracking-[0.4em] font-bold transition-all duration-500 relative group ${
                    isScrolled ? 'text-sandstone/70 hover:text-sandstone' : 'text-sandstone/70 hover:text-sandstone'
                  } ${currentPage === item.id ? 'opacity-100 text-cactus' : 'opacity-60'}`}
                >
                  {item.label}
                  <span className={`absolute -bottom-1 left-0 h-px bg-cactus transition-all duration-500 ${
                    currentPage === item.id ? 'w-full' : 'w-0 group-hover:w-full'
                  }`} aria-hidden="true"></span>
                </button>
              ))}
              
              <button 
                onClick={() => setIsBookingOpen(true)}
                className={`px-10 py-3 text-[9px] uppercase tracking-[0.4em] font-bold transition-all duration-500 border ${
                  isScrolled
                  ? 'bg-cactus text-sandstone border-cactus hover:bg-transparent hover:text-cactus' 
                  : 'bg-sandstone text-forest border-sandstone hover:bg-transparent hover:text-sandstone'
                }`}
              >
                Reserve
              </button>
            </div>

            <button 
              className="lg:hidden p-2 focus:outline-none transition-transform active:scale-90" 
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              aria-expanded={isMenuOpen}
            >
              {isMenuOpen ? <X className="w-8 h-8 text-forest" /> : <Menu className="w-8 h-8 text-sandstone" />}
            </button>
          </div>

          {isMenuOpen && (
            <div className="lg:hidden fixed inset-0 bg-forest z-50 p-12 flex flex-col justify-center items-center space-y-10 animate-in slide-in-from-top duration-700">
              <button className="absolute top-10 right-10 p-2" onClick={() => setIsMenuOpen(false)} aria-label="Close menu">
                <X className="w-12 h-12 text-sandstone" />
              </button>
              <CactusLogo className="w-16 h-16 text-cactus mb-8" />
              {navItems.map((item) => (
                <button
                  key={item.label}
                  onClick={() => { onPageChange(item.id); setIsMenuOpen(false); }}
                  className="text-4xl serif text-sandstone hover:text-cactus transition-colors"
                >
                  {item.label}
                </button>
              ))}
              <button onClick={() => { setIsBookingOpen(true); setIsMenuOpen(false); }} className="px-16 py-6 bg-cactus text-sandstone serif text-2xl shadow-2xl mt-8">
                Experience Sanctuary
              </button>
            </div>
          )}
        </nav>
      </header>

      <BookingWidget isOpen={isBookingOpen} onClose={() => setIsBookingOpen(false)} />

      <main>{children}</main>

      <footer className="bg-forest text-sandstone pt-40 pb-16" role="contentinfo">
        <div className="max-w-7xl mx-auto px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-20 mb-32">
            {/* Column 1: Brand & Social */}
            <div className="space-y-10">
              <div className="flex items-center space-x-4">
                <CactusLogo className="w-10 h-10 text-cactus" />
                <h3 className="text-3xl serif font-bold tracking-tight">Canaan Hotel</h3>
              </div>
              <p className="text-gray-500 leading-relaxed text-sm italic font-light max-w-xs">
                "Where the basalt of the highlands meets the spirit of sanctuary. Architecture as a bridge to eternity."
              </p>
              <div className="flex space-x-5">
                {[Facebook, Instagram, Twitter, Linkedin].map((Icon, i) => (
                  <button key={i} className="w-10 h-10 rounded-full border border-white/5 flex items-center justify-center hover:bg-cactus hover:text-white transition-all duration-500 group">
                    <Icon className="w-4 h-4 text-gray-400 group-hover:text-white" />
                  </button>
                ))}
              </div>
            </div>

            {/* Column 2: Exploration */}
            <div>
              <h4 className="text-[10px] uppercase tracking-widest font-bold mb-10 text-cactus">Exploration</h4>
              <ul className="space-y-5 text-[11px] tracking-[0.2em] text-gray-500 uppercase font-medium">
                <li><button onClick={() => onPageChange(PageType.SUITES)} className="hover:text-sandstone transition-colors flex items-center gap-3"><span className="w-1 h-1 bg-cactus rounded-full"></span> Suites & Sanctuaries</button></li>
                <li><button onClick={() => onPageChange(PageType.DINING)} className="hover:text-sandstone transition-colors flex items-center gap-3"><span className="w-1 h-1 bg-cactus rounded-full"></span> Canaanite Gastronomy</button></li>
                <li><button onClick={() => onPageChange(PageType.SERVICES)} className="hover:text-sandstone transition-colors flex items-center gap-3"><span className="w-1 h-1 bg-cactus rounded-full"></span> Bespoke Experiences</button></li>
                <li><button onClick={() => onPageChange(PageType.ABOUT)} className="hover:text-sandstone transition-colors flex items-center gap-3"><span className="w-1 h-1 bg-cactus rounded-full"></span> Our Highland Heritage</button></li>
                <li><button onClick={() => onPageChange(PageType.INVESTMENT)} className="hover:text-sandstone transition-colors flex items-center gap-3"><span className="w-1 h-1 bg-cactus rounded-full"></span> Stability Partnership</button></li>
              </ul>
            </div>

            {/* Column 3: Contact */}
            <div>
              <h4 className="text-[10px] uppercase tracking-widest font-bold mb-10 text-cactus">Sanctuary Info</h4>
              <ul className="space-y-6 text-sm text-gray-500 font-light">
                <li className="flex items-center space-x-4"><Phone className="w-4 h-4 text-cactus" /> <span className="hover:text-sandstone transition-colors">+251 941 12 34 56</span></li>
                <li className="flex items-center space-x-4"><Mail className="w-4 h-4 text-cactus" /> <span className="hover:text-sandstone transition-colors">stay@canaanhotel.com</span></li>
                <li className="flex items-start space-x-4"><MapPin className="w-4 h-4 text-cactus mt-1 flex-shrink-0" /> <span className="leading-relaxed">Grand Mesob Tower, Highland Hub<br/>Adigrat, Tigray Region, Ethiopia</span></li>
              </ul>
            </div>

            {/* Column 4: Newsletter */}
            <NewsletterSignup />
          </div>
          
          <div className="pt-16 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-8">
            <div className="flex flex-col md:flex-row items-center gap-4 md:gap-10">
               <span className="text-[9px] uppercase tracking-[0.4em] text-gray-700">© 2026 Canaan International Hotel. Stability Core.</span>
               <div className="flex space-x-10 text-[9px] uppercase tracking-[0.4em] text-gray-500">
                <button onClick={() => onPageChange(PageType.PRIVACY)} className="hover:text-cactus transition-colors">Privacy Policy</button>
                <button onClick={() => onPageChange(PageType.TERMS)} className="hover:text-cactus transition-colors">Terms of Service</button>
                <button onClick={() => onPageChange(PageType.COOKIES)} className="hover:text-cactus transition-colors">Cookies</button>
              </div>
            </div>
            <div className="flex items-center space-x-2 opacity-30 grayscale hover:grayscale-0 transition-all duration-700 cursor-default">
               <span className="text-[8px] uppercase font-bold tracking-widest mr-2">Certified Stability</span>
               <div className="w-6 h-6 border border-sandstone rotate-45 flex items-center justify-center text-[6px] font-bold">CT</div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};
