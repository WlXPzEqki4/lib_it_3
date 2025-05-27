import React from 'react';
import ScrollSection from '../components/ScrollSection';
import AnimatedText from '../components/AnimatedText';
import AnimatedMap from '../components/AnimatedMap';
import { MapPinned } from 'lucide-react';

const mediterraneanRoutes = [
  {
    id: 'libya-italy',
    points: [
      { 
        x: 17.8739, 
        y: 31.5494,
        content: {
          title: 'Libya Departure Point',
          description: 'Major departure hub for Mediterranean crossings',
          bulletPoints: [
            'Primary gathering point for migrants',
            'Multiple trafficking networks operate here',
            'Launch point for sea vessels'
          ]
        }
      },
      { x: 15.5, y: 35.0 },
      { 
        x: 14.0154, 
        y: 37.5994,
        content: {
          title: 'Sicily Arrival',
          description: 'Main arrival point for migrants crossing from Libya',
          bulletPoints: [
            'Initial processing center',
            'Distribution point to other Italian regions',
            'Key transit hub for onward movement'
          ]
        }
      }
    ],
    color: '#ff3333',
    highlight: true
  }
];

const keyLocations = [
  { 
    id: 'italy',
    x: 14.0154, 
    y: 37.5994, 
    label: 'Italy',
    highlight: true,
    content: {
      title: 'Sicily, Italy',
      description: 'Primary arrival point for Mediterranean crossings',
      bulletPoints: [
        'Major processing center for new arrivals',
        'Key distribution hub for migrant placement',
        'Strategic location for monitoring sea routes'
      ],
      imageUrl: 'https://images.pexels.com/photos/161815/palermo-sicily-italy-sea-161815.jpeg?auto=compress&cs=tinysrgb&w=800'
    }
  },
  { 
    id: 'libya',
    x: 17.8739, 
    y: 31.5494, 
    label: 'Libya',
    highlight: false,
    delay: 0.3,
    content: {
      title: 'Libya',
      description: 'Major departure point for Mediterranean crossings',
      bulletPoints: [
        'Multiple trafficking networks operate here',
        'Gathering point for migrants from various regions',
        'Limited government control enables smuggling operations'
      ]
    }
  }
];

const Introduction: React.FC = () => {
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
              Italy stands at the forefront of Europe's migration challenge, serving as both a primary destination and a critical transit hub for onward movement within Europe.
            </p>
            <p className="mb-6">
              In 2025, thousands of migrants have arrived by sea, primarily through the Libya-Italy route, often at great personal risk and financial cost.
            </p>
            <p>
              This report draws on extensive interviews with migrants and traffickers to document the networks, methods, and human realities behind these journeys.
            </p>
          </AnimatedText>
          
          <AnimatedText delay={1500}>
            <div className="flex items-center mt-8 bg-primary-700/50 p-4 rounded-lg border-l-4 border-teal-500">
              <MapPinned size={24} className="text-teal-400 mr-3 flex-shrink-0" />
              <p className="text-primary-100">
                <span className="font-semibold">Key Route Focus:</span> The Libya-Italy sea corridor remains the most trafficked Mediterranean crossing in 2025.
              </p>
            </div>
          </AnimatedText>
        </div>
        
        <div className="h-[600px] md:h-[700px]">
          <AnimatedText delay={800}>
            <h4 className="text-center text-primary-200 mb-4 font-medium">Primary Migration Routes</h4>
          </AnimatedText>
          <AnimatedMap 
            routes={mediterraneanRoutes} 
            locations={keyLocations}
            className="h-full w-full"
            center={[15.5, 35.0]}
            zoom={5}
          />
        </div>
      </div>
    </ScrollSection>
  );
};

export default Introduction;