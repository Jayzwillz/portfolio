// src/components/Navbar.jsx
import React, { useState, useEffect } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { useTheme } from "../context/ThemeContext";

const Navbar = () => {
  const { theme } = useTheme();
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("");

  const navLinks = [
    { name: "About", href: "#about" },
    { name: "Services", href: "#services" },
    { name: "Skills", href: "#skills" },
    { name: "Projects", href: "#projects" },
    { name: "Resume", href: "#resume" },
    { name: "Testimonials", href: "#testimonials" },
    { name: "Contact", href: "#contact" },
  ];

  useEffect(() => {
    const sections = navLinks.map((link) =>
      document.getElementById(link.href.substring(1))
    );

    const observer = new IntersectionObserver(
      (entries) => {
        const visibleSections = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio);

        if (visibleSections.length > 0) {
          setActiveSection(visibleSections[0].target.id);
        }
      },
      {
        root: null,
        threshold: [0.3, 0.5, 0.7],
      }
    );

    sections.forEach((section) => {
      if (section) observer.observe(section);
    });

    return () => {
      sections.forEach((section) => {
        if (section) observer.unobserve(section);
      });
    };
  }, [navLinks]);

  return (
    <header 
      className="fixed top-0 left-0 w-full backdrop-blur-md shadow-md z-50 transition-colors duration-300"
      style={{ backgroundColor: `${theme.colors.surface}E6` }}
    >
      <div className="max-w-6xl mx-auto px-4 py-3 flex justify-between items-center">
        <a
          href="#"
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          className="text-xl font-bold cursor-pointer"
          style={{ color: theme.colors.primary }}
        >
          Jah'swill
        </a>

        {/* Desktop Menu */}
        <nav className="hidden md:flex">
          <ul className="flex gap-6 font-medium">
            {navLinks.map((link) => (
              <li key={link.name}>
                <a
                  href={link.href}
                  className={`transition-colors duration-300 font-semibold`}
                  style={{
                    color: activeSection === link.href.substring(1) 
                      ? theme.colors.primary 
                      : theme.colors.text
                  }}
                >
                  {link.name}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        {/* Mobile Menu Icon */}
        <div className="md:hidden text-2xl">
          <button 
            onClick={() => setIsOpen(!isOpen)} 
            aria-label="Toggle Menu"
            style={{ color: theme.colors.text }}
          >
            {isOpen ? <FaTimes /> : <FaBars />}
          </button>
        </div>
      </div>

      {/* Mobile Dropdown Menu */}
      {isOpen && (
        <nav 
          className="md:hidden font-medium shadow-md transition-all duration-300"
          style={{ backgroundColor: theme.colors.surface }}
        >
          <ul className="flex flex-col items-center gap-4 py-4">
            {navLinks.map((link) => (
              <li key={link.name}>
                <a
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className={`transition-colors duration-300 font-semibold`}
                  style={{
                    color: activeSection === link.href.substring(1) 
                      ? theme.colors.primary 
                      : theme.colors.text
                  }}
                >
                  {link.name}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      )}
    </header>
  );
};

export default Navbar;
