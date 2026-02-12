
import React from 'react';
import { SectionTitle, CanaanPattern, Container } from '../components/CommonUI';

const Culture: React.FC = () => {
  return (
    <div className="animate-in fade-in duration-700">
       {/* Hero */}
       <section className="relative h-[60vh] flex items-center justify-center pt-24 bg-forest">
        <div className="absolute inset-0 z-0" aria-hidden="true">
          <img 
            src="https://images.unsplash.com/photo-1543730058-7931f3bb9abc?auto=format&fit=crop&q=80&w=2000" 
            alt="Cultural Landscape of Tigray" 
            className="w-full h-full object-cover opacity-30 mix-blend-overlay grayscale"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-forest/60 to-forest"></div>
        </div>
        <div className="relative z-10 text-center text-sandstone px-6">
          <span className="block uppercase tracking-[0.3em] text-[10px] font-bold mb-6 text-cactus">Heritage & Identity</span>
          <h1 className="text-5xl md:text-7xl serif mb-6">Tigray’s Living Legacy</h1>
          <p className="max-w-3xl mx-auto text-lg md:text-xl font-light text-gray-300">
            Adigrat sits at the heart of a civilization that spans three millennia. From Axumite obelisks to the rock-hewn heights of Gheralta.
          </p>
        </div>
      </section>

      {/* The Story Section */}
      <section className="py-24 bg-white" aria-labelledby="story-title">
        <Container className="flex flex-col md:flex-row items-center gap-16">
          <div className="flex-1" aria-hidden="true">
             <div className="relative p-4 border border-cactus/10 rounded-2xl">
                <img 
                    src="https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?auto=format&fit=crop&q=80&w=1200" 
                    alt="Traditional Art" 
                    className="w-full aspect-[3/4] object-cover rounded-xl grayscale opacity-80"
                />
                <div className="absolute -top-4 -left-4 w-24 h-24 border-t-4 border-l-4 border-cactus"></div>
             </div>
          </div>
          <div className="flex-1">
            <SectionTitle 
                label="The Axumite Origin"
                title="The Soul of the Highlands"
            />
            <div className="space-y-6 text-gray-600 leading-relaxed text-sm">
                <p>The architecture of Canaan International Adigrat is a tribute to the "Mesob"—the traditional shared dining vessel that represents unity and hospitality in Tigray.</p>
                <p>We celebrate the endurance of the Highland culture. Our proximity to the Debre Damo monastery—founded in the 6th century—reminds us of the resilience and spiritual depth of this land. Adigrat itself, known as the "Gateway of the Highlands," has long served as a center of commerce and cultural exchange.</p>
                <p>By integrating Axumite geometric logic with contemporary biophilic luxury, we invite our guests to participate in a story that is both ancient and evolving.</p>
            </div>
          </div>
        </Container>
      </section>

      <CanaanPattern inverted />

      {/* Heritage Landmarks */}
      <section className="py-24 bg-forest text-sandstone" aria-labelledby="museum-title">
        <Container>
          <SectionTitle 
            label="Cultural Exploration"
            title="Spiritual Crossroads"
            description="Explore the sacred sites that have made Tigray a beacon of religious and historical significance for centuries."
            dark
            centered
          />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              { 
                title: 'Al Najashi Heritage', 
                desc: 'Located just south of Adigrat, Al Najashi is the oldest mosque in Africa, marking the hospitality shown by the King of Axum to the first companions of Prophet Muhammad.',
                points: ['First Islamic migration (Hijra)', 'Ancient tombs of the companions', 'Symbol of interfaith harmony']
              },
              { 
                title: 'Rock-Hewn Gheralta', 
                desc: 'Abuna Yemata Guh and Maryam Papaseti—churches carved directly into vertical sandstone cliffs, preserving 10th-century murals and manuscripts.',
                points: ['Vertical rock climbing pilgrimage', 'Untouched 15th-century frescoes', 'Breathtaking high-altitude views']
              },
              { 
                title: 'Axumite Obelisks', 
                desc: 'The UNESCO World Heritage site of Axum, the center of one of the four great powers of the ancient world, is a short journey from our hotel.',
                points: ['Towering granite stelae', 'Ruins of the Queen of Sheba’s palace', 'Ark of the Covenant tradition']
              },
              { 
                title: 'Highland Traditions', 
                desc: 'Experience the Tigrayan way of life through the Tihlo ceremony and the rhythmic movements of the Tigrinya dance.',
                points: ['Traditional Tihlo dining', 'Authentic coffee ceremony', 'Intricate highland textiles']
              },
            ].map((item) => (
              <article key={item.title} className="bg-white/5 border border-white/10 p-12 hover:bg-white/10 transition-all">
                <h3 className="text-2xl serif mb-4 text-cactus">{item.title}</h3>
                <p className="text-gray-400 text-sm mb-6 leading-relaxed">{item.desc}</p>
                <ul className="space-y-2" role="list">
                  {item.points.map(p => (
                    <li key={p} className="text-[10px] text-gray-500 flex items-center">
                       <span className="w-1 h-1 bg-cactus mr-2" aria-hidden="true"></span> {p}
                    </li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </Container>
      </section>

      {/* Regional Specialties */}
      <section className="py-24 bg-sandstone">
        <Container>
          <SectionTitle 
            label="Gastronomy"
            title="The Flavors of Tigray"
            description="Our kitchen is a tribute to the highland soil, offering dishes that have sustained the people of Adigrat for generations."
            centered
          />

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-16">
            {[
              { name: 'Tihlo', role: 'Barley Specialty' },
              { name: 'Ambasha', role: 'Traditional Spiced Bread' },
              { name: 'Tegabino', role: 'Spiced Chickpea Stew' },
              { name: 'Siwa', role: 'Highland Honey Brew' }
            ].map(dish => (
              <article key={dish.name} className="border border-cactus/10 p-8 text-center bg-white hover:border-cactus transition-all">
                 <h4 className="font-bold text-sm mb-2 text-forest">{dish.name}</h4>
                 <p className="text-[10px] text-gray-400 uppercase tracking-tighter">{dish.role}</p>
              </article>
            ))}
          </div>
        </Container>
      </section>

      <CanaanPattern inverted />
    </div>
  );
};

export default Culture;
