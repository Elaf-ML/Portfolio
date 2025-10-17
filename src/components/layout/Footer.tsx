import React from 'react';
import { FiGithub, FiLinkedin, FiMail } from 'react-icons/fi';
import { motion } from 'framer-motion';
import { IconWrapper } from '../../utils/IconWrapper';

interface FooterProps {
  className?: string;
}

// Use the IconWrapper component
const Footer: React.FC<FooterProps> = ({ className = '' }) => {
  const currentYear = new Date().getFullYear();
  
  const socialLinks = [
    { icon: <IconWrapper Component={FiGithub} size={20} />, url: 'https://github.com/Elaf-ML', name: 'GitHub' },
    { icon: <IconWrapper Component={FiLinkedin} size={20} />, url: 'https://www.linkedin.com/in/elaf-alzoubi-015a6a322/', name: 'LinkedIn' },
    { icon: <IconWrapper Component={FiMail} size={20} />, url: 'mailto:elaffree85@gmail.com', name: 'Email' }
  ];

  const iconVariants = {
    hover: { 
      scale: 1.2, 
      y: -5,
      color: '#8B5CF6',
      transition: { 
        type: 'spring', 
        stiffness: 300 
      } 
    }
  };

  return (
    <footer className={`bg-dark py-8 border-t border-gray-800 ${className}`}>
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <p className="text-gray-400 text-sm">
              © {currentYear} Elaf Alzoubi. All rights reserved.
            </p>
          </div>
          
          <div className="flex space-x-6">
            {socialLinks.map((link, index) => (
              <motion.a
                key={index}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-primary transition-colors duration-300"
                aria-label={link.name}
                whileHover="hover"
                variants={iconVariants}
              >
                {link.icon}
              </motion.a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer; 