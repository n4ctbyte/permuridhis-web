import React, { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import FallingFlower from './FallingFlower';

gsap.registerPlugin(ScrollTrigger);

const Hero: React.FC = () => {
  const heroRef = useRef<HTMLDivElement>(null);
  const bgRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const hero = heroRef.current;
    const bg = bgRef.current;
    const content = contentRef.current;

    if (!hero || !bg || !content) return;

    // Parallax effect for background
    gsap.to(bg, {
      yPercent: -50,
      ease: "none",
      scrollTrigger: {
        trigger: hero,
        start: "top bottom",
        end: "bottom top",
        scrub: true
      }
    });

    // Content animation on scroll
    gsap.fromTo(content, 
      { y: 0, opacity: 1 },
      {
        y: -100,
        opacity: 0.5,
        ease: "none",
        scrollTrigger: {
          trigger: hero,
          start: "center top",
          end: "bottom top",
          scrub: true
        }
      }
    );

  }, []);

  // Generate random configurations for falling flowers
  const flowerConfigs = Array.from({ length: 15 }, (_, i) => ({
    id: i,
    delay: Math.random() * 10, // Random delay between 0-10 seconds
    duration: 8 + Math.random() * 6, // Duration between 8-14 seconds
    size: 30 + Math.random() * 40, // Size between 30-70px
    opacity: 0.2 + Math.random() * 0.4, // Opacity between 0.2-0.6
    startX: Math.random() * 100 // Random starting X position
  }));

  return (
    <section id="hero" ref={heroRef} className="relative min-h-screen flex items-center justify-center overflow-hidden" style={{ minHeight: '120vh' }}>
      {/* Falling flowers */}
      {flowerConfigs.map((config) => (
        <FallingFlower
          key={config.id}
          delay={config.delay}
          duration={config.duration}
          size={config.size}
          opacity={config.opacity}
          startX={config.startX}
        />
      ))}

      {/* Background with parallax */}
      <div 
        ref={bgRef}
        className="absolute inset-0 bg-gradient-to-br from-deep-purple via-purple-700 to-saffron-yellow"
      >
        <div className="absolute inset-0 bg-black/20" />
        
        {/* Background pattern */}
        <div className="absolute inset-0 opacity-10">
          <svg className="w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
            <defs>
              <pattern id="lotus-pattern" x="0" y="0" width="20" height="20" patternUnits="userSpaceOnUse">
                <circle cx="10" cy="10" r="2" fill="currentColor" className="text-lotus-pink" />
              </pattern>
            </defs>
            <rect width="100" height="100" fill="url(#lotus-pattern)" />
          </svg>
        </div>
      </div>

      {/* Main content */}
      <div ref={contentRef} className="relative z-10 text-center px-4 max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.5 }}
        >
          <h1 className="text-5xl md:text-7xl font-serif font-bold text-off-white mb-6">
            <span className="bg-gradient-to-r from-lotus-pink to-saffron-yellow bg-clip-text text-transparent">
              Permuridhis
            </span>
          </h1>
          
          <motion.p 
            className="text-xl md:text-2xl text-off-white/90 mb-8 font-light"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 1 }}
          >
            Persaudaraan Mahasiswa/i UNRI Buddhis
          </motion.p>

          <motion.div 
            className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 mb-8 border border-white/20"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 1.2 }}
          >
            <p className="text-lg md:text-xl text-off-white/80 italic font-serif leading-relaxed">
              "Kebahagian tidak tergantung pada apa yang Anda miliki atau siapa Anda. 
              <br />
              Itu hanya tergantung pada apa yang Anda pikirkan."
            </p>
            <p className="text-lotus-pink mt-4 font-medium">— Buddha</p>
          </motion.div>

          <motion.div 
            className="flex flex-col sm:flex-row gap-4 justify-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 1.5 }}
          >
            <motion.button 
              className="px-8 py-4 bg-gradient-to-r from-saffron-yellow to-yellow-400 text-charcoal font-semibold rounded-full shadow-lg hover:shadow-xl transition-all duration-300"
              whileHover={{ scale: 1.05, boxShadow: "0 0 30px rgba(255, 179, 0, 0.5)" }}
              whileTap={{ scale: 0.95 }}
              onClick={() => {
                gsap.to(window, {
                  duration: 1,
                  scrollTo: { y: "#about", offsetY: 80 },
                  ease: "power2.inOut"
                });
              }}
            >
              Pelajari Lebih Lanjut
            </motion.button>
            
            <motion.button 
              className="px-8 py-4 border-2 border-lotus-pink text-lotus-pink font-semibold rounded-full hover:bg-lotus-pink hover:text-white transition-all duration-300"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => {
                gsap.to(window, {
                  duration: 1,
                  scrollTo: { y: "#contact", offsetY: 80 },
                  ease: "power2.inOut"
                });
              }}
            >
              Bergabung dengan Kami
            </motion.button>
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div 
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        <div className="w-6 h-10 border-2 border-lotus-pink rounded-full flex justify-center">
          <div className="w-1 h-3 bg-lotus-pink rounded-full mt-2 animate-pulse"></div>
        </div>
      </motion.div>
    </section>
  );
};

export default Hero;