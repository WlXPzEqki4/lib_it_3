import React from 'react';
import ScrollSection from '../components/ScrollSection';
import AnimatedText from '../components/AnimatedText';
import AnimatedMap from '../components/AnimatedMap';
import { MapPin, Users, Home, Briefcase } from 'lucide-react';

const italyLocations = [
  { id: 'sicily', x: 14.0154, y: 37.5994, label: 'Sicily', highlight: true },
  { id: 'lampedusa', x: 12.6011, y: 35.5087, label: 'Lampedusa', highlight: true },
  { id: 'cortona', x: 11.9851, y: 43.2751, label: 'Cortona', delay: 0.2 },
  { id: 'milan', x: 9.1900, y: 45.4642, label: 'Milan', delay: 0.4 },
  { id: 'rome', x: 12.4964, y: 41.9028, label: 'Rome', delay: 0.6 },
  { id: 'naples', x: 14.2681, y: 40.8518, label: 'Naples', delay: 0.8 }
];

const ArrivalExperiences: React.FC = () => {
  return (
    <ScrollSection id="experiences" className="bg-gradient-to-b from-primary-800 to-primary-900">
      <AnimatedText delay={0}>
        <h2 className="font-display text-3xl md:text-4xl font-bold text-white mb-3 text-center">
          Arrival & The Italian Bottleneck
        </h2>
      </AnimatedText>
      
      <AnimatedText delay={300} className="mb-12 text-center">
        <p className="text-primary-200 text-lg max-w-2xl mx-auto">
          Migrant experiences after landing on Italian shores
        </p>
      </AnimatedText>
      
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        <div className="order-2 lg:order-1">
          <AnimatedMap 
            routes={[]} 
            locations={italyLocations}
            className="h-screen-70 md:h-96"
            center={[12.4964, 41.9028]}
            zoom={6}
          />
        </div>
        
        <div className="order-1 lg:order-2 space-y-8">
          <AnimatedText delay={300}>
            <div className="flex bg-primary-700/50 p-5 rounded-lg">
              <MapPin size={24} className="text-accent-400 mr-4 flex-shrink-0 mt-1" />
              <div>
                <h3 className="text-lg font-semibold text-white mb-2">Initial Arrival Process</h3>
                <p className="text-primary-200">
                  Upon arrival, migrants are fingerprinted for the EURODAC system and processed at reception centers in Sicily or Lampedusa. This registration under the Dublin Regulation legally binds them to Italy as their first EU entry point.
                </p>
              </div>
            </div>
          </AnimatedText>
          
          <AnimatedText delay={500}>
            <div className="flex bg-primary-700/50 p-5 rounded-lg">
              <Users size={24} className="text-teal-400 mr-4 flex-shrink-0 mt-1" />
              <div>
                <h3 className="text-lg font-semibold text-white mb-2">Refugee Camps</h3>
                <p className="text-primary-200 mb-3">
                  Many migrants, like Abu Raad, are placed in refugee camps such as those in Cortona, where conditions are often challenging.
                </p>
                <blockquote className="pl-4 border-l-2 border-primary-400 italic text-primary-300">
                  "Life here is not easy. We wait for papers that may never come." — Abu Raad
                </blockquote>
              </div>
            </div>
          </AnimatedText>
          
          <AnimatedText delay={700}>
            <div className="flex bg-primary-700/50 p-5 rounded-lg">
              <Home size={24} className="text-teal-400 mr-4 flex-shrink-0 mt-1" />
              <div>
                <h3 className="text-lg font-semibold text-white mb-2">Urban Hiding</h3>
                <p className="text-primary-200 mb-3">
                  Those seeking to move onward to other EU countries often hide in major cities. Khaled described spending months in Milan, avoiding authorities while arranging onward travel.
                </p>
                <blockquote className="pl-4 border-l-2 border-primary-400 italic text-primary-300">
                  "I stayed with other Syrians in a small apartment. We rarely went outside during daylight." — Khaled
                </blockquote>
              </div>
            </div>
          </AnimatedText>
          
          <AnimatedText delay={900}>
            <div className="flex bg-primary-700/50 p-5 rounded-lg">
              <Briefcase size={24} className="text-teal-400 mr-4 flex-shrink-0 mt-1" />
              <div>
                <h3 className="text-lg font-semibold text-white mb-2">Illegal Work</h3>
                <p className="text-primary-200 mb-3">
                  In Naples and Rome, migrants like Leila and Marwan often resort to informal work to survive and save for onward journeys.
                </p>
                <blockquote className="pl-4 border-l-2 border-primary-400 italic text-primary-300">
                  "I worked 12 hours a day in a restaurant kitchen for very little money, but I needed to save for the next part of my journey." — Marwan
                </blockquote>
              </div>
            </div>
          </AnimatedText>
        </div>
      </div>
    </ScrollSection>
  );
};

export default ArrivalExperiences;