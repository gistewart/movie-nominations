import React from "react";
import Banner from "react-js-banner";

export default function BannerComponent({ nominees }) {
  return (
    <div className="row">
      {nominees.length === 5 ? (
        <div>
          <Banner title="You have nominated 5 movies" visibleTime={3000} />
        </div>
      ) : (
        ""
      )}
    </div>
  );
}
