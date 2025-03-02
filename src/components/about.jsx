import React from "react";

const About = () => {
  return (
    <div className="grid lg:grid-cols-2 gap-8 p-8 bg-white dark:bg-gray-900 bg-opacity-80 dark:bg-opacity-80 backdrop-blur-2xl rounded-2xl mx-7 shadow-lg transition-all duration-300">
      {/* Left Section */}
      <div className="pl-6 sm:pl-10">
        <h1 className="text-left font-bold text-2xl md:text-3xl lg:text-4xl font-serif text-gray-900 dark:text-white">
          Deep
        </h1>
        <h1 className="text-left font-bold text-2xl md:text-3xl lg:text-4xl font-serif text-gray-900 dark:text-white">
          Habishwashi
        </h1>
        <div className="h-0.5 w-40 md:w-3/4 lg:w-1/2 bg-gray-300 dark:bg-gray-600 my-4"></div>

        <p className="text-left text-lg font-serif text-gray-800 dark:text-gray-300 leading-relaxed">
          I'm a Data Scientist based in Kolkata, India. As a highly motivated and dedicated individual with a strong work ethic, I'm always looking to learn and grow, and I'm excited to see where my journey takes me.
        </p>
        <p className="mt-4 text-left text-lg font-serif text-gray-800 dark:text-gray-300 leading-relaxed">
          With a year of experience, I continuously explore essential technologies. I adapt quickly to new tools, collaborate effectively with cross-functional teams, and drive projects forward. I always seek new challenges to push my limits.
        </p>
      </div>

      {/* Right Section */}
      <div className="flex flex-col gap-6">
        <InfoBlock title="Nationality" items={["Indian"]} />
        <InfoBlock title="Hobbies" items={["Coding", "Reading", "Blogging"]} />
        <InfoBlock title="Language Proficiencies" items={["English", "Bengali", "Hindi"]} />
      </div>
    </div>
  );
};

// Reusable Component for Info Sections
const InfoBlock = ({ title, items }) => (
  <div className="p-4">
    <h2 className="text-left font-bold text-xl md:text-2xl font-serif text-gray-900 dark:text-white">
      {title}
    </h2>
    <ul className="mt-2 list-none space-y-1">
      {items.map((item, index) => (
        <li key={index} className="text-left font-light text-lg font-serif text-gray-700 dark:text-gray-400">
          &bull; {item}
        </li>
      ))}
    </ul>
  </div>
);

export default About;
