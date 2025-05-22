import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { navItems } from '../data';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const offset = window.scrollY;
      if (offset > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <nav 
      className={`fixed w-full z-30 transition-all duration-300 ${
        scrolled 
          ? 'bg-white/95 shadow-md py-3' 
          : 'bg-transparent py-5'
      }`}
    >
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex justify-between items-center">
          <a href="/">
            <div className="bg-white rounded-full p-1">
              <img
                src="https://i.postimg.cc/ydyQ34mx/Whats-App-Image-2025-05-20-at-15-45-18-31ee222b-removebg-preview.png"
                alt="TariSocials Logo"
                className="h-12 w-auto"
              />
            </div>
          </a>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item, index) => (
              <a
                key={index}
                href={item.href}
                className={`text-sm font-medium transition-colors hover:text-[#FF6B35] ${
                  scrolled ? 'text-gray-800' : 'text-white'
                }`}
              >
                {item.label}
              </a>
            ))}
            <a
              href="#contact"
              className="px-5 py-2.5 rounded-full bg-red-600 hover:bg-red-700 text-white text-sm font-medium transition-colors"
            >
              Get Started
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden"
          >
            {isOpen ? (
              <X className={`h-6 w-6 ${scrolled ? 'text-gray-800' : 'text-white'}`} />
            ) : (
              <Menu className={`h-6 w-6 ${scrolled ? 'text-gray-800' : 'text-white'}`} />
            )}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden mt-4 bg-white rounded-lg shadow-lg overflow-hidden">
            <div className="flex flex-col space-y-4 p-4">
              {navItems.map((item, index) => (
                <a
                  key={index}
                  href={item.href}
                  onClick={() => setIsOpen(false)}
                  className="text-gray-800 hover:text-[#FF6B35] font-medium text-sm transition-colors"
                >
                  {item.label}
                </a>
              ))}
              <a
                href="#contact"
                onClick={() => setIsOpen(false)}
                className="px-5 py-2.5 text-center rounded-full bg-red-600 hover:bg-red-700 text-white text-sm font-medium transition-colors"
              >
                Get Started
              </a>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;