import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router } from "react-router-dom";
import { App } from "./App";

import { ProductDataProvider } from "./Context/ProductDataContext/ProductDataProvider";
import { FilterProvider } from "./Context/FilterContext/FilterProvider";
import { AuthProvider } from "./Context/AuthContext/AuthProvider";
import { StateProvider } from "./Context/StateContext/state-provider";
import { ToastProvider } from "./Context/ToastContext/ToastProvider";
ReactDOM.render(
  <React.StrictMode>
    <Router>
      <AuthProvider>
        <ProductDataProvider>
          <StateProvider>
            <FilterProvider>
              <ToastProvider>
                <App />
              </ToastProvider>
            </FilterProvider>
          </StateProvider>
        </ProductDataProvider>
      </AuthProvider>
    </Router>
  </React.StrictMode>,
  document.getElementById("root")
);
