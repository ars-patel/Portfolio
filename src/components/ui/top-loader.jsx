// src/components/ui/TopLoader.jsx
import React, { useEffect, useState, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";

const TopLoader = ({ isLoading, duration = 2, color = "#8b5cf6", height = 4 }) => {
  const [progress, setProgress] = useState(0);
  const intervalRef = useRef(null);
  const pauseRef = useRef(false);

  useEffect(() => {
    if (isLoading) {
      let percent = 0;
      setProgress(0);

      intervalRef.current = setInterval(() => {
        if (pauseRef.current) return;

        percent += 5 + Math.random() * 10;

        // Pause at ~33% for 0.2s
        if (percent >= 33 && percent < 36) {
          pauseRef.current = true;
          setTimeout(() => (pauseRef.current = false), 200);
        }

        setProgress(Math.min(percent, 95));
      }, (duration * 1000) / 30);
    } else {
      setProgress(100);
      setTimeout(() => setProgress(0), 500);
    }

    return () => clearInterval(intervalRef.current);
  }, [isLoading, duration]);

  return (
    <AnimatePresence>
      {progress > 0 && (
        <motion.div
          key="top-loader"
          initial={{ width: "0%" }}
          animate={{ width: `${progress}%` }}
          exit={{ opacity: 0 }}
          transition={{ ease: "easeInOut", duration: 1.2 }}
          style={{
            height,
            backgroundColor: color,
          }}
          className="fixed top-0 left-0 right-0 z-[9999]"
        />
      )}
    </AnimatePresence>
  );
};

export default TopLoader;