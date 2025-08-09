import React, { useState } from "react";
import { FaEnvelope, FaGithub, FaLinkedin, FaWhatsapp, FaMapMarkerAlt, FaPhone } from "react-icons/fa";
import { motion } from "framer-motion";
import { useTheme } from "../context/ThemeContext";

const Contact = () => {
  const { theme } = useTheme();
  const [submitted, setSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    const form = e.target;

    const formData = new FormData(form);
    
    try {
      const response = await fetch("https://formspree.io/f/xnnplpjz", {
        method: "POST",
        body: formData,
        headers: {
          Accept: "application/json",
        },
      });

      if (response.ok) {
        setSubmitted(true);
        form.reset();
        setTimeout(() => setSubmitted(false), 5000);
      }
    } catch (error) {
      console.error("Form submission error:", error);
    } finally {
      setIsLoading(false);
    }
  };

  const contactInfo = [
    {
      icon: <FaMapMarkerAlt style={{ color: theme.colors.primary }} />,
      label: "Location",
      value: "Nigeria"
    },
    {
      icon: <FaEnvelope style={{ color: theme.colors.primary }} />,
      label: "Email",
      value: "jahswill4jahs@gmail.com"
    },
    {
      icon: <FaPhone style={{ color: theme.colors.primary }} />,
      label: "Phone",
      value: "+234 901 651 0703"
    }
  ];

  const socialLinks = [
    { icon: <FaGithub size={24} />, href: "https://github.com/jayzwillz", label: "GitHub" },
    { icon: <FaLinkedin size={24} />, href: "https://linkedin.com/in/jayzwillz", label: "LinkedIn" },
    { icon: <FaWhatsapp size={24} />, href: "https://wa.me/2349016510703", label: "WhatsApp" },
    { icon: <FaEnvelope size={24} />, href: "mailto:jahswill4jahs@gmail.com", label: "Email" }
  ];

  return (
    <motion.section
      id="contact"
      className="py-20 relative overflow-hidden"
      style={{ backgroundColor: theme.colors.background }}
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
    >
      {/* Background decoration */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-1/4 right-0 w-96 h-96 rounded-full"
             style={{ background: `radial-gradient(circle, ${theme.colors.primary}, transparent)` }} />
        <div className="absolute bottom-1/4 left-0 w-80 h-80 rounded-full"
             style={{ background: `radial-gradient(circle, ${theme.colors.accent}, transparent)` }} />
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* Section Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4" style={{ color: theme.colors.text }}>
            Let's Work <span style={{ color: theme.colors.primary }}>Together</span>
          </h2>
          <p className="text-lg max-w-2xl mx-auto" style={{ color: theme.colors.textSecondary }}>
            Have a project in mind? I'd love to hear about it. Drop me a line and let's create something amazing together.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <motion.div
            className="space-y-8"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div>
              <h3 className="text-2xl font-bold mb-6" style={{ color: theme.colors.text }}>
                Get In Touch
              </h3>
              <p className="text-lg mb-8" style={{ color: theme.colors.textSecondary }}>
                I'm always open to discussing new opportunities, creative ideas or 
                partnerships. Whether you have a project in mind or just want to say hello, 
                I'd love to hear from you.
              </p>

              {/* Contact Info Cards */}
              <div className="space-y-4">
                {contactInfo.map((info, index) => (
                  <motion.div
                    key={index}
                    className="flex items-center gap-4 p-4 rounded-lg transition-all duration-300"
                    style={{ 
                      backgroundColor: theme.colors.surface,
                      border: `1px solid ${theme.colors.primary}20`
                    }}
                    whileHover={{ 
                      scale: 1.02,
                      boxShadow: `0 8px 25px ${theme.colors.primary}20`
                    }}
                  >
                    <div className="w-12 h-12 rounded-full flex items-center justify-center"
                         style={{ backgroundColor: `${theme.colors.primary}20` }}>
                      {info.icon}
                    </div>
                    <div>
                      <p className="font-medium" style={{ color: theme.colors.text }}>{info.label}</p>
                      <p style={{ color: theme.colors.textSecondary }}>{info.value}</p>
                    </div>
                  </motion.div>
                ))}
              </div>

              {/* Social Links */}
              <div className="mt-8">
                <h4 className="text-lg font-semibold mb-4" style={{ color: theme.colors.text }}>
                  Follow Me
                </h4>
                <div className="flex gap-4">
                  {socialLinks.map((social, index) => (
                    <motion.a
                      key={index}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={social.label}
                      className="w-12 h-12 rounded-full flex items-center justify-center transition-all duration-300"
                      style={{
                        backgroundColor: theme.colors.surface,
                        color: theme.colors.text,
                        border: `1px solid ${theme.colors.primary}20`
                      }}
                      whileHover={{ 
                        scale: 1.1,
                        backgroundColor: theme.colors.primary,
                        color: theme.colors.background
                      }}
                      whileTap={{ scale: 0.95 }}
                    >
                      {social.icon}
                    </motion.a>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            {submitted ? (
              <motion.div
                className="text-center py-12 px-8 rounded-xl"
                style={{ backgroundColor: theme.colors.surface }}
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.5 }}
              >
                <div className="w-16 h-16 mx-auto mb-4 rounded-full flex items-center justify-center"
                     style={{ backgroundColor: `${theme.colors.primary}20` }}>
                  <FaEnvelope size={24} style={{ color: theme.colors.primary }} />
                </div>
                <h3 className="text-xl font-bold mb-2" style={{ color: theme.colors.text }}>
                  Message Sent!
                </h3>
                <p style={{ color: theme.colors.textSecondary }}>
                  Thank you for reaching out. I'll get back to you soon!
                </p>
              </motion.div>
            ) : (
              <form 
                onSubmit={handleSubmit} 
                className="space-y-6 p-8 rounded-xl"
                style={{ backgroundColor: theme.colors.surface }}
              >
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium mb-2"
                           style={{ color: theme.colors.text }}>
                      Name *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      placeholder="Your Name"
                      className="w-full px-4 py-3 rounded-lg border focus:outline-none focus:ring-2 transition-all duration-300"
                      style={{
                        backgroundColor: theme.colors.background,
                        color: theme.colors.text,
                        borderColor: `${theme.colors.primary}40`,
                        '--tw-ring-color': theme.colors.primary
                      }}
                      required
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium mb-2"
                           style={{ color: theme.colors.text }}>
                      Email *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      placeholder="your.email@example.com"
                      className="w-full px-4 py-3 rounded-lg border focus:outline-none focus:ring-2 transition-all duration-300"
                      style={{
                        backgroundColor: theme.colors.background,
                        color: theme.colors.text,
                        borderColor: `${theme.colors.primary}40`,
                        '--tw-ring-color': theme.colors.primary
                      }}
                      required
                    />
                  </div>
                </div>
                
                <div>
                  <label htmlFor="subject" className="block text-sm font-medium mb-2"
                         style={{ color: theme.colors.text }}>
                    Subject
                  </label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    placeholder="Project Discussion"
                    className="w-full px-4 py-3 rounded-lg border focus:outline-none focus:ring-2 transition-all duration-300"
                    style={{
                      backgroundColor: theme.colors.background,
                      color: theme.colors.text,
                      borderColor: `${theme.colors.primary}40`,
                      '--tw-ring-color': theme.colors.primary
                    }}
                  />
                </div>
                
                <div>
                  <label htmlFor="message" className="block text-sm font-medium mb-2"
                         style={{ color: theme.colors.text }}>
                    Message *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    placeholder="Tell me about your project or just say hello..."
                    rows="6"
                    className="w-full px-4 py-3 rounded-lg border focus:outline-none focus:ring-2 transition-all duration-300 resize-none"
                    style={{
                      backgroundColor: theme.colors.background,
                      color: theme.colors.text,
                      borderColor: `${theme.colors.primary}40`,
                      '--tw-ring-color': theme.colors.primary
                    }}
                    required
                  ></textarea>
                </div>
                
                <button
                  type="submit"
                  disabled={isLoading}
                  className="w-full px-6 py-3 rounded-lg transition-all duration-300 font-medium disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
                  style={{
                    backgroundColor: theme.colors.primary,
                    color: theme.colors.background
                  }}
                  onMouseEnter={(e) => !isLoading && (e.target.style.opacity = '0.9')}
                  onMouseLeave={(e) => !isLoading && (e.target.style.opacity = '1')}
                >
                  {isLoading ? (
                    <>
                      <div className="w-4 h-4 border-2 border-t-transparent rounded-full animate-spin"
                           style={{ borderColor: theme.colors.background }}></div>
                      Sending...
                    </>
                  ) : (
                    <>
                      <FaEnvelope size={16} />
                      Send Message
                    </>
                  )}
                </button>
              </form>
            )}
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
};

export default Contact;
