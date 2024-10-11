import { useState, useRef } from 'react';

const SpotlightImage = ({ src, alt }) => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const spotlightRef = useRef(null);

  const handleMouseMove = (e) => {
    const rect = e.target.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    setPosition({ x, y });
    spotlightRef.current.style.background = `radial-gradient(circle at ${x}px ${y}px, rgba(255, 255, 255, 0.6) 0%, rgba(255, 255, 255, 0) 20%)`;
  };

  return (
    <div className="image-container" onMouseMove={handleMouseMove}>
      <img src="/public/assets/grid2.png" alt={alt} />
      <div className="spotlight" ref={spotlightRef}></div>
    </div>
  );
};

export default SpotlightImage;
