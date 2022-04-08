import { CART_ADD_ITEM } from "../constants/cartConstants";

export const addToCart = (id, qty) => async (dispatch, getState) => {
  let response = await fetch(`http://localhost:8080/products/${id}`);
  let { data } = await response.json();

  dispatch({
    type: CART_ADD_ITEM,
    payload: {
      product: data.id,
      name: data.name,
      image: data.imageUrl,
      pricePerPound: data.pricePerPound,
      storeQuantity: data.storeQuantity,
      qty,
    },
  });
  localStorage.setItem("cartItems", JSON.stringify(getState().cart.cartItems));
};
