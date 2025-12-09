import React, { useState } from "react";
import { motion } from "framer-motion";
import { FaGraduationCap, FaSchool, FaFileDownload } from "react-icons/fa";
import resume from "../assets/resume.pdf";

const education = [
  {
    title: "B.Tech in Information Technology",
    institution: "ABES Engineering College, Ghaziabad",
    duration: "2023 – 2027 (Currently in 3rd Year)",
    details: [
      "1st Semester – 9.23 CGPA",
      "2nd Semester – 9.45 CGPA",
      "3rd Semester – 8.48 CGPA",
      "4th Semester – 8.70 CGPA",
      "Overall Average: 8.96 CGPA",
    ],
    icon: <FaGraduationCap className="text-indigo-400 text-3xl" />,
  },
  {
    title: "Senior Secondary (Class 12th)",
    institution: "Laxmi Public School, New Delhi — CBSE",
    duration: "Completed in 2022",
    details: ["Percentage: 95%"],
    icon: <FaSchool className="text-purple-400 text-3xl" />,
  },
  {
    title: "Secondary (Class 10th)",
    institution: "Laxmi Public School, New Delhi — CBSE",
    duration: "Completed in 2020",
    details: ["Percentage: 92%"],
    icon: <FaSchool className="text-pink-400 text-3xl" />,
  },
];

const Education = () => {
  const [showModal, setShowModal] = useState(false);

  return (
    <section
      id="education"
      className="
        relative py-16 px-4 md:px-12 text-white overflow-hidden
        bg-gradient-to-br from-[#0b0b11]/90 via-[#10101a]/70 to-[#12121c]/40
        backdrop-blur-[1px]
      "
    >
      {/* ========== Hero-like background decorations (only background) ========== */}
      <div className="absolute inset-0 -z-10 pointer-events-none" aria-hidden="true">
        {/* large decorative conic/blur (hero-like) */}
        <div
          style={{
            position: "absolute",
            left: "-8%",
            top: "-10%",
            width: "56rem",
            height: "56rem",
            borderRadius: "50%",
            background:
              "linear-gradient(120deg, rgba(99,102,241,0.22), rgba(168,85,247,0.14) 45%, rgba(244,114,182,0.06))",
            filter: "blur(110px)",
            opacity: 0.95,
            transform: "translateZ(0)",
          }}
        />

        {/* animated diagonal blob (subtle motion) */}
        <motion.div
          animate={{ x: [0, 18, -12, 0], y: [0, -10, 6, 0], rotate: [0, 1, -1, 0] }}
          transition={{ repeat: Infinity, duration: 14, ease: "easeInOut" }}
          style={{
            position: "absolute",
            left: "6%",
            top: "6%",
            width: "34rem",
            height: "34rem",
            borderRadius: "40%",
            background:
              "linear-gradient(140deg, rgba(124,58,237,0.18), rgba(99,102,241,0.06), rgba(6,182,212,0.04))",
            filter: "blur(70px)",
            opacity: 0.96,
          }}
        />

        {/* soft right-side glow */}
        <div
          style={{
            position: "absolute",
            right: "-6%",
            bottom: "-6%",
            width: "44rem",
            height: "44rem",
            borderRadius: "50%",
            background:
              "linear-gradient(90deg, rgba(6,182,212,0.10), rgba(99,102,241,0.04))",
            filter: "blur(120px)",
            opacity: 0.9,
          }}
        />

        {/* subtle grid texture for depth */}
        <div style={{ position: "absolute", inset: 0, opacity: 0.03 }}>
          <svg className="w-full h-full" viewBox="0 0 600 600" preserveAspectRatio="none">
            <defs>
              <pattern id="edu-hero-grid" width="40" height="40" patternUnits="userSpaceOnUse">
                <path d="M 40 0 L 0 0 0 40" fill="none" stroke="white" strokeWidth="0.45" />
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#edu-hero-grid)" />
          </svg>
        </div>

        {/* shimmer overlay */}
        <div
          style={{
            position: "absolute",
            inset: 0,
            mixBlendMode: "overlay",
            background:
              "linear-gradient(120deg, rgba(255,255,255,0.03), rgba(255,255,255,0.01), rgba(255,255,255,0.03))",
            animation: "eduShimmer 10s linear infinite",
            opacity: 0.06,
          }}
        />
      </div>

      {/* ========== Original content (unchanged) ========== */}
      {/* Section Header */}
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        viewport={{ once: true }}
        className="text-center text-4xl font-extrabold text-indigo-400 mb-14"
      >
        Education Journey
      </motion.h2>

      <div className="max-w-5xl mx-auto relative">
        {/* Vertical timeline line */}
        <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-indigo-500 to-purple-600 hidden md:block"></div>

        {/* Timeline Cards */}
        {education.map((edu, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, x: index % 2 === 0 ? -70 : 70 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className={`relative flex flex-col md:flex-row items-center 
            ${index % 2 === 0 ? "md:justify-start" : "md:justify-end"} mb-16`}
          >
            {/* Connector Dot */}
            <div className="hidden md:flex absolute left-1/2 transform -translate-x-1/2 w-6 h-6 bg-purple-500 rounded-full shadow-lg"></div>

            <motion.div
              whileHover={{ scale: 1.03, y: -5 }}
              transition={{ type: "spring", stiffness: 200 }}
              className="w-full md:w-[46%] bg-gray-900/60 backdrop-blur-xl rounded-2xl border border-gray-800 
              p-6 shadow-xl hover:border-indigo-500/40 hover:shadow-indigo-500/20 transition-all"
            >
              <div className="flex items-center gap-3 mb-3">
                <div className="w-12 h-12 flex items-center justify-center bg-gray-800 rounded-xl border border-gray-700">
                  {edu.icon}
                </div>
                <h3 className="text-2xl font-semibold text-indigo-300">{edu.title}</h3>
              </div>

              <p className="text-gray-400 font-medium">{edu.institution}</p>
              <p className="text-gray-500 mb-3 text-sm">{edu.duration}</p>

              <ul className="list-disc list-inside text-gray-300 text-sm space-y-1">
                {edu.details.map((item, i) => (
                  <motion.li
                    key={i}
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.4, delay: i * 0.1 }}
                    viewport={{ once: true }}
                  >
                    {item}
                  </motion.li>
                ))}
              </ul>
            </motion.div>
          </motion.div>
        ))}
      </div>

      {/* Resume Button */}
      <div className="text-center mt-10">
        <button
          onClick={() => setShowModal(true)}
          className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-indigo-500 to-purple-600 
          text-white rounded-full font-semibold shadow-lg hover:scale-105 transition-transform"
        >
          <FaFileDownload /> View Resume
        </button>
      </div>

      {/* Resume Modal */}
      {showModal && (
        <div className="fixed inset-0 flex items-center justify-center bg-black/70 z-50 p-4">
          <motion.div
            initial={{ opacity: 0, scale: 0.85 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.3 }}
            className="bg-gray-900 rounded-xl shadow-2xl max-w-3xl w-full p-6 relative border border-gray-800"
          >
            <button
              onClick={() => setShowModal(false)}
              className="absolute top-3 right-3 text-white text-xl hover:text-red-400 transition"
            >
              ✕
            </button>

            <h3 className="text-xl font-semibold text-indigo-400 mb-4 text-center">
              Resume Preview
            </h3>

            <iframe
              src={resume}
              className="w-full h-[450px] md:h-[550px] rounded-lg shadow-inner border border-gray-800"
              title="Resume PDF"
            ></iframe>

            <a
              href={resume}
              download
              className="mt-5 block text-center bg-indigo-600 hover:bg-indigo-700 transition text-white py-2 rounded-lg font-semibold"
            >
              Download Resume
            </a>
          </motion.div>
        </div>
      )}

      {/* animations / reduced motion */}
      <style jsx>{`
        @keyframes eduShimmer {
          0% { background-position: -200% 0; }
          100% { background-position: 200% 0; }
        }
        @media (prefers-reduced-motion: reduce) {
          .framer-motion, motion { animation: none !important; }
        }
      `}</style>
    </section>
  );
};

export default Education;
