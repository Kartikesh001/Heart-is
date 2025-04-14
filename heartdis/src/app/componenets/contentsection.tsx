import { useEffect, useRef } from 'react';
import { Heart, Activity, Award, AlertCircle } from 'lucide-react';

interface FeatureProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  delay: number;
}

const Feature = ({ icon, title, description, delay }: FeatureProps) => {
  const featureRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setTimeout(() => {
              if (featureRef.current) {
                featureRef.current.classList.add('opacity-100', 'translate-y-0');
                featureRef.current.classList.remove('opacity-0', 'translate-y-10');
              }
            }, delay);
          }
        });
      },
      { threshold: 0.1 }
    );
    
    if (featureRef.current) {
      observer.observe(featureRef.current);
    }
    
    return () => {
      if (featureRef.current) {
        observer.unobserve(featureRef.current);
      }
    };
  }, [delay]);
  
  return (
    <div 
      ref={featureRef}
      className="bg-white rounded-lg p-6 shadow-lg transition-all duration-700 transform opacity-0 translate-y-10"
    >
      <div className="text-red-500 mb-4 inline-flex p-3 rounded-full bg-red-100">
        {icon}
      </div>
      <h3 className="text-xl font-semibold mb-2 text-gray-800">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </div>
  );
};

const ContentSection = () => {
  const titleRef = useRef<HTMLHeadingElement>(null);
  
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('opacity-100', 'translate-y-0');
            entry.target.classList.remove('opacity-0', 'translate-y-10');
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
  
  const features = [
    {
      icon: <Heart size={28} />,
      title: "AI-Powered Prediction",
      description: "Our advanced algorithms analyze your health data to predict potential heart issues with high accuracy.",
      delay: 200
    },
    {
      icon: <Activity size={28} />,
      title: "Real-time Monitoring",
      description: "Track your heart health metrics over time and receive alerts about significant changes.",
      delay: 400
    },
    {
      icon: <Award size={28} />,
      title: "Personalized Recommendations",
      description: "Get tailored lifestyle and dietary advice based on your unique heart health profile.",
      delay: 600
    },
    {
      icon: <AlertCircle size={28} />,
      title: "Early Risk Detection",
      description: "Identify potential cardiovascular risks before they become serious health concerns.",
      delay: 800
    }
  ];
  
  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 
          ref={titleRef}
          className="text-3xl md:text-4xl font-bold text-center mb-12 transition-all duration-1000 transform opacity-0 translate-y-10"
        >
          How Our <span className="text-red-500">Heart Health Predictor</span> Works
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <Feature
              key={index}
              icon={feature.icon}
              title={feature.title}
              description={feature.description}
              delay={feature.delay}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ContentSection;