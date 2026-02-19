
import React from 'react';
import { Star, MapPin, Clock, ArrowRight, Mail } from 'lucide-react';

/**
 * Brand Logo Component
 */
export const CactusLogo: React.FC<{ className?: string; src?: string }> = ({ className, src }) => {
  if (src) {
    return <img src={src} alt="Canaan Hotel" className={className} />;
  }
  return (
    <svg 
      viewBox="0 0 24 24" 
      fill="none" 
      stroke="currentColor" 
      strokeWidth="2" 
      strokeLinecap="round" 
      strokeLinejoin="round" 
      className={className}
      aria-hidden="true"
    >
      <path d="M8 9V7a4 4 0 0 1 8 0v2" />
      <path d="M3 10a2 2 0 0 1 2-2h1a2 2 0 0 1 2 2v10a2 2 0 0 1-2-2H5a2 2 0 0 1-2-2V10z" />
      <path d="M17 10a2 2 0 0 1 2-2h1a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2h-1a2 2 0 0 1-2-2V10z" />
      <path d="M12 9v13" />
    </svg>
  );
};

/**
 * Platform Icons for Social Widgets
 */
const PlatformIcon: React.FC<{ platform: string }> = ({ platform }) => {
  switch (platform) {
    case 'google': return <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor"><path d="M12.48 10.92v3.28h7.84c-.24 1.84-.92 3.32-1.92 4.48-1.28 1.32-3.32 2.76-7.12 2.76-6.12 0-10.88-4.96-10.88-11.08s4.76-11.08 10.88-11.08c3.28 0 5.64 1.2 7.36 2.84l2.32-2.32c-2.44-2.08-5.6-3.32-9.68-3.32-7.56 0-13.8 6.24-13.8 13.8s6.24 13.8 13.8 13.8c4.08 0 7.36-1.32 9.76-3.84 2.48-2.48 3.12-5.96 3.12-8.52 0-.64-.04-1.12-.12-1.64h-12.76z"/></svg>;
    case 'booking': return <span className="font-black text-xs">B.</span>;
    case 'tripadvisor': return <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor"><path d="M1.5 12c0 5.799 4.701 10.5 10.5 10.5s10.5-4.701 10.5-10.5-4.701-10.5-10.5-10.5-10.5 4.701-10.5 10.5zm3.75 0c0-1.242 1.008-2.25 2.25-2.25s2.25 1.008 2.25 2.25-1.008 2.25-2.25 2.25-2.25-1.008-2.25-2.25zm13.5 0c0 1.242-1.008 2.25-2.25 2.25s-2.25-1.008-2.25-2.25 1.008-2.25 2.25-2.25 2.25 1.008 2.25 2.25z"/></svg>;
    default: return null;
  }
};

/**
 * Social Trust Widget (Refined for Bootstrap)
 */
export const SocialRatingWidget: React.FC<{ platform: 'tripadvisor' | 'google' | 'booking' | 'expedia'; rating: string; reviews: string }> = ({ platform, rating, reviews }) => {
  const configs = {
    tripadvisor: { color: '#00AF87', label: 'TripAdvisor' },
    google: { color: '#4285F4', label: 'Google Maps' },
    booking: { color: '#003580', label: 'Booking.com' },
    expedia: { color: '#FFCC00', label: 'Expedia' },
  };
  const config = configs[platform];

  return (
    <div className="flex flex-col items-center justify-center p-8 bg-white hover:bg-sandstone/50 transition-colors duration-500 border-r border-forest/5 last:border-r-0">
      <div className="flex items-center space-x-2 mb-4" style={{ color: config.color }}>
        <PlatformIcon platform={platform} />
        <span className="text-[10px] uppercase tracking-widest font-bold">{config.label}</span>
      </div>
      <div className="text-3xl serif font-bold text-forest mb-2">{rating}</div>
      <div className="flex text-cactus space-x-0.5 mb-3">
        {[...Array(5)].map((_, i) => <Star key={i} className="w-3 h-3 fill-current" />)}
      </div>
      <div className="text-[9px] uppercase tracking-tighter text-gray-400 font-bold">{reviews} Verified Reviews</div>
    </div>
  );
};

/**
 * Attraction Card for Nearby Sights
 */
export const AttractionCard: React.FC<{ image: string; title: string; distance: string; description: string }> = ({ image, title, distance, description }) => (
  <div className="group relative overflow-hidden bg-forest rounded-sm">
    <div className="aspect-[3/4] overflow-hidden">
      <img src={image} alt={title} className="w-full h-full object-cover grayscale-[40%] group-hover:grayscale-0 group-hover:scale-105 transition-all duration-1000 opacity-90" />
    </div>
    <div className="absolute inset-0 bg-gradient-to-t from-forest via-forest/20 to-transparent"></div>
    <div className="absolute bottom-0 left-0 p-8 w-full transform transition-all duration-500">
      <div className="flex items-center space-x-2 text-cactus mb-3">
        <MapPin className="w-3 h-3" />
        <span className="text-[10px] uppercase tracking-widest font-bold">{distance} from Tower</span>
      </div>
      <h3 className="text-2xl serif text-sandstone mb-4 group-hover:text-cactus transition-colors">{title}</h3>
      <p className="text-xs text-gray-400 opacity-0 group-hover:opacity-100 transform translate-y-4 group-hover:translate-y-0 transition-all duration-700 leading-relaxed line-clamp-3">
        {description}
      </p>
    </div>
  </div>
);

/**
 * Service Card
 */
export const ServiceCard: React.FC<{ icon: React.ReactNode; title: string; description: string }> = ({ icon, title, description }) => (
  <div className="p-12 border border-cactus/10 bg-white hover:bg-forest hover:text-sandstone transition-all duration-500 group relative">
    <div className="text-cactus mb-10 group-hover:scale-110 transition-transform origin-left">{icon}</div>
    <h3 className="text-3xl serif mb-6 leading-tight">{title}</h3>
    <p className="text-sm text-gray-500 group-hover:text-gray-400 leading-relaxed font-light">{description}</p>
    <div className="absolute bottom-8 right-8 opacity-0 group-hover:opacity-100 transition-opacity">
       <ArrowRight className="w-5 h-5 text-cactus" />
    </div>
  </div>
);

/**
 * Standardized UI Components
 */
export const Badge: React.FC<{ children: React.ReactNode; variant?: 'cactus' | 'forest' | 'sandstone' }> = ({ children, variant = 'cactus' }) => {
  const styles = {
    cactus: "bg-cactus/10 text-cactus border-cactus/20",
    forest: "bg-forest text-sandstone border-forest",
    sandstone: "bg-sandstone text-forest border-cactus/20",
  };
  return (
    <span className={`px-4 py-1.5 text-[9px] uppercase font-bold tracking-[0.3em] border rounded-full ${styles[variant]}`}>
      {children}
    </span>
  );
};

export const TestimonialCard: React.FC<{ text: string; author: string; role: string; date?: string }> = ({ text, author, role, date }) => (
  <div className="p-12 border border-cactus/5 bg-white shadow-sm hover:shadow-xl transition-all duration-700">
    <div className="flex justify-between items-start mb-8">
      <div className="flex space-x-1">
        {[...Array(5)].map((_, i) => (
          <Star key={i} className="w-3 h-3 text-cactus fill-current" />
        ))}
      </div>
      {date && <span className="text-[10px] text-gray-400 font-bold uppercase tracking-widest">{date}</span>}
    </div>
    <p className="text-forest italic text-xl mb-10 leading-relaxed font-light">"{text}"</p>
    <div className="flex items-center space-x-4">
      <div className="w-10 h-10 bg-sandstone rounded-full flex items-center justify-center text-cactus serif font-bold">
        {author.charAt(0)}
      </div>
      <div>
        <p className="font-bold text-xs text-forest uppercase tracking-widest">{author}</p>
        <p className="text-[9px] text-cactus uppercase font-bold mt-1">{role}</p>
      </div>
    </div>
  </div>
);

export const HeritageFrieze: React.FC<{ className?: string; dark?: boolean }> = ({ className = '', dark }) => (
  <div className={`w-full h-12 flex items-center justify-center space-x-4 opacity-20 overflow-hidden ${className}`}>
    {[...Array(20)].map((_, i) => (
      <div key={i} className={`flex-shrink-0 w-8 h-8 border-2 rotate-45 ${dark ? 'border-sandstone' : 'border-cactus'}`} />
    ))}
  </div>
);

export const CanaanPattern: React.FC<{ inverted?: boolean }> = ({ inverted }) => {
  return (
    <div className={`w-full h-24 relative overflow-hidden flex justify-center items-center border-y border-cactus/5 ${inverted ? 'bg-sandstone' : 'bg-forest'}`}>
      <div className="flex space-x-12 opacity-30">
        {[...Array(12)].map((_, i) => (
          <div key={i} className="flex flex-col items-center">
            <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                <path d="M20 0C20 0 20 15 5 20C20 25 20 40 20 40C20 40 20 25 35 20C20 15 20 0 20 0Z" fill={inverted ? "#4B6344" : "#F5F2E9"} />
            </svg>
          </div>
        ))}
      </div>
    </div>
  );
};

export const SectionTitle: React.FC<{ label?: string; title: string; description?: string; centered?: boolean; dark?: boolean }> = ({ label, title, description, centered, dark }) => (
  <div className={`mb-16 ${centered ? 'text-center max-w-4xl mx-auto' : 'max-w-2xl'}`}>
    {label && <span className={`block uppercase tracking-[0.5em] text-[10px] font-bold mb-6 ${dark ? 'text-cactus' : 'text-cactus'}`}>{label}</span>}
    <h2 className={`text-4xl md:text-6xl serif mb-8 leading-[1.1] ${dark ? 'text-sandstone' : 'text-forest'}`}>{title}</h2>
    {description && <p className={`text-xl leading-relaxed font-light ${dark ? 'text-gray-400' : 'text-gray-600'}`}>{description}</p>}
    <div className={`w-16 h-1 mt-10 ${centered ? 'mx-auto' : ''} bg-cactus opacity-40`} aria-hidden="true"></div>
  </div>
);

// Added disabled prop to Button component to support disabled state and fix TypeScript error in BookingWidget.tsx
export const Button: React.FC<{ variant?: 'primary' | 'outline' | 'ghost'; children: React.ReactNode; onClick?: () => void; className?: string; type?: 'button' | 'submit'; ariaLabel?: string; disabled?: boolean }> = ({ variant = 'primary', children, onClick, className = '', type = 'button', ariaLabel, disabled }) => {
  const baseStyles = "px-12 py-5 uppercase tracking-[0.3em] text-[10px] font-bold transition-all duration-500 shadow-sm flex items-center justify-center gap-3 active:scale-95";
  const variants = {
    primary: "bg-cactus text-sandstone hover:bg-forest hover:text-white shadow-xl",
    outline: "border border-forest/10 text-forest hover:bg-forest hover:text-sandstone",
    ghost: "text-cactus hover:text-forest tracking-[0.4em] bg-transparent p-0 shadow-none",
  };
  
  // Styles for disabled state
  const disabledStyles = disabled ? "opacity-50 cursor-not-allowed grayscale pointer-events-none shadow-none" : "";

  return (
    <button 
      type={type} 
      onClick={onClick} 
      disabled={disabled}
      className={`${baseStyles} ${variants[variant]} ${disabledStyles} ${className}`} 
      aria-label={ariaLabel}
    >
      {children}
    </button>
  );
};

export const Container: React.FC<{ children: React.ReactNode; className?: string }> = ({ children, className = '' }) => (
  <div className={`max-w-7xl mx-auto px-8 ${className}`}>{children}</div>
);

/**
 * Professional Newsletter Signup for Footer
 */
export const NewsletterSignup: React.FC = () => (
  <div className="space-y-6">
    <h4 className="text-[10px] uppercase tracking-widest font-bold text-cactus">Heritage Newsletter</h4>
    <p className="text-xs text-gray-400 font-light leading-relaxed">
      Curated updates from the highlands. Architecture, culture, and exclusive rates.
    </p>
    <form className="relative group" onSubmit={(e) => e.preventDefault()}>
      <div className="flex border-b border-white/10 group-focus-within:border-cactus transition-colors pb-2">
        <Mail className="w-4 h-4 text-gray-600 mr-3 mt-1" />
        <input 
          type="email" 
          placeholder="EMAIL ADDRESS" 
          className="bg-transparent text-xs w-full focus:outline-none text-sandstone uppercase tracking-widest placeholder:text-gray-700"
          required
        />
        <button type="submit" className="text-cactus hover:text-sandstone transition-colors" aria-label="Subscribe">
          <ArrowRight className="w-5 h-5" />
        </button>
      </div>
    </form>
  </div>
);
