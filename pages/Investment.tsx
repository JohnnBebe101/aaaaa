
import React from 'react';
import { SectionTitle, CanaanPattern, Button } from '../components/CommonUI';
import { Check, Mail, Calendar } from 'lucide-react';

const Investment: React.FC = () => {
  return (
    <div className="animate-in fade-in slide-in-from-bottom-4 duration-700">
      {/* Hero */}
      <section className="relative h-[60vh] flex items-center justify-center pt-24 bg-forest">
        <div className="absolute inset-0 z-0" aria-hidden="true">
          <img 
            src="https://images.unsplash.com/photo-1497215728101-856f4ea42174?auto=format&fit=crop&q=80&w=2000" 
            alt="Business in Northern Ethiopia" 
            className="w-full h-full object-cover opacity-40 mix-blend-overlay"
          />
          <div className="absolute inset-0 bg-forest/40"></div>
        </div>
        <div className="relative z-10 text-center text-sandstone px-6">
          <span className="block uppercase tracking-[0.3em] text-[10px] font-bold mb-6 text-cactus">Strategic Growth in Tigray</span>
          <h1 className="text-5xl md:text-7xl serif mb-6">Investment & Partnerships</h1>
          <p className="max-w-3xl mx-auto text-lg md:text-xl font-light text-gray-300">
            Adigrat is evolving into a premier economic hub for Northern Ethiopia. Canaan International is the cornerstone of this revitalization.
          </p>
        </div>
      </section>

      {/* Investment Overview */}
      <section className="py-24 bg-sandstone" aria-labelledby="investment-title">
        <div className="max-w-7xl mx-auto px-6">
          <SectionTitle 
            label="The Adigrat Advantage"
            title="Strategic Potential"
            description="Investing in Canaan International means participating in the resurgence of Tigray's tourism and commercial landscape."
            centered
          />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { title: 'Northern Corridor Hub', desc: 'Adigrat sits on the critical trade route connecting Addis Ababa to Axum and the Red Sea ports, making it a natural business destination.' },
              { title: 'Tourism Resurgence', desc: 'As global interest in Gheralta and Al Najashi grows, the demand for premium, biophilic hospitality exceeds existing supply.' },
              { title: 'Regional Impact', desc: 'A project that drives local employment, supports Tigrayan craftsmanship, and sets a new standard for sustainable luxury in Ethiopia.' },
            ].map((card) => (
              <article key={card.title} className="p-10 bg-white border border-cactus/5 hover:border-cactus/20 hover:shadow-xl transition-all duration-500">
                <h3 className="text-2xl serif mb-6 text-forest">{card.title}</h3>
                <p className="text-gray-600 leading-relaxed text-sm">{card.desc}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <CanaanPattern inverted />

      {/* Partnership Models */}
      <section className="py-24 bg-sandstone" aria-labelledby="partnership-title">
        <div className="max-w-7xl mx-auto px-6">
           <SectionTitle 
            label="Opportunities"
            title="Partnership Models"
            centered
          />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              { 
                title: 'Highland Hospitality', 
                desc: 'Equity participation in the operation of the first biophilic hotel in Tigray, capturing the premium luxury market.',
                items: ['High-yield potential', 'Exclusive branding rights', 'Priority investor stays', 'Governance participation']
              },
              { 
                title: 'The Trade Suites', 
                desc: 'Secure high-performance office and commercial suites for regional logistics or international NGOs operating in the North.',
                items: ['Fiber-optic connectivity', 'Flexible floor plans', 'Concierge business services', 'Secure facility']
              },
              { 
                title: 'Cultural Curation', 
                desc: 'Partner with our gallery and dining halls to showcase Tigrayan art and culinary traditions to a global audience.',
                items: ['Artistic residency programs', 'Culinary partnership', 'Event sponsorship', 'Brand visibility']
              },
              { 
                title: 'Sustainable Infrastructure', 
                desc: 'Invest in our green energy and water reclamation systems, positioning your portfolio at the forefront of Ethiopian ESG.',
                items: ['Green certification', 'Reduced operational costs', 'Tax incentives', 'Community impact metrics']
              },
            ].map((card) => (
              <article key={card.title} className="bg-white p-12 border border-cactus/5 hover:shadow-xl transition-all">
                <h3 className="text-2xl serif mb-6 text-forest">{card.title}</h3>
                <p className="text-gray-500 text-sm mb-8 leading-relaxed">{card.desc}</p>
                <ul className="space-y-3" role="list">
                  {card.items.map(item => (
                    <li key={item} className="text-sm text-gray-700 flex items-center">
                      <div className="w-1.5 h-1.5 bg-cactus rounded-full mr-3" aria-hidden="true"></div>
                      {item}
                    </li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-24 bg-cactus" aria-labelledby="partnership-cta-title">
         <div className="max-w-4xl mx-auto px-6 text-center">
            <h2 id="partnership-cta-title" className="text-5xl serif mb-8 text-sandstone">Invest in the North</h2>
            <p className="text-sandstone/80 mb-12 text-lg">
              We are inviting partners who see the vision of Adigrat as a global destination. Let’s build the future of Tigray together.
            </p>
            <div className="flex flex-col md:flex-row justify-center items-center space-y-4 md:space-y-0 md:space-x-4 mb-12">
               <button 
                  aria-label="Schedule a meeting with our regional investment office"
                  className="flex items-center px-10 py-5 bg-forest text-sandstone text-[10px] font-bold uppercase tracking-widest hover:opacity-90 transition-all focus:ring-2 focus:ring-white focus:ring-offset-2"
               >
                  <Calendar className="w-4 h-4 mr-3" aria-hidden="true" /> Schedule a Meeting
               </button>
               <button 
                  aria-label="Email our Adigrat development office"
                  className="flex items-center px-10 py-5 border-2 border-forest text-forest text-[10px] font-bold uppercase tracking-widest hover:bg-forest hover:text-sandstone transition-all focus:ring-2 focus:ring-forest focus:ring-offset-2"
               >
                  <Mail className="w-4 h-4 mr-3" aria-hidden="true" /> Email Investment Team
               </button>
            </div>
            <p className="text-[10px] font-bold text-forest/60">For development inquiries: <a href="mailto:invest@canaanadigrat.com" className="underline hover:text-forest transition-colors" aria-label="Email invest@canaanadigrat.com">invest@canaanadigrat.com</a></p>
         </div>
      </section>

      <CanaanPattern inverted />
    </div>
  );
};

export default Investment;
