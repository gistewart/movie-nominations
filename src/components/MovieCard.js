import React, { useState, useEffect } from "react";
import "../App.css";
import MovieTag from "./MovieTag";

export default function MovieCard({
  movieInfo,
  handleFavouritesClick,
  favouriteComponent,
  favourites,
}) {
  const [isNominated, setIsNominated] = useState(false);

  useEffect(() => {
    if (favourites !== undefined) {
      const match = favourites.some((el) => el.imdbID === movieInfo.imdbID);
      setIsNominated(match);
    }
  }, [favourites, movieInfo]);

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
          <div>
            <MovieTag tag={movieInfo.Year} />
            <MovieTag tag={movieInfo.Genre} />
            <MovieTag tag={movieInfo.BoxOffice} />
          </div>
          <div
            onClick={
              !isNominated ? () => handleFavouritesClick(movieInfo) : undefined
            }
            className={
              isNominated ? "overlay-is-nominated" : "overlay-is-not-nominated"
            }
          >
            {favouriteComponent}
          </div>
        </div>
      </div>
    </>
  );
}
