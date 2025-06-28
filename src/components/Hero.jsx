import React from 'react';
import { Play } from 'lucide-react';
import heroimg from '../assets/heroimg3.png';

const Hero = () => {
  return (
    <section
      id="home"
      className="flex h-screen w-screen overflow-hidden"
      style={{ backgroundColor: '#0f3441' }}
    >
      {/* Left side gradient background */}
      <div className="flex-1 bg-gradient-to-r from-[#0f3240]/90 to-transparent"></div>

      {/* Right side: Image section */}
      <div
        className="h-full w-full bg-cover bg-center bg-no-repeat relative"
        style={{
          backgroundImage: `url(${heroimg})`,
        }}
      >
        {/* Darker blue gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#0f3240]/90 to-transparent pointer-events-none"></div>

        {/* Hero Content */}
        <div className="relative z-10 h-full flex flex-col justify-center pt-24 px-6 sm:px-12 lg:px-10">
          <div className="max-w-4xl space-y-8">
            {/* Headline & Description */}
            <div className="space-y-4">
              <h1 className="text-4xl sm:text-5xl md:text-7xl font-bold leading-tight text-white">
                Unlock Your Potential
                <span className="block text-white">With Ziya Academy</span>
              </h1>
              <p className="text-base sm:text-lg text-gray-300 leading-relaxed">
                From school education to professional IT training — your complete learning solution.
              </p>
            </div>

            {/* Buttons */}
            <div className="flex flex-col sm:flex-row justify-start items-center gap-4 mt-6 pt-5 pr-4">
              {/* Free Consultation */}
              <button className="btn-secondary flex items-center gap-2 border border-white px-4 py-2 text-sm h-11 w-44 sm:w-50">
                <span className="leading-none text-sm">Free Consultation</span>
                <span className="h-5 w-5 border border-white text-white bg-transparent rounded-full flex items-center justify-center transition-transform group-hover:translate-x-1">
                  <Play className="h-2 w-2" />
                </span>
              </button>

              {/* Explore Courses */}
              <button className="btn-primary flex items-center gap-2 px-4 py-2 text-sm h-11 w-44 sm:w-50">
                <span className="leading-none">Explore Courses</span>
                <span className="h-5 w-5 bg-white text-gray-900 rounded-full flex items-center justify-center transition-transform group-hover:translate-x-1">
                  <Play className="h-2 w-2" />
                </span>
              </button>
            </div>
          </div>
        </div>
      </div>

     
    </section>
  );
};

export default Hero;
