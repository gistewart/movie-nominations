import React, { useState, useEffect } from "react";
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
  const [error, setError] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const [resultCount, setResultCount] = useState(0);
  const [resultList, setResultList] = useState([]);
  const [nominees, setNominees] = useState([]);

  useEffect(() => {
    const movieNominations = JSON.parse(
      localStorage.getItem("movie-nominations")
    );
    if (movieNominations) {
      setNominees(movieNominations);
    }
  }, []);

  const saveToLocalStorage = (items) => {
    localStorage.setItem("movie-nominations", JSON.stringify(items));
  };

  const searchMoviesByName = (query) => {
    API.getSearchByName(query)
      .then((res) => res.data)
      .then((res) => {
        if (res.Response === "False") {
          setError(true);
          setErrorMessage(res.Error);
        } else {
          setError(false);
          setErrorMessage("");
          const results = res.Search.map((el) => el.imdbID).filter(
            (v, i, a) => a.findIndex((t) => t === v) === i
          );
          setResultList(results);
          const totalResults = res.totalResults;
          setResultCount(totalResults);
        }
      });
  };

  const search = (event) => {
    event.preventDefault();
    searchMoviesByName(searchRequest);
  };

  const onChange = ({ target }) => {
    const value = target.value;
    setSearchRequest(value);
  };

  const addNominatedMovie = (movie) => {
    const newNominatedList = [...nominees, movie];
    setNominees(newNominatedList);
    saveToLocalStorage(newNominatedList);
  };

  const removeNominatedMovie = (movie) => {
    const newNominatedList = nominees.filter(
      (nominee) => nominee.imdbID !== movie.imdbID
    );
    setNominees(newNominatedList);
    saveToLocalStorage(newNominatedList);
  };

  return (
    <>
      <Header />
      <BannerComponent nominees={nominees} />
      <div className="container mt-4">
        <Search
          searchRequest={searchRequest}
          search={search}
          onChange={onChange}
          error={error}
          errorMessage={errorMessage}
          resultList={resultList}
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
                    handleNominatedClick={addNominatedMovie}
                    selectText="Nominate +"
                    nominees={nominees}
                  />
                ))
              : ""}
          </div>

          {nominees.length > 0 ? (
            <div className="row results-header mb-2">Nominated Movies</div>
          ) : (
            ""
          )}

          <div className="row">
            {nominees.length > 0
              ? nominees.map((el, i) => (
                  <MovieCard
                    key={i}
                    movieInfo={el}
                    handleNominatedClick={removeNominatedMovie}
                    selectText="Remove -"
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
