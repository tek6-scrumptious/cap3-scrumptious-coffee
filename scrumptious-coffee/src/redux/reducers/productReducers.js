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

export const productListReducers = (state = { products: [] }, action) => {
  switch (action.type) {
    case PRODUCT_LIST_LOADING:
      return { loading: true, products: [] };
    case PRODUCT_LIST_SUCCESS:
      return { loading: false, products: action.payload };
    case PRODUCT_LIST_FAIL:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
};

export const productDetailsReducers = (state = { product: {} }, action) => {
  switch (action.type) {
    case PRODUCT_DETAILS_LOADING:
      return { loading: true, ...state };
    case PRODUCT_DETAILS_SUCCESS:
      return { loading: false, product: action.payload };
    case PRODUCT_DETAILS_FAIL:
      return { loading: false, error: action.payload };

    case PRODUCT_ADD_QTY:
      return {
        product: {
          ...state.product,
          qty:
            state.product.qty !== state.product.storeQuantity
              ? state.product.qty + 1
              : state.product.qty,
        },
      };
    case PRODUCT_SUB_QTY:
      return {
        product: {
          ...state.product,
          qty: state.product.qty !== 1 ? state.product.qty - 1 : 1,
        },
      };
    default:
      return state;
  }
};
