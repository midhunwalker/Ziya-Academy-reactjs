import React, { useState, useEffect, useRef } from 'react';

const CounterItem = ({ value, label }) => {
  const [count, setCount] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const counterRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            setIsVisible(true);
          }
        });
      },
      { threshold: 0.1 }
    );

    if (counterRef.current) {
      observer.observe(counterRef.current);
    }

    return () => {
      if (counterRef.current) {
        observer.unobserve(counterRef.current);
      }
    };
  }, []);

  useEffect(() => {
    if (isVisible) {
      const duration = 1500;
      const increment = Math.ceil(value / (duration / 20));
      
      let current = 0;
      const timer = setInterval(() => {
        current += increment;
        if (current >= value) {
          setCount(value);
          clearInterval(timer);
        } else {
          setCount(current);
        }
      }, 20);

      return () => clearInterval(timer);
    }
  }, [isVisible, value]);

  return (
    <div 
      ref={counterRef}
      className="relative text-center group w-full"
    >
      <h3 
        className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-gray-600 transition-all duration-300 group-hover:scale-125"
      >
        {count}+
      </h3>
      <p className="text-sm md:text-base lg:text-lg text-gray-600 pt-3 md:pt-5">
        {label}
      </p>
    </div>
  );
};

const AnimatedCounterSection = () => {
  const counterData = [
    {
      value: 100,
      label: "Completed Projects"
    },
    {
      value: 500,
      label: "Satisfied Customers"
    },
    {
      value: 10,
      label: "Years of Mastery"
    },
    {
      value: 25,
      label: "Employees"
    }
  ];

  return (
    <div className="w-screen py-12 md:py-16 mb-8 font-poppins">
  <div className="px-0">
    <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12 lg:gap-16">
      {counterData.map((item, index) => (
        <CounterItem 
          key={index}
          value={item.value}
          label={item.label}
        />
      ))}
    </div>
  </div>
</div>

  );
};

export default AnimatedCounterSection;