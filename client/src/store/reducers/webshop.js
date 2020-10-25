import * as actionTypes from '../actions/actionTypes';
import { updateObject } from '../../utils/utility';

const initialState = {
  errorFetchProducts: false,
  errorNavigationItems: false,
  errorUserProfileData: false,
  isLoadingProducts: false,
  isLoadingNavigationItems: false,
  isLoadingUserProfileData: false,
  navigationItems: null,
  products: null,
  searchTerm: '',
  userProfileData: null,
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
    errorFetchProducts: action.error,
    isLoadingProducts: false,
  });
};

// NAVIGACIJA
const fetchNavigationItemsSuccess = (state, action) => {
  return updateObject(state, {
    navigationItems: action.navigationItems,
    errorNavigationItems: false,
    isLoadingNavigationItems: false,
  });
};

const fetchNavigationItemsFailed = (state, action) => {
  return updateObject(state, {
    errorNavigationItems: action.error,
    isLoadingNavigationItems: false,
  });
};

// user profile
const fetchUserProfileSuccess = (state, action) => {
  return updateObject(state, {
    userProfileData: action.userProfileData,
    errorUserProfileData: false,
    isLoadingUserProfileData: false,
  });
};

const fetchUserProfileFailed = (state, action) => {
  return updateObject(state, {
    errorUserProfileData: action.error,
    isLoadingUserProfileData: false,
  });
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.FETCH_PRODUCTS_SUCCESS:
      return fetchProductsSuccess(state, action);
    case actionTypes.FETCH_PRODUCTS_FAILED:
      return fetchProductsFailed(state, action);
    case actionTypes.FETCH_NAVIGATION_SUCCESS:
      return fetchNavigationItemsSuccess(state, action);
    case actionTypes.FETCH_NAVIGATION_FAILED:
      return fetchNavigationItemsFailed(state, action);
    case actionTypes.FETCH_USER_PROFILE_SUCCESS:
      return fetchUserProfileSuccess(state, action);
    case actionTypes.FETCH_USER_PROFILE_FAILED:
      return fetchUserProfileFailed(state, action);
    default:
      return state;
  }
};

export default reducer;
