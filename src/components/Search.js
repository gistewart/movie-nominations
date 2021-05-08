import React from "react";
import Jumbotron from "react-bootstrap/Jumbotron";

export default function Search({ search, searchRequest, onChange }) {
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
          {/* <p style={{ fontSize: "10px" }}>
              * Min. of 3 case-insensitive characters required; search term can
              be anywhere in movie title.
            </p>
            {error && <p>invalid entry</p>} */}
        </form>
      </Jumbotron>
    </div>
  );
}
