import React from "react";

import { Categories, Brands } from "../../db";
import { Slider } from "./Slider";

import "./home.css";
export const Home = () => {
  return (
    <div>
      <Slider />
      <h3 className="text-banner-title text-bold">Categories to Bag</h3>
      <div className="spacer-3rem"></div>

      <div className="grid-4-column-layout">
        {Categories.map((category) => {
          return (
            <div className="card-vertical card-hover box-shadow">
              <div className="card-img">
                <img
                  loading="lazy"
                  src={category.img}
                  alt={category.name}
                  className="img-responsive"
                />
              </div>
              <h4 className="text-center category-title">{category.name}</h4>
            </div>
          );
        })}
      </div>

      <h3 className="text-banner-title text-bold">Explore Top Brands</h3>
      <div className="spacer-3rem"></div>

      <div className="grid-4-column-layout">
        {Brands.map((brand) => {
          return (
            <div className="card-vertical card-hover box-shadow">
              <div className="card-img">
                <img
                  loading="lazy"
                  src={brand.img}
                  alt={brand.name}
                  className="img-responsive"
                />
              </div>
            </div>
          );
        })}
      </div>

      <div className="spacer-3rem"></div>
    </div>
  );
};
