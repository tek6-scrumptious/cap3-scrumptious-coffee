import axios from "axios";
import {
  PRODUCT_LIST_SUCCESS,
  PRODUCT_LIST_LOADING,
  PRODUCT_LIST_FAIL,
} from "../constants/productConstants";

export const listProducts = () => async (dispatch) => {
  try {
    dispatch({ type: PRODUCT_LIST_LOADING });
    let response = await fetch("http://localhost:8000/products");
    let data = await response.json();

    dispatch({
      type: PRODUCT_LIST_SUCCESS,
      payload: data,
    });
  } catch (error) {
    console.log(error.response);
    dispatch({
      type: PRODUCT_LIST_FAIL,
      payload: error.message,
    });
  }
};
