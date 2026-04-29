import React from "react";
import { motion } from "framer-motion";
import profileImg from "/HeroImg.png";
import { FaArrowRight, FaDownload, FaEnvelope, FaGithub, FaLinkedin } from "react-icons/fa";
import TypingAnimation from "./TypingAnimation";
import { useTheme } from "../context/ThemeContext";

const Hero = () => {
  const { theme } = useTheme();
  const metrics = [
    { value: "2+", label: "Years Experience" },
    { value: "17+", label: "Shipped Projects" },
    { value: "6", label: "Core Stack Domains" },
  ];
  
  return (
    <header
      id="hero"
      className="relative min-h-[92vh] grid lg:grid-cols-2 gap-8 md:gap-12 items-center px-5 sm:px-6 md:px-10 xl:px-20 py-10 md:py-0 overflow-hidden transition-colors duration-300"
      style={{
        backgroundColor: theme.colors.background,
        color: theme.colors.text
      }}
    >
      {/* Ambient Glow Background */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute -top-40 -left-20 w-[420px] h-[420px] rounded-full blur-[120px] animate-pulse-fast"
             style={{ backgroundColor: `${theme.colors.primary}35` }} />
        <div className="absolute -bottom-24 right-0 w-[380px] h-[380px] rounded-full blur-[120px] animate-pulse-fast"
             style={{ backgroundColor: `${theme.colors.accent}22` }} />
      </div>

      {/* Left Content */}
      <motion.div
        className="max-w-2xl py-6 lg:py-16 space-y-6 md:space-y-8 z-10 text-center lg:text-left"
        initial={{ opacity: 0, x: -60 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border text-sm font-semibold"
             style={{
               borderColor: `${theme.colors.primary}66`,
               backgroundColor: `${theme.colors.surface}BB`,
               color: theme.colors.text,
             }}>
          <span className="w-2 h-2 rounded-full" style={{ backgroundColor: theme.colors.accent }}></span>
          Available for remote and contract work
        </div>

        <p className="text-base sm:text-lg" style={{ color: theme.colors.textSecondary }}>
          Hello, I am <span className="font-bold" style={{ color: theme.colors.secondary }}>Jah'swill Uchechi Emmanuel</span>
        </p>

        <h1 className="text-3xl sm:text-5xl md:text-6xl font-extrabold leading-tight">
          <TypingAnimation 
            texts={[
              "FullStack Software Engineer",
              "Product-Focused Builder",
              "Frontend + Backend Specialist",
              "AI-Ready Web Developer"
            ]}
            speed={80}
            deleteSpeed={40}
            delayBetweenTexts={2000}
          />
        </h1>

        <p className="text-base sm:text-lg leading-relaxed max-w-xl mx-auto lg:mx-0" style={{ color: theme.colors.textSecondary }}>
          I design and build high-performing digital products from elegant interfaces to reliable backend systems.
          My focus is turning ambitious ideas into polished experiences that users trust and teams can scale.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 sm:gap-4 max-w-xl mx-auto lg:mx-0">
          {metrics.map((metric) => (
            <article
              key={metric.label}
              className="rounded-2xl border px-4 py-4 text-center lg:text-left"
              style={{
                borderColor: `${theme.colors.primary}33`,
                backgroundColor: `${theme.colors.surface}9E`,
              }}
            >
              <p className="text-2xl sm:text-3xl font-black" style={{ color: theme.colors.primary }}>
                {metric.value}
              </p>
              <p className="text-xs sm:text-sm" style={{ color: theme.colors.textSecondary }}>
                {metric.label}
              </p>
            </article>
          ))}
        </div>

        {/* Buttons */}
        <div className="flex flex-col sm:flex-row justify-center lg:justify-start gap-3 sm:gap-4 flex-wrap pt-2">
          <a
            href="#projects"
            className="px-6 py-3 rounded-full flex items-center justify-center gap-2 font-semibold transition-all duration-300 hover:scale-[1.03] w-full sm:w-auto"
            style={{
              background: `linear-gradient(135deg, ${theme.colors.primary}, ${theme.colors.secondary})`,
              color: theme.colors.background,
            }}
          >
            View Projects <FaArrowRight />
          </a>
          <a
            href="/Jayzwillz.pdf"
            rel="noopener noreferrer"
            target="_blank"
            className="px-6 py-3 rounded-full flex items-center justify-center gap-2 transition-all duration-300 border font-semibold w-full sm:w-auto"
            style={{ 
              backgroundColor: `${theme.colors.surface}BC`, 
              color: theme.colors.text,
              borderColor: `${theme.colors.primary}66` 
            }}
          >
            <FaDownload /> View Resume
          </a>
          <a
            href="mailto:jahswill4jahs@gmail.com"
            className="px-6 py-3 rounded-full flex items-center justify-center gap-2 transition-all duration-300 border font-semibold w-full sm:w-auto"
            style={{ 
              borderColor: `${theme.colors.primary}66`,
              color: theme.colors.text,
              backgroundColor: "transparent"
            }}
          >
            <FaEnvelope /> Email Me
          </a>
        </div>

        <div className="flex items-center justify-center lg:justify-start gap-4 pt-1" style={{ color: theme.colors.textSecondary }}>
          <a href="https://github.com/jayzwillz" target="_blank" rel="noopener noreferrer" aria-label="GitHub profile" className="hover:scale-110 transition-transform">
            <FaGithub size={20} />
          </a>
          <a href="https://linkedin.com/in/jayzwillz" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn profile" className="hover:scale-110 transition-transform">
            <FaLinkedin size={20} />
          </a>
        </div>
      </motion.div>

      {/* Profile Image */}
      <motion.div
        className="flex justify-center lg:justify-end mt-0 z-10"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.9, delay: 0.15, ease: "easeOut" }}
      >
        <div
          className="relative w-full max-w-[20rem] sm:max-w-[24rem] h-[22rem] sm:h-[28rem] rounded-[2rem] overflow-hidden shadow-2xl border"
          style={{
            borderColor: `${theme.colors.primary}70`,
            backgroundColor: `${theme.colors.surface}70`,
          }}
        >
          <div className="absolute -inset-20 -z-10 blur-3xl"
               style={{ backgroundColor: `${theme.colors.secondary}35` }}></div>
          <img
            src={profileImg}
            alt="Portrait of Jah'swill Uchechi Emmanuel, FullStack Software Engineer"
            className="object-cover object-center w-full h-full hover:scale-105 transition-transform duration-500"
          />
          <div className="absolute inset-0"
               style={{
                 background: `linear-gradient(to top, ${theme.colors.background}88 0%, transparent 45%)`,
               }}></div>
          <div className="absolute bottom-4 left-4 right-4 rounded-xl px-4 py-3 border"
               style={{
                 backgroundColor: `${theme.colors.background}B8`,
                 borderColor: `${theme.colors.primary}55`,
               }}>
            <p className="text-xs uppercase tracking-wider" style={{ color: theme.colors.textSecondary }}>Currently Building</p>
            <p className="font-semibold" style={{ color: theme.colors.text }}>AI-enabled fullstack products for web users</p>
          </div>
        </div>
      </motion.div>
    </header>
  );
};

export default Hero;
