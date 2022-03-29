export const FilterReducer = (state, { type, payload }) => {
  switch (type) {
    case "FILTER_BY_PRICE":
      console.log("filter by price");
      return {
        ...state,
        sort: payload,
      };

    case "FILTER_BY_PRICE_RANGE":
      return {
        ...state,
        byPriceRange: payload,
      };
    case "FILTER_BY_RATING":
      return {
        ...state,
        byRating: payload,
      };

    case "FILTER_BY_STOCK":
      return {
        ...state,
        outOfStock: !state.outOfStock,
      };

    case "FILTER_BY_SEARCH":
      return {
        ...state,
        search: payload,
      };

    case "FILTER_BY_CATEGORIES": {
      return state.byCategories.includes(payload.name)
        ? {
            ...state,

            byCategories: state.byCategories.filter(
              (item) => item !== payload.name
            ),
          }
        : {
            ...state,

            byCategories: state.byCategories.concat(payload.name),
          };
    }

    case "FILTER_BY_BRANDS": {
      return state.byBrands.includes(payload.name)
        ? {
            ...state,

            byBrands: state.byBrands.filter((item) => item !== payload.name),
          }
        : {
            ...state,

            byBrands: state.byBrands.concat(payload.name),
          };
    }

    case "CLEAR_FILTERS":
      return {
        outOfStock: false,
        byPriceRange: 0,
        byRating: 0,
        applySearch: "",
        sort: "",
        byCategories: [],
        byBrands: [],
      };

    default:
      return state;
  }
};
