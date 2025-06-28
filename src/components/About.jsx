import React from 'react';
import aboutImage1 from '../assets/images.png';
import { Gem } from 'lucide-react';

const AboutUs = () => {
  return (
    <section id="about" className="bg-white py-4 px-4 pt-10 md:px-0">
      <div className="flex flex-col w-full">
        {/* Stats Section */}
        <div className="w-full flex flex-wrap justify-center gap-6 mb-8 px-4 md:px-[50px]">
          <div className="text-center w-40 md:w-64">
            <h3 className="text-4xl md:text-[5rem] font-bold text-gray-600">100+</h3>
            <p className="text-base md:text-xl text-gray-600 pt-5">Completed Projects</p>
          </div>
          <div className="text-center w-40 md:w-64">
            <h3 className="text-4xl md:text-[5rem] font-bold text-gray-600">500+</h3>
            <p className="text-base md:text-xl text-gray-600 pt-5">Satisfied Customers</p>
          </div>
          <div className="text-center w-40 md:w-64">
            <h3 className="text-4xl md:text-[5rem] font-bold text-gray-600">10+</h3>
            <p className="text-base md:text-xl text-gray-600 pt-5">Years of Mastery</p>
          </div>
          <div className="text-center w-40 md:w-64">
            <h3 className="text-4xl md:text-[5rem] font-bold text-gray-600">25+</h3>
            <p className="text-base md:text-xl text-gray-600 pt-5">Employees</p>
          </div>
        </div>

        <div className="flex flex-col md:flex-row items-start gap-8 px-4 md:px-[50px]">
          {/* Image Section */}
          <div className="w-full md:w-[40%]">
            <img
              src={aboutImage1}
              alt="Team working"
              className="w-full h-auto md:h-[700px] object-cover rounded-lg"
            /> 
          </div>

          {/* Text Content */}
          <div className="w-full md:w-[55%] text-start pt-4">
            <h2 className="text-2xl md:text-3xl font-bold text-blue-500 mb-4 underline">About Us</h2>
            <p className="text-base md:text-lg mb-4">
              Ziya Academy is more than just an educational institution, it's a place where potential meets purpose. Our mission is to empower students through personalized education and skill-building, helping them unlock their strengths and achieve their academic and career goals.
            </p>
            <p className="text-base md:text-lg mb-6">
              At Ziya Academy, we believe that quality education lays the foundation for a brighter future. That's why we are committed to delivering high-impact learning experiences through qualified tutors, tailored teaching methods, and a student-first approach.
            </p>

            {/* Mission */}
            <div className="flex items-center mb-2">
              <Gem className="text-green-600 mr-2 w-4 h-4" />
              <h3 className="text-xl md:text-2xl font-bold text-green-600">Our Mission</h3>
            </div>
            <p className="text-base md:text-lg mb-6">
              To provide affordable, quality education through<br /> innovative teaching methods
            </p>

            {/* Vision */}
            <div className="flex items-center mb-2">
              <Gem className="text-blue-500 mr-2 w-4 h-4" />
              <h3 className="text-xl md:text-2xl font-bold text-blue-500">Our Vision</h3>
            </div>
            <p className="text-base md:text-lg mb-6">
              To be the leading educational institution that empowers <br />students with knowledge, skills, and values.
            </p>

            {/* Explore More Button */}
            <div className="text-left mt-4">
              <button className="px-6 py-2 bg-blue-500 text-white font-semibold rounded-md hover:bg-blue-700 transition duration-300 text-sm">
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
