import React, { useState } from "react";
import { motion } from "framer-motion";
import { 
  FaDownload, FaGraduationCap, FaBriefcase, FaAward, 
  FaCertificate, FaCalendarAlt, FaMapMarkerAlt 
} from "react-icons/fa";
import { useTheme } from "../context/ThemeContext";

const Resume = () => {
  const { theme } = useTheme();
  const [activeTab, setActiveTab] = useState("experience");

  const experience = [
    {
      title: "FullStack Software Engineer",
      company: "Tym Lova Nigeria (Formerly Migo Express Nigeria)",
      location: "Remote",
      period: "2025 - Present",
      description: "Contributed to both frontend and backend tasks across internal and client-facing projects.",
      achievements: [
        "Built responsive, component-based UIs using React, JavaScript, and Tailwind CSS",
        "Developed backend features and integrated APIs using Node.js and Express",
        "Ensured all code adhered to performance, SEO, and quality standards",
        "Managed tasks independently, using Git for version control and timely delivery"
      ]
    },
    {
      title: "Web Developer Intern",
      company: "CodSoft & CodeAlpha",
      location: "Remote",
      period: "2025",
      description: "Completed project-based internship focused on building responsive user interfaces",
      achievements: [
        "Developed mini web applications using HTML, CSS, JavaScript, and React",
        "Improved component structure and UI consistency across projects",
        "Strengthened skills in Git, responsive design, and basic state management"
      ]
    },
    {
      title: "Graphic Designer & Digital Services Assistant",
      company: "Total Success Impressa",
      location: "Imo State, Nigeria",
      period: "2023 - 2024",
      description: "Provided document and design services using Office tools and graphics software in a busy cyber café.",
      achievements: [
        "Used Microsoft Office packages (Word, Excel, PowerPoint) to handle a variety of customer needs including document typing, formatting, editing, and printing",
        "Designed custom graphics such as flyers, banners, business cards, and ID cards using tools like CorelDRAW and Photoshop",
        "Operated and maintained equipment including printers, laptops, scanners, lamination, and photocopy machines to deliver timely and accurate services",
        "Assisted customers with everyday tech-related tasks, offering guidance and ensuring quality service in a busy cyber cafe environment"
      ]
    }
  ];

  const education = [
    {
      degree: "Computer Science (Software Engineering)",
      institution: "AltSchool Africa",
      location: "Global",
      period: "2024 - 2025",
      description: "Completed hands-on training in software engineering at AltSchool Africa, gaining practical skills in frontend and fullstack development through real-world projects and mentorship.",
      courses: [
        "Web Development",
        "Software Engineering",
        "Front-End Engineering"
      ]
    }
  ];

  const skills = [
    { category: "Frontend", items: [
      { name: "React/Next.js", level: 90 },
      { name: "JavaScript/TypeScript", level: 85 },
      { name: "HTML/CSS", level: 95 },
      { name: "Tailwind CSS", level: 90 }
    ]},
    { category: "Backend", items: [
      { name: "Node.js/Express", level: 85 },
      { name: "MongoDB", level: 80 },
      { name: "PostgreSQL", level: 75 },
      { name: "REST APIs", level: 90 }
    ]},
    { category: "Tools & Others", items: [
      { name: "Git/GitHub", level: 85 },
      { name: "Docker", level: 70 },
      { name: "AWS", level: 65 },
      { name: "Testing", level: 75 }
    ]}
  ];

  const certifications = [
    {
      title: "Software Engineering",
      issuer: "AltSchool Africa",
      date: "2025"
    },
    {
      title: "Certificate Internship Certificate of Completion",
      issuer: "CodSoft",
      date: "2025",
    },
    {
      title: "Certificate Internship Certificate of Completion",
      issuer: "CodeAlpha",
      date: "2025",
    },
    {
      title: "Career Essentials in Software Development by Microsoft and LinkedIn",
      issuer: "LinkedIn Learning",
      date: "2025",
    },
    {
      title: "Jobberman Soft Skills Training Certificate of Acheivement",
      issuer: "Jobberman Learning",
      date: "2025",
    },
    {
      title: "Certificate of Participation",
      issuer: "Unstop Talent Park 2025",
      date: "2025",
    }
  ];

  const achievements = [
    {
      title: "15+ Completed Projects",
      description: "Successfully delivered diverse web applications",
      icon: <FaBriefcase style={{ color: theme.colors.primary }} />
    },
    {
      title: "5+ Happy Clients",
      description: "Maintained 100% client satisfaction rate",
      icon: <FaAward style={{ color: theme.colors.accent }} />
    },
    {
      title: "Open Source Contributor",
      description: "Active contributor to various open source projects",
      icon: <FaGraduationCap style={{ color: theme.colors.primary }} />
    }
  ];

  const tabs = [
    { id: "experience", label: "Experience", icon: <FaBriefcase /> },
    { id: "education", label: "Education", icon: <FaGraduationCap /> },
    { id: "skills", label: "Skills", icon: <FaCertificate /> },
    { id: "achievements", label: "Achievements", icon: <FaAward /> }
  ];

  const SkillBar = ({ skill }) => (
    <div className="mb-4">
      <div className="flex justify-between mb-1">
        <span className="text-sm font-medium" style={{ color: theme.colors.text }}>{skill.name}</span>
        <span className="text-sm" style={{ color: theme.colors.textSecondary }}>{skill.level}%</span>
      </div>
      <div className="w-full rounded-full h-2" style={{ backgroundColor: theme.colors.surface }}>
        <motion.div
          className="h-2 rounded-full"
          style={{ backgroundColor: theme.colors.primary }}
          initial={{ width: 0 }}
          whileInView={{ width: `${skill.level}%` }}
          transition={{ duration: 1, delay: 0.2 }}
          viewport={{ once: true }}
        />
      </div>
    </div>
  );

  const TimelineItem = ({ item, index }) => (
    <motion.div
      className="relative pl-8 pb-8 last:border-l-0"
      style={{ borderLeft: `2px solid ${theme.colors.primary}40` }}
      initial={{ opacity: 0, x: -20 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      viewport={{ once: true }}
    >
      <div className="absolute -left-2 top-0 w-4 h-4 rounded-full border-2" 
           style={{ 
             backgroundColor: theme.colors.primary,
             borderColor: theme.colors.background 
           }}></div>
      <div className="rounded-lg p-6 border" 
           style={{ 
             backgroundColor: theme.colors.surface,
             borderColor: `${theme.colors.primary}40`
           }}>
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-3">
          <h3 className="text-xl font-semibold" style={{ color: theme.colors.primary }}>{item.title}</h3>
          <div className="flex items-center text-sm mt-1 sm:mt-0" style={{ color: theme.colors.textSecondary }}>
            <FaCalendarAlt className="mr-1" />
            {item.period}
          </div>
        </div>
        <div className="flex items-center mb-2" style={{ color: theme.colors.text }}>
          <span className="font-medium">{item.company || item.institution}</span>
          <span className="mx-2">•</span>
          <div className="flex items-center">
            <FaMapMarkerAlt className="mr-1 text-sm" />
            {item.location}
          </div>
        </div>
        <p className="mb-4" style={{ color: theme.colors.text }}>{item.description}</p>
        {item.achievements && (
          <ul className="space-y-1">
            {item.achievements.map((achievement, i) => (
              <li key={i} className="text-sm flex items-start" style={{ color: theme.colors.textSecondary }}>
                <span className="mr-2" style={{ color: theme.colors.primary }}>•</span>
                {achievement}
              </li>
            ))}
          </ul>
        )}
        {item.courses && (
          <div className="flex flex-wrap gap-2 mt-3">
            {item.courses.map((course, i) => (
              <span key={i} className="px-2 py-1 rounded-full text-xs"
                    style={{ 
                      backgroundColor: `${theme.colors.primary}20`,
                      color: theme.colors.primary 
                    }}>
                {course}
              </span>
            ))}
          </div>
        )}
      </div>
    </motion.div>
  );

  return (
    <section id="resume" className="py-20 relative overflow-hidden" style={{ backgroundColor: theme.colors.background, color: theme.colors.text }}>
      {/* Background decorations */}
      <div className="absolute -top-20 right-[-10%] w-[300px] h-[300px] opacity-10 rounded-full blur-[120px]" 
           style={{ backgroundColor: theme.colors.primary }} />
      <div className="absolute bottom-[-20%] left-[-10%] w-[400px] h-[400px] opacity-10 rounded-full blur-[180px]" 
           style={{ backgroundColor: theme.colors.accent }} />
      
      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl sm:text-4xl font-extrabold mb-4" style={{ color: theme.colors.primary }}>
            Resume & Experience
          </h2>
          <p className="max-w-2xl mx-auto mb-8" style={{ color: theme.colors.textSecondary }}>
            Explore my professional journey, skills, and achievements in software engineering.
          </p>
          
          {/* Download Resume Button */}
          <motion.a
            href="/Jayzwillz.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-lg transition-all duration-300 shadow-lg hover:shadow-xl"
            style={{ 
              backgroundColor: theme.colors.primary,
              color: theme.colors.background 
            }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <FaDownload />
            Download Resume
          </motion.a>
        </motion.div>

        {/* Tab Navigation */}
        <motion.div
          className="flex flex-wrap justify-center gap-2 mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
        >
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className="flex items-center gap-2 px-6 py-3 rounded-lg font-medium transition-all duration-300"
              style={{
                backgroundColor: activeTab === tab.id ? theme.colors.primary : theme.colors.surface,
                color: activeTab === tab.id ? theme.colors.background : theme.colors.text
              }}
            >
              {tab.icon}
              {tab.label}
            </button>
          ))}
        </motion.div>

        {/* Tab Content */}
        <div className="min-h-[500px]">
          {activeTab === "experience" && (
            <div className="max-w-4xl mx-auto">
              <h3 className="text-2xl font-bold text-center mb-8" style={{ color: theme.colors.primary }}>Work Experience</h3>
              {experience.map((item, index) => (
                <TimelineItem key={index} item={item} index={index} />
              ))}
            </div>
          )}

          {activeTab === "education" && (
            <div className="max-w-4xl mx-auto">
              <h3 className="text-2xl font-bold text-center mb-8" style={{ color: theme.colors.primary }}>Education & Learning</h3>
              {education.map((item, index) => (
                <TimelineItem key={index} item={item} index={index} />
              ))}
            </div>
          )}

          {activeTab === "skills" && (
            <div className="max-w-6xl mx-auto">
              <h3 className="text-2xl font-bold text-center mb-8" style={{ color: theme.colors.primary }}>Technical Skills</h3>
              <div className="grid md:grid-cols-3 gap-8">
                {skills.map((category, index) => (
                  <motion.div
                    key={index}
                    className="rounded-lg p-6 border"
                    style={{ 
                      backgroundColor: theme.colors.surface,
                      borderColor: `${theme.colors.primary}40`
                    }}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    viewport={{ once: true }}
                  >
                    <h4 className="text-xl font-semibold mb-6" style={{ color: theme.colors.primary }}>{category.category}</h4>
                    {category.items.map((skill, i) => (
                      <SkillBar key={i} skill={skill} />
                    ))}
                  </motion.div>
                ))}
              </div>
            </div>
          )}

          {activeTab === "achievements" && (
            <div className="max-w-6xl mx-auto">
              <h3 className="text-2xl font-bold text-center mb-8" style={{ color: theme.colors.primary }}>Achievements & Certifications</h3>
              
              {/* Achievements */}
              <div className="grid md:grid-cols-3 gap-6 mb-12">
                {achievements.map((achievement, index) => (
                  <motion.div
                    key={index}
                    className="rounded-lg p-6 border text-center"
                    style={{ 
                      backgroundColor: theme.colors.surface,
                      borderColor: `${theme.colors.primary}40`
                    }}
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    whileHover={{ scale: 1.05 }}
                  >
                    <div className="text-4xl mb-4 flex justify-center">{achievement.icon}</div>
                    <h4 className="text-lg font-semibold mb-2" style={{ color: theme.colors.text }}>{achievement.title}</h4>
                    <p className="text-sm" style={{ color: theme.colors.textSecondary }}>{achievement.description}</p>
                  </motion.div>
                ))}
              </div>

              {/* Certifications */}
              <h4 className="text-xl font-semibold mb-6 text-center" style={{ color: theme.colors.primary }}>Certifications</h4>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {certifications.map((cert, index) => (
                  <motion.div
                    key={index}
                    className="rounded-lg p-6 border"
                    style={{ 
                      backgroundColor: theme.colors.surface,
                      borderColor: `${theme.colors.primary}40`
                    }}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    viewport={{ once: true }}
                  >
                    <div className="flex items-center mb-3">
                      <FaCertificate style={{ color: theme.colors.primary }} className="mr-2" />
                      <span className="text-sm" style={{ color: theme.colors.textSecondary }}>{cert.date}</span>
                    </div>
                    <h5 className="font-semibold mb-2" style={{ color: theme.colors.text }}>{cert.title}</h5>
                    <p className="text-sm mb-2" style={{ color: theme.colors.textSecondary }}>{cert.issuer}</p>
                  </motion.div>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default Resume;
