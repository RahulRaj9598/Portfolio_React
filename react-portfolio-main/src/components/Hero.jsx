import React from 'react'
import ProfilePic from "../assets/Hero.jpg"
import { motion } from 'framer-motion'
import Typewriter from "typewriter-effect";

const container = (delay) => ({
  hidden: {x: -100, opacity:0},
  visible: {
    x:0,
    opacity: 1,
    transition: {duration:0.5, delay},
  }
});


function Hero() {
  return (
    <div className='min-h-screen flex items-center justify-center py-16 px-4'>
      <div className='max-w-7xl w-full mx-auto'>
        <div className='grid grid-cols-1 lg:grid-cols-2 gap-8 items-center'>
          {/* Text content */}
          <motion.div 
            variants={container(0.5)}
            initial="hidden"
            animate="visible"
            className='space-y-6 text-center lg:text-left'>
            <h1 className='text-5xl lg:text-7xl font-bold bg-gradient-to-r from-purple-500 via-pink-500 to-purple-400 bg-clip-text text-transparent'>
              Rahul Raj
            </h1>
            
            <motion.span 
              variants={container(1)}
              initial="hidden"
              animate="visible"
              className='block text-3xl lg:text-5xl font-medium bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent'>
              <Typewriter
                options={{
                  strings: ["a Web Developer", "a Programmer","ML Enthusiast","Data Science Enthusiast"],
                  autoStart: true,
                  loop: true,
                  deleteSpeed: 50,
                }}
              />
            </motion.span>
          </motion.div>

          {/* Image */}
          <motion.div 
            initial={{x:100, opacity: 0}}
            animate={{x:0, opacity: 1}}
            transition={{duration: 0.5}}
            className='flex justify-center lg:justify-end'>
            <img 
              src={ProfilePic} 
              alt="Rahul Raj" 
              className='cover rounded-full shadow-2xl shadow-purple-500/20 hover:scale-105 transition-all duration-500' 
            />
          </motion.div>
        </div>
      </div>
    </div>
  )
}

export default Hero
