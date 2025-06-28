import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';
import icon from '../assets/icon.webp';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navItems = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Courses', href: '#courses' },
    { name: 'Internships', href: '#internships' },
    { name: 'Services', href: '#services' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <header className="bg-black/30 backdrop-blur-sm shadow-sm fixed w-full top-0 z-50">
      <nav className="w-full px-4 sm:px-6 lg:px-[100px]">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <div className="flex items-center space-x-3">
            <img src={icon} alt="ZiyaAcademy Logo" className="h-16 w-auto" />
            <div>
              <h1 className="text-xl sm:text-2xl font-bold text-blue-500">ZiyaAcademy</h1>
              <p className="text-xs sm:text-sm text-green-500">KEY TO SUCCESS</p>
            </div>
          </div>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center space-x-10">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="text-white hover:text-blue-400 font-medium"
              >
                {item.name}
              </a>
            ))}
            <button className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-md text-sm">
              Join Now
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-white"
              aria-label="Toggle Menu"
            >
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation Panel */}
        {isMenuOpen && (
          <div className="md:hidden mt-2 bg-black/80 rounded-md shadow-lg">
            <div className="space-y-1 px-4 py-4">
              {navItems.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  onClick={() => setIsMenuOpen(false)}
                  className="block text-white py-2 px-2 rounded hover:bg-blue-600"
                >
                  {item.name}
                </a>
              ))}
              <button className="w-full mt-4 bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-md text-sm">
                Join Now
              </button>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Header;
