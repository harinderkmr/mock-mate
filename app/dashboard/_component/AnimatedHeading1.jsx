"use client";
import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const words = [
  "Dream Job",
  "Skill Assessment",
  "Interview",
  "Placements",
  "Success"
];

const AnimatedHeading1 = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % words.length);
    }, 2500);
    return () => clearInterval(interval);
  }, []);

  return (
    <h2 className="text-4xl lg:text-6xl font-bold text-center lg:text-left text-purple-500 leading-tight">
      Mock Mate,
      <div
        className="relative h-[80px] lg:h-[80px] overflow-hidden"
      >
        <AnimatePresence mode="wait">
          <motion.div
            key={words[currentIndex]}
            initial={{ y: "100%", opacity: 0 }}
            animate={{ y: "0%", opacity: 1 }}
            exit={{ y: "-100%", opacity: 0 }}
            transition={{
              duration: 0.6,
              type: "spring",
              damping: 18,
              stiffness: 120,
            }}
            className="absolute w-full text-gray-800 text-4xl lg:text-6xl"
          >
            {words[currentIndex]}
          </motion.div>
        </AnimatePresence>
      </div>
      <div>Simplified!!!</div>
    </h2>
  );
};

export default AnimatedHeading1;
