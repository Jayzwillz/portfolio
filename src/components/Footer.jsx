import React from "react";
import { FaGithub, FaLinkedin, FaWhatsapp, FaEnvelope, FaHeart } from "react-icons/fa";
import { motion } from "framer-motion";
import { useTheme } from "../context/ThemeContext";

const Footer = () => {
  const { theme } = useTheme();
  const currentYear = new Date().getFullYear();
  
  const quickLinks = [
    { name: "About", href: "#about" },
    { name: "Services", href: "#services" },
    { name: "Projects", href: "#projects" },
    { name: "Contact", href: "#contact" }
  ];

  const socialLinks = [
    { icon: <FaGithub size={20} />, href: "https://github.com/jayzwillz", label: "GitHub" },
    { icon: <FaLinkedin size={20} />, href: "https://linkedin.com/in/jayzwillz", label: "LinkedIn" },
    { icon: <FaWhatsapp size={20} />, href: "https://wa.me/2349016510703", label: "WhatsApp" },
    { icon: <FaEnvelope size={20} />, href: "mailto:jahswill4jahs@gmail.com", label: "Email" }
  ];

  return (
    <motion.footer
      className="py-12 relative overflow-hidden transition-colors duration-300"
      style={{
        backgroundColor: theme.colors.background,
        color: theme.colors.textSecondary
      }}
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
    >
      {/* Background decoration */}
      <div 
        className="absolute top-0 left-1/2 transform -translate-x-1/2 w-full h-px opacity-30" 
        style={{ 
          background: `linear-gradient(to right, transparent, ${theme.colors.primary}, transparent)` 
        }} 
      />
      
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          {/* About Section */}
          <div className="text-center md:text-left">
            <h3 className="text-xl font-semibold mb-4" style={{ color: theme.colors.primary }}>
              Jah'swill Uchechi Emmanuel
            </h3>
            <p className="text-sm leading-relaxed mb-4">
              FullStack Software Engineer passionate about building scalable web applications 
              and creating exceptional digital experiences. Let's turn your ideas into reality.
            </p>
            <div className="flex justify-center md:justify-start gap-4">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.label}
                  className="w-10 h-10 rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110"
                  style={{
                    backgroundColor: theme.colors.surface,
                    color: theme.colors.text,
                    border: `1px solid ${theme.colors.primary}`
                  }}
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div className="text-center">
            <h4 className="text-lg font-semibold mb-4" style={{ color: theme.colors.text }}>Quick Links</h4>
            <ul className="space-y-2">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <a
                    href={link.href}
                    className="text-sm transition-colors duration-300"
                    style={{ 
                      color: theme.colors.textSecondary,
                      ':hover': { color: theme.colors.primary }
                    }}
                    onMouseEnter={(e) => e.target.style.color = theme.colors.primary}
                    onMouseLeave={(e) => e.target.style.color = theme.colors.textSecondary}
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div className="text-center md:text-right">
            <h4 className="text-lg font-semibold mb-4" style={{ color: theme.colors.text }}>Get In Touch</h4>
            <div className="space-y-2 text-sm">
              <p style={{ color: theme.colors.textSecondary }}>Imo State, Nigeria</p>
              <p>
                <a 
                  href="mailto:jahswill4jahs@gmail.com" 
                  className="transition-colors"
                  style={{ color: theme.colors.textSecondary }}
                  onMouseEnter={(e) => e.target.style.color = theme.colors.primary}
                  onMouseLeave={(e) => e.target.style.color = theme.colors.textSecondary}
                >
                  jahswill4jahs@gmail.com
                </a>
              </p>
              <p>
                <a 
                  href="https://wa.me/2349016510703" 
                  className="transition-colors"
                  style={{ color: theme.colors.textSecondary }}
                  onMouseEnter={(e) => e.target.style.color = theme.colors.primary}
                  onMouseLeave={(e) => e.target.style.color = theme.colors.textSecondary}
                >
                  +234 901 651 0703
                </a>
              </p>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col md:flex-row justify-between items-center gap-4" style={{ borderTop: `1px solid ${theme.colors.surface}` }}>
          <p className="text-xs text-center md:text-left" style={{ color: theme.colors.textSecondary }}>
            &copy; {currentYear} Jah'swill Uchechi Emmanuel. All rights reserved.
          </p>
          
          <div className="flex items-center gap-2 text-xs" style={{ color: theme.colors.textSecondary }}>
            <span>Made with</span>
            <FaHeart className="text-red-500 animate-pulse" size={12} />
            <span>using React & Tailwind CSS</span>
          </div>
        </div>
      </div>
    </motion.footer>
  );
};

export default Footer;
