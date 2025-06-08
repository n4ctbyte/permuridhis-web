import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { 
  Mail, 
  Phone, 
  MapPin, 
  Send, 
  Facebook, 
  Instagram, 
  MessageCircle,
  Youtube,
  CheckCircle,
  AlertCircle
} from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');
  
  const sectionRef = useRef<HTMLDivElement>(null);
  const formRef = useRef<HTMLDivElement>(null);
  const mapRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const section = sectionRef.current;
    const form = formRef.current;
    const map = mapRef.current;

    if (!section || !form || !map) return;

    gsap.fromTo([form, map],
      { opacity: 0, y: 50 },
      {
        opacity: 1,
        y: 0,
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

  const validateField = (name: string, value: string) => {
    switch (name) {
      case 'name':
        return value.length < 2 ? 'Nama minimal 2 karakter' : '';
      case 'email':
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return !emailRegex.test(value) ? 'Format email tidak valid' : '';
      case 'subject':
        return value.length < 5 ? 'Subjek minimal 5 karakter' : '';
      case 'message':
        return value.length < 10 ? 'Pesan minimal 10 karakter' : '';
      default:
        return '';
    }
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    
    // Real-time validation
    const error = validateField(name, value);
    setErrors(prev => ({ ...prev, [name]: error }));
    
    // Shake animation for invalid fields
    if (error) {
      gsap.to(e.target, {
        x: [-10, 10, -10, 10, 0],
        duration: 0.5,
        ease: "power2.out"
      });
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Validate all fields
    const newErrors: Record<string, string> = {};
    Object.entries(formData).forEach(([key, value]) => {
      const error = validateField(key, value);
      if (error) newErrors[key] = error;
    });

    setErrors(newErrors);

    if (Object.keys(newErrors).length === 0) {
      // Simulate form submission
      await new Promise(resolve => setTimeout(resolve, 1500));
      setSubmitStatus('success');
      setFormData({ name: '', email: '', subject: '', message: '' });
    } else {
      setSubmitStatus('error');
    }

    setIsSubmitting(false);
  };

  const socialLinks = [
    {
      icon: Facebook,
      name: 'Facebook',
      url: '#',
      color: 'hover:text-blue-600'
    },
    {
      icon: Instagram,
      name: 'Instagram',
      url: '#',
      color: 'hover:text-pink-600'
    },
    {
      icon: Youtube,
      name: 'YouTube',
      url: '#',
      color: 'hover:text-red-600'
    },
    {
      icon: MessageCircle,
      name: 'WhatsApp',
      url: '#',
      color: 'hover:text-green-600'
    }
  ];

  return (
    <section id="contact" ref={sectionRef} className="py-20 bg-gray-50 dark:bg-charcoal/30 transition-colors duration-300">
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
            Hubungi <span className="text-transparent bg-gradient-to-r from-deep-purple to-saffron-yellow bg-clip-text">Kami</span>
          </motion.h2>
          
          <motion.p 
            className="text-lg text-charcoal/70 dark:text-off-white/70 max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            Kami siap membantu Anda. Jangan ragu untuk menghubungi kami melalui formulir di bawah ini atau media sosial kami.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact form */}
          <div ref={formRef}>
            <motion.div
              className="bg-white dark:bg-charcoal/50 rounded-3xl p-8 shadow-lg border border-gray-200 dark:border-gray-700"
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h3 className="text-2xl font-serif font-bold text-charcoal dark:text-off-white mb-6">
                Kirim Pesan
              </h3>

              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Name field */}
                <div>
                  <label className="block text-sm font-medium text-charcoal dark:text-off-white mb-2">
                    Nama Lengkap
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    className={`w-full px-4 py-3 rounded-xl border transition-all duration-300 focus:outline-none focus:ring-2 ${
                      errors.name 
                        ? 'border-red-500 focus:ring-red-200' 
                        : 'border-gray-300 dark:border-gray-600 focus:ring-deep-purple/20'
                    } bg-white dark:bg-charcoal/30 text-charcoal dark:text-off-white`}
                    placeholder="Masukkan nama lengkap Anda"
                  />
                  <AnimatePresence>
                    {errors.name && (
                      <motion.p
                        initial={{ opacity: 0, y: -10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -10 }}
                        className="text-red-500 text-sm mt-1 flex items-center gap-1"
                      >
                        <AlertCircle size={14} />
                        {errors.name}
                      </motion.p>
                    )}
                  </AnimatePresence>
                </div>

                {/* Email field */}
                <div>
                  <label className="block text-sm font-medium text-charcoal dark:text-off-white mb-2">
                    Alamat Email
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    className={`w-full px-4 py-3 rounded-xl border transition-all duration-300 focus:outline-none focus:ring-2 ${
                      errors.email 
                        ? 'border-red-500 focus:ring-red-200' 
                        : 'border-gray-300 dark:border-gray-600 focus:ring-deep-purple/20'
                    } bg-white dark:bg-charcoal/30 text-charcoal dark:text-off-white`}
                    placeholder="nama@email.com"
                  />
                  <AnimatePresence>
                    {errors.email && (
                      <motion.p
                        initial={{ opacity: 0, y: -10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -10 }}
                        className="text-red-500 text-sm mt-1 flex items-center gap-1"
                      >
                        <AlertCircle size={14} />
                        {errors.email}
                      </motion.p>
                    )}
                  </AnimatePresence>
                </div>

                {/* Subject field */}
                <div>
                  <label className="block text-sm font-medium text-charcoal dark:text-off-white mb-2">
                    Subjek
                  </label>
                  <input
                    type="text"
                    name="subject"
                    value={formData.subject}
                    onChange={handleInputChange}
                    className={`w-full px-4 py-3 rounded-xl border transition-all duration-300 focus:outline-none focus:ring-2 ${
                      errors.subject 
                        ? 'border-red-500 focus:ring-red-200' 
                        : 'border-gray-300 dark:border-gray-600 focus:ring-deep-purple/20'
                    } bg-white dark: bg-charcoal/30 text-charcoal dark:text-off-white`}
                    placeholder="Subjek pesan Anda"
                  />
                  <AnimatePresence>
                    {errors.subject && (
                      <motion.p
                        initial={{ opacity: 0, y: -10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -10 }}
                        className="text-red-500 text-sm mt-1 flex items-center gap-1"
                      >
                        <AlertCircle size={14} />
                        {errors.subject}
                      </motion.p>
                    )}
                  </AnimatePresence>
                </div>

                {/* Message field */}
                <div>
                  <label className="block text-sm font-medium text-charcoal dark:text-off-white mb-2">
                    Pesan
                  </label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    rows={5}
                    className={`w-full px-4 py-3 rounded-xl border transition-all duration-300 focus:outline-none focus:ring-2 resize-none ${
                      errors.message 
                        ? 'border-red-500 focus:ring-red-200' 
                        : 'border-gray-300 dark:border-gray-600 focus:ring-deep-purple/20'
                    } bg-white dark:bg-charcoal/30 text-charcoal dark:text-off-white`}
                    placeholder="Tulis pesan Anda di sini..."
                  />
                  <AnimatePresence>
                    {errors.message && (
                      <motion.p
                        initial={{ opacity: 0, y: -10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -10 }}
                        className="text-red-500 text-sm mt-1 flex items-center gap-1"
                      >
                        <AlertCircle size={14} />
                        {errors.message}
                      </motion.p>
                    )}
                  </AnimatePresence>
                </div>

                {/* Submit button */}
                <motion.button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full px-6 py-4 bg-gradient-to-r from-deep-purple to-saffron-yellow text-white font-semibold rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 disabled:opacity-50 flex items-center justify-center gap-3"
                  whileHover={{ scale: isSubmitting ? 1 : 1.02 }}
                  whileTap={{ scale: isSubmitting ? 1 : 0.98 }}
                >
                  {isSubmitting ? (
                    <>
                      <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                      Mengirim...
                    </>
                  ) : (
                    <>
                      <Send size={20} />
                      Kirim Pesan
                    </>
                  )}
                </motion.button>

                {/* Status messages */}
                <AnimatePresence>
                  {submitStatus === 'success' && (
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -10 }}
                      className="p-4 bg-green-100 dark:bg-green-900/30 border border-green-300 dark:border-green-700 rounded-xl flex items-center gap-3"
                    >
                      <CheckCircle size={20} className="text-green-600 dark:text-green-400" />
                      <span className="text-green-800 dark:text-green-200">
                        Pesan berhasil dikirim! Kami akan segera merespons.
                      </span>
                    </motion.div>
                  )}
                  
                  {submitStatus === 'error' && (
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -10 }}
                      className="p-4 bg-red-100 dark:bg-red-900/30 border border-red-300 dark:border-red-700 rounded-xl flex items-center gap-3"
                    >
                      <AlertCircle size={20} className="text-red-600 dark:text-red-400" />
                      <span className="text-red-800 dark:text-red-200">
                        Mohon periksa kembali form Anda.
                      </span>
                    </motion.div>
                  )}
                </AnimatePresence>
              </form>
            </motion.div>
          </div>

          {/* Contact info and map */}
          <div ref={mapRef} className="space-y-8">
            {/* Contact information */}
            <motion.div
              className="bg-white dark:bg-charcoal/50 rounded-3xl p-8 shadow-lg border border-gray-200 dark:border-gray-700"
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <h3 className="text-2xl font-serif font-bold text-charcoal dark:text-off-white mb-6">
                Informasi Kontak
              </h3>

              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-deep-purple to-saffron-yellow rounded-full flex items-center justify-center flex-shrink-0">
                    <Mail size={20} className="text-white" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-charcoal dark:text-off-white mb-1">Email</h4>
                    <p className="text-charcoal/70 dark:text-off-white/70">info@permuridhis.org</p>
                    <p className="text-charcoal/70 dark:text-off-white/70">ketua@permuridhis.org</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-deep-purple to-saffron-yellow rounded-full flex items-center justify-center flex-shrink-0">
                    <Phone size={20} className="text-white" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-charcoal dark:text-off-white mb-1">Telepon</h4>
                    <p className="text-charcoal/70 dark:text-off-white/70">+62 812-3456-7890</p>
                    <p className="text-charcoal/70 dark:text-off-white/70">+62 821-9876-5432</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-deep-purple to-saffron-yellow rounded-full flex items-center justify-center flex-shrink-0">
                    <MapPin size={20} className="text-white" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-charcoal dark:text-off-white mb-1">Alamat</h4>
                    <p className="text-charcoal/70 dark:text-off-white/70">
                      Kampus Universitas Riau<br />
                      Jl. HR. Soebrantas KM 12.5<br />
                      Simpang Baru, Pekanbaru 28293<br />
                      Riau, Indonesia
                    </p>
                  </div>
                </div>
              </div>

              {/* Social media */}
              <div className="mt-8 pt-6 border-t border-gray-200 dark:border-gray-700">
                <h4 className="font-semibold text-charcoal dark:text-off-white mb-4">Ikuti Kami</h4>
                <div className="flex gap-4">
                  {socialLinks.map((social) => (
                    <motion.a
                      key={social.name}
                      href={social.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`w-12 h-12 bg-gray-100 dark:bg-charcoal/30 rounded-full flex items-center justify-center text-charcoal/60 dark:text-off-white/60 transition-all duration-300 ${social.color}`}
                      whileHover={{ scale: 1.1, y: -2 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <social.icon size={20} />
                    </motion.a>
                  ))}
                </div>
              </div>
            </motion.div>

            {/* Google Maps */}
            <motion.div
              className="bg-white dark:bg-charcoal/50 rounded-3xl overflow-hidden shadow-lg border border-gray-200 dark:border-gray-700"
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              viewport={{ once: true }}
            >
              <div className="p-6 pb-0">
                <h3 className="text-xl font-serif font-bold text-charcoal dark:text-off-white mb-4">
                  Lokasi Kami
                </h3>
              </div>
              
              <div className="h-64 bg-gray-200 dark:bg-charcoal/30 relative overflow-hidden">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3989.6623089!2d101.3431!3d0.4637!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31d5a8b6b6b6b6b6%3A0x1234567890abcdef!2sUniversitas%20Riau!5e0!3m2!1sen!2sid!4v1234567890123"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  className="filter grayscale hover:grayscale-0 transition-all duration-300"
                />
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;