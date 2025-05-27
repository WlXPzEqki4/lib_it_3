import React from 'react';
import ScrollSection from '../components/ScrollSection';
import AnimatedText from '../components/AnimatedText';
import { Shield, MoonStar, Map, AlertTriangle } from 'lucide-react';

const AuthoritiesChallenge: React.FC = () => {
  return (
    <ScrollSection id="authorities-challenge" className="bg-gradient-to-b from-primary-800 to-primary-900">
      <AnimatedText delay={0}>
        <h2 className="font-display text-3xl md:text-4xl font-bold text-white mb-3 text-center">
          The Authorities' Challenge
        </h2>
      </AnimatedText>
      
      <AnimatedText delay={300} className="mb-12 text-center">
        <p className="text-primary-200 text-lg max-w-2xl mx-auto">
          Evasion tactics and adaptive methods used by trafficking networks
        </p>
      </AnimatedText>
      
      <div className="max-w-5xl mx-auto">
        <div className="bg-primary-800/60 backdrop-blur-sm rounded-lg p-8 mb-12">
          <AnimatedText delay={400} className="mb-8">
            <div className="flex items-center mb-6">
              <Shield size={28} className="text-teal-400 mr-4" />
              <h3 className="text-xl font-semibold text-white">
                Italian Enforcement: Increasingly Vigilant
              </h3>
            </div>
            <p className="text-primary-200">
              Traffickers consistently acknowledge that "obstacles from European authorities, especially Italian ones" have increased. Maritime patrols, surveillance technology, and international cooperation have all made traditional routes more challenging. Despite these efforts, traffickers remain confident in their ability to adapt and evolve.
            </p>
          </AnimatedText>
          
          <AnimatedText delay={600}>
            <blockquote className="pl-5 border-l-4 border-accent-600 italic text-primary-300 my-6">
              "We know their patterns. When they increase patrols in one area, we simply shift to another. The sea is vast, and they cannot be everywhere." 
              <cite className="block text-sm mt-2 not-italic">— Smuggler interviewed in Libya</cite>
            </blockquote>
          </AnimatedText>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <AnimatedText delay={700}>
            <div className="bg-primary-700/60 backdrop-blur-sm rounded-lg p-6 h-full">
              <Map size={28} className="text-teal-400 mb-4" />
              <h3 className="text-lg font-semibold text-white mb-3">Unconventional Routes</h3>
              <p className="text-primary-200">
                Traffickers increasingly utilize uninhabited coastlines and remote landing areas in Sicily and southern Italy, avoiding established ports and known patrol zones.
              </p>
            </div>
          </AnimatedText>
          
          <AnimatedText delay={900}>
            <div className="bg-primary-700/60 backdrop-blur-sm rounded-lg p-6 h-full">
              <MoonStar size={28} className="text-teal-400 mb-4" />
              <h3 className="text-lg font-semibold text-white mb-3">Weather & Night Operations</h3>
              <p className="text-primary-200">
                Smugglers exploit poor weather conditions and darkness to reduce detection probability, despite the increased danger to migrants during these crossings.
              </p>
            </div>
          </AnimatedText>
          
          <AnimatedText delay={1100}>
            <div className="bg-primary-700/60 backdrop-blur-sm rounded-lg p-6 h-full">
              <AlertTriangle size={28} className="text-teal-400 mb-4" />
              <h3 className="text-lg font-semibold text-white mb-3">Minimal Consequences</h3>
              <p className="text-primary-200">
                When caught, many traffickers reported facing only short prison stays in Italian facilities, which they view as a calculated risk rather than a deterrent.
              </p>
            </div>
          </AnimatedText>
        </div>
        
        <AnimatedText delay={1300} className="mt-12">
          <div className="bg-accent-900/30 border border-accent-800 rounded-lg p-6">
            <h3 className="text-lg font-semibold text-white mb-3">The Adaptation Challenge</h3>
            <p className="text-primary-200">
              Italian authorities face a fundamental asymmetry: they must protect all potential entry points, while traffickers need only find a single vulnerability. This dynamic, combined with the lucrative nature of smuggling operations, creates a persistent challenge for enforcement efforts.
            </p>
          </div>
        </AnimatedText>
      </div>
    </ScrollSection>
  );
};

export default AuthoritiesChallenge;