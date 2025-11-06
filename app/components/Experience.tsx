// Experience.tsx

import ExperienceCard from "./ExperienceCard";

const experienceData = [
  {
    organization: "Code the Change YYC",
    role: "Student Developer",
    date: "Oct 2025 - Current",
    description: "salvation army internal tool 🛠️",
    skills: ["T3 Stack", "Drizzle", "tRPC"],
    image: "/ctc_logo3.png",
  },
  {
    organization: "Biomedical Research and Engineering Team (BMERIT)",
    role: "Student Developer",
    date: "Oct 2025 - Current",
    description: "software & programmables team 🛠️",
    skills: ["full-stack"],
    image: "/bmerit_logo.png",
  },
];

const Experience = () => {
  return (
    <section className="bg-gray-800 py-20 px-4" id="experience">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold mb-12 text-center">Experience</h2>
        <div className="grid gap-8 grid-cols-1 lg:grid-cols-2">
          {experienceData.map((experience, idx) => (
            <ExperienceCard key={idx} {...experience} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
