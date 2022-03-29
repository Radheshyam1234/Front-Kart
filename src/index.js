import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router } from "react-router-dom";
import { App } from "./App";

import { ProductDataProvider } from "./Context/ProductDataContext/ProductDataProvider";
import { FilterProvider } from "./Context/FilterContext/FilterProvider";
ReactDOM.render(
  <React.StrictMode>
    <Router>
      <ProductDataProvider>
        <FilterProvider>
          <App />
        </FilterProvider>
      </ProductDataProvider>
    </Router>
  </React.StrictMode>,
  document.getElementById("root")
);
