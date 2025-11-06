// Header.tsx
// 🌐

const Header = () => {
  return (
    <header className="fixed top-0 left-0 right-0 bg-gray-900/95 backdrop-blur-sm border-b border-gray-800 z-50">
      <nav className="max-w-7xl mx-auto px-4 py-4 flex justify-between items-center">
        {/* Left - Icon */}
        <div className="text-2xl">
          🌐
        </div>

        {/* Right - Navigation */}
        <div className="flex gap-8">
          <a 
            href="#home" 
            className="text-gray-300 hover:text-white transition-colors"
          >
            Home
          </a>
          <a 
            href="#projects" 
            className="text-gray-300 hover:text-white transition-colors"
          >
            Projects
          </a>
        </div>
      </nav>
    </header>
  );
};

export default Header;