export const stateReducer = (state, { type, payload }) => {
  switch (type) {
    case "SET_CART":
      return {
        ...state,
        cartItems: payload,
      };

    case "REMOVE_ALL_FROM_CART":
      return {
        ...state,
        cartItems: [],
      };

    case "SET_WISHLIST":
      return {
        ...state,
        wishlistItems: payload,
      };
  }
};
