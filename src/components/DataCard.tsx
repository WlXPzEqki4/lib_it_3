import React from 'react';
import { motion } from 'framer-motion';
import useScrollAnimation from '../hooks/useScrollAnimation';

interface DataCardProps {
  title: string;
  value: string | number;
  description?: string;
  icon?: React.ReactNode;
  className?: string;
  delay?: number;
}

const DataCard: React.FC<DataCardProps> = ({
  title,
  value,
  description,
  icon,
  className = '',
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
      className={`bg-primary-800/80 backdrop-blur-sm rounded-lg p-5 shadow-lg ${className}`}
      initial={{ opacity: 0, y: 20 }}
      animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
      transition={{ duration: 0.6, delay: delay / 1000 }}
    >
      <div className="flex items-start">
        {icon && (
          <div className="mr-4 text-teal-400">
            {icon}
          </div>
        )}
        <div>
          <h3 className="text-sm uppercase tracking-wider text-primary-300 mb-1">{title}</h3>
          <p className="text-2xl font-semibold text-white mb-2">{value}</p>
          {description && <p className="text-sm text-primary-200">{description}</p>}
        </div>
      </div>
    </motion.div>
  );
};

export default DataCard;