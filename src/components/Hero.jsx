// src/components/Hero.jsx
import React from "react";
import { motion, useInView, useAnimation } from "framer-motion";
import { useEffect, useRef } from "react";
import profileImg from "/HeroImg.png";
import { FaEnvelope, FaDownload } from "react-icons/fa";

const StatCounter = ({ value, label }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const controls = useAnimation();

  useEffect(() => {
    if (isInView) {
      controls.start({
        count: value,
        transition: { duration: 2, ease: "easeOut" },
      });
    }
  }, [controls, isInView, value]);

  return (
    <motion.div ref={ref}>
      <motion.h3
        className="text-3xl font-bold"
        initial={{ count: 0 }}
        animate={controls}
      >
        {Math.floor(value)}+
      </motion.h3>
      <p className="text-sm text-gray-400">{label}</p>
    </motion.div>
  );
};

const Hero = () => {
  return (
    <header
      id="hero"
      className="relative min-h-screen flex flex-col-reverse md:flex-row items-center justify-between px-6 md:px-12 bg-[#0f0c29] text-white overflow-hidden"
    >
      {/* Purple Animated Glow Background */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <div className="w-full h-full">
          <div className="absolute top-0 left-0 w-full h-full bg-gradient-radial animate-pulse-fast from-purple-800/30 via-purple-500/10 to-transparent blur-3xl rounded-full" />
        </div>
      </div>

      {/* Left Content */}
      <motion.div
        className="flex-1 max-w-2xl py-20 space-y-6 z-10 text-center md:text-left"
        initial={{ opacity: 0, x: -60 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1.8, ease: "easeInOut" }}
      >
        <p className="text-lg">
          Hello There! I'm{" "}
          <span className="text-blue-400 font-semibold">
            Jah'swill Uchechi Emmanuel
          </span>
        </p>
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold leading-tight">
          Frontend Developer <br /> & Creative Technologist
        </h1>
        <p className="text-lg text-gray-300">
          I build elegant user interfaces that balance performance with beauty.
          With an eye for detail and a passion for clean, scalable code, I
          transform ideas into seamless digital experiences that delight users.
        </p>

        {/* Stats */}
        <div className="flex justify-center md:justify-start gap-10 mt-6">
          <StatCounter value={1} label="Years Of Experience" />
          <StatCounter value={10} label="Completed Projects" />
        </div>

        {/* Buttons */}
        <div className="flex justify-center md:justify-start gap-4 mt-8 flex-wrap">
          <a
            href="/Jayzwillz.pdf"
            rel="noopener noreferrer"
            target="_blank"
            className="px-6 py-3 bg-gray-800 text-white rounded-full hover:bg-gray-700 flex items-center gap-2 transition-all duration-300"
          >
            <FaDownload /> View Resume
          </a>
          <a
            href="mailto:jahswill4jahs@gmail.com"
            className="px-6 py-3 bg-purple-600 text-white rounded-full hover:bg-purple-700 flex items-center gap-2 transition-all duration-300"
          >
            <FaEnvelope /> Email Me
          </a>
        </div>
      </motion.div>

      {/* Profile Image */}
      <motion.div
        className="flex-1 flex justify-center md:justify-end mt-10 md:mt-0 z-10"
        initial={{ opacity: 0, scale: 0.7 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 2, delay: 0.5, ease: "easeOut" }}
      >
        <div className="relative w-52 h-52 sm:w-64 sm:h-64 md:w-80 md:h-80 rounded-full overflow-hidden shadow-2xl border-4 border-blue-600">
          <img
            src={profileImg}
            alt="Portrait of Jah'swill Uchechi Emmanuel, Front-End Developer"
            className="object-cover w-full h-full"
          />
        </div>
      </motion.div>
    </header>
  );
};

export default Hero;
