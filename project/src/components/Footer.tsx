import React from 'react';
import { motion } from 'framer-motion';
import { Heart, Mail, MapPin, Phone } from 'lucide-react';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-charcoal dark:bg-black text-off-white py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Organization info */}
          <div className="lg:col-span-2">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <div className="flex items-center space-x-3 mb-6">
                <div className="w-12 h-12 bg-gradient-to-br from-deep-purple to-saffron-yellow rounded-full flex items-center justify-center">
                  <svg width="28" height="28" viewBox="0 0 28 28" className="text-white">
                    <circle cx="14" cy="10" r="3" fill="currentColor" />
                    <path d="M14 2C9.5 2 6 5.5 6 10s3.5 8 8 8 8-3.5 8-8-3.5-8-8-8z" fill="currentColor" opacity="0.6" />
                    <ellipse cx="14" cy="18" rx="5" ry="3" fill="currentColor" opacity="0.4" />
                    <ellipse cx="14" cy="23" rx="8" ry="3" fill="currentColor" opacity="0.2" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-2xl font-serif font-bold">Permuridhis</h3>
                  <p className="text-off-white/70">Persaudaraan Mahasiswa/i UNRI Buddhis</p>
                </div>
              </div>
              
              <p className="text-off-white/80 leading-relaxed mb-6 max-w-md">
                Organisasi mahasiswa yang berdedikasi untuk mengembangkan spiritualitas Buddha 
                di lingkungan kampus Universitas Riau melalui kegiatan dharma, meditasi, dan bakti sosial.
              </p>

              <div className="flex items-center gap-2 text-lotus-pink">
                <Heart size={16} />
                <span className="text-sm">Dibuat dengan cinta untuk komunitas Buddha UNRI</span>
              </div>
            </motion.div>
          </div>

          {/* Quick links */}
          <div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              viewport={{ once: true }}
            >
              <h4 className="text-lg font-semibold mb-6 text-saffron-yellow">Tautan Cepat</h4>
              <ul className="space-y-3">
                {[
                  { name: 'Tentang Kami', href: '#about' },
                  { name: 'Struktur Organisasi', href: '#team' },
                  { name: 'Galeri Kegiatan', href: '#gallery' },
                  { name: 'Kegiatan Mendatang', href: '#events' },
                  { name: 'Kutipan Harian', href: '#daily-quote' },
                ].map((link) => (
                  <li key={link.name}>
                    <a 
                      href={link.href}
                      className="text-off-white/70 hover:text-lotus-pink transition-colors duration-200 text-sm"
                    >
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </motion.div>
          </div>

          {/* Contact info */}
          <div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <h4 className="text-lg font-semibold mb-6 text-saffron-yellow">Kontak</h4>
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <Mail size={16} className="text-lotus-pink mt-1 flex-shrink-0" />
                  <div className="text-sm">
                    <p className="text-off-white/70">info@permuridhis.org</p>
                    <p className="text-off-white/70">ketua@permuridhis.org</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-3">
                  <Phone size={16} className="text-lotus-pink mt-1 flex-shrink-0" />
                  <div className="text-sm">
                    <p className="text-off-white/70">+62 812-3456-7890</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-3">
                  <MapPin size={16} className="text-lotus-pink mt-1 flex-shrink-0" />
                  <div className="text-sm text-off-white/70">
                    <p>Kampus Universitas Riau</p>
                    <p>Jl. HR. Soebrantas KM 12.5</p>
                    <p>Pekanbaru, Riau 28293</p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Bottom section */}
        <motion.div
          className="mt-12 pt-8 border-t border-off-white/20"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
        >
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-off-white/60 text-sm text-center md:text-left">
              © {currentYear} Permuridhis - Persaudaraan Mahasiswa/i UNRI Buddhis. 
              Semua hak dilindungi undang-undang.
            </p>
            
            <div className="flex items-center gap-6 text-sm">
              <a href="#" className="text-off-white/60 hover:text-lotus-pink transition-colors">
                Kebijakan Privasi
              </a>
              <a href="#" className="text-off-white/60 hover:text-lotus-pink transition-colors">
                Syarat & Ketentuan
              </a>
            </div>
          </div>

          {/* Buddhist quote */}
          <motion.div
            className="mt-8 text-center"
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            viewport={{ once: true }}
          >
            <p className="text-off-white/50 text-sm italic font-serif">
              "Semoga semua makhluk berbahagia dan bebas dari penderitaan"
            </p>
            <p className="text-lotus-pink/70 text-xs mt-1">— Metta Bhavana</p>
          </motion.div>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;