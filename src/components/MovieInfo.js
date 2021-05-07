import React, { useState, useEffect } from "react";
import API from "../utils/API";
import MovieCard from "./MovieCard";
import "../App.css";

const MovieInfo = (props) => {
  const [movieInfo, setMovieInfo] = useState({});

  useEffect(() => {
    API.getSearchByID(props.movieID)
      .then((res) => res.data)
      .then((res) => {
        setMovieInfo(res);
      });
  }, [props.movieID]);

  return (
    <MovieCard
      movieInfo={movieInfo}
      handleFavouritesClick={props.handleFavouritesClick}
      favouriteComponent={props.favouriteComponent}
    />
  );
};

export default MovieInfo;
