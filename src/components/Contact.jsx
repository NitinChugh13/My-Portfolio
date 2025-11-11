import React, { useState } from "react";
import { motion } from "framer-motion";
import { FaEnvelope, FaPhone, FaGithub, FaLinkedin } from "react-icons/fa";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Thank you for reaching out, " + formData.name + "! I'll get back to you soon.");
    setFormData({ name: "", email: "", message: "" });
  };

  return (
    <section
      id="contact"
      className="py-24 px-6 md:px-12 bg-gray-900 text-white"
    >
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="max-w-5xl mx-auto text-center"
      >
        <h2 className="text-4xl font-bold mb-12 text-indigo-400">Contact Me</h2>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Left Info */}
          <div className="text-left flex flex-col justify-center space-y-6">
            <p className="text-gray-300 text-lg">
              I’m always open to collaborations, internships, or interesting project ideas.  
              Let’s connect and build something great together!
            </p>

            <div className="space-y-4 text-gray-400">
              <p className="flex items-center gap-3">
                <FaEnvelope className="text-indigo-400 text-xl" />
                <span className="hover:text-indigo-400 transition">
                  nitinchugh6.022@gmail.com
                </span>
              </p>
              <p className="flex items-center gap-3">
                <FaPhone className="text-purple-400 text-xl" />
                <span>+91 8448718971</span>
              </p>
              <p className="flex items-center gap-3">
                <FaGithub className="text-gray-300 text-xl" />
                <a
                  href="https://github.com/NitinChugh13"
                  target="_blank"
                  rel="noreferrer"
                  className="hover:text-indigo-400 transition"
                >
                  github.com/NitinChugh13
                </a>
              </p>
              <p className="flex items-center gap-3">
                <FaLinkedin className="text-blue-400 text-xl" />
                <span className="text-gray-500">
                  (LinkedIn coming soon)
                </span>
              </p>
            </div>
          </div>

          {/* Right Form */}
          <form
            onSubmit={handleSubmit}
            className="bg-gray-800 rounded-2xl p-8 shadow-lg border border-gray-700 hover:border-indigo-500 transition-all duration-300"
          >
            <div className="mb-5">
              <label htmlFor="name" className="block mb-2 text-left font-semibold text-gray-300">
                Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                className="w-full px-4 py-2 rounded-lg bg-gray-900 border border-gray-700 focus:border-indigo-500 focus:outline-none text-white"
              />
            </div>
            <div className="mb-5">
              <label htmlFor="email" className="block mb-2 text-left font-semibold text-gray-300">
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full px-4 py-2 rounded-lg bg-gray-900 border border-gray-700 focus:border-indigo-500 focus:outline-none text-white"
              />
            </div>
            <div className="mb-5">
              <label htmlFor="message" className="block mb-2 text-left font-semibold text-gray-300">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                rows="4"
                required
                className="w-full px-4 py-2 rounded-lg bg-gray-900 border border-gray-700 focus:border-indigo-500 focus:outline-none text-white resize-none"
              />
            </div>

            <button
              type="submit"
              className="w-full py-3 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-full font-semibold hover:scale-105 transition-transform"
            >
              Send Message
            </button>
          </form>
        </div>
      </motion.div>
    </section>
  );
};

export default Contact;
