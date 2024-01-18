import React from "react";
import { SocialIcon } from "react-social-icons";
import "react-social-icons/vimeo";
import "react-social-icons/meetup";

interface props {
  iconName: string;
  url: string;
}

function SocialIcons({ iconName, url }: props) {
  return (
    <div className="fixed top-1/2 right-0 flex flex-col items-end pr-1">
      {/* // renders: vimeo icon */}
      <span className="bg-blue-500 w-12 h-11 hover:w-28 transition-all duration-700 flex justify-between group relative items-center">
        <p className="text-white hidden group-hover:block absolute left-1 justify-self-start font-bold text-[14px]">
          Facebook
        </p>
        <SocialIcon
          url="www.facebook.com"
          className="!h-10 !w-10 !absolute right-0"
          bgColor="#3b82f6"
        />
      </span>
      <span className="bg-blue-400 w-12 h-12 hover:w-28 transition-all duration-700 flex justify-between group relative items-center">
        <p className="text-white hidden group-hover:block absolute left-1 justify-self-start font-bold text-[14px]">
          Linkedin
        </p>
        <SocialIcon
          url="https://www.linkedin.com/in/muhammadabubakar09"
          target="_blank"
          className="!h-10 !w-10 !absolute right-0"
          bgColor="#60a5fa"
          //   fgColor="blue"
        />
      </span>
    </div>
  );
}

export default SocialIcons;
