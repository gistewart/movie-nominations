import React from "react";

export default function MovieTag({ tag }) {
  return (
    <>
      {tag === undefined || tag === "N/A" ? (
        ""
      ) : /\d/.test(tag) ? (
        <span className="overlay-tags">{tag}</span>
      ) : (
        <span className="overlay-tags">{tag.match(/\w+/)[0]}</span>
      )}
    </>
  );
}
