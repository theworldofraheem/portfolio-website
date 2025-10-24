"use client";
import { motion } from "framer-motion";

export default function ContactSection() {
  return (
    <section id="contact" className="relative h-screen flex flex-col items-center justify-center text-white snap-start px-6 md:px-12 z-10">
      <h2 className="text-4xl font-bold">Contact Me</h2>
      <hr className="border-t border-gray-600 my-6 w-full max-w-4xl" />

      {/* Contact Details */}
      <div className="flex flex-col items-center space-y-6 text-lg">

        {/* Email */}
        <div className="flex items-center space-x-4">
          <img src="/brands/envelope.svg" alt="Email" className="w-8 h-8 invert" />
          <p href = "mailto:rjmadeleka@mun.ca" className="text-white-300 hover:text-green-400">rjmadeleka@mun.ca</p>
        </div>

        {/* LinkedIn */}
        <div className="flex items-center space-x-4">
          <img src="/brands/linkedin.svg" alt="LinkedIn" className="w-8 h-8 invert" />
          <a href="https://www.linkedin.com/in/raheemmadeleka/" target="_blank" rel="noopener noreferrer" className="text-white-300 hover:text-green-400 transition">
            linkedin
          </a>
        </div>

        {/* Phone */}
        <div className="flex items-center space-x-4">
          <img src="/brands/phone.svg" alt="Phone" className="w-8 h-8 invert" />
          <p className="text-white-300  hover:text-green-400 transition">+1 (709) 740-3835</p> 
        </div>

        {/* GitHub */}
        <div className="flex items-center space-x-4">
          <img src="/brands/github.svg" alt="GitHub" className="w-8 h-8 invert" />
          <a href="https://github.com/theworldofraheem" target="_blank" rel="noopener noreferrer" className="text-white-300 hover:text-green-400 transition">
            github
          </a>
        </div>

      </div>
    </section>
  );
}
