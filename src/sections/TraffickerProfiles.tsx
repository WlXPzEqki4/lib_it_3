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
          origin="Iraq"
          base="Turkey, Libya"
          routes={[
            "Iraq-Turkey-Libya-Italy",
            "Italy-Germany"
          ]}
          methods={[
            "Uses 'keys/codes' system for authentication",
            "Leverages extensive network of intermediaries",
            "Employs passport/visa forgery techniques",
            "Coordinates with traffickers in Italy for onward transport"
          ]}
          fees="€4,000-€5,000 for Italy segment"
          photoUrl="https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=300"
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
          <h3 className="text-xl font-semibold text-white mb-4">Network Interconnections</h3>
          <p className="text-primary-200 mb-4">
            These traffickers do not operate in isolation. They form part of a sophisticated, transnational network with Italy as a central hub. Coordination between these actors is evident, with handoffs occurring at key transit points.
          </p>
          <p className="text-primary-200">
            Their operations reveal an intimate knowledge of Italian geography, law enforcement patterns, and immigration procedures. This allows them to adapt quickly to changing circumstances and enforcement efforts.
          </p>
        </div>
      </AnimatedText>
    </ScrollSection>
  );
};

export default TraffickerProfiles;