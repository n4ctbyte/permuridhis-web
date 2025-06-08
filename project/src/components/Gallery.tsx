import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { X, ZoomIn } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

interface GalleryImage {
  id: string;
  src: string;
  alt: string;
  category: string;
  description: string;
}

const Gallery: React.FC = () => {
  const [selectedImage, setSelectedImage] = useState<GalleryImage | null>(null);
  const [filter, setFilter] = useState('all');
  const sectionRef = useRef<HTMLDivElement>(null);
  const galleryRef = useRef<HTMLDivElement>(null);

  const images: GalleryImage[] = [
    {
      id: '1',
      src: 'https://images.pexels.com/photos/5428836/pexels-photo-5428836.jpeg?auto=compress&cs=tinysrgb&w=800',
      alt: 'Dharma Talk Session',
      category: 'dharma',
      description: 'Sesi Dharma Talk mingguan dengan pembahasan mendalam tentang ajaran Buddha'
    },
    {
      id: '2',
      src: 'https://images.pexels.com/photos/3822622/pexels-photo-3822622.jpeg?auto=compress&cs=tinysrgb&w=800',
      alt: 'Meditation Retreat',
      category: 'retreat',
      description: 'Retreat meditasi weekend untuk pengembangan spiritual anggota'
    },
    {
      id: '3',
      src: 'https://images.pexels.com/photos/6994982/pexels-photo-6994982.jpeg?auto=compress&cs=tinysrgb&w=800',
      alt: 'Social Service',
      category: 'social',
      description: 'Kegiatan bakti sosial pembagian sembako kepada masyarakat kurang mampu'
    },
    {
      id: '4',
      src: 'https://images.pexels.com/photos/8849295/pexels-photo-8849295.jpeg?auto=compress&cs=tinysrgb&w=800',
      alt: 'Vesak Celebration',
      category: 'ceremony',
      description: 'Perayaan Hari Raya Waisak dengan berbagai rangkaian acara keagamaan'
    },
    {
      id: '5',
      src: 'https://images.pexels.com/photos/4160111/pexels-photo-4160111.jpeg?auto=compress&cs=tinysrgb&w=800',
      alt: 'Group Study',
      category: 'dharma',
      description: 'Studi kelompok pembelajaran dharma dan diskusi ajaran Buddha'
    },
    {
      id: '6',
      src: 'https://images.pexels.com/photos/3184360/pexels-photo-3184360.jpeg?auto=compress&cs=tinysrgb&w=800',
      alt: 'Youth Meeting',
      category: 'social',
      description: 'Pertemuan rutin pengurus dan anggota Permuridhis'
    },
    {
      id: '7',
      src: 'https://images.pexels.com/photos/5207262/pexels-photo-5207262.jpeg?auto=compress&cs=tinysrgb&w=800',
      alt: 'Community Gathering',
      category: 'social',
      description: 'Gathering komunitas Buddha mahasiswa UNRI'
    },
    {
      id: '8',
      src: 'https://images.pexels.com/photos/3985062/pexels-photo-3985062.jpeg?auto=compress&cs=tinysrgb&w=800',
      alt: 'Mindfulness Workshop',
      category: 'dharma',
      description: 'Workshop mindfulness untuk mahasiswa'
    },
    {
      id: '9',
      src: 'https://images.pexels.com/photos/6787202/pexels-photo-6787202.jpeg?auto=compress&cs=tinysrgb&w=800',
      alt: 'Prayer Session',
      category: 'ceremony',
      description: 'Sesi doa bersama dan pembacaan mantra'
    }
  ];

  const categories = [
    { id: 'all', name: 'Semua' },
    { id: 'dharma', name: 'Dharma Talk' },
    { id: 'retreat', name: 'Retreat' },
    { id: 'social', name: 'Sosial' },
    { id: 'ceremony', name: 'Upacara' }
  ];

  const filteredImages = filter === 'all' 
    ? images 
    : images.filter(img => img.category === filter);

  useEffect(() => {
    const section = sectionRef.current;
    const gallery = galleryRef.current;

    if (!section || !gallery) return;

    gsap.fromTo(gallery.children,
      { opacity: 0, y: 50, scale: 0.9 },
      {
        opacity: 1,
        y: 0,
        scale: 1,
        duration: 0.6,
        stagger: 0.1,
        ease: "back.out(1.7)",
        scrollTrigger: {
          trigger: section,
          start: "top 70%",
          end: "bottom 30%",
          toggleActions: "play none none reverse"
        }
      }
    );

  }, [filteredImages]);

  return (
    <section id="gallery" ref={sectionRef} className="py-20 bg-off-white dark:bg-charcoal transition-colors duration-300">
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
            Galeri <span className="text-transparent bg-gradient-to-r from-deep-purple to-saffron-yellow bg-clip-text">Kegiatan</span>
          </motion.h2>
          
          <motion.p 
            className="text-lg text-charcoal/70 dark:text-off-white/70 max-w-3xl mx-auto mb-8"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            Dokumentasi kegiatan dan momen berharga Permuridhis dalam mengembangkan komunitas Buddha di UNRI
          </motion.p>

          {/* Filter buttons */}
          <motion.div 
            className="flex flex-wrap justify-center gap-3"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
          >
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setFilter(category.id)}
                className={`px-6 py-2 rounded-full font-medium transition-all duration-300 ${
                  filter === category.id
                    ? 'bg-gradient-to-r from-deep-purple to-saffron-yellow text-white shadow-lg'
                    : 'bg-white dark:bg-charcoal/50 text-charcoal dark:text-off-white hover:bg-gray-100 dark:hover:bg-charcoal/70 border border-gray-200 dark:border-gray-600'
                }`}
              >
                {category.name}
              </button>
            ))}
          </motion.div>
        </div>

        {/* Gallery grid */}
        <div ref={galleryRef} className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredImages.map((image, index) => (
            <motion.div
              key={image.id}
              className="group relative bg-white dark:bg-charcoal/50 rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 cursor-pointer"
              whileHover={{ y: -5, scale: 1.02 }}
              onClick={() => setSelectedImage(image)}
              layout
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
            >
              {/* Image */}
              <div className="aspect-w-16 aspect-h-12 overflow-hidden">
                <img 
                  src={image.src} 
                  alt={image.alt}
                  className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
                />
              </div>

              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <h3 className="text-white font-semibold text-lg mb-2">
                    {image.alt}
                  </h3>
                  <p className="text-white/80 text-sm line-clamp-2">
                    {image.description}
                  </p>
                </div>

                {/* Zoom icon */}
                <div className="absolute top-4 right-4 w-10 h-10 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center">
                  <ZoomIn size={20} className="text-white" />
                </div>
              </div>

              {/* Category badge */}
              <div className="absolute top-4 left-4">
                <span className="px-3 py-1 bg-lotus-pink/90 text-white text-xs font-medium rounded-full">
                  {categories.find(c => c.id === image.category)?.name}
                </span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Lightbox Modal */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/90 backdrop-blur-sm"
            onClick={() => setSelectedImage(null)}
          >
            <motion.div
              className="relative max-w-4xl max-h-[90vh] w-full"
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              transition={{ type: "spring", damping: 20 }}
              onClick={(e) => e.stopPropagation()}
            >
              {/* Close button */}
              <button
                onClick={() => setSelectedImage(null)}
                className="absolute -top-12 right-0 p-2 text-white hover:text-lotus-pink transition-colors z-10"
              >
                <X size={32} />
              </button>

              {/* Image */}
              <div className="bg-white dark:bg-charcoal rounded-2xl overflow-hidden shadow-2xl">
                <img 
                  src={selectedImage.src} 
                  alt={selectedImage.alt}
                  className="w-full h-auto max-h-[60vh] object-contain"
                />
                
                {/* Caption */}
                <div className="p-6">
                  <h3 className="text-2xl font-serif font-bold text-charcoal dark:text-off-white mb-2">
                    {selectedImage.alt}
                  </h3>
                  <p className="text-charcoal/70 dark:text-off-white/70 leading-relaxed">
                    {selectedImage.description}
                  </p>
                  
                  <div className="mt-4">
                    <span className="inline-block px-4 py-2 bg-gradient-to-r from-deep-purple to-saffron-yellow text-white text-sm font-medium rounded-full">
                      {categories.find(c => c.id === selectedImage.category)?.name}
                    </span>
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default Gallery;