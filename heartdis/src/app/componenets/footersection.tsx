import Link from 'next/link';
import { Heart, Mail, Phone, MapPin, Facebook, Twitter, Instagram, Linkedin } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-gray-900 text-white pt-16 pb-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* Company Info */}
          <div>
            <div className="flex items-center space-x-2 mb-6">
              <Heart className="text-red-500" size={24} />
              <span className="font-bold text-xl">HeartHealth</span>
            </div>
            <p className="text-gray-400 mb-6">
              Empowering individuals to take control of their cardiovascular health through AI-powered predictions 
              and personalized recommendations.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="bg-gray-800 p-2 rounded-full hover:bg-red-500 transition-colors">
                <Facebook size={18} />
              </a>
              <a href="#" className="bg-gray-800 p-2 rounded-full hover:bg-red-500 transition-colors">
                <Twitter size={18} />
              </a>
              <a href="#" className="bg-gray-800 p-2 rounded-full hover:bg-red-500 transition-colors">
                <Instagram size={18} />
              </a>
              <a href="#" className="bg-gray-800 p-2 rounded-full hover:bg-red-500 transition-colors">
                <Linkedin size={18} />
              </a>
            </div>
          </div>
          
          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-6 relative">
              Quick Links
              <span className="absolute bottom-0 left-0 w-12 h-1 bg-red-500 -mb-2"></span>
            </h3>
            <ul className="space-y-3">
              {['Home', 'About Us', 'Our Services', 'Heart Predictor', 'Blog', 'Contact'].map((item) => (
                <li key={item}>
                  <Link 
                    href={`/${item.toLowerCase().replace(/\s+/g, '-')}`} 
                    className="text-gray-400 hover:text-white transition-colors"
                  >
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          
          {/* Services */}
          <div>
            <h3 className="text-lg font-semibold mb-6 relative">
              Our Services
              <span className="absolute bottom-0 left-0 w-12 h-1 bg-red-500 -mb-2"></span>
            </h3>
            <ul className="space-y-3">
              {[
                'Heart Risk Assessment', 
                'Health Monitoring', 
                'Personalized Plans', 
                'Expert Consultations', 
                'Educational Resources',
                'Community Support'
              ].map((item) => (
                <li key={item}>
                  <Link 
                    href={`/services/${item.toLowerCase().replace(/\s+/g, '-')}`} 
                    className="text-gray-400 hover:text-white transition-colors"
                  >
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          
          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-6 relative">
              Contact Us
              <span className="absolute bottom-0 left-0 w-12 h-1 bg-red-500 -mb-2"></span>
            </h3>
            <ul className="space-y-4">
              <li className="flex items-start">
                <MapPin className="text-red-500 mr-3 mt-1" size={18} />
                <span className="text-gray-400">
                  123 Heart Health Way<br />
                  Medical District<br />
                  New York, NY 10001
                </span>
              </li>
              <li className="flex items-center">
                <Phone className="text-red-500 mr-3" size={18} />
                <a href="tel:+12345678901" className="text-gray-400 hover:text-white transition-colors">
                  (123) 456-7890
                </a>
              </li>
              <li className="flex items-center">
                <Mail className="text-red-500 mr-3" size={18} />
                <a href="mailto:info@hearthealth.com" className="text-gray-400 hover:text-white transition-colors">
                  info@hearthealth.com
                </a>
              </li>
            </ul>
          </div>
        </div>
        
        <hr className="border-gray-800 mb-8" />
        
        {/* Bottom Footer */}
        <div className="flex flex-col md:flex-row md:justify-between md:items-center">
          <p className="text-gray-400 mb-4 md:mb-0">
            © {currentYear} HeartHealth. All rights reserved.
          </p>
          <div className="flex flex-wrap gap-4">
            <Link href="/privacy-policy" className="text-gray-400 hover:text-white transition-colors">
              Privacy Policy
            </Link>
            <Link href="/terms-of-service" className="text-gray-400 hover:text-white transition-colors">
              Terms of Service
            </Link>
            <Link href="/privacy-policy" className="text-gray-400 hover:text-white transition-colors">
              Privacy Policy
            </Link>
            <Link href="/terms-of-service" className="text-gray-400 hover:text-white transition-colors">
              Terms of Service
            </Link>
            <Link href="/sitemap" className="text-gray-400 hover:text-white transition-colors">
              Sitemap
            </Link>
            <Link href="/faq" className="text-gray-400 hover:text-white transition-colors">
              FAQ
            </Link>
          </div>
        </div>
        
        {/* Newsletter Subscription */}
        <div className="mt-12 bg-gray-800 rounded-lg p-6">
          <div className="flex flex-col md:flex-row md:items-center">
            <div className="flex-1 mb-6 md:mb-0 md:mr-8">
              <h4 className="text-lg font-semibold mb-2">Subscribe to Our Newsletter</h4>
              <p className="text-gray-400">
                Get the latest heart health tips, research updates, and special offers delivered directly to your inbox.
              </p>
            </div>
            <div className="flex-1">
              <form className="flex flex-col sm:flex-row gap-3">
                <input 
                  type="email" 
                  placeholder="Your email address" 
                  className="flex-1 px-4 py-3 rounded-md bg-gray-700 text-white border border-gray-600 focus:outline-none focus:border-red-500"
                  required
                />
                <button 
                  type="submit" 
                  className="bg-red-500 hover:bg-red-600 text-white px-6 py-3 rounded-md transition-colors whitespace-nowrap"
                >
                  Subscribe
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;