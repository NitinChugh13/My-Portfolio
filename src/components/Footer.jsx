// src/components/Footer.jsx
import React, { useEffect, useState } from "react";
import { FaArrowUp, FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";
import { motion, AnimatePresence } from "framer-motion";

const social = [
  { href: "mailto:nitinchugh6.022@gmail.com", label: "Email", icon: <FaEnvelope /> },
  { href: "https://github.com/NitinChugh13", label: "GitHub", icon: <FaGithub /> },
  { href: "#", label: "LinkedIn", icon: <FaLinkedin /> },
];

const iconVariants = {
  rest: { scale: 1, opacity: 0.95 },
  hover: { scale: 1.12, opacity: 1, y: -3, transition: { type: "spring", stiffness: 300 } },
  tap: { scale: 0.98 },
};

const Footer = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [subEmail, setSubEmail] = useState("");
  const [subMsg, setSubMsg] = useState(null);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.scrollY > 300) setIsVisible(true);
      else setIsVisible(false);
    };

    window.addEventListener("scroll", toggleVisibility, { passive: true });
    toggleVisibility();
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  const scrollToTop = () => window.scrollTo({ top: 0, behavior: "smooth" });

  const submitSubscribe = (e) => {
    e.preventDefault();
    if (!subEmail || !/^\S+@\S+\.\S+$/.test(subEmail)) {
      setSubMsg({ type: "error", text: "Please enter a valid email." });
      return;
    }
    setSubMsg({ type: "success", text: "Thanks — I’ll reach out soon!" });
    setSubEmail("");
    setTimeout(() => setSubMsg(null), 3500);
  };

  return (
    <footer className="relative bg-gradient-to-b from-[#04050a] to-gray-950 text-gray-300 py-10 md:py-14 border-t border-gray-800">
      {/* Decorative top wave */}
      <div className="absolute left-0 right-0 -top-6 pointer-events-none">
        <svg viewBox="0 0 1440 60" className="w-full h-6" preserveAspectRatio="none" aria-hidden>
          <path d="M0,20 C240,80 480,-40 720,20 C960,80 1200,-40 1440,20 L1440,60 L0,60 Z" fill="#071021" opacity="0.7" />
        </svg>
      </div>

      <div className="max-w-6xl mx-auto px-6 md:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-start">
          {/* Left: Social + description */}
          <div className="space-y-4">
            <h3 className="text-2xl md:text-3xl font-bold text-indigo-300">Stay connected</h3>
            <p className="text-gray-400">
              I'm open to internships, collaborations and freelance work. Connect with me on GitHub or send an email — I reply quickly.
            </p>

            <div className="flex items-center gap-3 mt-2">
              {social.map((s, i) => (
                <motion.a
                  key={s.label}
                  href={s.href}
                  target={s.href.startsWith("http") ? "_blank" : undefined}
                  rel={s.href.startsWith("http") ? "noreferrer" : undefined}
                  aria-label={s.label}
                  initial="rest"
                  whileHover="hover"
                  whileTap="tap"
                  variants={iconVariants}
                  className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-gray-800/60 border border-white/6 shadow-sm hover:shadow-md transition"
                >
                  <span className="text-lg text-gray-100">{s.icon}</span>
                </motion.a>
              ))}
            </div>
          </div>

          {/* Middle: subscribe + divider */}
          <div className="bg-gray-900/40 p-5 rounded-xl border border-white/6 shadow-[inset_0_1px_0_rgba(255,255,255,0.02)]">
            <form onSubmit={submitSubscribe} className="flex flex-col sm:flex-row items-center gap-3">
              <label htmlFor="subscribe" className="sr-only">Subscribe to updates</label>
              <input
                id="subscribe"
                type="email"
                value={subEmail}
                onChange={(e) => setSubEmail(e.target.value)}
                placeholder="Your email (updates)"
                className="w-full sm:flex-1 px-4 py-2 rounded-lg bg-gray-900 border border-white/6 text-gray-100 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-indigo-400"
              />
              <motion.button
                type="submit"
                whileTap={{ scale: 0.98 }}
                className="mt-2 sm:mt-0 inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-gradient-to-r from-indigo-500 to-purple-500 text-white font-semibold shadow hover:brightness-105 transition"
              >
                Subscribe
              </motion.button>
            </form>

            <div className="mt-3 flex items-center justify-between gap-4">
              <div className="text-sm text-gray-400">
                <strong className="text-gray-200">Fast replies</strong>
                <div className="text-xs mt-1">Available for internships & freelance</div>
              </div>

              {/* gradient divider pill */}
              <motion.div whileHover={{ scale: 1.03 }} className="px-3 py-1 rounded-full bg-gradient-to-r from-indigo-500 to-purple-500 text-xs font-medium text-white/95">
                Let's build
              </motion.div>
            </div>

            {subMsg && (
              <div
                className={`mt-3 text-sm py-2 px-3 rounded-md ${
                  subMsg.type === "success" ? "bg-emerald-800/40 text-emerald-300" : "bg-rose-900/30 text-rose-300"
                }`}
              >
                {subMsg.text}
              </div>
            )}
          </div>

          {/* Right: copyright + small links */}
          <div className="flex flex-col items-start md:items-end gap-4">
            <div className="text-sm text-gray-400">© {new Date().getFullYear()} <span className="text-indigo-400 font-semibold">Nitin Chugh</span></div>
            <p className="text-xs text-gray-500 max-w-sm md:max-w-xs">
              Built by using React, Tailwind & Framer Motion. Accessibility & responsiveness prioritized.
            </p>

            <div className="mt-2 flex items-center gap-3">
              <a href="#projects" onClick={(e) => { e.preventDefault(); document.getElementById("projects")?.scrollIntoView({behavior:"smooth"}); }} className="text-sm px-3 py-1 rounded-md bg-white/3 hover:bg-white/5 transition">Projects</a>
              <a href="#contact" onClick={(e) => { e.preventDefault(); document.getElementById("contact")?.scrollIntoView({behavior:"smooth"}); }} className="text-sm px-3 py-1 rounded-md bg-white/3 hover:bg-white/5 transition">Contact</a>
            </div>
          </div>
        </div>

        {/* animated divider */}
        <div className="mt-8">
          <motion.div
            className="mx-auto w-32 h-1 rounded-full bg-gradient-to-r from-indigo-400 to-purple-500"
            whileHover={{ scaleX: 1.08 }}
            style={{ transformOrigin: "center" }}
          />
        </div>
      </div>

      {/* Scroll to top */}
      <AnimatePresence>
        {isVisible && (
          <motion.button
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 12, scale: 0.95 }}
            transition={{ duration: 0.25 }}
            onClick={scrollToTop}
            aria-label="Scroll back to top"
            className="fixed bottom-6 right-6 z-50 flex items-center gap-2 bg-gradient-to-r from-indigo-500 to-purple-500 text-white p-3 rounded-full shadow-xl hover:scale-110 transition-transform"
            title="Back to top"
          >
            <FaArrowUp />
          </motion.button>
        )}
      </AnimatePresence>
    </footer>
  );
};

export default Footer;
