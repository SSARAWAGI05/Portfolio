import React from 'react';
import { motion } from 'framer-motion';

interface AnimatedSectionProps {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  direction?: 'up' | 'down' | 'left' | 'right' | 'scale' | 'fade';
}

const AnimatedSection: React.FC<AnimatedSectionProps> = ({
  children,
  className = '',
  delay = 0,
  direction = 'up'
}) => {
  const getVariants = () => {
    const baseVariants = {
      hidden: { opacity: 0 },
      visible: { 
        opacity: 1,
        transition: {
          duration: 0.8,
          delay,
          ease: [0.25, 0.46, 0.45, 0.94]
        }
      }
    };

    switch (direction) {
      case 'up':
        return {
          hidden: { opacity: 0, y: 50 },
          visible: { 
            opacity: 1, 
            y: 0,
            transition: {
              duration: 0.8,
              delay,
              ease: [0.25, 0.46, 0.45, 0.94]
            }
          }
        };
      case 'down':
        return {
          hidden: { opacity: 0, y: -50 },
          visible: { 
            opacity: 1, 
            y: 0,
            transition: {
              duration: 0.8,
              delay,
              ease: [0.25, 0.46, 0.45, 0.94]
            }
          }
        };
      case 'left':
        return {
          hidden: { opacity: 0, x: -50 },
          visible: { 
            opacity: 1, 
            x: 0,
            transition: {
              duration: 0.8,
              delay,
              ease: [0.25, 0.46, 0.45, 0.94]
            }
          }
        };
      case 'right':
        return {
          hidden: { opacity: 0, x: 50 },
          visible: { 
            opacity: 1, 
            x: 0,
            transition: {
              duration: 0.8,
              delay,
              ease: [0.25, 0.46, 0.45, 0.94]
            }
          }
        };
      case 'scale':
        return {
          hidden: { opacity: 0, scale: 0.8 },
          visible: { 
            opacity: 1, 
            scale: 1,
            transition: {
              duration: 0.6,
              delay,
              ease: [0.25, 0.46, 0.45, 0.94]
            }
          }
        };
      default:
        return baseVariants;
    }
  };

  return (
    <motion.div
      className={className}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.1 }}
      variants={getVariants()}
    >
      {children}
    </motion.div>
  );
};

export default AnimatedSection;