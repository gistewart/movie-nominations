import React, { useState, useEffect } from "react";
import "../App.css";
import MovieTag from "./MovieTag";

export default function MovieCard({
  movieInfo,
  handleNominatedClick,
  selectText,
  nominees,
}) {
  const [isNominated, setIsNominated] = useState(false);

  useEffect(() => {
    if (nominees !== undefined) {
      const match = nominees.some((el) => el.imdbID === movieInfo.imdbID);
      setIsNominated(match);
    }
  }, [nominees, movieInfo]);

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
              !isNominated ? () => handleNominatedClick(movieInfo) : undefined
            }
            className={
              isNominated ? "overlay-is-nominated" : "overlay-is-not-nominated"
            }
          >
            {selectText}
          </div>
        </div>
      </div>
    </>
  );
}
