import React, { useEffect } from "react";
import { API_OPTIONS } from "../utils/constant";
import { useDispatch, useSelector } from "react-redux";
import { addTopRatedMovies } from "../store/movieSlice";

const useTopRatedMovies = () => {
  const dispatch = useDispatch();
  const topRatedMovie= useSelector(state=>state.movie.topRatedMovies)
  const getTopRatedMovies = async () => {
    const data = await fetch(
      "https://api.themoviedb.org/3/movie/top_rated?page=1",
      API_OPTIONS,
    );
    const res = await data.json();
    dispatch(addTopRatedMovies(res.results));
  };

  useEffect(() => {
    !topRatedMovie && getTopRatedMovies();
  }, []);
};

export default useTopRatedMovies;
