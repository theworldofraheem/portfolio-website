"use client";
import React from "react";

const societies = [
  { 
    name: "MUN Computer Science Society", 
    logo: "/brands/compscisociety.svg", 
    description: "Active member,committed to fostering a collaborative and engaging environment for students. Actively involved in organizing events, workshops, and networking opportunities to support academic growth, industry connections, and technical skill development within the CS community."
  },
  { 
    name: "MUN Lions Club Member", 
    logo: "/brands/lionsclub.svg", 
    description: "Active member of the Lions Club, dedicated to community service, leadership, and humanitarian initiatives. Passionate about making a positive impact through volunteer work, fundraising, and outreach programs. Committed to the club's mission of serving those in need and fostering meaningful change in the community."
  },
  { 
    name: "HackFrost Society Executive", 
    logo: "/brands/hackfrost.svg", 
    description: "Assisting in the coordination of the 4th Annual Hackathon, facilitating event logistics, participant engagement, and technology setup to ensure a seamless and innovative experience for all attendees. Designed comprehensive plans for annual hackathons and educational workshops as conceptualized by the Logistics Lead, focusing on venue setup and food services management."
  },
  { 
    name: "MUN Quant Society Club", 
    logo: "/brands/quant.svg", 
    description: "Active member of the MUN Quant Society, exploring quantitative finance, algorithmic trading, and data-driven financial modeling. Engaging in workshops, competitions, and discussions to develop a deeper understanding of financial markets, risk analysis, and quantitative strategies."
  }
];

export default function SocietiesSection() {
  return (
    <section id="societies" className="relative h-screen flex flex-col justify-center items-center text-white px-6 md:px-12 z-10">
      <h2 className="text-4xl font-bold">Societies & Clubs</h2>
      <hr className="border-t border-gray-600 my-4 w-full max-w-4xl" />

      <div className="flex flex-col space-y-8 max-w-5xl w-full">
        {societies.map((society, index) => (
          <div key={index} className="flex justify-between items-center">
            {/* Left Side: Society Name & Description */}
            <div className="w-2/3">
              <h3 className="text-2xl font-semibold">{society.name}</h3>
              <p className="text-gray-400">{society.description}</p>
            </div>

            {/* Right Side: Hoverable SVG Logo */}
            <div className="w-1/3 flex justify-end">
              <img 
                src={society.logo} 
                alt={society.name} 
                className="w-20 h-20 md:w-24 md:h-24 invert transition-transform duration-300 transform hover:scale-110 hover:opacity-80"
              />
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
