import React from "react";
import InstagramLogo from "./images/insta.png";
import TwitterLogo from "./images/x.png";
import LinkedInLogo from "./images/linkedin.png";
import GithubLogo from "./images/github.png";

const socialLinks = [
  { id: 1, name: "Instagram", url: "https://instagram.com/night_bred/", logo: InstagramLogo },
  { id: 2, name: "Twitter", url: "https://x.com/Habiswashi_Deep", logo: TwitterLogo },
  { id: 3, name: "LinkedIn", url: "https://www.linkedin.com/in/deep-habiswashi-54492b295/", logo: LinkedInLogo },
  { id: 4, name: "GitHub", url: "https://github.com/deephabiswashi", logo: GithubLogo },
];

const SocialMedia = () => {
  return (
    <div className="flex justify-center mb-10 mt-10">
      <div className="flex gap-4 sm:gap-6 md:gap-8 lg:gap-10">
        {socialLinks.map(({ id, name, url, logo }) => (
          <button
            key={id}
            className="p-2 rounded-full transition-all duration-300 hover:scale-125 hover:bg-gray-300 dark:hover:bg-gray-700"
            onClick={() => window.open(url, "_blank")}
            aria-label={name}
          >
            <img
              src={logo}
              alt={`${name} Logo`}
              className="w-6 h-6 sm:w-8 sm:h-8 md:w-10 md:h-10 lg:w-9 lg:h-9 xl:w-10 xl:h-10 invert dark:invert-0"
            />
          </button>
        ))}
      </div>
    </div>
  );
};

export default SocialMedia;
