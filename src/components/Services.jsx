import React from 'react';
import { FaSchool, FaGraduationCap, FaLaptop, FaBriefcase } from 'react-icons/fa';

const Services = () => {
  return (
    <section id="services" className="bg-gray-100 pt-6 md:pt-10 pb-10 md:pb-16 mb-6 md:mb-10 font-poppins">
      
      <div className="mb-6 md:mb-10 text-center px-4 pt-4 md:pt-[50px]">
        <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-blue-500 mb-1 md:mb-2">
          Our Services
        </h2>
        
        <div className="w-16 h-1 bg-green-500 mx-auto mt-2 md:mt-3"></div>
        <p className="text-sm md:text-base lg:text-base text-gray-600 mt-2">
          Quality education for all levels and needs
        </p>
      </div>
      
      <div className="max-w-7xl mx-auto px-2 sm:px-4 md:px-8">
        {/* Service Cards */}
        <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-8">
          <Card icon={<FaSchool />} title="School Coaching">
            LKG to +2 with personalized attention and CBSE/State syllabus
          </Card>
          
          <Card icon={<FaGraduationCap />} title="NIOS/GNOU">
            Complete support for open schooling and distance education
          </Card>
          
          <Card icon={<FaLaptop />} title="IT Training">
            Web development, app development, and software courses
          </Card>
          
          <Card icon={<FaBriefcase />} title="Internships">
            Hands-on experience with real-world projects
          </Card>
        </div>
      </div>
    </section>
  );
};

// Interactive Card with hover/touch lift effect and smooth transition
const Card = ({ icon, title, children }) => (
  <div 
    className="bg-white rounded-lg shadow-md p-4 flex flex-col items-center justify-center w-full h-full min-h-[200px]"
    style={{
      transform: 'translateY(0)',
      transition: 'transform 0.3s ease, box-shadow 0.3s ease'
    }}
    onMouseEnter={e => {
      e.currentTarget.style.transform = 'translateY(-10px)';
      e.currentTarget.style.boxShadow = '0 12px 20px -5px rgba(0, 0, 0, 0.1)';
    }}
    onMouseLeave={e => {
      e.currentTarget.style.transform = 'translateY(0)';
      e.currentTarget.style.boxShadow = '';
    }}
    onTouchStart={e => {
      e.currentTarget.style.transform = 'translateY(-5px)';
      e.currentTarget.style.boxShadow = '0 8px 15px -3px rgba(0, 0, 0, 0.1)';
    }}
    onTouchEnd={e => {
      setTimeout(() => {
        e.currentTarget.style.transform = 'translateY(0)';
        e.currentTarget.style.boxShadow = '';
      }, 150);
    }}
  >
  
    <div className="text-blue-600 mb-2 md:mb-3 text-3xl md:text-4xl">
      {icon}
    </div>
    <h3 className="text-sm md:text-base font-semibold mb-1 md:mb-2 text-center">
      {title}
    </h3>
    <p className="text-xs text-gray-600 text-center px-1">
      {children}
    </p>
    
    {/* Subtle glow effect on hover */}
    <div className="absolute inset-0 rounded-md opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"
      style={{
        boxShadow: '0 0 20px rgba(59, 130, 246, 0.1)',
        zIndex: -1
      }}
    ></div>
  </div>
);

export default Services;