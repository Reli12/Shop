import axios from "axios";
import { CART_ADD_ITEM } from "../constants/cartConstants";
export const addToCart = (productId, qty) => async (dispatch, getState) => {
  const { data } = await axios.get(`/api/products/${productId}`);
  dispatch({
    type: CART_ADD_ITEM,
    payload: {
      name: data.name,
      image: data.image,
      price: data.price,
      coumtInStock: data.coumtInStock,
      product: data._id,
      qty,
    },
  });
  //save in local storage all prodact that been select on page
  localStorage.setItem("cartItems", JSON.stringify(getState().cart.cartItems));
};
