import React from "react";
import { useNavigate } from "react-router-dom";
import { Categories, Brands } from "../../db";
import { Slider } from "./Slider";

import { useFilterProvider } from "../../Context/FilterContext/FilterProvider";

import "./home.css";
export const Home = () => {
  const { filterDispatch } = useFilterProvider();
  const navigate = useNavigate();
  return (
    <div>
      <Slider />
      <h3 className="text-banner-title text-bold">Categories to Bag</h3>
      <div className="spacer-3rem"></div>

      <div className="grid-4-column-layout">
        {Categories.map((category) => {
          return (
            <div
              className="card-vertical card-hover box-shadow"
              onClick={() => {
                filterDispatch({
                  type: "FILTER_BY_CATEGORIES",
                  payload: category,
                });
                navigate("/products");
              }}
            >
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
            <div
              className="card-vertical card-hover box-shadow"
              onClick={() => {
                filterDispatch({
                  type: "FILTER_BY_BRANDS",
                  payload: brand,
                });
                navigate("/products");
              }}
            >
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
