import React, { useEffect, useRef, useState } from 'react';
import * as d3 from 'd3';
import { useInView } from 'react-intersection-observer';

interface Node {
  id: string;
  label: string;
  type: string;
  [key: string]: any;
}

interface Edge {
  source: string;
  target: string;
  label: string;
  relationship_type: string;
  details?: string;
}

interface NetworkVisualizationProps {
  nodes: Node[];
  edges: Edge[];
  className?: string;
  onNodeClick?: (node: Node) => void;
}

const NetworkVisualization: React.FC<NetworkVisualizationProps> = ({
  nodes,
  edges,
  className = '',
  onNodeClick
}) => {
  const svgRef = useRef<SVGSVGElement>(null);
  const { ref, inView } = useInView({
    threshold: 0.2,
    triggerOnce: true,
  });

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

    // Clear previous visualization
    d3.select(svgRef.current).selectAll('*').remove();

    const width = svgRef.current.clientWidth;
    const height = svgRef.current.clientHeight;

    const svg = d3.select(svgRef.current)
      .attr('viewBox', [0, 0, width, height]);

    // Create force simulation
    const simulation = d3.forceSimulation(nodes as d3.SimulationNodeDatum[])
      .force('link', d3.forceLink(edges).id((d: any) => d.id).distance(150))
      .force('charge', d3.forceManyBody().strength(-1000))
      .force('center', d3.forceCenter(width / 2, height / 2))
      .force('collision', d3.forceCollide().radius(50));

    // Create arrow marker
    svg.append('defs').selectAll('marker')
      .data(['end'])
      .join('marker')
      .attr('id', 'arrow')
      .attr('viewBox', '0 -5 10 10')
      .attr('refX', 30)
      .attr('refY', 0)
      .attr('markerWidth', 6)
      .attr('markerHeight', 6)
      .attr('orient', 'auto')
      .append('path')
      .attr('fill', '#486581')
      .attr('d', 'M0,-5L10,0L0,5');

    // Create edges
    const link = svg.append('g')
      .selectAll('line')
      .data(edges)
      .join('line')
      .attr('stroke', '#486581')
      .attr('stroke-opacity', 0.6)
      .attr('stroke-width', 2)
      .attr('marker-end', 'url(#arrow)');

    // Create edge labels
    const edgeLabels = svg.append('g')
      .selectAll('text')
      .data(edges)
      .join('text')
      .attr('class', 'edge-label')
      .attr('fill', '#bcccdc')
      .attr('font-size', '10px')
      .text(d => d.label);

    // Create nodes
    const node = svg.append('g')
      .selectAll('circle')
      .data(nodes)
      .join('circle')
      .attr('r', d => getNodeSize(d.type))
      .attr('fill', d => getNodeColor(d.type))
      .attr('stroke', '#fff')
      .attr('stroke-width', 2)
      .style('cursor', 'pointer')
      .on('click', (event, d) => onNodeClick && onNodeClick(d))
      .call(drag(simulation) as any);

    // Add node labels
    const nodeLabels = svg.append('g')
      .selectAll('text')
      .data(nodes)
      .join('text')
      .attr('class', 'node-label')
      .attr('fill', '#fff')
      .attr('font-size', '12px')
      .attr('text-anchor', 'middle')
      .attr('dy', 30)
      .text(d => d.label);

    // Add tooltips
    node.append('title')
      .text(d => `${d.label}\nType: ${d.type}`);

    // Update positions on simulation tick
    simulation.on('tick', () => {
      link
        .attr('x1', d => (d.source as any).x)
        .attr('y1', d => (d.source as any).y)
        .attr('x2', d => (d.target as any).x)
        .attr('y2', d => (d.target as any).y);

      node
        .attr('cx', d => d.x!)
        .attr('cy', d => d.y!);

      nodeLabels
        .attr('x', d => d.x!)
        .attr('y', d => d.y!);

      edgeLabels
        .attr('x', d => ((d.source as any).x + (d.target as any).x) / 2)
        .attr('y', d => ((d.source as any).y + (d.target as any).y) / 2);
    });

    // Cleanup
    return () => {
      simulation.stop();
    };
  }, [nodes, edges, inView, onNodeClick]);

  // Drag functionality
  const drag = (simulation: d3.Simulation<d3.SimulationNodeDatum, undefined>) => {
    const dragstarted = (event: any) => {
      if (!event.active) simulation.alphaTarget(0.3).restart();
      event.subject.fx = event.subject.x;
      event.subject.fy = event.subject.y;
    };

    const dragged = (event: any) => {
      event.subject.fx = event.x;
      event.subject.fy = event.y;
    };

    const dragended = (event: any) => {
      if (!event.active) simulation.alphaTarget(0);
      event.subject.fx = null;
      event.subject.fy = null;
    };

    return d3.drag()
      .on('start', dragstarted)
      .on('drag', dragged)
      .on('end', dragended);
  };

  return (
    <div ref={ref} className={`w-full h-full ${className}`}>
      <svg
        ref={svgRef}
        className="w-full h-full"
        style={{ minHeight: '600px' }}
      />
    </div>
  );
};

export default NetworkVisualization;