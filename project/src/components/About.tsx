import React, { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Heart, Users, Lightbulb, Globe } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

const About: React.FC = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);

  const values = [
    {
      icon: Heart,
      title: "Karuna (Welas Asih)",
      description: "Mengembangkan sikap welas asih terhadap semua makhluk hidup dan menerapkannya dalam kehidupan sehari-hari."
    },
    {
      icon: Users,
      title: "Sangha (Persaudaraan)",
      description: "Membangun komunitas yang solid berdasarkan nilai-nilai Buddha di lingkungan kampus UNRI."
    },
    {
      icon: Lightbulb,
      title: "Prajna (Kebijaksanaan)",
      description: "Mengembangkan pemahaman dharma dan menerapkan ajaran Buddha dalam kehidupan akademis."
    },
    {
      icon: Globe,
      title: "Dana (Kemurahan Hati)",
      description: "Berkontribusi positif bagi masyarakat melalui berbagai kegiatan sosial dan kemanusiaan."
    }
  ];

  useEffect(() => {
    const section = sectionRef.current;
    const content = contentRef.current;

    if (!section || !content) return;

    gsap.fromTo(content.children,
      { opacity: 0, y: 60 },
      {
        opacity: 1,
        y: 0,
        duration: 0.8,
        stagger: 0.2,
        ease: "power2.out",
        scrollTrigger: {
          trigger: section,
          start: "top 80%",
          end: "bottom 20%",
          toggleActions: "play none none reverse"
        }
      }
    );

  }, []);

  return (
    <section id="about" ref={sectionRef} className="py-20 bg-off-white dark:bg-charcoal transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div ref={contentRef}>
          {/* Section header */}
          <div className="text-center mb-16">
            <motion.h2 
              className="text-4xl md:text-5xl font-serif font-bold text-charcoal dark:text-off-white mb-6"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              Tentang <span className="text-transparent bg-gradient-to-r from-deep-purple to-saffron-yellow bg-clip-text">Permuridhis</span>
            </motion.h2>
            
            <motion.p 
              className="text-lg text-charcoal/70 dark:text-off-white/70 max-w-3xl mx-auto leading-relaxed"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
            >
              Persaudaraan Mahasiswa/i UNRI Buddhis (Permuridhis) adalah organisasi mahasiswa yang berdedikasi 
              untuk mengembangkan spiritualitas Buddha di lingkungan kampus Universitas Riau. Kami berkomitmen 
              untuk menciptakan komunitas yang harmonis berdasarkan nilai-nilai dharma.
            </motion.p>
          </div>

          {/* Mission statement */}
          <motion.div 
            className="bg-gradient-to-r from-deep-purple/10 to-saffron-yellow/10 rounded-3xl p-8 md:p-12 mb-16 border border-deep-purple/20"
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            viewport={{ once: true }}
          >
            <div className="text-center">
              <h3 className="text-2xl md:text-3xl font-serif font-bold text-charcoal dark:text-off-white mb-6">
                Misi Kami
              </h3>
              <p className="text-lg text-charcoal/80 dark:text-off-white/80 leading-relaxed max-w-4xl mx-auto">
                Menyediakan wadah bagi mahasiswa Buddha untuk berkembang secara spiritual, akademis, dan sosial 
                melalui kegiatan dharma, meditasi, bakti sosial, dan pembentukan karakter berdasarkan 
                Tri Ratna (Buddha, Dharma, Sangha).
              </p>
            </div>
          </motion.div>

          {/* Core values grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <motion.div
                key={value.title}
                className="bg-white dark:bg-charcoal/50 rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-200 dark:border-gray-700"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -5 }}
              >
                <div className="flex flex-col items-center text-center">
                  <div className="w-16 h-16 bg-gradient-to-br from-deep-purple to-saffron-yellow rounded-full flex items-center justify-center mb-4">
                    <value.icon size={28} className="text-white" />
                  </div>
                  
                  <h4 className="text-xl font-semibold text-charcoal dark:text-off-white mb-3">
                    {value.title}
                  </h4>
                  
                  <p className="text-charcoal/70 dark:text-off-white/70 leading-relaxed">
                    {value.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Interactive Dharma Wheel */}
          <motion.div 
            className="mt-16 text-center"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.5 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl font-serif font-bold text-charcoal dark:text-off-white mb-8">
              Dharma Chakra - Roda Dharma
            </h3>
            
            <motion.div 
              className="inline-block cursor-pointer"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <svg 
                width="120" 
                height="120" 
                viewBox="0 0 120 120"
                className="text-deep-purple dark:text-saffron-yellow hover:animate-spin-slow transition-all duration-300"
              >
                {/* Outer rim */}
                <circle cx="60" cy="60" r="50" fill="none" stroke="currentColor" strokeWidth="3" />
                
                {/* Spokes (8 Noble Path) */}
                {[...Array(8)].map((_, i) => {
                  const angle = (i * 45) * Math.PI / 180;
                  const x1 = 60 + 20 * Math.cos(angle);
                  const y1 = 60 + 20 * Math.sin(angle);
                  const x2 = 60 + 45 * Math.cos(angle);
                  const y2 = 60 + 45 * Math.sin(angle);
                  
                  return (
                    <line 
                      key={i}
                      x1={x1} 
                      y1={y1} 
                      x2={x2} 
                      y2={y2} 
                      stroke="currentColor" 
                      strokeWidth="2"
                    />
                  );
                })}
                
                {/* Center hub */}
                <circle cx="60" cy="60" r="15" fill="currentColor" opacity="0.8" />
                <circle cx="60" cy="60" r="8" fill="none" stroke="white" strokeWidth="2" />
              </svg>
            </motion.div>
            
            <p className="text-sm text-charcoal/60 dark:text-off-white/60 mt-4 max-w-md mx-auto">
              Dharma Chakra melambangkan Jalan Mulia Berunsur Delapan dalam ajaran Buddha
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;