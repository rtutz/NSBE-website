import React from 'react';

const CircleNumber = ({ number, totalDots, dotsCovered, dotSize }) => {
    // Calculate angle increment for each dot
    const angleIncrement = (2 * Math.PI) / totalDots;

    // Calculate radius of the circle
    const radius = 90;

    // Calculate center coordinates
    const centerX = 150; // Adjust as needed
    const centerY = 150; // Adjust as needed

    // Calculate position of each dot
    const dots = Array.from({ length: totalDots }).map((_, index) => {
    const angle = (-1*angleIncrement * index) + (Math.PI / 2); // Start at 90 degrees
    const x = centerX + radius * Math.cos(angle);
    const y = centerY + radius * Math.sin(angle);
    return { x, y };
    });

    const fontSize =  60;


  return (
    <svg width="300" height="300">
      {dots.map(({ x, y }, index) => (
        <circle
          key={index}
          cx={x}
          cy={y}
          r={dotSize} // Dot radius
          fill={index < dotsCovered && index >= 0 ? '#f2ac7d' : '#878c9c'}
        />
      ))}
      <text x={centerX} y={centerY + (fontSize / 3)} textAnchor="middle" className='text-6xl text-white' fill='#FFFFFF'>
        {number}
      </text>
    </svg>
  );
};

export default CircleNumber;
