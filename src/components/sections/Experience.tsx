import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { FiBriefcase, FiCalendar, FiMapPin, FiBook, FiZap } from 'react-icons/fi';
import { IconWrapper } from '../../utils/IconWrapper';

interface TimelineItem {
  id: number;
  title: string;
  company?: string;
  institution?: string;
  location: string;
  period: string;
  description: string[];
  type: 'work' | 'education';
}

const Experience: React.FC = () => {
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: true
  });
  
  const [hoveredItem, setHoveredItem] = useState<number | null>(null);

  // Timeline data
  const timelineData: TimelineItem[] = [
    {
      id: 1,
      title: 'Internship',
      company: 'ParkingTime AB',
      location: 'Stockholm, Sweden',
      period: 'Sep 2025 - Present',
      description: [
        'Developing web applications for parking management solutions',
        'Working with advanced technologies including Go Lang, JavaScript, React, and Python (AI)',
        'Implementing user authentication and creating responsive dashboards',
        'Collaborating with cross-functional teams to deliver innovative parking solutions'
      ],
      type: 'work'
    },
    {
      id: 2,
      title: 'Bachelor of Computer Science',
      institution: 'KTH Royal Institute of Technology',
      location: 'Stockholm, Sweden',
      period: 'Jan 2022 - Sep 2025',
      description: [
        'Pursuing Bachelors degree in Computer Science',
        'Specializing in software development and emerging technologies',
        'Engaging in advanced programming and software engineering courses',
        'Participating in academic projects and research initiatives'
      ],
      type: 'education'
    },
    {
      id: 3,
      title: 'Frontend Developer Program',
      institution: 'FutureGames AB',
      location: 'Stockholm, Sweden',
      period: 'Apr 2020 - Oct 2021',
      description: [
        'Completed comprehensive frontend development training',
        'Developed practical skills in modern web technologies',
        'Worked on multiple project-based learning experiences',
        'Gained expertise in responsive web design and user interface development'
      ],
      type: 'education'
    }
  ];

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { x: -50, opacity: 0, scale: 0.9 },
    visible: {
      x: 0,
      opacity: 1,
      scale: 1,
      transition: {
        type: 'spring',
        stiffness: 100,
        damping: 15
      }
    }
  };
  
  const itemVariantsRight = {
    hidden: { x: 50, opacity: 0, scale: 0.9 },
    visible: {
      x: 0,
      opacity: 1,
      scale: 1,
      transition: {
        type: 'spring',
        stiffness: 100,
        damping: 15
      }
    }
  };

  return (
    <section id="experience" className="section-padding bg-gradient-to-b from-dark/80 to-dark">
      <div className="container mx-auto container-padding">
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="max-w-5xl mx-auto"
        >
          {/* Section Header */}
          <motion.div variants={itemVariants} className="text-center mb-20">
            <motion.div 
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 mb-6"
              whileHover={{ scale: 1.05 }}
            >
              <IconWrapper Component={FiZap} className="text-primary" size={18} />
              <span className="text-primary text-sm font-medium">Career Journey</span>
            </motion.div>
            
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-primary via-secondary to-accent">
                Experience & Education
              </span>
            </h2>
            
            <div className="w-24 h-1.5 bg-gradient-to-r from-primary via-secondary to-accent mx-auto rounded-full mb-8"></div>
            
            <p className="text-gray-400 text-lg md:text-xl max-w-3xl mx-auto leading-relaxed">
              My <span className="text-primary font-semibold">professional journey</span> and 
              <span className="text-secondary font-semibold"> educational background</span> that have shaped my 
              <span className="text-accent font-semibold"> skills and expertise</span>.
            </p>
          </motion.div>

          {/* Timeline */}
          <div className="relative">
            {/* Center line with gradient */}
            <motion.div 
              className="absolute left-1/2 transform -translate-x-1/2 h-full w-0.5 bg-gradient-to-b from-primary via-secondary to-accent rounded-full"
              initial={{ scaleY: 0 }}
              animate={inView ? { scaleY: 1 } : { scaleY: 0 }}
              transition={{ duration: 1, delay: 0.5 }}
              style={{ transformOrigin: 'top' }}
            />
            
            {/* Timeline items */}
            <div className="space-y-16">
              {timelineData.map((item, index) => (
                <motion.div 
                  key={item.id}
                  variants={index % 2 === 0 ? itemVariantsRight : itemVariants}
                  className={`flex flex-col md:flex-row items-center ${
                    index % 2 === 0 ? 'md:flex-row-reverse' : ''
                  }`}
                  onHoverStart={() => setHoveredItem(item.id)}
                  onHoverEnd={() => setHoveredItem(null)}
                >
                  {/* Content */}
                  <div className="md:w-1/2 p-4 group">
                    <motion.div 
                      className="relative"
                      whileHover={{ scale: 1.03 }}
                      transition={{ type: 'spring', stiffness: 300 }}
                    >
                      {/* Glow effect */}
                      <motion.div 
                        className="absolute -inset-1 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                        style={{
                          background: item.type === 'work' 
                            ? 'linear-gradient(45deg, rgba(139, 92, 246, 0.3), rgba(236, 72, 153, 0.3))'
                            : 'linear-gradient(45deg, rgba(236, 72, 153, 0.3), rgba(6, 182, 212, 0.3))',
                          filter: 'blur(20px)'
                        }}
                      />
                      
                      <div className={`relative p-7 rounded-2xl bg-dark/70 backdrop-blur-lg border shadow-xl transition-all duration-300 ${
                        item.type === 'work' ? 'border-primary/30 hover:border-primary' : 'border-secondary/30 hover:border-secondary'
                      }`}>
                        <div className="flex items-center mb-5">
                          <motion.div 
                            className="p-4 rounded-xl mr-4"
                            style={{ 
                              backgroundColor: item.type === 'work' ? 'rgba(139, 92, 246, 0.15)' : 'rgba(236, 72, 153, 0.15)',
                              color: item.type === 'work' ? '#8B5CF6' : '#EC4899'
                            }}
                            whileHover={{ rotate: [0, -10, 10, -10, 0], scale: 1.1 }}
                            transition={{ duration: 0.5 }}
                          >
                            {item.type === 'work' ? <IconWrapper Component={FiBriefcase} size={24} /> : <IconWrapper Component={FiBook} size={24} />}
                          </motion.div>
                          <div>
                            <h3 className={`text-2xl font-bold mb-1 ${
                              hoveredItem === item.id 
                                ? 'bg-clip-text text-transparent bg-gradient-to-r ' + (item.type === 'work' ? 'from-primary to-secondary' : 'from-secondary to-accent')
                                : ''
                            }`}>
                              {item.title}
                            </h3>
                            <p className="text-gray-300 font-medium">
                              {item.type === 'work' ? item.company : item.institution}
                            </p>
                          </div>
                        </div>
                        
                        <div className="flex gap-6 mb-5">
                          <div className="flex items-center text-sm text-gray-400">
                            <div className={`p-2 rounded-lg mr-2 ${item.type === 'work' ? 'bg-primary/10' : 'bg-secondary/10'}`}>
                              <IconWrapper Component={FiCalendar} size={16} className={item.type === 'work' ? 'text-primary' : 'text-secondary'} />
                            </div>
                            <span className="font-medium">{item.period}</span>
                          </div>
                          <div className="flex items-center text-sm text-gray-400">
                            <div className={`p-2 rounded-lg mr-2 ${item.type === 'work' ? 'bg-primary/10' : 'bg-secondary/10'}`}>
                              <IconWrapper Component={FiMapPin} size={16} className={item.type === 'work' ? 'text-primary' : 'text-secondary'} />
                            </div>
                            <span className="font-medium">{item.location}</span>
                          </div>
                        </div>
                        
                        <ul className="space-y-3">
                          {item.description.map((desc, i) => (
                            <motion.li 
                              key={i} 
                              className="text-sm text-gray-300 flex items-start"
                              initial={{ opacity: 0, x: -10 }}
                              animate={{ opacity: 1, x: 0 }}
                              transition={{ delay: i * 0.1 }}
                            >
                              <span className={`mr-3 mt-1 w-1.5 h-1.5 rounded-full flex-shrink-0 ${
                                item.type === 'work' ? 'bg-primary' : 'bg-secondary'
                              }`}></span>
                              <span className="leading-relaxed">{desc}</span>
                            </motion.li>
                          ))}
                        </ul>
                      </div>
                    </motion.div>
                  </div>
                  
                  {/* Dot */}
                  <div className="relative md:w-0 py-4 flex justify-center">
                    <motion.div className="relative">
                      {/* Pulsing ring */}
                      <motion.div
                        className="absolute inset-0 rounded-full"
                        style={{ 
                          border: '3px solid',
                          borderColor: item.type === 'work' ? '#8B5CF6' : '#EC4899'
                        }}
                        animate={{
                          scale: [1, 1.5, 1],
                          opacity: [0.5, 0, 0.5]
                        }}
                        transition={{
                          duration: 2,
                          repeat: Infinity,
                          ease: 'easeInOut'
                        }}
                      />
                      
                      {/* Main dot */}
                      <motion.div 
                        className="w-6 h-6 rounded-full border-4 z-10 relative"
                        style={{ 
                          backgroundColor: item.type === 'work' ? '#8B5CF6' : '#EC4899',
                          borderColor: '#0a0a0a',
                          boxShadow: item.type === 'work' 
                            ? '0 0 20px rgba(139, 92, 246, 0.6)' 
                            : '0 0 20px rgba(236, 72, 153, 0.6)'
                        }}
                        whileHover={{ scale: 1.3 }}
                      />
                    </motion.div>
                  </div>
                  
                  {/* Empty space for alignment */}
                  <div className="md:w-1/2"></div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Experience; 