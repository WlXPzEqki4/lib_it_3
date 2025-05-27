import React, { useState } from 'react';
import ScrollSection from '../components/ScrollSection';
import AnimatedText from '../components/AnimatedText';
import NetworkVisualization from '../components/NetworkVisualization';
import { Network, X, User, Phone, MapPin, AlertTriangle, Info } from 'lucide-react';

const nodes = [
  {
    "id": "mustafa_berlin",
    "label": "Mustafa Berlin",
    "type": "trafficker_kingpin",
    "aka": "Mustafa Jalil Ibrahim",
    "nationality": "Iraqi",
    "current_location": "Germany",
    "age": 32,
    "region_of_origin": "Diyala, Iraq",
    "phone": "+9647711013228",
    "telegram_account_name": "كروب مصطفى برلين (Group Mustafa Berlin)",
    "reputation": "One of the most dangerous smugglers in the region",
    "operational_scope": "Iraq, Turkey, Libya, Italy, France, Britain, Germany (Sea & Land)"
  },
  {
    "id": "murtadha_al_abbasi",
    "label": "Murtadha Al-Abbasi",
    "type": "trafficker_assistant",
    "phone": "+9647709881322",
    "role_description": "Right-hand man; coordinates & executes ground operations; organizes movements; supervises operations"
  },
  {
    "id": "ziad_al_iraqi",
    "label": "Ziad Al-Iraqi",
    "type": "trafficker_assistant",
    "phone": "+9647736686831",
    "role_description": "Assistant under Mustafa's supervision; professional staff for organizing & facilitating border crossings; coordinates logistical movements"
  },
  {
    "id": "mustafa_berlin_network",
    "label": "Mustafa Berlin's Network",
    "type": "criminal_organization",
    "characteristics": "Large, diverse, transports individuals across several countries worldwide, operates in complete secrecy, uses advanced methods & modern technologies to circumvent surveillance, dangerous, extensive, aims for huge profits at the expense of human lives."
  },
  {
    "id": "migrants_general",
    "label": "Illegal Migrants",
    "type": "victim_exploited_group",
    "description": "Transported under dangerous conditions by Mustafa Berlin's network."
  },
  {
    "id": "iraq",
    "label": "Iraq",
    "type": "location_country_origin",
    "role": "Origin point of network operations & Mustafa Berlin"
  },
  {
    "id": "turkey",
    "label": "Turkey",
    "type": "location_country_transit",
    "role": "Transit country for network"
  },
  {
    "id": "libya",
    "label": "Libya",
    "type": "location_country_transit_embarkation",
    "role": "Transit and primary embarkation country for Europe"
  },
  {
    "id": "italy",
    "label": "Italy",
    "type": "location_country_destination_transit",
    "role": "Initial European destination/arrival point & transit country"
  },
  {
    "id": "france",
    "label": "France",
    "type": "location_country_destination_transit",
    "role": "European destination/transit country"
  },
  {
    "id": "britain",
    "label": "Britain",
    "type": "location_country_destination",
    "role": "European destination country"
  },
  {
    "id": "germany",
    "label": "Germany",
    "type": "location_country_destination",
    "role": "European destination country; Mustafa Berlin's current location"
  }
];

const edges = [
  {
    "source": "mustafa_berlin",
    "target": "murtadha_al_abbasi",
    "label": "Manages",
    "relationship_type": "hierarchical_command",
    "details": "Murtadha is Mustafa's right-hand man"
  },
  {
    "source": "mustafa_berlin",
    "target": "ziad_al_iraqi",
    "label": "Manages",
    "relationship_type": "hierarchical_command",
    "details": "Ziad works under Mustafa's supervision"
  },
  {
    "source": "mustafa_berlin",
    "target": "mustafa_berlin_network",
    "label": "Leads",
    "relationship_type": "leadership"
  },
  {
    "source": "murtadha_al_abbasi",
    "target": "mustafa_berlin_network",
    "label": "Operates",
    "relationship_type": "operational_involvement"
  },
  {
    "source": "ziad_al_iraqi",
    "target": "mustafa_berlin_network",
    "label": "Operates",
    "relationship_type": "operational_involvement"
  },
  {
    "source": "mustafa_berlin_network",
    "target": "migrants_general",
    "label": "Exploits",
    "relationship_type": "criminal_activity_victimization"
  },
  {
    "source": "mustafa_berlin_network",
    "target": "iraq",
    "label": "Originates",
    "relationship_type": "geographical_operation_link"
  },
  {
    "source": "mustafa_berlin_network",
    "target": "turkey",
    "label": "Transit",
    "relationship_type": "geographical_operation_link"
  },
  {
    "source": "mustafa_berlin_network",
    "target": "libya",
    "label": "Transit",
    "relationship_type": "geographical_operation_link"
  },
  {
    "source": "mustafa_berlin_network",
    "target": "italy",
    "label": "Destination",
    "relationship_type": "geographical_operation_link"
  },
  {
    "source": "mustafa_berlin_network",
    "target": "france",
    "label": "Destination",
    "relationship_type": "geographical_operation_link"
  },
  {
    "source": "mustafa_berlin_network",
    "target": "britain",
    "label": "Destination",
    "relationship_type": "geographical_operation_link"
  },
  {
    "source": "mustafa_berlin_network",
    "target": "germany",
    "label": "Destination",
    "relationship_type": "geographical_operation_link"
  },
  {
    "source": "mustafa_berlin",
    "target": "germany",
    "label": "Located In",
    "relationship_type": "personal_location"
  }
];

const NetworkAnalysis: React.FC = () => {
  const [selectedNode, setSelectedNode] = useState<any>(null);

  const handleNodeClick = (node: any) => {
    setSelectedNode(node);
  };

  const renderNodeDetails = () => {
    if (!selectedNode) return null;

    return (
      <div className="absolute top-4 right-4 w-64 bg-primary-900/95 backdrop-blur-sm rounded-lg shadow-xl border border-primary-700 p-3 z-10">
        <div className="flex justify-between items-start mb-2">
          <h4 className="text-sm font-semibold text-white">{selectedNode.label}</h4>
          <button 
            onClick={() => setSelectedNode(null)}
            className="text-primary-400 hover:text-white transition-colors"
          >
            <X size={16} />
          </button>
        </div>

        <div className="space-y-3 text-xs">
          {selectedNode.type === 'trafficker_kingpin' && (
            <>
              <div className="flex items-start gap-2">
                <User className="w-4 h-4 text-teal-400 flex-shrink-0 mt-0.5" />
                <div>
                  <p className="text-primary-200">Real Name: {selectedNode.aka}</p>
                  <p className="text-primary-200">Age: {selectedNode.age}</p>
                  <p className="text-primary-200">Nationality: {selectedNode.nationality}</p>
                </div>
              </div>

              <div className="flex items-start gap-2">
                <MapPin className="w-4 h-4 text-teal-400 flex-shrink-0 mt-0.5" />
                <div>
                  <p className="text-primary-200">Current Location: {selectedNode.current_location}</p>
                  <p className="text-primary-200">Origin: {selectedNode.region_of_origin}</p>
                </div>
              </div>

              <div className="flex items-start gap-2">
                <Phone className="w-4 h-4 text-teal-400 flex-shrink-0 mt-0.5" />
                <div>
                  <p className="text-primary-200">Phone: {selectedNode.phone}</p>
                  <p className="text-primary-200">Telegram: {selectedNode.telegram_account_name}</p>
                </div>
              </div>

              <div className="flex items-start gap-2">
                <AlertTriangle className="w-4 h-4 text-accent-400 flex-shrink-0 mt-0.5" />
                <p className="text-primary-200">{selectedNode.reputation}</p>
              </div>

              <div className="flex items-start gap-2">
                <Info className="w-4 h-4 text-teal-400 flex-shrink-0 mt-0.5" />
                <p className="text-primary-200">Operational Scope: {selectedNode.operational_scope}</p>
              </div>
            </>
          )}

          {selectedNode.type === 'trafficker_assistant' && (
            <>
              <div className="flex items-start gap-2">
                <Phone className="w-4 h-4 text-teal-400 flex-shrink-0 mt-0.5" />
                <p className="text-primary-200">Contact: {selectedNode.phone}</p>
              </div>
              <div className="flex items-start gap-2">
                <Info className="w-4 h-4 text-teal-400 flex-shrink-0 mt-0.5" />
                <p className="text-primary-200">{selectedNode.role_description}</p>
              </div>
            </>
          )}

          {selectedNode.type === 'criminal_organization' && (
            <div className="flex items-start gap-2">
              <Info className="w-4 h-4 text-teal-400 flex-shrink-0 mt-0.5" />
              <p className="text-primary-200">{selectedNode.characteristics}</p>
            </div>
          )}

          {(selectedNode.type.includes('location_country') || selectedNode.type === 'victim_exploited_group') && (
            <div className="flex items-start gap-2">
              <Info className="w-4 h-4 text-teal-400 flex-shrink-0 mt-0.5" />
              <p className="text-primary-200">{selectedNode.role || selectedNode.description}</p>
            </div>
          )}
        </div>
      </div>
    );
  };

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
          
          <div className="relative h-[600px] bg-primary-700/50 rounded-lg overflow-hidden">
            <NetworkVisualization 
              nodes={nodes} 
              edges={edges} 
              onNodeClick={handleNodeClick}
            />
            {renderNodeDetails()}
          </div>

          <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-primary-700/50 p-6 rounded-lg">
              <h4 className="text-lg font-semibold text-white mb-4">Network Legend</h4>
              <div className="space-y-3">
                <div className="flex items-center gap-3">
                  <div className="w-4 h-4 rounded-full bg-[#ff3333]"></div>
                  <span className="text-primary-200">Kingpin</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-4 h-4 rounded-full bg-[#ff5c5c]"></div>
                  <span className="text-primary-200">Assistant</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-4 h-4 rounded-full bg-[#b30000]"></div>
                  <span className="text-primary-200">Criminal Organization</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-4 h-4 rounded-full bg-[#27ab83]"></div>
                  <span className="text-primary-200">Victims</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-4 h-4 rounded-full bg-[#3ebd93]"></div>
                  <span className="text-primary-200">Origin Country</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-4 h-4 rounded-full bg-[#65d6ad]"></div>
                  <span className="text-primary-200">Transit Country</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-4 h-4 rounded-full bg-[#8eedc7]"></div>
                  <span className="text-primary-200">Destination Country</span>
                </div>
              </div>
            </div>

            <div className="bg-primary-700/50 p-6 rounded-lg">
              <h4 className="text-lg font-semibold text-white mb-4">Network Insights</h4>
              <ul className="space-y-3 text-primary-200">
                <li className="flex items-start gap-2">
                  <span className="text-teal-400">•</span>
                  <span>Hierarchical structure with clear command chain</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-teal-400">•</span>
                  <span>Multiple transit countries for risk distribution</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-teal-400">•</span>
                  <span>Complex web of destination countries</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-teal-400">•</span>
                  <span>Strategic positioning of key personnel</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </ScrollSection>
  );
};

export default NetworkAnalysis;