import React from "react";
import Jumbotron from "react-bootstrap/Jumbotron";

export default function Search({
  search,
  searchRequest,
  onChange,
  error,
  notFoundError,
}) {
  return (
    <div>
      <Jumbotron className="text-center">
        <form autoComplete="off" onSubmit={search}>
          <input
            type="text"
            name="searchRequest"
            value={searchRequest}
            placeholder="Search for a movie..."
            onChange={onChange}
          />
          <button type="submit">Search</button>
        </form>
        {error ? (
          <p className="error">
            Error with search request: a minimum of 3 characters is required.
          </p>
        ) : notFoundError === "true" ? (
          <p className="error">
            Error with search request: no movies were found. Please try again.
          </p>
        ) : (
          ""
        )}
      </Jumbotron>
    </div>
  );
}
