import React from "react";
import { motion } from "framer-motion";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";

const projects = [
  {
    title: "Local Crime Reporting System (NCR)",
    description:
      "A web-based platform designed to display regional crime data dynamically on an interactive map, helping users understand safety levels by area.",
    tech: "HTML, CSS, JavaScript, SQL",
    github: "https://github.com/NitinChugh13",
    image: "https://images.unsplash.com/photo-1507679799987-c73779587ccf?w=800",
  },
  {
    title: "Weather Forecasting Web Application",
    description:
      "A multi-page weather dashboard providing real-time forecasts with dynamic backgrounds and smooth UI transitions.",
    tech: "HTML, CSS, JavaScript, Weather API",
    github: "https://github.com/NitinChugh13",
    image: "https://images.unsplash.com/photo-1502303756787-1c0920efae4b?w=800",
  },
  {
    title: "EasyGov (Hackathon Project)",
    description:
      "A React-based web app that simplifies government document applications with multilingual support and a step-by-step guide.",
    tech: "React.js, Tailwind CSS, Framer Motion",
    github: "https://github.com/NitinChugh13",
    image: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=800",
  },
  {
    title: "Eduford",
    description:
      "An educational mini-project website for exploring online technical courses, designed for an elegant and responsive experience.",
    tech: "HTML, CSS, JavaScript",
    github: "https://github.com/NitinChugh13",
    image: "https://images.unsplash.com/photo-1557804506-669a67965ba0?w=800",
  },
];

const Projects = () => {
  return (
    <section
      id="projects"
      className="py-24 px-6 md:px-12 bg-gray-950 text-white"
    >
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="max-w-6xl mx-auto text-center"
      >
        <h2 className="text-4xl font-bold mb-12 text-indigo-400">
          Featured Projects
        </h2>

        <div className="grid gap-10 md:grid-cols-2">
          {projects.map((project, i) => (
            <motion.div
              key={i}
              whileHover={{ scale: 1.03 }}
              transition={{ type: "spring", stiffness: 200 }}
              className="bg-gray-900 rounded-2xl shadow-xl overflow-hidden border border-gray-800 hover:border-indigo-500 transition-all duration-300"
            >
              <div className="h-56 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover hover:scale-110 transition-transform duration-500"
                />
              </div>

              <div className="p-6 text-left">
                <h3 className="text-2xl font-semibold text-indigo-300 mb-3">
                  {project.title}
                </h3>
                <p className="text-gray-400 mb-4">{project.description}</p>
                <p className="text-sm text-gray-500 mb-6">
                  <strong>Tech Stack:</strong> {project.tech}
                </p>
                <div className="flex items-center gap-4">
                  <a
                    href={project.github}
                    target="_blank"
                    className="flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-indigo-500 to-purple-500 text-white rounded-full font-semibold hover:scale-105 transition-transform"
                  >
                    <FaGithub /> GitHub
                  </a>
                  <a
                    href="#"
                    className="flex items-center gap-2 px-4 py-2 border-2 border-indigo-400 text-indigo-400 rounded-full font-semibold hover:bg-indigo-500 hover:text-white transition-colors"
                  >
                    <FaExternalLinkAlt /> Live
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default Projects;
