import React from "react";


const Navbar = ({ onButtonClick, toggleDarkMode, darkMode, menuOpen, setMenuOpen }) => {
  return (
    <nav className="p-4 bg-gray-800 dark:bg-gray-900 text-white flex justify-between items-center">
      {/* Logo / Title */}
      <h1 className="text-xl font-bold">
        Deep</h1>

      {/* Mobile Menu Button (Hamburger) */}
      <button 
        className="sm:hidden p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-gray-400"
        onClick={() => setMenuOpen(!menuOpen)}
      >
        {menuOpen ? "✖" : "☰"} {/* Close icon when open */}
      </button>

      {/* Desktop Menu */}
      <div className="hidden sm:flex items-center gap-6">
        <button onClick={() => onButtonClick("home")} className="hover:text-orange-400">Home</button>
        <button onClick={() => onButtonClick("about")} className="hover:text-orange-400">About</button>
        <button onClick={() => onButtonClick("skills")} className="hover:text-orange-400">Skills</button>
        <button onClick={() => onButtonClick("projects")} className="hover:text-orange-400">Projects</button>
        <button onClick={() => onButtonClick("contact")} className="hover:text-orange-400">Contact</button>

        {/* Dark Mode Toggle */}
        <button 
          onClick={toggleDarkMode} 
          className="p-2 rounded-full bg-gray-700 hover:bg-gray-600 transition duration-300"
        >
          {darkMode ? "☀️" : "🌙"}
        </button>
      </div>

      {/* Full-Screen Mobile Menu */}
      {menuOpen && (
        <div className="fixed inset-0 bg-gray-900 dark:bg-gray-950 flex flex-col items-center justify-center gap-8 text-2xl font-semibold text-white transition-opacity duration-300 sm:hidden z-50">
          <button onClick={() => { onButtonClick("home"); setMenuOpen(false); }} className="hover:text-orange-400">Home</button>
          <button onClick={() => { onButtonClick("about"); setMenuOpen(false); }} className="hover:text-orange-400">About</button>
          <button onClick={() => { onButtonClick("skills"); setMenuOpen(false); }} className="hover:text-orange-400">Skills</button>
          <button onClick={() => { onButtonClick("projects"); setMenuOpen(false); }} className="hover:text-orange-400">Projects</button>
          <button onClick={() => { onButtonClick("contact"); setMenuOpen(false); }} className="hover:text-orange-400">Contact</button>

          {/* Dark Mode Toggle */}
          <button 
            onClick={() => { toggleDarkMode(); setMenuOpen(false); }} 
            className="p-3 rounded-full bg-gray-700 hover:bg-gray-600 transition duration-300 text-lg"
          >
            {darkMode ? "☀️ Light Mode" : "🌙 Dark Mode"}
          </button>

          {/* Close Button */}
          <button 
            onClick={() => setMenuOpen(false)} 
            className="absolute top-6 right-6 text-2xl text-blue-400 hover:text-orange-400"
          >
            Close Me
          </button>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
