import React from 'react';
import ScrollSection from '../components/ScrollSection';
import AnimatedText from '../components/AnimatedText';
import AnimatedMap from '../components/AnimatedMap';
import ProfileCard from '../components/ProfileCard';

const otherRoutes = [
  {
    id: 'tunisia-route',
    points: [
      { x: 10.1815, y: 36.8065 }, // Tunisia
      { x: 11.0, y: 36.0 },      // Mediterranean
      { x: 11.5, y: 35.5 },      // Mediterranean
      { x: 12.6011, y: 35.5087 }, // Lampedusa
    ],
    color: '#27ab83',
    delay: 0.3
  },
  {
    id: 'egypt-route',
    points: [
      { x: 29.9187, y: 31.2001 }, // Egypt (Alexandria)
      { x: 25.0, y: 33.0 },      // Mediterranean
      { x: 20.0, y: 35.0 },      // Mediterranean
      { x: 14.0154, y: 37.5994 }, // Sicily
    ],
    color: '#27ab83',
    delay: 0.6
  },
  {
    id: 'libya-malta-italy',
    points: [
      { x: 17.8739, y: 31.5494 }, // Libya
      { x: 15.5, y: 35.0 },      // Mediterranean
      { x: 14.5144, y: 35.8989 }, // Malta
      { x: 14.0154, y: 37.5994 }, // Sicily
    ],
    color: '#27ab83',
    delay: 0.9
  }
];

const keyLocations = [
  { id: 'tunisia', x: 10.1815, y: 36.8065, label: 'Tunisia', delay: 0.3 },
  { id: 'egypt', x: 29.9187, y: 31.2001, label: 'Egypt', delay: 0.6 },
  { id: 'malta', x: 14.5144, y: 35.8989, label: 'Malta', delay: 0.9 },
  { id: 'lampedusa', x: 12.6011, y: 35.5087, label: 'Lampedusa', highlight: true, delay: 0.3 },
  { id: 'sicily', x: 14.0154, y: 37.5994, label: 'Sicily', highlight: true }
];

const WiderWeb: React.FC = () => {
  return (
    <ScrollSection id="wider-web" className="bg-gradient-to-b from-primary-900 to-primary-800">
      <AnimatedText delay={0}>
        <h2 className="font-display text-3xl md:text-4xl font-bold text-white mb-3 text-center">
          The Wider Web
        </h2>
      </AnimatedText>
      
      <AnimatedText delay={300} className="mb-12 text-center">
        <p className="text-primary-200 text-lg max-w-2xl mx-auto">
          Additional routes converging on Italy
        </p>
      </AnimatedText>
      
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
        <div>
          <AnimatedText delay={200}>
            <h3 className="text-xl font-semibold text-white mb-4 border-l-4 pl-4 border-teal-500">
              Italy: The Mediterranean Nexus
            </h3>
          </AnimatedText>
          
          <AnimatedText delay={400} className="mb-8">
            <p className="text-primary-200 mb-4">
              While the Libya-Italy route receives the most attention, several other significant pathways converge on Italian shores, reinforcing Italy's central position in Mediterranean migration networks.
            </p>
            <p className="text-primary-200">
              Each route has its own specialized traffickers, price points, and risk profiles, but all ultimately funnel migrants through the Italian reception system.
            </p>
          </AnimatedText>
          
          <div className="space-y-6">
            <AnimatedText delay={600}>
              <div className="bg-primary-800/60 backdrop-blur-sm rounded-lg p-5">
                <h4 className="font-semibold text-white mb-2">Tunisia → Lampedusa</h4>
                <p className="text-primary-200">
                  A shorter but increasingly monitored route, typically costing €1,500-€3,000. Popular with North African migrants seeking direct access to the EU.
                </p>
              </div>
            </AnimatedText>
            
            <AnimatedText delay={800}>
              <div className="bg-primary-800/60 backdrop-blur-sm rounded-lg p-5">
                <h4 className="font-semibold text-white mb-2">Egypt → Italy</h4>
                <p className="text-primary-200">
                  Departing from Alexandria or Damietta, this longer route uses larger vessels and costs €4,000-€6,000. Frequently used by Egyptian, Syrian and East African migrants.
                </p>
              </div>
            </AnimatedText>
            
            <AnimatedText delay={1000}>
              <div className="bg-primary-800/60 backdrop-blur-sm rounded-lg p-5">
                <h4 className="font-semibold text-white mb-2">Libya → Malta → Italy</h4>
                <p className="text-primary-200">
                  A two-stage route sometimes used to avoid direct Libya-Italy patrols. Migrants may be temporarily housed in Malta before continuing to Sicily.
                </p>
              </div>
            </AnimatedText>
          </div>
        </div>
        
        <div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <ProfileCard 
              name="Abu Al-Nour"
              realName="Issam Baqrat"
              origin="Syria"
              base="Al-Hawarni, Libya"
              routes={[
                "Libya → Italy (Direct)",
                "Eastern Libya → Italian Skatra",
                "Libya → Lampedusa"
              ]}
              methods={[
                "Uses small and dilapidated boats",
                "Night operations and bad weather timing",
                "Advanced security bypass methods",
                "Multiple 'keys/codes' system",
                "Complex network of intermediaries"
              ]}
              fees="€8,000-€10,000 for premium crossing"
              additionalInfo={[
                "Key figure in Libyan smuggling operations",
                "Coordinates complex organized operations",
                "Maintains anonymity through concealed identity",
                "Claims expertise in handling authorities",
                "Collaborates with multiple networks"
              ]}
              delay={200}
            />
            
            <ProfileCard 
              name="Murtadha Al-Abbasi"
              origin="Iraq"
              base="Libya, Turkey"
              routes={[
                "Turkey → Libya → Italy",
                "Libya → Italy (Direct)",
                "Italy → Northern Europe"
              ]}
              methods={[
                "Coordinates and executes ground operations",
                "Organizes smuggler movements",
                "Manages potential migrant movements",
                "Supervises operation success",
                "Right-hand man to Mustafa Berlin"
              ]}
              fees="Part of Mustafa Berlin's network operations"
              additionalInfo={[
                "Mustafa Berlin's right-hand man",
                "Coordinates and executes smuggling operations on the ground",
                "Cooperates with Mustafa in organizing movements",
                "Continuously supervises operations to ensure success"
              ]}
              delay={400}
            />
          </div>
          
          <div className="mt-8">
            <AnimatedMap 
              routes={otherRoutes} 
              locations={keyLocations}
              className="h-[400px] w-full"
              center={[15.5, 35.0]}
              zoom={5}
            />
          </div>
        </div>
      </div>
    </ScrollSection>
  );
};

export default WiderWeb;