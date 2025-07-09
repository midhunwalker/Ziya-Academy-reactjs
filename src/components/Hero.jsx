import React from 'react';
import { Play } from 'lucide-react';
import heroimg from '../assets/heroimg.jpeg';

const Hero = () => {
  return (
    <section
      id="home"
      className="relative min-h-screen w-full overflow-hidden ffont-poppins"
      style={{ backgroundColor: '#0f3441' }}
    >
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroimg})` }}
      >
        {/* Darker blue gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#0f3240]/90 to-transparent"></div>
      </div>

      {/* Hero Content*/}
      <div className="relative z-10 container mx-auto px-4 h-full flex items-start pt-[30vh] sm:pt-[35vh] md:pt-[40vh]">
        <div className="max-w-4xl w-full space-y-4 md:space-y-8">
          {/* Headline & Description */}
          <div className="space-y-2 md:space-y-4">
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold leading-tight text-white">
              Unlock Your Potential
              <span className="block text-xl sm:text-2xl md:text-4xl lg:text-5xl xl:text-7xl mt-1 md:mt-2">
                With Ziya Academy
              </span>
            </h1>
            <p className="text-sm sm:text-base md:text-lg lg:text-xl text-gray-300 leading-relaxed max-w-md">
              From school education to professional IT training — your complete learning solution.
            </p>
          </div>

          
          <div className="flex flex-col sm:flex-row justify-start items-start gap-3 mt-4 md:mt-6">
            {/* Free Consultation */}
            <button className="btn-secondary flex items-center justify-center gap-2 border border-blue-600 px-4 py-2.5 text-xs sm:text-sm md:text-base w-1/2 sm:w-[200px]">
              <span className="leading-none">Free Consultation</span>
              <span className="h-4 w-4 bg-white text-gray-900 rounded-full flex items-center justify-center">
                <Play className="h-2 w-2" />
              </span>
            </button>

            {/* Explore Courses */}
            <button className="btn-primary flex items-center justify-center gap-2 border border-transparent px-4 py-2.5 text-xs sm:text-sm md:text-base w-1/2 sm:w-[200px]">
              <span className="leading-none">Explore Courses</span>
              <span className="h-4 w-4 bg-white text-gray-900 rounded-full flex items-center justify-center">
                <Play className="h-2 w-2" />
              </span>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;