// Hero.tsx
import Image from "next/image";

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
