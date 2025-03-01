import React, { useState } from "react";
import Navbar from "./components/Navbar";
import Name from "./components/name";
import Resume from "./components/resume";
import SocialMedia from "./components/socials";
import About from "./components/about";
import Skills from "./components/skills";
import ContactForm from "./components/contact";



function App() {
  const [activeComponent, setActiveComponent] = useState("home");

  const handleButtonClick = (buttonName) => {
    setActiveComponent(buttonName.toLowerCase());
  };

  return (
    <div className="bg-gray-900 text-white min-h-screen">
      <Navbar onButtonClick={handleButtonClick} className="pb-6 sm:pb-12 md:pb-16" />
      {activeComponent === "home" && (
        <div className="flex flex-col items-center justify-center sm:mt-12 md:mt-0 px-6">
          <div className="flex flex-col-reverse lg:flex-row items-center justify-center gap-12 w-full max-w-6xl">
            <div className="flex flex-col items-start text-left lg:w-1/2">
              <Name className="mt-4 sm:mt-8 md:mt-12" />
              <Resume className="mt-6" />
            </div>
            <div className="lg:w-1/2 flex justify-center">
              <img 
                src="/profile-picture.png" 
                alt="Silhouette" 
                className="w-56 h-56 sm:w-72 sm:h-72 md:w-80 md:h-80 rounded-full shadow-lg border-4 border-gray-700 hover:border-orange-500 transition duration-300" 
              />
            </div>
          </div>
          <div className="mt-8">
            <SocialMedia />
          </div>
        </div>
      )}
      {activeComponent === "about" && <About />}
      {activeComponent === "skills" && <Skills />}
      {activeComponent === "contact" && <ContactForm />}
    </div>
  );
}

export default App;
