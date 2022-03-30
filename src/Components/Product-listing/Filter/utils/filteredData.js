import { useFilterProvider } from "./../../../../Context/FilterContext/FilterProvider";
export const FilteredData = (productList) => {
  const {
    filterState: {
      sort,
      byPriceRange,
      byCategories,
      byBrands,
      outOfStock,
      byRating,
    },
  } = useFilterProvider();

  let ModifiedData = [...productList];

  if (byPriceRange) {
    ModifiedData = ModifiedData.filter((prod) => {
      return prod.price <= byPriceRange;
    });
  }

  if (byCategories.length !== 0) {
    ModifiedData = ModifiedData.filter((product) => {
      return byCategories.includes(product.category);
    });
  }

  if (byBrands.length !== 0) {
    ModifiedData = ModifiedData.filter((product) => {
      return byBrands.includes(product.brand);
    });
  }

  if (byRating) {
    ModifiedData = ModifiedData.filter(
      (prod) => prod.rating.starRating >= byRating
    );
  }

  if (sort) {
    ModifiedData = ModifiedData.sort((a, b) =>
      sort === "LOW_TO_HIGH_PRICE"
        ? Number(a.price) - Number(b.price)
        : Number(b.price) - Number(a.price)
    );
  }

  if (!outOfStock) {
    ModifiedData = ModifiedData.filter((prod) => prod.inStock);
  }

  return ModifiedData;
};
