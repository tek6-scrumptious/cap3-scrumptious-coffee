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
      console.log(item.id);
      const existItem = state.inCart.find((x) => x.id === item.id);
      if (existItem) {
        return {
          ...state,
          inCart: state.inCart.map((product) =>
            product.id === item.id
              ? { ...product, selected: true, qty: 1 }
              : product
          ),
        };
      } else {
        return {
          ...state,
          inCart: [...state.inCart, item],
        };
      }

    case REMOVE_FROM_CART:
      console.log(item);
      return {
        ...state,
        inCart: state.inCart.filter((x) => x.id !== action.payload),
      };

    case ADD_QTY:
      return {
        ...state,
        products: state.cart.map((product) =>
          product.id === action.id
            ? { ...product, qty: product.qty + 1 }
            : product
        ),
      };

    case SUB_QTY:
      return {
        ...state,
        products: state.cart.map((product) =>
          product.id === action.id
            ? { ...product, qty: product.qty - 1 }
            : product
        ),
      };
    case EMPTY_CART:
      return {
        ...state,
        products: state.cart.map((product) =>
          product.selected ? { ...product, selected: false, qty: 1 } : product
        ),
      };
    default:
      return state;
  }
};

export default handleCartReducer;

// export const cartReducer = (state = { cartItems: [] }, action) => {
//   const item = action.payload;
//   switch (action.type) {
//     case CART_ADD_ITEM:
//       const existItem = state.cartItems.find((x) => x.product === item.product);
//       if (existItem) {
//         return {
//           ...state,
//           cartItems: state.cartItems.map((x) =>
//             x.product === existItem.product ? item : x
//           ),
//         };
//       } else {
//         return {
//           ...state,
//           cartItems: [...state.cartItems, item],
//         };
//       }

//     default:
//       return state;
//   }
// };
