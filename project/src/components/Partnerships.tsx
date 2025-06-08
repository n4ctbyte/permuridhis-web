import React, { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination } from 'swiper/modules';
import { ExternalLink } from 'lucide-react';
import { partners } from '../data/partners';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

gsap.registerPlugin(ScrollTrigger);

const Partnerships: React.FC = () => {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    gsap.fromTo(section.querySelector('.partnerships-content')?.children || [],
      { opacity: 0, y: 50 },
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

  const categoryColors = {
    university: 'from-blue-500 to-blue-600',
    temple: 'from-orange-500 to-orange-600', 
    organization: 'from-green-500 to-green-600',
    sponsor: 'from-purple-500 to-purple-600'
  };

  const categoryNames = {
    university: 'Universitas',
    temple: 'Vihara',
    organization: 'Organisasi',
    sponsor: 'Sponsor'
  };

  return (
    <section id="partnerships" ref={sectionRef} className="py-20 bg-gray-50 dark:bg-charcoal/30 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="partnerships-content">
          {/* Section header */}
          <div className="text-center mb-16">
            <motion.h2 
              className="text-4xl md:text-5xl font-serif font-bold text-charcoal dark:text-off-white mb-6"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              Mitra & <span className="text-transparent bg-gradient-to-r from-deep-purple to-saffron-yellow bg-clip-text">Kerjasama</span>
            </motion.h2>
            
            <motion.p 
              className="text-lg text-charcoal/70 dark:text-off-white/70 max-w-3xl mx-auto"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
            >
              Berkolaborasi dengan berbagai institusi dan organisasi untuk mengembangkan komunitas Buddha yang lebih kuat
            </motion.p>
          </div>

          {/* Partners carousel */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
          >
            <Swiper
              modules={[Autoplay, Pagination]}
              spaceBetween={30}
              slidesPerView={1}
              autoplay={{
                delay: 3000,
                disableOnInteraction: false,
              }}
              pagination={{
                clickable: true,
                bulletClass: 'swiper-pagination-bullet',
                bulletActiveClass: 'swiper-pagination-bullet-active',
              }}
              breakpoints={{
                640: {
                  slidesPerView: 2,
                },
                768: {
                  slidesPerView: 3,
                },
                1024: {
                  slidesPerView: 4,
                },
              }}
              className="pb-12"
            >
              {partners.map((partner) => (
                <SwiperSlide key={partner.id}>
                  <motion.a
                    href={partner.website}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block group"
                    whileHover={{ y: -10 }}
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    <div className="bg-white dark:bg-charcoal/50 rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-200 dark:border-gray-700 h-full">
                      {/* Partner logo */}
                      <div className="aspect-w-16 aspect-h-10 mb-4 overflow-hidden rounded-xl">
                        <img 
                          src={partner.logo} 
                          alt={partner.name}
                          className="w-full h-32 object-cover group-hover:scale-110 transition-transform duration-300"
                        />
                      </div>

                      {/* Partner info */}
                      <div className="space-y-3">
                        <div className="flex items-start justify-between">
                          <h3 className="font-semibold text-charcoal dark:text-off-white group-hover:text-deep-purple dark:group-hover:text-saffron-yellow transition-colors line-clamp-2">
                            {partner.name}
                          </h3>
                          <ExternalLink size={16} className="text-charcoal/40 dark:text-off-white/40 group-hover:text-deep-purple dark:group-hover:text-saffron-yellow transition-colors flex-shrink-0 ml-2" />
                        </div>

                        <p className="text-sm text-charcoal/60 dark:text-off-white/60 line-clamp-3">
                          {partner.description}
                        </p>

                        {/* Category badge */}
                        <div className="pt-2">
                          <span className={`inline-block px-3 py-1 bg-gradient-to-r ${categoryColors[partner.category]} text-white text-xs font-medium rounded-full`}>
                            {categoryNames[partner.category]}
                          </span>
                        </div>
                      </div>
                    </div>
                  </motion.a>
                </SwiperSlide>
              ))}
            </Swiper>
          </motion.div>

          {/* Call to action */}
          <motion.div
            className="text-center mt-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            viewport={{ once: true }}
          >
            <div className="bg-gradient-to-r from-deep-purple/10 to-saffron-yellow/10 rounded-3xl p-8 border border-deep-purple/20">
              <h3 className="text-2xl font-serif font-bold text-charcoal dark:text-off-white mb-4">
                Ingin Bermitra dengan Kami?
              </h3>
              <p className="text-charcoal/70 dark:text-off-white/70 mb-6 max-w-2xl mx-auto">
                Bergabunglah dengan jaringan mitra Permuridhis untuk mengembangkan komunitas Buddha yang lebih kuat dan memberikan dampak positif bagi masyarakat.
              </p>
              
              <motion.button
                className="px-8 py-4 bg-gradient-to-r from-deep-purple to-saffron-yellow text-white font-semibold rounded-full shadow-lg hover:shadow-xl transition-all duration-300"
                whileHover={{ 
                  scale: 1.05,
                  boxShadow: "0 0 30px rgba(106, 13, 173, 0.4)"
                }}
                whileTap={{ scale: 0.95 }}
                onClick={() => {
                  gsap.to(window, {
                    duration: 1,
                    scrollTo: { y: "#contact", offsetY: 80 },
                    ease: "power2.inOut"
                  });
                }}
              >
                Hubungi Kami
              </motion.button>
            </div>
          </motion.div>
        </div>
      </div>

      <style jsx global>{`
        .swiper-pagination-bullet {
          background: rgba(106, 13, 173, 0.3);
          opacity: 1;
        }
        .swiper-pagination-bullet-active {
          background: linear-gradient(45deg, #6A0DAD, #FFB300);
        }
      `}</style>
    </section>
  );
};

export default Partnerships;