import * as actionTypes from './actionTypes';

export const fetchProducts = (category) => {
  return {
    type: actionTypes.FETCH_PRODUCTS,
    category,
  };
};
