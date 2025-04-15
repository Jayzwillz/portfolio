import React from "react";
import { motion } from "framer-motion";
import { FaExternalLinkAlt, FaGithub } from "react-icons/fa";

// Import images (replace others as needed)
import xzmovies from "../../public/XZMovies.png";
import authApp from "../../public/React Authentication.png";
import leadTracker from "../../public/Lead Tracker.png";
import formerPortfolio from "../../public/Former Portfolio.png";
import unitConverter from "../../public/Unit Converter.png";
import passwordGenerator from "../../public/Password Generator.png";
import quizApp from "../../public/Quiz App.png";
import colorGame from "../../public/Color Game.png";
import weatherApp from "../../public/Weather App.png";
import carousel from "../../public/Carousel.png";
import todoApp from "../../public/Todo App.png";

const projects = [
  {
    title: "XZMovies App",
    description:
      "A powerful movie app built with React and TMDB API featuring search, genres, watchlist, trailers, and more.",
    tech: ["React", "TMDB API", "Tailwind", "Redux Toolkit"],
    image: xzmovies,
    link: "https://xzmovies.me",
    repo: "https://github.com/Jayzwillz/movie-app.git",
  },
  {
    title: "React Authentication App",
    description:
      "A secure authentication system with login, registration, and protected routes.",
    tech: ["React", "Tailwind", "Axios"],
    image: authApp,
    link: "https://jayzwillz-react-authentication-app.netlify.app/",
    repo: "https://github.com/Jayzwillz/react-authentication.git",
  },
  {
    title: "Lead Tracker App",
    description:
      "Leads Tracker WebApp that saves leads locally using localStorage. Built for quick lead management.",
    tech: ["HTML", "CSS", "JavaScript"],
    image: leadTracker,
    link: "https://jayzwillz-leads-tracker-app.netlify.app/",
    repo: "https://github.com/Jayzwillz/Leads-Tracker-App.git",
  },
  {
    title: "My Former Portfolio",
    description:
      "A previous portfolio website showcasing projects and skills with smooth scroll and responsive layout.",
    tech: ["HTML", "CSS", "JavaScript"],
    image: formerPortfolio,
    link: "https://jahswill-portfolio.netlify.app/",
    repo: "https://github.com/Jayzwillz/My-Portfolio.git",
  },
  {
    title: "Unit Converter",
    description:
      "A clean, functional unit converter supporting multiple measurements, with a responsive UI.",
    tech: ["HTML", "CSS", "JavaScript", "ExchangeRates API"],
    image: unitConverter,
    link: "https://jayzwillz-unit-converter.netlify.app/",
    repo: "https://github.com/Jayzwillz/Unit-Converter.git",
  },
  {
    title: "Password Generator",
    description:
      "Custom password generator app that includes character options and strength indicators.",
    tech: ["HTML", "CSS", "JavaScript"],
    image: passwordGenerator,
    link: "https://jayzwillz-password-generator.netlify.app/",
    repo: "https://github.com/Jayzwillz/Password-Generator.git",
  },
  {
    title: "React Quiz App",
    description:
      "Interactive quiz game with multiple-choice questions & drag and drop, score tracking, and animated transitions.",
    tech: ["React", "Tailwind", "OpenTDB API"],
    image: quizApp,
    link: "https://jayzwillz-react-quiz-app.netlify.app/",
    repo: "https://github.com/Jayzwillz/react-quiz-app.git",
  },
  {
    title: "Colour Game",
    description:
      "A color-guessing game for fun and quick play. Great for kids and color learning.",
    tech: ["HTML", "CSS", "JavaScript"],
    image: colorGame,
    link: "https://jayzwillz-color-game.netlify.app/",
    repo: "https://github.com/Jayzwillz/Color-Game.git",
  },
  {
    title: "Weather Forecast App",
    description:
      "Weather app with 5-day forecast and geolocation support powered by OpenWeather API.",
    tech: ["HTML", "CSS", "JavaScript", "OpenWeather API"],
    image: weatherApp,
    link: "https://jayzwillz-weather-forecast-app.netlify.app/",
    repo: "https://github.com/Jayzwillz/Weather-Forecast-App.git",
  },
  {
    title: "Car Carousel App",
    description:
      "A responsive car showcase app with a slick carousel interface and vehicle display.",
    tech: ["HTML", "CSS", "JavaScript"],
    image: carousel,
    link: "https://jayzwillz-carousel.netlify.app/",
    repo: "https://github.com/Jayzwillz/Carousel.git",
  },
  {
    title: "React Todo App",
    description:
      "Task manager with CRUD features, pagination, and localStorage persistence.",
    tech: ["React", "CSS", "LocalStorage"],
    image: todoApp,
    link: "https://jahswill-react-todo-app.netlify.app/",
    repo: "https://github.com/Jayzwillz/React-To-do-App.git",
  },
];

const Projects = () => {
  return (
    <section id="projects" className="py-20 bg-gray-950 text-white">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <h2 className="text-3xl sm:text-4xl font-extrabold text-center text-purple-400 mb-12">
          My Projects
        </h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: index * 0.1 }}
              className="flex flex-col bg-gray-900 rounded-lg shadow-lg overflow-hidden hover:scale-[1.015] transition-transform duration-300"
            >
              <img
                src={
                  typeof project.image === "string"
                    ? project.image
                    : project.image?.src
                }
                alt={project.title}
                className="w-full h-48 object-cover object-center"
                loading="lazy"
              />
              <div className="flex flex-col justify-between flex-grow p-6 space-y-4">
                <div>
                  <h3 className="text-xl font-semibold text-purple-300">
                    {project.title}
                  </h3>
                  <p className="text-gray-300 text-sm mt-2 min-h-[3.5rem]">
                    {project.description}
                  </p>
                  <ul className="flex flex-wrap gap-2 text-xs text-gray-400 mt-4">
                    {project.tech.map((tech, i) => (
                      <li
                        key={i}
                        className="bg-gray-800 px-2 py-1 rounded-full border border-purple-500"
                      >
                        {tech}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="flex flex-wrap gap-4 pt-6">
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 px-4 py-2 text-sm font-medium text-white bg-purple-600 rounded hover:bg-purple-700 transition"
                  >
                    Live Demo <FaExternalLinkAlt size={14} />
                  </a>
                  <a
                    href={project.repo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 px-4 py-2 text-sm font-medium text-white bg-gray-700 rounded hover:bg-gray-600 transition"
                  >
                    GitHub <FaGithub size={16} />
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
