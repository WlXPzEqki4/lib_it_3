import React from 'react';
import ScrollSection from '../components/ScrollSection';
import AnimatedText from '../components/AnimatedText';
import AnimatedMap from '../components/AnimatedMap';
import DataCard from '../components/DataCard';
import { Anchor, Clock, Banknote, AlertTriangle } from 'lucide-react';

const libyanRoute = [
  {
    id: 'italian-skatra-lampedusa',
    points: [
      { x: 22.6367, y: 32.7630 }, // Derna (Italian Skatra)
      { x: 12.6000, y: 35.5011 }  // Lampedusa
    ],
    color: '#ff3333', // red line for primary route
    highlight: true
  }
];

const keyLocations = [
  { id: 'italian-skatra', x: 22.6367, y: 32.7630, label: 'Italian Skatra', highlight: false, embarkation: true },
  { id: 'lampedusa', x: 12.6000, y: 35.5011, label: 'Lampedusa', highlight: true, arrival: true }
];

const PerilousPassage: React.FC = () => {
  return (
    <ScrollSection id="perilous-passage" className="bg-gradient-to-b from-primary-800 to-primary-900">
      <AnimatedText delay={0}>
        <h2 className="font-display text-3xl md:text-4xl font-bold text-white mb-3 text-center">
          The Perilous Passage
        </h2>
      </AnimatedText>
      
      <AnimatedText delay={300} className="mb-12 text-center">
        <p className="text-primary-200 text-lg max-w-2xl mx-auto">
          The Libya-Italy sea route remains one of the deadliest migration paths in the world
        </p>
      </AnimatedText>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-16">
        <div>
          <AnimatedMap 
            routes={libyanRoute} 
            locations={keyLocations}
            className="h-screen-60 md:h-96 mb-8"
            center={[17.0, 34.5]} // Center between Derna and Lampedusa
            zoom={4.2}
          />
          
          <div className="grid grid-cols-2 gap-4">
            <DataCard 
              title="Journey Time" 
              value="3-5 hours"
              description="Weather conditions permitting"
              icon={<Clock size={24} />}
              delay={400}
            />
            <DataCard 
              title="Departure Point" 
              value="Italian Skatra"
              description="Common embarkation location"
              icon={<Anchor size={24} />}
              delay={600}
            />
          </div>
        </div>
        
        <div>
          <AnimatedText delay={300} className="mb-6">
            <h3 className="text-xl font-semibold text-white border-l-4 pl-4 border-teal-500">
              A Journey of Calculated Risks
            </h3>
          </AnimatedText>
          
          <AnimatedText delay={500} className="mb-8">
            <p className="text-primary-200 mb-4">
              Traffickers carefully monitor weather conditions, preferring to launch crossings during summer and spring months when seas are calmer. Migrants are gathered through intermediaries in Libya and Tunisia, with selection based on ability to pay in cash, physical endurance, and avoiding those who might raise suspicion.
            </p>
            <p className="text-primary-200">
              Vessels range from rubber dinghies to modified steel boats and repurposed cargo ships, most in poor condition with no safety equipment. The risk of drowning is significant, with many vessels overloaded beyond capacity.
            </p>
          </AnimatedText>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
            <DataCard 
              title="Cost Range" 
              value="€2,000-€5,000"
              description="Standard crossing fee"
              icon={<Banknote size={24} />}
              delay={700}
            />
            <DataCard 
              title="Premium Service" 
              value="€8,000-€10,000"
              description="Via Abu Al-Nour/Mahend"
              icon={<Banknote size={24} />}
              delay={900}
            />
          </div>
          
          <AnimatedText delay={1100}>
            <div className="bg-accent-900/30 border border-accent-800 rounded-lg p-4 flex items-start">
              <AlertTriangle size={24} className="text-accent-500 mr-3 flex-shrink-0 mt-1" />
              <div>
                <h4 className="font-semibold text-white mb-2">Extreme Risk Factors</h4>
                <ul className="text-primary-200 list-disc pl-5 space-y-1">
                  <li>Vessels often lack any safety equipment</li>
                  <li>Boats frequently overloaded beyond capacity</li>
                  <li>Minimal communication equipment</li>
                  <li>Untrained crew with limited navigation skills</li>
                </ul>
              </div>
            </div>
          </AnimatedText>
        </div>
      </div>
    </ScrollSection>
  );
};

export default PerilousPassage;