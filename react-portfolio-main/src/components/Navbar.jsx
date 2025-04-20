import React, { useEffect } from 'react';
import { FaLinkedin, FaGithub } from 'react-icons/fa';
import { motion } from 'framer-motion';
import { AiOutlineUser, AiOutlineFundProjectionScreen, AiOutlineAudit } from "react-icons/ai";
import { GrTechnology } from "react-icons/gr";
import { TiContacts } from "react-icons/ti";

function Navbar() {
  useEffect(() => {
    
    const smoothScrollToSection = (e) => {
      e.preventDefault(); 
      const targetId = e.currentTarget.getAttribute('href').substring(1); // Get target ID without #
      const element = document.getElementById(targetId);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    };

    // Add event listeners on component mount
    const links = document.querySelectorAll('a[href^="#"]');
    links.forEach(link => {
      link.addEventListener('click', smoothScrollToSection);
    });

    // Clean up event listeners on component unmount
    return () => {
      links.forEach(link => {
        link.removeEventListener('click', smoothScrollToSection);
      });
    };
  }, []); 

  return (
    <nav className='h-16 mb-8 backdrop-blur-md bg-opacity-30 bg-gray-900 fixed top-0 left-0 right-0 z-50 px-4 md:px-8 lg:px-16 flex items-center justify-between'>
      {/* Logo section */}
      <div className='flex items-center'>
        <a href="/">
          <motion.h1 
            initial={{ x: -100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.5, delay: 1 }}
            className='font-bold text-3xl bg-gradient-to-r from-purple-500 to-pink-500 bg-clip-text text-transparent'>
            Rr
          </motion.h1>
        </a>
      </div>

      {/* Navigation items */}
      <motion.div 
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 1, delay: 1 }}
        className='flex gap-4 text-sm items-center'>
        <a href="#Tech" className='group flex flex-col items-center transition-all duration-200'>
          <GrTechnology size={20} className='group-hover:text-purple-500'/>
          <h3 className='text-xs font-medium opacity-80 group-hover:opacity-100'>Tech</h3>
        </a>

        <a href="#About" className='group flex flex-col items-center transition-all duration-200'>
          <AiOutlineUser size={20} className="group-hover:text-purple-500" />
          <h3 className='text-xs font-medium opacity-80 group-hover:opacity-100'>About</h3>
        </a>

        <a href="#Projects" className='group flex flex-col items-center transition-all duration-200'>
          <AiOutlineFundProjectionScreen size={20} className="group-hover:text-purple-500" />
          <h3 className='text-xs font-medium opacity-80 group-hover:opacity-100'>Projects</h3>
        </a>

        <a href="#Contact" className='group flex flex-col items-center transition-all duration-200'>
          <TiContacts size={20} className="group-hover:text-purple-500" />
          <h3 className='text-xs font-medium opacity-80 group-hover:opacity-100'>Contact</h3>
        </a>

        <a href="https://drive.google.com/file/d/1E0pIioEG3kO0tLqvG-lNz1dA97Kw0HcW/view?usp=drive_link" target='_blank' className='group flex flex-col items-center transition-all duration-200'>
          <AiOutlineAudit size={20} className="group-hover:text-purple-500" />
          <h3 className='text-xs font-medium opacity-80 group-hover:opacity-100'>Resume</h3>
        </a>
      </motion.div>

      {/* Social icons */}
      <motion.div 
        initial={{ x: 100, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 1, delay: 1 }}
        className='flex items-center gap-4 text-xl'>
        <div className='flex cursor-pointer hover:scale-150 hover:text-purple-700 transition-all duration-200'>
          <a href="https://www.linkedin.com/in/rahulrajbit" target='_blank'>
            <FaLinkedin size={20}/>
          </a>
        </div>
        <div className='flex cursor-pointer hover:scale-150 hover:text-purple-700 transition-all duration-200'>
          <a href="https://www.github.com/Rahulraj9598" target='_blank'>
            <FaGithub size={20}/>
          </a>
        </div>
      </motion.div>
    </nav>
  );
}

export default Navbar;
