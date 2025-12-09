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
  const typingIntervalRef = useRef(null);
  const typingWaitRef = useRef(null);

  

  // scroll-triggered underline
  const [underlineActive, setUnderlineActive] = useState(false);

  // parallax 3D for profile
  const ringRef = useRef(null);
  const [ringStyle, setRingStyle] = useState({ transform: "perspective(800px) rotateX(0deg) rotateY(0deg) translateZ(0px) scale(1)" });

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

    function step() {
      if (direction === 1) {
        idx++;
        setTyped(fullName.slice(0, idx));
        if (idx === fullName.length) {
         

          direction = -1;
          // pause then start erasing
          clearInterval(typingIntervalRef.current);
          typingWaitRef.current = setTimeout(() => {
            typingIntervalRef.current = setInterval(step, eraseSpeed);
          }, pauseAfterTyped);
        }
      } else {
        idx--;
        setTyped(fullName.slice(0, idx));
        if (idx === 0) {
          // restart typing after short pause
          direction = 1;
          clearInterval(typingIntervalRef.current);
          typingWaitRef.current = setTimeout(() => {
            typingIntervalRef.current = setInterval(step, typeSpeed);
          }, pauseAfterErased);
        }
      }
    }

    typingIntervalRef.current = setInterval(step, typeSpeed);

    return () => {
      clearInterval(typingIntervalRef.current);
      if (typingWaitRef.current) clearTimeout(typingWaitRef.current);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // underline scroll listener
  useEffect(() => {
    function onScroll() {
      const active = window.scrollY > 40; // tweak threshold if needed
      setUnderlineActive(active);
    }
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // profile 3D parallax handlers
  useEffect(() => {
    const el = ringRef.current;
    if (!el || isSmall) return; // disable on small screens

    function handleMove(e) {
      const rect = el.getBoundingClientRect();
      const x = e.clientX - rect.left; // x position within the element
      const y = e.clientY - rect.top; // y position within the element
      const cx = rect.width / 2;
      const cy = rect.height / 2;
      const px = (x - cx) / cx; // -1 .. 1
      const py = (y - cy) / cy; // -1 .. 1

      const rotateY = px * 8; // degrees
      const rotateX = -py * 8; // degrees
      const translateZ = 6 + Math.abs(px + py) * 3;

      setRingStyle({
        transform: `perspective(900px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateZ(${translateZ}px) scale(1.02)`,
        transition: "transform 0.08s ease-out",
        willChange: "transform",
      });
    }

    function handleLeave() {
      setRingStyle({
        transform: "perspective(900px) rotateX(0deg) rotateY(0deg) translateZ(0px) scale(1)",
        transition: "transform 0.45s cubic-bezier(.2,.9,.2,1)",
      });
    }

    el.addEventListener("mousemove", handleMove);
    el.addEventListener("mouseleave", handleLeave);
    el.addEventListener("touchstart", handleMove);
    el.addEventListener("touchmove", handleMove);
    el.addEventListener("touchend", handleLeave);

    return () => {
      el.removeEventListener("mousemove", handleMove);
      el.removeEventListener("mouseleave", handleLeave);
      el.removeEventListener("touchstart", handleMove);
      el.removeEventListener("touchmove", handleMove);
      el.removeEventListener("touchend", handleLeave);
    };
  }, [isSmall]);

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

  /* ---------- ANIMATION VARIANTS ---------- */
  const fadeUp = {
    hidden: { opacity: 0, y: 12 },
    show: { opacity: 1, y: 0, transition: { duration: 0.6 } }
  };

  const stagger = {
    show: {
      transition: {
        staggerChildren: 0.12,
      },
    },
  };

  return (
    <section
  id="hero"
  style={topPaddingStyle}
  className="
    relative min-h-[68vh] md:h-screen 
    flex flex-col-reverse md:flex-row 
    items-center justify-center 
    text-center md:text-left 
    px-5 sm:px-6 lg:px-10 
    py-6 md:py-20 
    overflow-hidden

    bg-gradient-to-b from-[#0b0b11]/90 via-[#0d0d16]/70 to-[#11111a]/40
    backdrop-blur-[2px]
  "
>

      {/* Particles (disabled on small for perf) */}
      {showParticles && (
        <Particles id="tsparticles" init={particlesInit} options={particlesOptions} className="absolute inset-0 -z-20" />
      )}

      {/* Floating gradient orbs */}
      <motion.div
        className="absolute inset-0 -z-10 pointer-events-none"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
      >
        {/* orb 1 */}
        <motion.div
          animate={{
            x: [0, -20, 10, 0],
            y: [0, -12, 8, 0],
            scale: [1, 1.05, 0.97, 1],
          }}
          transition={{ repeat: Infinity, duration: 10, ease: "easeInOut" }}
          className="absolute top-20 left-10 w-56 h-56 bg-purple-600/20 blur-3xl rounded-full"
        />

        {/* orb 2 */}
        <motion.div
          animate={{
            x: [0, 22, -10, 0],
            y: [0, 10, -8, 0],
            scale: [1, 1.08, 1],
          }}
          transition={{ repeat: Infinity, duration: 12, ease: "easeInOut" }}
          className="absolute top-40 right-10 w-72 h-72 bg-indigo-500/20 blur-3xl rounded-full"
        />

        {/* orb 3 */}
        <motion.div
          animate={{
            x: [0, -12, 12, 0],
            y: [0, 8, -8, 0],
            scale: [1, 1.03, 1],
          }}
          transition={{ repeat: Infinity, duration: 9, ease: "easeInOut" }}
          className="absolute bottom-20 left-1/4 w-48 h-48 bg-pink-500/20 blur-3xl rounded-full"
        />
      </motion.div>

      {/* Grid shimmer background */}
      <div className="absolute inset-0 -z-[15] opacity-[0.12] pointer-events-none">
        <svg className="w-full h-full" viewBox="0 0 600 600">
          <defs>
            <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
              <path d="M 40 0 L 0 0 0 40" fill="none" stroke="white" strokeWidth="0.6" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#grid)" />
        </svg>
      </div>

      {/* SHIMMER overlay */}
      <div
        className="absolute inset-0 -z-[5] pointer-events-none"
        style={{
          background:
            "linear-gradient(120deg, rgba(255,255,255,0.03), rgba(255,255,255,0.01), rgba(255,255,255,0.03))",
          mixBlendMode: "overlay",
          animation: "shimmer 8s linear infinite",
        }}
      />

      {/* Wrapper for stagger animations */}
      <motion.div
        className="w-full flex flex-col md:flex-row items-center justify-center"
        variants={stagger}
        initial="hidden"
        animate="show"
      >

        {/* PROFILE block */}
        <motion.div variants={fadeUp} className="mb-6 md:mb-0 md:ml-10 flex-shrink-0 z-10">
          <div
            ref={ringRef}
            className="relative flex flex-col items-center"
            style={{ transformStyle: "preserve-3d" }}
          >
            {/* slight breathing animation on ring + parallax transform */}
            <motion.div
              animate={{ scale: [1, 1.03, 1] }}
              transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
              className="rounded-full p-1 flex items-center justify-center"
              style={{
                width: isSmall ? 160 : 280,
                height: isSmall ? 160 : 280,
                background:
                  "conic-gradient(from 120deg, rgba(99,102,241,0.95), rgba(139,92,246,0.85), rgba(168,85,247,0.75))",
                WebkitMaskImage: "radial-gradient(circle, #000 65%, transparent 66%)",
                ...ringStyle,
              }}
            >
              <img
                src={profile}
                alt="Nitin Chugh"
                loading="lazy"
                decoding="async"
                className="object-cover rounded-full shadow-2xl border-4 border-gray-900"
                style={{
                  width: isSmall ? 140 : 240,
                  height: isSmall ? 140 : 240,
                  display: "block",
                  transformStyle: "preserve-3d",
                }}
              />
            </motion.div>

            {/* socials */}
            <div className={`flex items-center gap-3 mt-4 ${isSmall ? "justify-center" : "justify-start"}`}>
              <a href="https://github.com/NitinChugh13" target="_blank" rel="noreferrer" className="p-2 rounded-full bg-gray-800 text-gray-200 shadow-sm hover:scale-110 transition-transform" aria-label="GitHub">
                <FaGithub />
              </a>
              <a href="#" className="p-2 rounded-full bg-gray-800 text-gray-200 shadow-sm hover:scale-110 transition-transform" aria-label="LinkedIn">
                <FaLinkedin />
              </a>
              <a href="mailto:nitinchugh6.022@gmail.com" className="p-2 rounded-full bg-gray-800 text-gray-200 shadow-sm hover:scale-110 transition-transform" aria-label="Email">
                <FaEnvelope />
              </a>
            </div>
          </div>
        </motion.div>

        {/* TEXT column */}
        <motion.div variants={fadeUp} className="max-w-xl z-10">
          <motion.h1
            className={`font-extrabold leading-tight mb-3 ${isSmall ? "text-3xl" : "text-5xl"}`}
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            Hi, I’m{" "}
            <span className="bg-gradient-to-r from-indigo-400 to-purple-500 text-transparent bg-clip-text inline-flex items-center">
              {/* typed name with bounce on completion */}
              {/* <motion.span
                key={bounce ? "bounced" : "idle"} // key toggles animation when bounce changes
                animate={bounce ? { y: [-6, 0], scale: [0.98, 1.02, 1], transition: { duration: 0.55, ease: "easeOut" } } : { y: 0, scale: 1 }}
                style={{ whiteSpace: "pre" }}
              >
                {typed}
              </motion.span> */}
              <span style={{ whiteSpace: "pre" }}>{typed}</span>


              {/* blinking cursor */}
              <span
                aria-hidden="true"
                style={{
                  display: "inline-block",
                  width: 10,
                  marginLeft: 8,
                  background: "linear-gradient(180deg,#fff,#ddd)",
                  height: 18,
                  borderRadius: 2,
                  animation: "blink 1s steps(2, start) infinite",
                }}
              />
            </span>
          </motion.h1>

          {/* glowing underline element */}
          <div className="relative mb-3">
            <div
              aria-hidden
              className={`mx-0 h-1 w-full rounded-full transition-all duration-500 ${underlineActive ? "opacity-100" : "opacity-30"}`}
              style={{
                background: "linear-gradient(90deg,#7c3aed,#06b6d4,#f97316)",
                boxShadow: underlineActive ? "0 6px 28px rgba(124,58,237,0.16), 0 2px 10px rgba(6,182,212,0.08)" : "none",
                transform: underlineActive ? "scaleY(1.02)" : "scaleY(1)",
                filter: underlineActive ? "saturate(1.1)" : "none",
                height: underlineActive ? 6 : 3,
              }}
            />
          </div>

          <h2 className={`font-medium text-gray-300 mb-4 ${isSmall ? "text-sm" : "text-xl"}`}>Full-Stack Developer · Problem Solver · Tech Enthusiast</h2>

          <p className={`text-gray-400 mb-6 ${isSmall ? "text-sm max-w-[18rem] mx-auto" : "text-lg max-w-xl"}`}>
            I build responsive, user-focused web applications with clean UI and modern animations — blending design and functionality for seamless user experiences.
          </p>

          {/* CTA BUTTONS */}
          <motion.div variants={fadeUp}>
            <div className={`flex flex-wrap gap-3 ${isSmall ? "justify-center" : "justify-start"}`}>
              <a
                href="#projects"
                className={`flex items-center gap-2 px-4 py-3 ${isSmall ? "w-full justify-center" : ""} 
                bg-gradient-to-r from-indigo-500 to-purple-500 rounded-full text-white font-semibold shadow-xl 
                transition-transform hover:scale-[1.06] hover:-translate-y-1`}
              >
                View Projects <FaArrowRight />
              </a>

              <button
                onClick={() => setResumeOpen(true)}
                className={`flex items-center gap-2 px-4 py-3 ${isSmall ? "w-full justify-center" : ""} 
                border-2 border-indigo-400 rounded-full font-semibold text-indigo-400 hover:bg-indigo-500 hover:text-white transition-colors`}
              >
                <FaDownload /> View Resume
              </button>

              <a
                href="#contact"
                className={`flex items-center gap-2 px-4 py-3 ${isSmall ? "w-full justify-center" : ""} 
                border-2 border-purple-400 rounded-full font-semibold text-purple-400 hover:bg-purple-500 hover:text-white transition-colors`}
              >
                Contact Me
              </a>
            </div>
          </motion.div>

          <motion.p variants={fadeUp} className={`text-sm text-gray-500 mt-3 ${isSmall ? "text-center" : "text-left"}`}>
            Available for internships & freelance projects — let’s build something cool.
          </motion.p>
        </motion.div>
      </motion.div>

      {/* SCROLL INDICATOR */}
      {!isSmall && (
        <motion.div
          animate={{ y: [0, 6, 0] }}
          transition={{ repeat: Infinity, duration: 1.6 }}
          className="absolute bottom-6 left-1/2 -translate-x-1/2 z-20"
        >
          <div className="flex flex-col items-center gap-2">
            <span className="text-xs text-gray-400">Scroll</span>
            <div className="w-8 h-12 rounded-full border-2 border-gray-600 flex items-start justify-center p-1">
              <motion.span
                animate={{ y: [0, 6, 0] }}
                transition={{ repeat: Infinity, duration: 1.6 }}
                className="block w-2 h-2 rounded-full bg-gray-400"
              />
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

      {/* CSS Animations */}
      <style>{`
        @keyframes shimmer {
          0% { background-position: -200% 0; }
          100% { background-position: 200% 0; }
        }
        @keyframes blink { 0% { opacity: 1 } 50% { opacity: 0 } 100% { opacity: 1 } }

        /* improve 3D feel */
        @media (prefers-reduced-motion: reduce) {
          .animate-blob, .blur-3xl, .transition-transform, .shadow-xl { transition: none !important; animation: none !important; }
        }

        /* reduce heavy visuals on very small screens */
        @media (max-width: 640px) {
          .blur-3xl { display: none; }
        }
      `}</style>
    </section>
  );
};

export default Hero;
