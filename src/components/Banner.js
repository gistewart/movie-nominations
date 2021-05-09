import React from "react";
import Banner from "react-js-banner";

export default function BannerComponent({ nominees }) {
  return (
    <div className="row">
      {nominees.length === 5 ? (
        <div>
          <Banner
            title="Congratulations! You have nominated 5 movies - you're now finished! No further changes can be made."
            visibleTime={3000}
            css={{ marginBottom: "0" }}
          />
        </div>
      ) : (
        ""
      )}
    </div>
  );
}
