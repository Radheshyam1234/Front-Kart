import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { useProductDataProvider } from "../../Context/ProductDataContext/ProductDataProvider";
import { ProductCard } from "../Product-listing/ProductCard";

export const SearchResultPage = () => {
  const { query: searchedItem } = useParams();
  const { productList } = useProductDataProvider();
  const FilteredData = () => {
    return productList.filter(({ name, brand, category }) => {
      return (
        name.toLowerCase().includes(searchedItem.toLowerCase()) ||
        brand.toLowerCase().includes(searchedItem.toLowerCase()) ||
        category.toLowerCase().includes(searchedItem.toLowerCase()) ||
        searchedItem.toLowerCase().includes(name.toLowerCase()) ||
        searchedItem.toLowerCase().includes(brand.toLowerCase()) ||
        searchedItem.toLowerCase().includes(category.toLowerCase())
      );
    });
  };

  useEffect(() => {
    console.log(FilteredData());
  }, []);

  return (
    <div>
      {FilteredData().length ? (
        <div>
          <h4 className="text-center">
            {FilteredData().length} items found for your search{" "}
            <span className=" primary-text-color">"{searchedItem}"</span>
          </h4>
          <div className="spacer-3rem"></div>
          <div className="grid-4-column-layout">
            {FilteredData().length &&
              FilteredData().map((prod) => {
                return <ProductCard prod={prod} key={prod.id} />;
              })}
          </div>
        </div>
      ) : (
        <div>
          <h3 className="text-center secondary-text-color">
            No results found for your search
          </h3>
        </div>
      )}
    </div>
  );
};
