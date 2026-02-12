
import React, { useState } from 'react';
import { SectionTitle, CanaanPattern, Button, Container } from '../components/CommonUI';
import { Star } from 'lucide-react';
import { BookingWidget } from '../components/BookingWidget';

const suites = [
  {
    id: 'royal-mesob',
    name: 'The Royal Mesob Suite',
    price: 450,
    description: 'A masterpiece of architectural heritage. This split-level suite features a traditional circular layout inspired by the mesob, with private balconies overlooking the Adigrat mountain silhouette.',
    image: 'https://images.unsplash.com/photo-1590490360182-c33d57733427?auto=format&fit=crop&q=80&w=1000',
    amenities: ['Private Balcony', 'Butler Service', 'Heritage Decor', 'Mountain View'],
    size: '120 sqm'
  },
  {
    id: 'gheralta-deluxe',
    name: 'Gheralta Vista Deluxe',
    price: 280,
    description: 'Modern comfort meets highland charm. Enjoy floor-to-ceiling windows oriented toward the distant Gheralta peaks, bringing Tigray\'s dramatic light inside.',
    image: 'https://images.unsplash.com/photo-1618773928121-c32242e63f39?auto=format&fit=crop&q=80&w=1000',
    amenities: ['King Size Bed', 'Rain Shower', 'High-speed Wifi', 'Panoramic View'],
    size: '45 sqm'
  },
  {
    id: 'adigrat-executive',
    name: 'Adigrat Executive',
    price: 350,
    description: 'Tailored for the modern business traveler in Northern Ethiopia. A sophisticated space with integrated technology and views of the bustling Adigrat trade corridor.',
    image: 'https://images.unsplash.com/photo-1591088398332-8a77d399a80c?auto=format&fit=crop&q=80&w=1000',
    amenities: ['Fiber Wifi', 'Express Check-in', 'Lounge Access', 'Climate Control'],
    size: '65 sqm'
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
      
      <section className="relative h-[50vh] flex items-center justify-center pt-24 bg-forest">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?auto=format&fit=crop&q=80&w=2000" 
            alt="Highland Hospitality" 
            className="w-full h-full object-cover opacity-30 grayscale"
          />
          <div className="absolute inset-0 bg-forest/40"></div>
        </div>
        <div className="relative z-10 text-center text-sandstone px-6">
          <span className="block uppercase tracking-[0.3em] text-[10px] font-bold mb-6 text-cactus">Luxury in the Highlands</span>
          <h1 className="text-5xl md:text-7xl serif mb-6">Suites & Sanctuaries</h1>
        </div>
      </section>

      <section className="py-24 bg-sandstone">
        <Container>
          <div className="grid grid-cols-1 gap-24">
            {suites.map((suite, idx) => (
              <article key={suite.id} className={`flex flex-col ${idx % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'} gap-12 items-center`}>
                <div className="flex-1 w-full relative group overflow-hidden">
                  <div className="aspect-[16/10] overflow-hidden rounded-sm">
                    <img 
                      src={suite.image} 
                      alt={suite.name} 
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                  </div>
                  <div className="absolute top-6 left-6 bg-forest text-sandstone p-4 shadow-xl">
                    <p className="text-[10px] uppercase font-bold tracking-widest text-cactus mb-1">From</p>
                    <p className="text-3xl serif">${suite.price}<span className="text-xs font-sans text-gray-400">/night</span></p>
                  </div>
                </div>

                <div className="flex-1 space-y-6">
                  <div className="flex items-center space-x-2 text-cactus">
                    {[...Array(5)].map((_, i) => <Star key={i} className="w-3 h-3 fill-current" />)}
                  </div>
                  <h2 className="text-4xl serif text-forest">{suite.name}</h2>
                  <p className="text-gray-600 leading-relaxed">{suite.description}</p>
                  
                  <div className="grid grid-cols-2 gap-4 py-4 border-y border-forest/5">
                    {suite.amenities.map(amenity => (
                      <div key={amenity} className="flex items-center space-x-3 text-xs text-gray-500 uppercase tracking-wider font-medium">
                        <div className="w-1.5 h-1.5 bg-cactus rounded-full" />
                        <span>{amenity}</span>
                      </div>
                    ))}
                  </div>

                  <div className="pt-4">
                    <Button onClick={() => handleBook(suite.name)} className="w-full lg:w-auto">
                      Reserve Your Stay
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
