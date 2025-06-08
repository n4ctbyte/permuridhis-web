import React, { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Calendar, Clock, MapPin, Users } from 'lucide-react';
import { upcomingEvents } from '../data/events';

gsap.registerPlugin(ScrollTrigger);

const Events: React.FC = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const eventsRef = useRef<HTMLDivElement>(null);

  const categoryIcons = {
    dharma: Users,
    retreat: Calendar,
    social: Users,
    ceremony: Calendar
  };

  const categoryColors = {
    dharma: 'from-blue-500 to-blue-600',
    retreat: 'from-green-500 to-green-600',
    social: 'from-orange-500 to-orange-600',
    ceremony: 'from-purple-500 to-purple-600'
  };

  useEffect(() => {
    const section = sectionRef.current;
    const events = eventsRef.current;

    if (!section || !events) return;

    gsap.fromTo(events.children,
      { opacity: 0, y: 50, x: -30 },
      {
        opacity: 1,
        y: 0,
        x: 0,
        duration: 0.8,
        stagger: 0.2,
        ease: "power2.out",
        scrollTrigger: {
          trigger: section,
          start: "top 70%",
          end: "bottom 30%",
          toggleActions: "play none none reverse"
        }
      }
    );

  }, []);

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('id-ID', {
      weekday: 'long',
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  };

  return (
    <section id="events" ref={sectionRef} className="py-20 bg-off-white dark:bg-charcoal transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <div className="text-center mb-16">
          <motion.h2 
            className="text-4xl md:text-5xl font-serif font-bold text-charcoal dark:text-off-white mb-6"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            Kegiatan <span className="text-transparent bg-gradient-to-r from-deep-purple to-saffron-yellow bg-clip-text">Mendatang</span>
          </motion.h2>
          
          <motion.p 
            className="text-lg text-charcoal/70 dark:text-off-white/70 max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            Ikuti berbagai kegiatan dharma, retreat, dan bakti sosial yang kami selenggarakan
          </motion.p>
        </div>

        {/* Events timeline */}
        <div ref={eventsRef} className="relative">
          {/* Timeline line */}
          <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-deep-purple via-saffron-yellow to-lotus-pink md:transform md:-translate-x-1/2"></div>

          <div className="space-y-12">
            {upcomingEvents.map((event, index) => {
              const IconComponent = categoryIcons[event.category];
              const isEven = index % 2 === 0;
              
              return (
                <motion.div
                  key={event.id}
                  className={`relative flex items-center ${
                    isEven ? 'md:flex-row' : 'md:flex-row-reverse'
                  }`}
                  whileHover={{ scale: 1.02 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  {/* Timeline dot */}
                  <div className="absolute left-4 md:left-1/2 w-4 h-4 bg-gradient-to-r from-deep-purple to-saffron-yellow rounded-full md:transform md:-translate-x-1/2 z-10 shadow-lg">
                    <div className="absolute inset-0 bg-gradient-to-r from-deep-purple to-saffron-yellow rounded-full animate-ping opacity-30"></div>
                  </div>

                  {/* Event card */}
                  <div className={`ml-12 md:ml-0 flex-1 max-w-lg ${
                    isEven ? 'md:mr-8' : 'md:ml-8'
                  }`}>
                    <div className="bg-white dark:bg-charcoal/50 rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-200 dark:border-gray-700">
                      {/* Event image */}
                      <div className="aspect-w-16 aspect-h-9 mb-4 overflow-hidden rounded-xl">
                        <img 
                          src={event.image} 
                          alt={event.title}
                          className="w-full h-48 object-cover hover:scale-110 transition-transform duration-300"
                        />
                      </div>

                      {/* Category badge */}
                      <div className="flex items-center justify-between mb-4">
                        <div className={`flex items-center gap-2 px-3 py-1 bg-gradient-to-r ${categoryColors[event.category]} text-white text-sm font-medium rounded-full`}>
                          <IconComponent size={16} />
                          <span className="capitalize">{event.category}</span>
                        </div>
                        
                        <div className="text-sm text-charcoal/60 dark:text-off-white/60">
                          {formatDate(event.date)}
                        </div>
                      </div>

                      {/* Event details */}
                      <h3 className="text-xl font-serif font-bold text-charcoal dark:text-off-white mb-3">
                        {event.title}
                      </h3>
                      
                      <p className="text-charcoal/70 dark:text-off-white/70 mb-4 leading-relaxed">
                        {event.description}
                      </p>

                      {/* Event meta */}
                      <div className="space-y-2 text-sm">
                        <div className="flex items-center gap-2 text-charcoal/60 dark:text-off-white/60">
                          <Clock size={16} className="text-saffron-yellow" />
                          <span>{event.time}</span>
                        </div>
                        
                        <div className="flex items-center gap-2 text-charcoal/60 dark:text-off-white/60">
                          <MapPin size={16} className="text-lotus-pink" />
                          <span>{event.location}</span>
                        </div>
                      </div>

                      {/* Action button */}
                      <div className="mt-6">
                        <motion.button
                          className="w-full px-4 py-2 bg-gradient-to-r from-deep-purple to-saffron-yellow text-white font-medium rounded-xl hover:shadow-lg transition-all duration-300"
                          whileHover={{ scale: 1.02 }}
                          whileTap={{ scale: 0.98 }}
                        >
                          Daftar Kegiatan
                        </motion.button>
                      </div>
                    </div>
                  </div>

                  {/* Spacer for md screens */}
                  <div className="hidden md:block flex-1"></div>
                </motion.div>
              );
            })}
          </div>
        </div>

        {/* Call to action */}
        <motion.div
          className="text-center mt-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
        >
          <div className="bg-gradient-to-r from-deep-purple/10 to-saffron-yellow/10 rounded-3xl p-8 border border-deep-purple/20">
            <h3 className="text-2xl font-serif font-bold text-charcoal dark:text-off-white mb-4">
              Ingin Mengusulkan Kegiatan?
            </h3>
            <p className="text-charcoal/70 dark:text-off-white/70 mb-6 max-w-2xl mx-auto">
              Kami terbuka untuk saran dan usulan kegiatan baru yang dapat mengembangkan komunitas Buddha di UNRI. 
              Sampaikan ide Anda kepada kami!
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
    </section>
  );
};

export default Events;