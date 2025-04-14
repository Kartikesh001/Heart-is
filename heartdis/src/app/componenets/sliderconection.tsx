import { useState, useEffect, useRef } from 'react';
import { ChevronLeft, ChevronRight, Star } from 'lucide-react';

interface TestimonialProps {
  name: string;
  role: string;
  image: string;
  quote: string;
  rating: number;
}
const testimonials: TestimonialProps[] = [
  {
    name: "Dr. A.P.J. Abdul Kalam",
    role: "Scientist & Former President",
    image: "/testimonial-1.jpg",
    quote: "Let us give our heart the same care we give our dreams. A healthy heart beats for a purpose.",
    rating: 5
  },
  {
    name: "Florence Nightingale",
    role: "Nurse & Social Reformer",
    image: "/testimonial-2.jpg",
    quote: "The very first requirement in a hospital is that it should do the sick no harm. A strong heart begins with prevention.",
    rating: 5
  },
  {
    name: "Anonymous",
    role: "Heart Warrior",
    image: "/testimonial-3.jpg",
    quote: "Your heart works 24/7 for you. Take a moment each day to return the favor with care and love.",
    rating: 4
  },
  {
    name: "Maya Angelou",
    role: "Poet & Activist",
    image: "/testimonial-4.jpg",
    quote: "The heart of life is in the rhythm it beats. Keep it strong, and your soul will sing.",
    rating: 5
  }
];


const SliderSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);
  const sliderRef = useRef<HTMLDivElement>(null);
  
  const nextSlide = () => {
    if (isAnimating) return;
    setIsAnimating(true);
    setCurrentIndex((prevIndex) => 
      prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1
    );
    setTimeout(() => setIsAnimating(false), 500);
  };
  
  const prevSlide = () => {
    if (isAnimating) return;
    setIsAnimating(true);
    setCurrentIndex((prevIndex) => 
      prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1
    );
    setTimeout(() => setIsAnimating(false), 500);
  };
  
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
    
    if (sliderRef.current) {
      observer.observe(sliderRef.current);
    }
    
    return () => {
      if (sliderRef.current) {
        observer.unobserve(sliderRef.current);
      }
    };
  }, []);
  
  // Auto-scroll
  useEffect(() => {
    const timer = setTimeout(() => {
      nextSlide();
    }, 5000);
    
    return () => clearTimeout(timer);
  }, [currentIndex]);
  
  return (
    <section className="py-20 bg-gradient-to-r from-red-50 to-blue-50">
      <div className="container mx-auto px-4">
        {/* <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
           <span className="text-red-500">Users Say</span>
        </h2> */}
        
        <div 
          ref={sliderRef}
          className="relative max-w-4xl mx-auto transition-all duration-1000 transform opacity-0 translate-y-10"
        >
          <div className="overflow-hidden rounded-xl shadow-xl">
            <div 
              className="flex transition-transform duration-500 ease-in-out"
              style={{ transform: `translateX(-${currentIndex * 100}%)` }}
            >
              {testimonials.map((testimonial, index) => (
                <div key={index} className="min-w-full bg-white p-8 md:p-12">
                  <div className="flex flex-col md:flex-row md:items-center">
                    <div className="mb-6 md:mb-0 md:mr-8">
                      <div className="w-24 h-24 rounded-full bg-gray-300 overflow-hidden">
                        <img 
                          src="/api/placeholder/96/96" 
                          alt={testimonial.name} 
                          className="w-full h-full object-cover"
                        />
                      </div>
                    </div>
                    
                    <div className="flex-1">
                      <div className="flex mb-3">
                        {[...Array(testimonial.rating)].map((_, i) => (
                          <Star key={i} className="text-yellow-400 fill-current" size={20} />
                        ))}
                      </div>
                      
                      <blockquote className="text-lg md:text-xl italic text-gray-700 mb-4">
                        "{testimonial.quote}"
                      </blockquote>
                      
                      <div>
                        <p className="font-semibold text-gray-800">{testimonial.name}</p>
                        <p className="text-gray-500">{testimonial.role}</p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          <button 
            onClick={prevSlide} 
            className="absolute left-0 top-1/2 transform -translate-y-1/2 -translate-x-1/2 bg-white p-3 rounded-full shadow-lg hover:bg-gray-100 focus:outline-none z-10"
            aria-label="Previous testimonial"
          >
            <ChevronLeft size={24} className="text-gray-700" />
          </button>
          
          <button 
            onClick={nextSlide} 
            className="absolute right-0 top-1/2 transform -translate-y-1/2 translate-x-1/2 bg-white p-3 rounded-full shadow-lg hover:bg-gray-100 focus:outline-none z-10"
            aria-label="Next testimonial"
          >
            <ChevronRight size={24} className="text-gray-700" />
          </button>
          
          <div className="flex justify-center mt-6 space-x-2">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => {
                  if (!isAnimating) {
                    setIsAnimating(true);
                    setCurrentIndex(index);
                    setTimeout(() => setIsAnimating(false), 500);
                  }
                }}
                className={`w-3 h-3 rounded-full transition-colors ${
                  index === currentIndex ? 'bg-red-500' : 'bg-gray-300'
                }`}
                aria-label={`Go to testimonial ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default SliderSection;