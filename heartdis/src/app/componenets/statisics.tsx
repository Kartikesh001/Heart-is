import { useEffect, useState, useRef } from 'react';

interface StatProps {
  value: number;
  label: string;
  prefix?: string;
  suffix?: string;
  duration?: number;
  delay?: number;
}

const Stat = ({ value, label, prefix = '', suffix = '', duration = 2000, delay = 0 }: StatProps) => {
  const [count, setCount] = useState(0);
  const statRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);
  
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
            if (statRef.current) {
              observer.unobserve(statRef.current);
            }
          }
        });
      },
      { threshold: 0.1 }
    );
    
    if (statRef.current) {
      observer.observe(statRef.current);
    }
    
    return () => {
      if (statRef.current) {
        observer.unobserve(statRef.current);
      }
    };
  }, []);
  
  useEffect(() => {
    if (!isVisible) return;
    
    let start = 0;
    const end = value;
    const increment = end / 50;
    const timer = setTimeout(() => {
      const counter = setInterval(() => {
        start += increment;
        setCount(Math.floor(start));
        
        if (start >= end) {
          clearInterval(counter);
          setCount(end);
        }
      }, 40);
      
      return () => clearInterval(counter);
    }, delay);
    
    return () => clearTimeout(timer);
  }, [value, duration, delay, isVisible]);
  
  return (
    <div 
      ref={statRef}
      className="text-center transition-all duration-1000 transform opacity-0 translate-y-10"
      style={{ opacity: isVisible ? 1 : 0, transform: isVisible ? 'translateY(0)' : 'translateY(40px)' }}
    >
      <div className="text-4xl md:text-5xl font-bold text-red-500 mb-2">
        {prefix}{count}{suffix}
      </div>
      <div className="text-gray-600">{label}</div>
    </div>
  );
};

const StatisticsSection = () => {
  const titleRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);
  
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
            if (titleRef.current) {
              observer.unobserve(titleRef.current);
            }
          }
        });
      },
      { threshold: 0.1 }
    );
    
    if (titleRef.current) {
      observer.observe(titleRef.current);
    }
    
    return () => {
      if (titleRef.current) {
        observer.unobserve(titleRef.current);
      }
    };
  }, []);
  
  const stats = [
    { value: 95, label: "Prediction Accuracy", suffix: "%", delay: 200 },
    // { value: 500000, label: "Lives Impacted", prefix: "", delay: 400 },
    { value: 24, label: "Hour Support", suffix: "/7", delay: 600 },
    { value: 90, label: "User Satisfaction", suffix: "%", delay: 800 }
  ];
  
  return (
    <section className="py-20 bg-gray-100">
      <div className="container mx-auto px-4">
        <div 
          ref={titleRef}
          className="max-w-3xl mx-auto text-center mb-16 transition-all duration-1000"
          style={{ opacity: isVisible ? 1 : 0, transform: isVisible ? 'translateY(0)' : 'translateY(40px)' }}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Our <span className="text-red-500">Impact</span> in Numbers
          </h2>
          <p className="text-gray-600 text-lg">
            HeartHealth is a difference in cardiovascular health around the world. Here's how we measure our success.
          </p>
        </div>
        
        <div className="ml-[300px] grid grid-cols-2 md:grid-cols-4 gap-20">
          {stats.map((stat, index) => (
            <Stat
              key={index}
              value={stat.value}
              label={stat.label}
              prefix={stat.prefix}
              suffix={stat.suffix}
              delay={stat.delay}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default StatisticsSection;