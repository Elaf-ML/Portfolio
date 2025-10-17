import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-scroll';
import { FiArrowRight, FiGithub, FiLinkedin, FiMail, FiCode } from 'react-icons/fi';
import { IconWrapper } from '../../utils/IconWrapper';

const Hero: React.FC = () => {
  const [typedText, setTypedText] = useState('');
  const fullText = 'Fullstack Developer';
  
  // Typing animation effect
  useEffect(() => {
    let index = 0;
    let timer: NodeJS.Timeout;
    
    const startTyping = () => {
      timer = setInterval(() => {
        if (index <= fullText.length) {
          setTypedText(fullText.slice(0, index));
          index++;
        } else {
          clearInterval(timer);
        }
      }, 100);
    };
    
    startTyping();
    
    return () => {
      if (timer) clearInterval(timer);
    };
  }, []); // Empty dependency array - only run once on mount

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.2,
      }
    }
  };

  const itemVariants = {
    hidden: { y: 30, opacity: 0 },
    visible: { 
      y: 0, 
      opacity: 1,
      transition: { 
        type: 'spring',
        stiffness: 80,
        damping: 12
      }
    }
  };

  // Animated background circles
  const circles = [
    { size: '20rem', delay: 0, top: '5%', left: '10%', color: 'primary', duration: 20 },
    { size: '25rem', delay: 1, top: '50%', left: '75%', color: 'secondary', duration: 25 },
    { size: '15rem', delay: 0.5, top: '65%', left: '5%', color: 'accent', duration: 30 },
    { size: '18rem', delay: 1.5, top: '15%', left: '80%', color: 'primary', duration: 22 },
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
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          {/* Text content */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="order-2 md:order-1"
          >
            <motion.div variants={itemVariants}>
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 mb-6">
                <IconWrapper Component={FiCode} className="text-primary" size={18} />
                <span className="text-primary text-sm font-medium">Available for Hire</span>
              </div>
            </motion.div>
            
            <motion.div variants={itemVariants}>
              <h2 className="text-gray-300 text-xl md:text-2xl font-medium mb-3">
                Hello, I'm
              </h2>
            </motion.div>
            
            <motion.div variants={itemVariants}>
              <h1 className="text-5xl md:text-7xl font-bold mb-4">
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-primary via-secondary to-accent">
                  Elaf
                </span>
              </h1>
            </motion.div>
            
            <motion.div variants={itemVariants}>
              <h2 className="text-2xl md:text-4xl font-bold mb-6 text-gray-200">
                A <span className="text-primary">{typedText}</span>
                <span className="animate-pulse text-secondary">|</span>
              </h2>
            </motion.div>
            
            <motion.div variants={itemVariants}>
              <p className="text-gray-400 text-lg md:text-xl mb-8 max-w-lg leading-relaxed">
                Software Engineer from <span className="text-primary font-semibold">KTH University</span>, specializing in building exceptional digital experiences with modern technologies. Passionate about clean code, user experience, and innovative solutions.
              </p>
            </motion.div>
            
            <motion.div variants={itemVariants} className="flex flex-wrap gap-4 mb-8">
              <Link
                to="projects"
                spy={true}
                smooth={true}
                offset={-50}
                duration={500}
              >
                <button className="group px-8 py-4 bg-gradient-to-r from-primary to-secondary rounded-xl font-semibold text-white shadow-lg hover:shadow-xl hover:shadow-primary/50 transition-all duration-300 flex items-center gap-2 hover:scale-105">
                  View My Work 
                  <IconWrapper Component={FiArrowRight} className="group-hover:translate-x-1 transition-transform" />
                </button>
              </Link>
              <Link
                to="contact"
                spy={true}
                smooth={true}
                offset={-50}
                duration={500}
              >
                <button className="px-8 py-4 bg-dark/50 backdrop-blur-sm border-2 border-primary/30 rounded-xl font-semibold text-white hover:bg-primary/10 hover:border-primary transition-all duration-300 flex items-center gap-2 hover:scale-105">
                  <IconWrapper Component={FiMail} />
                  Get In Touch
                </button>
              </Link>
            </motion.div>
            
            <motion.div variants={itemVariants} className="flex gap-4">
              <a 
                href="https://github.com/Elaf-ML" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-12 h-12 rounded-full bg-dark/50 backdrop-blur-sm border border-gray-700 flex items-center justify-center hover:border-primary hover:bg-primary/10 transition-all duration-300 hover:scale-110"
              >
                <IconWrapper Component={FiGithub} size={20} />
              </a>
              <a 
                href="https://linkedin.com/in/yourprofile" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-12 h-12 rounded-full bg-dark/50 backdrop-blur-sm border border-gray-700 flex items-center justify-center hover:border-primary hover:bg-primary/10 transition-all duration-300 hover:scale-110"
              >
                <IconWrapper Component={FiLinkedin} size={20} />
              </a>
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
              {/* Animated glow ring */}
              <motion.div 
                className="absolute inset-0 rounded-full"
                animate={{
                  boxShadow: [
                    '0 0 60px 15px rgba(139, 92, 246, 0.3)',
                    '0 0 80px 25px rgba(236, 72, 153, 0.3)',
                    '0 0 60px 15px rgba(139, 92, 246, 0.3)',
                  ]
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: 'easeInOut'
                }}
              />
              
              <div className="relative w-72 h-72 md:w-96 md:h-96">
                {/* Decorative ring */}
                <motion.div 
                  className="absolute inset-0 rounded-full border-4 border-primary/30"
                  animate={{ rotate: 360 }}
                  transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
                >
                  <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 w-4 h-4 rounded-full bg-primary shadow-lg shadow-primary/50"></div>
                  <div className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2 w-4 h-4 rounded-full bg-secondary shadow-lg shadow-secondary/50"></div>
                </motion.div>
                
                {/* Image container */}
                <div className="absolute inset-4 rounded-full overflow-hidden border-4 border-gradient-to-br from-primary via-secondary to-accent shadow-2xl">
                  <img 
                    src="./images/Hero_Pic.png"
                    alt="Elaf - Fullstack Developer" 
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
              
              {/* Floating tech badges */}
              <motion.div
                className="absolute -top-2 -left-6 px-4 py-2 rounded-xl bg-dark/90 backdrop-blur-sm border border-primary/30 shadow-lg"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 1.2, duration: 0.5 }}
                whileHover={{ scale: 1.05 }}
              >
                <p className="text-sm text-primary font-semibold flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></span>
                  React
                </p>
              </motion.div>
              
              <motion.div
                className="absolute -bottom-4 -left-4 px-4 py-2 rounded-xl bg-dark/90 backdrop-blur-sm border border-secondary/30 shadow-lg"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 1.4, duration: 0.5 }}
                whileHover={{ scale: 1.05 }}
              >
                <p className="text-sm text-secondary font-semibold flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></span>
                  Node.js
                </p>
              </motion.div>
              
              <motion.div
                className="absolute -top-4 -right-6 px-4 py-2 rounded-xl bg-dark/90 backdrop-blur-sm border border-accent/30 shadow-lg"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 1.6, duration: 0.5 }}
                whileHover={{ scale: 1.05 }}
              >
                <p className="text-sm text-accent font-semibold flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></span>
                  MongoDB
                </p>
              </motion.div>
              
              <motion.div
                className="absolute -bottom-2 -right-8 px-4 py-2 rounded-xl bg-dark/90 backdrop-blur-sm border border-primary/30 shadow-lg"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 1.8, duration: 0.5 }}
                whileHover={{ scale: 1.05 }}
              >
                <p className="text-sm text-primary font-semibold flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></span>
                  TypeScript
                </p>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero; 