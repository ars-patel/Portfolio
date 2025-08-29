"use client";

import { useEffect, useState, lazy, Suspense, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { roles } from "./../constant/store";

const Lightning = lazy(() => import("../components/ui/Lightning"));
const AnimatedCounter = lazy(() => import("./AnimatedCounter"));

const Hero = () => {
  const [index, setIndex] = useState(0);
  const [lightningIntensity, setLightningIntensity] = useState(0.12);
  const [lightningSpeed, setLightningSpeed] = useState(0.3);

  const updateLightning = useCallback(() => {
    const isMobile = window.innerWidth < 768;
    setLightningIntensity(isMobile ? 0.5 : 0.12);
    setLightningSpeed(isMobile ? 1.2 : 0.3);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % roles.length);
    }, 2500);

    // Debounce resize handler to improve performance
    let debounceTimer;
    const handleResize = () => {
      clearTimeout(debounceTimer);
      debounceTimer = setTimeout(() => {
        updateLightning();
      }, 150);
    };

    updateLightning();
    window.addEventListener("resize", handleResize);

    return () => {
      clearInterval(interval);
      window.removeEventListener("resize", handleResize);
      clearTimeout(debounceTimer);
    };
  }, [updateLightning]);

  return (
    <>
      <section
        id="hero"
        className="relative overflow-hidden flex items-center justify-center h-[100vh] px-4 sm:px-6 md:px-12 xl:px-20 bg-black pb-20"
      >
        {/* Background Image */}
        <div className="absolute top-0 left-0 z-10">
          <img src="/images/bg.webp" alt="Background" fetchPriority="high"/>
        </div>

        {/* ⚡ Lightning */}
        <div className="absolute inset-0 z-0 pointer-events-none">
          <Suspense fallback={null}>
            <Lightning
              intensity={lightningIntensity}
              hue={260}
              speed={lightningSpeed}
              size={0.6}
              xOffset={1.05}
            />
          </Suspense>
          <div className="absolute inset-0 bg-black/40 backdrop-blur-sm"/>
        </div>

        {/* Gradient Overlay */}
        <div className="absolute inset-0 z-5 pointer-events-none">
          <div
            className="absolute inset-0"
            style={{
              background: `linear-gradient(to bottom, 
                rgba(0, 0, 0, 0.3) 0%, 
                rgba(0, 0, 0, 0.5) 25%, 
                rgba(0, 0, 0, 0.7) 50%, 
                rgba(0, 0, 0, 0.85) 75%, 
                rgba(0, 0, 0, 1) 100%)`,
            }}
          />
        </div>

        {/* Hero Content */}
        <div className="relative z-10 text-center max-w-2xl sm:max-w-3xl flex flex-col items-center space-y-4 sm:space-y-6 px-2">
          <h1 className="text-2xl sm:text-3xl md:text-5xl font-bold text-white min-h-[100px]">
            <span className="text-gray-300 font-light text-base sm:text-lg md:text-4xl">
              I'm a
            </span>
            <br />
            <AnimatePresence mode="wait">
              <motion.span
                key={roles[index]}
                initial={{ y: -30, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                exit={{ y: 30, opacity: 0 }}
                transition={{ duration: 0.4, ease: "easeInOut" }}
                className="text-purple-400 font-bold text-2xl sm:text-3xl md:text-5xl inline-block mt-1"
              >
                {roles[index]}
              </motion.span>
            </AnimatePresence>
          </h1>
          <p className="text-gray-300 text-sm sm:text-base md:text-lg max-w-md sm:max-w-xl px-2">
            I'm a passionate student developer who loves building modern
            websites that look great and work even better.
          </p>
          <div className="mt-2 sm:mt-4 flex flex-wrap gap-3 justify-center">
            <a href="#contact" className="hover:cursor-pointer">
              <div className="inline-block">
                <div className="px-5 py-2 sm:px-6 sm:py-2.5 bg-purple-600 hover:bg-purple-700 text-white text-sm sm:text-base rounded-lg transition duration-300">
                  Get in Touch
                </div>
              </div>
            </a>
            <a
              href="https://res.cloudinary.com/db8pzpi7i/image/upload/v1756459390/arspatel_1_ots5p9.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center gap-2 px-5 py-2 sm:px-6 sm:py-2.5 border border-purple-500 hover:bg-purple-600 hover:text-white text-purple-400 text-sm sm:text-base rounded-lg transition duration-300"
            >
              <svg
                className="w-5 h-5 transition-transform duration-300 group-hover:rotate-12 group-hover:scale-110"
                fill="none"
                stroke="currentColor"
                strokeWidth={2}
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M4 16v2a2 2 0 002 2h12a2 2 0 002-2v-2M7 10l5 5m0 0l5-5m-5 5V4"
                />
              </svg>
              <span>Resume</span>
            </a>
          </div>
        </div>
      </section>

      {/* 🔢 Animated Counter (only on large screens) */}
      <div className="hidden lg:block">
        <Suspense fallback={null}>
          <AnimatedCounter />
        </Suspense>
      </div>
    </>
  );
};

export default Hero;