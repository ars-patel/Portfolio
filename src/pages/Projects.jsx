"use client";

import React, { lazy, Suspense } from "react";
import { motion } from "framer-motion";
import { projects } from "../constant/store";

const Github = lazy(() => import("lucide-react").then(mod => ({ default: mod.Github })));
const ExternalLink = lazy(() => import("lucide-react").then(mod => ({ default: mod.ExternalLink })));

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
          A collection of full-stack, frontend, and backend apps I've built.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-6 gap-y-12">
          {projects.map((project) => {
            const { id, image, title, description, tech, github, live } = project;

            return (
              <motion.div
                key={id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.4 }}
                viewport={{ once: true }}
                className="bg-white/5 backdrop-blur-lg border border-white/10 rounded-2xl overflow-hidden shadow-lg transition group"
              >
                {/* Image */}
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={image || "/images/default.png"}
                    alt={title}
                    loading="lazy"
                    className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-500"
                  />
                </div>

                {/* Content */}
                <div className="p-5">
                  <h3 className="text-center text-2xl font-bold text-purple-500 group-hover:text-purple-400 transition mb-2">
                    {title}
                  </h3>

                  <p className="text-sm text-gray-300 mb-4 line-clamp-3">
                    {description}
                  </p>

                  <div className="flex flex-wrap gap-2 mb-5">
                    {tech.map((techItem) => (
                      <span
                        key={techItem}
                        className="text-xs bg-purple-600/20 text-purple-300 px-2 py-1 rounded"
                      >
                        {techItem}
                      </span>
                    ))}
                  </div>

                  <div className="flex gap-4">
                    <Suspense fallback={<span>...</span>}>
                      <a
                        href={github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 text-sm px-3 py-1.5 rounded-lg bg-gradient-to-tr from-purple-700 to-purple-500 text-white hover:opacity-90 transition"
                      >
                        <Github size={16} /> Code
                      </a>
                    </Suspense>
                    <Suspense fallback={<span>...</span>}>
                      <a
                        href={live}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 text-sm px-3 py-1.5 rounded-lg bg-gradient-to-tr from-green-600 to-emerald-500 text-white hover:opacity-90 transition"
                      >
                        <ExternalLink size={16} /> Live
                      </a>
                    </Suspense>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Projects;