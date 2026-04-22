import React from "react";
import { useSelector } from "react-redux";
import useMovieTrailer from "../hooks/useMovieTrailer";

const VideoBackground = ({ movieId }) => {
  const trailervideo = useSelector((state) => state.movie.trailerVd);

  //custom hook for fetching,filtering trailer video and dispatching into store
  useMovieTrailer(movieId);
  return (
    <div>
      <iframe
        className="absolute -top-[6.5rem] w-screen aspect-video pointer-events-none "
        src={`https://www.youtube.com/embed/${trailervideo?.key}?autoplay=1&mute=1&controls=0&showinfo=0&modestbranding=1&rel=0&loop=1&playlist=${trailervideo?.key}`}
        title="YouTube video player"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
      ></iframe>
    </div>
  );
};

export default VideoBackground;
