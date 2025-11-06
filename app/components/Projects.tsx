// Projects.tsx

const Projects = () => {
  return (
    <section className="bg-gray-800 py-20 px-4">
      <h2 className="text-3xl font-bold mb-8">Projects</h2>
      <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
        <div className="bg-gray-700 rounded-lg p-6 text-gray-300 shadow-lg">
          Project 1 Placeholder
        </div>
        <div className="bg-gray-700 rounded-lg p-6 text-gray-300 shadow-lg">
          Project 2 Placeholder
        </div>
        <div className="bg-gray-700 rounded-lg p-6 text-gray-300 shadow-lg">
          Project 3 Placeholder
        </div>
      </div>
    </section>
  );
};

export default Projects;
