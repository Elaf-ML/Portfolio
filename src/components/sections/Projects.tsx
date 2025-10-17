import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { FiGithub, FiExternalLink, FiCode, FiLink2, FiZap } from 'react-icons/fi';
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
  relatedTo?: number;
}

const Projects: React.FC = () => {
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: true
  });

  const [activeCategory] = useState('All');


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
      description: 'Admin dashboard for the Ecom Website, featuring comprehensive analytics, product management, order tracking, and data visualization. Built with modern technologies for seamless performance and administrative control.',
      category: 'Fullstack Projects',
      image: './images/Dashboard.png',
      techStack: ['Python', 'MongoDB', 'Node.js', 'React', 'TypeScript', 'Tailwind CSS'],
      liveUrl: 'https://dashboard-psi-five-88.vercel.app/',
      status: 'completed',
      relatedTo: 5,
    },
    {
      id: 5,
      title: 'Ecom Website',
      description: 'A modern e-commerce platform featuring product listings, shopping cart functionality, and seamless checkout experience. Built with responsive design for optimal user experience across all devices.',
      category: 'Fullstack Projects',
      image: './images/ecom.png',
      techStack: ['React', 'TypeScript', 'Tailwind CSS', 'Node.js'],
      liveUrl: 'https://syria-site.vercel.app/',
      status: 'completed',
      relatedTo: 4,
    },
    {
      id: 6,
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
        staggerChildren: 0.15,
        delayChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { y: 50, opacity: 0, scale: 0.95 },
    visible: {
      y: 0,
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
    <section id="projects" className="section-padding">
      <div className="container mx-auto container-padding">
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="max-w-7xl mx-auto"
        >
       
          <motion.div variants={itemVariants} className="text-center mb-20">
            <motion.div 
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 mb-6"
              whileHover={{ scale: 1.05 }}
            >
              <IconWrapper Component={FiZap} className="text-primary" size={18} />
              <span className="text-primary text-sm font-medium">Portfolio Showcase</span>
            </motion.div>
            
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-primary via-secondary to-accent">
                Featured Projects
              </span>
            </h2>
            
            <div className="w-24 h-1.5 bg-gradient-to-r from-primary via-secondary to-accent mx-auto rounded-full mb-8"></div>
            
            <p className="text-gray-400 text-lg md:text-xl max-w-3xl mx-auto leading-relaxed">
              Explore my recent projects showcasing <span className="text-primary font-semibold">fullstack development</span> expertise.
              From modern <span className="text-secondary font-semibold">web applications</span> to comprehensive 
              <span className="text-accent font-semibold"> e-commerce solutions</span>.
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
                  className="group relative"
                >
                  {/* Glow effect on hover */}
                  <motion.div 
                    className="absolute -inset-0.5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                    style={{
                      background: project.relatedTo
                        ? 'linear-gradient(45deg, rgba(139, 92, 246, 0.4), rgba(236, 72, 153, 0.4))'
                        : 'linear-gradient(45deg, rgba(139, 92, 246, 0.2), rgba(6, 182, 212, 0.2))',
                      filter: 'blur(20px)'
                    }}
                  />
                  
                  <motion.div
                    className={`relative bg-dark/70 backdrop-blur-lg rounded-2xl overflow-hidden border transition-all duration-300 ${
                      project.relatedTo 
                        ? 'border-primary/50 hover:border-primary shadow-lg shadow-primary/10' 
                        : 'border-gray-800 hover:border-primary/50'
                    }`}
                    whileHover={{ y: -8, scale: 1.02 }}
                  >
            
                  {project.status === 'in-progress' && (
                    <div className="absolute top-4 left-4 z-10">
                      <span className="text-xs font-medium px-3 py-1 bg-secondary/80 rounded-full text-white">
                        Coming Soon
                      </span>
                    </div>
                  )}
                  
                  {/* Related Project Badge */}
                  {project.relatedTo && (
                    <div className="absolute top-4 left-4 z-10">
                      <span className="text-xs font-medium px-3 py-1 bg-gradient-to-r from-primary to-secondary rounded-full text-white flex items-center gap-1 shadow-lg">
                        <IconWrapper Component={FiLink2} size={12} />
                        Related: {projectsData.find(p => p.id === project.relatedTo)?.title || 'Project'}
                      </span>
                    </div>
                  )}
                
                
                  <div className="relative h-64 overflow-hidden">
                    <motion.img
                      src={project.image}
                      alt={project.title}
                      className={`w-full h-full object-cover ${project.status === 'in-progress' ? 'opacity-70' : ''}`}
                      whileHover={{ scale: 1.1 }}
                      transition={{ duration: 0.5 }}
                      onError={(e) => {
                        const target = e.target as HTMLImageElement;
                        target.onerror = null;
                        target.src = `https://via.placeholder.com/800x500?text=${project.title.replace(' ', '+')}`;
                      }}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-dark via-dark/50 to-transparent opacity-80 group-hover:opacity-60 transition-opacity duration-300"></div>
                    
                    {/* Overlay on hover */}
                    <motion.div 
                      className="absolute inset-0 bg-gradient-to-br from-primary/20 via-secondary/20 to-accent/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                    />
                    
                    {/* Project Links */}
                    <div className="absolute top-4 right-4 flex gap-3 opacity-0 transform translate-y-3 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300 z-20">
                      {project.githubUrl && (
                        <motion.a
                          href={project.githubUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="p-3 bg-dark/90 backdrop-blur-sm rounded-xl text-white border border-gray-700 hover:border-primary hover:bg-primary/20 transition-all duration-300 shadow-lg"
                          aria-label="View on GitHub"
                          whileHover={{ scale: 1.1, rotate: 5 }}
                          whileTap={{ scale: 0.95 }}
                        >
                          <IconWrapper Component={FiGithub} size={20} />
                        </motion.a>
                      )}
                      {project.liveUrl && project.status !== 'in-progress' && (
                        <motion.a
                          href={project.liveUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="p-3 bg-gradient-to-r from-primary to-secondary rounded-xl text-white shadow-lg hover:shadow-xl hover:shadow-primary/50 transition-all duration-300"
                          aria-label="View Live Project"
                          whileHover={{ scale: 1.1, rotate: -5 }}
                          whileTap={{ scale: 0.95 }}
                        >
                          <IconWrapper Component={FiExternalLink} size={20} />
                        </motion.a>
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
                  <div className="p-7">
                    <h3 className="text-2xl font-bold mb-3 flex items-center group-hover:bg-clip-text group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-primary group-hover:to-secondary transition-all duration-300">
                      {project.title}
                      {project.status === 'in-progress' && (
                        <span className="ml-2 inline-block w-2 h-2 rounded-full bg-secondary animate-pulse"></span>
                      )}
                    </h3>
                    
                    <p className="text-gray-400 text-sm leading-relaxed mb-6">
                      {project.description}
                    </p>
                    
                    {/* Tech Stack */}
                    <div className="flex flex-wrap gap-2">
                      {project.techStack.map((tech, index) => (
                        <motion.span
                          key={index}
                          className="inline-flex items-center text-xs px-3 py-1.5 rounded-lg bg-primary/10 text-primary border border-primary/20 font-medium hover:bg-primary/20 hover:border-primary/40 cursor-pointer transition-all duration-300"
                          whileHover={{ scale: 1.05, y: -2 }}
                          initial={{ opacity: 0, scale: 0.8 }}
                          animate={{ opacity: 1, scale: 1 }}
                          transition={{ delay: index * 0.05 }}
                        >
                          <IconWrapper Component={FiCode} className="mr-1.5" size={12} />
                          {tech}
                        </motion.span>
                      ))}
                    </div>
                  </div>
                  </motion.div>
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