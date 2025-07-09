import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import icon from '../assets/icon4.png';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeLink] = useState('#home');
  

  const navItems = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Courses', href: '#courses' },
    { name: 'Internships', href: '#internships' },
    { name: 'Services', href: '#services' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <header 
      className={`fixed w-full top-0 z-50 transition-all duration-300 bg-black/40 backdrop-blur-md font-poppins`}
    >
      
      <div className="max-w-8xl mx-auto px-4 sm:px-6 md:px-8 lg:px-20 xl:px-20">
        <nav className="w-full">
          <div className="flex justify-between items-center h-16 md:h-20">
            {/* Logo */}
            <a href="#home" className="flex items-center space-x-2 md:space-x-3">
              <img
                src={icon}
                alt="ZiyaAcademy Logo"
                className="h-8 w-6 md:h-12 md:w-10 lg:h-16 lg:w-14"
              />
              <div className="font-[Poppins]">
                <h1 className="text-base md:text-xl lg:text-2xl font-bold text-blue-500">
                  ZiyaAcademy
                </h1>
                <p className="text-[8px] md:text-xs lg:text-sm text-green-500">
                  KEY TO SUCCESS
                </p>
              </div>
            </a>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-4 lg:space-x-6">
              {navItems.map(item => (
                <a
                  key={item.name}
                  href={item.href}
                  className={`font-medium transition-colors whitespace-nowrap ${
                    activeLink === item.href
                      ? 'text-blue-600 underline underline-offset-4 decoration-2 font-semibold'
                      : 'text-white hover:text-blue-400'
                  }`}
                >
                  {item.name}
                </a>
              ))}
              {/* Enquiry Button */}
              <button className="ml-2 lg:ml-4 bg-blue-500 hover:bg-blue-600 text-white px-6 py-1.5 md:px-8 md:py-2 rounded-3xl text-sm md:text-base font-semibold transition-colors whitespace-nowrap">
                Enquiry
              </button>
            </div>

            {/* Mobile Menu Toggle */}
            <div className="flex md:hidden items-center">
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="text-white p-2"
                aria-label="Toggle Menu"
              >
                {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
              </button>
            </div>
          </div>

          {/* Mobile Navigation */}
          {isMenuOpen && (
            <div className="md:hidden fixed inset-0 bg-black/95 backdrop-blur-lg z-40 pt-16">
              <div className="flex flex-col space-y-2 px-6 py-4">
                {navItems.map(item => (
                  <a
                    key={item.name}
                    href={item.href}
                    className={`py-3 px-4 rounded-lg text-base transition-colors ${
                      activeLink === item.href
                        ? 'text-blue-500 bg-blue-500/10 font-medium'
                        : 'text-white hover:bg-gray-800'
                    }`}
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {item.name}
                  </a>
                ))}
                <button className="mt-2 bg-blue-500 hover:bg-blue-600 text-white py-3 px-4 rounded-lg text-base font-medium transition-colors">
                  Enquiry
                </button>
              </div>
            </div>
          )}
        </nav>
      </div>
    </header>
  );
};

export default Header;