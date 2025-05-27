import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

interface ScrollSectionProps {
  id: string;
  className?: string;
  children: React.ReactNode;
  fullHeight?: boolean;
}

const ScrollSection: React.FC<ScrollSectionProps> = ({
  id,
  className = '',
  children,
  fullHeight = false
}) => {
  const { ref, inView } = useInView({
    threshold: 0.1,
    triggerOnce: false,
  });

  return (
    <motion.section
      id={id}
      ref={ref}
      className={`relative py-20 md:py-24 px-4 overflow-hidden ${fullHeight ? 'min-h-screen' : ''} ${className}`}
      initial={{ opacity: 0 }}
      animate={{ opacity: inView ? 1 : 0 }}
      transition={{ duration: 0.6 }}
    >
      <div className="container mx-auto relative z-10">
        {children}
      </div>
    </motion.section>
  );
};

export default ScrollSection;