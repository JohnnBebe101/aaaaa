
import React from 'react';
import { SectionTitle, CanaanPattern, Container, Badge, ServiceCard, HeritageFrieze } from '../components/CommonUI';
import { Waves, Heart, Plane, Utensils, Calendar, Camera } from 'lucide-react';

const Services: React.FC = () => {
  return (
    <div className="animate-in fade-in duration-700">
       <section className="relative h-[60vh] flex items-center justify-center pt-24 bg-forest">
        <div className="absolute inset-0 z-0">
          <img src="https://images.unsplash.com/photo-1544161515-4ae6ce6fe858?auto=format&fit=crop&q=80&w=2000" alt="Spa" className="w-full h-full object-cover opacity-30 grayscale" />
          <div className="absolute inset-0 bg-forest/40"></div>
        </div>
        <div className="relative z-10 text-center text-sandstone px-6">
          <Badge variant="cactus">The Highland Experience</Badge>
          <h1 className="text-5xl md:text-8xl serif mt-6 mb-6">Curated Services</h1>
          <p className="max-w-3xl mx-auto text-lg text-gray-300 font-light">From spiritual wellness to professional logistics, we ensure every aspect of your stay in Adigrat is handled with highland precision.</p>
        </div>
      </section>

      <section className="py-32 bg-sandstone">
        <Container>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px bg-forest/5 p-px">
            <ServiceCard 
              icon={<Waves className="w-10 h-10" />}
              title="Highland Basalt Spa"
              description="Therapies utilizing local sandstone heat and volcanic basalt stones for deep spiritual and physical restoration."
            />
            <ServiceCard 
              icon={<Plane className="w-10 h-10" />}
              title="Regional Expeditions"
              description="Bespoke private helicopter or 4x4 transfers to Gheralta, Axum, and the Danakil Depression."
            />
            <ServiceCard 
              icon={<Calendar className="w-10 h-10" />}
              title="Axumite Events"
              description="A grand circular ballroom designed after the Mesob, perfect for summits, weddings, and regional gatherings."
            />
            <ServiceCard 
              icon={<Heart className="w-10 h-10" />}
              title="Concierge Sanctuary"
              description="Personalized 24/7 assistance to curate your local itinerary and ensure a stable, secure highland stay."
            />
            <ServiceCard 
              icon={<Utensils className="w-10 h-10" />}
              title="In-Suite Ceremonies"
              description="Private Coffee and Tihlo ceremonies held within the sanctuary of your suite for total immersion."
            />
            <ServiceCard 
              icon={<Camera className="w-10 h-10" />}
              title="Cultural Photography"
              description="Guided tours with local artists to capture the unique light and dramatic silhouettes of the Adigrat landscape."
            />
          </div>
        </Container>
      </section>

      <HeritageFrieze />
      <CanaanPattern inverted />
    </div>
  );
};

export default Services;
