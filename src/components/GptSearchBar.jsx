import React from "react";
import lang from "../utils/languageConstant"
import { useSelector } from "react-redux";

const GptSearchBar = () => {
  const langKey= useSelector(state=>state.config.lang)
  return (
    <div className=" pt-[40%] md:p-[10%] sm:p-[20%] flex justify-center ">
      <form className="w-full md:w-1/2 p-1 m-4 bg-[#242436] grid grid-cols-12 text-xs md:text-lg sm:text-base">
        <input
          type="text"
          className=" border  col-span-9 text-black placeholder-[#71717A] px-2 py-2 rounded-lg focus:outline-none focus:border-primary m-2 sm:my-2 md:m-3 focus:shadow-[0_0_20px_rgba(124,58,237,0.35)] transition"
          placeholder={lang[langKey].gptSearchPlaceholder}
        />
        <button className="md:py-3 sm:py-2 place-items-center m-2 sm:my-2 md:m-3 bg-[#7C3AED] text-white rounded-lg col-span-3 hover:bg-[#A78BFA]">
          {lang[langKey].search}
        </button>
      </form>
    </div>
  );
};

export default GptSearchBar;
