import React from "react";
import { motion } from "framer-motion";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";

/**
 * Projects.jsx (enhanced)
 * Replace your current Projects.jsx with this file.
 * Requires: framer-motion, react-icons, Tailwind CSS
 */

const projects = [
  {
    title: "UrbanCartX-Ai Integrated E-commerce Platform",
    description:
      "A full-stack e-commerce web application with AI-driven product recommendations, user authentication, and a responsive design.",
    tech: "React.js, Node.js, Express, MongoDB, Tailwind CSS, Firebase, Cloudinary, fuse.js",
    github: "https://github.com/NitinChugh13/UrbanCartX-",
    image:
      "https://img.freepik.com/free-photo/black-friday-sales-sign-neon-light_23-2151833076.jpg?semt=ais_hybrid&w=740&q=80",
    live: "https://urbancartx-frontendu.onrender.com/",
  },
  {
    title: "Local Crime Repoting (Hackathon Project)",
    description:
      "A web application that allows users to report local crimes, view crime statistics, and receive safety alerts in their area.",
    tech: "HTML, CSS, JavaScript, Python, leaflet.js, Flask",
    github: "https://github.com/NitinChugh13/LCR-Community-Safety",
    image:
      "https://t3.ftcdn.net/jpg/17/95/18/84/240_F_1795188450_9sEJSGjA6IvoQFTiJ8X1wkBRtOn4JUBj.jpg",
    live: "https://lcr-community-safety.onrender.com",
  },
  {
    title: "My Portfolio",
    description:
      "A personal portfolio website to showcase my projects, skills, and experience with a modern design and smooth animations.",
    tech: "React.js, Tailwind CSS, Framer Motion",
    github: "https://github.com/NitinChugh13/My-Portfolio",
    image:
      "https://images.pexels.com/photos/14936128/pexels-photo-14936128.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    live: "https://my-portfolio-n986.onrender.com",
  },
  {
    title: "Eduford",
    description:
      "An educational mini-project website for exploring online technical courses, designed for an elegant and responsive experience.",
    tech: "HTML, CSS, JavaScript",
    github:
      "https://github.com/NitinChugh13/EduFord-A-One-Stop-Solution-For-Technical-Courses",
    image:
      "https://www.21kschool.com/in/wp-content/uploads/sites/4/2023/09/Pros-and-Cons-of-Using-Education-Technology.png",
    live: "https://eduford-a-one-stop-solution-for-nuqo.onrender.com",
  },
];

const cardVariants = {
  idle: { scale: 1, y: 0, rotateX: 0, rotateY: 0 },
  hover: (tilt = 8) => ({
    scale: 1.02,
    y: -8,
    rotateX: 0,
    rotateY: 0,
    transition: { type: "spring", stiffness: 200, damping: 18 },
  }),
};

const imgVariants = {
  idle: { scale: 1 },
  hover: { scale: 1.08, transition: { duration: 0.6, ease: "easeOut" } },
};

const overlayVariants = {
  idle: { opacity: 0, y: 8 },
  hover: { opacity: 1, y: 0, transition: { duration: 0.35, ease: "easeOut" } },
};

const badgeContainer = {
  hidden: {},
  show: { transition: { staggerChildren: 0.06, delayChildren: 0.06 } },
};

const badgeVariants = {
  hidden: { opacity: 0, y: 6 },
  show: { opacity: 1, y: 0, transition: { duration: 0.35 } },
};

const Projects = () => {
  return (
    <section id="projects" className="py-12 md:py-20 px-6 md:px-12 bg-gray-950 text-white">
      <div className="max-w-6xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="text-3xl sm:text-4xl md:text-4xl font-bold mb-10 text-indigo-400 text-center"
        >
          Featured Projects
        </motion.h2>

        <div className="grid gap-8 grid-cols-1 md:grid-cols-2">
          {projects.map((project, i) => {
            const techItems = project.tech.split(",").map((t) => t.trim()).filter(Boolean);
            return (
              <motion.article
                key={i}
                className="relative rounded-2xl shadow-xl border border-gray-800 overflow-hidden bg-gradient-to-br from-gray-900/60 to-gray-900/50"
                initial="idle"
                whileHover="hover"
                variants={cardVariants}
                custom={8}
              >
                {/* Image + overlay */}
                <div className="relative w-full h-48 sm:h-56 md:h-56">
                  <motion.img
                    src={project.image}
                    alt={project.title}
                    loading="lazy"
                    className="w-full h-full object-cover"
                    variants={imgVariants}
                    initial="idle"
                  />
                  {/* soft accent border glow */}
                  <div className="absolute inset-0 pointer-events-none rounded-2xl ring-0 hover:ring-4 hover:ring-indigo-600/20 transition-all" />

                  {/* overlay content slides in on hover (pointer devices). On touch devices the content is visible below the image. */}
                  <motion.div
                    className="absolute left-4 right-4 -bottom-6 sm:-bottom-8 bg-gradient-to-t from-black/70 to-transparent rounded-xl px-4 py-3"
                    variants={overlayVariants}
                    initial="idle"
                  >
                    <h3 className="text-lg sm:text-xl font-semibold text-indigo-200">{project.title}</h3>
                    <p className="text-xs sm:text-sm text-gray-300 mt-1 line-clamp-2">{project.description}</p>
                  </motion.div>
                </div>

                {/* Content area */}
                <div className="p-5 sm:p-6">
                  <div className="flex items-start justify-between gap-3">
                    <div>
                      <h3 className="text-lg sm:text-xl md:text-2xl font-semibold text-indigo-300 mb-1">
                        {project.title}
                      </h3>
                      <p className="text-gray-400 text-sm sm:text-base leading-relaxed mb-3 hidden sm:block">
                        {project.description}
                      </p>
                    </div>

                    <div className="text-xs text-gray-400 hidden sm:flex items-center">#{i + 1}</div>
                  </div>

                  {/* tech badges (animated) */}
                  <motion.div
                    className="flex flex-wrap gap-2 mb-4"
                    variants={badgeContainer}
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: true }}
                  >
                    {techItems.slice(0, 6).map((t, idx) => (
                      <motion.span
                        key={idx}
                        variants={badgeVariants}
                        className="text-xs sm:text-sm bg-gray-800/60 px-3 py-1 rounded-full text-gray-300 border border-gray-700"
                      >
                        {t}
                      </motion.span>
                    ))}
                    {techItems.length > 6 && (
                      <motion.span
                        variants={badgeVariants}
                        className="text-xs sm:text-sm bg-indigo-800/60 px-3 py-1 rounded-full text-indigo-100 font-medium"
                      >
                        +{techItems.length - 6} more
                      </motion.span>
                    )}
                  </motion.div>

                  {/* actions */}
                  <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 sm:gap-4">
                    <motion.a
                      whileTap={{ scale: 0.98 }}
                      href={project.github}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center justify-center gap-2 px-4 py-2 bg-gradient-to-r from-indigo-500 to-purple-500 text-white rounded-full font-semibold text-sm shadow hover:shadow-lg transition transform"
                    >
                      <FaGithub /> GitHub
                    </motion.a>

                    <motion.a
                      whileTap={{ scale: 0.98 }}
                      href={project.live || "#"}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center justify-center gap-2 px-4 py-2 border-2 border-indigo-400 text-indigo-300 rounded-full font-semibold text-sm hover:bg-indigo-500 hover:text-white transition-colors"
                    >
                      <FaExternalLinkAlt /> Live
                    </motion.a>

                    <motion.button
                      whileTap={{ scale: 0.98 }}
                      type="button"
                      onClick={() => {
                        // placeholder for details / modal
                        // if you want a modal, we can open one here and pass project info
                        // currently will scroll to projects as subtle feedback
                        document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" });
                      }}
                      className="mt-0 sm:mt-0 ml-0 sm:ml-auto inline-flex items-center gap-2 px-4 py-2 bg-gray-800/60 text-gray-200 rounded-full text-sm hover:bg-gray-800 transition"
                    >
                      View Details
                    </motion.button>
                  </div>
                </div>
              </motion.article>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Projects;
