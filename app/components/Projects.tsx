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
    <section className="section-container py-20 px-4" id="projects">
      <div className="max-w-6xl mx-auto">
        <h2 className="section-heading">Projects</h2>
        <div className="grid gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 justify-items-center">
          {projectData.map((project, idx) => (
            <ProjectCard key={idx} {...project} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
