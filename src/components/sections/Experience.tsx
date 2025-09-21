import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { FiBriefcase, FiCalendar, FiMapPin, FiBook } from 'react-icons/fi';
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
        staggerChildren: 0.1,
        delayChildren: 0.3
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: 'spring',
        stiffness: 50
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
          <motion.div variants={itemVariants} className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Experience & Education</h2>
            <div className="w-24 h-1 bg-primary mx-auto rounded-full mb-8"></div>
            <p className="text-gray-400 text-lg max-w-3xl mx-auto">
              My professional journey and educational background that have shaped my skills and expertise.
            </p>
          </motion.div>

          {/* Timeline */}
          <div className="relative">
            {/* Center line */}
            <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-gray-800 rounded"></div>
            
            {/* Timeline items */}
            <div className="space-y-12">
              {timelineData.map((item, index) => (
                <motion.div 
                  key={item.id}
                  variants={itemVariants}
                  className={`flex flex-col md:flex-row items-center ${
                    index % 2 === 0 ? 'md:flex-row-reverse' : ''
                  }`}
                >
                  {/* Content */}
                  <div className="md:w-1/2 p-4">
                    <div className={`p-6 rounded-xl bg-dark/50 backdrop-blur-sm border border-gray-800 shadow-lg ${
                      item.type === 'work' ? 'hover:border-primary/50' : 'hover:border-secondary/50'
                    } transition-all duration-300`}>
                      <div className="flex items-center mb-3">
                        <div 
                          className="p-3 rounded-lg mr-3"
                          style={{ 
                            backgroundColor: item.type === 'work' ? 'rgba(139, 92, 246, 0.1)' : 'rgba(236, 72, 153, 0.1)',
                            color: item.type === 'work' ? '#8B5CF6' : '#EC4899'
                          }}
                        >
                          {item.type === 'work' ? <IconWrapper Component={FiBriefcase} /> : <IconWrapper Component={FiBook} />}
                        </div>
                        <div>
                          <h3 className="text-xl font-bold">{item.title}</h3>
                          <p className="text-gray-400">
                            {item.type === 'work' ? item.company : item.institution}
                          </p>
                        </div>
                      </div>
                      
                      <div className="space-y-3 mb-4">
                        <div className="flex items-center text-sm text-gray-400">
                          <IconWrapper Component={FiCalendar} className="mr-2" />
                          <span>{item.period}</span>
                        </div>
                        <div className="flex items-center text-sm text-gray-400">
                          <IconWrapper Component={FiMapPin} className="mr-2" />
                          <span>{item.location}</span>
                        </div>
                      </div>
                      
                      <ul className="space-y-2">
                        {item.description.map((desc, i) => (
                          <li key={i} className="text-sm text-gray-300 flex">
                            <span className="mr-2">•</span>
                            <span>{desc}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                  
                  {/* Dot */}
                  <div className="relative md:w-0 py-4 flex justify-center">
                    <div 
                      className="w-6 h-6 rounded-full border-4 z-10"
                      style={{ 
                        backgroundColor: item.type === 'work' ? '#8B5CF6' : '#EC4899',
                        borderColor: item.type === 'work' ? 'rgba(139, 92, 246, 0.3)' : 'rgba(236, 72, 153, 0.3)'
                      }}
                    ></div>
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