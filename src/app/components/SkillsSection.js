"use client";
import { motion } from "framer-motion";

const skills = [
    { name: "Java", icon: "/brands/java.svg" },
    { name: "Python", icon: "/brands/python.svg" },
    { name: "C/C++", icon: "/brands/cpp.svg" },
    { name: "JavaScript", icon: "/brands/javascript.svg" },
    { name: "TypeScript", icon: "/brands/typescript.svg" },
    { name: "HTML/CSS/XML", icon: "/brands/html5.svg" },
    { name: "React", icon: "/brands/react.svg" },
    { name: "Vue", icon: "/brands/vue.svg" },
    { name: "Node.js", icon: "/brands/nodejs.svg" },
    { name: "Express", icon: "/brands/express.svg" },
    { name: ".NET", icon: "/brands/dotnet.svg" },
    { name: "Flask", icon: "/brands/flask.svg" },
    { name: "Django", icon: "/brands/django.svg" },
    { name: "FastAPI", icon: "/brands/fastapi.svg" },
    { name: "PostgreSQL", icon: "/brands/postgresql.svg" },
    { name: "SQLite", icon: "/brands/sqlite.svg" },
    { name: "SQLAlchemy", icon: "/brands/sqlalchemy.svg" },
    { name: "Pandas", icon: "/brands/pandas.svg" },
    { name: "NumPy", icon: "/brands/numpy.svg" },
    { name: "Git", icon: "/brands/git.svg" },
    { name: "Grafana", icon: "/brands/grafana.svg" },
    { name: "Docker", icon: "/brands/docker.svg" },
    { name: "Qt", icon: "/brands/qt.svg" },
    { name: "Bash", icon: "/brands/bash.svg" },
    { name: "Linux", icon: "/brands/linux.svg" },
    { name: "Jira", icon: "/brands/jira.svg" },
    { name: "Firebase", icon: "/brands/firebase.svg" },
    { name: "Excel", icon: "/brands/excel.svg" },
    { name: "ROS2", icon: "/brands/ros2.svg" },
    { name: "Astro", icon: "/brands/astro.svg" },
    { name: "Tailwind.css", icon: "/brands/tailwind.svg" },
    { name: "Bootstrap", icon: "/brands/bootstrap.svg" },
    { name: "MongoDB", icon: "/brands/mongodb.svg" },
  ];
  

export default function SkillsSection() {
  return (
    <section id="skills" className="relative h-screen flex flex-col items-center justify-center text-white snap-start px-6 md:px-12 z-10">
      <h2 className="text-4xl font-bold">Technical Skills</h2>
      <hr className="border-t border-gray-600 my-4 w-full max-w-4xl" />

      {/* Skills Grid */}
      <div className="grid grid-cols-4 md:grid-cols-6 lg:grid-cols-8 gap-6 mt-6">
  {skills.map((skill, index) => (
    <motion.div
      key={index}
      className="flex flex-col items-center"
      whileHover={{ scale: 1.2 }}
      transition={{ type: "spring", stiffness: 300 }}
    >
      <img src={skill.icon} alt={skill.name} className="w-12 h-12 invert" />
      <p className="mt-2 text-sm">{skill.name}</p>
    </motion.div>
  ))}
</div>
    </section>
  );
}


