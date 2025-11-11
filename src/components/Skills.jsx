import React from "react";
import { motion } from "framer-motion";
import {
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaReact,
  FaGitAlt,
  FaGithub,
  FaBootstrap,
} from "react-icons/fa";
import { SiTailwindcss, SiCplusplus, SiVite } from "react-icons/si";
import { FaCode } from "react-icons/fa";



const skills = [
  {
    title: "Frontend Development",
    items: [
      { name: "HTML5", icon: <FaHtml5 className="text-orange-500" /> },
      { name: "CSS3", icon: <FaCss3Alt className="text-blue-400" /> },
      { name: "JavaScript", icon: <FaJs className="text-yellow-400" /> },
      { name: "React.js", icon: <FaReact className="text-cyan-400" /> },
      { name: "Tailwind CSS", icon: <SiTailwindcss className="text-sky-400" /> },
      { name: "Bootstrap", icon: <FaBootstrap className="text-purple-400" /> },
    ],
  },
  {
    title: "Programming & Logic",
    items: [
      { name: "C++", icon: <SiCplusplus className="text-blue-500" /> },
      { name: "DSA", icon: <SiCplusplus className="text-indigo-400" /> },
    ],
  },
  {
    title: "Tools & Environment",
    items: [
      { name: "Git", icon: <FaGitAlt className="text-orange-400" /> },
      { name: "GitHub", icon: <FaGithub className="text-gray-300" /> },
     { name: "VS Code", icon: <FaCode className="text-blue-400" /> },
      { name: "Vite", icon: <SiVite className="text-yellow-400" /> },
    ],
  },
  {
    title: "Learning & Exploring",
    items: [
      { name: "Node.js", icon: <FaJs className="text-green-400" /> },
      { name: "Backend Development", icon: <FaJs className="text-lime-400" /> },
    ],
  },
];

const Skills = () => {
  return (
    <section id="skills" className="py-24 px-6 md:px-12 bg-gray-900 text-white">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="max-w-6xl mx-auto text-center"
      >
        <h2 className="text-4xl font-bold mb-12 text-indigo-400">
          Skills & Technologies
        </h2>

        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {skills.map((category, i) => (
            <motion.div
              key={i}
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 200 }}
              className="p-6 rounded-2xl bg-gray-800 shadow-lg border border-gray-700 hover:border-indigo-500 transition-all duration-300"
            >
              <h3 className="text-2xl font-semibold mb-4 text-indigo-300">
                {category.title}
              </h3>
              <ul className="space-y-3">
                {category.items.map((skill, j) => (
                  <li
                    key={j}
                    className="flex items-center justify-center sm:justify-start gap-3 text-gray-300 text-lg hover:text-indigo-400 transition-colors"
                  >
                    {skill.icon}
                    <span>{skill.name}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default Skills;
