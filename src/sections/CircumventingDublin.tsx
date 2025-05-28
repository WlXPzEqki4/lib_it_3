import React from 'react';
import ScrollSection from '../components/ScrollSection';
import AnimatedText from '../components/AnimatedText';
import DataCard from '../components/DataCard';
import { FileWarning, Fingerprint, Calendar, ArrowRight } from 'lucide-react';

const CircumventingDublin: React.FC = () => {
  return (
    <ScrollSection id="circumventing-dublin" className="bg-gradient-to-b from-primary-900 to-primary-800">
      <AnimatedText delay={0}>
        <h2 className="font-display text-3xl md:text-4xl font-bold text-white mb-3 text-center">
          Circumventing Dublin
        </h2>
      </AnimatedText>
      
      <AnimatedText delay={300} className="mb-12 text-center">
        <p className="text-primary-200 text-lg max-w-2xl mx-auto">
          Italy as a transit launchpad for onward movement within Europe
        </p>
      </AnimatedText>
      
      <div className="max-w-5xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start mb-16">
          <AnimatedText delay={400} className="order-2 md:order-1">
            <div className="bg-primary-700/80 backdrop-blur-sm rounded-lg overflow-hidden shadow-lg border border-primary-600">
              <div className="p-3 bg-primary-600 text-white font-medium flex items-center">
                <FileWarning size={20} className="mr-2" />
                Forged Italian Residence Permit
              </div>
              <div className="p-6 space-y-4">
                <div className="border-b border-primary-600 pb-3">
                  <p className="text-sm text-primary-300 mb-1">Document Type</p>
                  <p className="text-white font-medium">PERMESSO DI SOGGIORNO</p>
                </div>
                <div className="border-b border-primary-600 pb-3">
                  <p className="text-sm text-primary-300 mb-1">Issuing Authority</p>
                  <p className="text-white font-medium">Italian Immigration Office (Forged)</p>
                </div>
                <div className="border-b border-primary-600 pb-3">
                  <p className="text-sm text-primary-300 mb-1">Purpose</p>
                  <p className="text-white font-medium">Circumventing Dublin Regulation</p>
                </div>
                <div className="border-b border-primary-600 pb-3">
                  <p className="text-sm text-primary-300 mb-1">Cost</p>
                  <p className="text-white font-medium">€2,500-€4,000</p>
                </div>
                <div className="grid grid-cols-1 gap-4 mt-4">
                  <div className="bg-primary-800/50 rounded-lg p-2">
                    <img 
                      src="/images/permit-front.jpg" 
                      alt="Forged Italian Residence Permit - Front"
                      className="w-full rounded-lg"
                    />
                    <p className="text-xs text-primary-300 mt-2 text-center">Front view of forged permit</p>
                  </div>
                  <div className="bg-primary-800/50 rounded-lg p-2">
                    <img 
                      src="/images/permit-uv.jpg" 
                      alt="Forged Italian Residence Permit - UV Security Features"
                      className="w-full rounded-lg"
                    />
                    <p className="text-xs text-primary-300 mt-2 text-center">UV security features visible under blacklight</p>
                  </div>
                </div>
              </div>
            </div>
          </AnimatedText>
          
          <div className="order-1 md:order-2">
            <AnimatedText delay={200}>
              <h3 className="text-xl font-semibold text-white mb-4 border-l-4 pl-4 border-accent-500">
                The "Illegal Solution"
              </h3>
            </AnimatedText>
            
            <AnimatedText delay={400} className="mb-6">
              <p className="text-primary-200">
                For migrants seeking to leave Italy despite Dublin restrictions, an elaborate network of solutions has emerged. Chief among these is the procurement of forged Italian residence permits that allow for seemingly legal movement to countries like Germany and France.
              </p>
            </AnimatedText>
            
            <AnimatedText delay={600}>
              <div className="flex items-start mb-6">
                <ArrowRight size={20} className="text-accent-400 mr-3 mt-1 flex-shrink-0" />
                <p className="text-primary-200">
                  Mahend Al-Iraqi charges up to $12,000 for a comprehensive package to move migrants from Italy to Germany, which includes transportation, forged documents, and accommodation arrangements.
                </p>
              </div>
            </AnimatedText>
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <AnimatedText delay={700}>
            <div className="bg-primary-800/80 backdrop-blur-sm rounded-lg p-6 h-full">
              <Fingerprint size={28} className="text-teal-400 mb-4" />
              <h3 className="text-lg font-semibold text-white mb-3">Fingerprint Alteration</h3>
              <p className="text-primary-200">
                Traffickers employ methods to manipulate the EURODAC system, including using caustic soda (NaOH) to temporarily damage fingerprints, making them unreadable for identification systems.
              </p>
            </div>
          </AnimatedText>
          
          <AnimatedText delay={900}>
            <div className="bg-primary-800/80 backdrop-blur-sm rounded-lg p-6 h-full">
              <Calendar size={28} className="text-teal-400 mb-4" />
              <h3 className="text-lg font-semibold text-white mb-3">Waiting Out the System</h3>
              <p className="text-primary-200">
                Some migrants hide for 6+ months until their fingerprint data becomes less actively checked in the EURODAC system, then attempt to register as new arrivals in northern European countries.
              </p>
            </div>
          </AnimatedText>
          
          <AnimatedText delay={1100}>
            <div className="bg-primary-800/80 backdrop-blur-sm rounded-lg p-6 h-full">
              <FileWarning size={28} className="text-teal-400 mb-4" />
              <h3 className="text-lg font-semibold text-white mb-3">New Identities</h3>
              <p className="text-primary-200">
                Complete identity packages, including backstories and supporting documents, are created to present migrants as new arrivals from countries without prior EU registration.
              </p>
            </div>
          </AnimatedText>
        </div>
      </div>
    </ScrollSection>
  );
};

export default CircumventingDublin;