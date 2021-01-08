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

// fetch brands start
export const fetchBrands = () => {
  return {
    type: actionTypes.FETCH_BRANDS,
  };
};

export const fetchBrandsSuccess = (brands) => {
  return {
    type: actionTypes.FETCH_BRANDS_SUCCESS,
    brands,
  };
};

export const fetchBrandsFailed = (error) => {
  return {
    type: actionTypes.FETCH_BRANDS_FAILED,
    error,
  };
};

// fetch brands end

// fetch brand  start
export const fetchBrand = (brandId) => {
  console.log('akcija----', brandId);
  return {
    type: actionTypes.FETCH_BRAND,
    brandId,
  };
};

export const fetchBrandSuccess = (brand) => {
  return {
    type: actionTypes.FETCH_BRAND_SUCCESS,
    brand,
  };
};

export const fetchBrandFailed = (error) => {
  return {
    type: actionTypes.FETCH_BRAND_FAILED,
    error,
  };
};

// fetch product end

// fetch brands end

// fetch category  start
export const fetchCategory = (categoryId) => {
  console.log('akcija----', categoryId);
  return {
    type: actionTypes.FETCH_CATEGORY,
    categoryId,
  };
};

export const fetchCategorySuccess = (category) => {
  return {
    type: actionTypes.FETCH_CATEGORY_SUCCESS,
    category,
  };
};

export const fetchCategoryFailed = (error) => {
  return {
    type: actionTypes.FETCH_CATEGORY_FAILED,
    error,
  };
};

// fetch category end

// fetch categories start
export const fetchCategories = () => {
  return {
    type: actionTypes.FETCH_CATEGORIES,
  };
};

export const fetchCategoriesSuccess = (categories) => {
  return {
    type: actionTypes.FETCH_CATEGORIES_SUCCESS,
    categories,
  };
};

export const fetchCategoriesFailed = (error) => {
  return {
    type: actionTypes.FETCH_CATEGORIES_FAILED,
    error,
  };
};

// fetch brands end
