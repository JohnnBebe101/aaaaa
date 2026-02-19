
import React from 'react';
import { SectionTitle, CanaanPattern, Button, Container, Badge } from '../components/CommonUI';
import { Check, Mail, Calendar, TrendingUp, ShieldCheck, Globe, Building } from 'lucide-react';

const Investment: React.FC = () => {
  return (
    <div className="animate-in fade-in duration-700">
      {/* Hero */}
      <section className="relative h-[65vh] flex items-center justify-center pt-24 bg-forest" role="banner">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1497215728101-856f4ea42174?auto=format&fit=crop&q=80&w=2000" 
            alt="Business environment in Northern Ethiopia" 
            className="w-full h-full object-cover opacity-40 mix-blend-overlay"
          />
          <div className="absolute inset-0 bg-forest/40"></div>
        </div>
        <div className="relative z-10 text-center text-sandstone px-6">
          <Badge variant="cactus">Strategic Stability</Badge>
          <h1 className="text-5xl md:text-8xl serif mt-6 mb-6">Growth & Partnerships</h1>
          <p className="max-w-3xl mx-auto text-lg md:text-xl font-light text-gray-300">
            Adigrat is evolving into a premier economic hub for Northern Ethiopia. Canaan International is the foundation of this revitalization.
          </p>
        </div>
      </section>

      {/* Stability Roadmap */}
      <section className="py-32 bg-sandstone" aria-labelledby="roadmap-title">
        <Container>
            <SectionTitle 
                label="The Project Timeline"
                title="Structural Stability Roadmap"
                description="We have built a transparent framework for growth, ensuring every phase of the Grand Mesob Tower meets global engineering standards."
                centered
            />
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mt-20" role="list" aria-label="Project timeline phases">
                {[
                    { phase: '01', status: 'Complete', title: 'Conceptualization', desc: 'Initial biophilic architectural blueprints and local soil diagnostics.' },
                    { phase: '02', status: 'In Progress', title: 'Basalt Foundations', desc: 'Setting the deep structural foundations for the Grand Mesob Tower.' },
                    { phase: '03', status: 'Q4 2026', title: 'Exterior Shell', desc: 'Installation of solar-harvesting glass and sandstone facade.' },
                    { phase: '04', status: 'Q2 2027', title: 'Operational Launch', desc: 'Full grand opening and operational partnership management.' },
                ].map((item, i) => (
                    <div key={i} className="relative group" role="listitem">
                        <div className="text-5xl serif text-cactus/20 group-hover:text-cactus/40 transition-colors mb-4" aria-hidden="true">{item.phase}</div>
                        <h4 className="serif text-xl text-forest mb-2">{item.title}</h4>
                        <p className="text-xs text-gray-500 leading-relaxed mb-6">{item.desc}</p>
                        <Badge variant={item.status === 'Complete' ? 'cactus' : 'sandstone'}>{item.status}</Badge>
                    </div>
                ))}
            </div>
        </Container>
      </section>

      <CanaanPattern inverted aria-hidden="true" />

      {/* ROI & Highlights */}
      <section className="py-32 bg-forest text-sandstone overflow-hidden" aria-labelledby="roi-title">
        <Container>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
                <div className="grid grid-cols-2 gap-8" role="list" aria-label="Investment highlights">
                    <div className="bg-white/5 p-10 border border-white/10 text-center" role="listitem">
                        <TrendingUp className="w-8 h-8 text-cactus mx-auto mb-6" aria-hidden="true" />
                        <h5 className="text-3xl serif mb-1">12.5%</h5>
                        <p className="text-[10px] uppercase tracking-widest text-gray-400">Projected Yield</p>
                    </div>
                    <div className="bg-white/5 p-10 border border-white/10 text-center" role="listitem">
                        <Building className="w-8 h-8 text-cactus mx-auto mb-6" aria-hidden="true" />
                        <h5 className="text-3xl serif mb-1">85%</h5>
                        <p className="text-[10px] uppercase tracking-widest text-gray-400">Equity Secure</p>
                    </div>
                    <div className="bg-white/5 p-10 border border-white/10 text-center" role="listitem">
                        <ShieldCheck className="w-8 h-8 text-cactus mx-auto mb-6" aria-hidden="true" />
                        <h5 className="text-3xl serif mb-1">Zero</h5>
                        <p className="text-[10px] uppercase tracking-widest text-gray-400">Structural Debt</p>
                    </div>
                    <div className="bg-white/5 p-10 border border-white/10 text-center" role="listitem">
                        <Globe className="w-8 h-8 text-cactus mx-auto mb-6" aria-hidden="true" />
                        <h5 className="text-3xl serif mb-1">Top 5</h5>
                        <p className="text-[10px] uppercase tracking-widest text-gray-400">Regional Hubs</p>
                    </div>
                </div>
                <div>
                    <SectionTitle 
                        label="Financial Integrity"
                        title="Stability You Can Measure"
                        description="Our financial models are based on conservative regional growth indices and the unique premium position of biophilic luxury in Ethiopia."
                        dark
                    />
                    <div className="space-y-6 pt-4">
                        <p className="text-gray-400 font-light leading-relaxed">
                            Canaan International Adigrat represents a low-risk, high-impact entry into the Northern Ethiopian tourism corridor. With structural stability at our core, we ensure that every partnership is built for the long term.
                        </p>
                        <Button className="mt-8" ariaLabel="Request our full investor briefing document">Request Investor Brief</Button>
                    </div>
                </div>
            </div>
        </Container>
      </section>

      <CanaanPattern inverted aria-hidden="true" />
    </div>
  );
};

export default Investment;
