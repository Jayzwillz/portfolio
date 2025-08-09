import React from "react";
import { motion } from "framer-motion";
import { FaExternalLinkAlt, FaGithub } from "react-icons/fa";
import { useTheme } from "../context/ThemeContext";

// Import images (replace others as needed)
import xzmovies from "/XZMovies.png";
import authApp from "/React Authentication.png";
import leadTracker from "/Lead Tracker.png";
import formerPortfolio from "/Former Portfolio.png";
import unitConverter from "/Unit Converter.png";
import passwordGenerator from "/Password Generator.png";
import quizApp from "/Quiz App.png";
import colorGame from "/Color Game.png";
import weatherApp from "/Weather App.png";
import carousel from "/Carousel.png";
import todoApp from "/Todo App.png";
import Backend from "/Backend.png";
import ChatApp from "/Chat App.png";
import CodeQuest from "/codequest.png";
import Vue_Todo_App from "/Vue Todo App.png";

const projects = [
  {
    title: "XZMovies App",
    description:
      "XZMovies is an AI-powered movie discovery app built with React, Node.js, and MongoDB. It lets users explore, search, and filter movies, view detailed info, and manage a watchlist—all with a sleek, responsive UI and TMDB API integration.",
    tech: [
      "React",
      "TMDB API",
      "Tailwind",
      "Redux Toolkit",
      "Node.js",
      "MongoDB",
    ],
    image: xzmovies,
    link: "https://xzmovies.me",
    repo: "https://github.com/Jayzwillz/movie-app.git",
    category: "fullstack",
  },
  {
    title: "Code Quest",
    description:
      "CodeQuest is a gamified STEM learning platform designed to equip students (ages 10–15) in underserved communities with foundational skills in coding, math, robotics, and AI. Built with a focus on engaging UI and progress tracking.",
    tech: ["React", "Tailwind", "Framer Motion", "Chart.js", "React Toastify"],
    image: CodeQuest,
    link: "https://codequest-gaming.netlify.app/",
    repo: "https://github.com/Jayzwillz/codequest.git",
    category: "frontend",
  },
  {
    title: "React Authentication App",
    description:
      "React Authentication App is a secure login and registration system built with React, Node.js, Express, and MongoDB. It features email/password authentication, protected routes, form validation, and JWT-based session management, all within a clean and responsive UI.",
    tech: ["React", "Tailwind", "Axios", "JWT", "LocalStorage"],
    image: authApp,
    link: "https://jayzwillz-react-authentication-app.netlify.app/",
    repo: "https://github.com/Jayzwillz/react-authentication.git",
    category: "fullstack",
  },
  {
    title: "CRUD Backend API",
    description:
      "CRUD Users API is a RESTful API built with Express.js and PostgreSQL that supports full Create, Read, Update, and Delete operations on a users table. It includes input validation, error handling, and follows best practices for routing and controller separation.",
    tech: ["Node.js", "Express", "PostgresSQL", "pg (node-postgres)"],
    image: Backend, // Placeholder image
    link: "#",
    repo: "https://github.com/Jayzwillz/crud-with-node.git",
    category: "backend",
  },
  {
    title: "Real-time Chat Application",
    description:
      "Real-Time Chat App is a responsive messaging platform built with React, Node.js, Express, and Socket.io. It enables users to send and receive messages instantly in real-time. Features include live typing indicators, user presence detection, and a clean, intuitive chat interface.",
    tech: ["React", "Node.js", "Socket.io"],
    image: ChatApp, // Placeholder image
    link: "https://jayz-chat-app.onrender.com",
    repo: "https://github.com/Jayzwillz/node-chat-app.git",
    category: "fullstack",
  },
  {
    title: "Lead Tracker App",
    description:
      "Leads Tracker App is a simple web app built with HTML, CSS, and JavaScript that allows users to save and manage website URLs. It uses localStorage to persist data, making it easy to keep track of leads even after refreshing the page.",
    tech: ["HTML", "CSS", "JavaScript", "LocalStorage"],
    image: leadTracker,
    link: "https://jayzwillz-leads-tracker-app.netlify.app/",
    repo: "https://github.com/Jayzwillz/Leads-Tracker-App.git",
    category: "frontend",
  },
  {
    title: "React Todo App",
    description:
      "React ToDo App is a task management application that allows users to add, edit, complete, and delete tasks. Built with React and styled using Tailwind CSS, it features state management with hooks and persists data using localStorage for a smooth user experience.",
    tech: ["React.js", "Tailwind", "JavaScript", "Local Storage", "Todo API"],
    image: todoApp, // Placeholder image
    link: "https://jahswill-react-todo-app.netlify.app/",
    repo: "https://github.com/Jayzwillz/task-api.git",
    category: "frontend",
  },
  {
    title: "Vue Todo App",
    description:
      "Vue ToDo App is a task management application built with Vue 3 and TypeScript. It allows users to add, edit, delete, and filter tasks, with support for pagination and nested routing. The app features a clean, responsive UI and persists data using localStorage.",
    tech: ["Vue.js", "Tailwind", "TypeScript", "Local Storage", "Todo API"],
    image: Vue_Todo_App, // Placeholder image
    link: "https://jayzwillz-todo-app.netlify.app/",
    repo: "https://github.com/Jayzwillz/task-api.git",
    category: "frontend",
  },
  {
    title: "Unit Converter",
    description:
      "Unit & Currency Converter App is a JavaScript-based tool that allows users to convert between various units (length, weight, temperature, etc.) and real-time currency values. It features a simple, interactive UI and fetches live exchange rates using a public currency API.",
    tech: ["HTML", "CSS", "JavaScript", "ExchangeRates API"],
    image: unitConverter,
    link: "https://jayzwillz-unit-converter.netlify.app/",
    repo: "https://github.com/Jayzwillz/Unit-Converter.git",
    category: "frontend",
  },
  {
    title: "Password Generator",
    description:
      "Password Generator App is a simple JavaScript tool that creates strong, customizable passwords. Users can choose the desired length and include options like uppercase letters, numbers, and special characters. It features a clean UI and clipboard copy functionality.",
    tech: ["HTML", "CSS", "JavaScript"],
    image: passwordGenerator,
    link: "https://jayzwillz-password-generator.netlify.app/",
    repo: "https://github.com/Jayzwillz/Password-Generator.git",
    category: "frontend",
  },
  {
    title: "React Quiz App",
    description:
      "React Quiz App is an interactive quiz application built with React that lets users test their knowledge through multiple-choice questions. It features score tracking, instant feedback, and a responsive UI for a smooth user experience.",
    tech: ["React", "Tailwind", "OpenTDB API", "Framer Motion"],
    image: quizApp,
    link: "https://jayzwillz-react-quiz-app.netlify.app/",
    repo: "https://github.com/Jayzwillz/react-quiz-app.git",
    category: "frontend",
  },
  {
    title: "Weather Forecast App",
    description:
      "Weather Forecast App is a responsive web app built with JavaScript that allows users to check current weather conditions and 5-day forecasts for any city. It fetches real-time data from the OpenWeatherMap API and displays temperature, humidity, wind speed, and more in a clean UI.",
    tech: ["HTML", "CSS", "JavaScript", "OpenWeather API"],
    image: weatherApp,
    link: "https://jayzwillz-weather-forecast-app.netlify.app/",
    repo: "https://github.com/Jayzwillz/Weather-Forecast-App.git",
    category: "frontend",
  },
];

const Projects = () => {
  const { theme } = useTheme();
  const [activeFilter, setActiveFilter] = React.useState("all");

  const filterOptions = [
    { key: "all", label: "All Projects" },
    { key: "fullstack", label: "Full-Stack" },
    { key: "frontend", label: "Frontend" },
    { key: "backend", label: "Backend" },
  ];

  const filteredProjects =
    activeFilter === "all"
      ? projects
      : projects.filter((project) => project.category === activeFilter);

  const getCategoryColor = (category) => {
    switch (category) {
      case "fullstack":
        return "bg-purple-600";
      case "frontend":
        return "bg-blue-600";
      case "backend":
        return "bg-green-600";
      default:
        return "bg-gray-600";
    }
  };

  return (
    <section
      id="projects"
      aria-labelledby="projects-heading"
      className="py-20 transition-colors duration-300"
      style={{
        backgroundColor: theme.colors.surface,
        color: theme.colors.text
      }}
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <motion.h2
          id="projects-heading"
          className="text-3xl sm:text-4xl font-extrabold text-center mb-8"
          style={{ color: theme.colors.primary }}
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          My Projects
        </motion.h2>

        {/* Filter Buttons */}
        <motion.div
          className="flex flex-wrap justify-center gap-4 mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
        >
          {filterOptions.map((option) => (
            <button
              key={option.key}
              onClick={() => setActiveFilter(option.key)}
              className={`px-6 py-2 rounded-full font-medium transition-all duration-300 border`}
              style={{
                backgroundColor: activeFilter === option.key ? theme.colors.primary : theme.colors.background,
                color: activeFilter === option.key ? theme.colors.background : theme.colors.text,
                borderColor: theme.colors.primary
              }}
            >
              {option.label}
            </button>
          ))}
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project, index) => (
            <motion.article
              key={`${activeFilter}-${index}`}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="flex flex-col rounded-lg shadow-lg overflow-hidden hover:scale-[1.02] transition-transform duration-300 border"
              style={{
                backgroundColor: theme.colors.background,
                borderColor: theme.colors.primary
              }}
              aria-labelledby={`project-title-${index}`}
            >
              <div className="relative">
                <img
                  src={project.image}
                  alt={`${project.title} preview`}
                  className="w-full h-48 object-cover object-center"
                  loading="lazy"
                />
                <span
                  className={`absolute top-2 right-2 px-2 py-1 text-xs font-semibold text-white rounded-full ${getCategoryColor(
                    project.category
                  )}`}
                >
                  {project.category.charAt(0).toUpperCase() +
                    project.category.slice(1)}
                </span>
              </div>

              <div className="flex flex-col justify-between flex-grow p-6 space-y-4">
                <div>
                  <h3
                    id={`project-title-${index}`}
                    className="text-xl font-semibold mb-2"
                    style={{ color: theme.colors.primary }}
                  >
                    {project.title}
                  </h3>
                  <p className="text-sm leading-relaxed min-h-[4rem]" style={{ color: theme.colors.textSecondary }}>
                    {project.description}
                  </p>

                  <ul
                    className="flex flex-wrap gap-2 text-xs text-gray-400 mt-4"
                    aria-label="Technologies used"
                  >
                    {project.tech.map((tech, i) => (
                      <li
                        key={i}
                        className="bg-gray-800 px-2 py-1 rounded-full border border-purple-500/30"
                      >
                        {tech}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="flex flex-wrap gap-3 pt-4">
                  {project.link !== "#" && (
                    <a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={`Live demo of ${project.title}`}
                      className="flex items-center gap-2 px-4 py-2 text-sm font-medium text-white bg-purple-600 rounded-lg hover:bg-purple-700 transition-colors"
                    >
                      Live Demo <FaExternalLinkAlt size={12} />
                    </a>
                  )}
                  <a
                    href={project.repo}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`GitHub repository of ${project.title}`}
                    className="flex items-center gap-2 px-4 py-2 text-sm font-medium text-white bg-gray-700 rounded-lg hover:bg-gray-600 transition-colors"
                  >
                    GitHub <FaGithub size={14} />
                  </a>
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
