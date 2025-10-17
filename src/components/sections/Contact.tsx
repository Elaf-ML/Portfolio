import React, { useState, useRef } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { 
  FiSend, FiGithub, FiLinkedin, 
  FiMail, FiMapPin, FiPhone, FiArrowRight, 
  FiUser, FiMessageSquare, FiInfo, FiZap 
} from 'react-icons/fi';
import { IconWrapper } from '../../utils/IconWrapper';
import emailjs from '@emailjs/browser';

const Contact: React.FC = () => {
  const formRef = useRef<HTMLFormElement>(null);
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: true
  });

  // Form state
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);
  const [submitError, setSubmitError] = useState('');

  // Handle form input changes
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  // Handle form submission
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    
    // Form validation
    if (!formData.name || !formData.email || !formData.subject || !formData.message) {
      setSubmitError('Please fill in all fields');
      return;
    }
    
    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      setSubmitError('Please enter a valid email address');
      return;
    }
    
    // Reset submission states
    setIsSubmitting(true);
    setSubmitSuccess(false);
    setSubmitError('');
    
    try {
      const serviceId = 'service_vr1h2so';
      const templateId = 'template_ra0zx6i'; 
      const userId = 'zO3KwDL3bjlWDCxNd';
      
      const result = await emailjs.sendForm(
        serviceId,
        templateId,
        formRef.current!,
        userId
      );
      
      console.log('Email sent successfully:', result.text);
      
      // On successful form submission
      setSubmitSuccess(true);
      setFormData({ name: '', email: '', subject: '', message: '' });
      
      // Auto-scroll to success message
      setTimeout(() => {
        const successElement = document.getElementById('success-message');
        if (successElement) {
          successElement.scrollIntoView({ behavior: 'smooth' });
        }
      }, 100);
      
    } catch (error) {
      console.error('Error sending email:', error);
      setSubmitError('There was an error sending your message. Please try again later.');
    } finally {
      setIsSubmitting(false);
    }
  };

  // Contact info items
  const contactInfo = [
    { 
      icon: FiMapPin, 
      label: 'Location', 
      value: 'Stockholm, Sweden',
      color: 'primary' 
    },
    { 
      icon: FiMail, 
      label: 'Email', 
      value: 'elaffree85@gmail.com',
      color: 'secondary',
      link: 'mailto:elaffree85@gmail.com'
    },
    { 
      icon: FiPhone, 
      label: 'Phone', 
      value: '+46 70 47 30 660',
      color: 'accent',
      link: 'tel:+46701234567' 
    }
  ];

  // Social media links
  const socialLinks = [
    { icon: FiGithub, url: 'https://github.com/Elaf-ML', name: 'GitHub', color: '#333' },
    { icon: FiLinkedin, url: 'https://www.linkedin.com/in/elaf-alzoubi-015a6a322/', name: 'LinkedIn', color: '#0077B5' },
    { icon: FiMail, url: 'mailto:elaffree85@gmail.com', name: 'Email', color: '#D44638' }
  ];

  // Animation variants
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

  // Contact form background gradient
  const formStyles = {
    background: 'radial-gradient(circle at top right, rgba(139, 92, 246, 0.15), transparent 300px), radial-gradient(circle at bottom left, rgba(236, 72, 153, 0.1), transparent 300px)',
    boxShadow: '0 4px 60px rgba(0, 0, 0, 0.3)',
  };

  return (
    <section id="contact" className="section-padding relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-0 right-0 w-72 h-72 bg-primary opacity-5 rounded-full blur-3xl -mr-20 -mt-20"></div>
      <div className="absolute bottom-0 left-0 w-72 h-72 bg-secondary opacity-5 rounded-full blur-3xl -ml-20 -mb-20"></div>
      
      <div className="container mx-auto container-padding relative z-10">
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="max-w-6xl mx-auto"
        >
          {/* Section Header */}
          <motion.div variants={itemVariants} className="text-center mb-20">
            <motion.div 
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 mb-6"
              whileHover={{ scale: 1.05 }}
            >
              <IconWrapper Component={FiZap} className="text-primary" size={18} />
              <span className="text-primary text-sm font-medium">Let's Connect</span>
            </motion.div>
            
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-primary via-secondary to-accent">
                Get In Touch
              </span>
            </h2>
            
            <div className="w-24 h-1.5 bg-gradient-to-r from-primary via-secondary to-accent mx-auto rounded-full mb-8"></div>
            
            <p className="text-gray-400 text-lg md:text-xl max-w-3xl mx-auto leading-relaxed">
              Have a <span className="text-primary font-semibold">project in mind</span> or want to discuss 
              <span className="text-secondary font-semibold"> potential opportunities</span>? 
              Feel free to <span className="text-accent font-semibold">reach out</span>!
            </p>
          </motion.div>

          {/* Contact Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
            {/* Contact Info */}
            <motion.div
              variants={itemVariants}
              className="lg:col-span-5 space-y-10"
            >
              <div className="bg-dark/30 backdrop-blur-sm rounded-2xl border border-gray-800 p-8 hover:border-primary/50 transition-all duration-300">
                <h3 className="text-2xl font-bold mb-8 text-gradient bg-clip-text text-transparent bg-gradient-to-r from-primary to-secondary">Contact Information</h3>
                
                {/* Info Cards */}
                <div className="space-y-8">
                  {contactInfo.map((item, index) => (
                    <motion.div
                      key={index}
                      whileHover={{ x: 5 }}
                      className="flex items-start group"
                    >
                      <div className={`p-4 rounded-xl bg-${item.color}/10 text-${item.color} mr-5 shadow-lg transition-all duration-300 group-hover:scale-110`}>
                        <IconWrapper Component={item.icon} size={24} />
                      </div>
                      <div>
                        <h3 className="text-sm font-medium text-gray-400 mb-1">{item.label}</h3>
                        {item.link ? (
                          <a 
                            href={item.link} 
                            className="text-lg font-medium hover:text-primary transition-colors duration-300"
                          >
                            {item.value}
                          </a>
                        ) : (
                          <p className="text-lg font-medium">{item.value}</p>
                        )}
                      </div>
                    </motion.div>
                  ))}
                </div>
                
                {/* Social Links */}
                <div className="mt-10">
                  <h3 className="text-xl font-semibold mb-6">Find Me On</h3>
                  <div className="flex flex-wrap gap-4">
                    {socialLinks.map((link, index) => (
                      <motion.a
                        key={index}
                        href={link.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-3 rounded-xl bg-dark/50 border border-gray-800 text-gray-400 hover:text-white transition-all duration-300 shadow-lg"
                        whileHover={{ 
                          y: -5, 
                          backgroundColor: link.color,
                          borderColor: link.color,
                        }}
                        aria-label={link.name}
                      >
                        <IconWrapper Component={link.icon} size={24} />
                      </motion.a>
                    ))}
                  </div>
                </div>
              </div>
              
              {/* Availability Card */}
              <motion.div 
                className="bg-dark/30 backdrop-blur-sm rounded-2xl border border-gray-800 p-8 hover:border-primary/50 transition-all duration-300"
                whileHover={{ y: -5 }}
              >
                <div className="flex items-center mb-4">
                  <div className="w-3 h-3 rounded-full bg-green-500 mr-3 animate-pulse"></div>
                  <h3 className="text-xl font-bold">Currently Available</h3>
                </div>
                <p className="text-gray-400">
                  I'm currently available for freelance work or full-time positions. 
                  Let's create something amazing together!
                </p>
                <a 
                  href="#contact-form" 
                  className="flex items-center text-primary font-medium mt-4 hover:text-secondary transition-colors duration-300"
                >
                  Contact me now
                  <IconWrapper Component={FiArrowRight} className="ml-2" />
                </a>
              </motion.div>
            </motion.div>

            {/* Contact Form */}
            <motion.div
              variants={itemVariants}
              className="lg:col-span-7"
            >
              <div 
                className="rounded-2xl border border-gray-800 p-8 md:p-10 backdrop-blur-sm"
                id="contact-form"
                style={formStyles}
              >
                <h3 className="text-2xl font-bold mb-8">Send Me a Message</h3>
                
                {submitSuccess ? (
                  <motion.div 
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="bg-green-900/30 border border-green-700 text-green-400 p-6 rounded-xl mb-8 flex items-start"
                    id="success-message"
                  >
                    <div className="p-2 bg-green-500/20 rounded-full mr-4">
                      <IconWrapper Component={FiMessageSquare} size={24} className="text-green-400" />
                    </div>
                    <div>
                      <h4 className="font-bold text-lg mb-1">Message Sent Successfully!</h4>
                      <p>Thank you for reaching out. I'll get back to you as soon as possible.</p>
                    </div>
                  </motion.div>
                ) : null}

                {submitError ? (
                  <motion.div 
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="bg-red-900/30 border border-red-700 text-red-400 p-6 rounded-xl mb-8 flex items-start"
                  >
                    <div className="p-2 bg-red-500/20 rounded-full mr-4">
                      <IconWrapper Component={FiInfo} size={24} className="text-red-400" />
                    </div>
                    <div>
                      <h4 className="font-bold text-lg mb-1">Error</h4>
                      <p>{submitError}</p>
                    </div>
                  </motion.div>
                ) : null}

                <form ref={formRef} onSubmit={handleSubmit} className="space-y-8">
                  {/* Name & Email */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="relative">
                      <div className="absolute left-4 top-4 text-gray-500">
                        <IconWrapper Component={FiUser} />
                      </div>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        className="w-full text-black pl-12 pr-4 py-4 bg-dark/50 border border-gray-700 rounded-xl focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-transparent transition-all duration-300"
                        placeholder="Your Name"
                      />
                    </div>
                    <div className="relative">
                      <div className="absolute left-4 top-4 text-gray-500">
                        <IconWrapper Component={FiMail} />
                      </div>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className="w-full text-black pl-12 pr-4 py-4 bg-dark/50 border border-gray-700 rounded-xl focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-transparent transition-all duration-300"
                        placeholder="Your Email"
                      />
                    </div>
                  </div>

                  {/* Subject */}
                  <div className="relative">
                    <div className="absolute left-4 top-4 text-gray-500">
                      <IconWrapper Component={FiInfo} />
                    </div>
                    <input
                      type="text"
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      required
                      className="w-full text-black pl-12 pr-4 py-4 bg-dark/50 border border-gray-700 rounded-xl focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-transparent transition-all duration-300"
                      placeholder="Subject"
                    />
                  </div>

                  {/* Message */}
                  <div className="relative">
                    <div className="absolute left-4 top-4 text-gray-500">
                      <IconWrapper Component={FiMessageSquare} />
                    </div>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows={6}
                      className="w-full text-black pl-12 pr-4 py-4 bg-dark/50 border border-gray-700 rounded-xl focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-transparent resize-none transition-all duration-300"
                      placeholder="Your Message"
                    ></textarea>
                  </div>
                  
                  {/* Hidden fields for EmailJS */}
                  <input type="hidden" name="to_email" value="elaffree85@gmail.com" />

                  {/* Submit Button */}
                  <div>
                    <motion.button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full md:w-auto px-8 py-4 bg-gradient-to-r from-primary to-secondary text-white rounded-xl font-semibold flex items-center justify-center disabled:opacity-70 disabled:cursor-not-allowed shadow-lg shadow-primary/20"
                      whileHover={{ 
                        translateY: -5,
                        boxShadow: '0 10px 25px -5px rgba(139, 92, 246, 0.4)' 
                      }}
                      whileTap={{ scale: 0.95 }}
                    >
                      {isSubmitting ? (
                        <>
                          <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                          </svg>
                          Sending Message...
                        </>
                      ) : (
                        <>
                          Send Message <IconWrapper Component={FiSend} className="ml-2" />
                        </>
                      )}
                    </motion.button>
                  </div>
                </form>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact; 