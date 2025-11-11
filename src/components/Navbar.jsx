import React, { useState } from "react";
import { FaSun, FaMoon } from "react-icons/fa";

const Navbar = () => {
  const [darkMode, setDarkMode] = useState(true);
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleDarkMode = () => {
    const html = document.documentElement;
    html.classList.toggle("dark");
    setDarkMode(!darkMode);
  };

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setMenuOpen(false);
    }
  };

  return (
    <nav className="fixed top-0 left-0 w-full bg-gray-900/80 backdrop-blur-lg text-white z-50 shadow-lg">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        {/* Logo */}
        <h1
          className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-purple-500 cursor-pointer"
          onClick={() => scrollToSection("hero")}
        >
          Nitin<span className="text-purple-400">.</span>
        </h1>

        {/* Desktop Menu */}
        <ul className="hidden md:flex space-x-8 text-lg font-medium">
          {["about", "skills", "projects", "education", "contact"].map((item) => (
            <li
              key={item}
              onClick={() => scrollToSection(item)}
              className="cursor-pointer hover:text-indigo-400 transition-colors duration-300"
            >
              {item.charAt(0).toUpperCase() + item.slice(1)}
            </li>
          ))}
        </ul>

        {/* Theme toggle */}
        <button
          onClick={toggleDarkMode}
          className="hidden md:flex items-center text-xl hover:text-indigo-400 transition"
        >
          {darkMode ? <FaSun /> : <FaMoon />}
        </button>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-2xl"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          ☰
        </button>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden bg-gray-900 text-center py-4 space-y-4">
          {["about", "skills", "projects", "education", "resume", "contact"].map((item) => (

            <p
              key={item}
              onClick={() => scrollToSection(item)}
              className="cursor-pointer hover:text-indigo-400 transition-colors duration-300"
            >
              {item.charAt(0).toUpperCase() + item.slice(1)}
            </p>
          ))}
          <button
            onClick={toggleDarkMode}
            className="text-xl hover:text-indigo-400"
          >
            {darkMode ? <FaMoon /> : <FaSun />}
          </button>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
