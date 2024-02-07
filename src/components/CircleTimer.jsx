// eslint-disable-next-line react/prop-types
const CircleNumber = ({ number, totalDots, dotsCovered, dotSize, units }) => {
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
      <div className="flex flex-col justify-center items-center">
        <svg width="100%" height="100%" viewBox="0 0 300 300">
        {dots.map(({ x, y }, index) => (
          <circle
            key={index}
            cx={x}
            cy={y}
            r={dotSize} // Dot radius
            fill={index < dotsCovered && index >= 0 ? '#f26b35' : '#878c9c'}
          />
        ))}
        <text x={centerX} y={centerY + (fontSize / 3)} textAnchor="middle" className='text-6xl font-black' fill='#FFFFFF'>
          {number}
        </text>
      </svg>
      <h3 className="text-lg">{units}</h3>
      </div>
    );
};

export default CircleNumber;
