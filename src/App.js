import React, { useState, useEffect } from "react";
import MovieCard from "./components/MovieCard";
import "./App.css";
import API from "./utils/API";

const App = () => {
  const [searchRequest, setSearchRequest] = useState("");
  const [error, setError] = useState("");
  const [totalResults, setTotalResults] = useState("");
  const [resultList, setResultList] = useState([]);

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

  return (
    <>
      <div className="container">
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
      </div>
      {totalResults && <p>Total Results: {totalResults}</p>}

      <div className="movie-card-wrapper">
        {resultList.length > 0
          ? resultList.map((el, i) => <MovieCard key={i} movieID={el} />)
          : "error here"}
      </div>
    </>
  );
};

export default App;
