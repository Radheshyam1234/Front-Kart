import React, { useEffect } from "react";
import { useProductDataProvider } from "../../Context/ProductDataContext/ProductDataProvider";
import { ProductCard } from "./ProductCard";
import { Filter } from "./Filter/Filter";
import { FilteredData } from "./Filter/utils/filteredData";
import { Loader } from "../../Loader/Loader";
import "./styles.css";
export const ProductListing = () => {
  const { productList } = useProductDataProvider();

  return (
    <div className="product-page-layout">
      <aside className="aside">
        <Filter />
      </aside>

      <section>
        <div className="grid-4-column-layout">
          {FilteredData(productList).length ? (
            FilteredData(productList).map((prod) => {
              return <ProductCard prod={prod} key={prod._id} />;
            })
          ) : (
            <div className="display-flex justify-center ">
              <Loader />
            </div>
          )}
        </div>
      </section>
    </div>
  );
};
