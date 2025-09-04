import React, { useEffect, useRef, useState } from 'react';

interface ScrollRevealProps {
  children: React.ReactNode;
  direction?: 'up' | 'down' | 'left' | 'right' | 'fade' | 'scale';
  delay?: number;
  duration?: number;
  threshold?: number;
  className?: string;
  distance?: number;
}

const ScrollReveal: React.FC<ScrollRevealProps> = ({
  children,
  direction = 'up',
  delay = 0,
  duration = 800,
  threshold = 0.1,
  className = '',
  distance = 50
}) => {
  const [isVisible, setIsVisible] = useState(false);
  const [hasAnimated, setHasAnimated] = useState(false);
  const elementRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasAnimated) {
          setTimeout(() => {
            setIsVisible(true);
            setHasAnimated(true);
          }, delay);
        }
      },
      { 
        threshold,
        rootMargin: '0px 0px -50px 0px' // Trigger animation slightly before element is fully visible
      }
    );

    const currentElement = elementRef.current;
    if (currentElement) {
      observer.observe(currentElement);
    }

    return () => {
      if (currentElement) {
        observer.unobserve(currentElement);
      }
    };
  }, [delay, threshold, hasAnimated]);

  const getTransformClasses = () => {
    const baseClasses = `transition-all ease-out`;
    const durationClass = duration <= 300 ? 'duration-300' : 
                         duration <= 500 ? 'duration-500' : 
                         duration <= 700 ? 'duration-700' : 'duration-1000';
    
    if (!isVisible) {
      switch (direction) {
        case 'up':
          return `${baseClasses} ${durationClass} transform translate-y-${distance > 50 ? '20' : '16'} opacity-0`;
        case 'down':
          return `${baseClasses} ${durationClass} transform -translate-y-${distance > 50 ? '20' : '16'} opacity-0`;
        case 'left':
          return `${baseClasses} ${durationClass} transform translate-x-${distance > 50 ? '20' : '16'} opacity-0`;
        case 'right':
          return `${baseClasses} ${durationClass} transform -translate-x-${distance > 50 ? '20' : '16'} opacity-0`;
        case 'scale':
          return `${baseClasses} ${durationClass} transform scale-75 opacity-0`;
        case 'fade':
          return `${baseClasses} ${durationClass} opacity-0`;
        default:
          return `${baseClasses} ${durationClass} transform translate-y-16 opacity-0`;
      }
    }
    
    return `${baseClasses} ${durationClass} transform translate-y-0 translate-x-0 scale-100 opacity-100`;
  };

  return (
    <div
      ref={elementRef}
      className={`${getTransformClasses()} ${className}`}
    >
      {children}
    </div>
  );
};

export default ScrollReveal;