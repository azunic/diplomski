import * as actionTypes from './actionTypes';

// fetch products start
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

// fetch products end

// fetch product  start
export const fetchProduct = (productId) => {
  console.log('akcija----', productId);
  return {
    type: actionTypes.FETCH_PRODUCT,
    productId,
  };
};

export const fetchProductSuccess = (product) => {
  return {
    type: actionTypes.FETCH_PRODUCT_SUCCESS,
    product,
  };
};

export const fetchProductFailed = (error) => {
  return {
    type: actionTypes.FETCH_PRODUCT_FAILED,
    error,
  };
};

// fetch product end

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
