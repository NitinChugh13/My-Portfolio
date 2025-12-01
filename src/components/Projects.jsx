import React from "react";
import { motion } from "framer-motion";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";

const projects = [
  {
    title: "UrbanCartX-Ai Integrated E-commerce Platform",
    description:
      "A full-stack e-commerce web application with AI-driven product recommendations, user authentication, and a responsive design.",
    tech: "React.js, Node.js, Express, MongoDB, Tailwind CSS, Firebase,Cloudinary,fuse.js",
    github: "https://github.com/NitinChugh13/UrbanCartX-",
    image: "https://img.freepik.com/free-photo/black-friday-sales-sign-neon-light_23-2151833076.jpg?semt=ais_hybrid&w=740&q=80",
    live: "https://urbancartx-frontendu.onrender.com/",
  },
  {
    title: "Quiz Application",
    description:
      "A dynamic quiz application that allows users to take quizzes on various topics, track scores, and view results with a sleek UI.",
    tech: "HTML, CSS, JavaScript, spring boot",
    github: "https://github.com/NitinChugh13/Quiz_App",
    image: "https://repository-images.githubusercontent.com/182525249/aadd7a80-54fe-11eb-9872-ccd06b8789b6",
  },
  {
    title: "My Portfolio",
    description:
      "A personal portfolio website to showcase my projects, skills, and experience with a modern design and smooth animations.",
    tech: "React.js, Tailwind CSS, Framer Motion",
    github: "https://github.com/NitinChugh13/My-Portfolio",
    image: "https://images.pexels.com/photos/14936128/pexels-photo-14936128.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    live : "https://my-portfolio-n986.onrender.com",
  },
  {
    title: "Eduford",
    description:
      "An educational mini-project website for exploring online technical courses, designed for an elegant and responsive experience.",
    tech: "HTML, CSS, JavaScript",
    github: "https://github.com/NitinChugh13/EduFord-A-One-Stop-Solution-For-Technical-Courses",
    image: "https://www.21kschool.com/in/wp-content/uploads/sites/4/2023/09/Pros-and-Cons-of-Using-Education-Technology.png",
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
                    href={project.live || "#"}
                    target="_blank"
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
