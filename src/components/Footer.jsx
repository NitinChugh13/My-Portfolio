import React, { useState, useEffect } from "react";
import { FaArrowUp, FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";
import { motion } from "framer-motion";

const Footer = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.scrollY > 300) setIsVisible(true);
      else setIsVisible(false);
    };

    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="relative bg-gray-950 text-gray-400 py-10 border-t border-gray-800">
      <div className="max-w-6xl mx-auto px-6 text-center space-y-6">
        {/* Social Links */}
        <div className="flex justify-center gap-6 text-2xl">
          <a
            href="mailto:nitinchugh6.022@gmail.com"
            className="hover:text-indigo-400 transition"
          >
            <FaEnvelope />
          </a>
          <a
            href="https://github.com/NitinChugh13"
            target="_blank"
            rel="noreferrer"
            className="hover:text-indigo-400 transition"
          >
            <FaGithub />
          </a>
          <a
            href="#"
            className="hover:text-indigo-400 transition"
          >
            <FaLinkedin />
          </a>
        </div>

        {/* Divider */}
        <div className="w-24 h-[2px] bg-gradient-to-r from-indigo-500 to-purple-500 mx-auto rounded-full" />

        {/* Copyright */}
        <p className="text-sm text-gray-500">
          © {new Date().getFullYear()} <span className="text-indigo-400">Nitin Chugh</span> · All rights reserved.
        </p>
      </div>

      {/* Scroll to Top Button */}
      {isVisible && (
        <motion.button
          onClick={scrollToTop}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="fixed bottom-6 right-6 bg-gradient-to-r from-indigo-500 to-purple-500 text-white p-3 rounded-full shadow-lg hover:scale-110 transition-transform"
        >
          <FaArrowUp />
        </motion.button>
      )}
    </footer>
  );
};

export default Footer;
