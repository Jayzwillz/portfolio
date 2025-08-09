import React from "react";
import { motion } from "framer-motion";
import aboutImg from "/AboutImg.jpg";
import { useTheme } from "../context/ThemeContext";

const About = () => {
  const { theme } = useTheme();
  
  return (
    <article 
      id="about" 
      className="py-24 relative overflow-hidden transition-colors duration-300"
      style={{
        backgroundColor: theme.colors.surface,
        color: theme.colors.text
      }}
    >
      <div className="absolute -top-20 left-[-10%] w-[300px] h-[300px] bg-indigo-600 opacity-10 rounded-full blur-[120px]" />
      <div className="absolute bottom-[-20%] right-[-10%] w-[400px] h-[400px] bg-pink-600 opacity-10 rounded-full blur-[180px]" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        <motion.h2
          className="text-3xl sm:text-4xl font-extrabold text-center mb-12"
          style={{ color: theme.colors.primary }}
          initial={{ opacity: 0, y: -40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          About Me
        </motion.h2>

        <div className="flex flex-col md:flex-row-reverse items-center justify-between gap-12">
          <motion.div
            className="flex-1 space-y-6"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1.2 }}
          >
            <p className="text-lg leading-relaxed" style={{ color: theme.colors.textSecondary }}>
              I'm a FullStack Software Engineer with a passion for building scalable web applications from frontend to backend. 
              My expertise spans across modern JavaScript frameworks, server-side technologies, databases, and cloud platforms 
              to create complete digital solutions that solve real-world problems.
            </p>
            <p className="text-lg leading-relaxed" style={{ color: theme.colors.textSecondary }}>
              My technical stack includes React, Node.js, Express, MongoDB, PostgreSQL, and cloud services like AWS. 
              I specialize in building RESTful APIs, implementing secure authentication systems, and creating responsive 
              frontends with seamless user experiences using modern tools like TypeScript and Tailwind CSS.
            </p>
            <p className="text-lg leading-relaxed" style={{ color: theme.colors.textSecondary }}>
              Whether I'm architecting microservices, optimizing database queries, or crafting intuitive user interfaces, 
              I approach every project with a focus on clean code, scalability, and performance. I'm always excited to 
              tackle new challenges and stay updated with the latest technologies.
            </p>
          </motion.div>

          <motion.div
            className="flex-1 flex justify-center md:justify-start"
            initial={{ opacity: 0, scale: 0.85 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.3, delay: 0.2 }}
          >
            <div className="relative w-72 h-96 md:w-80 md:h-[28rem] rounded-2xl overflow-hidden shadow-2xl border-4 bg-gradient-to-br from-purple-900/20 to-indigo-900/20"
                 style={{ borderColor: theme.colors.primary }}>
              <img
                src={aboutImg}
                alt="Portrait of Jah'swill Uchechi Emmanuel, FullStack Software Engineer"
                className="object-cover object-center w-full h-full hover:scale-105 transition-transform duration-500"
              />
              {/* Decorative elements */}
              <div className="absolute -top-4 -right-4 w-8 h-8 rounded-full opacity-80" 
                   style={{ backgroundColor: theme.colors.primary }}></div>
              <div className="absolute -bottom-4 -left-4 w-6 h-6 rounded-full opacity-80" 
                   style={{ backgroundColor: theme.colors.secondary }}></div>
            </div>
          </motion.div>
        </div>
      </div>
    </article>
  );
};

export default About;
