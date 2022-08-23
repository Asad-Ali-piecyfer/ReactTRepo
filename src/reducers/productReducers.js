import { ADD_PRODUCT, DELETE_PRODUCT, UPDATE_PRODUCT } from "../ActionConfigs";

const initialState = {
  products: [],
};

export default function ProductReducers(state = initialState, action) {
  switch (action.type) {
    case ADD_PRODUCT: {
      return {
        ...state,
        products: [...state.products, action.product],
      };
    }
    case UPDATE_PRODUCT: {
      const oldState = { ...state };
      const index = oldState.products.findIndex(
        (product) => product.id === action.id
      );
      oldState.products[index] = { ...action.product, id: action.id };
      return {
        ...oldState,
      };
    }
    case DELETE_PRODUCT: {
      const oldState = { ...state };
      oldState.products = oldState.products.filter(
        (product) => product.id !== action.id
      );
      return {
        ...oldState,
      };
    }
    default:
      return state;
  }
}
