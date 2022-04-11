import {
  PRODUCT_LIST_SUCCESS,
  PRODUCT_LIST_LOADING,
  PRODUCT_LIST_FAIL,
  PRODUCT_DETAILS_SUCCESS,
  PRODUCT_DETAILS_LOADING,
  PRODUCT_DETAILS_FAIL,
  PRODUCT_ADD_QTY,
  PRODUCT_SUB_QTY,
} from "../constants/productConstants";
import axios from "axios";

const URL =
  "http://scrumptious-env-2.eba-ixgv7adq.us-east-1.elasticbeanstalk.com/";

export const listProducts = () => async (dispatch) => {
  try {
    dispatch({ type: PRODUCT_LIST_LOADING });
    const resp = await axios.get(URL);
    const data = await resp.data;
    dispatch({
      type: PRODUCT_LIST_SUCCESS,
      payload: data,
    });
  } catch (error) {
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
    const resp = await axios.get(URL + id);
    const data = await resp.data;

    dispatch({
      type: PRODUCT_DETAILS_SUCCESS,
      payload: { ...data, qty: 1 },
    });
  } catch (error) {
    dispatch({
      type: PRODUCT_DETAILS_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};

export const productAdd = (id) => async (dispatch) => {
  dispatch({
    type: PRODUCT_ADD_QTY,
    payload: id,
  });
};

export const productSub = (id) => async (dispatch) => {
  dispatch({
    type: PRODUCT_SUB_QTY,
    payload: id,
  });
};
