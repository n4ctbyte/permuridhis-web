import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { X, Mail, User } from 'lucide-react';
import { teamMembers, TeamMember } from '../data/team';

gsap.registerPlugin(ScrollTrigger);

const TeamSection: React.FC = () => {
  const [selectedMember, setSelectedMember] = useState<TeamMember | null>(null);
  const sectionRef = useRef<HTMLDivElement>(null);
  const gridRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const section = sectionRef.current;
    const grid = gridRef.current;

    if (!section || !grid) return;

    gsap.fromTo(grid.children,
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

  }, []);

  const TeamMemberCard: React.FC<{ member: TeamMember; index: number }> = ({ member, index }) => (
    <motion.div
      className="group relative bg-white dark:bg-charcoal/50 rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 cursor-pointer border border-gray-200 dark:border-gray-700"
      whileHover={{ 
        y: -10,
        rotateY: 5,
        boxShadow: "0 25px 50px rgba(106, 13, 173, 0.15)"
      }}
      onClick={() => setSelectedMember(member)}
      layoutId={`member-${member.id}`}
    >
      {/* Background dharma wheel decoration */}
      <div className="absolute inset-0 opacity-0 group-hover:opacity-10 transition-opacity duration-300">
        <svg className="w-full h-full text-deep-purple" viewBox="0 0 100 100">
          <circle cx="50" cy="50" r="30" fill="none" stroke="currentColor" strokeWidth="1" />
          {[...Array(8)].map((_, i) => {
            const angle = (i * 45) * Math.PI / 180;
            const x1 = 50 + 15 * Math.cos(angle);
            const y1 = 50 + 15 * Math.sin(angle);
            const x2 = 50 + 25 * Math.cos(angle);
            const y2 = 50 + 25 * Math.sin(angle);
            
            return (
              <line 
                key={i}
                x1={x1} 
                y1={y1} 
                x2={x2} 
                y2={y2} 
                stroke="currentColor" 
                strokeWidth="0.5"
              />
            );
          })}
        </svg>
      </div>

      {/* Profile image */}
      <div className="relative p-6 pb-0">
        <div className="w-24 h-24 mx-auto rounded-full overflow-hidden ring-4 ring-lotus-pink/30 group-hover:ring-saffron-yellow/50 transition-all duration-300">
          <img 
            src={member.image} 
            alt={member.name}
            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
          />
        </div>
      </div>

      {/* Member info */}
      <div className="p-6 pt-4 text-center">
        <h3 className="text-lg font-semibold text-charcoal dark:text-off-white mb-1 group-hover:text-deep-purple dark:group-hover:text-saffron-yellow transition-colors">
          {member.name}
        </h3>
        <p className="text-saffron-yellow dark:text-lotus-pink font-medium mb-2">
          {member.role}
        </p>
        <p className="text-sm text-charcoal/60 dark:text-off-white/60">
          {member.department}
        </p>
      </div>

      {/* Hover overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-deep-purple/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-center pb-6">
        <motion.div 
          className="text-white text-center"
          initial={{ y: 20, opacity: 0 }}
          whileHover={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.1 }}
        >
          <p className="text-sm font-medium">Klik untuk detail</p>
        </motion.div>
      </div>
    </motion.div>
  );

  return (
    <section id="team" ref={sectionRef} className="py-20 bg-gray-50 dark:bg-charcoal/30 transition-colors duration-300">
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
            Struktur <span className="text-transparent bg-gradient-to-r from-deep-purple to-saffron-yellow bg-clip-text">Organisasi</span>
          </motion.h2>
          
          <motion.p 
            className="text-lg text-charcoal/70 dark:text-off-white/70 max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            Tim pengurus Permuridhis yang berdedikasi untuk melayani komunitas Buddha di UNRI
          </motion.p>
        </div>

        {/* Team grid */}
        <div ref={gridRef} className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {teamMembers.map((member, index) => (
            <TeamMemberCard key={member.id} member={member} index={index} />
          ))}
        </div>
      </div>

      {/* Member Detail Modal */}
      <AnimatePresence>
        {selectedMember && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm"
            onClick={() => setSelectedMember(null)}
          >
            <motion.div
              layoutId={`member-${selectedMember.id}`}
              className="bg-white dark:bg-charcoal rounded-3xl p-8 max-w-md w-full max-h-[90vh] overflow-y-auto"
              onClick={(e) => e.stopPropagation()}
              initial={{ scale: 0.9, rotateY: -10 }}
              animate={{ scale: 1, rotateY: 0 }}
              exit={{ scale: 0.9, rotateY: 10 }}
              transition={{ type: "spring", damping: 20 }}
            >
              {/* Close button */}
              <button
                onClick={() => setSelectedMember(null)}
                className="absolute top-4 right-4 p-2 rounded-full bg-gray-100 dark:bg-gray-700 hover:bg-gray-200 dark:hover:bg-gray-600 transition-colors"
              >
                <X size={20} className="text-charcoal dark:text-off-white" />
              </button>

              {/* Profile image */}
              <div className="text-center mb-6">
                <div className="w-32 h-32 mx-auto rounded-full overflow-hidden ring-4 ring-gradient-to-r from-deep-purple to-saffron-yellow p-1">
                  <div className="w-full h-full rounded-full overflow-hidden">
                    <img 
                      src={selectedMember.image} 
                      alt={selectedMember.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
              </div>

              {/* Member details */}
              <div className="text-center mb-6">
                <h3 className="text-2xl font-serif font-bold text-charcoal dark:text-off-white mb-2">
                  {selectedMember.name}
                </h3>
                <p className="text-saffron-yellow dark:text-lotus-pink font-semibold text-lg mb-1">
                  {selectedMember.role}
                </p>
                <p className="text-charcoal/60 dark:text-off-white/60 flex items-center justify-center gap-2">
                  <User size={16} />
                  {selectedMember.department}
                </p>
              </div>

              {/* Bio */}
              <div className="mb-6">
                <h4 className="font-semibold text-charcoal dark:text-off-white mb-3">Profil</h4>
                <p className="text-charcoal/70 dark:text-off-white/70 leading-relaxed">
                  {selectedMember.bio}
                </p>
              </div>

              {/* Contact */}
              {selectedMember.email && (
                <div className="border-t border-gray-200 dark:border-gray-700 pt-6">
                  <a 
                    href={`mailto:${selectedMember.email}`}
                    className="flex items-center justify-center gap-3 p-3 bg-gradient-to-r from-deep-purple to-saffron-yellow text-white rounded-xl hover:shadow-lg transition-all duration-300"
                  >
                    <Mail size={20} />
                    <span>Hubungi via Email</span>
                  </a>
                </div>
              )}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default TeamSection;