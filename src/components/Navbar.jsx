import React from "react";

const Navbar = ({ onButtonClick, toggleDarkMode, darkMode }) => {
  return (
    <nav className="flex justify-between items-center p-4 bg-gray-800 dark:bg-gray-900 text-white">
      <h1 className="text-xl font-bold">My Portfolio</h1>
      <div className="flex items-center gap-4">
        <button onClick={() => onButtonClick("home")} className="hover:text-orange-400">Home</button>
        <button onClick={() => onButtonClick("about")} className="hover:text-orange-400">About</button>
        <button onClick={() => onButtonClick("skills")} className="hover:text-orange-400">Skills</button>
        <button onClick={() => onButtonClick("projects")} className="hover:text-orange-400">Projects</button>
        <button onClick={() => onButtonClick("contact")} className="hover:text-orange-400">Contact</button>

        {/* Dark Mode Toggle Button */}
        <button 
          onClick={toggleDarkMode} 
          className="p-2 rounded-full bg-gray-700 hover:bg-gray-600 transition duration-300"
        >
          {darkMode ? "☀️" : "🌙"}
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
