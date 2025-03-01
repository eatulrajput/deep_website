import React from "react";

const Resume = () => {
  return (
    <div className="mt-10 md:mt-30 sm:mt-30 w-full md:flex sm:flex md:text-left sm:text-left"> 
      <button
        className="mt-10 md:mt-20 sm:mt-0 lg:mt-0 xl:-mt-10 bg-[#e77700] p-3 font-semibold text-xm md:text-xs lg:text-xl border rounded shadow-md text-white hover:bg-white hover:text-black transition duration-300 ml-10 lg:ml-60 xl:ml-80 border-none"
        onClick={() => window.open("https://drive.google.com/#", "_blank")}
      >
        View Resume
      </button>
    </div>
  );
};

export default Resume;
