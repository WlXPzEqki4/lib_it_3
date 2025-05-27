import React from 'react';
import ScrollSection from '../components/ScrollSection';
import AnimatedText from '../components/AnimatedText';
import ProfileCard from '../components/ProfileCard';

const TraffickerProfiles: React.FC = () => {
  return (
    <ScrollSection id="traffickers" className="bg-gradient-to-b from-primary-900 to-primary-800">
      <AnimatedText delay={0}>
        <h2 className="font-display text-3xl md:text-4xl font-bold text-white mb-3 text-center">
          The Orchestrators
        </h2>
      </AnimatedText>
      
      <AnimatedText delay={300} className="mb-12 text-center">
        <p className="text-primary-200 text-lg max-w-2xl mx-auto">
          Key trafficker profiles and their network operations involving Italy
        </p>
      </AnimatedText>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
        <ProfileCard 
          name="Mustafa Berlin"
          realName="Mustafa Jalil Ibrahim"
          origin="Diyala, Iraq"
          base="Germany (Current), Turkey & Libya (Operations)"
          age={32}
          routes={[
            "Iraq → Turkey → Libya → Italy",
            "Italy → Germany",
            "Libya → Italy (Direct)",
            "Italy → France",
            "France → UK"
          ]}
          methods={[
            "Complex 'keys/codes' system for authentication",
            "Extensive network of intermediaries across multiple countries",
            "Advanced document forgery operations",
            "Multi-stage transport coordination",
            "Uses modern technology to evade surveillance",
            "Operates through encrypted communication channels"
          ]}
          associates={[
            {
              name: "Murtadha Al-Abbasi",
              role: "Right-hand coordinator",
              contact: "+9647709881322"
            },
            {
              name: "Ziad Al-Iraqi",
              role: "Border crossing specialist",
              contact: "+9647736686831"
            }
          ]}
          documents={[
            {
              type: "Iraqi Passport",
              number: "A15424553",
              issueDate: "2019-05-14",
              expiryDate: "2027-05-13",
              issuingAuthority: "Diali",
              details: {
                "Place of Birth": "Iraq - Diyala",
                "Mother's Name": "Hakeemah Kareem",
                "Father's Name": "Ibrahim"
              },
              photoUrl: "/images/mustafa-passport.jpg"
            },
            {
              type: "Turkish Tourist Visa",
              number: "58 977378",
              issueDate: "2023-10-04",
              expiryDate: "2024-10-04",
              issuingAuthority: "Turkish Embassy Baghdad",
              details: {
                "Duration": "30 days",
                "Type": "Tourism"
              },
              photoUrl: "/images/mustafa-visa.jpg"
            }
          ]}
          additionalInfo={[
            "Considered one of the most dangerous smugglers in the region",
            "Operates a sophisticated network spanning multiple countries",
            "Uses encrypted Telegram channel for communications",
            "Known for complex and dubious methods to bypass security",
            "Generates significant financial gains through illegal migration",
            "Network operates with high secrecy using advanced technologies"
          ]}
          fees="€4,000-€5,000 for Italy segment"
          dangerLevel="High-Risk Individual"
          photoUrl="/images/mustafa-casual.jpg"
          delay={0}
        />
        
        <ProfileCard 
          name="Abu Al-Nour"
          realName="Issam Baqrat"
          origin="Libya"
          base="Libya, coastal areas"
          routes={[
            "Libya-Italy direct sea route",
            "Coordinates Mediterranean crossings"
          ]}
          methods={[
            "Uses dilapidated boats and rubber vessels",
            "Monitors weather patterns for crossing timing",
            "Employs local contacts for migrant gathering",
            "Minimal safety considerations to maximize profit"
          ]}
          fees="€8,000-€10,000 for premium crossing"
          photoUrl="https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=300"
          delay={200}
        />
        
        <ProfileCard 
          name="Mahend Al-Iraqi"
          origin="Iraq"
          base="Libya, Italy"
          routes={[
            "Libya-Italy sea crossing",
            "Italy-Germany/EU onward transport"
          ]}
          methods={[
            "Provides car transport from Italian landing points",
            "Creates forged Italian residence permits",
            "Coordinates with other traffickers in Italy",
            "Specializes in circumventing Dublin Regulation"
          ]}
          fees="$12,000 for complete Italy-Germany package"
          photoUrl="https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg?auto=compress&cs=tinysrgb&w=300"
          delay={400}
        />
      </div>
      
      <AnimatedText delay={800} className="mt-12 mx-auto max-w-3xl">
        <div className="bg-primary-700/50 rounded-lg p-6 border-l-4 border-teal-500">
          <h3 className="text-xl font-semibold text-white mb-4">Network Sophistication</h3>
          <p className="text-primary-200 mb-4">
            These profiles represent the evolution of human smuggling networks into sophisticated, tech-savvy operations. Their methods demonstrate deep knowledge of European security systems and immigration procedures.
          </p>
          <p className="text-primary-200">
            The extensive reach of these networks, particularly exemplified by Mustafa Berlin's operation, shows how traditional smuggling routes have adapted to modern surveillance and border control measures.
          </p>
        </div>
      </AnimatedText>
    </ScrollSection>
  );
};

export default TraffickerProfiles;