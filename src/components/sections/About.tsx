import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { 
  FiCode, FiDatabase, FiServer, 
  FiTool, FiGitBranch, FiMessageSquare, FiZap
} from 'react-icons/fi';
import { IconWrapper } from '../../utils/IconWrapper';

const About: React.FC = () => {
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: true
  });
  
  const [hoveredSkill, setHoveredSkill] = useState<number | null>(null);

  const skillCategories = [
    {
      title: 'Frontend',
      icon: <IconWrapper Component={FiCode} className="w-6 h-6" />,
      skills: ['HTML', 'CSS', 'JavaScript', 'React.js', 'Vue.js', 'Tailwind CSS', 'VS Code', 'Cursor'],
      color: 'primary'
    },
    {
      title: 'Backend',
      icon: <IconWrapper Component={FiServer} className="w-6 h-6" />,
      skills: ['Node.js', 'Express', 'Python', '.NET', 'Go Lang', 'JWT'],
      color: 'secondary'
    },
    {
      title: 'Database',
      icon: <IconWrapper Component={FiDatabase} className="w-6 h-6" />,
      skills: ['MySQL', 'MongoDB', 'Supabase', 'Firebase Cloud'],
      color: 'accent'
    },
    {
      title: 'Version Control',
      icon: <IconWrapper Component={FiGitBranch} className="w-6 h-6" />,
      skills: ['Git', 'GitHub', 'GitLab'],
      color: 'primary'
    },
    {
      title: 'Project Management',
      icon: <IconWrapper Component={FiMessageSquare} className="w-6 h-6" />,
      skills: ['Jira', 'Teamwork', 'Agile', 'Scrum'],
      color: 'secondary'
    },
    {
      title: 'Tools',
      icon: <IconWrapper Component={FiTool} className="w-6 h-6" />,
      skills: ['VS Code', 'Postman', 'Docker', 'Figma', 'Auth0'],
      color: 'accent'
    }
  ];

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.12,
        delayChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { y: 50, opacity: 0, scale: 0.9 },
    visible: {
      y: 0,
      opacity: 1,
      scale: 1,
      transition: {
        type: 'spring',
        stiffness: 100,
        damping: 12
      }
    }
  };
  
  const skillItemVariants = {
    hidden: { scale: 0, opacity: 0 },
    visible: {
      scale: 1,
      opacity: 1,
      transition: {
        type: 'spring',
        stiffness: 200,
        damping: 15
      }
    }
  };

  return (
    <section id="about" className="section-padding bg-gradient-to-b from-dark to-dark/70">
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
              <span className="text-primary text-sm font-medium">Skills & Expertise</span>
            </motion.div>
            
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-primary via-secondary to-accent">
                About Me
              </span>
            </h2>
            
            <div className="w-24 h-1.5 bg-gradient-to-r from-primary via-secondary to-accent mx-auto rounded-full mb-8"></div>
            
            <p className="text-gray-400 text-lg md:text-xl max-w-3xl mx-auto leading-relaxed">
              I'm a <span className="text-primary font-semibold">Fullstack Developer</span> recently graduated from 
              <span className="text-secondary font-semibold"> KTH University</span>, passionate about creating 
              intuitive web applications that focus on both functionality and aesthetics. I combine 
              <span className="text-accent font-semibold"> modern technologies</span> with clean code practices 
              to deliver exceptional digital experiences.
            </p>
          </motion.div>

          {/* Skills Grid */}
          <motion.div 
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
            variants={containerVariants}
          >
            {skillCategories.map((category, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className="group relative"
                onHoverStart={() => setHoveredSkill(index)}
                onHoverEnd={() => setHoveredSkill(null)}
              >
                {/* Glow effect on hover */}
                <motion.div 
                  className="absolute -inset-0.5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                  style={{
                    background: category.color === 'primary' 
                      ? 'linear-gradient(45deg, rgba(139, 92, 246, 0.3), rgba(236, 72, 153, 0.3))'
                      : category.color === 'secondary'
                      ? 'linear-gradient(45deg, rgba(236, 72, 153, 0.3), rgba(6, 182, 212, 0.3))'
                      : 'linear-gradient(45deg, rgba(6, 182, 212, 0.3), rgba(139, 92, 246, 0.3))',
                    filter: 'blur(20px)'
                  }}
                />
                
                <motion.div 
                  className="relative bg-dark/70 backdrop-blur-lg rounded-2xl border border-gray-800 p-8 h-full overflow-hidden transition-all duration-300"
                  whileHover={{ 
                    scale: 1.02,
                    borderColor: category.color === 'primary' ? '#8B5CF6' : 
                                category.color === 'secondary' ? '#EC4899' : '#06B6D4'
                  }}
                >
                  {/* Background pattern */}
                  <div className="absolute top-0 right-0 w-32 h-32 opacity-5">
                    <div className="absolute inset-0 bg-gradient-to-br from-white to-transparent rounded-full transform rotate-45"></div>
                  </div>
                  
                  {/* Icon with animation */}
                  <motion.div 
                    className="w-16 h-16 rounded-xl flex items-center justify-center mb-6 relative z-10"
                    style={{ 
                      backgroundColor: category.color === 'primary' ? 'rgba(139, 92, 246, 0.15)' : 
                                       category.color === 'secondary' ? 'rgba(236, 72, 153, 0.15)' : 
                                       'rgba(6, 182, 212, 0.15)',
                      color: category.color === 'primary' ? '#8B5CF6' : 
                             category.color === 'secondary' ? '#EC4899' : 
                             '#06B6D4'
                    }}
                    whileHover={{ rotate: [0, -10, 10, -10, 0], scale: 1.1 }}
                    transition={{ duration: 0.5 }}
                  >
                    {category.icon}
                  </motion.div>
                  
                  <h3 className="text-2xl font-bold mb-4 relative z-10 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r transition-all duration-300"
                    style={hoveredSkill === index ? {
                      backgroundImage: category.color === 'primary' 
                        ? 'linear-gradient(to right, #8B5CF6, #EC4899)'
                        : category.color === 'secondary'
                        ? 'linear-gradient(to right, #EC4899, #06B6D4)'
                        : 'linear-gradient(to right, #06B6D4, #8B5CF6)'
                    } : {}}
                  >
                    {category.title}
                  </h3>
                  
                  <motion.div 
                    className="flex flex-wrap gap-2 relative z-10"
                    variants={containerVariants}
                  >
                    {category.skills.map((skill, skillIndex) => (
                      <motion.span
                        key={skillIndex}
                        variants={skillItemVariants}
                        className="text-sm px-3 py-2 rounded-lg font-medium hover:scale-110 cursor-pointer transition-all duration-300"
                        style={{ 
                          backgroundColor: category.color === 'primary' ? 'rgba(139, 92, 246, 0.15)' : 
                                         category.color === 'secondary' ? 'rgba(236, 72, 153, 0.15)' : 
                                         'rgba(6, 182, 212, 0.15)',
                          color: category.color === 'primary' ? 'rgba(139, 92, 246, 1)' : 
                                category.color === 'secondary' ? 'rgba(236, 72, 153, 1)' : 
                                'rgba(6, 182, 212, 1)',
                          border: '1px solid',
                          borderColor: category.color === 'primary' ? 'rgba(139, 92, 246, 0.2)' : 
                                      category.color === 'secondary' ? 'rgba(236, 72, 153, 0.2)' : 
                                      'rgba(6, 182, 212, 0.2)'
                        }}
                        whileHover={{
                          backgroundColor: category.color === 'primary' ? 'rgba(139, 92, 246, 0.3)' : 
                                         category.color === 'secondary' ? 'rgba(236, 72, 153, 0.3)' : 
                                         'rgba(6, 182, 212, 0.3)',
                          borderColor: category.color === 'primary' ? 'rgba(139, 92, 246, 0.5)' : 
                                      category.color === 'secondary' ? 'rgba(236, 72, 153, 0.5)' : 
                                      'rgba(6, 182, 212, 0.5)'
                        }}
                      >
                        {skill}
                      </motion.span>
                    ))}
                  </motion.div>
                </motion.div>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default About; 