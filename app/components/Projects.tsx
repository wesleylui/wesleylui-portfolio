// Projects.tsx

import ProjectCard from "./ProjectCard";

const projectData = [
  {
    image: "/STORY.png",
    title: "S.T.O.R.Y",
    description:
      "AI web application that generates personalized bedtime stories based on user prompts",
    skills: ["React", "Node.js", "JavaScript", "MySQL"],
    codeLink: "https://github.com/wesleylui/Bedtime-Story-Generator",
    demoLink: "https://story-bedtime-generator.netlify.app/",
  },
];

const Projects = () => {
  return (
    <section className="bg-gray-800 py-20 px-4">
      <h2 className="text-3xl font-bold mb-12 text-center">Projects</h2>
      <div className="grid gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
        {projectData.map((project, idx) => (
          <ProjectCard key={idx} {...project} />
        ))}
      </div>
    </section>
  );
};

export default Projects;
