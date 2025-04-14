import { useEffect, useRef } from 'react';
import Head from 'next/head';
import Link from 'next/link';
import { Heart, Award, Users, Shield, BookOpen, BarChart } from 'lucide-react';
// import Navbar from '@/components/Navbar';
import Navbar from './Navbar';
import Footer from './footersection';
// import Footer from '@/components/Footer';
// import SmoothScroll from '@/components/SmoothScroll';
import SmoothScroll from './smoothscroll';

const AboutUsPage = () => {
  // Refs for animation
  const heroRef = useRef<HTMLDivElement>(null);
  const missionRef = useRef<HTMLDivElement>(null);
  const teamRefs = useRef<Array<HTMLDivElement | null>>([]);
  const valuesRef = useRef<HTMLDivElement>(null);
  
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
    
    // Observe hero, mission, and values refs
    if (heroRef.current) observer.observe(heroRef.current);
    if (missionRef.current) observer.observe(missionRef.current);
    if (valuesRef.current) observer.observe(valuesRef.current);
    
    // Observe team refs
    teamRefs.current.forEach(ref => {
      if (ref) observer.observe(ref);
    });
    
    return () => {
      observer.disconnect();
    };
  }, []);
  
  const addToTeamRefs = (el: HTMLDivElement | null, index: number) => {
    teamRefs.current[index] = el;
  };

  const teamMembers = [
    {
      name: "Dr. Sarah Johnson",
      role: "Founder & Cardiologist",
      image: "/team-1.jpg",
      bio: "With over 15 years of experience in cardiology, Dr. Johnson founded HeartHealth to make preventive cardiac care accessible to everyone.",
      delay: 100
    },
    {
      name: "Michael Chen",
      role: "Chief Technology Officer",
      image: "/team-2.jpg",
      bio: "Michael leads our tech team, bringing 10+ years of AI and machine learning expertise to develop our accurate prediction algorithms.",
      delay: 200
    },
    {
      name: "Dr. Emma Williams",
      role: "Research Director",
      image: "/team-3.jpg",
      bio: "Emma oversees our research initiatives, ensuring our methods are backed by the latest scientific studies in cardiovascular health.",
      delay: 300
    },
    {
      name: "Robert Patel",
      role: "Head of User Experience",
      image: "/team-4.jpg",
      bio: "Robert ensures our platform is intuitive and accessible, making complex health data easy to understand for all users.",
      delay: 400
    }
  ];
  
  const companyValues = [
    {
      icon: <Shield className="w-8 h-8" />,
      title: "Data Privacy & Security",
      description: "We maintain the highest standards of data security and patient confidentiality in all our operations."
    },
    {
      icon: <BookOpen className="w-8 h-8" />,
      title: "Scientific Accuracy",
      description: "Our predictions and recommendations are based on peer-reviewed research and continuously validated methods."
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: "Inclusivity",
      description: "We design our tools to be accessible and effective for people of all backgrounds, ages, and health statuses."
    },
    {
      icon: <BarChart className="w-8 h-8" />,
      title: "Transparency",
      description: "We clearly explain how our algorithms work and the factors that influence our heart health predictions."
    }
  ];
  
  return (
    <SmoothScroll>
      <Head>
        <title>About Us | HeartHealth - AI-Powered Heart Health Prediction</title>
        <meta name="description" content="Learn about our mission to revolutionize cardiovascular health through AI-powered predictions and personalized care." />
      </Head>
      
      <Navbar />
      
      <main className="pt-16">
        {/* Hero Section */}
        <section className="relative py-20 bg-gradient-to-r from-blue-900 to-indigo-900 text-white">
          <div className="absolute inset-0 overflow-hidden">
            <div className="absolute inset-0 bg-black opacity-50"></div>
            {/* Background pattern */}
            <div className="absolute inset-0 bg-[url('/heart-pattern.svg')] opacity-10"></div>
          </div>
          <div className="container mx-auto px-4 relative z-10">
            <div 
              ref={heroRef}
              className="max-w-3xl mx-auto text-center transition-all duration-1000 transform opacity-0 translate-y-10"
            >
              <h1 className="text-4xl md:text-5xl font-bold mb-6">
                About <span className="text-red-400">HeartHealth</span>
              </h1>
              <p className="text-xl text-gray-200 mb-8">
                We're on a mission to revolutionize cardiovascular health through technology, 
                making early detection and prevention accessible to everyone.
              </p>
            </div>
          </div>
        </section>
        
        {/* Our Mission */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <div 
              ref={missionRef} 
              className="flex flex-col lg:flex-row items-center gap-12 transition-all duration-1000 transform opacity-0 translate-y-10"
            >
              <div className="lg:w-1/2">
                <div className="relative">
                  <div className="rounded-lg overflow-hidden shadow-xl">
                    <img 
                      src="/api/placeholder/600/400" 
                      alt="Our mission" 
                      className="w-full h-auto"
                    />
                  </div>
                  <div className="absolute -bottom-6 -right-6 bg-red-500 text-white p-6 rounded-lg shadow-lg">
                    <Heart className="w-12 h-12" />
                  </div>
                </div>
              </div>
              
              <div className="lg:w-1/2">
                <h2 className="text-3xl font-bold mb-6">Our Mission & Story</h2>
                <p className="text-gray-600 mb-4">
                  Founded in 2022, HeartHealth began with a simple but powerful idea: what if we could 
                  predict heart disease before it happens? Our founder, Dr. Sarah Johnson, witnessed 
                  too many patients arriving with advanced heart conditions that could have been 
                  prevented with earlier intervention.
                </p>
                <p className="text-gray-600 mb-6">
                  Today, we combine advanced AI algorithms with medical expertise to provide accurate 
                  heart health assessments and personalized recommendations. Our platform analyzes 
                  various health metrics to identify risk patterns that might otherwise go unnoticed.
                </p>
                <div className="flex items-center space-x-4">
                  <div className="bg-blue-100 p-4 rounded-lg">
                    <Award className="w-8 h-8 text-blue-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold">Award-Winning Technology</h3>
                    <p className="text-sm text-gray-500">Recognized for innovation in healthcare</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        
        {/* Our Team */}
        <section className="py-20 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold mb-4">Meet Our Leadership Team</h2>
              <p className="text-gray-600 max-w-2xl mx-auto">
                Our diverse team combines expertise in cardiology, data science, and health technology to 
                build innovative solutions for cardiovascular health.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {teamMembers.map((member, index) => (
                <div 
                  key={index}
                  ref={(el) => addToTeamRefs(el, index)}
                  className="bg-white rounded-xl shadow-lg overflow-hidden transition-all duration-700 transform opacity-0 translate-y-10 hover:-translate-y-2 hover:shadow-xl"
                  style={{ transitionDelay: `${member.delay}ms` }}
                >
                  <div className="h-64 bg-gray-200">
                    <img 
                      src="/api/placeholder/300/300" 
                      alt={member.name} 
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-bold mb-1">{member.name}</h3>
                    <p className="text-red-500 text-sm mb-4">{member.role}</p>
                    <p className="text-gray-600">{member.bio}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
        
        {/* Our Values */}
        <section className="py-20 bg-blue-900 text-white">
          <div className="container mx-auto px-4">
            <div 
              ref={valuesRef}
              className="transition-all duration-1000 transform opacity-0 translate-y-10"
            >
              <div className="text-center mb-16">
                <h2 className="text-3xl font-bold mb-4">Our Core Values</h2>
                <p className="text-blue-100 max-w-2xl mx-auto">
                  These principles guide everything we do at HeartHealth, from how we develop our technology to how we interact with our users.
                </p>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                {companyValues.map((value, index) => (
                  <div 
                    key={index}
                    className="bg-blue-800 rounded-lg p-6 hover:bg-blue-700 transition-colors"
                  >
                    <div className="text-red-400 mb-4">
                      {value.icon}
                    </div>
                    <h3 className="text-xl font-bold mb-2">{value.title}</h3>
                    <p className="text-blue-100">{value.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
        
        {/* Call to Action */}
        <section className="py-16 bg-gradient-to-r from-red-500 to-red-600 text-white">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold mb-6">Ready to Take Control of Your Heart Health?</h2>
            <p className="text-xl mb-8 max-w-3xl mx-auto">
              Join thousands of users who are already benefiting from our AI-powered heart health predictions.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Link 
                href="/predictor" 
                className="bg-white text-red-600 hover:bg-gray-100 px-8 py-3 rounded-full font-semibold transition-colors"
              >
                Try Our Predictor
              </Link>
              <Link 
                href="/contact" 
                className="border-2 border-white hover:bg-white/10 px-8 py-3 rounded-full font-semibold transition-colors"
              >
                Contact Us
              </Link>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </SmoothScroll>
  );
};

export default AboutUsPage;