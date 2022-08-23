import { ADD_PRODUCT, DELETE_PRODUCT, UPDATE_PRODUCT } from "../ActionConfigs";

export const addProductToList = (product) => {
  return {
    type: ADD_PRODUCT,
    product,
  };
};

export const updateProductData = (id, product) => {
  return {
    type: UPDATE_PRODUCT,
    id,
    product,
  };
};

export const deleteProductData = (id) => {
  return {
    type: DELETE_PRODUCT,
    id,
  };
};
