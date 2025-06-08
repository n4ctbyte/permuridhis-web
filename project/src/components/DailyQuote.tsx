import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Quote, RefreshCw, BookOpen, X } from 'lucide-react';
import { getDailyQuote, getRandomQuote, buddhistQuotes } from '../data/quotes';

gsap.registerPlugin(ScrollTrigger);

const DailyQuote: React.FC = () => {
  const [currentQuote, setCurrentQuote] = useState(getDailyQuote());
  const [isAnimating, setIsAnimating] = useState(false);
  const [showAllQuotes, setShowAllQuotes] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);
  const quoteRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const section = sectionRef.current;
    const quote = quoteRef.current;

    if (!section || !quote) return;

    gsap.fromTo(quote,
      { opacity: 0, y: 50 },
      {
        opacity: 1,
        y: 0,
        duration: 1,
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

  const changeQuote = () => {
    if (isAnimating) return;
    
    setIsAnimating(true);
    
    // Animate out
    gsap.to(quoteRef.current, {
      opacity: 0,
      y: -20,
      duration: 0.3,
      ease: "power2.in",
      onComplete: () => {
        // Change quote
        setCurrentQuote(getRandomQuote());
        
        // Animate in
        gsap.to(quoteRef.current, {
          opacity: 1,
          y: 0,
          duration: 0.5,
          ease: "power2.out",
          onComplete: () => {
            setIsAnimating(false);
          }
        });
      }
    });
  };

  const typewriterVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.02,
      }
    }
  };

  const charVariants = {
    hidden: { opacity: 0, y: 10 },
    visible: { opacity: 1, y: 0 }
  };

  return (
    <section id="daily-quote" ref={sectionRef} className="py-20 bg-gradient-to-br from-saffron-yellow/5 to-lotus-pink/5 dark:from-deep-purple/5 dark:to-saffron-yellow/5 transition-colors duration-300">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <div className="text-center mb-12">
          <motion.h2 
            className="text-4xl md:text-5xl font-serif font-bold text-charcoal dark:text-off-white mb-6"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            Kutipan <span className="text-transparent bg-gradient-to-r from-deep-purple to-saffron-yellow bg-clip-text">Harian</span>
          </motion.h2>
        </div>

        {/* Quote card */}
        <motion.div
          ref={quoteRef}
          className="relative bg-white dark:bg-charcoal/50 rounded-3xl p-8 md:p-12 shadow-2xl border border-lotus-pink/20 backdrop-blur-sm"
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
        >
          {/* Decorative quotes */}
          <div className="absolute top-6 left-6 text-lotus-pink/30">
            <Quote size={32} />
          </div>
          <div className="absolute bottom-6 right-6 text-lotus-pink/30 transform rotate-180">
            <Quote size={32} />
          </div>

          {/* Quote content */}
          <div className="text-center relative z-10">
            <motion.p 
              className="text-xl md:text-2xl text-charcoal dark:text-off-white font-serif leading-relaxed mb-6"
              variants={typewriterVariants}
              initial="hidden"
              animate="visible"
              key={currentQuote.text}
            >
              {currentQuote.text.split('').map((char, index) => (
                <motion.span key={index} variants={charVariants}>
                  {char}
                </motion.span>
              ))}
            </motion.p>
            
            <motion.p 
              className="text-lg text-saffron-yellow dark:text-lotus-pink font-semibold"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
            >
              — {currentQuote.author}
            </motion.p>
          </div>

          {/* Floating decorative elements */}
          <div className="absolute -top-4 -right-4 w-8 h-8 bg-gradient-to-br from-lotus-pink to-saffron-yellow rounded-full animate-float opacity-60"></div>
          <div className="absolute -bottom-4 -left-4 w-6 h-6 bg-gradient-to-br from-deep-purple to-lotus-pink rounded-full animate-float opacity-40" style={{ animationDelay: '1s' }}></div>
        </motion.div>

        {/* Action buttons */}
        <motion.div 
          className="flex flex-col sm:flex-row gap-4 justify-center mt-8"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          viewport={{ once: true }}
        >
          <motion.button
            onClick={changeQuote}
            disabled={isAnimating}
            className="flex items-center justify-center gap-3 px-6 py-3 bg-gradient-to-r from-deep-purple to-saffron-yellow text-white font-semibold rounded-full shadow-lg hover:shadow-xl transition-all duration-300 disabled:opacity-50"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <RefreshCw size={20} className={isAnimating ? 'animate-spin' : ''} />
            Kutipan Lainnya
          </motion.button>
          
          <motion.button
            onClick={() => setShowAllQuotes(true)}
            className="flex items-center justify-center gap-3 px-6 py-3 border-2 border-deep-purple dark:border-saffron-yellow text-deep-purple dark:text-saffron-yellow font-semibold rounded-full hover:bg-deep-purple dark:hover:bg-saffron-yellow hover:text-white dark:hover:text-charcoal transition-all duration-300"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <BookOpen size={20} />
            Lihat Semua Kutipan
          </motion.button>
        </motion.div>
      </div>

      {/* All Quotes Modal */}
      <AnimatePresence>
        {showAllQuotes && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm"
            onClick={() => setShowAllQuotes(false)}
          >
            <motion.div
              className="bg-white dark:bg-charcoal rounded-3xl p-6 max-w-4xl w-full max-h-[80vh] overflow-hidden"
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
            >
              {/* Header */}
              <div className="flex items-center justify-between mb-6 pb-4 border-b border-gray-200 dark:border-gray-700">
                <h3 className="text-2xl font-serif font-bold text-charcoal dark:text-off-white">
                  Koleksi Kutipan Buddha
                </h3>
                <button
                  onClick={() => setShowAllQuotes(false)}
                  className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors"
                >
                  <X size={24} className="text-charcoal dark:text-off-white" />
                </button>
              </div>

              {/* Quotes list */}
              <div className="overflow-y-auto max-h-[60vh] space-y-6 pr-2">
                {buddhistQuotes.map((quote, index) => (
                  <motion.div
                    key={index}
                    className="p-4 bg-gray-50 dark:bg-charcoal/30 rounded-2xl border border-gray-200 dark:border-gray-700"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.05 }}
                  >
                    <p className="text-charcoal dark:text-off-white font-serif mb-3 leading-relaxed">
                      "{quote.text}"
                    </p>
                    <p className="text-saffron-yellow dark:text-lotus-pink font-semibold text-right">
                      — {quote.author}
                    </p>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default DailyQuote;