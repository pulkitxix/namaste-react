import React from "react";
import "../../index.css";

const Shimmer = () => {
  const shimmerCards = Array(12).fill(0); // Example: generating 12 shimmer cards dynamically

  return (
    <div className="shimmer-wrapper">
      {shimmerCards.map((_, index) => (
        <div className="shimmer-card" key={index}>
          <div className="shimmer-image"></div>
          <div className="shimmer-text"></div>
          <div className="shimmer-text"></div>
          <div className="shimmer-text"></div>
          <div className="shimmer-text"></div>
        </div>
      ))}
    </div>
  );
};

export default Shimmer;
