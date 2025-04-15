"use client"
import { useState, useEffect } from 'react';
import Link from 'next/link';
import { Menu, X, Heart } from 'lucide-react';
import { usePathname } from 'next/navigation';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
  const pathname = usePathname();
  const isRegisterPage = pathname === '/register';

  return (
    <nav 
      className={`fixed w-full z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white shadow-md py-2' : 'bg-transparent py-4'
      }`}
    >
      <div className="container mx-auto px-4 flex justify-between items-center">
        <Link href="/" className="flex items-center space-x-2">
          <Heart className={`${isScrolled ? 'text-red-600' : 'text-red-500'}`} />
          <span className={`font-bold text-xl ${isScrolled ? 'text-gray-700' : 'text-black'}`}>
            HeartHealth
          </span>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex space-x-8">
          {['Home', 'About', 'Heart-Aliment', 'Predictor', 'Contact'].map((item) => (
            <Link 
            href={item === 'Home' ? '/' : `/${item.toLowerCase()}`} 
              key={item}
              className={`font-medium hover:text-red-500 transition-colors ${
                isScrolled ? 'text-gray-700' : 'text-black'
              }`}
            >
              {item}
            </Link>
          ))}
         <Link 
      href={isRegisterPage ? '/sign-in' : '/register'} 
      className="bg-red-500 hover:bg-red-600 text-black px-4 py-2 rounded-md transition-colors"
    >
      {isRegisterPage ? 'Login' : 'Register'}
    </Link>
        </div>

        {/* Mobile Navigation Toggle */}
        <button 
          className="md:hidden text-gray-700"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-white shadow-lg absolute top-full left-0 w-full">
          <div className="container mx-auto px-4 py-2">
            {['Home', 'About', 'Heart Aliment', 'Predictor', 'Contact'].map((item) => (
              <Link 
                href={`/${item.toLowerCase()}`} 
                key={item}
                className="block py-3 text-gray-700 hover:text-red-500 transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                {item}
              </Link>
            ))}
            <Link 
              href="/get-started" 
              className="block py-3 my-2 bg-red-500 hover:bg-red-600 text-black px-4 rounded-md transition-colors text-center"
              onClick={() => setIsMenuOpen(false)}
            >
             Register
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;