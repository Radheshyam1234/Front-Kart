import React from "react";
import "./Loader.css";

export const Loader = () => {
  return (
    <div className="loader-container box-shadow">
      <div className="loader"></div>
    </div>
  );
};

export const ProcessingItemLoader = () => {
  return (
    <div className="loader-container processing-item-loader-container box-shadow">
      <div className="loader"></div>
    </div>
  );
};
