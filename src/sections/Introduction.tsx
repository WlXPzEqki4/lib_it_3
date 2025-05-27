import React, { useState } from 'react';
import ScrollSection from '../components/ScrollSection';
import AnimatedText from '../components/AnimatedText';
import { ChevronRight, Network, Users, Route, AlertTriangle, DollarSign, Map } from 'lucide-react';

const Introduction: React.FC = () => {
  const [activeSection, setActiveSection] = useState<string | null>(null);

  const summaryData = [
    {
      id: 'network',
      icon: <Network className="text-teal-400\" size={24} />,
      title: '"Mustafa Berlin" Centered Operation',
      content: 'Led by Mustafa Jalil Ibrahim (Mustafa Berlin), this sophisticated network operates across multiple countries, from Iraq through Turkey and Libya to various European destinations.',
      details: [
        'Hierarchical structure with identified key operatives',
        'Multi-stage journey coordination',
        'Advanced technological capabilities',
        'Extensive geographical reach'
      ]
    },
    {
      id: 'routes',
      icon: <Route className="text-teal-400" size={24} />,
      title: 'Critical Routes',
      content: 'The Libya-Italy maritime corridor serves as a primary entry point to Europe, with multiple subsidiary routes and transit points.',
      details: [
        'Primary sea route from Libya to Sicily/Lampedusa',
        'Secondary routes via Tunisia and Egypt',
        'Internal EU movement pathways',
        'Strategic transit points in Turkey and Malta'
      ]
    },
    {
      id: 'operations',
      icon: <Map className="text-teal-400\" size={24} />,
      title: 'Operational Methods',
      content: 'Networks employ sophisticated methods for recruitment, transport, and border crossing, often at great risk to migrants.',
      details: [
        'Coordinated maritime crossings',
        'Document forgery operations',
        'Multiple payment systems',
        'Technology-enabled communication'
      ]
    },
    {
      id: 'financial',
      icon: <DollarSign className="text-accent-400" size={24} />,
      title: 'Financial Scale',
      content: 'Significant profits are generated through varying fee structures and additional service charges.',
      details: [
        '€2,000-€5,000: Standard crossing',
        '€8,000-€10,000: Premium service',
        '€12,000: Complete package to Germany',
        'Additional costs for forged documents'
      ]
    },
    {
      id: 'risks',
      icon: <AlertTriangle className="text-accent-400\" size={24} />,
      title: 'Risk Factors',
      content: 'The journey presents severe risks to migrants, with multiple documented hazards and dangers.',
      details: [
        'Dangerous maritime conditions',
        'Overcrowded vessels',
        'Limited safety equipment',
        'Risk of detention or exploitation'
      ]
    }
  ];

  return (
    <ScrollSection id="introduction" fullHeight className="bg-gradient-to-b from-primary-900 to-primary-800 pt-28">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
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
              This investigative report provides detailed insights into sophisticated human smuggling operations facilitating irregular migration, with a primary focus on the perilous Libya-Italy maritime corridor—a critical entry point into Europe.
            </p>
            <p>
              Through extensive fieldwork, including direct interviews with active smugglers, migrants, and victims, this research illuminates the intricate mechanics, key figures, and multi-stage pathways that define this illicit ecosystem.
            </p>
          </AnimatedText>
        </div>
        
        <div className="space-y-4">
          <AnimatedText delay={800}>
            <h4 className="text-xl font-semibold text-white mb-6">Executive Summary</h4>
          </AnimatedText>
          
          {summaryData.map((section, index) => (
            <AnimatedText key={section.id} delay={1000 + (index * 200)}>
              <div 
                className={`bg-primary-800/60 backdrop-blur-sm rounded-lg transition-all duration-300 ${
                  activeSection === section.id ? 'p-6' : 'p-4'
                }`}
              >
                <div 
                  className="flex items-center cursor-pointer"
                  onClick={() => setActiveSection(activeSection === section.id ? null : section.id)}
                >
                  <div className="mr-4">{section.icon}</div>
                  <div className="flex-grow">
                    <h5 className="font-semibold text-white">{section.title}</h5>
                    <p className="text-sm text-primary-200 mt-1">{section.content}</p>
                  </div>
                  <ChevronRight 
                    size={20} 
                    className={`text-primary-400 transition-transform ${
                      activeSection === section.id ? 'rotate-90' : ''
                    }`}
                  />
                </div>
                
                {activeSection === section.id && (
                  <div className="mt-4 pl-12">
                    <ul className="space-y-2">
                      {section.details.map((detail, i) => (
                        <li key={i} className="text-sm text-primary-200 flex items-center">
                          <span className="w-1.5 h-1.5 bg-teal-400 rounded-full mr-2" />
                          {detail}
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>
            </AnimatedText>
          ))}
        </div>
      </div>
    </ScrollSection>
  );
};

export default Introduction;