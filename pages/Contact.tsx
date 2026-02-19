
import React from 'react';
import { SectionTitle, CanaanPattern, Container, Badge, Button } from '../components/CommonUI';
import { Mail, Phone, MapPin, Send } from 'lucide-react';

const Contact: React.FC = () => {
  return (
    <div className="animate-in fade-in duration-700">
       <section className="relative h-[50vh] flex items-center justify-center pt-24 bg-forest">
        <div className="absolute inset-0 z-0 bg-forest">
           <div className="absolute inset-0 opacity-20 canaan-pattern"></div>
        </div>
        <div className="relative z-10 text-center text-sandstone px-6">
          <Badge variant="cactus">Contact the Sanctuary</Badge>
          <h1 className="text-5xl md:text-7xl serif mt-6 mb-4">Connect with Us</h1>
          <p className="max-w-2xl mx-auto text-lg text-gray-400 font-light">Direct lines to our hospitality and investment teams in Adigrat.</p>
        </div>
      </section>

      <section className="py-32 bg-sandstone">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-16">
            <div className="lg:col-span-1 space-y-12">
               <div>
                 <h3 className="text-2xl serif text-forest mb-6">Highland Hospitality</h3>
                 <div className="space-y-6">
                    <div className="flex items-center space-x-4">
                      <div className="w-12 h-12 bg-white flex items-center justify-center rounded-full text-cactus shadow-sm"><Phone className="w-5 h-5" /></div>
                      <div><p className="text-[10px] uppercase font-bold text-gray-400">Call Us</p><p className="text-forest">+251 941 123 456</p></div>
                    </div>
                    <div className="flex items-center space-x-4">
                      <div className="w-12 h-12 bg-white flex items-center justify-center rounded-full text-cactus shadow-sm"><Mail className="w-5 h-5" /></div>
                      <div><p className="text-[10px] uppercase font-bold text-gray-400">Email Us</p><p className="text-forest">stay@canaanhotel.com</p></div>
                    </div>
                    <div className="flex items-center space-x-4">
                      <div className="w-12 h-12 bg-white flex items-center justify-center rounded-full text-cactus shadow-sm"><MapPin className="w-5 h-5" /></div>
                      <div><p className="text-[10px] uppercase font-bold text-gray-400">Location</p><p className="text-forest">Adigrat Hub, Tigray, Ethiopia</p></div>
                    </div>
                 </div>
               </div>
               <div className="p-8 bg-forest text-sandstone rounded-sm">
                  <h4 className="text-xl serif mb-4">Investment Portal</h4>
                  <p className="text-xs text-gray-400 mb-6">For partnership and development inquiries regarding the Stability Branch.</p>
                  <a href="mailto:partners@canaanhotel.com" className="text-cactus text-xs uppercase font-bold tracking-widest hover:text-sandstone transition-colors">partners@canaanhotel.com</a>
               </div>
            </div>

            <div className="lg:col-span-2 bg-white p-12 shadow-xl border border-forest/5">
              <SectionTitle title="Send a Message" description="We look forward to curating your sanctuary experience." />
              <form className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12">
                <div className="space-y-2">
                  <label className="text-[10px] uppercase font-bold tracking-widest text-gray-400">Full Name</label>
                  <input type="text" className="w-full bg-sandstone/30 border border-forest/5 p-4 text-sm outline-none focus:border-cactus" placeholder="John Doe" />
                </div>
                <div className="space-y-2">
                  <label className="text-[10px] uppercase font-bold tracking-widest text-gray-400">Email</label>
                  <input type="email" className="w-full bg-sandstone/30 border border-forest/5 p-4 text-sm outline-none focus:border-cactus" placeholder="john@example.com" />
                </div>
                <div className="md:col-span-2 space-y-2">
                  <label className="text-[10px] uppercase font-bold tracking-widest text-gray-400">Subject</label>
                  <select className="w-full bg-sandstone/30 border border-forest/5 p-4 text-sm outline-none focus:border-cactus appearance-none">
                    <option>General Inquiry</option>
                    <option>Suite Reservation</option>
                    <option>Event Booking</option>
                    <option>Partnership Inquiry</option>
                  </select>
                </div>
                <div className="md:col-span-2 space-y-2">
                  <label className="text-[10px] uppercase font-bold tracking-widest text-gray-400">Message</label>
                  <textarea rows={6} className="w-full bg-sandstone/30 border border-forest/5 p-4 text-sm outline-none focus:border-cactus resize-none" placeholder="Your inquiry..."></textarea>
                </div>
                <div className="md:col-span-2 pt-4">
                  <Button className="w-full">Submit Inquiry <Send className="w-4 h-4 ml-2" /></Button>
                </div>
              </form>
            </div>
          </div>
        </Container>
      </section>

      {/* Map Placeholder */}
      <section className="h-[60vh] bg-forest grayscale opacity-50 relative">
          <div className="absolute inset-0 flex items-center justify-center text-sandstone/20">
             <div className="text-center">
                <MapPin className="w-16 h-16 mx-auto mb-4" />
                <p className="serif text-3xl">Interactive Adigrat Map Integration</p>
                <p className="text-[10px] uppercase tracking-widest mt-2">Next.js Maps API Integration Pending</p>
             </div>
          </div>
      </section>
    </div>
  );
};

export default Contact;
