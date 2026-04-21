import React from "react";
import lang from "../utils/languageConstant"
import { useSelector } from "react-redux";

const GptSearchBar = () => {
  const langKey= useSelector(state=>state.config.lang)
  return (
    <div className="pt-[10%] flex justify-center ">
      <form className="w-1/2 p-4 m-4 bg-[#242436] grid grid-cols-12">
        <input
          type="text"
          className=" border  col-span-9 text-black placeholder-[#71717A] px-4 py-3 rounded-lg focus:outline-none focus:border-primary m-3 focus:shadow-[0_0_20px_rgba(124,58,237,0.35)] transition"
          placeholder={lang[langKey].gptSearchPlaceholder}
        />
        <button className="py-3 px-4 m-3 bg-[#7C3AED] text-white rounded-lg col-span-3 hover:bg-[#A78BFA]">
          {lang[langKey].search}
        </button>
      </form>
    </div>
  );
};

export default GptSearchBar;
