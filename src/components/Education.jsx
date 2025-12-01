import React from "react";
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
  return (
    <section id="education" className="py-12 md:py-20 px-4 md:px-12 bg-gray-900 text-white">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="max-w-5xl mx-auto text-center"
      >
        <h2 className="text-3xl sm:text-4xl font-bold mb-8 text-indigo-400">Education</h2>

        <div className="relative border-l-2 border-indigo-500/50 pl-6 md:pl-10 text-left space-y-8">
          {education.map((edu, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="absolute -left-7 md:-left-9 top-1 flex items-center justify-center w-10 h-10 bg-gray-800 rounded-full shadow-lg border border-indigo-500/30">
                {edu.icon}
              </div>

              <h3 className="text-xl sm:text-2xl font-semibold text-indigo-300 mb-2">{edu.title}</h3>
              <p className="text-gray-400 font-medium mb-1">{edu.institution}</p>
              <p className="text-sm text-gray-500 mb-3">{edu.duration}</p>
              <ul className="list-disc list-inside text-gray-300 text-sm">
                {edu.details.map((item, i) => (
                  <li key={i}>{item}</li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        <div className="mt-8">
          <a
            href={resume}
            download
            className="inline-flex items-center gap-2 px-5 py-2 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-full font-semibold hover:scale-105 transition-transform"
          >
            <FaFileDownload />
            View Resume
          </a>
        </div>
      </motion.div>
    </section>
  );
};

export default Education;
