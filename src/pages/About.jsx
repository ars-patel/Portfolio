"use client";

import { motion } from "framer-motion";
import { lazy, Suspense } from "react";

// Lazy load Lucide icon components (not elements)
const Github = lazy(() => import("lucide-react").then((mod) => ({ default: mod.Github })));
const Linkedin = lazy(() => import("lucide-react").then((mod) => ({ default: mod.Linkedin })));
const Instagram = lazy(() => import("lucide-react").then((mod) => ({ default: mod.Instagram })));

// Store components, not rendered elements
const socialLinks = [
  { name: "GitHub", url: "https://github.com/ars-patel", IconComponent: Github },
  { name: "LinkedIn", url: "https://linkedin.com/in/arskumar-patel-1395a12a3", IconComponent: Linkedin },
  { name: "Instagram", url: "https://www.instagram.com/arspatel2", IconComponent: Instagram },
];

const About = () => {
  return (
    <section id="about" className="min-h-screen bg-black text-white relative pt-25 pb-30">
      {/* Header */}
      <motion.header
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-center pt-24 pb-12"
      >
        <h1 className="text-5xl md:text-7xl font-bold bg-gradient-to-r from-purple-400 via-purple-300 to-purple-500 bg-clip-text text-transparent">
          Who I am?
        </h1>
      </motion.header>

      {/* Main content */}
      <div className="max-w-4xl mx-auto px-6 pb-20 text-center space-y-14">
        {/* Intro */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="space-y-6"
        >
          <p className="text-xl md:text-2xl text-gray-300 leading-relaxed">
            I'm a{" "}
            <span className="text-purple-400 font-semibold">
              passionate student developer
            </span>{" "}
            who loves creating modern web applications. I enjoy turning ideas into reality through clean, efficient code.
          </p>
          <p className="text-lg md:text-xl text-gray-400 leading-relaxed">
            Currently focused on{" "}
            <span className="text-purple-400 font-medium">
              full-stack development
            </span>
            , I'm always eager to learn new technologies and take on challenging projects that push my skills forward.
          </p>
        </motion.div>

        {/* Social Links */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <h2 className="text-4xl font-bold mb-8 bg-gradient-to-r from-purple-400 via-purple-300 to-purple-500 bg-clip-text text-transparent">
            Let's Connect
          </h2>
          <div className="flex justify-center gap-10">
            {socialLinks.map(({ name, url, IconComponent }, index) => (
              <Suspense
                key={name}
                fallback={
                  <div className="w-10 h-10 bg-purple-800 rounded-full animate-pulse" />
                }
              >
                <motion.a
                  href={url}
                  target="_blank"
                  rel="noopener noreferrer"
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, delay: 0.6 + index * 0.15 }}
                  whileHover={{
                    scale: 1.1,
                    boxShadow: "0 0 30px rgba(147, 51, 234, 0.4)",
                  }}
                  whileTap={{ scale: 0.95 }}
                  className="group flex flex-col items-center space-y-2"
                >
                  <div className="text-purple-300 group-hover:text-purple-200 transition-colors duration-300">
                    <IconComponent size={28} />
                  </div>
                  <span className="text-sm font-medium text-gray-400 group-hover:text-purple-300 transition-colors duration-300">
                    {name}
                  </span>
                </motion.a>
              </Suspense>
            ))}
          </div>
        </motion.div>
      </div>

      {/* Subtle background lights */}
      <div className="fixed inset-0 -z-10 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-white/5 rounded-full blur-3xl"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-white/5 rounded-full blur-3xl"></div>
      </div>
    </section>
  );
};

export default About;