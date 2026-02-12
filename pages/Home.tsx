
import React, { useState, useEffect } from 'react';
import { SectionTitle, CanaanPattern, CactusLogo, Button, Container } from '../components/CommonUI';
import { Leaf, Calendar, ArrowRight, Users, ChevronDown, Coffee, MapPin, Landmark, Mountain } from 'lucide-react';
import { BookingWidget } from '../components/BookingWidget';

const Home: React.FC<{ onNavigateToSuites?: () => void }> = ({ onNavigateToSuites }) => {
  const [isBookingModalOpen, setIsBookingModalOpen] = useState(false);
  const [showStickyBar, setShowStickyBar] = useState(false);

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
                <input id="sticky-arrival" type="date" aria-label="Arrival date" className="w-full bg-transparent border border-white/10 p-2 text-[10px] text-sandstone focus:outline-none focus:border-cactus rounded-sm" />
              </div>
              <div className="relative">
                <label htmlFor="sticky-departure" className="absolute -top-2 left-2 px-1 bg-forest text-[8px] uppercase font-bold tracking-tighter text-cactus">Check Out</label>
                <input id="sticky-departure" type="date" aria-label="Departure date" className="w-full bg-transparent border border-white/10 p-2 text-[10px] text-sandstone focus:outline-none focus:border-cactus rounded-sm" />
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
                className="py-2 px-4 flex items-center justify-center gap-2"
              >
                Book Now <ArrowRight className="w-3 h-3" />
              </Button>
            </div>
          </Container>
        </div>
      </nav>

      {/* Hero Header */}
      <header className="relative h-screen flex items-center justify-center overflow-hidden bg-forest">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1543730058-7931f3bb9abc?auto=format&fit=crop&q=80&w=2000" 
            alt="Mountains of Tigray" 
            className="w-full h-full object-cover opacity-50 scale-105 animate-pulse-slow grayscale-[30%]"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-forest/80 via-transparent to-forest/90"></div>
        </div>
        
        <div className="relative z-10 text-center text-sandstone px-6">
          <div className="inline-block px-4 py-1 border border-cactus/30 rounded-full mb-8">
            <span className="uppercase tracking-[0.5em] text-[10px] font-bold text-cactus">Premier Luxury in Adigrat</span>
          </div>
          <h1 className="text-6xl md:text-8xl serif mb-8 leading-tight">
            Canaan <br className="md:hidden" /> International
          </h1>
          <p className="max-w-2xl mx-auto text-lg md:text-xl font-light leading-relaxed mb-12 text-gray-300">
            A biophilic sanctuary at the crossroads of history. Experience Tigray’s legendary hospitality, nestled between the <span className="text-cactus font-medium">Gheralta Mountains</span> and ancient Axumite legacies.
          </p>
          <div className="flex flex-col md:flex-row justify-center space-y-4 md:space-y-0 md:space-x-8">
            <Button onClick={() => setIsBookingModalOpen(true)}>
              Check Availability
            </Button>
            <Button 
              variant="outline" 
              className="border-sandstone/20 text-sandstone hover:bg-sandstone/10"
              onClick={onNavigateToSuites}
            >
              Our Highland Suites
            </Button>
          </div>
        </div>
      </header>

      {/* Main Content Section */}
      <main>
        <section className="py-32 bg-sandstone cannan-pattern">
          <Container>
            <div className="flex flex-col md:flex-row items-end gap-12 mb-20">
               <div className="flex-1">
                  <SectionTitle 
                      label="The Adigrat Landmark"
                      title="Heritage Redefined"
                  />
               </div>
               <div className="flex-1 pb-16">
                  <p className="text-gray-600 leading-relaxed border-l-2 border-cactus/20 pl-8 italic">
                      "At Canaan International Adigrat, we bridge the gap between ancient stone-carved history and the future of biophilic luxury. Your journey through the Horn of Africa starts here."
                  </p>
               </div>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-1px bg-cactus/10">
              {[
                { icon: <Coffee className="w-8 h-8" />, title: 'Tigrayan Gastronomy', desc: 'Indulge in authentic Tihlo and Ambasha, paired with the finest highland coffee in our Messob Dining Hall.' },
                { icon: <MapPin className="w-8 h-8" />, title: 'The Highland Hub', desc: 'Ideally positioned for travelers en route to Axum, Eritrea, or the rugged cliffs of Gheralta.' },
                { icon: <Leaf className="w-8 h-8" />, title: 'Biophilic Design', desc: 'Sustainable architecture that breathes with the cool Adigrat air and respects the highland ecosystem.' },
              ].map((item, i) => (
                <article key={i} className="bg-sandstone p-12 hover:bg-forest hover:text-sandstone transition-all group">
                  <div className="text-cactus mb-8 group-hover:text-cactus transition-colors">{item.icon}</div>
                  <h3 className="text-2xl serif mb-4">{item.title}</h3>
                  <p className="text-sm text-gray-500 group-hover:text-gray-400 transition-colors leading-relaxed">{item.desc}</p>
                </article>
              ))}
            </div>
          </Container>
        </section>

        <CanaanPattern inverted />

        {/* Attractions Section */}
        <section className="py-32 bg-white overflow-hidden">
            <Container>
                <div className="mb-20 text-center">
                    <span className="text-[10px] uppercase tracking-[0.5em] font-bold text-cactus mb-4 block">Regional Exploration</span>
                    <h2 className="text-5xl serif text-forest">Northern Landmarks</h2>
                    <p className="text-gray-500 mt-6 max-w-xl mx-auto">Canaan International is your curated gateway to the most significant spiritual and natural wonders of Northern Ethiopia.</p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {[
                        { icon: <Mountain />, title: 'Gheralta Mountains', desc: 'Dramatic sandstone cliffs housing rock-hewn churches that touch the clouds. A hiker\'s spiritual odyssey.' },
                        { icon: <Landmark />, title: 'Debre Damo Monastery', desc: 'A 6th-century marvel accessible only by rope, preserving the earliest traditions of the Axumite Empire.' },
                        { icon: <Landmark />, title: 'Al Najashi Mosque', desc: 'The site of the first Islamic settlement in Africa, a symbol of peace and Tigray\'s historical openness.' },
                    ].map((attr, idx) => (
                        <div key={idx} className="bg-sandstone p-8 border border-cactus/5 hover:shadow-2xl transition-all duration-500">
                            <div className="text-cactus mb-6">{attr.icon}</div>
                            <h3 className="text-2xl serif mb-4 text-forest">{attr.title}</h3>
                            <p className="text-sm text-gray-600 leading-relaxed">{attr.desc}</p>
                            <button className="mt-8 text-[10px] uppercase tracking-widest font-bold text-cactus flex items-center gap-2 hover:gap-4 transition-all">
                                Explore Excursions <ArrowRight className="w-3 h-3" />
                            </button>
                        </div>
                    ))}
                </div>
            </Container>
        </section>
      </main>
    </div>
  );
};

export default Home;
