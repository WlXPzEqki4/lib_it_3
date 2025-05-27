import React from 'react';
import ScrollSection from '../components/ScrollSection';
import AnimatedText from '../components/AnimatedText';
import ProfileCard from '../components/ProfileCard';

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
              name="Mahend Al-Iraqi"
              realName="Mahend Abdul Majid"
              origin="Iraq"
              base="Turkey, Italy"
              routes={[
                "Libya → Italy",
                "Iraq → UK",
                "Iraq → Germany",
                "Belarus/Italy → EU Countries"
              ]}
              methods={[
                "Operates in complete secrecy",
                "Uses advanced surveillance bypass methods",
                "Provides car transport services",
                "Creates forged residence permits",
                "Coordinates with local driver networks"
              ]}
              fees="€2,500-€12,000 depending on route"
              additionalInfo={[
                "Manages vast and diverse trafficking network",
                "Family-based operation with brother and cousin",
                "Specializes in onward EU movement",
                "One of the most dangerous networks",
                "Operates with high technological sophistication"
              ]}
              delay={400}
            />
          </div>
        </div>
      </div>
    </ScrollSection>
  );
};

export default WiderWeb;