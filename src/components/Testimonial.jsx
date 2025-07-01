import React from "react";
import praveenimage from '../assets/praveen-image.jpeg';
import reshma from '../assets/reshma.jpeg';
import abhishek from '../assets/abhishek.jpeg';

const Testimonial = () => {
  return (
    <section className="py-12 bg-gray-50 font-[Poppins]">
      {/* Title section with reduced left padding */}
      <div className="px-8 text-center sm:text-left sm:pl-[70px]">
        <h2 className="text-3xl sm:text-4xl font-bold text-blue-500 underline">Testimonial</h2>
        <p className="mt-2 sm:mt-4 text-black-600 text-xl sm:text-2xl">What our students say about us</p>
      </div>

      {/* Cards container with increased side padding */}
      <div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-8 px-[5%] md:px-[10%] 2xl:px-[15%]">
        {/* Testimonial Card 1 */}
        <div className="p-6 border-2 border-gray-200 rounded-lg shadow-md hover:border-blue-500 transition-colors duration-300">
          <div className="flex items-start gap-3">
            <img
              src={praveenimage}
              alt="Praveen"
              className="w-16 h-16 rounded-full border-2 border-gray-200 object-cover"
            />
            <div>
              <h3 className="font-bold text-lg">Praveen</h3>
              <p className="text-sm text-gray-500">Web development</p>
            </div>
          </div>
          <p className="mt-4 text-gray-600 text-sm">
            The web development internship gave me real project experience that
            helped me land my first job as a frontend developer.
          </p>
        </div>

        {/* Testimonial Card 2 */}
        <div className="p-6 border-2 border-gray-200 rounded-lg shadow-md hover:border-blue-500 transition-colors duration-300">
          <div className="flex items-start gap-3">
            <img
              src={reshma}
              alt="Reshma"
              className="w-16 h-16 rounded-full border-2 border-gray-200 object-cover"
            />
            <div>
              <h3 className="font-bold text-lg">Reshma</h3>
              <p className="text-sm text-gray-500">NIOS Student</p>
            </div>
          </div>
          <p className="mt-4 text-gray-600 text-sm">
            Ziya Academy helped me complete my NIOS while working. The flexible
            timing and supportive teachers made all the difference.
          </p>
        </div>

        {/* Testimonial Card 3 */}
        <div className="p-6 border-2 border-gray-200 rounded-lg shadow-md hover:border-blue-500 transition-colors duration-300">
          <div className="flex items-start gap-3">
            <img
              src={abhishek}
              alt="Abhishek"
              className="w-16 h-16 rounded-full border-2 border-gray-200 object-cover"
            />
            <div>
              <h3 className="font-bold text-lg">Abhishek</h3>
              <p className="text-sm text-gray-500">UI/UX</p>
            </div>
          </div>
          <p className="mt-4 text-gray-600 text-sm">
            Grateful for the guidance, mentorship, and opportunity to grow as
            a budding UI/UX designer. Excited to apply skills in future projects
            and professional challenges.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Testimonial;