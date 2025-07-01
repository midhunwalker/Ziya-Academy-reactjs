import React from 'react';
import { FaLaptop, FaChalkboardTeacher, FaSuitcase, FaUniversity } from 'react-icons/fa';

const Services = () => {
  return (
    <section id="services" className="bg-gray-100 pt-6 md:pt-10 pb-10 md:pb-16 mb-6 md:mb-10 font-[Poppins]">
      <div className="mb-6 md:mb-10 text-left px-4 md:pl-[70px] pt-4 md:pt-[50px]">
        <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-blue-500 mb-1 md:mb-2 underline">
          Our Services
        </h2>
        <p className="text-sm md:text-base lg:text-lg text-black-600">
          Quality education for all levels and needs
        </p>
      </div>
      
      <div className="max-w-7xl mx-auto px-2 sm:px-4 md:px-8">
        {/* Service Cards - Responsive layout */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6 justify-center">
          <Card icon={<FaChalkboardTeacher size={24} />} title="School Coaching">
            LKG to +2 with personalized attention and CBSE/State syllabus
          </Card>
          
          <Card icon={<FaUniversity size={24} />} title="NIOS/GNOU">
            Complete support for open schooling and distance education
          </Card>
          
          <Card icon={<FaLaptop size={24} />} title="IT Training">
            Web development, app development, and software courses
          </Card>
          
          <Card icon={<FaSuitcase size={24} />} title="Internships">
            Hands-on experience with real-world projects
          </Card>
        </div>
      </div>
    </section>
  );
};

const Card = ({ icon, title, children }) => (
  <div className="bg-white rounded-lg shadow-md p-4 md:p-6 flex flex-col items-center justify-center aspect-square w-full max-w-xs mx-auto">
    <div className="bg-blue-600 text-white p-3 md:p-4 rounded-full mb-3 md:mb-4">
      {icon}
    </div>
    <h3 className="text-base md:text-lg font-semibold mb-1 md:mb-2 text-center">{title}</h3>
    <p className="text-xs md:text-sm text-gray-600 text-center px-1">
      {children}
    </p>
  </div>
);

export default Services;