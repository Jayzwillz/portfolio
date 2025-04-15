import React from "react";
import { motion } from "framer-motion";
import { FaHtml5, FaCss3Alt, FaJs, FaReact, FaVuejs, FaBootstrap, FaGitAlt } from "react-icons/fa";
import { SiTypescript, SiNextdotjs, SiTailwindcss, SiAxios, SiFirebase, SiVite, SiWebpack } from "react-icons/si";

const skills = [
  { name: "HTML5", icon: <FaHtml5 className="text-orange-500" /> },
  { name: "CSS3", icon: <FaCss3Alt className="text-blue-500" /> },
  { name: "JavaScript", icon: <FaJs className="text-yellow-400" /> },
  { name: "TypeScript", icon: <SiTypescript className="text-blue-600" /> },
  { name: "React", icon: <FaReact className="text-cyan-400" /> },
  { name: "Vue.js", icon: <FaVuejs className="text-green-500" /> },
  { name: "Next.js", icon: <SiNextdotjs className="text-gray-900 dark:text-white" /> },
  { name: "Tailwind CSS", icon: <SiTailwindcss className="text-teal-400" /> },
  { name: "Bootstrap", icon: <FaBootstrap className="text-purple-600" /> },
  { name: "Axios", icon: <SiAxios className="text-blue-500" /> },
  { name: "Firebase", icon: <SiFirebase className="text-yellow-500" /> },
  { name: "Git", icon: <FaGitAlt className="text-red-500" /> },
  { name: "Vite", icon: <SiVite className="text-purple-400" /> },
  { name: "Webpack", icon: <SiWebpack className="text-blue-600" /> },
];

const Skills = () => {
  return (
    <section id="skills" className="py-20 bg-gray-950 text-white">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <motion.h2
          className="text-3xl sm:text-4xl font-extrabold text-center text-purple-400 mb-12"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          My Skills
        </motion.h2>

        <motion.div
          className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-8 text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
        >
          {skills.map((skill, index) => (
            <div
              key={index}
              className="bg-gray-800 hover:bg-gray-700 p-6 rounded-xl shadow-md transition-all duration-300 flex flex-col items-center gap-3"
            >
              <div className="text-4xl">{skill.icon}</div>
              <p className="text-lg font-medium">{skill.name}</p>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;
