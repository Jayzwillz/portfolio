import React from "react";
import { motion } from "framer-motion";
import aboutImg from "../assets/images/Tablet Background.jpg";

const About = () => {
  return (
    <section id="about" className="py-24 bg-[#1a1a2e] text-white relative overflow-hidden">
      <div className="absolute -top-20 left-[-10%] w-[300px] h-[300px] bg-indigo-600 opacity-10 rounded-full blur-[120px]" />
      <div className="absolute bottom-[-20%] right-[-10%] w-[400px] h-[400px] bg-pink-600 opacity-10 rounded-full blur-[180px]" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        <motion.h2
          className="text-3xl sm:text-4xl font-extrabold text-center text-purple-400 mb-12"
          initial={{ opacity: 0, y: -40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          About Me
        </motion.h2>

        <div className="flex flex-col md:flex-row items-center justify-between gap-10">
          <motion.div
            className="flex-1 space-y-6"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1.2 }}
          >
            <p className="text-lg text-gray-300">
              I’m a Front-End Developer with a passion for building pixel-perfect, accessible UIs and interactive experiences. My focus is to blend modern design with robust frontend technologies to create interfaces that feel alive.
            </p>
            <p className="text-lg text-gray-300">
              My main stack includes React, Tailwind CSS, JavaScript, and integrating APIs to make dynamic, responsive websites. I also bring in animation and micro-interactions using Framer Motion to add life to interfaces.
            </p>
            <p className="text-lg text-gray-300">
              Whether I’m working solo or on a team, I love solving real-world problems through clean and maintainable code — and I’m always hungry to learn more.
            </p>
          </motion.div>

          <motion.div
            className="flex-1 flex justify-center md:justify-start"
            initial={{ opacity: 0, scale: 0.85 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.3, delay: 0.2 }}
          >
            <div className="relative w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden shadow-xl border-4 border-purple-600">
              <img
                src={aboutImg}
                alt="Jah'swill"
                className="object-cover w-full h-full"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
