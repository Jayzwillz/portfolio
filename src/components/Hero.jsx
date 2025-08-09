import React from "react";
import { motion, useInView, useAnimation } from "framer-motion";
import { useEffect, useRef } from "react";
import profileImg from "/HeroImg.png";
import { FaEnvelope, FaDownload } from "react-icons/fa";
import TypingAnimation from "./TypingAnimation";
import { useTheme } from "../context/ThemeContext";

const StatCounter = ({ value, label }) => {
  const { theme } = useTheme();
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
      <p className="text-sm" style={{ color: theme.colors.textSecondary }}>{label}</p>
    </motion.div>
  );
};

const Hero = () => {
  const { theme } = useTheme();
  
  return (
    <header
      id="hero"
      className="relative min-h-screen flex flex-col-reverse md:flex-row items-center justify-between px-6 md:px-12 overflow-hidden transition-colors duration-300"
      style={{
        backgroundColor: theme.colors.background,
        color: theme.colors.text
      }}
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
          <span className="font-semibold" style={{ color: theme.colors.secondary }}>
            Jah'swill Uchechi Emmanuel
          </span>
        </p>
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold leading-tight">
          <TypingAnimation 
            texts={[
              "FullStack Software Engineer",
              "Creative Technologist", 
              "Problem Solver",
              "Code Architect"
            ]}
            speed={80}
            deleteSpeed={40}
            delayBetweenTexts={2000}
          />
        </h1>
        <p className="text-lg" style={{ color: theme.colors.textSecondary }}>
          I build end-to-end digital solutions from responsive frontends to robust backend systems.
          With expertise in modern web technologies and a passion for clean, scalable architecture, I
          transform complex ideas into seamless full-stack applications that deliver exceptional user experiences.
        </p>

        {/* Stats */}
        <div className="flex justify-center md:justify-start gap-10 mt-6">
          <StatCounter value={2} label="Years Of Experience" />
          <StatCounter value={15} label="Completed Projects" />
          <StatCounter value={5} label="Happy Clients" />
        </div>

        {/* Buttons */}
        <div className="flex justify-center md:justify-start gap-4 mt-8 flex-wrap">
          <a
            href="/Jayzwillz.pdf"
            rel="noopener noreferrer"
            target="_blank"
            className="px-6 py-3 rounded-full flex items-center gap-2 transition-all duration-300 border"
            style={{ 
              backgroundColor: theme.colors.surface, 
              color: theme.colors.text,
              borderColor: theme.colors.primary 
            }}
          >
            <FaDownload /> View Resume
          </a>
          <a
            href="mailto:jahswill4jahs@gmail.com"
            className="px-6 py-3 rounded-full flex items-center gap-2 transition-all duration-300"
            style={{ 
              backgroundColor: theme.colors.primary, 
              color: theme.colors.background 
            }}
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
        <div className="relative w-64 h-80 sm:w-72 sm:h-96 md:w-80 md:h-[28rem] rounded-2xl overflow-hidden shadow-2xl border-4 bg-gradient-to-br from-purple-900/20 to-blue-900/20"
             style={{ borderColor: theme.colors.primary }}>
          <img
            src={profileImg}
            alt="Portrait of Jah'swill Uchechi Emmanuel, FullStack Software Engineer"
            className="object-cover object-center w-full h-full hover:scale-105 transition-transform duration-500"
          />
          {/* Overlay gradient for better text readability if needed */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent"></div>
        </div>
      </motion.div>
    </header>
  );
};

export default Hero;
