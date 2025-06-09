import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';

interface SplashScreenProps {
  onComplete: () => void;
}

const SplashScreen: React.FC<SplashScreenProps> = ({ onComplete }) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const dharmaWheelRef = useRef<SVGSVGElement>(null);
  const textRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = containerRef.current;
    const dharmaWheel = dharmaWheelRef.current;
    const text = textRef.current;

    if (!container || !dharmaWheel || !text) return;

    // Initial setup
    gsap.set([dharmaWheel, text], { opacity: 0 });

    // Animation timeline
    const tl = gsap.timeline({
      onComplete: () => {
        setTimeout(() => {
          gsap.to(container, {
            opacity: 0,
            duration: 0.8,
            ease: "power2.inOut",
            onComplete: onComplete
          });
        }, 1000);
      }
    });

    // Fade in and rotate dharma wheel
    tl.to(dharmaWheel, {
      opacity: 1,
      rotation: 360,
      duration: 2,
      ease: "power2.out"
    })
    // Fade in text
    .to(text, {
      opacity: 1,
      y: 0,
      duration: 1,
      ease: "power2.out"
    }, "-=1")
    // Continue rotating dharma wheel
    .to(dharmaWheel, {
      rotation: 720,
      duration: 2,
      ease: "none"
    }, "-=0.5");

  }, [onComplete]);

  return (
    <div 
      ref={containerRef}
      className="fixed inset-0 z-50 flex items-center justify-center bg-gradient-to-br from-deep-purple via-purple-700 to-saffron-yellow"
    >
      {/* Animated background particles */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-lotus-pink rounded-full animate-pulse"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 3}s`,
            }}
          />
        ))}
      </div>

      <div className="text-center">
        {/* Authentic Dharma Wheel SVG */}
        <svg
          ref={dharmaWheelRef}
          width="140"
          height="140"
          viewBox="0 0 140 140"
          className="mb-8 mx-auto filter drop-shadow-lg"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          {/* Outer rim */}
          <circle 
            cx="70" 
            cy="70" 
            r="65" 
            fill="none" 
            stroke="#EAC5C5" 
            strokeWidth="4"
            className="opacity-90"
          />
          <circle 
            cx="70" 
            cy="70" 
            r="58" 
            fill="none" 
            stroke="#FFB300" 
            strokeWidth="2"
            className="opacity-70"
          />
          
          {/* Eight spokes (Noble Eightfold Path) */}
          {[...Array(8)].map((_, i) => {
            const angle = (i * 45) * Math.PI / 180;
            const innerRadius = 25;
            const outerRadius = 55;
            const x1 = 70 + innerRadius * Math.cos(angle);
            const y1 = 70 + innerRadius * Math.sin(angle);
            const x2 = 70 + outerRadius * Math.cos(angle);
            const y2 = 70 + outerRadius * Math.sin(angle);
            
            return (
              <g key={i}>
                {/* Main spoke */}
                <line 
                  x1={x1} 
                  y1={y1} 
                  x2={x2} 
                  y2={y2} 
                  stroke="#F7F4EF" 
                  strokeWidth="3"
                  className="opacity-90"
                />
                {/* Spoke decoration */}
                <circle
                  cx={x2}
                  cy={y2}
                  r="3"
                  fill="#EAC5C5"
                  className="opacity-80"
                />
              </g>
            );
          })}
          
          {/* Hub (center) */}
          <circle 
            cx="70" 
            cy="70" 
            r="20" 
            fill="#6A0DAD" 
            className="opacity-90"
          />
          <circle 
            cx="70" 
            cy="70" 
            r="15" 
            fill="none" 
            stroke="#FFB300" 
            strokeWidth="2"
          />
          <circle 
            cx="70" 
            cy="70" 
            r="8" 
            fill="#F7F4EF"
          />
          
          {/* Three jewels symbol in center */}
          <g transform="translate(70, 70)">
            <circle cx="0" cy="-3" r="2" fill="#6A0DAD" />
            <circle cx="-2.5" cy="2" r="2" fill="#6A0DAD" />
            <circle cx="2.5" cy="2" r="2" fill="#6A0DAD" />
          </g>
          
          {/* Decorative elements between spokes */}
          {[...Array(8)].map((_, i) => {
            const angle = ((i * 45) + 22.5) * Math.PI / 180;
            const radius = 40;
            const x = 70 + radius * Math.cos(angle);
            const y = 70 + radius * Math.sin(angle);
            
            return (
              <circle
                key={`decoration-${i}`}
                cx={x}
                cy={y}
                r="2"
                fill="#EAC5C5"
                className="opacity-60"
              />
            );
          })}
        </svg>

        {/* Loading text */}
        <div ref={textRef} className="text-off-white">
          <h1 className="text-3xl font-serif font-bold mb-2">Permuridhis</h1>
          <p className="text-lg opacity-80">Persaudaraan Mahasiswa/i UNRI Buddhis</p>
          <div className="flex items-center justify-center mt-4">
            <div className="w-2 h-2 bg-lotus-pink rounded-full animate-pulse mr-2"></div>
            <div className="w-2 h-2 bg-lotus-pink rounded-full animate-pulse delay-150 mr-2"></div>
            <div className="w-2 h-2 bg-lotus-pink rounded-full animate-pulse delay-300"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SplashScreen;