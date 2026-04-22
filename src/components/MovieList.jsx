import React from "react";
import MovieCard from "./MovieCard";
const MovieList = ({ title, Movies }) => {
  return (
    <div className="px-6 relative">
      <h1 className="text-2xl py-4 text-white">{title}</h1>
      <div className="flex hide-scrollbar overflow-x-scroll">
        <div className="flex pr-4 cursor-pointer">
          {Movies?.map((movie) => (
            <MovieCard key={movie.id} posterPath={movie.poster_path} />
          ))}
        </div>
        <div className=" absolute top-0 right-0 h-full w-16 bg-gradient-to-l from-black to-transparent"></div>
      </div>
    </div>
  );
};

export default MovieList;
