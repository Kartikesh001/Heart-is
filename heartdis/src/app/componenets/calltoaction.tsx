import { useEffect, useRef } from 'react';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';

const CTASection = () => {
  const ctaRef = useRef<HTMLDivElement>(null);
  
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
    
    if (ctaRef.current) {
      observer.observe(ctaRef.current);
    }
    
    return () => {
      if (ctaRef.current) {
        observer.unobserve(ctaRef.current);
      }
    };
  }, []);
  
  return (
    <section className="py-20 bg-gradient-to-r from-red-600 to-red-800 relative overflow-hidden">
      {/* Decorative Elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden opacity-10">
        <div className="absolute -top-20 -left-20 w-64 h-64 rounded-full bg-white"></div>
        <div className="absolute top-40 right-10 w-32 h-32 rounded-full bg-white"></div>
        <div className="absolute bottom-10 left-1/4 w-48 h-48 rounded-full bg-white"></div>
        <div className="absolute bottom-40 right-1/3 w-24 h-24 rounded-full bg-white"></div>
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div 
          ref={ctaRef}
          className="max-w-4xl mx-auto text-center transition-all duration-1000 transform opacity-0 translate-y-10"
        >
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
            Take Control of Your Heart Health Today
          </h2>
          <p className="text-xl text-white/90 mb-10 max-w-3xl mx-auto">
            Don't leave your cardiovascular health to chance. Our AI-powered predictor can provide 
            personalized insights and recommendations to help you live a healthier life.
          </p>
          <div className="flex flex-col sm:flex-row justify-center items-center space-y-4 sm:space-y-0 sm:space-x-6">
            <Link
              href="/predictor"
              className="bg-white text-red-600 hover:bg-gray-100 px-8 py-4 rounded-full font-semibold transition-colors flex items-center justify-center"
            >
              Start Free Assessment <ArrowRight className="ml-2" size={20} />
            </Link>
            <Link
              href="/contact"
              className="border-2 border-white text-white hover:bg-white/10 px-8 py-4 rounded-full font-semibold transition-colors"
            >
              Talk to a Specialist
            </Link>
          </div>
          <p className="text-white/80 mt-8">
            No credit card required. Get your heart health report in under 5 minutes.
          </p>
        </div>
      </div>
    </section>
  );
};

export default CTASection;