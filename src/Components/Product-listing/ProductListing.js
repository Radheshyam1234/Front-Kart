import React, { useEffect } from "react";
import { useProductDataProvider } from "../../Context/ProductDataContext/ProductDataProvider";
import { ProductCard } from "./ProductCard";
import { Filter } from "./Filter/Filter";
import "./styles.css";
export const ProductListing = () => {
  const { productList } = useProductDataProvider();
  useEffect(() => {
    console.log(productList);
  }, []);

  return (
    <div className="product-page-layout">
      <aside className="aside">
        <Filter />
      </aside>

      <section>
        <div className="grid-4-column-layout">
          {productList.map((prod) => {
            return <ProductCard prod={prod} key={prod._id} />;
          })}
        </div>
      </section>
    </div>
  );
};
