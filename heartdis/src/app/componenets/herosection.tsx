import { useEffect, useRef } from 'react';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';

const HeroSection = () => {
  const heroRef = useRef<HTMLDivElement>(null);
  
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
    
    if (heroRef.current) {
      observer.observe(heroRef.current);
    }
    
    return () => {
      if (heroRef.current) {
        observer.unobserve(heroRef.current);
      }
    };
  }, []);
  
  return (
    <div className="relative min-h-screen flex items-center bg-gradient-to-r from-blue-900 to-indigo-900">
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-black opacity-50"></div>
        {/* Background pattern */}
        <div className="absolute inset-0 bg-[url('/heart-pattern.svg')] opacity-10"></div>
      </div>
      
      <div className="container mx-auto px-4 z-10">
        <div 
          ref={heroRef}
          className="max-w-3xl mx-auto text-center transition-all duration-1000 transform opacity-0 translate-y-10"
        >
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
            Predict Your <span className="text-red-500">Heart Health</span> With Precision
          </h1>
          <p className="text-xl text-gray-200 mb-8">
            Use our advanced AI-powered prediction tool to assess your cardiovascular health 
            and get personalized recommendations for a healthier heart.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href="/predictor"
              className="bg-red-500 hover:bg-red-600 text-white px-8 py-3 rounded-full font-medium flex items-center justify-center transition-all duration-300 w-full sm:w-auto"
            >
              Start Assessment <ArrowRight className="ml-2" size={18} />
            </Link>
            <Link
              href="/learn-more"
              className="bg-transparent border-2 border-white text-white hover:bg-white hover:text-blue-900 px-8 py-3 rounded-full font-medium transition-all duration-300 w-full sm:w-auto"
            >
              Learn More
            </Link>
          </div>
        </div>
      </div>
      
      {/* Scroll indicator */}
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-8 h-12 rounded-full border-2 border-white flex items-start justify-center">
          <div className="w-1 h-3 bg-white rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;