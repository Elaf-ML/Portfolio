import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { FiGithub, FiExternalLink, FiCode } from 'react-icons/fi';
import { IconWrapper } from '../../utils/IconWrapper';

interface Project {
  id: number;
  title: string;
  description: string;
  category: string;
  image: string;
  techStack: string[];
  liveUrl?: string;
  githubUrl?: string;
  status: string;
}

const Projects: React.FC = () => {
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: true
  });

  const [activeCategory, setActiveCategory] = useState('All');


  const projectsData: Project[] = [
    {
      id: 1,
      title: 'GamesHub Project',
      description: 'Is a multiplayer gaming platform where players can create lobbies, invite friends, and compete in real-time matches.',
      category: 'Fullstack Projects',
      image: './images/GamesHub.png',
      techStack: ['React', 'Node.js', 'Firebase', 'Typescript'],
      liveUrl: 'https://exam-work-ten.vercel.app/',
      githubUrl: 'https://github.com/Elaf-ML/Exam_Work',
      status: 'completed'
    },
    {
      id: 2,
      title: 'Reddit Clone',
      description: 'a fullstack social platform where users can post, comment, and vote, built with Node.js, React, Express, MongoDB, and TypeScript.',
      category: 'Fullstack Projects',
      image: './images/reddit.png',
      techStack: ['Node.js', 'React', 'Express', 'MongoDB', 'JWT'],
      liveUrl: 'https://my-reddit-clone-reddit10.vercel.app/login',
      githubUrl: 'https://github.com/Elaf-ML/my-reddit-clone-',
      status: 'completed'
    },
    {
      id: 3,
      title: 'Twitter Clone',
      description: 'Is a fullstack social media platform for posting, liking, and commenting on tweets, built with Node.js, React, Express, MongoDB, and TypeScript.',
      category: 'Fullstack Projects',
      image: './images/twitter.png',
      techStack: ['React', 'MongoDB', 'Socket.io', 'Tailwind CSS'],
      liveUrl: 'https://deploy-ompa.onrender.com/',
      githubUrl: 'https://github.com/Elaf-ML/SocialMedia',
      status: 'completed'
    },
    {
      id: 4,
      title: 'Dashboard Website',
      description: 'Currently in development and coming soon! A comprehensive e-commerce platform with advanced features for buying and selling products. Integrating modern technologies for a seamless shopping experience.',
      category: 'Fullstack Projects',
      image: './images/dashboard.png',
      techStack: ['Python', 'MongoDB', 'Node.js', 'React', 'TypeScript', 'Tailwind CSS'],
      status: 'in-progress',
    },
    {
      id: 5,
      title: 'ParkingTime Dashboard',
      description: 'Internship project for a leading parking management company in Sweden. Developed a comprehensive dashboard to streamline parking operations and improve user experience.',
      category: 'Internship Projects',
      image: './images/parkingtime.png', // Replace with actual screenshot when available
      techStack: ['Go Lang', 'JavaScript', 'React', 'Auth0', 'Python (AI)', 'MUI'],
      liveUrl: 'https://www.parkingtime.se/sv',
      status: 'completed'
    },
];

  const filteredProjects = activeCategory === 'All' 
    ? projectsData 
    : projectsData.filter(project => project.category === activeCategory);


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
    <section id="projects" className="section-padding">
      <div className="container mx-auto container-padding">
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="max-w-7xl mx-auto"
        >
       
          <motion.div variants={itemVariants} className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Previous Work & Projects</h2>
            <div className="w-24 h-1 bg-primary mx-auto rounded-full mb-8"></div>
            <p className="text-gray-400 text-lg max-w-3xl mx-auto">
              Explore my recent projects showcasing my skills in frontend and backend development.
              From web applications to API development and UI/UX design.
            </p>
          </motion.div>

   

    
          <AnimatePresence mode="wait">
            <motion.div
              key={activeCategory}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.5 }}
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
            >
              {filteredProjects.map((project) => (
                <motion.div
                  key={project.id}
                  variants={itemVariants}
                  className={`bg-dark/30 backdrop-blur-sm rounded-xl overflow-hidden border border-gray-800 hover:border-primary/30 transition-all duration-300 group ${project.status === 'in-progress' ? 'relative' : ''}`}
                >
            
                  {project.status === 'in-progress' && (
                    <div className="absolute top-4 left-4 z-10">
                      <span className="text-xs font-medium px-3 py-1 bg-secondary/80 rounded-full text-white">
                        Coming Soon
                      </span>
                    </div>
                  )}
                
                
                  <div className="relative h-52 overflow-hidden">
                    <img
                      src={project.image}
                      alt={project.title}
                      className={`w-full h-full object-cover transition-transform duration-300 group-hover:scale-110 ${project.status === 'in-progress' ? 'opacity-70' : ''}`}
                      onError={(e) => {
                        const target = e.target as HTMLImageElement;
                        target.onerror = null;
                        target.src = `https://via.placeholder.com/800x500?text=${project.title.replace(' ', '+')}`;
                      }}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-dark to-transparent opacity-60"></div>
                    
                    {/* Project Links */}
                    <div className="absolute top-4 right-4 flex gap-2 opacity-0 transform translate-y-3 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300">
                      {project.githubUrl && (
                        <a
                          href={project.githubUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="p-2 bg-dark/80 rounded-full text-white hover:bg-primary transition-colors duration-300"
                          aria-label="View on GitHub"
                        >
                          <IconWrapper Component={FiGithub} size={18} />
                        </a>
                      )}
                      {project.liveUrl && project.status !== 'in-progress' && (
                        <a
                          href={project.liveUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="p-2 bg-dark/80 rounded-full text-white hover:bg-primary transition-colors duration-300"
                          aria-label="View Live Project"
                        >
                          <IconWrapper Component={FiExternalLink} size={18} />
                        </a>
                      )}
                    </div>
                    
                    {/* Category Badge */}
                    <div className="absolute bottom-4 left-4">
                      <span className="text-xs font-medium px-3 py-1 bg-primary/80 rounded-full text-white">
                        {project.category}
                      </span>
                    </div>
                  </div>
                  
                  {/* Project Info */}
                  <div className="p-6">
                    <h3 className="text-xl font-bold mb-3 group-hover:text-primary transition-colors duration-300 flex items-center">
                      {project.title}
                      {project.status === 'in-progress' && (
                        <span className="ml-2 inline-block w-2 h-2 rounded-full bg-secondary animate-pulse"></span>
                      )}
                    </h3>
                    
                    <p className="text-gray-400 text-sm mb-5">
                      {project.description}
                    </p>
                    
                    {/* Tech Stack */}
                    <div className="flex flex-wrap gap-2">
                      {project.techStack.map((tech, index) => (
                        <span
                          key={index}
                          className="inline-flex items-center text-xs px-2 py-1 rounded bg-gray-800/50 text-gray-300"
                        >
                          <IconWrapper Component={FiCode} className="mr-1" size={10} />
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects; 