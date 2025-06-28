import React from 'react';
import { FaLaptop, FaChalkboardTeacher, FaSuitcase, FaUniversity } from 'react-icons/fa';

const Services = () => {
  return (
    <section id="services" className="bg-gray-100 px-4 pt-10 pb-16">
      <div className="max-w-7xl mx-auto">
        {/* Heading and subtitle */}
        <div className="pl-2 sm:pl-4 mb-10">
          <h2 className="text-3xl sm:text-4xl font-bold text-blue-500 mb-2 underline">Our Services</h2>
          <p className="text-base sm:text-lg text-black-600">Quality education for all levels and needs</p>
        </div>

        {/* Service Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 px-2 sm:px-6">
          {/* Card 1 */}
          <div className="bg-white p-6 sm:p-8 rounded-lg shadow-md text-center">
            <div className="bg-blue-600 text-white p-4 rounded-full mb-4 inline-block">
              <FaChalkboardTeacher size={30} />
            </div>
            <h3 className="text-lg font-semibold mb-2">School Coaching</h3>
            <p className="text-sm text-gray-600">LKG to +2 with personalized attention and CBSE/State syllabus</p>
          </div>

          {/* Card 2 */}
          <div className="bg-white p-6 sm:p-8 rounded-lg shadow-md text-center">
            <div className="bg-blue-600 text-white p-4 rounded-full mb-4 inline-block">
              <FaUniversity size={30} />
            </div>
            <h3 className="text-lg font-semibold mb-2">NIOS/GNOU</h3>
            <p className="text-sm text-gray-600">Complete support for open schooling and distance education</p>
          </div>

          {/* Card 3 */}
          <div className="bg-white p-6 sm:p-8 rounded-lg shadow-md text-center">
            <div className="bg-blue-600 text-white p-4 rounded-full mb-4 inline-block">
              <FaLaptop size={30} />
            </div>
            <h3 className="text-lg font-semibold mb-2">IT Training</h3>
            <p className="text-sm text-gray-600">Web development, app development, and software courses</p>
          </div>

          {/* Card 4 */}
          <div className="bg-white p-6 sm:p-8 rounded-lg shadow-md text-center">
            <div className="bg-blue-600 text-white p-4 rounded-full mb-4 inline-block">
              <FaSuitcase size={30} />
            </div>
            <h3 className="text-lg font-semibold mb-2">Internships</h3>
            <p className="text-sm text-gray-600">Hands-on experience with real-world projects</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
