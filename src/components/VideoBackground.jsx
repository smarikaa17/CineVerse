import React, { useEffect } from "react";
import { API_OPTIONS } from "../utils/constant";
import { useDispatch, useSelector } from "react-redux";
import { addTrailerVideo } from "../store/movieSlice";

const VideoBackground = ({ movieId }) => {

  const dispatch= useDispatch()
  const trailervideo=useSelector((state)=>state.movie.trailerVd)
  //fetch trailer video background
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

  return (
    <div>
      <iframe
        width="560"
        height="315"
        src={`https://www.youtube.com/embed/${trailervideo?.key}?si=61jAyuSMpkXzj2DV`}
        title="YouTube video player"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowFullScreen
      
      ></iframe>
    </div>
  );
};

export default VideoBackground;
