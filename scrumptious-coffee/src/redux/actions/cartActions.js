import {
  ADD_TO_CART,
  REMOVE_FROM_CART,
  ADD_QTY,
  SUB_QTY,
  EMPTY_CART,
} from "../constants/cartConstants.js";
import axios from "axios";

export const addToCart = (id) => async (dispatch, getState) => {
  let response = await axios.get(`http://localhost:8080/products/${id}`);
  let data = await response.data;

  dispatch({
    type: ADD_TO_CART,
    payload: {
      id: data.id,
      name: data.name,
      image: data.imageUrl,
      pricePerPound: data.pricePerPound,
      storeQuantity: data.storeQuantity,
      selected: true,
      qty: 1,
    },
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
  let response = await fetch(`http://localhost:8080/products/${id}`);
  let data = await response.json();
  dispatch({
    type: SUB_QTY,
    payload: {
      id: data.id,
      name: data.name,
      image: data.imageUrl,
      pricePerPound: data.pricePerPound,
      storeQuantity: data.storeQuantity,
      qty: 1,
    },
  });
  localStorage.setItem("cartItems", JSON.stringify(getState().cart.inCart));
};

export const emptyCart = () => async (dispatch, getState) => {
  dispatch({
    type: EMPTY_CART,
  });
  localStorage.setItem("cartItems", JSON.stringify(getState().cart.inCart));
};
