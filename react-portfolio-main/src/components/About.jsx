import React from 'react';
import { motion } from 'framer-motion';
import HighlightText from './HighlightText';
import gif from '../assets/about.gif';

function About() {
  return (
    <div className="relative border-b border-neutral-900 pb-16">
      {/* Background subtle gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-purple-900/5 via-transparent to-transparent pointer-events-none" />
      
      <a id="About">
        <motion.h1 
          whileInView={{opacity:1, y:0}}
          initial={{opacity:0, y:-100}}
          transition={{delay:0.5, duration:1}}
          className="py-20 text-center text-4xl font-bold"
        >
          About
          <span className="bg-gradient-to-r from-purple-400 to-pink-500 bg-clip-text text-transparent"> Me</span>
        </motion.h1>
      </a>

      <div className="flex flex-col lg:flex-row items-center gap-12 px-4 md:px-8">
        {/* Image Section */}
        <motion.div 
          whileInView={{opacity:1, x:0}}
          initial={{opacity:0, x:-100}}
          transition={{duration:0.7}}
          className="w-full lg:w-1/2"
        >
          <div className="relative group">
            <img 
              className="w-full max-w-2xl mx-auto rounded-2xl object-cover shadow-2xl shadow-purple-900/20 
                       transition-all duration-500 group-hover:shadow-purple-700/20" 
              src={gif} 
              alt="about" 
            />
            {/* Subtle overlay on hover */}
            <div className="absolute inset-0 rounded-2xl bg-gradient-to-tr from-purple-600/10 to-transparent 
                          opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
          </div>
        </motion.div>

        {/* Content Section */}
        <motion.div
          whileInView={{opacity:1, x:0}}
          initial={{opacity:0, x:100}}
          transition={{duration:0.7}}
          className="w-full lg:w-1/2"
        >
          <div className="space-y-6 lg:pr-8">
            <p className="text-xl md:text-2xl font-medium leading-relaxed text-gray-300">
              "I'm a B.Tech<HighlightText text={" CSE"} /> student at <HighlightText text={"BIT Mesra"} /> with 
              a passion for <HighlightText text={"Data Science"} />, <HighlightText text={"Machine Learning"} />, 
              and <HighlightText text={"Full Stack Web Development"} />. I was a <HighlightText text={"Top 5 Finalist"} /> at 
              Smart India Hackathon 2024, where I built REDACT, an ML-driven redaction tool showcased at IIT Kharagpur.
            </p>
            <p className="text-xl md:text-2xl font-medium leading-relaxed text-gray-300">
              I've worked on projects in <HighlightText text={"NLP"} />, synthetic data generation, and predictive modeling, 
              using tools like <HighlightText text={"Python"} />, <HighlightText text={"Scikit-learn"} />, and 
              <HighlightText text={"Hugging Face"} />. I'm also proficient in the <HighlightText text={"MERN"} /> stack, 
              building responsive, end-to-end web apps.
            </p>
            <p className="text-xl md:text-2xl font-medium leading-relaxed text-gray-300">
              With strong problem-solving skills and a drive for innovation, I aim to create impactful, 
              data-powered solutions that deliver real value."
            </p>
          </div>
        </motion.div>
      </div>
    </div>
  );
}

export default About;
