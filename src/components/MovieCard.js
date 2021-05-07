import React, { useState, useEffect } from "react";
import API from "../utils/API";
import "../App.css";

const MovieCard = (props) => {
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
        <div className="overlay align-items-center justify-content-center">
          <div className="overlay-details">
            {movieInfo.Year !== "N/A" ? (
              <span className="overlay-details-element">{movieInfo.Year}</span>
            ) : (
              ""
            )}
            {movieInfo.Genre !== "N/A" ? (
              <span className="overlay-details-element">{movieInfo.Genre}</span>
            ) : (
              ""
            )}
            {movieInfo.BoxOffice !== "N/A" ? (
              <span className="overlay-details-element">
                {movieInfo.BoxOffice}
              </span>
            ) : (
              ""
            )}
          </div>
          <div
            onClick={() => props.handleFavouritesClick(movieInfo)}
            className="overlay-nominate"
          >
            <FavouriteComponent />
          </div>
        </div>
      </div>
    </>
  );
};

export default MovieCard;
