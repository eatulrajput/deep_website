import React from "react";
import InstagramLogo from "./images/insta.png";
import TwitterLogo from "./images/x.png";
import LinkedInLogo from "./images/linkedin.png";
import GithubLogo from "./images/github.png";

const SocialMedia = () => {
  return (
    <div className="flex justify-center mb-10 mt-10">
      <div className="lg:grid lg:grid-cols-6 lg:justify-items-end gap-0.5 md:gap-1 lg:gap-2 xl:gap-2">

        {/* Instagram */}
        <button
          className="text-white font-bold py-2 px-4 rounded hover:scale-125 transition duration-300"
          onClick={() => window.open("https://instagram.com/night_bred/", "_blank")}
        >
          <img src={InstagramLogo} alt="Instagram Logo" className="w-6 h-6 sm:w-8 sm:h-8 md:w-10 md:h-10 lg:w-8 lg:h-8 xl:w-8 xl:h-8" />
        </button>

        {/* Twitter */}
        <button
          className="text-white font-bold py-2 px-4 rounded hover:scale-125 transition duration-300"
          onClick={() => window.open("https://x.com/Habiswashi_Deep", "_blank")}
        >
          <img src={TwitterLogo} alt="Twitter Logo" className="w-6 h-6 sm:w-8 sm:h-8 md:w-10 md:h-10 lg:w-8 lg:h-8 xl:w-8 xl:h-8" />
        </button>

        {/* LinkedIn */}
        <button
          className="text-white font-bold py-2 px-4 rounded hover:scale-125 transition duration-300"
          onClick={() => window.open("https://www.linkedin.com/in/deep-habiswashi-54492b295/", "_blank")}
        >
          <img src={LinkedInLogo} alt="LinkedIn Logo" className="w-6 h-6 sm:w-8 sm:h-8 md:w-10 md:h-10 lg:w-8 lg:h-8 xl:w-8 xl:h-8" />
        </button>

        {/* GitHub */}
        <button
          className="text-white font-bold py-2 px-4 rounded hover:scale-125 transition duration-300"
          onClick={() => window.open("https://github.com/deephabiswashi", "_blank")}
        >
          <img src={GithubLogo} alt="Github Logo" className="w-6 h-6 sm:w-8 sm:h-8 md:w-10 md:h-10 lg:w-8 lg:h-8 xl:w-8 xl:h-8" />
        </button>

      </div>
    </div>
  );
};

export default SocialMedia;