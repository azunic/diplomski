import * as actionTypes from '../actions/actionTypes';
import { updateObject } from '../../utils/utility';

const initialState = {
  errorFetchProducts: false,
  errorFetchProduct: false,
  errorNavigationItems: false,
  errorUserProfileData: false,
  errorFetchBrands: false,
  errorFetchBrand: false,
  isLoadingProducts: false,
  isLoadingProduct: false,
  isLoadingNavigationItems: false,
  isLoadingUserProfileData: false,
  isLoadingBrands: false,
  isLoadingBrand: false,
  navigationItems: null,
  products: null,
  product: null,
  brands: null,
  brand: null,
  searchTerm: '',
  userProfileData: null,
};
//fetch products
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

// fetch products end

// fetch product
const fetchProductSuccess = (state, action) => {
  return updateObject(state, {
    product: action.product,
    errorFetchProduct: false,
    isLoadingProduct: false,
  });
};

const fetchProductFailed = (state, action) => {
  return updateObject(state, {
    errorFetchProduct: action.error,
    isLoadingProduct: false,
  });
};
//fetch product end

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

//fetch brands
const fetchBrandsSuccess = (state, action) => {
  return updateObject(state, {
    brands: action.brands,
    errorFetchBrands: false,
    isLoadingBrands: false,
  });
};

const fetchBrandsFailed = (state, action) => {
  return updateObject(state, {
    errorFetchBrands: action.error,
    isLoadingBrands: false,
  });
};

// fetch products end

// fetch product
const fetchBrandSuccess = (state, action) => {
  return updateObject(state, {
    brand: action.brand,
    errorFetchBrand: false,
    isLoadingBrand: false,
  });
};

const fetchBrandFailed = (state, action) => {
  return updateObject(state, {
    errorFetchBrand: action.error,
    isLoadingBrand: false,
  });
};
//fetch product end

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.FETCH_PRODUCTS_SUCCESS:
      return fetchProductsSuccess(state, action);
    case actionTypes.FETCH_PRODUCTS_FAILED:
      return fetchProductsFailed(state, action);
    case actionTypes.FETCH_PRODUCT_SUCCESS:
      return fetchProductSuccess(state, action);
    case actionTypes.FETCH_PRODUCT_FAILED:
      return fetchProductFailed(state, action);
    case actionTypes.FETCH_NAVIGATION_SUCCESS:
      return fetchNavigationItemsSuccess(state, action);
    case actionTypes.FETCH_NAVIGATION_FAILED:
      return fetchNavigationItemsFailed(state, action);
    case actionTypes.FETCH_USER_PROFILE_SUCCESS:
      return fetchUserProfileSuccess(state, action);
    case actionTypes.FETCH_USER_PROFILE_FAILED:
      return fetchUserProfileFailed(state, action);
    case actionTypes.FETCH_BRANDS_SUCCESS:
      return fetchBrandsSuccess(state, action);
    case actionTypes.FETCH_BRANDS_FAILED:
      return fetchBrandsFailed(state, action);
    case actionTypes.FETCH_BRAND_SUCCESS:
      return fetchBrandSuccess(state, action);
    case actionTypes.FETCH_BRAND_FAILED:
      return fetchBrandFailed(state, action);
    default:
      return state;
  }
};

export default reducer;
