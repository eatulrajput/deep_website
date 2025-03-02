import React, { useState, useEffect } from "react";
import Navbar from "./components/Navbar";
import Name from "./components/name";
import Resume from "./components/resume";
import SocialMedia from "./components/socials";
import About from "./components/about";
import Skills from "./components/skills";
import Projects from "./components/projects";
import ContactForm from "./components/contact";

function App() {
  const [darkMode, setDarkMode] = useState(() => localStorage.getItem("theme") === "dark");
  const [activeComponent, setActiveComponent] = useState("home");
  const [menuOpen, setMenuOpen] = useState(false); // 🔥 Lifted menu state

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  }, [darkMode]);

  const toggleDarkMode = () => setDarkMode((prevMode) => !prevMode);
  
  const handleButtonClick = (buttonName) => {
    setActiveComponent(buttonName.toLowerCase());
    setMenuOpen(false); // 🔥 Close menu when switching components
  };

  return (
    <div className={`min-h-screen transition-all duration-300 ${darkMode ? "bg-gray-900 text-white" : "bg-white text-black"}`}>
      <Navbar 
        onButtonClick={handleButtonClick} 
        toggleDarkMode={toggleDarkMode} 
        darkMode={darkMode}
        menuOpen={menuOpen} 
        setMenuOpen={setMenuOpen} // 🔥 Pass menu state to Navbar
      />

      {activeComponent === "home" && (
        <div className="flex flex-col items-center justify-center sm:mt-12 md:mt-0 px-4 sm:px-6">
          <div className="flex flex-col-reverse lg:flex-row items-center justify-center gap-8 lg:gap-12 w-full max-w-6xl">
            <div className="flex flex-col items-center lg:items-start text-center lg:text-left lg:w-1/2">
              <Name className="mt-4 sm:mt-8 md:mt-12" />
              <Resume className="mt-6" />
            </div>
            <div className="lg:w-1/2 flex justify-center">
              <img 
                src="./profile-picture.png" 
                alt="Profile" 
                className="w-40 h-40 sm:w-56 sm:h-56 md:w-64 md:h-64 lg:w-80 lg:h-80 rounded-full shadow-lg border-4 border-gray-700 hover:border-orange-500 transition duration-300" 
              />
            </div>
          </div>
          <div className="mt-6 sm:mt-8">
            <SocialMedia />
          </div>
        </div>
      )}

      {activeComponent === "about" && <About />}
      {activeComponent === "skills" && <Skills />}
      {activeComponent === "projects" && <Projects />}
      {activeComponent === "contact" && <ContactForm />}
    </div>
  );
}

export default App;
