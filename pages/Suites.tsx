
import React, { useState } from 'react';
import { SectionTitle, CanaanPattern, Button, Container, Badge } from '../components/CommonUI';
import { Star, Maximize, Users, Bed, Wind, Wifi, Coffee, ShieldCheck } from 'lucide-react';
import { BookingWidget } from '../components/BookingWidget';

const suites = [
  {
    id: 'royal-mesob',
    name: 'The Royal Mesob Suite',
    price: 450,
    description: 'A masterpiece of architectural heritage. This split-level suite features a traditional circular layout inspired by the mesob, with private balconies overlooking the Adigrat mountain silhouette.',
    image: 'https://images.unsplash.com/photo-1590490360182-c33d57733427?auto=format&fit=crop&q=80&w=1000',
    amenities: ['Private Balcony', 'Butler Service', 'Heritage Decor', 'Mountain View'],
    specs: { size: '120 sqm', guests: '2-4 Guests', bed: 'Royal King', climate: 'Smart-Climate' },
    features: ['High-speed Fiber', 'Highland Espresso', '24/7 Security', 'Private Mini-Bar']
  },
  {
    id: 'gheralta-deluxe',
    name: 'Gheralta Vista Deluxe',
    price: 280,
    description: 'Modern comfort meets highland charm. Enjoy floor-to-ceiling windows oriented toward the distant Gheralta peaks, bringing Tigray\'s dramatic light inside.',
    image: 'https://images.unsplash.com/photo-1618773928121-c32242e63f39?auto=format&fit=crop&q=80&w=1000',
    amenities: ['King Size Bed', 'Rain Shower', 'High-speed Wifi', 'Panoramic View'],
    specs: { size: '45 sqm', guests: '2 Guests', bed: 'King Size', climate: 'Eco-Ventilation' },
    features: ['Smart TV', 'Local Textiles', 'Soundproofed', 'Rain Shower']
  },
  {
    id: 'adigrat-executive',
    name: 'Adigrat Executive',
    price: 350,
    description: 'Tailored for the modern business traveler in Northern Ethiopia. A sophisticated space with integrated technology and views of the bustling Adigrat trade corridor.',
    image: 'https://images.unsplash.com/photo-1591088398332-8a77d399a80c?auto=format&fit=crop&q=80&w=1000',
    amenities: ['Fiber Wifi', 'Express Check-in', 'Lounge Access', 'Climate Control'],
    specs: { size: '65 sqm', guests: '1-2 Guests', bed: 'Executive Queen', climate: 'Advanced HVAC' },
    features: ['Ergonomic Workspace', 'Express Service', 'Lounge Access', 'Meeting Support']
  }
];

const Suites: React.FC = () => {
  const [isBookingOpen, setIsBookingOpen] = useState(false);
  const [selectedSuite, setSelectedSuite] = useState('');

  const handleBook = (name: string) => {
    setSelectedSuite(name);
    setIsBookingOpen(true);
  };

  return (
    <div className="animate-in fade-in duration-700">
      <BookingWidget isOpen={isBookingOpen} onClose={() => setIsBookingOpen(false)} initialSuite={selectedSuite} />
      
      <section className="relative h-[65vh] flex items-center justify-center pt-24 bg-forest" role="banner">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?auto=format&fit=crop&q=80&w=2000" 
            alt="Interior of a luxury highland suite" 
            className="w-full h-full object-cover opacity-25 grayscale brightness-75"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-forest/40 to-forest"></div>
        </div>
        <div className="relative z-10 text-center text-sandstone px-8">
          <Badge variant="cactus">Luxury in the Highlands</Badge>
          <h1 className="text-6xl md:text-9xl serif mt-8 mb-8 tracking-tighter">Suites & Sanctuaries</h1>
          <p className="max-w-3xl mx-auto text-xl text-gray-300 font-light leading-relaxed italic">
            "Every chamber is a dialogue between ancient Axumite craftsmanship and contemporary biophilic luxury."
          </p>
        </div>
      </section>

      <section className="py-40 bg-sandstone" aria-label="Suite listings">
        <Container>
          <div className="grid grid-cols-1 gap-48">
            {suites.map((suite, idx) => (
              <article key={suite.id} className={`flex flex-col ${idx % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'} gap-24 items-center`}>
                <div className="flex-1 w-full relative group">
                  <div className="aspect-[16/10] overflow-hidden rounded-sm shadow-2xl">
                    <img 
                      src={suite.image} 
                      alt={`Interior view of ${suite.name}`} 
                      className="w-full h-full object-cover transition-transform duration-[2000ms] group-hover:scale-105"
                    />
                  </div>
                  <div className="absolute top-10 left-10 bg-forest text-sandstone p-8 shadow-2xl border border-white/5" aria-label={`Pricing for ${suite.name}`}>
                    <p className="text-[11px] uppercase font-bold tracking-[0.4em] text-cactus mb-2">Sanctuary Rate</p>
                    <p className="text-5xl serif tracking-tighter">${suite.price}<span className="text-xs font-sans text-gray-400 font-normal"> / Night</span></p>
                  </div>
                </div>

                <div className="flex-1 space-y-12">
                  <div className="space-y-4">
                    <div className="flex items-center space-x-2 text-cactus" aria-label="5 star rating">
                      {[...Array(5)].map((_, i) => <Star key={i} className="w-4 h-4 fill-current" aria-hidden="true" />)}
                    </div>
                    <h2 className="text-5xl md:text-7xl serif text-forest leading-[1] tracking-tight">{suite.name}</h2>
                    <p className="text-xl text-gray-500 leading-relaxed font-light">{suite.description}</p>
                  </div>
                  
                  {/* Technical Specs Grid */}
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-px bg-forest/10 p-px border border-forest/10" role="list" aria-label="Suite specifications">
                    {[
                      { icon: Maximize, label: 'Space', val: suite.specs.size },
                      { icon: Users, label: 'Capacity', val: suite.specs.guests },
                      { icon: Bed, label: 'Sleep', val: suite.specs.bed },
                      { icon: Wind, label: 'Climate', val: suite.specs.climate }
                    ].map((spec, sIdx) => (
                      <div key={sIdx} className="bg-white p-6 flex flex-col items-center text-center" role="listitem">
                          <spec.icon className="w-5 h-5 text-cactus mb-3 font-light" aria-hidden="true" />
                          <span className="text-[9px] uppercase font-bold text-gray-400 tracking-widest">{spec.label}</span>
                          <span className="text-sm font-bold text-forest mt-1">{spec.val}</span>
                      </div>
                    ))}
                  </div>

                  {/* Amenities List Icons */}
                  <div className="grid grid-cols-2 gap-6 pt-4">
                     {suite.features.map((feat, fIdx) => (
                       <div key={fIdx} className="flex items-center space-x-3 text-forest group cursor-default">
                          <div className="w-8 h-8 rounded-full border border-cactus/20 flex items-center justify-center text-cactus group-hover:bg-cactus group-hover:text-white transition-all">
                             {fIdx === 0 && <Wifi className="w-3.5 h-3.5" />}
                             {fIdx === 1 && <Coffee className="w-3.5 h-3.5" />}
                             {fIdx === 2 && <ShieldCheck className="w-3.5 h-3.5" />}
                             {fIdx === 3 && <Bed className="w-3.5 h-3.5" />}
                          </div>
                          <span className="text-[11px] uppercase font-bold tracking-widest text-gray-600">{feat}</span>
                       </div>
                     ))}
                  </div>

                  <div className="pt-10 flex flex-col sm:flex-row gap-6">
                    <Button 
                      onClick={() => handleBook(suite.name)} 
                      className="flex-1 py-6"
                      ariaLabel={`Reserve your stay in the ${suite.name}`}
                    >
                      Secure This Sanctuary
                    </Button>
                    <Button 
                      variant="outline" 
                      className="flex-1 py-6"
                      ariaLabel={`View detailed architectural image gallery for ${suite.name}`}
                    >
                      Virtual Tour
                    </Button>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </Container>
      </section>

      <CanaanPattern inverted aria-hidden="true" />
    </div>
  );
};

export default Suites;
