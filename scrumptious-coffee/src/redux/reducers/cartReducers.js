import {
  ADD_TO_CART,
  REMOVE_FROM_CART,
  ADD_QTY,
  SUB_QTY,
  EMPTY_CART,
} from "../constants/cartConstants";

const handleCartReducer = (state = { inCart: [] }, action) => {
  const item = action.payload;
  switch (action.type) {
    case ADD_TO_CART:
      const existItem = state.inCart.find((x) => x.id === item.id);
      if (existItem) {
        return {
          ...state,
          inCart: state.inCart.map((product) =>
            product.id === item.id ? { ...product, qty: item.qty } : product
          ),
        };
      } else {
        return {
          ...state,
          inCart: [...state.inCart, { ...item, qty: item.qty }],
        };
      }

    case REMOVE_FROM_CART:
      return {
        ...state,
        inCart: state.inCart.filter((x) => x.id !== action.payload),
      };

    case ADD_QTY:
      return {
        ...state,
        inCart: state.inCart.map((product) =>
          product.id === action.payload
            ? {
                ...product,
                qty:
                  product.qty !== product.storeQuantity
                    ? product.qty + 1
                    : product.qty,
              }
            : product
        ),
      };

    case SUB_QTY:
      return {
        ...state,
        inCart: state.inCart.map((product) =>
          product.id === action.payload
            ? { ...product, qty: product.qty !== 1 ? product.qty - 1 : 1 }
            : product
        ),
      };
    case EMPTY_CART:
      return {
        ...state,
        inCart: state.inCart.map((product) =>
          product.selected ? { ...product, selected: false, qty: 1 } : product
        ),
      };
    default:
      return state;
  }
};

export default handleCartReducer;
