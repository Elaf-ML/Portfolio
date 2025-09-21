import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-scroll';
import { FiArrowRight } from 'react-icons/fi';
import { IconWrapper } from '../../utils/IconWrapper';

const Hero: React.FC = () => {
  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
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
        stiffness: 100,
        damping: 10
      }
    }
  };

  // Animated background circles
  const circles = [
    { size: '8rem', delay: 0, top: '10%', left: '15%', color: 'primary', duration: 20 },
    { size: '12rem', delay: 2, top: '60%', left: '80%', color: 'secondary', duration: 25 },
    { size: '6rem', delay: 1, top: '70%', left: '10%', color: 'accent', duration: 30 },
    { size: '10rem', delay: 3, top: '20%', left: '70%', color: 'primary', duration: 22 },
  ];

  return (
    <section id="hero" className="relative h-screen flex items-center overflow-hidden">
      {/* Animated background circles */}
      {circles.map((circle, index) => (
        <motion.div
          key={index}
          className="absolute rounded-full opacity-10"
          style={{ 
            width: circle.size, 
            height: circle.size, 
            top: circle.top, 
            left: circle.left,
            filter: 'blur(50px)',
            backgroundColor: circle.color === 'primary' ? '#8B5CF6' : 
                             circle.color === 'secondary' ? '#EC4899' : 
                             '#06B6D4'
          }}
          initial={{ scale: 0 }}
          animate={{ 
            scale: 1,
            x: [0, 50, 0, -50, 0],
            y: [0, -30, 0, 30, 0],
          }}
          transition={{ 
            scale: { delay: circle.delay, duration: 2 },
            x: { repeat: Infinity, duration: circle.duration, ease: 'linear' },
            y: { repeat: Infinity, duration: circle.duration * 1.2, ease: 'linear' },
          }}
        />
      ))}

      <div className="container mx-auto px-4 z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          {/* Text content */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="order-2 md:order-1"
          >
            <motion.div variants={itemVariants}>
              <h2 className="text-primary text-xl md:text-2xl font-medium mb-2">
                Hello there 👋
              </h2>
            </motion.div>
            
            <motion.div variants={itemVariants}>
              <h1 className="text-4xl md:text-6xl font-bold mb-6">
                I'm <span className="text-gradient bg-clip-text text-transparent bg-gradient-to-r from-primary to-secondary">Elaf </span> 
                <br />A Junior Fullstack Developer
              </h1>
            </motion.div>
            
            <motion.div variants={itemVariants}>
              <p className="text-gray-400 text-lg md:text-xl mb-8 max-w-lg">
                Recently graduated as a Software Engineer from KTH University, with a passion for building exceptional digital experiences that combine stunning design with powerful functionality.
              </p>
            </motion.div>
            
            <motion.div variants={itemVariants}>
              <Link
                to="projects"
                spy={true}
                smooth={true}
                offset={-50}
                duration={500}
              >
                <button className="btn-primary flex items-center">
                  View My Work <IconWrapper Component={FiArrowRight} className="ml-2" />
                </button>
              </Link>
            </motion.div>
          </motion.div>
          
          {/* Profile image */}
          <motion.div
            className="order-1 md:order-2 flex justify-center"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div className="relative">
              <div className="w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden border-4 border-primary shadow-xl">
                {/* Replace with your actual image */}
                <img 
                  src="./images/Hero_Pic.png"
                  alt="Emad - Fullstack Developer" 
                  className="w-full h-full object-cover"
                />
              </div>
              
              {/* Tech stack pill */}
              <motion.div
                className="absolute -bottom-5 -right-5 bg-dark px-4 py-2 rounded-full border border-gray-700 shadow-lg"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1, duration: 0.5 }}
              >
                <p className="text-sm text-primary font-medium">React • Node • MongoDB</p>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero; 