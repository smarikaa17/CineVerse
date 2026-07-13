import { faPlay } from "@fortawesome/free-solid-svg-icons";
import { faCircleInfo } from "@fortawesome/free-solid-svg-icons/faCircleInfo";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

const VideoTitle = ({ Title, Overview }) => {
  return (
    <div className="w-screen top-[7rem]  md:top-[9rem]  z-10 aspect-video pt-[16%] px-16 absolute bg-gradient-to-t from-black ">
      <div className=" absolute top-24 h-36 md:-mx-0 -mx-10">
        <h1 className="md:text-2xl text-xl font-bold tracking-wider text-white ">
          {Title}
        </h1>
        <div className="w-56 md:w-1/4 pb-4 my-1">
          <p className="py-2 hidden md:inline-block sm:inline-block text-base md:text-lg md:h-32 h-20 hide-scrollbar line-clamp-3 md:line-clamp-4 text-white">
            {Overview}
          </p>
        </div>
        <div className="md:text-lg text-sm">
          <button className=" bg-white text-black md:p-3 px-3 py-1 md:w-[10rem] hover:opacity-80 rounded-md">
            <FontAwesomeIcon icon={faPlay} />
            Play
          </button>
          <button className="mx-3 bg-gray-500 text-white md:p-3 px-3 py-1 md:px-8 bg-opacity-70 rounded-md">
            <FontAwesomeIcon icon={faCircleInfo} /> More Info
          </button>
        </div>
      </div>
    </div>
  );
};

export default VideoTitle;
