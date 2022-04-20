import React, { useEffect } from "react";
import { useProductDataProvider } from "../../Context/ProductDataContext/ProductDataProvider";
import { ProductCard } from "./ProductCard";
import { Filter } from "./Filter/Filter";
import { FilteredData } from "./Filter/utils/filteredData";
import "./styles.css";
export const ProductListing = () => {
  const { productList } = useProductDataProvider();

  const shuffleProduct = (arr) => arr.sort(() => Math.random() - 0.5);

  return (
    <div className="product-page-layout">
      <aside className="aside">
        <Filter />
      </aside>

      <section>
        <div className="grid-4-column-layout">
          {FilteredData(productList).length ? (
            shuffleProduct(FilteredData(productList)).map((prod) => {
              return <ProductCard prod={prod} key={prod._id} />;
            })
          ) : (
            <h4 className="text-center">No any Products to show</h4>
          )}
        </div>
      </section>
    </div>
  );
};
