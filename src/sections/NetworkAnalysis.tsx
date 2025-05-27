import React from 'react';
import ScrollSection from '../components/ScrollSection';
import AnimatedText from '../components/AnimatedText';
import { Network } from 'lucide-react';

const NetworkAnalysis: React.FC = () => {
  return (
    <ScrollSection id="network-analysis" className="bg-gradient-to-b from-primary-800 to-primary-900">
      <AnimatedText delay={0}>
        <h2 className="font-display text-3xl md:text-4xl font-bold text-white mb-3 text-center">
          Network Analysis
        </h2>
      </AnimatedText>
      
      <AnimatedText delay={300} className="mb-12 text-center">
        <p className="text-primary-200 text-lg max-w-2xl mx-auto">
          Mapping the complex web of trafficking operations and connections
        </p>
      </AnimatedText>

      <div className="max-w-6xl mx-auto">
        <div className="bg-primary-800/60 backdrop-blur-sm rounded-lg p-8">
          <div className="flex items-center gap-3 mb-6">
            <Network className="w-6 h-6 text-teal-400" />
            <h3 className="text-xl font-semibold text-white">Trafficking Network Structure</h3>
          </div>
          
          <div className="h-[600px] bg-primary-700/50 rounded-lg">
            {/* Network visualization will be added here */}
          </div>
        </div>
      </div>
    </ScrollSection>
  );
};

export default NetworkAnalysis;