import React from "react";
import { motion } from "framer-motion";
import { FaCode, FaUsers, FaTrophy, FaGithub } from "react-icons/fa";

const achievements = [
  {
    icon: <FaCode className="text-indigo-400 text-4xl" />,
    title: "Front-End Lead — Local Crime Reporting System",
    description:
      "Led the UI and UX design for a web application that visualized real-time NCR crime data. Focused on responsive layout, dynamic color coding, and interactive maps.",
  },
  {
    icon: <FaTrophy className="text-yellow-400 text-4xl" />,
    title: "Hackathon Finalist — EasyGov Project",
    description:
      "Developed a government service assistance platform with multilingual support and a modern React + Tailwind interface for improved accessibility.",
  },
  {
    icon: <FaGithub className="text-gray-300 text-4xl" />,
    title: "Open-Source Contributor",
    description:
      "Actively contribute to open-source projects and maintain multiple personal repositories on GitHub with a focus on front-end and UI innovation.",
  },
  {
    icon: <FaUsers className="text-purple-400 text-4xl" />,
    title: "Collaborative Team Player",
    description:
      "Work effectively in team environments — leading design efforts, managing commits, and ensuring seamless collaboration via Git and GitHub.",
  },
];

const Achievements = () => {
  return (
    <section
      id="achievements"
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
          Achievements & Activities
        </h2>

        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-2">
          {achievements.map((item, i) => (
            <motion.div
              key={i}
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 200 }}
              className="p-6 bg-gray-900 rounded-2xl shadow-xl border border-gray-800 hover:border-indigo-500 transition-all duration-300 text-left"
            >
              <div className="mb-4">{item.icon}</div>
              <h3 className="text-2xl font-semibold text-indigo-300 mb-2">
                {item.title}
              </h3>
              <p className="text-gray-400 leading-relaxed">
                {item.description}
              </p>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default Achievements;
