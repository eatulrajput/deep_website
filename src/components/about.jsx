import React from "react";

const About = () => {
  return (
    <div className="grid lg:grid-cols-2 gap-8 p-8 bg-opacity-80 backdrop-blur-2xl rounded-2xl mx-7">
      {/* Left Section */}
      <div className="pl-10">
        <h1 className="text-left font-bold text-2xl md:text-3xl lg:text-4xl font-serif text-white">
          Deep
        </h1>
        <h1 className="text-left font-bold text-2xl md:text-3xl lg:text-4xl font-serif text-white">
          Habishwashi
        </h1>
        <div className="h-0.5 w-40 md:w-3/4 lg:w-1/2 bg-gray-200 my-4"></div>

        <p className="text-left text-lg font-serif text-white leading-relaxed">
          I'm a Data Scientist based in Kolkata, India. As a highly motivated and dedicated individual with a strong work ethic, I'm always looking to learn and grow, and I'm excited to see where my journey takes me.
        </p>
        <p className="mt-4 text-left text-lg font-serif text-white leading-relaxed">
          With a year of experience, I continuously explore essential technologies. I adapt quickly to new tools, collaborate effectively with cross-functional teams, and drive projects forward. I always seek new challenges to push my limits.
        </p>
      </div>

      {/* Right Section */}
      <div className="flex flex-col gap-6">
        <InfoBlock title="Nationality" items={["Indian"]} />
        <InfoBlock title="Hobbies" items={["Coding", "Reading", "Blogging"]} />
        <InfoBlock
          title="Language Proficiencies"
          items={["English", "Bengali", "Hindi"]}
        />
      </div>
    </div>
  );
};

// Reusable Component for Info Sections
const InfoBlock = ({ title, items }) => (
  <div className="p-4">
    <h2 className="text-left font-bold text-xl md:text-2xl font-serif text-white">
      {title}
    </h2>
    <ul className="mt-2 list-none space-y-1">
      {items.map((item, index) => (
        <li key={index} className="text-left font-light text-lg font-serif text-white">
          &bull; {item}
        </li>
      ))}
    </ul>
  </div>
);

export default About;
