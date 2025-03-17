
import React, { useEffect, useRef, useState } from 'react';
import { cn } from '@/lib/utils';

interface AnimatedSectionProps {
  children: React.ReactNode;
  className?: string;
  animation?: 'fade-up' | 'fade-down' | 'fade-in' | 'blur-in' | 'scale-in';
  delay?: 'delay-0' | 'delay-200' | 'delay-400' | 'delay-600' | 'delay-800' | 'delay-1000';
  threshold?: number;
  as?: React.ElementType;
}

const AnimatedSection: React.FC<AnimatedSectionProps> = ({
  children,
  className,
  animation = 'fade-up',
  delay = 'delay-0',
  threshold = 0.1,
  as: Component = 'div',
}) => {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      },
      {
        threshold,
        rootMargin: '0px 0px -50px 0px',
      }
    );

    const currentRef = ref.current;
    if (currentRef) {
      observer.observe(currentRef);
    }

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef);
      }
    };
  }, [threshold]);

  const animationClass = `animate-${animation}`;
  const delayClass = delay !== 'delay-0' ? `animate-${delay}` : '';

  return (
    <Component
      ref={ref}
      className={cn(
        className,
        isVisible ? animationClass : 'opacity-0',
        isVisible && delayClass
      )}
    >
      {children}
    </Component>
  );
};

export default AnimatedSection;
