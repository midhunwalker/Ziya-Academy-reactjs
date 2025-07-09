
import React from 'react';
import aboutImage1 from '../assets/aboutimg6.png';
import { Gem } from 'lucide-react';


const AboutUs = () => {
  return (
    <section id="about" className="bg-white py-4 pt-10 px-4 max-w-[100vw] overflow-x-hidden font-poppins">
      <div className="flex flex-col w-full max-w-7xl mx-auto">
        
        
        {/* Content Section */}
        <div className="flex flex-col md:flex-row items-start gap-4 md:gap-8">
          {/* Image Section */}
          <div className="w-full md:w-[55%] pt-0 md:pt-[60px] h-auto">
            <img
              src={aboutImage1}
              alt="Team working"
              className="w-full h-auto max-h-[400px] md:max-h-[600px] object-cover rounded-lg duration-500"
            />
          </div>

          {/* Text Content */}
          <div className="w-full md:w-[45%] text-start pt-4 md:pt-8">
            <div className="text-center mb-6">
              <h2 className="text-xl md:text-3xl font-bold text-blue-500 mb-2">
                About Us
              </h2>
              <div className="w-16 h-1 bg-green-500 mx-auto mt-2"></div>
            </div>

            <p className="text-sm md:text-base mb-3 text-gray-600">
              Ziya Academy is more than just an educational institution, it's a place where potential meets purpose. Our mission is to empower students through personalized education and skill-building.
            </p>
            <p className="text-sm md:text-base mb-4 text-gray-600">
              At Ziya Academy, we believe that quality education lays the foundation for a brighter future. That's why we are committed to delivering high-impact learning experiences.
            </p>

            {/* Mission */}
            <div className="flex items-center mb-2">
              <Gem className="text-green-600 mr-2 w-4 h-4" />
              <h3 className="text-base md:text-xl font-bold text-green-600">Our Mission</h3>
            </div>
            <p className="text-sm md:text-base mb-4 text-gray-600">
              To provide affordable, quality education through innovative teaching methods
            </p>

            {/* Vision */}
            <div className="flex items-center mb-2">
              <Gem className="text-blue-500 mr-2 w-4 h-4" />
              <h3 className="text-base md:text-xl font-bold text-blue-500">Our Vision</h3>
            </div>
            <p className="text-sm md:text-base mb-4 text-gray-600">
              To be the leading educational institution that empowers students with knowledge, skills, and values.
            </p>

            {/* Explore More Button */}
            <div className="text-center md:text-left mt-6 pt-4">
              <button className="px-5 py-2.5 md:px-7 md:py-3 bg-gradient-to-r from-blue-500 to-blue-700 text-white font-semibold rounded-md hover:from-blue-600 hover:to-blue-800 transition-all duration-300 text-sm shadow-lg transform hover:scale-105">
                Explore More
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;