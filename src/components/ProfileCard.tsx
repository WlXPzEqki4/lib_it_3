import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { MapPin, User, DollarSign, Route, AlertTriangle, Users, Phone, ChevronDown, ChevronUp, Import as Passport, Calendar, Info } from 'lucide-react';
import useScrollAnimation from '../hooks/useScrollAnimation';

interface Associate {
  name: string;
  role: string;
  contact?: string;
}

interface Document {
  type: string;
  number: string;
  issueDate: string;
  expiryDate: string;
  issuingAuthority: string;
  details?: Record<string, string>;
}

interface ProfileCardProps {
  name: string;
  realName?: string;
  origin: string;
  base: string;
  age?: number;
  routes: string[];
  methods: string[];
  fees: string;
  associates?: Associate[];
  dangerLevel?: string;
  documents?: Document[];
  additionalInfo?: string[];
  photoUrl?: string;
  delay?: number;
}

const ProfileCard: React.FC<ProfileCardProps> = ({
  name,
  realName,
  origin,
  base,
  age,
  routes,
  methods,
  fees,
  associates,
  dangerLevel,
  documents,
  additionalInfo,
  photoUrl,
  delay = 0
}) => {
  const { ref, isVisible } = useScrollAnimation({
    threshold: 0.2,
    triggerOnce: true,
    delay
  });

  const [showDocuments, setShowDocuments] = useState(false);
  const [showAdditionalInfo, setShowAdditionalInfo] = useState(false);

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
            {age && (
              <p className="text-sm text-primary-300">
                Age: {age}
              </p>
            )}
          </div>
        </div>

        {dangerLevel && (
          <div className="mb-4 flex items-center bg-accent-900/30 text-accent-400 px-3 py-2 rounded-md">
            <AlertTriangle size={18} className="mr-2" />
            <span className="text-sm font-medium">{dangerLevel}</span>
          </div>
        )}

        <div className="space-y-4 text-sm">
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

          {documents && documents.length > 0 && (
            <div className="pt-4 border-t border-primary-700">
              <button
                onClick={() => setShowDocuments(!showDocuments)}
                className="flex items-center justify-between w-full text-left text-primary-200 hover:text-white transition-colors"
              >
                <div className="flex items-center">
                  <Passport size={18} className="text-teal-400 mr-2" />
                  <span className="font-medium">Known Documents</span>
                </div>
                {showDocuments ? <ChevronUp size={18} /> : <ChevronDown size={18} />}
              </button>
              
              {showDocuments && (
                <div className="mt-3 space-y-3">
                  {documents.map((doc, index) => (
                    <div key={index} className="bg-primary-700/50 rounded-md p-3">
                      <p className="text-primary-100 font-medium mb-2">{doc.type}</p>
                      <div className="space-y-1 text-xs">
                        <p className="text-primary-300">Number: {doc.number}</p>
                        <p className="text-primary-300">Issued: {doc.issueDate}</p>
                        <p className="text-primary-300">Expires: {doc.expiryDate}</p>
                        <p className="text-primary-300">Authority: {doc.issuingAuthority}</p>
                        {doc.details && Object.entries(doc.details).map(([key, value]) => (
                          <p key={key} className="text-primary-300">{key}: {value}</p>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>
          )}

          {associates && associates.length > 0 && (
            <div className="pt-4 border-t border-primary-700">
              <div className="flex items-start">
                <Users size={18} className="text-teal-400 mr-2 mt-0.5 flex-shrink-0" />
                <div>
                  <p className="text-primary-200 font-medium mb-2">Known Associates:</p>
                  <div className="space-y-3">
                    {associates.map((associate, index) => (
                      <div key={index} className="bg-primary-700/50 rounded-md p-2">
                        <p className="text-primary-100 font-medium">{associate.name}</p>
                        <p className="text-primary-300 text-sm">{associate.role}</p>
                        {associate.contact && (
                          <div className="flex items-center mt-1 text-primary-400">
                            <Phone size={14} className="mr-1" />
                            <span className="text-xs">{associate.contact}</span>
                          </div>
                        )}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          )}

          {additionalInfo && additionalInfo.length > 0 && (
            <div className="pt-4 border-t border-primary-700">
              <button
                onClick={() => setShowAdditionalInfo(!showAdditionalInfo)}
                className="flex items-center justify-between w-full text-left text-primary-200 hover:text-white transition-colors"
              >
                <div className="flex items-center">
                  <Info size={18} className="text-teal-400 mr-2" />
                  <span className="font-medium">Additional Information</span>
                </div>
                {showAdditionalInfo ? <ChevronUp size={18} /> : <ChevronDown size={18} />}
              </button>
              
              {showAdditionalInfo && (
                <div className="mt-3 space-y-2">
                  {additionalInfo.map((info, index) => (
                    <p key={index} className="text-primary-300 text-sm">{info}</p>
                  ))}
                </div>
              )}
            </div>
          )}

          <div className="pt-4 border-t border-primary-700">
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