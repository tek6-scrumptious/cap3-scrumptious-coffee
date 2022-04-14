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

async function setData(cartArr, id) {
  const resp = await axios.get(URL + id);
  const data = await resp.data;
  for (let i = 0; i < cartArr.length; i++) {
    if (cartArr[i].id == id) {
      data.qty = cartArr[i].qty;
    }
  }
  return data;
}

export const listProductDetails = (id) => async (dispatch, getState) => {
  try {
    dispatch({ type: PRODUCT_DETAILS_LOADING });
    const cartArray = getState().cart.inCart;

    const data = await setData(cartArray, id);
    let productDetail = {
      id: data.id,
      name: data.name,
      imageUrl: data.imageUrl,
      description: data.description,
      storeQuantity: data.storeQuantity,
      pricePrePound: data.pricePrePound,
      roast: data.roast,
      location: data.location,
      qty: data.qty ? data.qty : 1,
    };

    dispatch({
      type: PRODUCT_DETAILS_SUCCESS,
      payload: productDetail,
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
