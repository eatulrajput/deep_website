import React from "react";

const Contact = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-6">
      <div className="w-full max-w-md bg-white/20 backdrop-blur-lg rounded-2xl shadow-lg p-10 border border-gray-300 text-center">
        <h1 className="text-3xl font-semibold text-gray-900 tracking-wide">
          Let's Connect! 📩
        </h1>
        <p className="text-lg text-gray-700 mt-3">
          You can reach me at:
        </p>
        <a
          href="mailto:deephabiswashi@gmail.com"
          className="text-lg font-medium text-blue-500 mt-4 underline hover:text-blue-600 transition-colors duration-300"
        >
          deephabiswashi@gmail.com
        </a>
      </div>
    </div>
  );
};

export default Contact;
