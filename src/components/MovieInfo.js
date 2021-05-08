import React, { useState, useEffect } from "react";
import API from "../utils/API";
import MovieCard from "./MovieCard";
import "../App.css";

const MovieInfo = ({ movieID, handleNominatedClick, selectText, nominees }) => {
  const [movieInfo, setMovieInfo] = useState({});

  useEffect(() => {
    API.getSearchByID(movieID)
      .then((res) => res.data)
      .then((res) => {
        setMovieInfo(res);
      });
  }, [movieID]);

  return (
    <MovieCard
      movieInfo={movieInfo}
      handleNominatedClick={handleNominatedClick}
      selectText={selectText}
      nominees={nominees}
    />
  );
};

export default MovieInfo;
