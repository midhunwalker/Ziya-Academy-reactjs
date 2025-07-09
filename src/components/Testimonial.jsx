import React from "react";
import praveenimage from '../assets/praveen-image.jpeg';
import reshma from '../assets/reshma.jpeg';
import abhishek from '../assets/abhishek.jpeg';

const Testimonial = () => {
  return (
    <section className="py-8 sm:py-12 bg-gray-50 font-poppins">
      
      <div className="px-4 sm:px-8 text-center">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-blue-500 mb-1">
          What Our Students Say
        </h2>
        <div className="w-12 sm:w-16 h-1 bg-green-500 mx-auto mt-2"></div>
        <p className="mt-2 sm:mt-3 text-gray-600 text-sm sm:text-base md:text-lg">
          Hear from those who've experienced Ziya Academy 
        </p>
      </div>

      {/* Cards container */}
      <div className="mt-8 sm:mt-10 flex flex-wrap justify-center gap-5 sm:gap-6 md:gap-8 px-4 sm:px-[5%] md:px-[10%] 2xl:px-[15%]">
        {[
          {
            image: praveenimage,
            name: "Praveen",
            role: "Web development",
            quote: "The web development internship gave me real project experience that helped me land my first job as a frontend developer."
          },
          {
            image: reshma,
            name: "Reshma",
            role: "NIOS Student",
            quote: "Ziya Academy helped me complete my NIOS while working. The flexible timing and supportive teachers made all the difference."
          },
          {
            image: abhishek,
            name: "Abhishek",
            role: "UI/UX",
            quote: "Grateful for the guidance, mentorship, and opportunity to grow as a budding UI/UX designer. Excited to apply skills in future projects and professional challenges."
          }
        ].map((testimonial, index) => (
          <div 
            key={index}
            className="p-4 border-2 border-gray-200 rounded-md shadow-md hover:border-blue-500 transition-all duration-300 group relative w-full max-w-md sm:w-[calc(50%-20px)] md:w-[calc(33.333%-24px)]"
          >
            <div className="flex items-start gap-3">
              <img
                src={testimonial.image}
                alt={testimonial.name}
                className="w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14 rounded-full border-2 border-gray-200 object-cover"
              />
              <div>
                <h3 className="font-bold text-sm sm:text-base">{testimonial.name}</h3>
                <p className="text-xs text-gray-500">{testimonial.role}</p>
              </div>
            </div>
            <p className="mt-3 text-sm sm:text-base italic text-gray-700 leading-tight sm:leading-normal">
              <span className="text-green-600">“</span>
              {testimonial.quote}
              <span className="text-green-600">”</span>
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Testimonial;