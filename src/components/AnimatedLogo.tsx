import React, { useState, useEffect } from 'react';

const AnimatedLogo: React.FC = () => {
  const colors = [
    'text-purple-400',
    'text-cyan-400',
    'text-pink-400',
    'text-blue-400',
  ];

  const [currentColorIndex, setCurrentColorIndex] = useState(0);
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    if (!isHovered) return;

    const interval = setInterval(() => {
      setCurrentColorIndex((prev) => (prev + 1) % colors.length);
    }, 200); // Change color every 200ms for a nice flash effect

    return () => clearInterval(interval);
  }, [isHovered, colors.length]);

  return (
    <div
      className="flex flex-col items-start cursor-pointer transition-opacity duration-300"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <span
        className={`text-2xl font-bold tracking-tight transition-colors duration-200 ${
          isHovered ? colors[currentColorIndex] : 'text-white'
        }`}
      >
        Brilliants on Bedford
      </span>
      <span
        className={`text-xs font-light tracking-wide uppercase mt-0.5 transition-colors duration-200 ${
          isHovered ? colors[currentColorIndex] : 'text-gray-400'
        }`}
      >
        custom software and web design agency
      </span>
    </div>
  );
};

export default AnimatedLogo;





