import React from 'react';
import ScrollSection from '../components/ScrollSection';
import AnimatedText from '../components/AnimatedText';
import NetworkVisualization from '../components/NetworkVisualization';

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

const links = [
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
    "label": "Embarkation",
    "relationship_type": "geographical_operation_link"
  },
  {
    "source": "mustafa_berlin_network",
    "target": "italy",
    "label": "Entry Point",
    "relationship_type": "geographical_operation_link"
  },
  {
    "source": "mustafa_berlin_network",
    "target": "france",
    "label": "Transit",
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
    "label": "Based In",
    "relationship_type": "personal_location"
  }
];

const NetworkAnalysis: React.FC = () => {
  return (
    <ScrollSection id="network-analysis" className="bg-gradient-to-b from-primary-800 to-primary-900">
      <AnimatedText delay={0}>
        <h2 className="font-display text-3xl md:text-4xl font-bold text-white mb-3 text-center">
          Network Structure & Connections
        </h2>
      </AnimatedText>
      
      <AnimatedText delay={300} className="mb-12 text-center">
        <p className="text-primary-200 text-lg max-w-2xl mx-auto">
          Interactive visualization of Mustafa Berlin's trafficking network and its operational reach
        </p>
      </AnimatedText>

      <div className="max-w-7xl mx-auto">
        <div className="bg-primary-800/60 backdrop-blur-sm rounded-lg p-6 mb-8">
          <AnimatedText delay={400}>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-6">
              <div className="flex items-center space-x-2">
                <div className="w-4 h-4 rounded-full bg-[#ff3333]"></div>
                <span className="text-primary-200 text-sm">Kingpin</span>
              </div>
              <div className="flex items-center space-x-2">
                <div className="w-4 h-4 rounded-full bg-[#ff5c5c]"></div>
                <span className="text-primary-200 text-sm">Assistants</span>
              </div>
              <div className="flex items-center space-x-2">
                <div className="w-4 h-4 rounded-full bg-[#27ab83]"></div>
                <span className="text-primary-200 text-sm">Victims</span>
              </div>
              <div className="flex items-center space-x-2">
                <div className="w-4 h-4 rounded-full bg-[#8eedc7]"></div>
                <span className="text-primary-200 text-sm">Locations</span>
              </div>
            </div>
          </AnimatedText>

          <NetworkVisualization 
            nodes={nodes}
            links={links}
            className="h-[600px] w-full"
          />
        </div>

        <AnimatedText delay={600} className="max-w-3xl mx-auto">
          <div className="bg-primary-700/50 rounded-lg p-6 border-l-4 border-teal-500">
            <h3 className="text-xl font-semibold text-white mb-4">Network Analysis</h3>
            <p className="text-primary-200 mb-4">
              The visualization reveals the complex structure of Mustafa Berlin's trafficking operation, highlighting its hierarchical nature and geographical spread. The network demonstrates sophisticated coordination between various actors and locations, with Italy serving as a crucial hub for both entry and transit.
            </p>
            <p className="text-primary-200">
              Key features include multiple layers of command, strategic use of transit countries, and a clear pattern of movement from Middle Eastern origin points through Mediterranean crossing points to various European destinations.
            </p>
          </div>
        </AnimatedText>
      </div>
    </ScrollSection>
  );
};

export default NetworkAnalysis;