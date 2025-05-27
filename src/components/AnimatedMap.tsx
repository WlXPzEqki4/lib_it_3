import React, { useEffect, useRef, useState } from 'react';
import { useInView } from 'react-intersection-observer';
import mapboxgl from 'mapbox-gl';
import gsap from 'gsap';

interface RoutePoint {
  x: number;
  y: number;
  label?: string;
  content?: {
    title?: string;
    description?: string;
    bulletPoints?: string[];
    imageUrl?: string;
  };
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
    content?: {
      title?: string;
      description?: string;
      bulletPoints?: string[];
      imageUrl?: string;
    };
  }[];
  className?: string;
  center?: [number, number];
  zoom?: number;
}

mapboxgl.accessToken = 'pk.eyJ1IjoiamNkZW50b24yMDUxIiwiYSI6ImNtMzVkZXJudTA5ejkya3B5NDU4Z2MyeHQifQ.aUk4eH5k3JC45Foxcbe2qQ';

const AnimatedMap: React.FC<AnimatedMapProps> = ({
  routes,
  locations = [],
  className = '',
  center = [12.4964, 41.9028], // Default center on Rome
  zoom = 5
}) => {
  const mapContainer = useRef<HTMLDivElement>(null);
  const map = useRef<mapboxgl.Map | null>(null);
  const markersRef = useRef<mapboxgl.Marker[]>([]);
  const routeLayersRef = useRef<string[]>([]);
  const { ref, inView } = useInView({
    threshold: 0.2,
    triggerOnce: true,
  });

  const createPopupContent = (location: typeof locations[0]) => {
    const content = location.content;
    if (!content) {
      return `<h3 class="text-sm font-semibold">${location.label}</h3>`;
    }

    return `
      <div class="p-3 max-w-sm">
        ${content.title ? `<h3 class="text-lg font-semibold mb-2">${content.title}</h3>` : ''}
        ${content.description ? `<p class="text-sm mb-3">${content.description}</p>` : ''}
        ${content.imageUrl ? `<img src="${content.imageUrl}" alt="${location.label}" class="w-full h-32 object-cover rounded mb-3">` : ''}
        ${content.bulletPoints ? `
          <ul class="list-disc pl-4 text-sm">
            ${content.bulletPoints.map(point => `<li>${point}</li>`).join('')}
          </ul>
        ` : ''}
      </div>
    `;
  };

  // Clean up previous routes
  const cleanupRoutes = () => {
    if (map.current) {
      routeLayersRef.current.forEach(layerId => {
        if (map.current?.getLayer(layerId)) {
          map.current.removeLayer(layerId);
        }
        if (map.current?.getSource(layerId)) {
          map.current.removeSource(layerId);
        }
      });
      routeLayersRef.current = [];
    }
  };

  // Add new route with animation
  const addRoute = (route: typeof routes[0], delay: number = 0) => {
    if (!map.current) return;

    const coordinates = route.points.map(point => [point.x, point.y]);
    const sourceId = `route-${route.id}`;
    const layerId = `line-${route.id}`;

    // Add source
    map.current.addSource(sourceId, {
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

    // Add line layer
    map.current.addLayer({
      id: layerId,
      type: 'line',
      source: sourceId,
      layout: {
        'line-join': 'round',
        'line-cap': 'round'
      },
      paint: {
        'line-color': route.color,
        'line-width': route.highlight ? 3 : 2,
        'line-opacity': 0,
        'line-dasharray': [0, 4]
      }
    });

    routeLayersRef.current.push(layerId);

    // Animate the line
    setTimeout(() => {
      if (map.current) {
        map.current.setPaintProperty(layerId, 'line-opacity', 1);
        map.current.setPaintProperty(layerId, 'line-dasharray', [0, 0]);
      }
    }, delay);
  };

  useEffect(() => {
    if (!map.current && mapContainer.current) {
      map.current = new mapboxgl.Map({
        container: mapContainer.current,
        style: 'mapbox://styles/mapbox/dark-v11',
        center: center,
        zoom: zoom,
        interactive: true
      });

      map.current.addControl(new mapboxgl.NavigationControl(), 'top-right');

      map.current.on('load', () => {
        // Add routes with delays
        routes.forEach((route, index) => {
          const delay = (route.delay || index * 0.5) * 1000;
          addRoute(route, delay);
        });

        // Add markers
        locations.forEach(location => {
          const popup = new mapboxgl.Popup({
            offset: 25,
            closeButton: true,
            maxWidth: '300px'
          }).setHTML(createPopupContent(location));

          const marker = new mapboxgl.Marker({
            color: location.highlight ? '#ff3333' : '#27ab83'
          })
            .setLngLat([location.x, location.y])
            .setPopup(popup)
            .addTo(map.current!);

          markersRef.current.push(marker);

          if (location.delay) {
            gsap.from(marker.getElement(), {
              scale: 0,
              opacity: 0,
              duration: 0.5,
              delay: location.delay,
              ease: "back.out(1.7)"
            });
          }
        });
      });
    }

    return () => {
      markersRef.current.forEach(marker => marker.remove());
      cleanupRoutes();
      if (map.current) {
        map.current.remove();
        map.current = null;
      }
    };
  }, [routes, locations]);

  useEffect(() => {
    if (inView && map.current) {
      map.current.easeTo({
        center: center,
        zoom: zoom,
        duration: 1500
      });
    }
  }, [inView, center, zoom]);

  return (
    <div ref={ref} className={`relative overflow-hidden ${className}`}>
      <div ref={mapContainer} className="w-full h-full rounded-lg" />
    </div>
  );
};

export default AnimatedMap;