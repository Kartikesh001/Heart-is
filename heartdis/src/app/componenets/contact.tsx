import { useState, useEffect, useRef } from 'react';
import Head from 'next/head';
import { MapPin, Phone, Mail, Clock, Send, MessageSquare, User, FileText } from 'lucide-react';
// import Navbar from '@/components/Navbar';
// import Footer from '@/components/Footer';
import Navbar from './Navbar';
import Footer from './footersection';
// 
import SmoothScroll from './smoothscroll';

const ContactUsPage = () => {
  // Form state
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [submitError, setSubmitError] = useState<string | null>(null);
  
  // Refs for animation
  const heroRef = useRef<HTMLDivElement>(null);
  const contactInfoRef = useRef<HTMLDivElement>(null);
  const contactFormRef = useRef<HTMLDivElement>(null);
  const faqRef = useRef<HTMLDivElement>(null);
  
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
    
    // Observe all refs
    const refs = [heroRef, contactInfoRef, contactFormRef, faqRef];
    refs.forEach(ref => {
      if (ref.current) observer.observe(ref.current);
    });
    
    return () => {
      observer.disconnect();
    };
  }, []);
  
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Reset states
    setSubmitError(null);
    
    // Simulate API call
    setTimeout(() => {
      setFormSubmitted(true);
      // Reset form
      setFormData({
        name: '',
        email: '',
        subject: '',
        message: ''
      });
    }, 800);
  };
  
  const contactInfo = [
    {
      icon: <MapPin className="w-6 h-6" />,
      title: "Our Location",
      details: [
        "123 Heart Health Way",
        "Medical District",
        "New York, NY 10001"
      ]
    },
    {
      icon: <Phone className="w-6 h-6" />,
      title: "Phone Numbers",
      details: [
        "+1 (123) 456-7890 (Main)",
        "+1 (123) 456-7891 (Support)"
      ]
    },
    {
      icon: <Mail className="w-6 h-6" />,
      title: "Email Addresses",
      details: [
        "info@hearthealth.com",
        "support@hearthealth.com"
      ]
    },
    {
      icon: <Clock className="w-6 h-6" />,
      title: "Working Hours",
      details: [
        "Monday-Friday: 9AM-6PM",
        "Saturday: 10AM-4PM",
        "Sunday: Closed"
      ]
    }
  ];
  
  const faqItems = [
    {
      question: "How accurate is your heart health predictor?",
      answer: "Our AI model has been trained on extensive medical datasets and validated with clinical trials, achieving 95% accuracy in predicting cardiovascular risks. However, it's designed to complement, not replace, professional medical advice."
    },
    {
      question: "Is my health data secure?",
      answer: "Absolutely. We employ bank-level encryption and adhere to HIPAA compliance standards. Your personal and health information is never sold to third parties, and you have complete control over your data."
    },
    {
      question: "Can I use HeartHealth if I already have a heart condition?",
      answer: "Yes. While our platform excels at early detection, it's also valuable for monitoring existing conditions. The personalized recommendations can help manage diagnosed heart conditions, though always in consultation with your healthcare provider."
    },
    {
      question: "Do I need special equipment to use HeartHealth?",
      answer: "No special equipment is required for basic assessments. You can input data from standard health checkups or connect compatible wearable devices for enhanced monitoring and predictions."
    }
  ];
  
  return (
    <SmoothScroll>
      <Head>
        <title>Contact Us | HeartHealth - AI-Powered Heart Health Prediction</title>
        <meta name="description" content="Get in touch with our team for questions, support, or partnership inquiries about our heart health prediction platform." />
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
                Get in Touch
              </h1>
              <p className="text-xl text-gray-200 mb-8">
                Have questions about our heart health predictor? Our team is here to help.
              </p>
            </div>
          </div>
        </section>
        
        {/* Contact Info */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <div 
              ref={contactInfoRef}
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 transition-all duration-1000 transform opacity-0 translate-y-10"
            >
              {contactInfo.map((info, index) => (
                <div 
                  key={index} 
                  className="bg-gray-50 rounded-lg p-6 shadow-lg hover:shadow-xl transition-shadow"
                >
                  <div className="bg-red-100 p-3 rounded-full inline-flex text-red-500 mb-4">
                    {info.icon}
                  </div>
                  <h3 className="text-xl font-semibold mb-3">{info.title}</h3>
                  <div className="text-gray-600">
                    {info.details.map((detail, i) => (
                      <p key={i} className="mb-1">{detail}</p>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
        
        {/* Contact Form & Map */}
        <section className="py-20 bg-gray-50">
          <div className="container mx-auto px-4">
            <div 
              ref={contactFormRef}
              className="flex flex-col lg:flex-row gap-12 transition-all duration-1000 transform opacity-0 translate-y-10"
            >
              {/* Contact Form */}
              <div className="lg:w-1/2">
                <div className="bg-white rounded-xl shadow-lg p-8">
                  <h2 className="text-2xl font-bold mb-6">Send Us a Message</h2>
                  
                  {formSubmitted ? (
                    <div className="bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded mb-4">
                      <p>Thank you for your message! We'll get back to you shortly.</p>
                    </div>
                  ) : submitError ? (
                    <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded mb-4">
                      <p>{submitError}</p>
                    </div>
                  ) : null}
                  
                  <form onSubmit={handleSubmit}>
                    <div className="mb-4">
                      <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="name">
                        Your Name
                      </label>
                      <div className="relative">
                        <div className="absolute left-3 top-3 text-gray-400">
                          <User size={18} />
                        </div>
                        <input
                          className="w-full pl-10 pr-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent"
                          id="name"
                          name="name"
                          type="text"
                          placeholder="John Doe"
                          value={formData.name}
                          onChange={handleChange}
                          required
                        />
                      </div>
                    </div>
                    
                    <div className="mb-4">
                      <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">
                        Email Address
                      </label>
                      <div className="relative">
                        <div className="absolute left-3 top-3 text-gray-400">
                          <Mail size={18} />
                        </div>
                        <input
                          className="w-full pl-10 pr-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent"
                          id="email"
                          name="email"
                          type="email"
                          placeholder="your@email.com"
                          value={formData.email}
                          onChange={handleChange}
                          required
                        />
                      </div>
                    </div>
                    
                    <div className="mb-4">
                      <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="subject">
                        Subject
                      </label>
                      <div className="relative">
                        <div className="absolute left-3 top-3 text-gray-400">
                          <FileText size={18} />
                        </div>
                        <select
                          className="w-full pl-10 pr-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent appearance-none"
                          id="subject"
                          name="subject"
                          value={formData.subject}
                          onChange={handleChange}
                          required
                        >
                          <option value="">Select a subject</option>
                          <option value="General Inquiry">General Inquiry</option>
                          <option value="Technical Support">Technical Support</option>
                          <option value="Partnership">Partnership Opportunity</option>
                          <option value="Feedback">Feedback</option>
                          <option value="Other">Other</option>
                        </select>
                      </div>
                    </div>
                    
                    <div className="mb-6">
                      <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="message">
                        Your Message
                      </label>
                      <div className="relative">
                        <div className="absolute left-3 top-3 text-gray-400">
                          <MessageSquare size={18} />
                        </div>
                        <textarea
                          className="w-full pl-10 pr-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent"
                          id="message"
                          name="message"
                          rows={5}
                          placeholder="How can we help you?"
                          value={formData.message}
                          onChange={handleChange}
                          required
                        />
                      </div>
                    </div>
                    
                    <button
                      type="submit"
                      className="w-full bg-red-500 hover:bg-red-600 text-white font-bold py-3 px-4 rounded-md transition-colors flex items-center justify-center"
                    >
                      <Send className="mr-2" size={18} />
                      Send Message
                    </button>
                  </form>
                </div>
              </div>
              
              {/* Map */}
              <div className="lg:w-1/2">
                <div className="h-full min-h-[400px] bg-gray-200 rounded-xl overflow-hidden shadow-lg relative">
                  {/* Placeholder for a map - in a real app, you'd embed Google Maps or similar */}
                  <div className="absolute inset-0 bg-gradient-to-br from-gray-600 to-gray-800 flex items-center justify-center">
                    <div className="text-center text-white p-8">
                      <MapPin className="w-16 h-16 mb-4 mx-auto text-red-500" />
                      <h3 className="text-2xl font-bold mb-2">Our Location</h3>
                      <p className="text-gray-300">
                        We're located in the heart of New York's Medical District.
                      </p>
                      <div className="mt-6 inline-block">
                        <a
                          href="https://maps.google.com"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="bg-white text-gray-800 px-4 py-2 rounded-md font-medium hover:bg-gray-100 transition-colors"
                        >
                          Get Directions
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        
        {/* FAQ Section */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <div 
              ref={faqRef}
              className="max-w-4xl mx-auto transition-all duration-1000 transform opacity-0 translate-y-10"
            >
              <h2 className="text-3xl font-bold text-center mb-12">Frequently Asked Questions</h2>
              
              <div className="space-y-6">
                {faqItems.map((faq, index) => (
                  <div key={index} className="bg-gray-50 rounded-lg p-6 shadow-md hover:shadow-lg transition-shadow">
                    <h3 className="text-xl font-semibold mb-3 text-gray-800">{faq.question}</h3>
                    <p className="text-gray-600">{faq.answer}</p>
                  </div>
                ))}
              </div>
              
              <div className="text-center mt-12">
                <p className="text-gray-600 mb-4">
                  Can't find the answer you're looking for?
                </p>
                <a
                  href="mailto:support@hearthealth.com"
                  className="text-red-500 font-medium hover:text-red-600 transition-colors"
                >
                  Email our support team →
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </SmoothScroll>
  );
};

export default ContactUsPage;