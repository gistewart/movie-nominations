import React from "react";
import Jumbotron from "react-bootstrap/Jumbotron";

export default function Search({
  search,
  searchRequest,
  onChange,
  error,
  errorMessage,
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
            Sorry, error with search request: {errorMessage} Please try again.
          </p>
        ) : (
          ""
        )}
      </Jumbotron>
    </div>
  );
}
