import React from "react";
import { motion } from "framer-motion";
import { Github, ExternalLink } from "lucide-react";
import { projects } from "./../constant/store";

const ProjectCard = ({ project }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    whileHover={{ scale: 1.02 }}
    transition={{ duration: 0.4 }}
    className="bg-white/5 backdrop-blur-lg border border-white/10 rounded-2xl overflow-hidden shadow-lg transition group"
  >
    {/* Image */}
    <div className="relative h-48 overflow-hidden">
      <img
        src={project.image || "/images/default.png"}
        alt={project.title}
        className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-500"
      />
    </div>

    {/* Content */}
    <div className="p-5">
      <h3 className="text-center text-2xl font-bold text-purple-500 group-hover:text-purple-400 transition mb-2">
        {project.title}
      </h3>

      <p className="text-sm text-gray-300 mb-4 line-clamp-3">
        {project.description}
      </p>

      <div className="flex flex-wrap gap-2 mb-5">
        {project.tech.map((tech) => (
          <span
            key={tech}
            className="text-xs bg-purple-600/20 text-purple-300 px-2 py-1 rounded"
          >
            {tech}
          </span>
        ))}
      </div>

      <div className="flex gap-4">
        <a
          href={project.github}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 text-sm px-3 py-1.5 rounded-lg bg-gradient-to-tr from-purple-700 to-purple-500 text-white hover:opacity-90 transition"
        >
          <Github size={16} /> Code
        </a>
        <a
          href={project.live}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 text-sm px-3 py-1.5 rounded-lg bg-gradient-to-tr from-green-600 to-emerald-500 text-white hover:opacity-90 transition"
        >
          <ExternalLink size={16} /> Live
        </a>
      </div>
    </div>
  </motion.div>
);

const Projects = () => {
  return (
    <section
      id="projects"
      className="px-6 md:px-20 py-20 bg-black text-white min-h-screen"
    >
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-4xl md:text-5xl font-bold text-purple-500 mb-4">
          What I build
        </h2>
        <p className="text-gray-400 mb-12 text-sm md:text-base">
          A collection of full-stack, frontend, and backend apps I've built with
          modern tech.
        </p>

        <div className="grid gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
