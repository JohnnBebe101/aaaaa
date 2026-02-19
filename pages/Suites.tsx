
import React, { useState } from 'react';
import { SectionTitle, CanaanPattern, Button, Container, Badge } from '../components/CommonUI';
import { Star, Maximize, Users, Bed, Wind } from 'lucide-react';
import { BookingWidget } from '../components/BookingWidget';

const suites = [
  {
    id: 'royal-mesob',
    name: 'The Royal Mesob Suite',
    price: 450,
    description: 'A masterpiece of architectural heritage. This split-level suite features a traditional circular layout inspired by the mesob, with private balconies overlooking the Adigrat mountain silhouette.',
    image: 'https://images.unsplash.com/photo-1590490360182-c33d57733427?auto=format&fit=crop&q=80&w=1000',
    amenities: ['Private Balcony', 'Butler Service', 'Heritage Decor', 'Mountain View'],
    specs: { size: '120 sqm', guests: '2-4 Guests', bed: 'Royal King', climate: 'Smart-Climate' }
  },
  {
    id: 'gheralta-deluxe',
    name: 'Gheralta Vista Deluxe',
    price: 280,
    description: 'Modern comfort meets highland charm. Enjoy floor-to-ceiling windows oriented toward the distant Gheralta peaks, bringing Tigray\'s dramatic light inside.',
    image: 'https://images.unsplash.com/photo-1618773928121-c32242e63f39?auto=format&fit=crop&q=80&w=1000',
    amenities: ['King Size Bed', 'Rain Shower', 'High-speed Wifi', 'Panoramic View'],
    specs: { size: '45 sqm', guests: '2 Guests', bed: 'King Size', climate: 'Eco-Ventilation' }
  },
  {
    id: 'adigrat-executive',
    name: 'Adigrat Executive',
    price: 350,
    description: 'Tailored for the modern business traveler in Northern Ethiopia. A sophisticated space with integrated technology and views of the bustling Adigrat trade corridor.',
    image: 'https://images.unsplash.com/photo-1591088398332-8a77d399a80c?auto=format&fit=crop&q=80&w=1000',
    amenities: ['Fiber Wifi', 'Express Check-in', 'Lounge Access', 'Climate Control'],
    specs: { size: '65 sqm', guests: '1-2 Guests', bed: 'Executive Queen', climate: 'Advanced HVAC' }
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
      
      <section className="relative h-[60vh] flex items-center justify-center pt-24 bg-forest">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?auto=format&fit=crop&q=80&w=2000" 
            alt="Highland Hospitality" 
            className="w-full h-full object-cover opacity-30 grayscale"
          />
          <div className="absolute inset-0 bg-forest/40"></div>
        </div>
        <div className="relative z-10 text-center text-sandstone px-6">
          <Badge variant="cactus">Luxury in the Highlands</Badge>
          <h1 className="text-5xl md:text-7xl serif mt-6 mb-6">Suites & Sanctuaries</h1>
          <p className="max-w-2xl mx-auto text-lg text-gray-300 font-light">
            Architectural poetry meets sanctuary comfort. Each suite is a celebration of Tigrayan craftsmanship.
          </p>
        </div>
      </section>

      <section className="py-24 bg-sandstone">
        <Container>
          <div className="grid grid-cols-1 gap-32">
            {suites.map((suite, idx) => (
              <article key={suite.id} className={`flex flex-col ${idx % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'} gap-16 items-start`}>
                <div className="flex-1 w-full relative group">
                  <div className="aspect-[16/10] overflow-hidden rounded-sm shadow-2xl">
                    <img 
                      src={suite.image} 
                      alt={suite.name} 
                      className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
                    />
                  </div>
                  <div className="absolute top-8 left-8 bg-forest text-sandstone p-6 shadow-2xl">
                    <p className="text-[10px] uppercase font-bold tracking-widest text-cactus mb-1">Standard Rate</p>
                    <p className="text-4xl serif">${suite.price}<span className="text-xs font-sans text-gray-400">/night</span></p>
                  </div>
                </div>

                <div className="flex-1 space-y-8 pt-4">
                  <div className="flex items-center space-x-2 text-cactus">
                    {[...Array(5)].map((_, i) => <Star key={i} className="w-3 h-3 fill-current" />)}
                  </div>
                  <h2 className="text-5xl serif text-forest leading-tight">{suite.name}</h2>
                  <p className="text-gray-600 leading-relaxed text-lg">{suite.description}</p>
                  
                  {/* Technical Specs Grid */}
                  <div className="grid grid-cols-2 gap-px bg-forest/5 p-px border border-forest/5">
                    <div className="bg-white p-6 flex flex-col items-center text-center">
                        <Maximize className="w-5 h-5 text-cactus mb-3" />
                        <span className="text-[10px] uppercase font-bold text-gray-400">Floor Space</span>
                        <span className="text-sm font-bold text-forest mt-1">{suite.specs.size}</span>
                    </div>
                    <div className="bg-white p-6 flex flex-col items-center text-center">
                        <Users className="w-5 h-5 text-cactus mb-3" />
                        <span className="text-[10px] uppercase font-bold text-gray-400">Capacity</span>
                        <span className="text-sm font-bold text-forest mt-1">{suite.specs.guests}</span>
                    </div>
                    <div className="bg-white p-6 flex flex-col items-center text-center">
                        <Bed className="w-5 h-5 text-cactus mb-3" />
                        <span className="text-[10px] uppercase font-bold text-gray-400">Bed Type</span>
                        <span className="text-sm font-bold text-forest mt-1">{suite.specs.bed}</span>
                    </div>
                    <div className="bg-white p-6 flex flex-col items-center text-center">
                        <Wind className="w-5 h-5 text-cactus mb-3" />
                        <span className="text-[10px] uppercase font-bold text-gray-400">Climate</span>
                        <span className="text-sm font-bold text-forest mt-1">{suite.specs.climate}</span>
                    </div>
                  </div>

                  <div className="pt-8 flex flex-col sm:flex-row gap-4">
                    <Button onClick={() => handleBook(suite.name)} className="flex-1">
                      Reserve Your Stay
                    </Button>
                    <Button variant="outline" className="flex-1">
                      Detailed Gallery
                    </Button>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </Container>
      </section>

      <CanaanPattern inverted />
    </div>
  );
};

export default Suites;
