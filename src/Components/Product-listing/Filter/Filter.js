import React, { useState, useEffect, useCallback } from "react";
import { useFilterProvider } from "../../../Context/FilterContext/FilterProvider";
import { Categories, Brands } from "../../../db";

export const Filter = () => {
  const { filterState, filterDispatch } = useFilterProvider();

  const [priceRange, setPriceRange] = useState(25000);

  useEffect(() => {
    filterDispatch({ type: "FILTER_BY_PRICE_RANGE", payload: priceRange });
  }, [priceRange]);

  const sortByPrice = (e) => {
    filterDispatch({ type: "FILTER_BY_PRICE", payload: e.target.value });
  };

  const clearFilter = () => {
    filterDispatch({ type: "CLEAR_FILTERS" });
  };

  const filterByRating = (e) => {
    filterDispatch({
      type: "FILTER_BY_RATING",
      payload: e.target.value,
    });
  };

  function debounceFun(priceHandler, delay) {
    let timerId;
    return function () {
      let self = this;
      let args = arguments;
      clearTimeout(timerId);
      timerId = setTimeout(() => {
        priceHandler.apply(self, args);
      }, delay);
    };
  }
  const priceHandler = (e) => {
    setPriceRange(e.target.value);
  };

  const optimizedPriceHandler = useCallback(debounceFun(priceHandler, 500), []);

  return (
    <>
      <div className="aside-top">
        <div className="text-bold">Filters</div>
        <div
          className="primary-text-color text-semibold text-medium"
          onClick={clearFilter}
          style={{ cursor: "pointer" }}
        >
          CLEAR ALL
        </div>
      </div>

      <div className="filter price-filter">
        <h4>Price</h4>
        <div className="price-range display-flex">
          <div className="min-price">0</div>
          <div className="curr-price">{priceRange}</div>
          <div className="max-price">50000</div>
        </div>
        <div>
          <input
            className="range-slider"
            type="range"
            min="0"
            max="50000"
            onChange={optimizedPriceHandler}
          />
        </div>
      </div>

      <div className="filter category-filter text-semibold">
        <h4>Category</h4>

        {Categories.map((category) => {
          return (
            <label className="text-regular">
              <input
                className="form-checkbox-field"
                key={category.name}
                type="checkbox"
                onChange={(e) => {
                  console.log(e.target.value);
                  filterDispatch({
                    type: "FILTER_BY_CATEGORIES",
                    payload: category,
                  });
                }}
                checked={filterState.byCategories.includes(category.name)}
              />
              {category.name}
            </label>
          );
        })}
      </div>

      <div className="filter category-filter text-semibold">
        <h4>Brand</h4>

        {Brands.map((brand) => {
          return (
            <label className="text-regular">
              <input
                className="form-checkbox-field"
                key={brand.name}
                type="checkbox"
                onChange={() => {
                  filterDispatch({
                    type: "FILTER_BY_BRANDS",
                    payload: brand,
                  });
                }}
                checked={filterState.byBrands.includes(brand.name)}
              />
              {brand.name}
            </label>
          );
        })}
      </div>

      <div className="filter rating-filter text-regular">
        <h4>Rating</h4>

        {[1, 2, 3, 4].map((rating) => {
          return (
            <label>
              <input
                className="form-checkbox-field"
                key={rating}
                type="radio"
                name="rating"
                value={rating}
                checked={filterState.byRating == rating}
                onChange={filterByRating}
              />
              {rating} <i className="fas fa-star text-small"></i> & above
            </label>
          );
        })}
      </div>

      <div className="filter sortBy-filter text-regular">
        <h4>Sort by</h4>
        <label>
          <input
            className="form-checkbox-field"
            type="radio"
            name="sort-price"
            onChange={sortByPrice}
            value="LOW_TO_HIGH_PRICE"
            checked={filterState.sort === "LOW_TO_HIGH_PRICE"}
          />
          Price - Low to High
        </label>
        <label>
          <input
            className="form-checkbox-field"
            type="radio"
            name="sort-price"
            onChange={sortByPrice}
            value="HIGH_TO_LOW_PRICE"
            checked={filterState.sort === "HIGH_TO_LOW_PRICE"}
          />
          Price - High to Low
        </label>
      </div>

      <div className="filter  text-regular">
        <h4>Other</h4>
        <label>
          <input
            className="form-checkbox-field"
            type="checkbox"
            name="inStock"
            onChange={() => {
              filterDispatch({ type: "FILTER_BY_STOCK" });
            }}
            checked={filterState.outOfStock}
          />
          Include out of stock
        </label>
      </div>
    </>
  );
};
