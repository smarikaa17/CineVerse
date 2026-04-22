import { faPlay } from "@fortawesome/free-solid-svg-icons";
import { faCircleInfo } from "@fortawesome/free-solid-svg-icons/faCircleInfo";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

const VideoTitle = ({ Title, Overview }) => {
  return (
    <div className="w-screen top-[9rem]  z-10 aspect-video pt-[16%] px-16 absolute bg-gradient-to-t from-black ">
      <div className=" absolute top-24">
        <h1 className="text-2xl font-bold tracking-wider text-white">
          {Title}
        </h1>
        <div className=" w-1/4 pb-4 my-1">
          <p className="  py-1 text-lg h-30 hide-scrollbar line-clamp-4 text-white">
            {Overview}
          </p>
        </div>
        <div>
          <button className=" bg-white text-black p-3 text-lg w-[10rem] hover:opacity-80 rounded-md">
            <FontAwesomeIcon icon={faPlay} />
            Play
          </button>
          <button className="mx-3 bg-gray-500 text-white p-3 px-8 text-lg  bg-opacity-70 rounded-md">
            <FontAwesomeIcon icon={faCircleInfo} /> More Info
          </button>
        </div>
      </div>
    </div>
  );
};

export default VideoTitle;
