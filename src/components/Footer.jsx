import React from "react";
import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";
import { motion } from "framer-motion";

const Footer = () => {
  return (
    <motion.footer
      className="bg-gray-950 text-gray-400 py-10 mt-20"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
    >
      <div className="max-w-7xl mx-auto px-6 flex flex-col items-center gap-6 text-center">
        <h3 className="text-xl font-semibold text-purple-400">
          Jah'swill Uchechi Emmanuel
        </h3>

        <p className="text-sm max-w-xl">
          Front-End Developer passionate about crafting responsive, accessible, and high-performance web applications. Let's build something amazing together.
        </p>

        <div className="flex gap-6 mt-2">
          <a href="https://github.com/jayzwillz" target="_blank" rel="noopener noreferrer" className="hover:text-white transition">
            <FaGithub size={20} />
          </a>
          <a href="https://linkedin.com/in/jayzwillz" target="_blank" rel="noopener noreferrer" className="hover:text-white transition">
            <FaLinkedin size={20} />
          </a>
          <a href="https://twitter.com/jahswill1914" target="_blank" rel="noopener noreferrer" className="hover:text-white transition">
            <FaTwitter size={20} />
          </a>
        </div>

        <p className="text-xs text-gray-500 mt-4">
          &copy; {new Date().getFullYear()} Jah'swill. All rights reserved.
        </p>
      </div>
    </motion.footer>
  );
};

export default Footer;
