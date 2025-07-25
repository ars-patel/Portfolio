"use client";

import React, { Suspense, lazy } from "react";
import { motion } from "framer-motion";
import { Canvas } from "@react-three/fiber";
import { skills } from "./../constant/store";

// Lazy load Particles component
const Particles = lazy(() => import("../components/Particles"));

const Skills = () => {
  return (
    <section
      id="skills"
      className="relative min-h-screen bg-black flex items-center justify-center py-10 sm:py-20 overflow-hidden"
    >
      {/* Background Particles */}
      <div className="absolute inset-0 z-0">
        <Canvas>
          <Suspense fallback={null}>
            <Particles count={0} />
          </Suspense>
        </Canvas>
      </div>

      {/* Foreground Content */}
      <div className="relative z-10 max-w-6xl w-full px-6">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <p className="text-gray-400 text-xs tracking-widest uppercase mb-4">
            I constantly try to improve
          </p>
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-purple-400 mb-20">
            My Tech Stack
          </h1>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="flex flex-wrap justify-center gap-3"
        >
          {skills.map((skill, i) => {
            const Icon = skill.icon;
            return (
              <motion.div
                key={i}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.4, delay: i * 0.02 }}
                viewport={{ once: true }}
                className="group"
              >
                <div
                  className={`flex items-center gap-2 px-4 py-2 rounded-full font-medium text-sm min-w-fit ${skill.color} ${skill.textColor}`}
                >
                  <Icon className="w-4 h-4" />
                  {skill.name}
                </div>
              </motion.div>
            );
          })}
        </motion.div>

        {/* Optional Grid Overlay */}
        <div className="absolute inset-0 pointer-events-none z-0 opacity-10">
          <div
            className="w-full h-full"
            style={{
              backgroundImage: `
                linear-gradient(rgba(255,255,255,0.08) 1px, transparent 1px),
                linear-gradient(90deg, rgba(255,255,255,0.08) 1px, transparent 1px)
              `,
              backgroundSize: "40px 40px",
            }}
          />
        </div>
      </div>
    </section>
  );
};

export default Skills;