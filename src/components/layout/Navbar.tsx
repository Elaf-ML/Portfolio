import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-scroll';
import { FiMenu, FiX, FiHome, FiUser, FiCode, FiBriefcase, FiMail } from 'react-icons/fi';
import { IconWrapper } from '../../utils/IconWrapper';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // Check if page is scrolled
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Navigation items
  const navItems = [
    { name: 'Home', to: 'hero', offset: 0, icon: FiHome },
    { name: 'About', to: 'about', offset: -50, icon: FiUser },
    { name: 'Projects', to: 'projects', offset: -50, icon: FiCode },
    { name: 'Experience', to: 'experience', offset: -50, icon: FiBriefcase },
    { name: 'Contact', to: 'contact', offset: -50, icon: FiMail },
  ];

  // Animation variants for top dropdown
  const mobileMenuVariants = {
    closed: { opacity: 0, y: '-100%' },
    open: { opacity: 1, y: 0, transition: { duration: 0.5 } }
  };

  const navItemVariants = {
    hover: { scale: 1.1, color: '#8B5CF6', transition: { duration: 0.2 } }
  };

  return (
    <>
      {/* Mobile menu button - fixed at top left */}
      <div className={`md:hidden fixed top-0 ${isOpen ? 'left-[-100px]' : 'left-0'} z-50 p-4 transition-all duration-300`}>
        <button 
          onClick={() => setIsOpen(true)}
          className={`text-light focus:outline-none p-2 rounded-full ${scrolled ? 'bg-dark/80' : 'bg-transparent'}`}
          aria-label="Open menu"
        >
          <IconWrapper Component={FiMenu} size={24} />
        </button>
      </div>

      {/* Desktop sidebar - fixed on left */}
      <nav className={`fixed left-0 top-0 h-full z-40 hidden md:block ${scrolled ? 'bg-dark/80 backdrop-blur-lg' : 'bg-dark/50 backdrop-blur-sm'} transition-all duration-300 w-16 hover:w-64 group`}>
        <div className="flex flex-col items-center justify-center h-full w-full">
          <div className="flex flex-col items-center space-y-10 py-8 w-full">
            {navItems.map((item, index) => (
              <motion.div
                key={item.name}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.1 * index, duration: 0.5 }}
                className="w-full"
              >
                <Link
                  to={item.to}
                  spy={true}
                  smooth={true}
                  offset={item.offset}
                  duration={500}
                  className="flex items-center px-4 py-3 cursor-pointer transition-all duration-300 hover:bg-primary/10 relative"
                  activeClass="text-primary border-l-4 border-primary bg-primary/5"
                >
                  <IconWrapper Component={item.icon} size={20} className="min-w-[20px]" />
                  <motion.span
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    className="ml-4 font-medium overflow-hidden whitespace-nowrap transition-all duration-300 opacity-0 group-hover:opacity-100 w-0 group-hover:w-auto"
                    variants={navItemVariants}
                  >
                    {item.name}
                  </motion.span>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </nav>

      {/* Mobile menu overlay - drops from top */}
      <motion.div
        className="md:hidden fixed top-0 left-0 w-full h-screen bg-white text-dark backdrop-blur-lg flex flex-col z-40"
        variants={mobileMenuVariants}
        initial="closed"
        animate={isOpen ? "open" : "closed"}
      >
        <div className="flex flex-col items-center justify-center h-full px-6 pt-16">
          <div className="flex flex-col  space-y-8 w-full max-w-sm mx-auto">
            {navItems.map((item, index) => (
              <motion.div
                key={item.name}
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 * index, duration: 0.4 }}
                whileHover="hover"
                className="w-full"
              >
                <Link
                  to={item.to}
                  spy={true}
                  smooth={true}
                  offset={item.offset}
                  duration={500}
                  className="flex items-center justify-center py-4 text-xl font-medium cursor-pointer text-black"
                  activeClass="text-primary"
                  onClick={() => setIsOpen(false)}
                >
                  <IconWrapper Component={item.icon} size={24} className="mr-4 text-black" />
                  <motion.span variants={navItemVariants}>
                    {item.name}
                  </motion.span>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
        
        <button 
          onClick={() => setIsOpen(false)}
          className="absolute top-4 right-4 text-black hover:text-primary transition-colors p-2"
          aria-label="Close menu"
        >
          <IconWrapper Component={FiX} size={28} />
        </button>
      </motion.div>
    </>
  );
};

export default Navbar; 