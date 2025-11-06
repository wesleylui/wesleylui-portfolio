// ProjectCard.tsx

interface ProjectCardProps {
  image: string;
  title: string;
  description: string;
  skills: string[];
  codeLink?: string;
  demoLink?: string;
}

const ProjectCard = ({
  image,
  title,
  description,
  skills,
  codeLink,
  demoLink,
}: ProjectCardProps) => {
  return (
    <div className="bg-gray-700 rounded-lg overflow-hidden shadow-lg hover:scale-105 transition-transform">
      {/* Image */}
      <img src={image} alt={title} className="w-full h-48 object-cover" />

      {/* Content */}
      <div className="p-6">
        <h3 className="text-xl font-semibold mb-2">{title}</h3>
        <p className="text-gray-300 mb-4">{description}</p>

        {/* Skills */}
        <div className="flex flex-wrap gap-2 mb-4">
          {skills.map((skill, idx) => (
            <span
              key={idx}
              className="bg-gray-600 text-gray-100 text-sm px-2 py-1 rounded"
            >
              {skill}
            </span>
          ))}
        </div>

        {/* Links */}
        <div className="flex gap-4">
          {codeLink && (
            <a
              href={codeLink}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-gray-600 text-gray-100 px-3 py-1 rounded hover:bg-gray-500 transition-colors"
            >
              Code
            </a>
          )}
          {demoLink && (
            <a
              href={demoLink}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-gray-600 text-gray-100 px-3 py-1 rounded hover:bg-gray-500 transition-colors"
            >
              Demo
            </a>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
