import React, { useState } from "react";

const projects = [
  {
    id: 1,
    title: "Book Scraper",
    image: "https://images.pexels.com/photos/2099691/pexels-photo-2099691.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    description:
      "A Python-based web scraping project that extracts book data from “Books to Scrape,” stores it in a database, and uses pretrained NLP models for summarization, classification, and sentiment analysis.",
    codeLink: "https://github.com/deephabiswashi/bookscraper-ml",
    skills: ["Python", "BeautifulSoup", "Scrapy", "SQLAlchemy", "NLP", "Machine Learning"],
  },
  {
    id: 2,
    title: "Covid-19 Forecasting and Prediction Project",
    image: "https://images.pexels.com/photos/3902732/pexels-photo-3902732.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    description:
      "A machine learning project for predicting COVID-19 trends. It merges multiple datasets (epidemiology, geography, hospitalizations, government response, and vaccinations) to provide a comprehensive view of the pandemic.",
    codeLink: "https://github.com/deephabiswashi/covid19-forecast",
    skills: ["Python", "Pandas", "Scikit-Learn", "Matplotlib", "Data Visualization", "Deep Learning"],
  },
  {
    id: 3,
    title: "DeepDream Vision",
    image: "https://images.pexels.com/photos/18069370/pexels-photo-18069370/free-photo-of-an-artist-s-illustration-of-artificial-intelligence-ai.png?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    description:
      "DeepDream Vision transforms images using DeepDream with a pre-trained InceptionV3. Upload an image, choose a dream layer, and get artistic outputs. Its interactive UI features upload/results pages with interactive charts, powered by Flask/SQLAlchemy.",
    codeLink: "https://github.com/deephabiswashi/DeepDream-Vision",
    skills: ["Python", "TensorFlow", "Flask", "Deep Learning", "Computer Vision", "InceptionV3"],
  },
];

const Projects = () => {
  const [expandedProject, setExpandedProject] = useState(null);

  const toggleProject = (id) => {
    setExpandedProject(expandedProject === id ? null : id);
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 dark:bg-gray-900 py-10 px-4">
      <div className="w-full max-w-6xl bg-white/30 dark:bg-gray-800/30 backdrop-blur-lg rounded-xl shadow-lg p-10 border border-gray-200 dark:border-gray-700">
        <h1 className="text-3xl font-semibold font-serif text-gray-800 dark:text-gray-200 uppercase text-center mb-8 tracking-wide">
          My Projects
        </h1>

        {/* Responsive Projects Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project) => (
            <div
              key={project.id}
              className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-5 transition-all duration-300 hover:shadow-xl dark:hover:shadow-gray-700"
            >
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-40 object-cover rounded-lg mb-4"
              />
              <h2 className="text-xl font-bold text-gray-800 dark:text-gray-200">{project.title}</h2>

              {/* Skills Tags */}
              <div className="flex flex-wrap gap-2 mt-2">
                {project.skills.map((skill, index) => (
                  <span key={index} className="bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 text-xs font-semibold px-3 py-1 rounded-full">
                    {skill}
                  </span>
                ))}
              </div>

              {/* View Project Button */}
              <button
                onClick={() => toggleProject(project.id)}
                className="mt-3 w-full bg-gradient-to-r from-blue-700 to-blue-400 dark:from-blue-500 dark:to-blue-300 text-white py-2 rounded-full font-semibold hover:from-blue-400 hover:to-blue-700 dark:hover:from-blue-400 dark:hover:to-blue-600 transition-all duration-300 shadow-md transform hover:scale-105"
              >
                {expandedProject === project.id ? "Close Project" : "View Project"}
              </button>

              {/* Code Button */}
              <a
                href={project.codeLink}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-3 block text-center w-full bg-gradient-to-r from-gray-800 to-gray-900 dark:from-gray-600 dark:to-gray-700 text-white py-2 rounded-full font-semibold hover:from-gray-900 hover:to-gray-700 dark:hover:from-gray-700 dark:hover:to-gray-500 transition-all duration-300 shadow-md transform hover:scale-105"
              >
                View Code
              </a>
            </div>
          ))}
        </div>

        {/* Expanded Project View (Modal) */}
        {expandedProject && (
          <div className="fixed inset-0 flex items-center justify-center bg-white/75 dark:bg-gray-900/75 backdrop-blur-md p-4 sm:p-6 z-50">
            <div className="bg-white dark:bg-gray-800 max-w-3xl w-full rounded-lg shadow-lg overflow-hidden relative">
              
              {/* Close Button*/}
              <button
                onClick={() => setExpandedProject(null)}
                className="absolute top-3 right-3 bg-orange-300 dark:bg-orange-500 text-white w-10 h-10 flex items-center justify-center rounded-full hover:bg-orange-400 dark:hover:bg-orange-600 transition-all duration-300 shadow-md transform hover:scale-110"
              >
                ✖
              </button>

              {/* Expanded Project Content */}
              {projects.map(
                (project) =>
                  project.id === expandedProject && (
                    <div key={project.id} className="p-6">
                      <img
                        src={project.image}
                        alt={project.title}
                        className="w-full h-64 sm:h-80 object-cover rounded-md mb-4"
                      />
                      <h2 className="text-2xl font-bold text-gray-800 dark:text-gray-200 mb-3">{project.title}</h2>
                      <p className="text-gray-700 dark:text-gray-300">{project.description}</p>

                      {/* Skills List in Modal */}
                      <div className="mt-4">
                        <h3 className="text-lg font-semibold text-gray-800 dark:text-gray-300">Skills Used:</h3>
                        <div className="flex flex-wrap gap-2 mt-2">
                          {project.skills.map((skill, index) => (
                            <span key={index} className="bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 text-xs font-semibold px-3 py-1 rounded-full">
                              {skill}
                            </span>
                          ))}
                        </div>
                      </div>

                      <div className="mt-4 flex justify-end">
                        <a
                          href={project.codeLink}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="bg-gradient-to-r from-orange-500 to-orange-300 dark:from-orange-400 dark:to-orange-500 text-white px-6 py-2 rounded-full font-semibold hover:from-orange-300 hover:to-orange-500 dark:hover:from-orange-500 dark:hover:to-orange-400 transition-all duration-300 shadow-md transform hover:scale-105"
                        >
                          View Code
                        </a>
                      </div>
                    </div>
                  )
              )}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Projects;
