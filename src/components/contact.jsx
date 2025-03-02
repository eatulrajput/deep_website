import React from "react";

const Contact = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 dark:bg-gray-900 p-6 transition-all duration-300">
      <div className="w-full max-w-md bg-white dark:bg-gray-800 bg-opacity-50 dark:bg-opacity-50 backdrop-blur-lg rounded-2xl shadow-lg p-10 border border-gray-300 dark:border-gray-700 text-center">
        <h1 className="text-3xl font-semibold text-gray-900 dark:text-white tracking-wide">
          Let's Connect! 📩
        </h1>
        <p className="text-lg text-gray-700 dark:text-gray-300 mt-3">
          You can reach me at:
        </p>
        <a
          href="mailto:deephabiswashi@gmail.com"
          className="text-lg font-medium text-blue-600 dark:text-blue-400 mt-4 underline hover:text-blue-700 dark:hover:text-blue-300 transition-colors duration-300"
        >
          deephabiswashi@gmail.com
        </a>
      </div>
    </div>
  );
};

export default Contact;
