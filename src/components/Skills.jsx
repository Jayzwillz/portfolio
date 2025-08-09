import React from "react";
import { motion } from "framer-motion";
import { useTheme } from "../context/ThemeContext";
import { 
  FaHtml5, FaCss3Alt, FaJs, FaReact, FaVuejs, FaBootstrap, 
  FaGitAlt, FaNodeJs, FaPython, FaDocker, FaAws 
} from "react-icons/fa";
import { 
  SiTypescript, SiNextdotjs, SiTailwindcss, SiAxios, SiFirebase, 
  SiVite, SiWebpack, SiExpress, SiMongodb, SiPostgresql, 
  SiRedis, SiGraphql, SiJest, SiVercel, SiNetlify
} from "react-icons/si";

const frontendSkills = [
  { name: "HTML5", icon: <FaHtml5 className="text-orange-500" /> },
  { name: "CSS3", icon: <FaCss3Alt className="text-blue-500" /> },
  { name: "JavaScript", icon: <FaJs className="text-yellow-400" /> },
  { name: "TypeScript", icon: <SiTypescript className="text-blue-600" /> },
  { name: "React", icon: <FaReact className="text-cyan-400" /> },
  { name: "Vue.js", icon: <FaVuejs className="text-green-500" /> },
  { name: "Next.js", icon: <SiNextdotjs className="text-gray-900 dark:text-white" /> },
  { name: "Tailwind CSS", icon: <SiTailwindcss className="text-teal-400" /> },
];

const backendSkills = [
  { name: "Node.js", icon: <FaNodeJs className="text-green-500" /> },
  { name: "Express.js", icon: <SiExpress className="text-gray-600" /> },
  { name: "Python", icon: <FaPython className="text-blue-500" /> },
  { name: "MongoDB", icon: <SiMongodb className="text-green-600" /> },
  { name: "PostgreSQL", icon: <SiPostgresql className="text-blue-600" /> },
  { name: "Redis", icon: <SiRedis className="text-red-500" /> },
  { name: "GraphQL", icon: <SiGraphql className="text-pink-500" /> },
  { name: "Firebase", icon: <SiFirebase className="text-yellow-500" /> },
];

const toolsSkills = [
  { name: "Git", icon: <FaGitAlt className="text-red-500" /> },
  { name: "Docker", icon: <FaDocker className="text-blue-500" /> },
  { name: "AWS", icon: <FaAws className="text-orange-400" /> },
  { name: "Vercel", icon: <SiVercel className="text-black dark:text-white" /> },
  { name: "Netlify", icon: <SiNetlify className="text-teal-400" /> },
  { name: "Jest", icon: <SiJest className="text-red-600" /> },
  { name: "Vite", icon: <SiVite className="text-purple-400" /> },
  { name: "Webpack", icon: <SiWebpack className="text-blue-600" /> },
];

const SkillCategory = ({ title, skills, delay = 0 }) => {
  const { theme } = useTheme();
  
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay }}
      viewport={{ once: true }}
      className="mb-12"
    >
      <h3 className="text-2xl font-bold text-center mb-6" style={{ color: theme.colors.primary }}>{title}</h3>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6">
        {skills.map((skill, index) => (
          <motion.article
            key={index}
            className="p-4 rounded-xl shadow-md transition-all duration-300 flex flex-col items-center gap-3 hover:scale-105"
            style={{
              backgroundColor: theme.colors.background,
              border: `1px solid ${theme.colors.primary}40`
            }}
            whileHover={{ y: -5 }}
            aria-label={skill.name}
          >
            <div className="text-4xl" aria-hidden="true">
              {skill.icon}
            </div>
            <h4 className="text-sm font-medium text-center" style={{ color: theme.colors.text }}>{skill.name}</h4>
          </motion.article>
        ))}
      </div>
    </motion.div>
  );
};

const Skills = () => {
  const { theme } = useTheme();
  
  return (
    <section 
      id="skills" 
      aria-labelledby="skills-heading" 
      className="py-20 transition-colors duration-300"
      style={{
        backgroundColor: theme.colors.surface,
        color: theme.colors.text
      }}
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <motion.h2
          id="skills-heading"
          className="text-3xl sm:text-4xl font-extrabold text-center mb-16"
          style={{ color: theme.colors.primary }}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          My Tech Stack
        </motion.h2>

        <SkillCategory title="Frontend Development" skills={frontendSkills} delay={0.1} />
        <SkillCategory title="Backend Development" skills={backendSkills} delay={0.2} />
        <SkillCategory title="Tools & DevOps" skills={toolsSkills} delay={0.3} />
      </div>
    </section>
  );
};

export default Skills;
