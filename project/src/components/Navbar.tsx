import React, { useState, useEffect } from 'react';
import { Menu, X, Sun, Moon } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { gsap } from 'gsap';
import { ScrollToPlugin } from 'gsap/ScrollToPlugin';

gsap.registerPlugin(ScrollToPlugin);

interface NavbarProps {
  darkMode: boolean;
  toggleDarkMode: () => void;
}

const Navbar: React.FC<NavbarProps> = ({ darkMode, toggleDarkMode }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const navItems = [
    { name: 'Beranda', href: '#hero' },
    { name: 'Tentang', href: '#about' },
    { name: 'Struktur', href: '#team' },
    { name: 'Galeri', href: '#gallery' },
    { name: 'Kegiatan', href: '#events' },
    { name: 'Kontak', href: '#contact' },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (href: string) => {
    const target = href.substring(1);
    gsap.to(window, {
      duration: 1,
      scrollTo: { y: `#${target}`, offsetY: 80 },
      ease: "power2.inOut"
    });
    setIsOpen(false);
  };

  return (
    <>
      <nav className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        scrolled 
          ? 'bg-white/95 dark:bg-charcoal/95 backdrop-blur-md shadow-lg' 
          : 'bg-transparent'
      }`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <motion.div 
              className="flex items-center space-x-3"
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <div className="w-10 h-10 bg-gradient-to-br from-deep-purple to-saffron-yellow rounded-full flex items-center justify-center">
                <svg width="24" height="24" viewBox="0 0 24 24" className="text-white">
                  <circle cx="12" cy="8" r="2" fill="currentColor" />
                  <path d="M12 2C8.5 2 6 4.5 6 8s2.5 6 6 6 6-2.5 6-6-2.5-6-6-6z" fill="currentColor" opacity="0.6" />
                  <ellipse cx="12" cy="14" rx="4" ry="2" fill="currentColor" opacity="0.4" />
                  <ellipse cx="12" cy="18" rx="6" ry="2" fill="currentColor" opacity="0.2" />
                </svg>
              </div>
              <span className="text-xl font-serif font-bold text-charcoal dark:text-off-white">
                Permuridhis
              </span>
            </motion.div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-8">
              {navItems.map((item) => (
                <motion.button
                  key={item.name}
                  onClick={() => scrollToSection(item.href)}
                  className="text-charcoal dark:text-off-white hover:text-deep-purple dark:hover:text-saffron-yellow transition-colors duration-200 font-medium"
                  whileHover={{ y: -2 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  {item.name}
                </motion.button>
              ))}
              
              {/* Dark mode toggle */}
              <motion.button
                onClick={toggleDarkMode}
                className="p-2 rounded-full bg-deep-purple/10 dark:bg-saffron-yellow/10 text-deep-purple dark:text-saffron-yellow"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
              >
                {darkMode ? <Sun size={20} /> : <Moon size={20} />}
              </motion.button>
            </div>

            {/* Mobile menu button */}
            <div className="md:hidden flex items-center space-x-4">
              <motion.button
                onClick={toggleDarkMode}
                className="p-2 rounded-full bg-deep-purple/10 dark:bg-saffron-yellow/10 text-deep-purple dark:text-saffron-yellow"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
              >
                {darkMode ? <Sun size={20} /> : <Moon size={20} />}
              </motion.button>
              
              <button
                onClick={() => setIsOpen(!isOpen)}
                className="text-charcoal dark:text-off-white p-2"
              >
                {isOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-30 md:hidden"
          >
            <div className="absolute inset-0 bg-black/50" onClick={() => setIsOpen(false)} />
            
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", damping: 20 }}
              className="absolute right-0 top-0 h-full w-80 bg-white dark:bg-charcoal shadow-xl"
            >
              <div className="pt-20 px-6">
                {navItems.map((item, index) => (
                  <motion.button
                    key={item.name}
                    onClick={() => scrollToSection(item.href)}
                    className="block w-full text-left py-4 text-lg font-medium text-charcoal dark:text-off-white hover:text-deep-purple dark:hover:text-saffron-yellow transition-colors border-b border-gray-200 dark:border-gray-700"
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 }}
                  >
                    {item.name}
                  </motion.button>
                ))}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;