
import React from 'react';
import { SectionTitle, Container, Badge, CanaanPattern } from '../components/CommonUI';
import { PageType } from '../types';

interface LegalPageProps {
  type: PageType.PRIVACY | PageType.TERMS | PageType.COOKIES;
}

const LegalPage: React.FC<LegalPageProps> = ({ type }) => {
  const content = {
    [PageType.PRIVACY]: {
      title: "Privacy Sanctuary",
      label: "Data Protection & Heritage",
      description: "How we preserve your personal footprint while providing luxury in the highlands.",
      body: [
        { subtitle: "1. Data Collection", text: "We collect only the essential details required to facilitate your sanctuary experience. This includes reservation information and preferences to tailor your stay." },
        { subtitle: "2. Preservation of Privacy", text: "Your data is stored with the same level of structural integrity as our basalt foundations. We do not sell your personal heritage to third parties." },
        { subtitle: "3. Digital Footprints", text: "We use secure protocols to ensure your digital interaction with Canaan International Hotel is as safe as your physical presence in our Grand Mesob Tower." }
      ]
    },
    [PageType.TERMS]: {
      title: "Terms of Sanctuary",
      label: "Operational Integrity",
      description: "The structural agreement between our guests and the Stability Branch.",
      body: [
        { subtitle: "1. Reservations", text: "All bookings are subject to the cultural and operational availability of our suites. Cancellations must be made within the highland window of 72 hours." },
        { subtitle: "2. Conduct within the Tower", text: "Guests are expected to respect the biophilic environment and the cultural heritage of Adigrat. Any damage to architectural friezes will be assessed at heritage restoration rates." },
        { subtitle: "3. Liability", text: "While we provide maximum structural stability, we are not responsible for natural shifts in the highland terrain beyond our engineering scope." }
      ]
    },
    [PageType.COOKIES]: {
      title: "Cookie Sovereignty",
      label: "Digital Experience",
      description: "Small digital fragments that help us remember your highland preferences.",
      body: [
        { subtitle: "1. What are Cookies?", text: "Digital artifacts used to improve your browsing experience. They act as a memory of your interactions with our sanctuary portal." },
        { subtitle: "2. Essential Cookies", text: "Required for the stability of our reservation system and your secure payment processing." },
        { subtitle: "3. Preference Cookies", text: "Used to remember if you prefer the Highland Espresso or the Ceremonial Coffee on your next visit." }
      ]
    }
  }[type];

  return (
    <div className="animate-in fade-in duration-700 pt-32 pb-40 bg-sandstone">
      <Container>
        <div className="max-w-4xl mx-auto">
          <SectionTitle 
            label={content.label}
            title={content.title}
            description={content.description}
          />
          
          <div className="mt-20 space-y-16">
            {content.body.map((section, idx) => (
              <div key={idx} className="space-y-6">
                <h3 className="text-2xl serif text-forest border-l-2 border-cactus pl-6">{section.subtitle}</h3>
                <p className="text-gray-600 leading-relaxed font-light text-lg">
                  {section.text}
                </p>
              </div>
            ))}
          </div>

          <div className="mt-32 p-12 border border-cactus/10 bg-white/50 italic text-sm text-gray-500 text-center rounded-sm">
            "Integrity in our operations is as vital as the sandstone in our walls. Thank you for trusting the Stability Core."
          </div>
        </div>
      </Container>
      <div className="mt-40">
        <CanaanPattern inverted />
      </div>
    </div>
  );
};

export default LegalPage;
