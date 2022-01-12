import { CART_ADD_ITEM } from "../constants/cartConstants";

export const cartReducer = (state = { cartItems: [] }, action) => {
  switch (action.type) {
    case CART_ADD_ITEM:
      const item = action.payload;
      const existItem = state.cartItems.find((x) => x.product === item.product);
      //replacing product in the case that is alredy exzist
      //becouse of relevant new information that is hidden in new requst-action
      if (existItem) {
        return {
          ...state,
          cartItems: state.cartItems.map((x) =>
            x.product === existItem.product ? item : x
          ),
        };
      } else {
        //this concatonate new item in the exzisting list

        return { ...state, cartItems: [...state.cartItems, item] };
      }
    default:
      return state;
  }
};
