import React from 'react';
import { Play } from 'lucide-react';
import heroimg from '../assets/heroimg.jpeg';

const Hero = () => {
  return (
    <section
      id="home"
      className="flex h-screen w-screen overflow-hidden font-[Poppins]"
      style={{ backgroundColor: '#0f3441' }}
    >
      {/* Right side: Image section - Full screen on mobile */}
      <div
        className="h-full w-full bg-cover bg-center bg-no-repeat relative"
        style={{
          backgroundImage: `url(${heroimg})`,
        }}
      >
        {/* Darker blue gradient overlay - Full screen */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#0f3240]/90 to-transparent pointer-events-none"></div>

        {/* Hero Content - Mobile responsive */}
        <div className="relative z-10 h-full flex flex-col justify-center pt-10 px-4 md:px-[70px]">
          <div className="max-w-4xl space-y-4 md:space-y-8">
            {/* Headline & Description */}
            <div className="space-y-2 md:space-y-4">
              <h1 className="text-2xl sm:text-3xl md:text-7xl font-bold leading-tight text-white">
                Unlock Your Potential
                <span className="block text-white text-xl sm:text-2xl md:text-7xl mt-1 md:mt-0">
                  With Ziya Academy
                </span>
              </h1>
              <p className="text-sm sm:text-base md:text-lg text-gray-300 leading-relaxed max-w-md">
                From school education to professional IT training — your complete learning solution.
              </p>
            </div>

            {/* Buttons - Stacked vertically on mobile */}
            <div className="flex flex-col sm:flex-row justify-start items-start gap-3 mt-4 pt-3 md:mt-6 md:pt-5">
              {/* Free Consultation */}
              <button className="btn-secondary flex items-center gap-2 border border-gray-400 px-4 py-2 text-xs sm:text-sm h-10 w-full max-w-[180px] sm:w-44">
                <span className="leading-none">Free Consultation</span>
                <span className="h-4 w-4 border border-gray-400 bg-transparent rounded-full flex items-center justify-center transition-transform">
                  <Play className="h-2 w-2" />
                </span>
              </button>

              {/* Explore Courses */}
              <button className="btn-primary flex items-center gap-2 px-4 py-2 text-xs sm:text-sm h-10 w-full max-w-[180px] sm:w-44">
                <span className="leading-none">Explore Courses</span>
                <span className="h-4 w-4 bg-white text-gray-900 rounded-full flex items-center justify-center transition-transform">
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