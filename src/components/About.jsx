import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import profile from "../assets/profile.jpeg";
import resume from "../assets/resume.pdf";
const About = () => {
  // animated stat counters
  const [projectsCount, setProjectsCount] = useState(0);
  const [yearsCount, setYearsCount] = useState(0);
  const [clientsCount, setClientsCount] = useState(0);

  useEffect(() => {
    // simple counting animation
    let p = 0,
      y = 0,
      c = 0;
    const pTarget = 12; // example number of projects
    const yTarget = 2; // years experience approx
    const cTarget = 6; // clients / collaborators

    const interval = setInterval(() => {
      if (p < pTarget) p += 1;
      if (y < yTarget) y += 1;
      if (c < cTarget) c += 1;

      setProjectsCount(p);
      setYearsCount(y);
      setClientsCount(c);

      if (p >= pTarget && y >= yTarget && c >= cTarget) {
        clearInterval(interval);
      }
    }, 120);

    return () => clearInterval(interval);
  }, []);

  const skillList = [
    "React.js",
    "Tailwind CSS",
    "Framer Motion",
    "JavaScript (ES6+)",
    "TypeScript",
    "Node.js",
    "MongoDB",
    "Responsive Design",
  ];

  return (
    <section
      id="about"
      className="relative py-12 md:py-24 px-4 md:px-12 lg:px-20 bg-gray-950 text-white"
      aria-labelledby="about-heading"
    >
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="max-w-5xl mx-auto flex flex-col-reverse md:flex-row items-center md:items-start gap-8 md:gap-12"
      >
        {/* Left: Image + Ring */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 8 }}
          whileInView={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 0.8, type: "spring", stiffness: 80 }}
          className="w-44 h-44 md:w-80 md:h-80 flex-shrink-0 relative"
        >
          {/* animated outer ring */}
          <div className="absolute -inset-1 rounded-full p-1 md:p-2 flex items-center justify-center">
            <div
              className="w-full h-full rounded-full"
              style={{
                background:
                  "conic-gradient(from 180deg at 50% 50%, rgba(99,102,241,0.9), rgba(139,92,246,0.85) 35%, rgba(168,85,247,0.8) 70%, rgba(99,102,241,0.9))",
                filter: "blur(6px)",
                transform: "scale(1.02)",
                opacity: 0.55,
              }}
            />
          </div>

          {/* profile image with double ring */}
          <div className="relative w-full h-full flex items-center justify-center">
            <div className="absolute inset-0 rounded-full border-4 border-indigo-800/30 transform scale-100" />
            <div className="absolute inset-3 md:inset-4 rounded-full border-4 border-indigo-500/40" />
            <img
              src={profile}
              alt="Nitin Chugh"
              className="relative rounded-full object-cover w-full h-full border-4 border-gray-900 shadow-2xl"
              style={{ background: "#000" }}
            />
          </div>

          {/* small floating badges under image - only visible md and up */}
          <div className="hidden md:flex flex-col gap-3 absolute -left-36 top-8">
            <motion.span
              initial={{ x: -20, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.15 }}
              className="px-4 py-2 rounded-full bg-gray-800/60 border border-gray-700 text-gray-200 text-sm shadow"
            >
              React
            </motion.span>
            <motion.span
              initial={{ x: -20, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.55, delay: 0.25 }}
              className="px-4 py-2 rounded-full bg-gray-800/60 border border-gray-700 text-gray-200 text-sm shadow"
            >
              Tailwind
            </motion.span>
            <motion.span
              initial={{ x: -20, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.35 }}
              className="px-4 py-2 rounded-full bg-gray-800/60 border border-gray-700 text-gray-200 text-sm shadow"
            >
              TypeScript
            </motion.span>
          </div>
        </motion.div>

        {/* Right: Text content */}
        <div className="flex-1 text-center md:text-left">
          <h2
            id="about-heading"
            className="text-3xl sm:text-4xl md:text-4xl font-bold mb-4 text-indigo-400"
          >
            About Me
          </h2>

          <motion.p
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-gray-300 text-base sm:text-lg leading-relaxed mb-4"
          >
            Hi — I’m{" "}
            <span className="text-indigo-400 font-semibold">Nitin Chugh</span>, a
            curious and design-minded web developer. I build accessible,
            responsive web applications that marry meaningful interactions with
            robust front-end engineering. Currently pursuing B.Tech in IT at
            ABES Engineering College, I love converting complex problems into
            simple, fast, and delightful user experiences.
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.05 }}
            className="text-gray-400 text-base sm:text-lg leading-relaxed mb-4"
          >
            My toolkit includes modern React patterns, Tailwind CSS, Framer
            Motion for polished animation, and backend fundamentals for
            end-to-end solutions. I focus on performance, accessibility, and
            maintainable code — and I love collaborating on projects that solve
            real user problems.
          </motion.p>

          {/* highlights / quick card */}
          <motion.div
            initial={{ opacity: 0, y: 8 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="mt-4 inline-block bg-gray-900/60 border border-gray-800 rounded-2xl px-5 py-4 shadow-lg"
          >
            <div className="flex items-center gap-6">
              <div>
                <p className="text-xs text-gray-400 uppercase">Open to</p>
                <p className="text-sm md:text-base text-white font-medium">
                  Internships · Freelance · Collaboration
                </p>
              </div>
              <div className="hidden sm:block border-l border-gray-700 h-10" />
              <div>
                <p className="text-xs text-gray-400 uppercase">Based in</p>
                <p className="text-sm md:text-base text-white font-medium">
                  Delhi , India
                </p>
              </div>
            </div>
          </motion.div>

          {/* buttons */}
          <div className="mt-6 md:mt-8 flex flex-col sm:flex-row items-center sm:items-start gap-3 sm:gap-4">
            <a
              href="#projects"
              className="w-full sm:w-auto flex items-center justify-center gap-2 px-5 py-3 bg-gradient-to-r from-indigo-500 to-purple-500 text-white rounded-full font-semibold hover:scale-105 transition-transform"
            >
              View Projects
              <svg
                className="w-4 h-4"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" d="M5 12h14M12 5l7 7-7 7" />
              </svg>
            </a>

            <a
              href={resume}
              download
              className="w-full sm:w-auto flex items-center justify-center gap-2 px-5 py-3 border-2 border-indigo-600 rounded-full text-indigo-300 hover:bg-indigo-700/10 transition"
            >
              <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                <path strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" d="M12 3v12m0 0l4-4m-4 4l-4-4" />
                <path strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
              </svg>
              Download Resume
            </a>

            <a
              href="#contact"
              className="w-full sm:w-auto flex items-center justify-center gap-2 px-5 py-3 border-2 border-purple-500 rounded-full text-purple-300 hover:bg-purple-700/10 transition"
            >
              Contact Me
            </a>
          </div>

          {/* skill chips */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mt-6 flex flex-wrap gap-3"
          >
            {skillList.map((s, i) => (
              <motion.span
                key={s}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.35, delay: i * 0.05 }}
                className="px-3 py-2 rounded-full bg-gray-800/50 border border-gray-700 text-gray-200 text-sm shadow-sm"
              >
                {s}
              </motion.span>
            ))}
          </motion.div>

          {/* stats counters */}
          <div className="mt-8 grid grid-cols-3 gap-4 max-w-md">
            <motion.div
              initial={{ opacity: 0, y: 8 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-center"
            >
              <p className="text-2xl md:text-3xl font-bold text-indigo-300">{projectsCount}+</p>
              <p className="text-xs text-gray-400">Projects</p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 8 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.08 }}
              className="text-center"
            >
              <p className="text-2xl md:text-3xl font-bold text-indigo-300">{yearsCount}y</p>
              <p className="text-xs text-gray-400">Experience</p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 8 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.16 }}
              className="text-center"
            >
              <p className="text-2xl md:text-3xl font-bold text-indigo-300"> {clientsCount}+</p>
              <p className="text-xs text-gray-400">Collaborators</p>
            </motion.div>
          </div>
        </div>
      </motion.div>

      {/* small mobile improvements */}
      <style jsx>{`
        /* subtle shadow for the section on very small devices so the hero stands out */
        @media (max-width: 520px) {
          section#about {
            padding-top: 20px;
            padding-bottom: 28px;
          }
        }
      `}</style>
    </section>
  );
};

export default About;
