import React, { useEffect, useRef } from 'react';
import mapboxgl from 'mapbox-gl';
import { useInView } from 'react-intersection-observer';
import gsap from 'gsap';

interface RoutePoint {
  x: number;
  y: number;
  label?: string;
}

interface AnimatedMapProps {
  routes: {
    id: string;
    points: RoutePoint[];
    color: string;
    delay?: number;
    highlight?: boolean;
  }[];
  locations?: {
    id: string;
    x: number;
    y: number;
    label: string;
    delay?: number;
    highlight?: boolean;
  }[];
  className?: string;
  center?: [number, number];
  zoom?: number;
}

const AnimatedMap: React.FC<AnimatedMapProps> = ({
  routes,
  locations = [],
  className = '',
  center = [12.4964, 41.9028], // Default to Rome
  zoom = 5
}) => {
  const mapContainer = useRef<HTMLDivElement>(null);
  const map = useRef<mapboxgl.Map | null>(null);
  const { ref, inView } = useInView({
    threshold: 0.2,
    triggerOnce: true,
  });

  useEffect(() => {
    if (!mapContainer.current) return;

    mapboxgl.accessToken = import.meta.env.VITE_MAPBOX_ACCESS_TOKEN;
    
    map.current = new mapboxgl.Map({
      container: mapContainer.current,
      style: 'mapbox://styles/mapbox/dark-v11',
      center: center,
      zoom: zoom,
      interactive: true // Enable map interaction
    });

    map.current.on('load', () => {
      if (!map.current) return;

      // Add routes
      routes.forEach((route, index) => {
        const coordinates = route.points.map(point => [point.x, point.y]);
        
        map.current?.addSource(`route-${route.id}`, {
          type: 'geojson',
          data: {
            type: 'Feature',
            properties: {},
            geometry: {
              type: 'LineString',
              coordinates: coordinates
            }
          }
        });

        map.current?.addLayer({
          id: `route-${route.id}`,
          type: 'line',
          source: `route-${route.id}`,
          layout: {
            'line-join': 'round',
            'line-cap': 'round'
          },
          paint: {
            'line-color': route.color,
            'line-width': route.highlight ? 3 : 2,
            'line-opacity': 0
          }
        });

        if (inView) {
          gsap.to(map.current?.getPaintProperty(`route-${route.id}`, 'line-opacity'), {
            value: 0.8,
            duration: 1.5,
            delay: route.delay || index * 0.3,
            ease: 'power2.inOut'
          });
        }
      });

      // Add location markers
      locations.forEach((location, index) => {
        // Create a custom marker element
        const markerEl = document.createElement('div');
        markerEl.className = 'marker';
        markerEl.style.width = '16px';
        markerEl.style.height = '16px';
        markerEl.style.borderRadius = '50%';
        markerEl.style.backgroundColor = location.highlight ? '#ff3333' : '#27ab83';
        markerEl.style.border = '2px solid white';
        markerEl.style.opacity = '0';
        markerEl.style.cursor = 'pointer';
        
        // Create and add the marker
        const marker = new mapboxgl.Marker(markerEl)
          .setLngLat([location.x, location.y])
          .setPopup(
            new mapboxgl.Popup({ offset: 25, closeButton: false })
              .setHTML(`<div class="text-sm font-medium">${location.label}</div>`)
          )
          .addTo(map.current);

        if (inView) {
          gsap.to(markerEl, {
            opacity: 0.8,
            duration: 0.5,
            delay: (location.delay || index * 0.3) + 0.5,
            ease: 'back.out(1.7)'
          });
        }
      });

      // Add navigation controls
      map.current.addControl(new mapboxgl.NavigationControl(), 'top-right');
    });

    return () => {
      map.current?.remove();
    };
  }, [inView, routes, locations, center, zoom]);

  return (
    <div ref={ref} className={`relative overflow-hidden rounded-lg ${className}`}>
      <div ref={mapContainer} className="w-full h-full" />
    </div>
  );
};

export default AnimatedMap;