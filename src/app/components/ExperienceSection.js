"use client";

export default function ExperienceSection() {
  const experiences = [
    {
      title: "Backend Developer – Quant Society (MUN)",
      period: "Sept 2024 – Present",
      description:
        "Working on the backend of an automated intelligent trading bot project. Responsible for API design, data pipelines, and optimizing performance using Python and Node.js.",
    },
    {
      title: "Data Entry Assistant – Office of Development, Memorial University",
      period: "May 2023 – Aug 2023",
      description:
        "Managed and updated alumni data across multiple systems to maintain accurate institutional records and support university fundraising campaigns.",
    },
    {
      title: "Work Control Assistant – Facilities Management, MUN",
      period: "Sept 2022 – Apr 2023",
      description:
        "Assisted with database updates, work order processing, and coordination of campus maintenance schedules to streamline departmental workflow.",
    },
  ];

  return (
    <section
      id="experience"
      className="relative h-screen flex flex-col justify-center items-center text-white px-6 md:px-12 z-10"
    >
      <h2 className="text-4xl font-bold">Experience</h2>
      <hr className="border-t border-gray-600 my-4 w-full max-w-4xl" />

      <div className="flex flex-col space-y-8 max-w-5xl w-full">
        {experiences.map((exp, index) => (
          <div key={index} className="flex flex-col">
            <h3 className="text-2xl font-semibold">{exp.title}</h3>
            <p className="text-gray-400 text-sm">{exp.period}</p>
            <p className="text-gray-400">{exp.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
