// Experience.tsx

import ExperienceCard from "./ExperienceCard";

const experienceData = [
  {
    organization: "Code the Change YYC",
    role: "Student Developer",
    date: "Oct 2025 - Current",
    description: "salvation army internal tool 🛠️",
    skills: ["T3 Stack", "SASS", "BetterAuth", "Drizzle", "tRPC"],
    image: "/ctc_logo3.png",
  },
  {
    organization: "BMERIT",
    role: "Student Developer",
    date: "Oct 2025 - Current",
    description: "software & programmables team 🛠️",
    skills: ["React"],
    image: "/bmerit_logo.png",
  },
  {
    organization: "Schulich Ignite",
    role: "Student Developer, Jr. VP of Communications",
    date: "Oct 2023 - Current",
    description: "python mentor & social media manager",
    skills: ["python, marketing"],
    image: "/ignite.svg",
  },
];

const Experience = () => {
  return (
    <section className="section-container py-20 px-4" id="experience">
      <div className="max-w-6xl mx-auto">
        <h2 className="section-heading">Experience</h2>
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
