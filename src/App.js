import React, { useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import { useProductDataProvider } from "./Context/ProductDataContext/ProductDataProvider";
import { getProductsFromDb } from "./utilities/backendRequest";

import { Home, ProductListing } from "./Components";

import "./styles.css";

export const App = () => {
  const { setProductList } = useProductDataProvider();
  useEffect(() => {
    getProductsFromDb(setProductList);
  }, []);
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products" element={<ProductListing />} />
      </Routes>
    </div>
  );
};
