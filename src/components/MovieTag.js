import React from "react";

export default function MovieTag({ tag }) {
  return (
    <>
      {tag === undefined || tag === "N/A" ? (
        ""
      ) : /^\d/.test(tag) ? (
        <span className="overlay-tags">{tag}</span>
      ) : /^\$/.test(tag) ? (
        <span className="overlay-tags">
          {tag.length > 9
            ? `$${parseInt(tag.replace(/\$|,/g, "") / 1000000)}M`
            : tag.length > 5
            ? `$${parseInt(tag.replace(/\$|,/g, "") / 1000)}K`
            : tag}
        </span>
      ) : (
        <span className="overlay-tags">{tag.match(/\w+/)[0]}</span>
      )}
    </>
  );
}
