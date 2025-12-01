import React, { useEffect, useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaSun, FaMoon } from "react-icons/fa";

/**
 * Navbar (updated)
 * - Hides on scroll down on small devices, shows on scroll up
 * - Mouse follower glow disabled on small devices
 * - Animated underline still present
 * - Achievements visible everywhere
 *
 * Expected section ids: hero, about, skills, projects, education, achievements, contact
 */

const NAV_ITEMS = ["hero", "about", "skills", "projects", "education", "achievements", "contact"];

const Navbar = () => {
  const [darkMode, setDarkMode] = useState(() => true);
  const [menuOpen, setMenuOpen] = useState(false);
  const [isShrunk, setIsShrunk] = useState(false);
  const [active, setActive] = useState("hero");
  const [progress, setProgress] = useState(0);
  const [isHiddenOnMobile, setIsHiddenOnMobile] = useState(false);

  const navRef = useRef(null);
  const underlineRef = useRef(null);
  const linksRef = useRef({}); // dom nodes for each nav item
  const followerRef = useRef(null);

  // toggle theme
  const toggleDarkMode = () => {
    const html = document.documentElement;
    html.classList.toggle("dark");
    setDarkMode((s) => !s);
  };

  // smooth scroll
  const scrollToSection = (id) => {
    const el = document.getElementById(id);
    if (!el) return;
    el.scrollIntoView({ behavior: "smooth", block: "start" });
    setMenuOpen(false);
    setActive(id);
  };

  // shrink navbar on scroll + progress bar
  useEffect(() => {
    function onScroll() {
      const y = window.scrollY || 0;
      setIsShrunk(y > 60);

      const doc = document.documentElement;
      const total = doc.scrollHeight - window.innerHeight;
      const pct = total > 0 ? Math.min(100, Math.round((y / total) * 100)) : 0;
      setProgress(pct);
    }
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // active section detection (IntersectionObserver)
  useEffect(() => {
    const observers = [];
    const opts = {
      root: null,
      rootMargin: "-40% 0px -40% 0px",
      threshold: 0,
    };

    const callback = (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActive(entry.target.id);
        }
      });
    };

    const observer = new IntersectionObserver(callback, opts);
    NAV_ITEMS.forEach((id) => {
      const el = document.getElementById(id);
      if (el) {
        observer.observe(el);
        observers.push({ observer, el });
      }
    });

    return () => {
      observers.forEach(({ observer, el }) => observer.unobserve(el));
      observer.disconnect();
    };
  }, []);

  // position underline under active node
  // useEffect(() => {
  //   const node = linksRef.current[active];
  //   const underline = underlineRef.current;
  //   const navNode = navRef.current;
  //   if (!node || !underline || !navNode) return;

  //   const rect = node.getBoundingClientRect();
  //   const navRect = navNode.getBoundingClientRect();

  //   const left = rect.left - navRect.left;
  //   const width = rect.width;

  //   underline.style.transform = `translateX(${left}px)`;
  //   underline.style.width = `${width}px`;
  // }, [active, isShrunk, menuOpen]);

  // mouse follower glow (only on large screens)
  useEffect(() => {
    const follower = followerRef.current;
    const nav = navRef.current;
    if (!follower || !nav) return;

    // enable follower only on desktop width
    const isDesktop = () => window.innerWidth >= 768;
    let enabled = isDesktop();
    const addListeners = () => {
      if (!enabled) return;
      function onMove(e) {
        const rect = nav.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        follower.style.transform = `translate(${x - 40}px, ${y - 40}px)`;
        follower.style.opacity = "1";
      }
      function onLeave() {
        follower.style.opacity = "0";
      }
      nav.addEventListener("mousemove", onMove);
      nav.addEventListener("mouseleave", onLeave);
      return () => {
        nav.removeEventListener("mousemove", onMove);
        nav.removeEventListener("mouseleave", onLeave);
      };
    };

    let cleanup = null;
    if (enabled) cleanup = addListeners();

    const onResize = () => {
      const nowDesktop = isDesktop();
      if (nowDesktop && !enabled) {
        enabled = true;
        cleanup = addListeners();
      } else if (!nowDesktop && enabled) {
        // disable
        enabled = false;
        if (cleanup) cleanup();
        follower.style.opacity = "0";
      }
    };
    window.addEventListener("resize", onResize);
    return () => {
      if (cleanup) cleanup();
      window.removeEventListener("resize", onResize);
    };
  }, []);

  // hide navbar on scroll down on small devices; show on scroll up
  useEffect(() => {
    let lastY = window.scrollY || 0;
    let ticking = false;

    const isMobileWidth = () => window.innerWidth < 768;

    function onScroll() {
      if (!isMobileWidth()) {
        // ensure visible on desktop
        setIsHiddenOnMobile(false);
        lastY = window.scrollY || 0;
        return;
      }

      const currentY = window.scrollY || 0;
      if (!ticking) {
        window.requestAnimationFrame(() => {
          const delta = currentY - lastY;
          // if scrolled down more than 10px -> hide
          if (delta > 10 && currentY > 80) {
            setIsHiddenOnMobile(true);
          } else if (delta < -10) {
            // scrolled up -> show
            setIsHiddenOnMobile(false);
          }
          lastY = currentY;
          ticking = false;
        });
        ticking = true;
      }
    }

    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll); // re-evaluate on resize
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, []);

  // close mobile menu when resizing to desktop
  useEffect(() => {
    function onResize() {
      if (window.innerWidth >= 768) setMenuOpen(false);
    }
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, []);

  return (
    <nav
      className={`fixed left-0 right-0 top-0 z-50 pointer-events-auto transition-transform duration-300 ${
        isHiddenOnMobile ? "-translate-y-full" : "translate-y-0"
      }`}
      aria-label="Main navigation"
    >
      {/* Top progress bar */}
      <div className="h-1 w-full bg-transparent" style={{ boxShadow: "inset 0 -1px 0 rgba(255,255,255,0.02)" }}>
        <div
          className="h-1 bg-gradient-to-r from-indigo-400 to-purple-500 transition-all"
          style={{ width: `${progress}%` }}
        />
      </div>

      {/* Nav container */}
      <div ref={navRef} className={`relative mx-auto max-w-7xl px-4 sm:px-6 ${isShrunk ? "py-2" : "py-4"} transition-all duration-300`}>
        {/* backdrop & border */}
        <div
          className={`absolute inset-0 -z-10 rounded-b-xl border-b ${isShrunk ? "border-white/6" : "border-white/8"} bg-gray-900/60 backdrop-blur-xl shadow-[0_8px_30px_rgba(2,6,23,0.6)]`}
        />

        {/* mouse follower glow (rendered but disabled on small screens via JS) */}
        <div
          ref={followerRef}
          className="pointer-events-none absolute -z-0 left-0 top-0 w-20 h-20 rounded-full blur-2xl opacity-0 transition-opacity duration-300"
          style={{ background: "radial-gradient(circle at 30% 30%, rgba(99,102,241,0.22), rgba(124,58,237,0.12) 40%, transparent 70%)" }}
          aria-hidden
        />

        <div className="relative flex items-center justify-between">
          {/* Logo (treated as first link 'hero') */}
          <motion.button
            ref={(el) => (linksRef.current["hero"] = el)}
            onClick={() => scrollToSection("hero")}
            whileHover={{ scale: 1.03 }}
            className="flex items-center gap-2 focus:outline-none"
            aria-label="Go to top"
          >
            <span
              className={`font-bold tracking-wide bg-clip-text text-transparent bg-gradient-to-r from-indigo-400 to-purple-500 transition-all ${
                isShrunk ? "text-xl" : "text-2xl sm:text-2xl"
              }`}
              style={{ textShadow: "0 6px 18px rgba(99,102,241,0.12)" }}
            >
              Nitin<span className="text-purple-400">.</span>
            </span>
          </motion.button>

          {/* Desktop nav (hidden on small screens) */}
          <div className="hidden md:flex items-center gap-8 relative">
            <ul className="flex items-center gap-8 text-lg font-medium">
              {NAV_ITEMS.map((item) => (
                <li
                  key={item}
                  ref={(el) => (linksRef.current[item] = el)}
                  onClick={() => scrollToSection(item)}
                  className={`relative cursor-pointer transition-colors duration-200 ${
                    active === item ? "text-white font-semibold" : "text-gray-300 hover:text-indigo-300"
                  }`}
                  role="button"
                  tabIndex={0}
                  onKeyDown={(e) => e.key === "Enter" && scrollToSection(item)}
                >
                  {item === "hero" ? null : item.charAt(0).toUpperCase() + item.slice(1)}
                </li>
              ))}
            </ul>

            {/* animated underline */}
            <div className="absolute left-0 bottom-[-6px] w-full pointer-events-none">
              <div
                ref={underlineRef}
                className="h-[3px] rounded-full bg-gradient-to-r from-indigo-400 to-purple-500 transition-all duration-300"
                style={{ width: 0, transform: "translateX(0px)" }}
              />
            </div>
          </div>

          {/* Right controls */}
          <div className="flex items-center gap-4">
            <motion.button
              whileTap={{ scale: 0.95 }}
              onClick={toggleDarkMode}
              className="hidden md:flex items-center justify-center rounded-full p-2 text-xl text-gray-200 hover:text-indigo-300 transition"
              aria-label="Toggle theme"
            >
              {darkMode ? <FaSun /> : <FaMoon />}
            </motion.button>

            {/* mobile menu toggle */}
            <motion.button
              whileTap={{ scale: 0.95 }}
              className="md:hidden text-2xl p-2 rounded-md bg-white/3 text-gray-100 hover:text-indigo-300 transition"
              onClick={() => setMenuOpen((s) => !s)}
              aria-label="Toggle menu"
            >
              {menuOpen ? "✕" : "☰"}
            </motion.button>
          </div>
        </div>

        {/* Mobile menu */}
        <AnimatePresence>
          {menuOpen && (
            <motion.div
              initial={{ opacity: 0, y: -8 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -8 }}
              transition={{ duration: 0.18 }}
              className="md:hidden mt-3 bg-gray-900/95 backdrop-blur-xl rounded-lg p-4 shadow-lg border border-white/6"
            >
              <ul className="flex flex-col gap-3 text-lg font-medium">
                {NAV_ITEMS.map((item) => (
                  <li
                    key={item}
                    onClick={() => scrollToSection(item)}
                    className={`py-2 px-3 rounded-md cursor-pointer transition-colors ${
                      active === item ? "bg-indigo-500/10 text-white" : "text-gray-300 hover:bg-white/5"
                    }`}
                  >
                    {item === "hero" ? "Home" : item.charAt(0).toUpperCase() + item.slice(1)}
                  </li>
                ))}
              </ul>

              <div className="mt-3 flex items-center justify-between">
                <button onClick={toggleDarkMode} className="flex items-center gap-2 px-3 py-2 rounded-md bg-white/3 text-gray-200 hover:text-indigo-300">
                  {darkMode ? <FaMoon /> : <FaSun />}
                  <span>{darkMode ? "Dark" : "Light"}</span>
                </button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </nav>
  );
};

export default Navbar;
