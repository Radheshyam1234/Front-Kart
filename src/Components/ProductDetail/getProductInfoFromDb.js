import axios from "axios";
import { API_URL } from "../../utilities/ApiUrl";
export const getProductInfo = async (productId) => {
  try {
    const {
      data: { response },
    } = await axios({
      method: "GET",
      url: `${API_URL}/products/${productId}`,
    });

    return response;
  } catch (error) {
    console.log(error);
  }
};
