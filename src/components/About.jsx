import React from "react";
import { motion } from "framer-motion";

const About = () => {
  return (
    <section
      id="about"
      className="relative py-24 px-6 md:px-12 lg:px-20 bg-gray-950 text-white"
    >
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="max-w-5xl mx-auto flex flex-col md:flex-row items-center md:items-start gap-12"
      >
        {/* Left Image */}
        <div className="w-64 h-64 md:w-80 md:h-80 flex-shrink-0">
          <img
            src="src/assets/profile.jpeg"
            alt="Nitin Chugh"
            className="rounded-2xl object-cover w-full h-full border-4 border-indigo-500/40 shadow-lg hover:scale-105 transition-transform duration-500"
          />
        </div>

        {/* Right Text */}
        <div className="flex-1 text-center md:text-left">
          <h2 className="text-4xl font-bold mb-6 text-indigo-400">
            About Me
          </h2>
          <p className="text-gray-300 text-lg leading-relaxed mb-6">
            Hi, I’m <span className="text-indigo-400 font-semibold">Nitin Chugh</span>,
            a passionate front-end developer currently pursuing
            <span className="text-purple-400 font-semibold">
              {" "}
              B.Tech in Information Technology
            </span>{" "}
            at ABES Engineering College, Ghaziabad.
          </p>

          <p className="text-gray-400 text-lg leading-relaxed mb-6">
            I specialize in designing and developing responsive, modern, and
            accessible web applications using technologies like{" "}
            <span className="text-indigo-400 font-medium">
              React.js, Tailwind CSS, and JavaScript
            </span>
            . I have a strong foundation in{" "}
            <span className="text-indigo-400 font-medium">C++</span> and an eye
            for crafting intuitive, visually appealing UIs.
          </p>

          <p className="text-gray-400 text-lg leading-relaxed">
            I’m driven by curiosity and continuous learning — always exploring
            new frameworks and design trends to make the web more beautiful and
            functional. My goal is to build digital experiences that inspire and
            leave a lasting impact.
          </p>

          <div className="mt-8">
            <a
              href="src/assets/resume.pdf"
              download
              className="px-6 py-3 bg-gradient-to-r from-indigo-500 to-purple-500 text-white rounded-full font-semibold shadow-md hover:scale-105 transition-transform inline-block"
            >
              Download Resume
            </a>
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default About;
