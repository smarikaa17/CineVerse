import React from "react";
import { IMG_CDN_URL } from "../utils/constant";

const MovieCard = ({ posterPath }) => {
  if (!posterPath) return null;
  return (
    <div className="w-44 pr-4">
      <img src={`${IMG_CDN_URL}${posterPath}`} alt="" className="rounded-lg " />
    </div>
  );
};

export default MovieCard;
