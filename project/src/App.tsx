import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import SplashScreen from './components/SplashScreen';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import TeamSection from './components/TeamSection';
import Gallery from './components/Gallery';
import Partnerships from './components/Partnerships';
import DailyQuote from './components/DailyQuote';
import Events from './components/Events';
import Contact from './components/Contact';
import Footer from './components/Footer';
import FloatingDonateButton from './components/FloatingDonateButton';

function App() {
  const [showSplash, setShowSplash] = useState(true);
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    // Check for saved dark mode preference
    const savedDarkMode = localStorage.getItem('darkMode');
    if (savedDarkMode) {
      setDarkMode(JSON.parse(savedDarkMode));
    }
  }, []);

  useEffect(() => {
    // Apply dark mode class to document
    if (darkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
    
    // Save preference
    localStorage.setItem('darkMode', JSON.stringify(darkMode));
  }, [darkMode]);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  const handleSplashComplete = () => {
    setShowSplash(false);
  };

  return (
    <div className="min-h-screen bg-off-white dark:bg-charcoal transition-colors duration-300">
      <AnimatePresence>
        {showSplash && (
          <SplashScreen onComplete={handleSplashComplete} />
        )}
      </AnimatePresence>

      <AnimatePresence>
        {!showSplash && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            <Navbar darkMode={darkMode} toggleDarkMode={toggleDarkMode} />
            <main>
              <Hero />
              <About />
              <TeamSection />
              <Gallery />
              <DailyQuote />
              <Events />
              <Partnerships />
              <Contact />
            </main>
            <Footer />
            <FloatingDonateButton />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default App;