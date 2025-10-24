"use client";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import Navbar from "./components/Navbar"; 
import SkillsSection from "./components/SkillsSection"; 
import HeroSection from "./components/HeroSection"; 
import ContactSection from "./components/ContactSection";
import SocietiesSection from "./components/SocietiesSection"
import ExperienceSection from "./components/ExperienceSection";


export default function Home() {
  const [binaryNumbers, setBinaryNumbers] = useState([]);

  useEffect(() => {
    // ✅ Generate random positions AFTER hydration (client-side only)
    const generatedNumbers = Array.from({ length: 50 }).map(() => ({
      left: `${Math.random() * 100}%`,
      top: `${Math.random() * 100}%`,
      number: Math.random() > 0.5 ? "0" : "1",
    }));

    setBinaryNumbers(generatedNumbers);
  }, []);

  return (
    <div className="relative w-full bg-black"> 

      {/* ✅ Navbar */}
      <Navbar />

      {/* ✅ Floating Binary Numbers */}
      <div className="fixed inset-0 w-full h-full pointer-events-none z-0">
        {binaryNumbers.map((pos, i) => (
          <motion.span
            key={i}
            className="absolute text-green-400 font-bold opacity-30"
            style={{ left: pos.left, top: pos.top }}
            animate={{
              x: [0, Math.random() * 200 - 100, 0],
              y: [0, Math.random() * 200 - 100, 0],
              opacity: [0.1, 0.5, 0.1],
            }}
            transition={{
              duration: Math.random() * 4 + 2,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          >
            {pos.number}
          </motion.span>
        ))}
      </div>

      {/* ✅ HERO SECTION - SHOULD BE AT THE TOP */}
      <HeroSection />

      {/* ✅ ABOUT ME SECTION */}
      <section id="about" className="relative h-screen flex items-center justify-center text-white snap-start px-6 md:px-12 z-10">
        <div className="max-w-5xl w-full flex flex-col md:flex-row items-center gap-8">
          
          {/* Left Side - Image & Social Links */}
          <div className="flex flex-col items-center md:items-start">
            <img
            src="/portfolioimage.png"
            alt="Raheem Madeleka receiving award at Memorial University"
            className="w-64 h-auto rounded-2xl border-4 border-white shadow-lg object-cover"
            style={{ maxHeight: "400px" }}
/>


            {/* Social Links */}
            <div className="flex mt-4 space-x-4">
              <a href="https://www.linkedin.com/in/raheemmadeleka/" target="_blank" rel="noopener noreferrer">
                <img src="/brands/linkedin.svg" alt="LinkedIn" className="w-8 h-8 invert" />
              </a>
              <a href="https://github.com/theworldofraheem" target="_blank" rel="noopener noreferrer">
                <img src="/brands/github.svg" alt="GitHub" className="w-8 h-8 invert" />
              </a>
              <a href="mailto:rjmadeleka@mun.ca">
                <img src="/brands/envelope.svg" alt="Email" className="w-8 h-8 invert" />
              </a>
            </div>
          </div>

          {/* Right Side - About Me Info */}
          <div className="max-w-2xl">
            <div className="text-center">
            <h2 className="text-4xl font-bold">About Me</h2>
            <hr className="border-t border-gray-600 my-4 mx-auto w-1/2" />
            </div>


  <h3 className="text-xl font-semibold flex items-center">
    Education
    <a target="_blank" rel="noopener noreferrer">
      <img 
        src="/brands/memorial.svg" 
        alt="Memorial University of Newfoundland"
        className="w-10 h-10 ml-3 invert transition-transform duration-300 transform hover:scale-110 hover:opacity-80"
      />
    </a>
  </h3>
  
  <p className="text-gray-300">
    Bachelor of Computer Science & Data Science, Memorial University of Newfoundland
    <br />Expected Graduation: May 2027
  </p>

  <h3 className="text-xl font-semibold mt-4">Who am I?</h3>

  <p className="text-gray-300 mt-4">
    <span className="font-semibold">Tech Journey:</span> I'm all about coding adventures! From whipping up Java and Python magic 
    to crafting projects with HTML, CSS, and JavaScript, I'm on a mission to explore every corner of the digital universe. 
    I have used multiple software tools, including Unity and GitHub, to help me on my learning journey!
  </p>

  <p className="text-gray-300 mt-4">
    <span className="font-semibold">Mentor:</span> Need a coding buddy or a dose of motivation? Look no further! 
    I'm all about lifting each other up. Whether it's cracking coding problems or just lending an ear, 
    I'm here to cheer you on every step of the way.
  </p>

  <p className="text-gray-300 mt-4">
    <span className="font-semibold">Ready for Action:</span> I'm on the lookout for exciting opportunities to challenge myself and 
    make a meaningful impact. If you're on the hunt for a passionate team player who brings good vibes 
    and great code to the table, let's chat!
  </p>
</div>

        </div>
      </section>
      {/* ✅ EXPERIENCE SECTION */}
      <ExperienceSection />
      {/* ✅ ADDING Societies SECTION BELOW */}
      <SocietiesSection />

      {/* ✅ ADDING SKILLS SECTION BELOW */}
      <SkillsSection />

      {/* ✅ Adding Contact Section */}
      <ContactSection />
    </div>
  );
}
