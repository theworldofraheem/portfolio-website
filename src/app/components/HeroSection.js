"use client";
import { useState, useEffect } from "react";
import { motion } from "framer-motion";

export default function HeroSection() {
  const firstLine = "Hi, my name is Raheem."; 
  const secondLine = "Your Friendly Neighborhood Developer & Data Scientist."; 
  const typingSpeed = 100; // Speed per letter
  const delayBetweenLines = 750; // Delay before second line starts

  const [firstText, setFirstText] = useState("");
  const [secondText, setSecondText] = useState("");
  const [showScrollText, setShowScrollText] = useState(false);
  const [showFirstCursor, setShowFirstCursor] = useState(true);
  const [showSecondCursor, setShowSecondCursor] = useState(false);

  useEffect(() => {
    let index = 0;

    const typeFirstLine = () => {
      if (index < firstLine.length) {
        setFirstText(firstLine.slice(0, index + 1));
        index++;
        setTimeout(typeFirstLine, typingSpeed);
      } else {
        setShowFirstCursor(false); // Hide cursor after first line finishes
        setTimeout(() => {
          setShowSecondCursor(true); // Show cursor for second line
          typeSecondLine();
        }, delayBetweenLines);
      }
    };

    const typeSecondLine = () => {
      let index2 = 0;
      const interval2 = setInterval(() => {
        if (index2 < secondLine.length) {
          setSecondText(secondLine.slice(0, index2 + 1));
          index2++;
        } else {
          clearInterval(interval2);
          setShowSecondCursor(false); // Hide cursor after second line finishes
          setTimeout(() => setShowScrollText(true), 500); // Show "Scroll to view more!"
        }
      }, typingSpeed);
    };

    typeFirstLine();
    return () => {
      setFirstText("");
      setSecondText("");
      setShowScrollText(false);
      setShowFirstCursor(true);
      setShowSecondCursor(false);
    }; // Cleanup when unmounting
  }, []);

  return (
    <section className="relative h-screen flex flex-col justify-center items-center text-white snap-start z-10">
      
      {/* First Typing Effect */}
      <motion.h1 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
        className="text-5xl md:text-6xl font-bold"
      >
        {firstText}
        {showFirstCursor && <span className="inline-block w-2 animate-blink">|</span>}
      </motion.h1>

      {/* Second Typing Effect */}
      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2, duration: 1 }} 
        className="text-xl text-white-300 mt-2"
      >
        {secondText}
        {showSecondCursor && <span className="inline-block w-2 animate-blink">|</span>}
      </motion.p>

      {/* Scroll Text (Appears after second line finishes) */}
      {showScrollText && (
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
          className="mt-4 text-white-500 text-sm"
        >
          Scroll to view more!
        </motion.p>
      )}

    </section>
  );
}
