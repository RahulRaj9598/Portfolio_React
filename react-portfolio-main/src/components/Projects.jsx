import React from "react";
import { PROJECTS } from "../constants";
import { motion } from "framer-motion";
import { FiGithub, FiExternalLink } from 'react-icons/fi';

function Projects() {
  return (
    <div className="border-b border-neutral-900 pb-24">
      <a id="Projects">
        <motion.h1
          whileInView={{ opacity: 1, y: 0 }}
          initial={{ opacity: 0, y: -100 }}
          transition={{ delay: 0.5, duration: 1 }}
          className="my-20 text-center text-4xl font-bold bg-gradient-to-r from-purple-400 to-pink-500 bg-clip-text text-transparent"
        >
          Projects
        </motion.h1>
      </a>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 px-4">
        {PROJECTS.map((project, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="group relative bg-gray-900/30 rounded-2xl overflow-hidden backdrop-blur-md hover:bg-gray-800/40 transition-all duration-500 border border-gray-800/50"
          >
            {/* Image Container */}
            <div className="relative h-52 overflow-hidden cursor-pointer">
              <a 
                href={project.link} 
                target="_blank" 
                rel="noopener noreferrer"
                className="block h-full"
              >
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover object-center transform group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/20 to-transparent opacity-60 group-hover:opacity-40 transition-opacity duration-300" />
              </a>
            </div>

            {/* Content Container */}
            <div className="p-6 -mt-4 relative z-10 space-y-4">
              <h3 className="text-xl font-semibold text-white group-hover:text-purple-400 transition-colors duration-300">
                {project.title}
              </h3>
              
              <p className="text-gray-300 text-sm leading-relaxed">
                {project.description}
              </p>

              {/* Technologies */}
              <div className="flex flex-wrap gap-2">
                {project.technologies.map((tech, techIndex) => (
                  <span
                    key={techIndex}
                    className="px-3 py-1 text-xs font-medium rounded-full bg-purple-500/10 text-purple-300 backdrop-blur-sm"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              {/* Links */}
              <div className="flex gap-4 pt-4 items-center">
                {project.github && (
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-sm text-gray-300 hover:text-purple-400 transition-colors duration-300"
                  >
                    <FiGithub className="text-lg" />
                    <span>Source</span>
                  </a>
                )}
                {project.demo && (
                  <a
                    href={project.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-sm text-gray-300 hover:text-purple-400 transition-colors duration-300"
                  >
                    <FiExternalLink className="text-lg" />
                    <span>Demo</span>
                  </a>
                )}
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}

export default Projects;
