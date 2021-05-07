import React from "react";

export default function MovieTag({ tag }) {
  return (
    <>{tag !== "N/A" ? <span className="overlay-tags">{tag}</span> : ""}</>
  );
}
