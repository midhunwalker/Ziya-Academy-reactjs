import React from 'react';
import aboutImage1 from '../assets/images.png';
import { Gem } from 'lucide-react';

const AboutUs = () => {
  return (
    <section id="about" className="bg-white py-4 pt-10 px-4 md:pr-4"> 
      <div className="flex flex-col w-full">
        {/* Stats Section - Mobile responsive */}
        <div className="w-full grid grid-cols-2 md:flex md:flex-wrap gap-6 md:gap-[270px] mb-8 md:pr-4 md:pl-[30px] pt-[30px] pb-[30px] font-[Poppins]">
          <div className="text-center min-w-[160px] max-w-[250px] mx-auto">
            <h3 className="text-3xl md:text-[5rem] font-bold text-gray-600">100+</h3>
            <p className="text-sm md:text-xl text-gray-600 pt-2 md:pt-5">Completed Projects</p>
          </div>
          <div className="text-center min-w-[160px] max-w-[250px] mx-auto">
            <h3 className="text-3xl md:text-[5rem] font-bold text-gray-600">500+</h3>
            <p className="text-sm md:text-xl text-gray-600 pt-2 md:pt-5">Satisfied Customers</p>
          </div>
          <div className="text-center min-w-[160px] max-w-[250px] mx-auto mt-6 md:mt-0">
            <h3 className="text-3xl md:text-[5rem] font-bold text-gray-600">10+</h3>
            <p className="text-sm md:text-xl text-gray-600 pt-2 md:pt-5">Years of Mastery</p>
          </div>
          <div className="text-center min-w-[160px] max-w-[250px] mx-auto mt-6 md:mt-0">
            <h3 className="text-3xl md:text-[5rem] font-bold text-gray-600">25+</h3>
            <p className="text-sm md:text-xl text-gray-600 pt-2 md:pt-5">Employees</p>
          </div>
        </div>

        {/* Content Section - Mobile responsive */}
        <div className="flex flex-col md:flex-row items-start gap-8 px-4 md:pl-[50px] md:pr-4">  
          {/* Image Section */}
          <div className="w-full md:w-[40%]">
            <img
              src={aboutImage1}
              alt="Team working"
              className="w-full h-auto max-h-[400px] md:h-[700px] object-cover rounded-lg"
            /> 
          </div>

          {/* Text Content */}
          <div className="w-full md:w-[55%] text-start pt-0 md:pt-4 font-[Poppins]">
            <h2 className="text-xl md:text-3xl font-bold text-blue-500 mb-3 md:mb-4 underline">About Us</h2>
            <p className="text-sm md:text-lg mb-3 md:mb-4">
              Ziya Academy is more than just an educational institution, it's a place where potential meets purpose. Our mission is to empower students through personalized education and skill-building.
            </p>
            <p className="text-sm md:text-lg mb-4 md:mb-6">
              At Ziya Academy, we believe that quality education lays the foundation for a brighter future. That's why we are committed to delivering high-impact learning experiences.
            </p>

            {/* Mission */}
            <div className="flex items-center mb-2">
              <Gem className="text-green-600 mr-2 w-4 h-4" />
              <h3 className="text-lg md:text-2xl font-bold text-green-600">Our Mission</h3>
            </div>
            <p className="text-sm md:text-lg mb-4 md:mb-6">
              To provide affordable, quality education through innovative teaching methods
            </p>

            {/* Vision */}
            <div className="flex items-center mb-2">
              <Gem className="text-blue-500 mr-2 w-4 h-4" />
              <h3 className="text-lg md:text-2xl font-bold text-blue-500">Our Vision</h3>
            </div>
            <p className="text-sm md:text-lg mb-4 md:mb-6">
              To be the leading educational institution that empowers students with knowledge, skills, and values.
            </p>

            {/* Explore More Button */}
            <div className="text-left mt-4 md:mt-6">
              <button className="px-6 py-3 md:px-8 md:py-4 bg-blue-500 text-white font-semibold rounded-md hover:bg-blue-700 transition duration-300 text-xs md:text-sm">
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