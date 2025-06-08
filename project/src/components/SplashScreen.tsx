import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';

interface SplashScreenProps {
  onComplete: () => void;
}

const SplashScreen: React.FC<SplashScreenProps> = ({ onComplete }) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const lotusRef = useRef<SVGSVGElement>(null);
  const textRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = containerRef.current;
    const lotus = lotusRef.current;
    const text = textRef.current;

    if (!container || !lotus || !text) return;

    // Initial setup
    gsap.set([lotus, text], { opacity: 0 });

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

    // Fade in and rotate lotus
    tl.to(lotus, {
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
    // Continue rotating lotus
    .to(lotus, {
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
        {/* Lotus SVG */}
        <svg
          ref={lotusRef}
          width="120"
          height="120"
          viewBox="0 0 120 120"
          className="mb-8 mx-auto filter drop-shadow-lg"
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