import React from 'react';
import CLogo from "./skills/c.png";
import CPPLogo from "./skills/cpp.png";
import FlaskLogo from "./skills/flask.svg";
import GitLogo from "./skills/git.png";
import GitLabLogo from "./skills/gitlab.png";
import LinuxLogo from "./skills/linux.svg";
import SQLLogo from "./skills/mysql.svg";
import PythonLogo from "./skills/python.svg";
import BashLogo from "./skills/bash.svg";

const Skills = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 py-10">
      <div className="w-11/12 max-w-4xl bg-white/30 backdrop-blur-xl rounded-xl shadow-lg p-10 border border-gray-200">
        <h1 className="text-3xl font-semibold font-serif text-gray-800 uppercase text-center mb-8 tracking-wide">
          My Tech Stack
        </h1>

        {/* Skills Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 gap-8">
          
          {/* Machine Learning & Data Science */}
          <div className="flex flex-col">
            <h2 className="text-lg font-medium text-gray-700 mb-3 tracking-wide">
              Machine Learning & Data Science
            </h2>
            <div className="flex flex-row space-x-4">
              <img 
                src="https://www.gstatic.com/devrel-devsite/prod/vdbb152dfd6ef5e309aa1d261d45f3fd443aed2691cbfba3f9f80f8a4012a0a8f/tensorflow/images/lockup.svg" 
                alt="TensorFlow" 
                className="w-14 h-14 hover:scale-110 transition-transform duration-300"
              />
              <img 
                src="https://pytorch.org/assets/images/logo-icon.svg" 
                alt="Pytorch" 
                className="w-14 h-14 hover:scale-110 transition-transform duration-300"
              />
            </div>
          </div>

          {/* Web Development */}
          <div className="flex flex-col">
            <h2 className="text-lg font-medium text-gray-700 mb-3 tracking-wide">
              Web Development
            </h2>
            <div className="flex flex-row space-x-4">
              <img src={SQLLogo} alt="MySQL" className="w-14 h-14 hover:scale-110 transition-transform duration-300" />
              <img src={FlaskLogo} alt="Flask" className="w-14 h-14 hover:scale-110 transition-transform duration-300" />
            </div>
          </div>

          {/* Programming Languages */}
          <div className="flex flex-col">
            <h2 className="text-lg font-medium text-gray-700 mb-3 tracking-wide">
              Programming Languages
            </h2>
            <div className="flex flex-row space-x-4">
              <img src={CLogo} alt="C" className="w-14 h-14 hover:scale-110 transition-transform duration-300" />
              <img src={CPPLogo} alt="C++" className="w-14 h-14 hover:scale-110 transition-transform duration-300" />
              <img src={PythonLogo} alt="Python" className="w-14 h-14 hover:scale-110 transition-transform duration-300" />
            </div>
          </div>

          {/* Other Skills */}
          <div className="flex flex-col">
            <h2 className="text-lg font-medium text-gray-700 mb-3 tracking-wide">
              Other Skills
            </h2>
            <div className="flex flex-row space-x-4">
              <img src={GitLogo} alt="Git" className="w-14 h-14 hover:scale-110 transition-transform duration-300" />
              <img src={GitLabLogo} alt="GitLab" className="w-14 h-14 hover:scale-110 transition-transform duration-300" />
              <img src={LinuxLogo} alt="Linux" className="w-14 h-14 hover:scale-110 transition-transform duration-300" />
              <img src={BashLogo} alt="Bash" className="w-14 h-14 hover:scale-110 transition-transform duration-300" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
