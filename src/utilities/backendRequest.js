import axios from "axios";

export const getProductsFromDb = async (setProductList) => {
  try {
    const {
      data: { response },
    } = await axios({
      method: "GET",
      url: `http://localhost:8080/products`,
    });
    setProductList(response);
  } catch (error) {
    console.log(error);
  }
};
