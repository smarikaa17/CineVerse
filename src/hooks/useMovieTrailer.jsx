import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux';
import { addTrailerVideo } from '../store/movieSlice';
import { API_OPTIONS } from '../utils/constant';

const useMovieTrailer = (movieId) => {
  const dispatch= useDispatch()
  
  //fetch trailer video and update the store with trailer video data
  const getMovieTrailer = async () => {
    const data = await fetch(
      `https://api.themoviedb.org/3/movie/${movieId}/videos?language=en-US`,
      API_OPTIONS,
    );
    const res = await data.json();
    const filterData = res?.results
      .filter((video) => video.type === "Trailer")
      .filter((video) => video.name === "Official Trailer");

    const trailer = filterData?.length > 0 ? filterData[0] : res?.results[0];

    dispatch(addTrailerVideo(trailer))
  };

  useEffect(() => {
    getMovieTrailer();
  }, []);
}

export default useMovieTrailer