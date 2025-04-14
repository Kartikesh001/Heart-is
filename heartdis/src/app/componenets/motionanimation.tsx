import { useEffect, useRef, useState } from 'react';

interface AnimatedElementProps {
  children: React.ReactNode;
  animation: 'fadeIn' | 'fadeInUp' | 'fadeInLeft' | 'fadeInRight' | 'scaleIn' | 'bounceIn';
  delay?: number;
  duration?: number;
  threshold?: number;
  className?: string;
}

const AnimatedElement = ({ 
  children, 
  animation, 
  delay = 0, 
  duration = 600, 
  threshold = 0.1,
  className = '' 
}: AnimatedElementProps) => {
  const elementRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);
  
  const getAnimationClass = () => {
    if (!isVisible) return 'opacity-0';
    
    switch (animation) {
      case 'fadeIn':
        return 'opacity-100';
      case 'fadeInUp':
        return 'opacity-100 translate-y-0';
      case 'fadeInLeft':
        return 'opacity-100 translate-x-0';
      case 'fadeInRight':
        return 'opacity-100 translate-x-0';
      case 'scaleIn':
        return 'opacity-100 scale-100';
      case 'bounceIn':
        return 'opacity-100 scale-100';
      default:
        return 'opacity-100';
    }
  };
  
  const getInitialClass = () => {
    switch (animation) {
      case 'fadeIn':
        return 'opacity-0';
      case 'fadeInUp':
        return 'opacity-0 translate-y-10';
      case 'fadeInLeft':
        return 'opacity-0 -translate-x-10';
      case 'fadeInRight':
        return 'opacity-0 translate-x-10';
      case 'scaleIn':
        return 'opacity-0 scale-95';
      case 'bounceIn':
        return 'opacity-0 scale-95';
      default:
        return 'opacity-0';
    }
  };
  
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setTimeout(() => {
              setIsVisible(true);
            }, delay);
            
            // Unobserve after animation is triggered
            if (elementRef.current) {
              observer.unobserve(elementRef.current);
            }
          }
        });
      },
      { threshold }
    );
    
    if (elementRef.current) {
      observer.observe(elementRef.current);
    }
    
    return () => {
      if (elementRef.current) {
        observer.unobserve(elementRef.current);
      }
    };
  }, [delay, threshold]);
  
  return (
    <div
      ref={elementRef}
      className={`transition-all ${getInitialClass()} ${getAnimationClass()} ${className}`}
      style={{ transitionDuration: `${duration}ms` }}
    >
      {children}
    </div>
  );
};

export default AnimatedElement;