import * as actionTypes from '../actions/actionTypes';
import { updateObject } from '../../utils/utility';

const initialState = {
  products: [],
  userProfile: null,
  searchTerm: '',
  isLoadingProducts: false,
  errorFetchProducts: false,
};

const fetchProductsSuccess = (state, action) => {
  return updateObject(state, {
    products: action.products,
    errorFetchProducts: false,
    isLoadingProducts: false,
  });
};

const fetchProductsFailed = (state, action) => {
  return updateObject(state, {
    errorFetchProducts: true,
    isLoadingProducts: false,
  });
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.FETCH_PRODUCTS_SUCCESS:
      return fetchProductsSuccess(state, action);
    case actionTypes.FETCH_PRODUCTS_FAILED:
      return fetchProductsFailed(state, action);
    default:
      return state;
  }
};

export default reducer;
