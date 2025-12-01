import React, { useEffect, useState, useRef } from "react";
import { motion } from "framer-motion";
import { FaArrowRight, FaDownload, FaTimes, FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";
import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";
import profile from "../assets/profile.jpeg";
import resume from "../assets/resume.pdf";

const Hero = () => {
  const [resumeOpen, setResumeOpen] = useState(false);
  const [showParticles, setShowParticles] = useState(true);
  const [isSmall, setIsSmall] = useState(false);

  // typing state for the name
  const fullName = "Nitin Chugh";
  const [typed, setTyped] = useState("");
  const [typingForward, setTypingForward] = useState(true);
  const typingIntervalRef = useRef(null);

  useEffect(() => {
    // responsive: detect small screens and disable heavy visuals
    const handleResize = () => {
      const mobile = window.innerWidth < 768;
      setIsSmall(mobile);
      setShowParticles(!mobile);
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    // typing loop: type, pause, erase, repeat
    const typeSpeed = 130;
    const eraseSpeed = 70;
    const pauseAfterTyped = 900;
    const pauseAfterErased = 600;

    let idx = 0;
    let direction = 1; // 1 typing, -1 erasing
    let waitTimeout = null;

    function step() {
      if (direction === 1) {
        // typing forward
        idx++;
        setTyped(fullName.slice(0, idx));
        if (idx === fullName.length) {
          // pause then start erasing
          direction = -1;
          waitTimeout = setTimeout(() => {
            typingIntervalRef.current = setInterval(step, eraseSpeed);
          }, pauseAfterTyped);
          clearInterval(typingIntervalRef.current);
        }
      } else {
        // erasing
        idx--;
        setTyped(fullName.slice(0, idx));
        if (idx === 0) {
          // restart typing after short pause
          direction = 1;
        }
      }
    }

    typingIntervalRef.current = setInterval(step, typeSpeed);

    return () => {
      clearInterval(typingIntervalRef.current);
      if (waitTimeout) clearTimeout(waitTimeout);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const particlesInit = async (main) => {
    await loadFull(main);
  };

  const particlesOptions = {
    background: { color: { value: "transparent" } },
    fpsLimit: 60,
    interactivity: {
      events: { onClick: { enable: false }, onHover: { enable: false }, resize: true },
    },
    particles: {
      color: { value: "#ffffff" },
      links: { color: "#6366f1", distance: 140, enable: true, opacity: 0.22, width: 1 },
      move: { enable: true, speed: 0.9, direction: "none", random: false, straight: false },
      number: { value: isSmall ? 18 : 55, density: { enable: true, area: 900 } },
      opacity: { value: 0.45 },
      shape: { type: "circle" },
      size: { value: { min: 1, max: 3 } },
    },
    detectRetina: true,
  };

  

  // add a little top padding on small screens so fixed nav doesn't overlap the first content
  const topPaddingStyle = isSmall ? { paddingTop: "5.2rem" } : {};

  return (
    <section
      id="hero"
      style={topPaddingStyle}
      className="relative min-h-[68vh] md:h-screen flex flex-col-reverse md:flex-row items-center justify-center text-center md:text-left px-5 sm:px-6 lg:px-10 py-6 md:py-20 overflow-hidden"
    >
      {/* Particles (disabled on small for perf) */}
      {showParticles && (
        <Particles id="tsparticles" init={particlesInit} options={particlesOptions} className="absolute inset-0 -z-20" />
      )}

      {/* decorative blob */}
      <div
        aria-hidden="true"
        className={`absolute -left-16 -top-12 rounded-full blur-3xl -z-10 animate-blob`}
        style={{
          width: isSmall ? 240 : 560,
          height: isSmall ? 240 : 560,
          background:
            "linear-gradient(120deg, rgba(99,102,241,0.25), rgba(168,85,247,0.14), rgba(244,114,182,0.07))",
        }}
      />

      {/* PROFILE block (below text on small because of flex-col-reverse) */}
      <motion.div
        initial={{ opacity: 0, scale: 0.98 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.9, delay: 0.12 }}
        className="mb-6 md:mb-0 md:ml-10 flex-shrink-0 z-10"
      >
        <div className="relative flex flex-col items-center">
          {/* outer ring upscaled on desktop */ }
          <div
            className="rounded-full p-1 flex items-center justify-center"
            style={{
              width: isSmall ? 160 : 280,
              height: isSmall ? 160 : 280,
              background:
                "conic-gradient(from 120deg, rgba(99,102,241,0.95), rgba(139,92,246,0.85), rgba(168,85,247,0.75))",
              WebkitMaskImage: "radial-gradient(circle, #000 65%, transparent 66%)",
            }}
          >
            <img
              src={profile}
              alt="Nitin Chugh"
              loading="lazy"
              decoding="async"
              className={`object-cover rounded-full shadow-2xl border-4 border-gray-900`}
              style={{
                width: isSmall ? 140 : 240,
                height: isSmall ? 140 : 240,
                display: "block",
              }}
            />
          </div>

          

          {/* socials */}
          <div className={`flex items-center gap-3 mt-4 ${isSmall ? "justify-center" : "justify-start"}`}>
            <a href="https://github.com/NitinChugh13" target="_blank" rel="noreferrer" className="p-2 rounded-full bg-gray-800 text-gray-200 shadow-sm hover:scale-105 transition-transform" aria-label="GitHub">
              <FaGithub />
            </a>
            <a href="#" className="p-2 rounded-full bg-gray-800 text-gray-200 shadow-sm hover:scale-105 transition-transform" aria-label="LinkedIn">
              <FaLinkedin />
            </a>
            <a href="mailto:nitinchugh6.022@gmail.com" className="p-2 rounded-full bg-gray-800 text-gray-200 shadow-sm hover:scale-105 transition-transform" aria-label="Email">
              <FaEnvelope />
            </a>
          </div>
        </div>
      </motion.div>

      {/* TEXT column */}
      <motion.div initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.75 }} className="max-w-xl z-10">
        <h1 className={`font-extrabold leading-tight mb-3 ${isSmall ? "text-3xl" : "text-5xl"}`}>
          Hi, I’m{" "}
          <span className="bg-gradient-to-r from-indigo-400 to-purple-500 text-transparent bg-clip-text">
            {/* typed name + blinking cursor */}
            <span style={{ whiteSpace: "pre" }}>{typed}</span>
            <span style={{ display: "inline-block", width: 12, marginLeft: 6, color: "transparent" }}>
              {/* invisible spacer to keep spacing */}
            </span>
            <span
              aria-hidden="true"
              style={{
                display: "inline-block",
                width: 10,
                marginLeft: 6,
                background: "linear-gradient(180deg,#fff,#ddd)",
                height: 18,
                borderRadius: 2,
                transform: "translateY(2px)",
                boxShadow: "none",
                opacity: 0.95,
                animation: "blink 1s steps(2, start) infinite",
                verticalAlign: "middle",
              }}
            />
          </span>
        </h1>

        <h2 className={`font-medium text-gray-300 mb-4 ${isSmall ? "text-sm" : "text-xl"}`}>Full-Stack Developer · Problem Solver · Tech Enthusiast</h2>

        <p className={`text-gray-400 mb-6 ${isSmall ? "text-sm max-w-[18rem] mx-auto" : "text-lg max-w-xl"}`}>
          I build responsive, user-focused web applications with clean UI and modern animations — blending design and functionality for seamless user experiences.
        </p>

        {/* CTAs: on very small screens buttons become full width for comfortable tapping */}
        <div className={`flex flex-wrap gap-3 ${isSmall ? "justify-center" : "justify-start"}`}>
          <a href="#projects" className={`flex items-center gap-2 px-4 py-3 ${isSmall ? "w-full justify-center" : ""} bg-gradient-to-r from-indigo-500 to-purple-500 rounded-full text-white font-semibold shadow-lg transform transition-transform hover:-translate-y-0.5 hover:scale-[1.03]`} aria-label="View Projects">
            View Projects <FaArrowRight />
          </a>

          <button onClick={() => setResumeOpen(true)} className={`flex items-center gap-2 px-4 py-3 ${isSmall ? "w-full justify-center" : ""} border-2 border-indigo-400 rounded-full font-semibold text-indigo-400 hover:bg-indigo-500 hover:text-white transition-colors`} aria-haspopup="dialog" aria-expanded={resumeOpen}>
            <FaDownload /> View Resume
          </button>

          <a href="#contact" className={`flex items-center gap-2 px-4 py-3 ${isSmall ? "w-full justify-center" : ""} border-2 border-purple-400 rounded-full font-semibold text-purple-400 hover:bg-purple-500 hover:text-white transition-colors`} aria-label="Contact Me">
            Contact Me
          </a>
        </div>

        <p className={`text-sm text-gray-500 mt-3 ${isSmall ? "text-center" : "text-left"}`}>Available for internships & freelance projects — let’s build something cool.</p>
      </motion.div>

      {/* subtle scroll indicator hidden on small */}
      {!isSmall && (
        <motion.div animate={{ y: [0, 6, 0] }} transition={{ repeat: 1, duration: 1.6 }} className="absolute bottom-6 left-1/2 -translate-x-1/2 z-20" aria-hidden="true">
          <div className="flex flex-col items-center gap-2">
            <span className="text-xs text-gray-400">Scroll</span>
            <div className="w-8 h-12 rounded-full border-2 border-gray-600 flex items-start justify-center p-1">
              <span className="block w-2 h-2 rounded-full bg-gray-400" />
            </div>
          </div>
        </motion.div>
      )}

      {/* Resume Modal */}
      {resumeOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
          <div className="absolute inset-0 bg-black/60 backdrop-blur-sm" onClick={() => setResumeOpen(false)} aria-hidden="true" />
          <div className="relative z-10 w-full max-w-3xl bg-gray-900 rounded-xl shadow-2xl overflow-hidden">
            <div className="flex items-center justify-between px-4 py-3 border-b border-gray-800">
              <h3 className="text-lg font-semibold text-indigo-300">Resume — Nitin Chugh</h3>
              <button onClick={() => setResumeOpen(false)} className="p-2 rounded-md hover:bg-gray-800 text-white" aria-label="Close resume viewer">
                <FaTimes />
              </button>
            </div>

            <div className="w-full h-[60vh] md:h-[75vh]">
              <iframe title="Resume Preview" src={resume} className="w-full h-full" style={{ border: "none" }} />
            </div>

            <div className="flex items-center justify-between gap-4 px-4 py-3 border-t border-gray-800">
              <a href={resume} download className="inline-flex items-center gap-2 px-4 py-2 bg-indigo-600 hover:bg-indigo-700 text-white rounded-md">
                <FaDownload /> Download Resume
              </a>
              <a href={resume} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 px-4 py-2 border border-gray-700 text-gray-200 rounded-md">
                Open in new tab
              </a>
              <button onClick={() => setResumeOpen(false)} className="px-4 py-2 rounded-md border border-gray-700 text-gray-300 hover:bg-gray-800">
                Close
              </button>
            </div>
          </div>
        </div>
      )}

      {/* blob animation styles & blink */}
      <style>{`
        @keyframes blob {
          0% { transform: translate(0px, 0px) scale(1); }
          33% { transform: translate(12px, -8px) scale(1.03); }
          66% { transform: translate(-8px, 10px) scale(0.98); }
          100% { transform: translate(0px, 0px) scale(1); }
        }
        .animate-blob { animation: blob 9s infinite ease-in-out; }
        @keyframes blink { 0% { opacity: 1 } 50% { opacity: 0 } 100% { opacity: 1 } }
      `}</style>
    </section>
  );
};

export default Hero;
