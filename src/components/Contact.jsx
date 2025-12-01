import React, { useState } from "react";
import { motion } from "framer-motion";
import { FaEnvelope, FaPhone, FaGithub, FaLinkedin } from "react-icons/fa";

const Contact = () => {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });

  const handleChange = (e) => setFormData({ ...formData, [e.target.name]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Thank you for reaching out, ${formData.name}! I'll get back to you soon.`);
    setFormData({ name: "", email: "", message: "" });
  };

  return (
    <section id="contact" className="relative py-16 md:py-24 px-4 md:px-12 bg-gray-950 text-white overflow-hidden">

      {/* 🔵 Background Accent Glow */}
      <div className="absolute inset-0 bg-gradient-to-br from-indigo-600/10 via-purple-600/10 to-transparent blur-3xl"></div>

      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="max-w-5xl mx-auto relative z-10"
      >
        <h2 className="text-center text-4xl font-extrabold mb-10 bg-gradient-to-r from-indigo-400 to-purple-500 bg-clip-text text-transparent">
          Let's Connect
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">

          {/* LEFT INFORMATION CARD */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            className="p-6 rounded-2xl bg-gray-900/60 backdrop-blur-xl shadow-xl border border-gray-800 hover:border-indigo-500/40 transition-all"
          >
            <h3 className="text-2xl font-semibold text-indigo-300 mb-4">Let’s Talk</h3>

            <p className="text-gray-300 text-base mb-6">
              Whether you have a project idea, want to collaborate, or just say hello — I’d love to hear from you!
            </p>

            <div className="space-y-4">

              <motion.p whileHover={{ scale: 1.03 }} className="flex items-center gap-3 cursor-pointer">
                <FaEnvelope className="text-indigo-400 text-xl" />
                <span className="hover:text-indigo-300 transition">nitinchugh6.022@gmail.com</span>
              </motion.p>

              <motion.p whileHover={{ scale: 1.03 }} className="flex items-center gap-3">
                <FaPhone className="text-purple-400 text-xl" />
                <span className="hover:text-purple-300 transition">+91 8448718971</span>
              </motion.p>

              <motion.p whileHover={{ scale: 1.03 }} className="flex items-center gap-3">
                <FaGithub className="text-gray-300 text-xl" />
                <a
                  href="https://github.com/NitinChugh13"
                  target="_blank"
                  rel="noreferrer"
                  className="hover:text-indigo-300 transition"
                >
                  github.com/NitinChugh13
                </a>
              </motion.p>

              <motion.p whileHover={{ scale: 1.03 }} className="flex items-center gap-3">
                <FaLinkedin className="text-blue-400 text-xl" />
                <span className="text-gray-500">(LinkedIn coming soon)</span>
              </motion.p>
            </div>
          </motion.div>

          {/* RIGHT FORM CARD */}
          <motion.form
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            onSubmit={handleSubmit}
            className="p-6 sm:p-8 bg-gray-900/60 backdrop-blur-xl rounded-2xl border border-gray-800 shadow-xl hover:border-indigo-500/40 transition-all"
          >
            <div className="mb-5">
              <label className="block mb-2 text-left font-semibold text-gray-300">Name</label>
              <input
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                className="w-full px-4 py-2 rounded-lg bg-gray-900/80 border border-gray-700 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-500/40 focus:outline-none text-white transition-all"
              />
            </div>

            <div className="mb-5">
              <label className="block mb-2 text-left font-semibold text-gray-300">Email</label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full px-4 py-2 rounded-lg bg-gray-900/80 border border-gray-700 focus:border-purple-500 focus:ring-2 focus:ring-purple-500/40 focus:outline-none text-white transition-all"
              />
            </div>

            <div className="mb-5">
              <label className="block mb-2 text-left font-semibold text-gray-300">Message</label>
              <textarea
                name="message"
                rows="4"
                value={formData.message}
                onChange={handleChange}
                required
                className="w-full px-4 py-2 rounded-lg bg-gray-900/80 border border-gray-700 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-500/40 focus:outline-none text-white resize-none transition"
              />
            </div>

            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.97 }}
              type="submit"
              className="w-full py-3 bg-gradient-to-r from-indigo-500 to-purple-600 rounded-full font-semibold shadow-lg hover:shadow-indigo-500/40 transition-transform"
            >
              Send Message
            </motion.button>
          </motion.form>
        </div>
      </motion.div>
    </section>
  );
};

export default Contact;
