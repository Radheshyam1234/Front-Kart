import { createContext, useContext, useState } from "react";

export const ProductDataContext = createContext();

export const ProductDataProvider = ({ children }) => {
  const [productList, setProductList] = useState([]);

  return (
    <ProductDataContext.Provider value={{ productList, setProductList }}>
      {children}
    </ProductDataContext.Provider>
  );
};

export const useProductDataProvider = () => useContext(ProductDataContext);
