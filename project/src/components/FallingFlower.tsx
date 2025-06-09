import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';

const FallingLotusFlowers: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const createLotusFlower = () => {
      const flower = document.createElement('div');
      flower.className = 'absolute pointer-events-none';
      flower.innerHTML = `
        <svg width="20" height="20" viewBox="0 0 24 24" class="text-lotus-pink opacity-20">
          <!-- Lotus petals -->
          <g class="lotus-petals">
            <!-- Outer petals -->
            <ellipse cx="12" cy="8" rx="2" ry="5" fill="currentColor" opacity="0.6" transform="rotate(0 12 12)" />
            <ellipse cx="12" cy="8" rx="2" ry="5" fill="currentColor" opacity="0.6" transform="rotate(45 12 12)" />
            <ellipse cx="12" cy="8" rx="2" ry="5" fill="currentColor" opacity="0.6" transform="rotate(90 12 12)" />
            <ellipse cx="12" cy="8" rx="2" ry="5" fill="currentColor" opacity="0.6" transform="rotate(135 12 12)" />
            <ellipse cx="12" cy="8" rx="2" ry="5" fill="currentColor" opacity="0.6" transform="rotate(180 12 12)" />
            <ellipse cx="12" cy="8" rx="2" ry="5" fill="currentColor" opacity="0.6" transform="rotate(225 12 12)" />
            <ellipse cx="12" cy="8" rx="2" ry="5" fill="currentColor" opacity="0.6" transform="rotate(270 12 12)" />
            <ellipse cx="12" cy="8" rx="2" ry="5" fill="currentColor" opacity="0.6" transform="rotate(315 12 12)" />
            
            <!-- Inner petals -->
            <ellipse cx="12" cy="9" rx="1.5" ry="3.5" fill="currentColor" opacity="0.7" transform="rotate(22.5 12 12)" />
            <ellipse cx="12" cy="9" rx="1.5" ry="3.5" fill="currentColor" opacity="0.7" transform="rotate(67.5 12 12)" />
            <ellipse cx="12" cy="9" rx="1.5" ry="3.5" fill="currentColor" opacity="0.7" transform="rotate(112.5 12 12)" />
            <ellipse cx="12" cy="9" rx="1.5" ry="3.5" fill="currentColor" opacity="0.7" transform="rotate(157.5 12 12)" />
            <ellipse cx="12" cy="9" rx="1.5" ry="3.5" fill="currentColor" opacity="0.7" transform="rotate(202.5 12 12)" />
            <ellipse cx="12" cy="9" rx="1.5" ry="3.5" fill="currentColor" opacity="0.7" transform="rotate(247.5 12 12)" />
            <ellipse cx="12" cy="9" rx="1.5" ry="3.5" fill="currentColor" opacity="0.7" transform="rotate(292.5 12 12)" />
            <ellipse cx="12" cy="9" rx="1.5" ry="3.5" fill="currentColor" opacity="0.7" transform="rotate(337.5 12 12)" />
            
            <!-- Center -->
            <circle cx="12" cy="12" r="2" fill="currentColor" opacity="0.5" />
            <circle cx="12" cy="12" r="1" fill="#FFB300" opacity="0.6" />
          </g>
        </svg>
      `;

      // Random starting position
      const startX = Math.random() * window.innerWidth;
      const startY = -50;
      
      // Random end position
      const endX = startX + (Math.random() - 0.5) * 150;
      const endY = window.innerHeight + 50;
      
      // Random rotation and scale
      const rotation = Math.random() * 360;
      const scale = 0.4 + Math.random() * 0.6; // Smaller scale
      const duration = 12 + Math.random() * 8; // Slower falling

      gsap.set(flower, {
        x: startX,
        y: startY,
        rotation: rotation,
        scale: scale
      });

      container.appendChild(flower);

      // Animate falling
      gsap.to(flower, {
        x: endX,
        y: endY,
        rotation: rotation + 120 + Math.random() * 120,
        duration: duration,
        ease: "none",
        onComplete: () => {
          if (flower.parentNode) {
            flower.parentNode.removeChild(flower);
          }
        }
      });

      // Gentle swaying motion
      gsap.to(flower, {
        x: `+=${(Math.random() - 0.5) * 80}`,
        duration: duration / 2,
        ease: "power1.inOut",
        yoyo: true,
        repeat: 1
      });
    };

    // Create flowers less frequently
    const interval = setInterval(createLotusFlower, 5000); // Every 5 seconds instead of 2

    // Create only 1 initial flower
    createLotusFlower();

    return () => {
      clearInterval(interval);
    };
  }, []);

  return (
    <div 
      ref={containerRef}
      className="fixed inset-0 pointer-events-none overflow-hidden"
      style={{ zIndex: 1 }} // Very low z-index to be behind everything
    />
  );
};

export default FallingLotusFlowers;