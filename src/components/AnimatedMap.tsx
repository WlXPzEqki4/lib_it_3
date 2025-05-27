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
      interactive: true,
      attributionControl: false
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
            'line-width': route.highlight ? 4 : 3,
            'line-opacity': 0
          }
        });

        if (inView) {
          gsap.to(
            {},
            {
              duration: 1.5,
              delay: route.delay || index * 0.3,
              onStart: () => {
                map.current?.setPaintProperty(`route-${route.id}`, 'line-opacity', 0.8);
              }
            }
          );
        }
      });

      // Add location markers
      locations.forEach((location, index) => {
        const el = document.createElement('div');
        el.className = `marker-${location.id}`;
        el.style.width = location.highlight ? '20px' : '16px';
        el.style.height = location.highlight ? '20px' : '16px';
        el.style.borderRadius = '50%';
        el.style.backgroundColor = location.highlight ? '#ff3333' : '#27ab83';
        el.style.border = '3px solid rgba(255, 255, 255, 0.8)';
        el.style.boxShadow = '0 0 10px rgba(0, 0, 0, 0.3)';
        el.style.cursor = 'pointer';
        el.style.opacity = '0';

        const popup = new mapboxgl.Popup({
          closeButton: false,
          closeOnClick: false,
          offset: 25,
          className: 'custom-popup'
        })
        .setHTML(`
          <div class="bg-gray-900 text-white px-3 py-2 rounded-lg shadow-lg">
            <p class="font-medium">${location.label}</p>
          </div>
        `);

        const marker = new mapboxgl.Marker(el)
          .setLngLat([location.x, location.y])
          .setPopup(popup)
          .addTo(map.current!);

        if (inView) {
          gsap.to(el, {
            opacity: 1,
            duration: 0.5,
            delay: (location.delay || index * 0.3) + 0.5,
            ease: 'back.out(1.7)'
          });
        }

        el.addEventListener('mouseenter', () => {
          popup.addTo(map.current!);
        });

        el.addEventListener('mouseleave', () => {
          popup.remove();
        });
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
      <style jsx>{`
        .mapboxgl-popup-content {
          background: transparent;
          padding: 0;
          border-radius: 8px;
          box-shadow: none;
        }
        .mapboxgl-popup-tip {
          display: none;
        }
      `}</style>
    </div>
  );
};

export default AnimatedMap;