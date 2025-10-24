"use client";
import { useEffect, useState } from "react";

export default function Navbar() {
  const [showNav, setShowNav] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > window.innerHeight * 0.8) {
        setShowNav(true);
      } else {
        setShowNav(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 w-full bg-black bg-opacity-90 backdrop-blur-md shadow-md transition-transform duration-300 ${
        showNav ? "translate-y-0" : "-translate-y-full"
      } z-50`}
    >
      <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
        {/* ✅ Navbar Links with Smooth Scrolling */}
        <div className="flex space-x-6 text-white text-lg">
          <a href="#about" className="hover:text-green-400 transition">About Me</a>
          <a href="#experience" className="hover:text-green-400 transition">Experience</a>
          <a href="#skills" className="hover:text-green-400 transition">Skills</a>
          <a href="#societies" className="hover:text-green-400 transition">Societies</a>
          <a href="#projects" className="hover:text-green-400 transition">Projects</a>
          <a href="#contact" className="hover:text-green-400 transition">Contact</a>
        </div>

        {/* Resume Button */}
        <a href="/Resume.pdf" download>
          <button className="bg-green-500 text-black px-4 py-2 rounded-md font-bold transition">
            My Resume
          </button>
        </a>
      </div>
    </nav>
  );
}
