import axios from "axios";
export const getProductInfo = async (productId) => {
  try {
    const {
      data: { response },
    } = await axios({
      method: "GET",
      url: `http://localhost:8080/products/${productId}`,
    });

    return response;
  } catch (error) {
    console.log(error);
  }
};
