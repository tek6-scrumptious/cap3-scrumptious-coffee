import {
  PRODUCT_LIST_SUCCESS,
  PRODUCT_LIST_LOADING,
  PRODUCT_LIST_FAIL,
  PRODUCT_DETAILS_SUCCESS,
  PRODUCT_DETAILS_LOADING,
  PRODUCT_DETAILS_FAIL,
} from "../constants/productConstants";
import axios from "axios";

export const listProducts = () => async (dispatch) => {
  try {
    dispatch({ type: PRODUCT_LIST_LOADING });
    const resp = await axios.get("http://localhost:8080/products/");
    const data = await resp.data;
    console.log(data);
    dispatch({
      type: PRODUCT_LIST_SUCCESS,
      payload: data,
    });
  } catch (error) {
    console.log(error.message);
    dispatch({
      type: PRODUCT_LIST_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};

export const listProductDetails = (id) => async (dispatch) => {
  try {
    dispatch({ type: PRODUCT_DETAILS_LOADING });
    const resp = await axios.get(`http://localhost:8080/products/${id}`);
    const data = await resp.data;

    dispatch({
      type: PRODUCT_DETAILS_SUCCESS,
      payload: { ...data, qty: 1 },
    });
  } catch (error) {
    console.log(error.response);
    dispatch({
      type: PRODUCT_DETAILS_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};
