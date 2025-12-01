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
  FaNodeJs,
  FaDocker,
  FaAws,
} from "react-icons/fa";
import {
  SiTailwindcss,
  SiCplusplus,
  SiVite,
  SiMongodb,
  SiExpress,
  SiSpring,
  SiFirebase,
  SiTypescript,
  SiRedux,
  SiGraphql,
  SiPostgresql,
  SiNextdotjs,
} from "react-icons/si";
import { GrMysql } from "react-icons/gr";
import { FaCode } from "react-icons/fa";

/**
 * Enhanced Skills.jsx
 * - Add extra skills
 * - Animated skill pills + animated proficiency bars
 * - Responsive grid
 * - Slight card hover motion
 */

const skills = [
  {
    title: "Frontend Development",
    items: [
      { name: "HTML5", icon: <FaHtml5 className="text-orange-500" />, level: 92 },
      { name: "CSS3", icon: <FaCss3Alt className="text-blue-400" />, level: 90 },
      { name: "JavaScript", icon: <FaJs className="text-yellow-400" />, level: 90 },
      { name: "TypeScript", icon: <SiTypescript className="text-sky-500" />, level: 82 },
      { name: "React.js", icon: <FaReact className="text-cyan-400" />, level: 88 },
      { name: "Next.js", icon: <SiNextdotjs className="text-gray-300" />, level: 70 },
      { name: "Tailwind CSS", icon: <SiTailwindcss className="text-sky-400" />, level: 86 },
      { name: "Bootstrap", icon: <FaBootstrap className="text-purple-400" />, level: 78 },
      { name: "Vite", icon: <SiVite className="text-yellow-400" />, level: 75 },
    ],
  },
  {
    title: "Programming & Logic",
    items: [
      { name: "C++", icon: <SiCplusplus className="text-blue-500" />, level: 84 },
      { name: "DSA", icon: <SiCplusplus className="text-indigo-400" />, level: 86 },
      { name: "Problem Solving", icon: <FaCode className="text-indigo-300" />, level: 85 },
    ],
  },
  {
    title: "Tools & Environment",
    items: [
      { name: "Git", icon: <FaGitAlt className="text-orange-400" />, level: 88 },
      { name: "GitHub", icon: <FaGithub className="text-gray-300" />, level: 90 },
      { name: "VS Code", icon: <FaCode className="text-blue-400" />, level: 92 },
      { name: "Docker", icon: <FaDocker className="text-sky-400" />, level: 68 },
      { name: "Vite", icon: <SiVite className="text-yellow-400" />, level: 75 },
      { name: "Redux", icon: <SiRedux className="text-violet-400" />, level: 72 },
    ],
  },
  {
    title: "Backend & Databases",
    items: [
      { name: "Node.js", icon: <FaNodeJs className="text-green-500" />, level: 82 },
      { name: "Express.js", icon: <SiExpress className="text-gray-300" />, level: 80 },
      { name: "MongoDB", icon: <SiMongodb className="text-green-400" />, level: 80 },
      { name: "PostgreSQL", icon: <SiPostgresql className="text-blue-500" />, level: 70 },
      { name: "MySQL", icon: <GrMysql className="text-blue-400" />, level: 72 },
      { name: "Spring", icon: <SiSpring className="text-green-500" />, level: 66 },
      { name: "GraphQL", icon: <SiGraphql className="text-pink-400" />, level: 62 },
      { name: "Firebase", icon: <SiFirebase className="text-yellow-400" />, level: 68 },
      { name: "AWS (Basics)", icon: <FaAws className="text-orange-400" />, level: 60 },
    ],
  },
];

/* small helper: convert level number to width percentage string */
const levelToWidth = (n) => `${Math.min(100, Math.max(0, n))}%`;

const Skills = () => {
  return (
    <section id="skills" className="py-12 md:py-24 px-4 md:px-12 bg-gradient-to-b from-gray-900 to-gray-950 text-white">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="max-w-7xl mx-auto text-center"
      >
        <h2 className="text-3xl sm:text-4xl font-bold mb-8 text-indigo-400">Skills & Technologies</h2>

        <p className="max-w-2xl mx-auto text-gray-400 mb-10">
          A snapshot of tools, frameworks and concepts I use daily — from modern frontend stacks to backend
          systems and developer tooling. Each card groups related skills; tap or hover to explore.
        </p>

        <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          {skills.map((category, i) => (
            <motion.div
  key={i}
  whileHover={{ scale: 1.03, y: -4 }}
  transition={{ type: "spring", stiffness: 220 }}
  className="relative p-6 rounded-2xl bg-gradient-to-br from-gray-800/80 to-gray-900/70 
             border border-gray-700 shadow-lg overflow-hidden"
>
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-xl font-semibold text-indigo-300">{category.title}</h3>
                <div className="text-sm bg-indigo-800/30 px-2 py-1 rounded text-indigo-200">{category.items.length} skills</div>
              </div>

              <ul className="space-y-3">
                {category.items.map((skill, j) => (
                  <motion.li
                    key={j}
                    initial={{ opacity: 0, x: -6 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.45, delay: j * 0.05 }}
                  >
                    <div className="flex items-center justify-between gap-4">
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 flex items-center justify-center rounded-lg bg-gray-800/50 border border-gray-700 text-xl text-gray-200">
                          {skill.icon}
                        </div>
                        <div className="text-left">
                          <div className="text-sm font-medium text-gray-200">{skill.name}</div>
                          {/* small animated proficiency bar */}
                          <div className="mt-1 w-40 sm:w-48 md:w-40 lg:w-48 h-2 bg-gray-800 rounded-full overflow-hidden">
                            <motion.div
                              className="h-full bg-gradient-to-r from-indigo-500 to-purple-500"
                              initial={{ width: 0 }}
                              whileInView={{ width: levelToWidth(skill.level) }}
                              viewport={{ once: true }}
                              transition={{ duration: 0.9, ease: "easeOut" }}
                            />
                          </div>
                        </div>
                      </div>

                      {/* <div className="hidden sm:flex items-center gap-2 min-w-fit shrink-0 overflow-visible">
  <div className="text-xs text-gray-400">{skill.level}%</div>
</div> */}
                    </div>
                  </motion.li>
                ))}
              </ul>

              {/* subtle footer tags */}
              <div className="mt-6 flex flex-wrap gap-2">
                <span className="text-xs px-2 py-1 bg-indigo-900/30 rounded text-indigo-200">Modern</span>
                <span className="text-xs px-2 py-1 bg-indigo-900/30 rounded text-indigo-200">Responsive</span>
                <span className="text-xs px-2 py-1 bg-indigo-900/30 rounded text-indigo-200">Production</span>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default Skills;
