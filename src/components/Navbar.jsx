// src/components/Navbar.jsx
import React, { useState, useEffect } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { useTheme } from "../context/ThemeContext";

const navLinks = [
  { name: "About", href: "#about" },
  { name: "Services", href: "#services" },
  { name: "Skills", href: "#skills" },
  { name: "Projects", href: "#projects" },
  { name: "Resume", href: "#resume" },
  { name: "Testimonials", href: "#testimonials" },
  { name: "Contact", href: "#contact" },
];

const Navbar = () => {
  const { theme } = useTheme();
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("");
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 24);

    window.addEventListener("scroll", onScroll, { passive: true });

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
      window.removeEventListener("scroll", onScroll);
      sections.forEach((section) => {
        if (section) observer.unobserve(section);
      });
    };
  }, [navLinks]);

  return (
    <header 
      className="fixed top-0 left-0 w-full z-50 transition-all duration-300"
      style={{
        backgroundColor: isScrolled ? `${theme.colors.surface}CC` : "transparent",
        backdropFilter: isScrolled ? "blur(14px)" : "none",
        boxShadow: isScrolled ? `0 10px 35px ${theme.colors.background}80` : "none",
      }}
    >
      <div className="max-w-7xl mx-auto px-4 md:px-8 py-3 flex justify-between items-center">
        <a
          href="#"
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          className="text-xl md:text-2xl font-black tracking-tight"
          style={{ color: theme.colors.primary }}
        >
          JAH'SWILL
        </a>

        {/* Desktop Menu */}
        <nav className="hidden lg:flex">
          <ul
            className="flex gap-2 font-medium px-3 py-2 rounded-full border"
            style={{
              backgroundColor: `${theme.colors.background}AA`,
              borderColor: `${theme.colors.primary}44`,
            }}
          >
            {navLinks.map((link) => (
              <li key={link.name}>
                <a
                  href={link.href}
                  className="px-4 py-2 rounded-full transition-all duration-300 font-semibold"
                  style={{
                    backgroundColor:
                      activeSection === link.href.substring(1)
                        ? `${theme.colors.primary}26`
                        : "transparent",
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

        <a
          href="#contact"
          className="hidden lg:inline-flex items-center px-5 py-2.5 rounded-full font-semibold transition-transform duration-300 hover:scale-105"
          style={{
            background: `linear-gradient(135deg, ${theme.colors.primary}, ${theme.colors.secondary})`,
            color: theme.colors.background,
          }}
        >
          Let's Talk
        </a>

        {/* Mobile Menu Icon */}
        <div className="lg:hidden text-2xl">
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
        <nav className="lg:hidden px-4 pb-4">
          <ul
            className="flex flex-col gap-2 p-4 rounded-2xl border"
            style={{
              backgroundColor: `${theme.colors.surface}F2`,
              borderColor: `${theme.colors.primary}44`,
            }}
          >
            {navLinks.map((link) => (
              <li key={link.name}>
                <a
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className="block px-4 py-2.5 rounded-lg transition-colors duration-300 font-semibold"
                  style={{
                    backgroundColor:
                      activeSection === link.href.substring(1)
                        ? `${theme.colors.primary}20`
                        : "transparent",
                    color: activeSection === link.href.substring(1) 
                      ? theme.colors.primary 
                      : theme.colors.text
                  }}
                >
                  {link.name}
                </a>
              </li>
            ))}
            <li className="pt-2">
              <a
                href="#contact"
                onClick={() => setIsOpen(false)}
                className="block text-center px-4 py-3 rounded-xl font-semibold"
                style={{
                  background: `linear-gradient(135deg, ${theme.colors.primary}, ${theme.colors.secondary})`,
                  color: theme.colors.background,
                }}
              >
                Start a Project
              </a>
            </li>
          </ul>
        </nav>
      )}
    </header>
  );
};

export default Navbar;
