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
      interactive: false
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
              coordinates: coordinates as [number, number][]
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
        const marker = document.createElement('div');
        marker.className = `w-4 h-4 rounded-full ${location.highlight ? 'bg-red-500' : 'bg-teal-500'} opacity-0`;
        
        new mapboxgl.Marker(marker)
          .setLngLat([location.x, location.y])
          .setPopup(new mapboxgl.Popup({ offset: 25 }).setText(location.label))
          .addTo(map.current!);

        if (inView) {
          gsap.to(marker, {
            opacity: 0.8,
            duration: 0.5,
            delay: (location.delay || index * 0.3) + 0.5,
            ease: 'back.out(1.7)'
          });
        }
      });
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