import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';

interface FallingFlowerProps {
  delay?: number;
  duration?: number;
  size?: number;
  opacity?: number;
  startX?: number;
}

const FallingFlower: React.FC<FallingFlowerProps> = ({
  delay = 0,
  duration = 8,
  size = 40,
  opacity = 0.3,
  startX = 50
}) => {
  const flowerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const flower = flowerRef.current;
    if (!flower) return;

    // Set initial position
    gsap.set(flower, {
      x: `${startX}vw`,
      y: '-100px',
      rotation: 0,
      opacity: opacity
    });

    // Create falling animation
    const tl = gsap.timeline({ repeat: -1, delay });

    tl.to(flower, {
      y: '110vh',
      rotation: 360 + Math.random() * 360,
      x: `${startX + (Math.random() - 0.5) * 20}vw`, // Slight horizontal drift
      duration: duration + Math.random() * 4, // Vary duration
      ease: "none"
    })
    .set(flower, {
      y: '-100px',
      x: `${Math.random() * 100}vw`, // Random new starting position
      rotation: 0
    });

    return () => {
      tl.kill();
    };
  }, [delay, duration, size, opacity, startX]);

  return (
    <div
      ref={flowerRef}
      className="fixed pointer-events-none z-0"
      style={{ width: size, height: size }}
    >
      <svg
        width="100%"
        height="100%"
        viewBox="0 0 120 120"
        className="text-lotus-pink filter drop-shadow-sm"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        {/* Lotus petals */}
        <g className="lotus-petals">
          {/* Outer petals */}
          <ellipse cx="60" cy="40" rx="8" ry="20" className="fill-lotus-pink opacity-80" transform="rotate(0 60 60)" />
          <ellipse cx="60" cy="40" rx="8" ry="20" className="fill-lotus-pink opacity-80" transform="rotate(45 60 60)" />
          <ellipse cx="60" cy="40" rx="8" ry="20" className="fill-lotus-pink opacity-80" transform="rotate(90 60 60)" />
          <ellipse cx="60" cy="40" rx="8" ry="20" className="fill-lotus-pink opacity-80" transform="rotate(135 60 60)" />
          <ellipse cx="60" cy="40" rx="8" ry="20" className="fill-lotus-pink opacity-80" transform="rotate(180 60 60)" />
          <ellipse cx="60" cy="40" rx="8" ry="20" className="fill-lotus-pink opacity-80" transform="rotate(225 60 60)" />
          <ellipse cx="60" cy="40" rx="8" ry="20" className="fill-lotus-pink opacity-80" transform="rotate(270 60 60)" />
          <ellipse cx="60" cy="40" rx="8" ry="20" className="fill-lotus-pink opacity-80" transform="rotate(315 60 60)" />
          
          {/* Inner petals */}
          <ellipse cx="60" cy="45" rx="6" ry="15" className="fill-saffron-yellow opacity-90" transform="rotate(22.5 60 60)" />
          <ellipse cx="60" cy="45" rx="6" ry="15" className="fill-saffron-yellow opacity-90" transform="rotate(67.5 60 60)" />
          <ellipse cx="60" cy="45" rx="6" ry="15" className="fill-saffron-yellow opacity-90" transform="rotate(112.5 60 60)" />
          <ellipse cx="60" cy="45" rx="6" ry="15" className="fill-saffron-yellow opacity-90" transform="rotate(157.5 60 60)" />
          <ellipse cx="60" cy="45" rx="6" ry="15" className="fill-saffron-yellow opacity-90" transform="rotate(202.5 60 60)" />
          <ellipse cx="60" cy="45" rx="6" ry="15" className="fill-saffron-yellow opacity-90" transform="rotate(247.5 60 60)" />
          <ellipse cx="60" cy="45" rx="6" ry="15" className="fill-saffron-yellow opacity-90" transform="rotate(292.5 60 60)" />
          <ellipse cx="60" cy="45" rx="6" ry="15" className="fill-saffron-yellow opacity-90" transform="rotate(337.5 60 60)" />
          
          {/* Center */}
          <circle cx="60" cy="60" r="8" className="fill-off-white" />
          <circle cx="60" cy="60" r="4" className="fill-deep-purple" />
        </g>
      </svg>
    </div>
  );
};

export default FallingFlower;