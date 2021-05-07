import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import MovieInfo from "./components/MovieInfo";
import BannerComponent from "./components/Banner";
import Heading from "./components/Heading";
import MovieCard from "./components/MovieCard";
import API from "./utils/API";

const App = () => {
  const [searchRequest, setSearchRequest] = useState("");
  const [error, setError] = useState("");
  const [totalResults, setTotalResults] = useState("");
  const [resultList, setResultList] = useState([]);
  const [favourites, setFavourites] = useState([]);

  const searchMoviesByName = (query) => {
    API.getSearchByName(query)
      .then((res) => res.data)
      .then((res) => {
        if (!res.Search) {
          setResultList([]);
          return;
        }
        const resultList = res.Search.map((el) => el.imdbID);
        setResultList(resultList);
      });
  };

  const validate = (searchRequest) => {
    const valid = searchRequest && searchRequest.length > 2;
    if (!valid) {
      setError(true);
    } else {
      setError("");
      searchMoviesByName(searchRequest);
    }
    return valid;
  };

  const search = (event) => {
    event.preventDefault();
    validate(searchRequest);
  };

  const onChange = ({ target }) => {
    const value = target.value;
    setSearchRequest(value);
  };

  const addFavouriteMovie = (movie) => {
    const newFavouriteList = [...favourites, movie];
    setFavourites(newFavouriteList);
  };

  const removeFavouriteMovie = (movie) => {
    const newFavouriteList = favourites.filter(
      (favourite) => favourite.imdbID !== movie.imdbID
    );
    setFavourites(newFavouriteList);
  };

  return (
    <>
      <BannerComponent favourites={favourites} />
      <Heading />
      <div className="container-fluid main-container">
        <form autoComplete="off" onSubmit={search}>
          <label>Movie Title</label>
          <input
            type="text"
            name="searchRequest"
            value={searchRequest}
            placeholder="Search for a movie"
            onChange={onChange}
          />
          <p style={{ fontSize: "12px" }}>
            * Minimum of 3 case-insensitive characters required; search term can
            be anywhere in movie title, and can be truncated.
          </p>
          {error && <p>invalid entry</p>}
          <button type="submit">Submit</button>
        </form>

        {totalResults && <p>Total Results: {totalResults}</p>}

        <div className="row">
          {resultList.length > 0
            ? resultList.map((el, i) => (
                <MovieInfo
                  key={i}
                  movieID={el}
                  handleFavouritesClick={addFavouriteMovie}
                  favouriteComponent="Nominate +"
                  favourites={favourites}
                />
              ))
            : "error here"}
        </div>

        <div className="row">
          {favourites.length > 0
            ? favourites.map((el, i) => (
                <MovieCard
                  key={i}
                  movieInfo={el}
                  handleFavouritesClick={removeFavouriteMovie}
                  favouriteComponent="Remove -"
                />
              ))
            : ""}
        </div>
      </div>
    </>
  );
};

export default App;
