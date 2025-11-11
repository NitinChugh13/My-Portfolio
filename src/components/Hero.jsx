import React from "react";
import { motion } from "framer-motion";
import { FaArrowRight, FaDownload } from "react-icons/fa";
import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";

const Hero = () => {
  const particlesInit = async (main) => {
    await loadFull(main);
  };

  const particlesOptions = {
    background: {
      color: {
        value: "transparent",
      },
    },
    fpsLimit: 60,
    interactivity: {
      events: {
        onClick: { enable: false },
        onHover: { enable: false },
        resize: true,
      },
    },
    particles: {
      color: { value: "#ffffff" },
      links: {
        color: "#6366f1",
        distance: 150,
        enable: true,
        opacity: 0.3,
        width: 1,
      },
      move: {
        enable: true,
        speed: 1,
        direction: "none",
        random: false,
        straight: false,
      },
      number: {
        value: 60,
        density: { enable: true, area: 800 },
      },
      opacity: { value: 0.5 },
      shape: { type: "circle" },
      size: { value: { min: 1, max: 3 } },
    },
    detectRetina: true,
  };

  return (
    <section
      id="hero"
      className="relative h-screen flex flex-col md:flex-row items-center justify-center text-center md:text-left px-6 pt-20"
    >
      {/* Particle Background */}
      <Particles
        id="tsparticles"
        init={particlesInit}
        options={particlesOptions}
        className="absolute inset-0 -z-10"
      />

      {/* Hero Content */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="max-w-2xl z-10"
      >
        <h1 className="text-5xl md:text-6xl font-bold leading-tight mb-4">
          Hi, I’m{" "}
          <span className="bg-gradient-to-r from-indigo-400 to-purple-500 text-transparent bg-clip-text">
            Nitin Chugh
          </span>
        </h1>
        <h2 className="text-2xl md:text-3xl font-medium text-gray-300 mb-6">
          Front-End Developer | C++ Programmer | UI Designer
        </h2>
        <p className="text-gray-400 text-lg mb-8 max-w-xl mx-auto md:mx-0">
          I build responsive, user-focused web applications with clean UI and
          modern animations — blending design and functionality for seamless
          user experiences.
        </p>

        {/* Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center md:justify-start gap-4">
          <a
            href="#projects"
            className="flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-full text-white font-semibold hover:scale-105 transition-transform"
          >
            View Projects <FaArrowRight />
          </a>

          <a
            href="/src/assets/resume.pdf"
            download
            className="flex items-center gap-2 px-6 py-3 border-2 border-indigo-400 rounded-full font-semibold text-indigo-400 hover:bg-indigo-500 hover:text-white transition-colors"
          >
            <FaDownload /> View Resume
          </a>

          <a
            href="#contact"
            className="flex items-center gap-2 px-6 py-3 border-2 border-purple-400 rounded-full font-semibold text-purple-400 hover:bg-purple-500 hover:text-white transition-colors"
          >
            Contact Me
          </a>
        </div>
      </motion.div>

      {/* Profile Image */}
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1, delay: 0.5 }}
        className="mt-10 md:mt-0 md:ml-12"
      >
        <img
          src="/src/assets/profile.jpeg"
          alt="Nitin Chugh"
          className="w-64 h-64 md:w-80 md:h-80 object-cover rounded-full shadow-lg border-4 border-indigo-500/50 hover:scale-105 transition-transform duration-500"
        />
      </motion.div>
    </section>
  );
};

export default Hero;
