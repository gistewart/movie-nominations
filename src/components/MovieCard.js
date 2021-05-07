import React from "react";
import "../App.css";
import MovieTag from "./MovieTag";

export default function MovieCard({
  movieInfo,
  handleFavouritesClick,
  favouriteComponent,
}) {
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
            <MovieTag tag={movieInfo.Year} />
            <MovieTag tag={movieInfo.Genre} />
            <MovieTag tag={movieInfo.BoxOffice} />
          </div>
          <div
            onClick={() => handleFavouritesClick(movieInfo)}
            className="overlay-nominate"
          >
            <strong>{favouriteComponent}</strong>
          </div>
        </div>
      </div>
    </>
  );
}
