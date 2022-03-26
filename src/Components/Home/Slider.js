import React, { useState } from "react";
import { Link } from "react-router-dom";
import { SliderImages } from "./../../db";

export const Slider = () => {
  const [sliderIndex, setSliderIndex] = useState(0);

  return (
    <>
      <div className="slides-container">
        <div style={{ display: "block" }} className="mySlides fade">
          <img
            loading="lazy"
            src={SliderImages[sliderIndex].img}
            alt="Image"
            className="img-responsive"
          />
        </div>

        {sliderIndex !== 0 && (
          <a
            className="prev"
            onClick={() => {
              setSliderIndex(sliderIndex - 1);
            }}
          >
            &#10094;
          </a>
        )}

        {sliderIndex !== SliderImages.length - 1 && (
          <a
            className="next"
            onClick={() => {
              setSliderIndex(sliderIndex + 1);
            }}
          >
            &#10095;
          </a>
        )}
      </div>
      <div className="text-center">
        <Link to="/products">
          <button className="btn primary-btn">Shop Now</button>
        </Link>
      </div>
    </>
  );
};
