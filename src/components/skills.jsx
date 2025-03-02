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
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-50 dark:bg-gray-800 py-10 px-6">

      {/* 📚 Education Section */}
      <div className="w-full max-w-4xl bg-white dark:bg-gray-900 shadow-lg rounded-xl p-8 border border-gray-200 dark:border-gray-700 mb-10">
        <h1 className="text-3xl font-bold text-gray-800 dark:text-white uppercase text-center mb-4">
          Education
        </h1>
        <div className="text-center text-gray-700 dark:text-gray-300">
          <p className="text-xl font-medium">🎓 Bachelor of Technology in Electronics & Computer Science</p>
          <p className="text-lg">KIIT University, 2022 - 2026</p>
        </div>
      </div>

      {/* 💻 Skills Section */}
      <div className="w-full max-w-4xl bg-white dark:bg-gray-900 shadow-lg rounded-xl p-8 border border-gray-200 dark:border-gray-700 mb-10">
        <h1 className="text-3xl font-bold text-gray-800 dark:text-white uppercase text-center mb-6">
          My Tech Stack
        </h1>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 gap-8">
          
          {/* Machine Learning & Data Science */}
          <SkillSection title="Machine Learning & Data Science">
            <SkillIcon src="https://www.gstatic.com/devrel-devsite/prod/vdbb152dfd6ef5e309aa1d261d45f3fd443aed2691cbfba3f9f80f8a4012a0a8f/tensorflow/images/lockup.svg" alt="TensorFlow" />
            <SkillIcon src="https://pytorch.org/assets/images/logo-icon.svg" alt="PyTorch" />
          </SkillSection>

          {/* Web Development */}
          <SkillSection title="Web Development">
            <SkillIcon src={SQLLogo} alt="MySQL" />
            <SkillIcon src={FlaskLogo} alt="Flask" />
          </SkillSection>

          {/* Programming Languages */}
          <SkillSection title="Programming Languages">
            <SkillIcon src={CLogo} alt="C" />
            <SkillIcon src={CPPLogo} alt="C++" />
            <SkillIcon src={PythonLogo} alt="Python" />
          </SkillSection>

          {/* Other Skills */}
          <SkillSection title="Other Skills">
            <SkillIcon src={GitLogo} alt="Git" />
            <SkillIcon src={GitLabLogo} alt="GitLab" />
            <SkillIcon src={LinuxLogo} alt="Linux" />
            <SkillIcon src={BashLogo} alt="Bash" />
          </SkillSection>
        </div>
      </div>

      {/* 🏆 Certifications Section */}
      <div className="w-full max-w-4xl bg-white dark:bg-gray-900 shadow-lg rounded-xl p-8 border border-gray-200 dark:border-gray-700">
        <h1 className="text-3xl font-bold text-gray-800 dark:text-white uppercase text-center mb-4">
          Certifications
        </h1>
        <div className="flex flex-col space-y-3 text-center">
          <CertificationLink url="https://coursera.org/certificate/example" title="📜 Machine Learning - Coursera" />
          <CertificationLink url="https://udemy.com/certificate/example" title="📜 Python for Data Science - Udemy" />
          <CertificationLink url="https://linkedin.com/certificate/example" title="📜 Deep Learning Specialization - LinkedIn" />
        </div>
      </div>

    </div>
  );
};

// 🛠 Reusable Skill Section
const SkillSection = ({ title, children }) => (
  <div className="flex flex-col items-center">
    <h2 className="text-lg font-semibold text-gray-700 dark:text-gray-300 mb-3 tracking-wide">
      {title}
    </h2>
    <div className="flex flex-row space-x-4">{children}</div>
  </div>
);

// 🔧 Reusable Skill Icon Component (Removed Invert)
const SkillIcon = ({ src, alt }) => (
  <img 
    src={src} 
    alt={alt} 
    className="w-14 h-14 hover:scale-110 transition-transform duration-300"
  />
);

// 🎓 Reusable Certification Link
const CertificationLink = ({ url, title }) => (
  <a 
    href={url} 
    target="_blank" 
    rel="noopener noreferrer"
    className="text-lg font-medium text-blue-600 dark:text-blue-400 hover:underline transition duration-300"
  >
    {title}
  </a>
);

export default Skills;
