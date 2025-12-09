import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import profile from "../assets/profile.jpeg";
import resume from "../assets/resume.pdf";

const About = () => {
  // preserved states (not used as stats but kept intentionally)
  const [projectsCount, setProjectsCount] = useState(0);
  const [yearsCount, setYearsCount] = useState(0);
  const [clientsCount, setClientsCount] = useState(0);

  useEffect(() => {
    // preserved counting animation (silent background)
    let p = 0,
      y = 0,
      c = 0;
    const pTarget = 12;
    const yTarget = 2;
    const cTarget = 6;

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
      className="
        relative py-12 md:py-24 px-4 md:px-12 lg:px-20 
        text-white

        bg-gradient-to-br from-purple-400/6 via-white/2 to-transparent
        backdrop-blur-xl
        border-y border-white/6
        overflow-hidden
      "
      aria-labelledby="about-heading"
    >
      {/* ------------------------
          Left decorative background block (fills empty left space)
          ------------------------ */}
      <div className="absolute inset-0 -z-10 pointer-events-none">
        {/* diagonal frosted panel on left */}
        <div
          className="absolute left-[-6%] top-12 bottom-12 w-[48%] rounded-2xl"
          style={{
            background:
              "linear-gradient(120deg, rgba(124,58,237,0.08) 0%, rgba(99,102,241,0.06) 40%, rgba(59,130,246,0.04) 100%)",
            backdropFilter: "blur(14px)",
            WebkitBackdropFilter: "blur(14px)",
            transform: "skewX(-7deg)",
            boxShadow: "inset 0 1px 0 rgba(255,255,255,0.02)",
            border: "1px solid rgba(255,255,255,0.03)",
            opacity: 0.95,
          }}
        />

        {/* soft vertical glow stripe to add depth */}
        <div
          className="absolute left-[22%] top-10 bottom-10 w-0.5 rounded"
          style={{
            background: "linear-gradient(180deg, rgba(124,58,237,0.18), rgba(6,182,212,0.12))",
            filter: "blur(10px)",
            opacity: 0.95,
          }}
        />

        {/* blurred orb (cool) */}
        <motion.div
          animate={{ y: [0, -12, 6, 0], x: [0, -6, 6, 0] }}
          transition={{ repeat: Infinity, duration: 10, ease: "easeInOut" }}
          className="absolute left-6 top-28 w-48 h-48 rounded-full"
          style={{
            background: "radial-gradient(circle at 30% 30%, rgba(99,102,241,0.14), rgba(99,102,241,0.04))",
            filter: "blur(28px)",
            opacity: 0.95,
          }}
        />

        {/* blurred orb (warm) */}
        <motion.div
          animate={{ y: [0, 8, -6, 0], x: [0, 10, -6, 0] }}
          transition={{ repeat: Infinity, duration: 12, ease: "easeInOut" }}
          className="absolute left-20 bottom-28 w-36 h-36 rounded-full"
          style={{
            background: "radial-gradient(circle at 30% 30%, rgba(251,146,60,0.12), rgba(244,63,94,0.03))",
            filter: "blur(26px)",
            opacity: 0.95,
          }}
        />

        {/* subtle grid for texture */}
        <div className="absolute inset-0 opacity-[0.04]">
          <svg className="w-full h-full" viewBox="0 0 600 600">
            <defs>
              <pattern id="about-grid" width="40" height="40" patternUnits="userSpaceOnUse">
                <path d="M 40 0 L 0 0 0 40" fill="none" stroke="white" strokeWidth="0.5" />
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#about-grid)" />
          </svg>
        </div>

        {/* shimmer layer */}
        <div
          className="absolute inset-0 mix-blend-overlay"
          style={{
            background: "linear-gradient(120deg, rgba(255,255,255,0.03), rgba(255,255,255,0.01), rgba(255,255,255,0.03))",
            animation: "aboutShimmer 12s linear infinite",
            opacity: 0.08,
          }}
        />
      </div>

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

          {/* ===== REPLACED: Option B - Eye-Catchy Animated Roadmap ===== */}
          <motion.div
            initial={{ opacity: 0, y: 8 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-6 items-start"
          >
            {/* Left column: vertical timeline with orbs */}
            <div className="relative">
              {/* vertical line */}
              <div className="absolute left-6 top-4 bottom-4 w-0.5 bg-gradient-to-b from-indigo-600 to-purple-600 opacity-60 rounded" />

              {/* Orb 1 */}
              <motion.div
                initial={{ x: -8, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                transition={{ duration: 0.5 }}
                className="flex items-start gap-4 mb-8"
              >
                <div className="relative z-10 flex-none">
                  <motion.div
                    animate={{
                      y: [0, -8, 0],
                      boxShadow: [
                        "0 6px 18px rgba(99,102,241,0.12)",
                        "0 12px 30px rgba(139,92,246,0.16)",
                        "0 6px 18px rgba(99,102,241,0.12)",
                      ],
                    }}
                    transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
                    className="w-12 h-12 rounded-full flex items-center justify-center"
                    style={{
                      background: "radial-gradient(circle at 30% 30%, #a78bfa, #6d28d9)",
                    }}
                  >
                    <svg className="w-6 h-6 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                      <path strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" d="M12 2v7" />
                      <path strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" d="M5 11h14" />
                    </svg>
                  </motion.div>

                  {/* glowing halo */}
                  <motion.div
                    animate={{ scale: [1, 1.18, 1], opacity: [0.55, 0.9, 0.55] }}
                    transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
                    className="absolute inset-0 -z-10 rounded-full"
                    style={{
                      boxShadow: "0 0 28px 8px rgba(124,58,237,0.12)",
                    }}
                  />
                </div>

                <div className="pl-2">
                  <p className="text-sm font-semibold text-white">Advanced React Patterns</p>
                  <p className="text-xs text-gray-400 mt-1">Hooks, render-props, compound components</p>
                </div>
              </motion.div>

              {/* Orb 2 */}
              <motion.div
                initial={{ x: -8, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                transition={{ duration: 0.55, delay: 0.04 }}
                className="flex items-start gap-4 mb-8"
              >
                <div className="relative z-10 flex-none">
                  <motion.div
                    animate={{
                      x: [0, 6, 0],
                      boxShadow: [
                        "0 6px 18px rgba(6,182,212,0.10)",
                        "0 12px 30px rgba(59,130,246,0.14)",
                        "0 6px 18px rgba(6,182,212,0.10)",
                      ],
                    }}
                    transition={{ repeat: Infinity, duration: 3.6, ease: "easeInOut" }}
                    className="w-12 h-12 rounded-full flex items-center justify-center"
                    style={{
                      background: "radial-gradient(circle at 20% 20%, #06b6d4, #3b82f6)",
                    }}
                  >
                    <svg className="w-6 h-6 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                      <path strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" d="M12 5v14" />
                      <path strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" d="M5 12h14" />
                    </svg>
                  </motion.div>

                  <motion.div
                    animate={{ scale: [1, 1.12, 1], opacity: [0.5, 0.85, 0.5] }}
                    transition={{ repeat: Infinity, duration: 3.6, ease: "easeInOut" }}
                    className="absolute inset-0 -z-10 rounded-full"
                    style={{ boxShadow: "0 0 28px 6px rgba(6,182,212,0.10)" }}
                  />
                </div>

                <div className="pl-2">
                  <p className="text-sm font-semibold text-white">TypeScript & Typing</p>
                  <p className="text-xs text-gray-400 mt-1">Strong typing, generics, React + TS</p>
                </div>
              </motion.div>

              {/* Orb 3 */}
              <motion.div
                initial={{ x: -8, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                transition={{ duration: 0.6, delay: 0.08 }}
                className="flex items-start gap-4 mb-8"
              >
                <div className="relative z-10 flex-none">
                  <motion.div
                    animate={{
                      rotate: [0, 10, 0],
                      boxShadow: [
                        "0 6px 18px rgba(249,115,22,0.10)",
                        "0 12px 30px rgba(244,63,94,0.14)",
                        "0 6px 18px rgba(249,115,22,0.10)",
                      ],
                    }}
                    transition={{ repeat: Infinity, duration: 4.5, ease: "easeInOut" }}
                    className="w-12 h-12 rounded-full flex items-center justify-center"
                    style={{
                      background: "radial-gradient(circle at 30% 30%, #fb923c, #ef4444)",
                    }}
                  >
                    <svg className="w-6 h-6 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                      <path strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" d="M3 8h18M3 16h18" />
                    </svg>
                  </motion.div>

                  <motion.div
                    animate={{ scale: [1, 1.12, 1], opacity: [0.52, 0.9, 0.52] }}
                    transition={{ repeat: Infinity, duration: 4.5, ease: "easeInOut" }}
                    className="absolute inset-0 -z-10 rounded-full"
                    style={{ boxShadow: "0 0 28px 8px rgba(249,115,22,0.10)" }}
                  />
                </div>

                <div className="pl-2">
                  <p className="text-sm font-semibold text-white">Algorithms & Problem Solving</p>
                  <p className="text-xs text-gray-400 mt-1">DSA fundamentals, practice & approach</p>
                </div>
              </motion.div>

              {/* Orb 4 (CTA orb) */}
              <motion.div
                initial={{ x: -8, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                transition={{ duration: 0.65, delay: 0.12 }}
                className="flex items-start gap-4"
              >
                <div className="relative z-10 flex-none">
                  <motion.div
                    animate={{
                      scale: [1, 1.08, 1],
                      rotate: [0, 6, 0],
                      boxShadow: ["0 8px 30px rgba(99,102,241,0.14)", "0 16px 48px rgba(139,92,246,0.18)"],
                    }}
                    transition={{ repeat: Infinity, duration: 5, ease: "easeInOut" }}
                    className="w-12 h-12 rounded-full flex items-center justify-center"
                    style={{
                      background: "linear-gradient(90deg,#a855f7,#7c3aed)",
                    }}
                  >
                    <svg className="w-6 h-6 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                      <path strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" d="M12 2l3 6 6 .5-4.5 3.8L19 20l-7-3.8L5 20l1.5-7.7L2 9.5 8 9z" />
                    </svg>
                  </motion.div>
                </div>

                <div className="pl-2">
                  <p className="text-sm font-semibold text-white">Collaboration & Mentorship</p>
                  <p className="text-xs text-gray-400 mt-1">Open to internships, small collaborations, and mentoring</p>
                </div>
              </motion.div>
            </div>

            {/* Right column: large animated card with gradient map / progress blobs */}
            <div className="relative">
              <motion.div
                initial={{ scale: 0.98, opacity: 0 }}
                whileInView={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.6 }}
                className="bg-gradient-to-br from-gray-900/60 via-indigo-900/40 to-purple-900/30 border border-gray-800 rounded-2xl p-5 shadow-2xl"
              >
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm text-gray-400 uppercase">Current Focus</p>
                    <h4 className="text-lg font-semibold text-white mt-1">Building production-ready UIs</h4>
                  </div>

                  <div className="hidden md:flex items-center gap-3">
                    <motion.div
                      animate={{ scale: [1, 1.14, 1] }}
                      transition={{ repeat: Infinity, duration: 3.6 }}
                      className="w-10 h-10 rounded-full flex items-center justify-center"
                      style={{ background: "linear-gradient(90deg,#06b6d4,#3b82f6)" }}
                    >
                      <svg className="w-5 h-5 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                        <path strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" d="M12 3v18M3 12h18" />
                      </svg>
                    </motion.div>

                    <motion.div
                      animate={{ y: [0, -6, 0] }}
                      transition={{ repeat: Infinity, duration: 4.2 }}
                      className="w-10 h-10 rounded-full flex items-center justify-center"
                      style={{ background: "linear-gradient(90deg,#a855f7,#7c3aed)" }}
                    >
                      <svg className="w-5 h-5 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                        <path strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" d="M12 8v8M8 12h8" />
                      </svg>
                    </motion.div>
                  </div>
                </div>

                {/* decorative floating blobs */}
                <div className="mt-4 relative">
                  <div className="h-32 rounded-xl bg-gradient-to-r from-indigo-700/20 via-purple-700/10 to-transparent border border-gray-800 overflow-hidden relative">
                    <motion.div
                      animate={{ x: [0, 20, -10, 0], y: [0, -6, 6, 0] }}
                      transition={{ repeat: Infinity, duration: 8, ease: "easeInOut" }}
                      className="absolute w-14 h-14 rounded-full"
                      style={{
                        left: "12%",
                        top: "18%",
                        background: "linear-gradient(90deg,#f97316,#ef4444)",
                        filter: "blur(8px)",
                        opacity: 0.9,
                      }}
                    />
                    <motion.div
                      animate={{ x: [0, -18, 8, 0], y: [0, 8, -8, 0] }}
                      transition={{ repeat: Infinity, duration: 10, ease: "easeInOut" }}
                      className="absolute w-20 h-20 rounded-full"
                      style={{
                        left: "56%",
                        top: "6%",
                        background: "linear-gradient(90deg,#06b6d4,#3b82f6)",
                        filter: "blur(10px)",
                        opacity: 0.9,
                      }}
                    />
                    <motion.div
                      animate={{ x: [0, 12, -6, 0], y: [0, -4, 4, 0] }}
                      transition={{ repeat: Infinity, duration: 9, ease: "easeInOut" }}
                      className="absolute w-10 h-10 rounded-full"
                      style={{
                        left: "76%",
                        top: "50%",
                        background: "linear-gradient(90deg,#a855f7,#7c3aed)",
                        filter: "blur(6px)",
                        opacity: 0.95,
                      }}
                    />
                  </div>

                  {/* short bullets */}
                  <ul className="mt-4 space-y-2">
                    <li className="text-sm text-gray-300 flex items-start gap-2">
                      <span className="mt-1 inline-block w-2 h-2 rounded-full" style={{ background: "#8b5cf6" }} />
                      Focus on accessibility, performance and tests
                    </li>
                    <li className="text-sm text-gray-300 flex items-start gap-2">
                      <span className="mt-1 inline-block w-2 h-2 rounded-full" style={{ background: "#06b6d4" }} />
                      Build end-to-end features with Node.js & MongoDB
                    </li>
                    <li className="text-sm text-gray-300 flex items-start gap-2">
                      <span className="mt-1 inline-block w-2 h-2 rounded-full" style={{ background: "#fb923c" }} />
                      Practice algorithms for interviews & problem solving
                    </li>
                  </ul>
                </div>

                {/* small CTA */}
                <div className="mt-4 flex items-center justify-between">
                  <p className="text-xs text-gray-400">Open to mentorship & internships</p>
                  <a
                    href="#contact"
                    className="text-xs px-3 py-1 rounded-full border border-indigo-600 text-indigo-200 hover:bg-indigo-700/10 transition"
                  >
                    Let's connect
                  </a>
                </div>
              </motion.div>
            </div>
          </motion.div>
          {/* ===== end replacement ===== */}
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

        @keyframes aboutShimmer {
          0% { background-position: -200% 0; }
          100% { background-position: 200% 0; }
        }
      `}</style>
    </section>
  );
};

export default About;
