import React, { useEffect, useRef, useState } from 'react';
import * as d3 from 'd3';
import { useInView } from 'react-intersection-observer';

interface Node {
  id: string;
  label: string;
  type: string;
  [key: string]: any;
}

interface Link {
  source: string;
  target: string;
  label: string;
  relationship_type: string;
  details?: string;
}

interface NetworkVisualizationProps {
  nodes: Node[];
  links: Link[];
  className?: string;
}

const NetworkVisualization: React.FC<NetworkVisualizationProps> = ({
  nodes,
  links,
  className = ''
}) => {
  const svgRef = useRef<SVGSVGElement>(null);
  const { ref, inView } = useInView({
    threshold: 0.2,
    triggerOnce: true,
  });
  const [selectedNode, setSelectedNode] = useState<Node | null>(null);

  const getNodeColor = (type: string) => {
    switch (type) {
      case 'trafficker_kingpin':
        return '#ff3333';
      case 'trafficker_assistant':
        return '#ff5c5c';
      case 'criminal_organization':
        return '#b30000';
      case 'victim_exploited_group':
        return '#27ab83';
      case 'location_country_origin':
        return '#3ebd93';
      case 'location_country_transit':
      case 'location_country_transit_embarkation':
        return '#65d6ad';
      case 'location_country_destination':
      case 'location_country_destination_transit':
        return '#8eedc7';
      default:
        return '#bcccdc';
    }
  };

  const getNodeSize = (type: string) => {
    switch (type) {
      case 'trafficker_kingpin':
        return 25;
      case 'trafficker_assistant':
        return 20;
      case 'criminal_organization':
        return 30;
      case 'victim_exploited_group':
        return 22;
      default:
        return 18;
    }
  };

  useEffect(() => {
    if (!svgRef.current || !inView) return;

    const width = svgRef.current.clientWidth;
    const height = svgRef.current.clientHeight;

    // Clear existing content
    d3.select(svgRef.current).selectAll('*').remove();

    const svg = d3.select(svgRef.current)
      .append('g')
      .attr('transform', `translate(${width / 2},${height / 2})`);

    // Add zoom behavior
    const zoom = d3.zoom()
      .scaleExtent([0.5, 2])
      .on('zoom', (event) => {
        svg.attr('transform', event.transform);
      });

    d3.select(svgRef.current)
      .call(zoom as any);

    // Create the simulation
    const simulation = d3.forceSimulation()
      .force('link', d3.forceLink().id((d: any) => d.id).distance(150))
      .force('charge', d3.forceManyBody().strength(-1000))
      .force('center', d3.forceCenter(0, 0))
      .force('collision', d3.forceCollide().radius(50));

    // Create the links
    const link = svg.append('g')
      .selectAll('line')
      .data(links)
      .join('line')
      .attr('stroke', '#486581')
      .attr('stroke-opacity', 0.6)
      .attr('stroke-width', 2);

    // Add link labels
    const linkLabel = svg.append('g')
      .selectAll('text')
      .data(links)
      .join('text')
      .attr('class', 'link-label')
      .attr('fill', '#9fb3c8')
      .attr('font-size', '10px')
      .text(d => d.label);

    // Create the nodes
    const node = svg.append('g')
      .selectAll('circle')
      .data(nodes)
      .join('circle')
      .attr('r', d => getNodeSize(d.type))
      .attr('fill', d => getNodeColor(d.type))
      .attr('stroke', '#fff')
      .attr('stroke-width', 2)
      .on('mouseover', (event, d) => {
        setSelectedNode(d);
        d3.select(event.currentTarget)
          .transition()
          .duration(200)
          .attr('r', getNodeSize(d.type) * 1.2);
      })
      .on('mouseout', (event, d) => {
        setSelectedNode(null);
        d3.select(event.currentTarget)
          .transition()
          .duration(200)
          .attr('r', getNodeSize(d.type));
      })
      .call(d3.drag()
        .on('start', dragstarted)
        .on('drag', dragged)
        .on('end', dragended) as any);

    // Add node labels
    const nodeLabel = svg.append('g')
      .selectAll('text')
      .data(nodes)
      .join('text')
      .attr('class', 'node-label')
      .attr('fill', '#fff')
      .attr('font-size', '12px')
      .attr('text-anchor', 'middle')
      .attr('dy', 30)
      .text(d => d.label);

    // Update positions on each tick
    simulation
      .nodes(nodes as any)
      .on('tick', () => {
        link
          .attr('x1', (d: any) => d.source.x)
          .attr('y1', (d: any) => d.source.y)
          .attr('x2', (d: any) => d.target.x)
          .attr('y2', (d: any) => d.target.y);

        linkLabel
          .attr('x', (d: any) => (d.source.x + d.target.x) / 2)
          .attr('y', (d: any) => (d.source.y + d.target.y) / 2);

        node
          .attr('cx', (d: any) => d.x)
          .attr('cy', (d: any) => d.y);

        nodeLabel
          .attr('x', (d: any) => d.x)
          .attr('y', (d: any) => d.y);
      });

    (simulation.force('link') as any).links(links);

    // Drag functions
    function dragstarted(event: any) {
      if (!event.active) simulation.alphaTarget(0.3).restart();
      event.subject.fx = event.subject.x;
      event.subject.fy = event.subject.y;
    }

    function dragged(event: any) {
      event.subject.fx = event.x;
      event.subject.fy = event.y;
    }

    function dragended(event: any) {
      if (!event.active) simulation.alphaTarget(0);
      event.subject.fx = null;
      event.subject.fy = null;
    }

    // Cleanup
    return () => {
      simulation.stop();
    };
  }, [nodes, links, inView]);

  return (
    <div ref={ref} className={`relative ${className}`}>
      <svg
        ref={svgRef}
        className="w-full h-full"
        viewBox="0 0 1000 600"
        preserveAspectRatio="xMidYMid meet"
      />
      {selectedNode && (
        <div className="absolute top-4 right-4 bg-primary-800/90 backdrop-blur-sm p-4 rounded-lg shadow-lg max-w-sm">
          <h3 className="text-lg font-semibold text-white mb-2">{selectedNode.label}</h3>
          {selectedNode.type === 'trafficker_kingpin' && (
            <>
              <p className="text-primary-200 text-sm mb-1">
                <span className="font-medium">AKA:</span> {selectedNode.aka}
              </p>
              <p className="text-primary-200 text-sm mb-1">
                <span className="font-medium">Age:</span> {selectedNode.age}
              </p>
              <p className="text-primary-200 text-sm mb-1">
                <span className="font-medium">Location:</span> {selectedNode.current_location}
              </p>
              <p className="text-primary-200 text-sm">
                <span className="font-medium">Reputation:</span> {selectedNode.reputation}
              </p>
            </>
          )}
          {selectedNode.type === 'trafficker_assistant' && (
            <p className="text-primary-200 text-sm">
              {selectedNode.role_description}
            </p>
          )}
          {selectedNode.type === 'criminal_organization' && (
            <p className="text-primary-200 text-sm">
              {selectedNode.characteristics}
            </p>
          )}
          {selectedNode.type.includes('location_country') && (
            <p className="text-primary-200 text-sm">
              {selectedNode.role}
            </p>
          )}
        </div>
      )}
    </div>
  );
};

export default NetworkVisualization;