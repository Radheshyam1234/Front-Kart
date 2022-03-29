import React, { useReducer, createContext, useContext } from "react";
import { FilterReducer } from "./FilterReducer";

const filterContext = createContext();

export const FilterProvider = ({ children }) => {
  const [filterState, filterDispatch] = useReducer(FilterReducer, {
    outOfStock: false,
    byRating: 0,
    applySearch: "",
    sort: "",
    byPriceRange: 25000,
    byCategories: [],
    byBrands: [],
  });

  return (
    <filterContext.Provider value={{ filterState, filterDispatch }}>
      {children}
    </filterContext.Provider>
  );
};

export const useFilterProvider = () => useContext(filterContext);
