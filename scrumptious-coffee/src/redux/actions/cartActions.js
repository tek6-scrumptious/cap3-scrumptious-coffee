import {
  ADD_TO_CART,
  REMOVE_FROM_CART,
  ADD_QTY,
  SUB_QTY,
  EMPTY_CART,
} from "../constants/cartConstants.js";

export const addToCart = (id) => async (dispatch, getState) => {
  dispatch({
    type: ADD_TO_CART,
    payload: getState().productDetails.product,
  });
  localStorage.setItem("cartItems", JSON.stringify(getState().cart.inCart));
};

export const removeFromCart = (id) => async (dispatch, getState) => {
  dispatch({
    type: REMOVE_FROM_CART,
    payload: id,
  });
  localStorage.setItem("cartItems", JSON.stringify(getState().cart.inCart));
};

export const addQty = (id) => async (dispatch, getState) => {
  dispatch({
    type: ADD_QTY,
    payload: id,
  });
  localStorage.setItem("cartItems", JSON.stringify(getState().cart.inCart));
};

export const subtractQty = (id) => async (dispatch, getState) => {
  dispatch({
    type: SUB_QTY,
    payload: id,
  });
  localStorage.setItem("cartItems", JSON.stringify(getState().cart.inCart));
};

export const emptyCart = () => async (dispatch, getState) => {
  dispatch({
    type: EMPTY_CART,
  });
  localStorage.setItem("cartItems", JSON.stringify(getState().cart.inCart));
};
