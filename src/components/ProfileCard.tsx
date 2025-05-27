import React from 'react';
import { motion } from 'framer-motion';
import { MapPin, User, DollarSign, Route } from 'lucide-react';
import useScrollAnimation from '../hooks/useScrollAnimation';

interface ProfileCardProps {
  name: string;
  realName?: string;
  origin: string;
  base: string;
  routes: string[];
  methods: string[];
  fees: string;
  photoUrl?: string;
  delay?: number;
}

const ProfileCard: React.FC<ProfileCardProps> = ({
  name,
  realName,
  origin,
  base,
  routes,
  methods,
  fees,
  photoUrl,
  delay = 0
}) => {
  const { ref, isVisible } = useScrollAnimation({
    threshold: 0.2,
    triggerOnce: true,
    delay
  });

  return (
    <motion.div
      ref={ref}
      className="bg-primary-800 rounded-lg overflow-hidden shadow-xl"
      initial={{ opacity: 0, y: 50 }}
      animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
      transition={{ duration: 0.7, delay: delay / 1000 }}
    >
      <div className="p-6">
        <div className="flex items-center mb-4">
          <div className="mr-4 bg-primary-700 rounded-full w-16 h-16 flex items-center justify-center overflow-hidden">
            {photoUrl ? (
              <img 
                src={photoUrl} 
                alt={name} 
                className="w-full h-full object-cover"
              />
            ) : (
              <User size={32} className="text-primary-400" />
            )}
          </div>
          <div>
            <h3 className="text-xl font-semibold text-white">{name}</h3>
            {realName && (
              <p className="text-sm text-primary-300">
                Real name: {realName}
              </p>
            )}
          </div>
        </div>

        <div className="space-y-3 text-sm">
          <div className="flex items-start">
            <MapPin size={18} className="text-teal-400 mr-2 mt-0.5 flex-shrink-0" />
            <div>
              <p className="text-primary-200">Origin: {origin}</p>
              <p className="text-primary-200">Base: {base}</p>
            </div>
          </div>

          <div className="flex items-start">
            <Route size={18} className="text-teal-400 mr-2 mt-0.5 flex-shrink-0" />
            <div>
              <p className="text-primary-200 font-medium mb-1">Routes:</p>
              <ul className="list-disc pl-4 text-primary-300">
                {routes.map((route, index) => (
                  <li key={index}>{route}</li>
                ))}
              </ul>
            </div>
          </div>

          <div className="flex items-start">
            <DollarSign size={18} className="text-accent-400 mr-2 mt-0.5 flex-shrink-0" />
            <p className="text-primary-200">Fees: {fees}</p>
          </div>

          <div className="mt-4 pt-4 border-t border-primary-700">
            <p className="text-primary-200 font-medium mb-2">Methods:</p>
            <ul className="list-disc pl-4 text-primary-300">
              {methods.map((method, index) => (
                <li key={index}>{method}</li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default ProfileCard;