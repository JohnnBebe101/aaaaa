
import React from 'react';
import { SectionTitle, CanaanPattern, Container, Badge, HeritageFrieze } from '../components/CommonUI';

const About: React.FC = () => {
  return (
    <div className="animate-in fade-in duration-700">
       <section className="relative h-[65vh] flex items-center justify-center pt-24 bg-forest">
        <div className="absolute inset-0 z-0">
          <img src="https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?auto=format&fit=crop&q=80&w=2000" alt="Heritage" className="w-full h-full object-cover opacity-40 grayscale" />
          <div className="absolute inset-0 bg-gradient-to-b from-forest/60 to-forest"></div>
        </div>
        <div className="relative z-10 text-center text-sandstone px-6">
          <Badge variant="cactus">Our Soul</Badge>
          <h1 className="text-5xl md:text-8xl serif mt-6 mb-6">The Mesob Vision</h1>
          <p className="max-w-3xl mx-auto text-lg md:text-xl font-light text-gray-300">Canaan International Adigrat is more than a hotel; it is an architectural dialogue between ancient stone and future prosperity.</p>
        </div>
      </section>

      <section className="py-32 bg-white">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
            <div className="space-y-8">
              <SectionTitle label="Heritage" title="A Beacon in the North" />
              <p className="text-lg text-gray-600 leading-relaxed font-light">
                Founded on the belief that luxury should be a vehicle for cultural preservation, the Grand Mesob Tower stands as a testament to Tigray's resilience. Our architecture mimics the Mesob—the traditional woven basket that signifies shared abundance and hospitality.
              </p>
              <p className="text-lg text-gray-600 leading-relaxed font-light">
                Every stone in our foundation is locally sourced sandstone, ensuring that the hotel breathes in harmony with the highland climate. We employ local craftsmen who have mastered Axumite stonework for generations.
              </p>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <img src="https://images.unsplash.com/photo-1543730058-7931f3bb9abc?auto=format&fit=crop&q=80&w=600" className="w-full aspect-square object-cover grayscale" alt="History" />
              <img src="https://images.unsplash.com/photo-1493246507139-91e8bef99c02?auto=format&fit=crop&q=80&w=600" className="w-full aspect-square object-cover" alt="Community" />
              <div className="col-span-2 bg-cactus p-12 text-sandstone">
                <h4 className="text-4xl serif mb-4">Stability</h4>
                <p className="text-sm opacity-80 leading-relaxed">Our project is the cornerstone of economic revitalization for Adigrat, creating hundreds of sustainable jobs and supporting local farmers.</p>
              </div>
            </div>
          </div>
        </Container>
      </section>

      <CanaanPattern inverted />
    </div>
  );
};

export default About;
