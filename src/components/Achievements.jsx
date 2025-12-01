import React from "react";
import { motion } from "framer-motion";
import { FaCode, FaUsers, FaTrophy, FaGithub, FaLaptopCode, FaAward } from "react-icons/fa";

const achievements = [
  {
    icon: <FaLaptopCode className="text-indigo-300 text-4xl" />,
    title: "Front-End Lead — Local Crime Reporting System",
    description:
      "Led the UX & UI engineering for NCR real-time crime visualization project with dynamic map rendering, responsive UI, and color-coded data representation.",
  },
  {
    icon: <FaAward className="text-yellow-300 text-4xl" />,
    title: "Hackathon Finalist — EasyGov Platform",
    description:
      "Finalist in a national-level hackathon. Built a multilingual government-service platform with guided workflows, accessibility design, and a modern React interface.",
  },
  {
    icon: <FaGithub className="text-gray-200 text-4xl" />,
    title: "Open Source Contributor",
    description:
      "Contributed to multiple repositories focusing on UI innovation, code quality, reusable components, and front-end best practices.",
  },
  {
    icon: <FaUsers className="text-purple-300 text-4xl" />,
    title: "Collaborative Engineering Team Player",
    description:
      "Worked efficiently in team environments, leading design decisions, code reviews, Git workflows, and maintaining project structure & scalability.",
  },
  {
    icon: <FaCode className="text-cyan-300 text-4xl" />,
    title: "Built 15+ Full-Stack Projects",
    description:
      "Practical experience across MERN stack, REST APIs, authentication systems, dashboards, UI animations, and performance optimization.",
  },
  {
  icon: <FaTrophy className="text-orange-300 text-4xl" />,
  title: "Top Performer — Web Development Track",
  description:
    "Recognized as one of the top performers in web development for consistently delivering high-quality UI/UX designs, optimized code, and innovative project solutions across multiple assessments and practical evaluations.",
},
];

const Achievements = () => {
  return (
    <section
      id="achievements"
      className="relative py-16 md:py-24 px-4 md:px-12 bg-gray-950 text-white overflow-hidden"
    >
      {/* Background glow */}
      <div className="absolute inset-0 bg-gradient-to-br from-indigo-700/20 via-purple-700/10 to-transparent blur-3xl"></div>

      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="relative max-w-6xl mx-auto z-10 text-center"
      >
        <h2 className="text-4xl sm:text-5xl font-extrabold mb-12 bg-gradient-to-r from-indigo-400 to-purple-500 bg-clip-text text-transparent drop-shadow-[0_0_20px_rgba(139,92,246,0.5)]">
          Achievements & Activities
        </h2>

        {/* Grid of Cards */}
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-2">
          {achievements.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.9, y: 30 }}
              whileInView={{ opacity: 1, scale: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.15 }}
              whileHover={{
                scale: 1.05,
                boxShadow: "0 0 35px rgba(139,92,246,0.5)",
              }}
              className="p-6 rounded-2xl bg-white/5 backdrop-blur-xl border border-white/10 shadow-xl hover:border-indigo-500/40 transition-all duration-300 text-left relative overflow-hidden"
            >
              {/* Floating icon */}
              <motion.div
                animate={{ y: [0, -6, 0] }}
                transition={{ duration: 2, repeat: Infinity }}
                className="mb-4"
              >
                {item.icon}
              </motion.div>

              <h3 className="text-2xl font-semibold text-indigo-300 mb-2">
                {item.title}
              </h3>

              <p className="text-gray-300 leading-relaxed">{item.description}</p>

              {/* Glow highlight behind card */}
              <div className="absolute inset-0 opacity-0 hover:opacity-20 bg-gradient-to-br from-indigo-500 to-purple-500 blur-2xl transition-opacity"></div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default Achievements;
