// Hero.tsx
import Image from "next/image";
import { FaLinkedin, FaGithub } from "react-icons/fa";

const Hero = () => {
  return (
    <section className="flex justify-center items-center h-screen px-4">
      <div className="flex items-center gap-12 max-w-6xl">
        {/* Left side - Text content */}
        <div className="flex flex-col">
          <h1 className="text-5xl font-bold mb-4">I&apos;m Wesley Lui! 👋</h1>
          <p className="text-gray-300 text-xl">
            4th year Software Engineering Student @ the University of Calgary
          </p>
          <div className="mt-8 text-gray-500">
            I&apos;m passionate about full-stack.
          </div>

          {/* Social Icons */}
          <div className="flex gap-4 mt-6">
            <a
              href="https://www.linkedin.com/in/wesleylui/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-blue-500 transition-colors"
            >
              <FaLinkedin size={32} />
            </a>
            <a
              href="https://github.com/wesleylui"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-white transition-colors"
            >
              <FaGithub size={32} />
            </a>
          </div>
        </div>

        {/* Right side - Profile Picture */}
        <div className="flex-shrink-0">
          <Image
            src="/wesley_headshot.png"
            alt="Wesley Lui"
            width={200}
            height={200}
            className="rounded-full object-cover border-4 border-gray-700"
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
