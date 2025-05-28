import React from 'react';
import ScrollSection from '../components/ScrollSection';
import AnimatedText from '../components/AnimatedText';
import DataCard from '../components/DataCard';
import { Network, ArrowRightLeft, AlertCircle, Route } from 'lucide-react';
import RecentReportingDropdown from '../components/RecentReportingDropdown';

const Conclusion: React.FC = () => {
  return (
    <ScrollSection id="conclusion" className="bg-gradient-to-b from-primary-800 to-primary-900">
      <AnimatedText delay={0}>
        <h2 className="font-display text-3xl md:text-4xl font-bold text-white mb-3 text-center">
          Italy's Enduring Challenge
        </h2>
      </AnimatedText>
      
      <AnimatedText delay={300} className="mb-12 text-center">
        <p className="text-primary-200 text-lg max-w-2xl mx-auto">
          A nation at the crossroads of Europe's migration realities
        </p>
      </AnimatedText>


      <div className="max-w-5xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-12">
          <div className="space-y-8">
            <AnimatedText delay={400}>
              <h3 className="text-xl font-semibold text-white mb-4 border-l-4 pl-4 border-accent-500">
                The Dual Challenge
              </h3>
              <p className="text-primary-200">
                Italy faces a complex dual role in Europe's migration landscape, serving both as a primary destination for thousands seeking refuge from North Africa and the Middle East, and as a crucial transit point for those aiming to reach northern European countries.
              </p>
            </AnimatedText>
            
            <AnimatedText delay={700}>
              <h3 className="text-xl font-semibold text-white mb-4 border-l-4 pl-4 border-teal-500">
                Network Resilience
              </h3>
              <p className="text-primary-200">
                Despite increased enforcement efforts, smuggling networks demonstrate remarkable adaptability. Their deep understanding of Italian geography, law enforcement patterns, and immigration procedures allows them to evolve tactics rapidly in response to challenges.
              </p>
            </AnimatedText>
          </div>
          
          <div className="grid grid-cols-1 gap-6">
            <DataCard 
              title="Primary Routes" 
              value="5+"
              description="Major sea routes terminating in Italy"
              icon={<Route size={24} />}
              delay={500}
            />
            <DataCard 
              title="Cost Range" 
              value="€1,500-€12,000"
              description="Depending on route and services"
              icon={<ArrowRightLeft size={24} />}
              delay={700}
            />
            <DataCard 
              title="Key Trafficking Hubs" 
              value="Libya, Tunisia, Egypt"
              description="With connections to Italy"
              icon={<Network size={24} />}
              delay={900}
            />
            <DataCard 
              title="Risk Factors" 
              value="Extreme"
              description="For migrants on Mediterranean crossings"
              icon={<AlertCircle size={24} />}
              delay={1100}
            />
          </div>
        </div>
        
        
      </div>
    </ScrollSection>
  );
};

export default Conclusion;