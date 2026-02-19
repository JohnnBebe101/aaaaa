
import React, { useState, useEffect, useCallback } from 'react';
import { SectionTitle, CanaanPattern, CactusLogo, Button, Container, HeritageFrieze, TestimonialCard, Badge } from '../components/CommonUI';
import { Leaf, ArrowRight, Users, ChevronDown, Coffee, MapPin, Landmark, Mountain, ChevronRight, ChevronLeft, ShieldCheck, Zap } from 'lucide-react';
import { BookingWidget } from '../components/BookingWidget';

const HERO_SLIDES = [
  {
    image: "https://images.unsplash.com/photo-1543730058-7931f3bb9abc?auto=format&fit=crop&q=80&w=2000",
    label: "Sanctuary of the Northern Highlands",
    title: "Canaan Adigrat",
    desc: "Experience the architectural resonance of ancient Tigray. A biophilic landmark standing as the gateway to the rock-hewn legacies of the Horn.",
    cta: "Begin Reservation"
  },
  {
    image: "https://images.unsplash.com/photo-1493246507139-91e8bef99c02?auto=format&fit=crop&q=80&w=2000",
    label: "Adventure & Spirituality",
    title: "Gheralta Vista",
    desc: "From vertical sandstone cliffs to 6th-century monasteries, discover a landscape where history reaches for the clouds.",
    cta: "Explore Excursions"
  },
  {
    image: "https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&q=80&w=2000",
    label: "Modern Comfort, Ancient Soul",
    title: "The Royal Mesob",
    desc: "Immerse yourself in suites designed after the traditional Mesob, blending basalt textures with world-class hospitality.",
    cta: "View Our Suites"
  }
];

const Home: React.FC<{ onNavigateToSuites?: () => void }> = ({ onNavigateToSuites }) => {
  const [isBookingModalOpen, setIsBookingModalOpen] = useState(false);
  const [showStickyBar, setShowStickyBar] = useState(false);
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % HERO_SLIDES.length);
    }, 8000);
    return () => clearInterval(timer);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      setShowStickyBar(window.scrollY > window.innerHeight * 0.8);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="animate-in fade-in duration-1000">
      <BookingWidget isOpen={isBookingModalOpen} onClose={() => setIsBookingModalOpen(false)} />
      
      {/* Sticky Bottom Booking Bar */}
      <nav 
        aria-label="Quick booking"
        className={`fixed bottom-0 left-0 right-0 z-[60] transform transition-all duration-500 ease-in-out ${showStickyBar ? 'translate-y-0 opacity-100' : 'translate-y-full opacity-0'}`}
      >
        <div className="bg-forest/95 backdrop-blur-lg border-t border-cactus/30 shadow-2xl">
          <Container className="py-4 flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="hidden lg:flex items-center space-x-4">
              <CactusLogo className="w-6 h-6 text-cactus" />
              <div>
                <p className="text-[10px] uppercase tracking-widest font-bold text-cactus leading-none mb-1">Canaan Luxury Adigrat</p>
                <p className="text-xs text-sandstone serif">Gateway to the Northern Heritage</p>
              </div>
            </div>

            <div className="flex-1 grid grid-cols-2 md:grid-cols-4 gap-4 w-full">
              <div className="relative group">
                <label htmlFor="sticky-arrival" className="absolute -top-2 left-2 px-1 bg-forest text-[8px] uppercase font-bold tracking-tighter text-cactus">Check In</label>
                <input id="sticky-arrival" type="date" className="w-full bg-transparent border border-white/10 p-2 text-[10px] text-sandstone focus:outline-none focus:border-cactus rounded-sm" />
              </div>
              <div className="relative">
                <label htmlFor="sticky-departure" className="absolute -top-2 left-2 px-1 bg-forest text-[8px] uppercase font-bold tracking-tighter text-cactus">Check Out</label>
                <input id="sticky-departure" type="date" className="w-full bg-transparent border border-white/10 p-2 text-[10px] text-sandstone focus:outline-none focus:border-cactus rounded-sm" />
              </div>
              <div className="relative group hidden md:block">
                <label className="absolute -top-2 left-2 px-1 bg-forest text-[8px] uppercase font-bold tracking-tighter text-cactus">Guests</label>
                <button className="w-full flex items-center border border-white/10 p-2 rounded-sm text-sandstone cursor-pointer hover:border-cactus transition-colors">
                    <Users className="w-3 h-3 mr-2 text-cactus" />
                    <span className="text-[10px]">2 Guests</span>
                    <ChevronDown className="w-3 h-3 ml-auto opacity-40" />
                </button>
              </div>
              <Button 
                onClick={() => setIsBookingModalOpen(true)} 
                className="py-2 px-4"
              >
                Book Now <ArrowRight className="w-3 h-3" />
              </Button>
            </div>
          </Container>
        </div>
      </nav>

      {/* Enhanced Hero Slider */}
      <header className="relative h-screen w-full overflow-hidden bg-forest">
        {HERO_SLIDES.map((slide, index) => (
          <div 
            key={index}
            className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${index === currentSlide ? 'opacity-100 z-10' : 'opacity-0 z-0'}`}
          >
            <div className="absolute inset-0">
              <img 
                src={slide.image} 
                alt={slide.title} 
                className={`w-full h-full object-cover grayscale-[20%] ${index === currentSlide ? 'scale-110 animate-pulse-slow' : 'scale-100'}`}
              />
              <div className="absolute inset-0 bg-gradient-to-b from-forest/80 via-transparent to-forest/90"></div>
            </div>

            <div className="relative h-full flex items-center justify-center z-20 px-6">
              <div className={`max-w-5xl text-center text-sandstone transition-all duration-1000 ${index === currentSlide ? 'translate-y-0 opacity-100' : 'translate-y-12 opacity-0'}`}>
                <Badge variant="cactus">{slide.label}</Badge>
                
                <h1 className="text-7xl md:text-9xl serif mt-8 mb-8 leading-tight">
                  {slide.title}
                </h1>

                <p className="max-w-2xl mx-auto text-lg md:text-xl font-light leading-relaxed mb-12 text-gray-300">
                  {slide.desc}
                </p>

                <div className="flex flex-col md:flex-row justify-center items-center space-y-4 md:space-y-0 md:space-x-8">
                  <Button onClick={() => setIsBookingModalOpen(true)}>
                    {slide.cta}
                  </Button>
                  <button 
                    onClick={onNavigateToSuites}
                    className="text-sandstone text-[10px] uppercase tracking-[0.4em] font-bold flex items-center group"
                  >
                    View Catalog <ChevronRight className="ml-2 w-4 h-4 group-hover:translate-x-2 transition-transform" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </header>

      <main>
        {/* Structural Excellence & Stability */}
        <section className="py-32 bg-sandstone">
            <Container>
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
                    <div className="order-2 lg:order-1">
                        <SectionTitle 
                            label="Engineering & Integrity"
                            title="A Legacy of Stability"
                            description="The Grand Mesob Tower is more than an icon; it is a structural feat designed to withstand the tests of time, utilizing local sandstone composites and basalt foundations."
                        />
                        <div className="space-y-8">
                            {[
                                { icon: <ShieldCheck className="w-6 h-6 text-cactus" />, title: 'Highland Fortification', desc: 'Engineered for the unique seismic and climatic profile of the Adigrat mountains.' },
                                { icon: <Zap className="w-6 h-6 text-cactus" />, title: 'Energy Independence', desc: 'Equipped with integrated solar-harvesting facades for reliable, 24/7 luxury power.' },
                            ].map((item, i) => (
                                <div key={i} className="flex gap-6">
                                    <div className="flex-shrink-0 w-12 h-12 bg-white rounded-full flex items-center justify-center shadow-sm border border-cactus/10">
                                        {item.icon}
                                    </div>
                                    <div>
                                        <h4 className="serif text-xl mb-2 text-forest">{item.title}</h4>
                                        <p className="text-sm text-gray-500 leading-relaxed">{item.desc}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                    <div className="order-1 lg:order-2 relative">
                        <img 
                            src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80&w=1200" 
                            alt="Architecture" 
                            className="w-full aspect-[4/5] object-cover rounded-sm grayscale-[30%] shadow-2xl"
                        />
                        <div className="absolute -bottom-8 -right-8 bg-forest p-8 hidden md:block">
                            <CactusLogo className="w-12 h-12 text-cactus" />
                        </div>
                    </div>
                </div>
            </Container>
        </section>

        <HeritageFrieze />
        <CanaanPattern inverted />

        {/* Guest Experiences */}
        <section className="py-32 bg-sandstone/50 overflow-hidden">
            <Container>
                <SectionTitle 
                    label="Voices of the Highlands"
                    title="Guest Experiences"
                    centered
                />
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    <TestimonialCard 
                        text="The intersection of ancient Tigrayan culture and sustainable luxury here is unprecedented. A truly stable haven in the north."
                        author="Elena Volkov"
                        role="Architectural Digest"
                    />
                    <TestimonialCard 
                        text="Waking up to the Gheralta peaks from the Royal Mesob Suite is a spiritual experience. The service is as solid as the basalt foundations."
                        author="Marcus Tadesse"
                        role="International Traveler"
                    />
                    <TestimonialCard 
                        text="As an investor, seeing this level of structural and cultural integrity in Adigrat gives me immense confidence in the region's future."
                        author="Sarah Jennings"
                        role="Global Partners Fund"
                    />
                </div>
            </Container>
        </section>
      </main>
    </div>
  );
};

export default Home;
