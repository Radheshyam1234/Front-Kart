import { useStateProvider } from "../../Context/StateContext/state-provider";
import axios from "axios";

export const useUserActions = () => {
  const { userState, userDispatch } = useStateProvider();

  const isPresentInWishlist = (prod) =>
    userState?.wishlistItems?.find((item) => item._id == prod._id);

  const isPresentInCart = (prod) =>
    userState.cartItems.find((item) => item.product._id == prod._id);

  const addProductInWishlist = async (prod) => {
    const addProductToWishlist = async (product) => {
      try {
        const response = await axios({
          method: "POST",
          url: `${API_URL}/wishlist`,
          data: {
            product,
          },
          headers: {
            Authorization: "Bearer " + localStorage.getItem("token"),
          },
        });

        if (response.status === 200) {
          userDispatch({
            type: "SET_WISHLIST",
            payload: response.data.response,
          });
        }
      } catch (error) {
        console.log(error);
      }
    };

    await addProductToWishlist(prod);
  };

  const removeProductFromWishlist = async (prod) => {
    const removeProductFromWishlist = async (product) => {
      try {
        const response = await axios({
          method: "DELETE",
          url: `${API_URL}/wishlist`,
          data: {
            product,
          },
          headers: {
            Authorization: "Bearer " + localStorage.getItem("token"),
          },
        });

        if (response.status === 200) {
          userDispatch({
            type: "SET_WISHLIST",
            payload: response.data.response,
          });
        }
      } catch (error) {
        console.log(error);
      }
    };
    await removeProductFromWishlist(prod);
  };

  const addProductInCart = async (prod) => {
    const addProductToCart = async (product) => {
      try {
        const response = await axios({
          method: "POST",
          url: `${API_URL}/cart`,
          data: {
            product,
          },
          headers: {
            Authorization: "Bearer " + localStorage.getItem("token"),
          },
        });

        if (response.status === 200) {
          userDispatch({ type: "SET_CART", payload: response.data.response });
        }
      } catch (error) {
        console.log(error);
      }
    };

    await addProductToCart(prod);
  };

  const removeProductFromCart = async (prod) => {
    const removeProductFromCart = async (product) => {
      try {
        const response = await axios({
          method: "DELETE",
          url: `${API_URL}/cart`,
          data: {
            product,
          },
          headers: {
            Authorization: "Bearer " + localStorage.getItem("token"),
          },
        });

        if (response.status === 200) {
          userDispatch({ type: "SET_CART", payload: response.data.response });
        }
      } catch (error) {
        console.log(error);
      }
    };
    await removeProductFromCart(prod);
  };

  const updateQuantity = async (prod, increase) => {
    const updateQtyOfProductInCart = async (product, increase) => {
      try {
        const response = await axios({
          method: "PATCH",
          url: `${API_URL}/cart`,
          data: {
            product,
            increase,
          },
          headers: {
            Authorization: "Bearer " + localStorage.getItem("token"),
          },
        });

        if (response.status === 200) {
          userDispatch({
            type: "SET_CART",
            payload: response.data.response,
          });
        }
      } catch (error) {
        console.log(error);
      }
    };
    await updateQtyOfProductInCart(prod.product, increase);
  };

  return {
    addProductInWishlist,
    removeProductFromWishlist,
    isPresentInWishlist,
    isPresentInCart,
    removeProductFromCart,
    addProductInCart,
    updateQuantity,
  };
};
