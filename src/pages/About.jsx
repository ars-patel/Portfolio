"use client";
import { motion } from "framer-motion";
import { Github, Linkedin, Instagram } from "lucide-react";
const About = () => {
  const socialLinks = [
    {
      name: "GitHub",
      url: "https://github.com/arspatel2",
      icon: <Github size={28} />,
    },
    {
      name: "LinkedIn",
      url: "https://www.linkedin.com/in/arspatel",
      icon: <Linkedin size={28} />,
    },
    {
      name: "Instagram",
      url: "https://www.instagram.com/arspatel2",
      icon: <Instagram size={28} />,
    },
  ];
  return (
    <section id="about">
      <div className="min-h-screen bg-black text-white">
        {/* Header */}
        <motion.header
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center pt-0 lg:pt-35 md:pt-40 pb-12"
        >
          <h1 className="text-5xl md:text-7xl font-bold bg-gradient-to-r from-purple-400 via-purple-300 to-purple-500 bg-clip-text text-transparent">
            Who I am?
          </h1>
        </motion.header>

        {/* Main Content */}
        <div className="max-w-4xl mx-auto px-6 pb-20">
          {/* Introduction */}
          <motion.section
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="mb-16"
          >
            <div className="text-center space-y-6">
              <p className="text-xl md:text-2xl text-gray-300 leading-relaxed">
                I'm a{" "}
                <span className="text-purple-400 font-semibold">
                  passionate student developer
                </span>{" "}
                who loves creating modern web applications. I enjoy turning
                ideas into reality through clean, efficient code.
              </p>
              <p className="text-lg md:text-xl text-gray-400 leading-relaxed">
                Currently focused on{" "}
                <span className="text-purple-400 font-medium">
                  full-stack development
                </span>
                , I'm always eager to learn new technologies and take on
                challenging projects that push my skills forward.
              </p>
            </div>
          </motion.section>

          {/* Social Links */}
          <motion.section
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="mb-16"
          >
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-purple-400 via-purple-300 to-purple-500 bg-clip-text text-transparent">
                Let's Connect
              </h2>
            </div>
            <div className="flex justify-center gap-8">
              {socialLinks.map((social, index) => (
                <motion.a
                  key={social.name}
                  href={social.url}
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
                  className="group flex flex-col items-center space-y-3"
                >
                  <div className="text-purple-300 group-hover:text-purple-200 transition-colors duration-300">
                    {social.icon}
                  </div>
                  <span className="text-sm font-medium text-gray-400 group-hover:text-purple-300 transition-colors duration-300">
                    {social.name}
                  </span>
                </motion.a>
              ))}
            </div>
          </motion.section>
        </div>

        {/* Background decoration */}
        <div className="fixed inset-0 -z-10 overflow-hidden">
          <div className="absolute -top-40 -right-40 w-80 h-80 bg-white/5 rounded-full blur-3xl"></div>
          <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-white/5 rounded-full blur-3xl"></div>
        </div>
      </div>
    </section>
  );
};

export default About;
