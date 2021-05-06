import React, { useState, useEffect } from "react";
import API from "../../utils/API";

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

  return (
    <>
      <div className="container">
        <div className="movie-card">
          <img alt={movieInfo.Title} src={movieInfo.Poster} />
          <div>{movieInfo.Title}</div>
        </div>
      </div>
    </>
  );
};

export default MovieCard;
