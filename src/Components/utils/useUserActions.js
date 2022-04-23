import { useStateProvider } from "../../Context/StateContext/state-provider";
import { API_URL } from "../../utilities/ApiUrl";
import axios from "axios";

export const useUserActions = () => {
  const { userState, userDispatch } = useStateProvider();

  const isPresentInWishlist = (prod) =>
    userState?.wishlistItems?.find((item) => item._id == prod._id);

  const isPresentInCart = (prod) =>
    userState?.cartItems?.find((item) => item.product._id == prod._id);

  const addProductInWishlist = async ({
    prod,
    setProcessingItem,
    setToastMsg,
  }) => {
    setProcessingItem(true);
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
          setProcessingItem(false);
          setToastMsg({
            msg: "Added to wishlist Item",
            msgType: "toast-success",
          });
        }
      } catch (error) {
        console.log(error);
        setProcessingItem(false);
        setToastMsg({
          msg: "Failed to add",
          msgType: "toast-error",
        });
      }
    };

    await addProductToWishlist(prod);
  };

  const removeProductFromWishlist = async ({
    prod,
    setProcessingItem,
    setToastMsg,
  }) => {
    const removeProductFromWishlist = async (product) => {
      setProcessingItem(true);
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
          setProcessingItem(false);
          setToastMsg({
            msg: "Removed from  wishlist",
            msgType: "toast-success",
          });
        }
      } catch (error) {
        console.log(error);
        setProcessingItem(false);
        setToastMsg({
          msg: "Failed to remove",
          msgType: "toast-error",
        });
      }
    };
    await removeProductFromWishlist(prod);
  };

  const addProductInCart = async ({ prod, setProcessingItem, setToastMsg }) => {
    setProcessingItem(true);
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
          setProcessingItem(false);
          setToastMsg({
            msg: "Product added to cart",
            msgType: "toast-success",
          });
        }
      } catch (error) {
        console.log(error);
        setProcessingItem(false);
        setToastMsg({
          msg: "Failed to add",
          msgType: "toast-error",
        });
      }
    };

    await addProductToCart(prod);
  };

  const removeProductFromCart = async ({
    prod,
    setProcessingItem,
    setToastMsg,
  }) => {
    setProcessingItem(true);
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
          setProcessingItem(false);
          setToastMsg({
            msg: "Removed from cart",
            msgType: "toast-success",
          });
        }
      } catch (error) {
        console.log(error);
        setProcessingItem(false);
        setToastMsg({
          msg: "Failed to remove",
          msgType: "toast-error",
        });
      }
    };
    await removeProductFromCart(prod);
  };

  const updateQuantity = async ({ prod, increase, setToastMsg }) => {
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
          setToastMsg({
            msg: "Quantity Updated",
            msgType: "toast-success",
          });
        }
      } catch (error) {
        console.log(error);
        setToastMsg({
          msg: "Faiked to update",
          msgType: "toast-error",
        });
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
