
import React from 'react';
import { SectionTitle, CanaanPattern, Container, Badge, HeritageFrieze } from '../components/CommonUI';
import { Coffee, Utensils, Landmark, History } from 'lucide-react';

const Culture: React.FC = () => {
  return (
    <div className="animate-in fade-in duration-700">
       {/* Hero */}
       <section className="relative h-[65vh] flex items-center justify-center pt-24 bg-forest">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1543730058-7931f3bb9abc?auto=format&fit=crop&q=80&w=2000" 
            alt="Cultural Landscape of Tigray" 
            className="w-full h-full object-cover opacity-30 mix-blend-overlay grayscale"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-forest/60 to-forest"></div>
        </div>
        <div className="relative z-10 text-center text-sandstone px-6">
          <Badge variant="cactus">Heritage & Identity</Badge>
          <h1 className="text-5xl md:text-8xl serif mt-6 mb-6">Tigray’s Living Legacy</h1>
          <p className="max-w-3xl mx-auto text-lg md:text-xl font-light text-gray-300">
            Adigrat sits at the heart of a civilization that spans three millennia. Experience the fusion of Axumite soul and modern sanctuary.
          </p>
        </div>
      </section>

      {/* The Story Section */}
      <section className="py-32 bg-white overflow-hidden">
        <Container className="flex flex-col lg:flex-row items-center gap-24">
          <div className="flex-1 relative">
             <div className="relative p-6 border border-cactus/10 rounded-2xl bg-sandstone/30">
                <img 
                    src="https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?auto=format&fit=crop&q=80&w=1200" 
                    alt="Traditional Art" 
                    className="w-full aspect-[4/5] object-cover rounded-sm grayscale opacity-90 shadow-2xl"
                />
                <div className="absolute -top-6 -left-6 w-32 h-32 border-t-8 border-l-8 border-cactus hidden md:block"></div>
             </div>
          </div>
          <div className="flex-1">
            <SectionTitle 
                label="The Axumite Origin"
                title="The Soul of the Highlands"
            />
            <div className="space-y-8 text-gray-600 leading-relaxed text-lg font-light">
                <p>The architecture of Canaan International Adigrat is a tribute to the "Mesob"—the traditional shared dining vessel that represents unity and hospitality in Tigray.</p>
                <p>We celebrate the endurance of the Highland culture. Our proximity to the Debre Damo monastery—founded in the 6th century—reminds us of the resilience and spiritual depth of this land.</p>
                <div className="grid grid-cols-2 gap-8 pt-8">
                    <div>
                        <h4 className="serif text-xl text-forest mb-2">3k+ Years</h4>
                        <p className="text-[10px] uppercase font-bold text-cactus tracking-widest">Recorded History</p>
                    </div>
                    <div>
                        <h4 className="serif text-xl text-forest mb-2">6th Century</h4>
                        <p className="text-[10px] uppercase font-bold text-cactus tracking-widest">Spiritual Founding</p>
                    </div>
                </div>
            </div>
          </div>
        </Container>
      </section>

      <CanaanPattern inverted />

      {/* Gastronomy Section - The Tihlo Experience */}
      <section className="py-32 bg-sandstone">
        <Container>
            <div className="flex flex-col lg:flex-row gap-16">
                <div className="flex-1">
                    <SectionTitle 
                        label="Canaanite Dining"
                        title="The Tihlo Experience"
                        description="Our kitchen is a tribute to the highland soil, offering dishes that have sustained the people of Adigrat for generations."
                    />
                    <div className="space-y-6">
                        {[
                            { name: 'Traditional Tihlo', price: '$22', desc: 'Barley dough balls served with spiced meat or vegetarian wot.' },
                            { name: 'Spiced Ambasha', price: '$12', desc: 'Traditional highland bread infused with local spices.' },
                            { name: 'Highland Siwa', price: '$15', desc: 'Ancient honey-based brew fermented in traditional clay.' },
                            { name: 'Mesob Sampler', price: '$45', desc: 'A communal journey through Tigray’s most iconic flavors.' },
                        ].map((item, i) => (
                            <div key={i} className="flex justify-between items-end border-b border-cactus/10 pb-4 group cursor-default">
                                <div className="flex-1 pr-4">
                                    <h4 className="serif text-xl text-forest group-hover:text-cactus transition-colors">{item.name}</h4>
                                    <p className="text-sm text-gray-500 italic mt-1">{item.desc}</p>
                                </div>
                                <div className="text-forest font-bold font-sans text-sm">{item.price}</div>
                            </div>
                        ))}
                    </div>
                </div>
                <div className="flex-1 bg-forest p-16 text-sandstone flex flex-col justify-center items-center text-center rounded-sm">
                    <Coffee className="w-16 h-16 text-cactus mb-10" />
                    <h3 className="text-4xl serif mb-6">Ceremonial Coffee</h3>
                    <p className="text-gray-400 font-light leading-relaxed mb-10">
                        Experience the three stages of the Tigrayan coffee ceremony: Abol, Tona, and Baraka. A journey of aroma and highland hospitality.
                    </p>
                    <button className="text-[10px] uppercase tracking-[0.4em] font-bold text-cactus border-b border-cactus pb-2 hover:text-sandstone hover:border-sandstone transition-all">
                        Book Private Ceremony
                    </button>
                </div>
            </div>
        </Container>
      </section>

      <HeritageFrieze />
      <CanaanPattern inverted />
    </div>
  );
};

export default Culture;
