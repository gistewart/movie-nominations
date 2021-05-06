import React, { useState, useEffect } from "react";
import API from "../utils/API";
import "../App.css";

const MovieCard = (props) => {
  console.log(props);
  const [movieInfo, setMovieInfo] = useState({});

  useEffect(() => {
    API.getSearchByID(props.movieID)
      .then((res) => res.data)
      .then((res) => {
        setMovieInfo(res);
      });
  }, [props.movieID]);

  const FavouriteComponent = props.favouriteComponent;

  return (
    <>
      <div className="image-container d-flex justify-content-start m-2">
        {movieInfo.Poster !== "N/A" ? (
          <img alt={movieInfo.Title} src={movieInfo.Poster} />
        ) : (
          <img
            alt={movieInfo.Title}
            src="https://critics.io/img/movies/poster-placeholder.png"
          />
        )}
        {movieInfo.Poster === "N/A" ? (
          <div className="no-image-text d-flex align-items-center justify-content-center">
            {movieInfo.Title}
          </div>
        ) : (
          ""
        )}
        <div
          onClick={() => props.handleFavouritesClick(props.movieID)}
          className="overlay d-flex align-items-center justify-content-center"
        >
          <FavouriteComponent />
        </div>
      </div>
    </>
  );
};

export default MovieCard;
