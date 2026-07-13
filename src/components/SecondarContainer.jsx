import React from "react";
import MovieList from "./MovieList";
import { useSelector } from "react-redux";

const SecondarContainer = () => {
  //getting data from store
  const Movies = useSelector((state) => state?.movie?.movies);
  const popularMov = useSelector((state) => state?.movie?.popularMovies);
  const topRatedMov = useSelector((state) => state?.movie?.topRatedMovies);
  const upcomingMov = useSelector((state) => state?.movie?.upComingMovies);

  return (
    <div className=" bg-black ">
      <div className="mt-52 md:-mt-44 pl-5 md:pl-12 relative z-10">
        <MovieList title={"Now Playing"} Movies={Movies} />
        <MovieList title={"Popular"} Movies={popularMov} />
        <MovieList title={"Top Rated"} Movies={topRatedMov} />
        <MovieList title={"Upcoming Movies"} Movies={upcomingMov} />
        <MovieList title={"Horror Movies"} Movies={Movies} />
      </div>
    </div>
  );
};

export default SecondarContainer;
