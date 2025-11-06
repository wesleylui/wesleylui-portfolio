// ExperienceCard.tsx
import Image from "next/image";

interface ExperienceCardProps {
  organization: string;
  role: string;
  date: string;
  description: string;
  skills: string[];
  image: string;
}

const ExperienceCard = ({
  organization,
  role,
  date,
  description,
  skills,
  image,
}: ExperienceCardProps) => {
  return (
    <div className="bg-gray-800 rounded-lg p-6 shadow-lg hover:shadow-xl transition-shadow border border-gray-700 relative">
      {/* Logo in top right corner */}
      <div className="absolute top-6 right-6">
        <Image
          src={image}
          alt={`${organization} logo`}
          width={60}
          height={60}
          className="rounded-lg object-contain"
        />
      </div>

      {/* Header */}
      <div className="mb-4 pr-20">
        <h3 className="text-2xl font-bold text-white mb-1">{organization}</h3>
        <p className="text-xl text-gray-300 mb-2">{role}</p>
        <p className="text-sm text-gray-500">{date}</p>
      </div>

      {/* Description */}
      <p className="text-gray-300 mb-4">{description}</p>

      {/* Skills */}
      <div className="flex flex-wrap gap-2">
        {skills.map((skill, idx) => (
          <span
            key={idx}
            className="bg-gray-700 text-gray-100 text-sm px-3 py-1 rounded-full border border-gray-600"
          >
            {skill}
          </span>
        ))}
      </div>
    </div>
  );
};

export default ExperienceCard;
