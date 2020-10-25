import * as actionTypes from './actionTypes';

//products start
export const fetchProducts = (category) => {
  return {
    type: actionTypes.FETCH_PRODUCTS,
    category,
  };
};

export const fetchProductsSuccess = (products) => {
  return {
    type: actionTypes.FETCH_PRODUCTS_SUCCESS,
    products,
  };
};

export const fetchProductsFailed = (error) => {
  return {
    type: actionTypes.FETCH_PRODUCTS_FAILED,
    error,
  };
};

//products end

//region utilities

export const fetchNavigation = () => {
  return {
    type: actionTypes.FETCH_NAVIGATION,
  };
};

export const fetchNavigationSuccess = (navigationItems) => {
  return {
    type: actionTypes.FETCH_NAVIGATION_SUCCESS,
    navigationItems,
  };
};

export const fetchNavigationFailed = (error) => {
  return {
    type: actionTypes.FETCH_NAVIGATION_FAILED,
    error,
  };
};

//endregion

// user profile start

export const fetchUserProfile = () => {
  return {
    type: actionTypes.FETCH_USER_PROFILE,
  };
};

export const fetchUserProfileSuccess = (userProfileData) => {
  return {
    type: actionTypes.FETCH_USER_PROFILE_SUCCESS,
    userProfileData,
  };
};

export const fetchUserProfileFailed = (error) => {
  return {
    type: actionTypes.FETCH_USER_PROFILE_FAILED,
    error,
  };
};

// user profile end
