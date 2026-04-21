import React, { useEffect } from "react";
import { API_OPTIONS } from "../utils/constant";
import { useDispatch } from "react-redux";
import { addUpComingMovies } from "../store/movieSlice";
const useUpcomingMovies = () => {
  const dispatch = useDispatch();
  const getUpComingMovies = async () => {
    const data = await fetch(
      "https://api.themoviedb.org/3/movie/upcoming?page=1",
      API_OPTIONS,
    );
    const res = await data.json();
    dispatch(addUpComingMovies(res?.results));
  };

  useEffect(() => {
    getUpComingMovies();
  }, []);
};

export default useUpcomingMovies;
