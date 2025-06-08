import React from 'react';
import { motion } from 'framer-motion';
import { Heart } from 'lucide-react';

const FloatingDonateButton: React.FC = () => {
  return (
    <motion.div
      className="fixed bottom-8 right-8 z-40"
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ delay: 2, type: "spring", stiffness: 300 }}
    >
      <motion.button
        className="w-16 h-16 bg-gradient-to-r from-saffron-yellow to-yellow-400 text-charcoal rounded-full shadow-2xl flex items-center justify-center group"
        whileHover={{ 
          scale: 1.1,
          boxShadow: "0 0 30px rgba(255, 179, 0, 0.6)"
        }}
        whileTap={{ scale: 0.9 }}
        animate={{
          y: [0, -5, 0],
        }}
        transition={{
          duration: 2,
          repeat: Infinity,
          ease: "easeInOut"
        }}
        onClick={() => {
          // Handle donation action
          window.open('#', '_blank');
        }}
      >
        <Heart 
          size={24} 
          className="group-hover:scale-110 transition-transform duration-200" 
          fill="currentColor"
        />
        
        {/* Pulse effect */}
        <div className="absolute inset-0 rounded-full bg-saffron-yellow/30 animate-ping"></div>
      </motion.button>

      {/* Tooltip */}
      <motion.div
        className="absolute bottom-full right-0 mb-2 px-3 py-2 bg-charcoal text-off-white text-sm rounded-lg shadow-lg opacity-0 group-hover:opacity-100 transition-opacity duration-200 whitespace-nowrap"
        initial={{ opacity: 0, y: 10 }}
        whileHover={{ opacity: 1, y: 0 }}
      >
        Dukung Permuridhis
        <div className="absolute top-full right-4 w-0 h-0 border-l-4 border-r-4 border-t-4 border-transparent border-t-charcoal"></div>
      </motion.div>
    </motion.div>
  );
};

export default FloatingDonateButton;