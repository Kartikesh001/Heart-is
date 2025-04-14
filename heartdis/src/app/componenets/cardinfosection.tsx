import { useEffect, useRef } from 'react';
import { Heart, Activity, Zap, Clock } from 'lucide-react';
import Link from 'next/link';

interface CardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  link: string;
  color: string;
  delay: number;
}

const Card = ({ icon, title, description, link, color, delay }: CardProps) => {
  const cardRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setTimeout(() => {
              if (cardRef.current) {
                cardRef.current.classList.add('opacity-100', 'translate-y-0');
                cardRef.current.classList.remove('opacity-0', 'translate-y-10');
              }
            }, delay);
          }
        });
      },
      { threshold: 0.1 }
    );
    
    if (cardRef.current) {
      observer.observe(cardRef.current);
    }
    
    return () => {
      if (cardRef.current) {
        observer.unobserve(cardRef.current);
      }
    };
  }, [delay]);
  
  return (
    <div 
      ref={cardRef}
      className={`rounded-xl shadow-lg p-6 transition-all duration-700 transform opacity-0 translate-y-10 hover:-translate-y-2 hover:shadow-xl ${color}`}
    >
      <div className="text-white mb-4">
        {icon}
      </div>
      <h3 className="text-xl font-bold mb-3 text-white">{title}</h3>
      <p className="text-white/80 mb-6">{description}</p>
      <Link 
        href={link}
        className="inline-block text-white font-medium hover:underline"
      >
        Learn more →
      </Link>
    </div>
  );
};

const CardInfoSection = () => {
  const titleRef = useRef<HTMLDivElement>(null);
  
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
  
  const cards = [
    {
      icon: <Heart size={36} />,
      title: "Heart Disease Risk Factors",
      description: "Understand the key factors that contribute to heart disease and how to mitigate them.",
      link: "/risk-factors",
      color: "bg-gradient-to-br from-red-500 to-red-700",
      delay: 200
    },
    {
      icon: <Activity size={36} />,
      title: "Monitoring Your Heart Health",
      description: "Learn about the vital signs and metrics that indicate your heart's condition.",
      link: "/monitoring",
      color: "bg-gradient-to-br from-blue-500 to-blue-700",
      delay: 400
    },
    {
      icon: <Zap size={36} />,
      title: "Prevention Strategies",
      description: "Discover effective lifestyle changes that can significantly improve heart health.",
      link: "/prevention",
      color: "bg-gradient-to-br from-green-500 to-green-700",
      delay: 600
    },
    {
      icon: <Clock size={36} />,
      title: "Early Warning Signs",
      description: "Recognize the symptoms that might indicate heart problems requiring attention.",
      link: "/warning-signs",
      color: "bg-gradient-to-br from-purple-500 to-purple-700",
      delay: 800
    }
  ];
  
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div 
          ref={titleRef}
          className="max-w-3xl mx-auto text-center mb-16 transition-all duration-1000 transform opacity-0 translate-y-10"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Key Information About <span className="text-red-500">Heart Health</span>
          </h2>
          <p className="text-gray-600 text-lg">
            Educate yourself with these essential resources about cardiovascular health and disease prevention.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {cards.map((card, index) => (
            <Card
              key={index}
              icon={card.icon}
              title={card.title}
              description={card.description}
              link={card.link}
              color={card.color}
              delay={card.delay}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default CardInfoSection;