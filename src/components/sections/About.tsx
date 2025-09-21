import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { 
  FiCode, FiDatabase, FiServer, 
  FiTool, FiGitBranch, FiMessageSquare
} from 'react-icons/fi';
import { IconWrapper } from '../../utils/IconWrapper';

const About: React.FC = () => {
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: true
  });

  const skillCategories = [
    {
      title: 'Frontend',
      icon: <IconWrapper Component={FiCode} className="w-6 h-6" />,
      skills: ['HTML', 'CSS', 'JavaScript', 'React.js', 'Vue.js', 'VS Code', 'Cursor'],
      color: 'primary'
    },
    {
      title: 'Backend',
      icon: <IconWrapper Component={FiServer} className="w-6 h-6" />,
      skills: ['Node.js', 'Express', 'Python', '.NET'],
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
      skills: ['VS Code', 'Postman', 'Docker', 'Figma'],
      color: 'accent'
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
          <motion.div variants={itemVariants} className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">About Me</h2>
            <div className="w-24 h-1 bg-primary mx-auto rounded-full mb-8"></div>
            <p className="text-gray-400 text-lg max-w-3xl mx-auto">
              I'm a junior fullstack developer recently graduated from KTH University, 
              passionate about creating intuitive web applications that focus on both 
              functionality and aesthetics. I'm eager to apply my skills and continue 
              learning in the dynamic world of software development.
            </p>
          </motion.div>

          {/* Skills Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-16">
            {skillCategories.map((category, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className="bg-dark/50 backdrop-blur-lg rounded-xl border border-gray-800 p-6 hover:border-primary/50 transition-all duration-300"
              >
                <div 
                  className="w-12 h-12 rounded-lg flex items-center justify-center mb-4"
                  style={{ 
                    backgroundColor: category.color === 'primary' ? 'rgba(139, 92, 246, 0.1)' : 
                                     category.color === 'secondary' ? 'rgba(236, 72, 153, 0.1)' : 
                                     'rgba(6, 182, 212, 0.1)',
                    color: category.color === 'primary' ? '#8B5CF6' : 
                           category.color === 'secondary' ? '#EC4899' : 
                           '#06B6D4'
                  }}
                >
                  {category.icon}
                </div>
                <h3 className="text-xl font-semibold mb-3">{category.title}</h3>
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill, skillIndex) => (
                    <span
                      key={skillIndex}
                      className="text-sm px-3 py-1 rounded-full"
                      style={{ 
                        backgroundColor: category.color === 'primary' ? 'rgba(139, 92, 246, 0.1)' : 
                                       category.color === 'secondary' ? 'rgba(236, 72, 153, 0.1)' : 
                                       'rgba(6, 182, 212, 0.1)',
                        color: category.color === 'primary' ? 'rgba(139, 92, 246, 0.9)' : 
                              category.color === 'secondary' ? 'rgba(236, 72, 153, 0.9)' : 
                              'rgba(6, 182, 212, 0.9)'
                      }}
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About; 