import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import API from "./utils/API";
import BannerComponent from "./components/Banner";
import Header from "./components/Header";
import Search from "./components/Search";
import MovieInfo from "./components/MovieInfo";
import MovieCard from "./components/MovieCard";

const App = () => {
  const [searchRequest, setSearchRequest] = useState("");
  const [error, setError] = useState("");
  const [notFoundError, setNotFoundError] = useState("");
  const [resultCount, setResultCount] = useState(0);
  const [resultList, setResultList] = useState([]);
  const [favourites, setFavourites] = useState([]);

  const searchMoviesByName = (query) => {
    API.getSearchByName(query)
      .then((res) => res.data)
      .then((res) => {
        if (!res.Search) {
          setResultList([]);
        }
        if (res.Response === "False") {
          setNotFoundError("true");
        }
        if (res.Response === "True") {
          setNotFoundError("false");
        }
        if (!res.Search || res.Response === "False") {
          return;
        }
        const resultList = res.Search.map((el) => el.imdbID).filter(
          (v, i, a) => a.findIndex((t) => t === v) === i
        );
        setResultList(resultList);
        const totalResults = res.totalResults;
        setResultCount(totalResults);
      });
  };

  const validate = (searchRequest) => {
    const valid = searchRequest && searchRequest.length > 2;
    if (!valid) {
      setError(true);
      setResultList("");
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
      <Header />
      <BannerComponent favourites={favourites} />
      <div className="container mt-4">
        <Search
          searchRequest={searchRequest}
          search={search}
          onChange={onChange}
          error={error}
          resultList={resultList}
          notFoundError={notFoundError}
        ></Search>

        <div className="container-fluid main-container mt-4">
          {resultList.length > 0 ? (
            <div className="row results-header mb-2">
              Results: showing closest matches from a total of {resultCount}{" "}
              results
            </div>
          ) : (
            ""
          )}

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
              : ""}
          </div>

          {favourites.length > 0 ? (
            <div className="row results-header mb-2">Nominated Movies</div>
          ) : (
            ""
          )}

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
      </div>
    </>
  );
};

export default App;
