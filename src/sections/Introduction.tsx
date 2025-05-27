import React, { useState } from 'react';
import ScrollSection from '../components/ScrollSection';
import AnimatedText from '../components/AnimatedText';
import AnimatedMap from '../components/AnimatedMap';
import { MapPinned, ArrowRight } from 'lucide-react';

const stages = [
  {
    id: 'stage1',
    route: {
      id: 'libya-lampedusa',
      points: [
        { 
          x: 22.6367, 
          y: 32.7630,
          content: {
            title: 'Eastern Libya (Derna)',
            description: 'Major departure point for Mediterranean crossings',
            bulletPoints: [
              'Primary gathering point for migrants',
              'Abu Al-Nour network operations',
              'High-risk sea vessel launch point'
            ]
          }
        },
        { x: 17.5, y: 34.0 },
        { 
          x: 12.6000, 
          y: 35.5011,
          content: {
            title: 'Lampedusa Arrival',
            description: 'Initial Italian landing point',
            bulletPoints: [
              'First EU soil contact',
              'Initial processing and registration',
              'High surveillance area'
            ]
          }
        }
      ],
      color: '#ff3333'
    }
  },
  {
    id: 'stage2',
    route: {
      id: 'lampedusa-milan',
      points: [
        { x: 12.6000, y: 35.5011 },
        { x: 11.0, y: 40.0 },
        { 
          x: 9.1900, 
          y: 45.4642,
          content: {
            title: 'Milan Transit',
            description: 'Key northern Italian hub',
            bulletPoints: [
              'Major transit point',
              'Underground network connections',
              'Preparation for northern passage'
            ]
          }
        }
      ],
      color: '#ffd700',
      delay: 0.5
    }
  },
  {
    id: 'stage3',
    route: {
      id: 'milan-berlin',
      points: [
        { x: 9.1900, y: 45.4642 },
        { x: 11.0, y: 48.0 },
        { 
          x: 13.4050, 
          y: 52.5200,
          content: {
            title: 'Berlin Destination',
            description: 'Final destination in Germany',
            bulletPoints: [
              'Major destination city',
              'Established migrant communities',
              'Processing center for asylum claims'
            ]
          }
        }
      ],
      color: '#4169e1',
      delay: 1.0
    }
  }
];

const locations = [
  { 
    id: 'derna',
    x: 22.6367, 
    y: 32.7630,
    label: 'Derna',
    highlight: true,
    content: {
      title: 'Eastern Libya (Derna)',
      description: 'Major departure point operated by Abu Al-Nour network',
      bulletPoints: [
        'Premium crossing service: $8-10k',
        'Network coordination center',
        'Pre-departure staging area'
      ]
    }
  },
  { 
    id: 'lampedusa',
    x: 12.6000, 
    y: 35.5011,
    label: 'Lampedusa',
    highlight: true,
    delay: 0.3,
    content: {
      title: 'Lampedusa, Italy',
      description: 'Critical first arrival point in EU territory',
      bulletPoints: [
        'Initial processing center',
        'EURODAC registration point',
        'Temporary holding facility'
      ]
    }
  },
  { 
    id: 'milan',
    x: 9.1900, 
    y: 45.4642,
    label: 'Milan',
    highlight: false,
    delay: 0.6,
    content: {
      title: 'Milan, Italy',
      description: 'Northern Italian transit hub',
      bulletPoints: [
        'Underground network operations',
        'Document forgery center',
        'Staging point for northern movement'
      ]
    }
  },
  { 
    id: 'berlin',
    x: 13.4050, 
    y: 52.5200,
    label: 'Berlin',
    highlight: false,
    delay: 0.9,
    content: {
      title: 'Berlin, Germany',
      description: 'Final destination for many migrants',
      bulletPoints: [
        'Major asylum processing center',
        'Established migrant communities',
        'Support services available'
      ]
    }
  }
];

const Introduction: React.FC = () => {
  const [currentStage, setCurrentStage] = useState(0);
  const activeStages = stages.slice(0, currentStage + 1);

  const handleNextStage = () => {
    if (currentStage < stages.length - 1) {
      setCurrentStage(currentStage + 1);
    }
  };

  return (
    <ScrollSection id="introduction" fullHeight className="bg-gradient-to-b from-primary-900 to-primary-800 pt-28">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        <div>
          <AnimatedText delay={300} className="mb-4">
            <span className="text-accent-400 uppercase tracking-wider text-sm font-semibold">Investigative Report</span>
          </AnimatedText>
          
          <AnimatedText delay={600}>
            <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6">
              Italy at the Crossroads
            </h2>
          </AnimatedText>
          
          <AnimatedText delay={900}>
            <h3 className="text-xl md:text-2xl text-primary-100 mb-8">
              Human Smuggling Networks, Routes, and Realities
            </h3>
          </AnimatedText>
          
          <AnimatedText delay={1200} className="text-primary-200 max-w-xl">
            <p className="mb-6">
              {currentStage === 0 && "The journey begins in Eastern Libya, where the Abu Al-Nour network coordinates Mediterranean crossings to Lampedusa."}
              {currentStage === 1 && "After reaching Lampedusa, migrants face the challenge of moving through Italy while avoiding detection."}
              {currentStage === 2 && "The final stage involves complex networks facilitating movement from Milan to Berlin, often using forged documents."}
            </p>
          </AnimatedText>
          
          <AnimatedText delay={1500}>
            <div className="flex items-center mt-8 bg-primary-700/50 p-4 rounded-lg border-l-4 border-teal-500">
              <MapPinned size={24} className="text-teal-400 mr-3 flex-shrink-0" />
              <p className="text-primary-100 flex-1">
                <span className="font-semibold">Current Stage:</span> {currentStage + 1} of 3
              </p>
              {currentStage < stages.length - 1 && (
                <button 
                  onClick={handleNextStage}
                  className="flex items-center bg-teal-500 hover:bg-teal-600 text-white px-4 py-2 rounded-lg transition-colors ml-4"
                >
                  Next Stage
                  <ArrowRight size={16} className="ml-2" />
                </button>
              )}
            </div>
          </AnimatedText>
        </div>
        
        <div className="h-[600px] md:h-[700px]">
          <AnimatedText delay={800}>
            <h4 className="text-center text-primary-200 mb-4 font-medium">Migration Journey Stages</h4>
          </AnimatedText>
          <AnimatedMap 
            routes={activeStages.map(stage => stage.route)}
            locations={locations}
            className="h-full w-full"
            center={[15.5, 42.0]}
            zoom={4}
          />
        </div>
      </div>
    </ScrollSection>
  );
};

export default Introduction;