import React from "react";
import { motion } from "framer-motion";
import { useTheme } from "../context/ThemeContext";
import { 
  FaCode, FaServer, FaMobile, FaCloud, FaDatabase, FaCog 
} from "react-icons/fa";

const services = [
  {
    icon: <FaCode className="text-4xl text-blue-400" />,
    title: "Frontend Development",
    description: "Building responsive, interactive user interfaces with React, Vue.js, and modern CSS frameworks.",
    features: ["Responsive Design", "SPA Development", "UI/UX Implementation", "Performance Optimization"]
  },
  {
    icon: <FaServer className="text-4xl text-green-400" />,
    title: "Backend Development",
    description: "Creating robust server-side applications with Node.js, Express, and RESTful API design.",
    features: ["RESTful APIs", "Authentication Systems", "Data Validation", "Error Handling"]
  },
  {
    icon: <FaDatabase className="text-4xl text-purple-400" />,
    title: "Database Design",
    description: "Designing and optimizing databases with MongoDB, PostgreSQL, and implementing efficient data structures.",
    features: ["Database Schema", "Query Optimization", "Data Migration", "Backup Strategies"]
  },
  {
    icon: <FaCloud className="text-4xl text-orange-400" />,
    title: "Cloud & DevOps",
    description: "Deploying applications on cloud platforms with CI/CD pipelines and containerization.",
    features: ["AWS Deployment", "Docker Containers", "CI/CD Pipelines", "Performance Monitoring"]
  },
  {
    icon: <FaMobile className="text-4xl text-pink-400" />,
    title: "Full-Stack Solutions",
    description: "End-to-end web application development from concept to deployment.",
    features: ["Project Planning", "Architecture Design", "Testing & QA", "Maintenance & Support"]
  },
  {
    icon: <FaCog className="text-4xl text-yellow-400" />,
    title: "API Integration",
    description: "Integrating third-party services and creating custom APIs for seamless data flow.",
    features: ["Third-party APIs", "Payment Gateways", "Social Media Integration", "Real-time Features"]
  }
];

const Services = () => {
  const { theme } = useTheme();
  
  return (
    <section 
      id="services" 
      className="py-20 relative overflow-hidden transition-colors duration-300"
      style={{
        backgroundColor: theme.colors.surface,
        color: theme.colors.text
      }}
    >
      {/* Background decorations */}
      <div className="absolute -top-20 right-[-10%] w-[300px] h-[300px] bg-blue-600 opacity-10 rounded-full blur-[120px]" />
      <div className="absolute bottom-[-20%] left-[-10%] w-[400px] h-[400px] bg-purple-600 opacity-10 rounded-full blur-[180px]" />
      
      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        <motion.h2
          className="text-3xl sm:text-4xl font-extrabold text-center mb-16"
          style={{ color: theme.colors.primary }}
          initial={{ opacity: 0, y: -40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
        >
          Services I Offer
        </motion.h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.article
              key={index}
              className="backdrop-blur-sm border rounded-xl p-6 transition-all duration-300"
              style={{
                backgroundColor: `${theme.colors.background}80`,
                borderColor: theme.colors.primary
              }}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.02, y: -5 }}
            >
              <div className="mb-4" style={{ color: theme.colors.primary }}>
                {service.icon}
              </div>
              
              <h3 className="text-xl font-semibold mb-3" style={{ color: theme.colors.text }}>
                {service.title}
              </h3>
              
              <p className="mb-4 text-sm leading-relaxed" style={{ color: theme.colors.textSecondary }}>
                {service.description}
              </p>
              
              <ul className="space-y-2">
                {service.features.map((feature, i) => (
                  <li key={i} className="text-xs flex items-center" style={{ color: theme.colors.textSecondary }}>
                    <span className="w-1.5 h-1.5 rounded-full mr-2" style={{ backgroundColor: theme.colors.primary }}></span>
                    {feature}
                  </li>
                ))}
              </ul>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
