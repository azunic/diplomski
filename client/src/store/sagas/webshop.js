import { put, call } from 'redux-saga/effects';

import * as api from '../../api/api';
import * as actions from '../actions/index';

export function* fetchProducts() {
  try {
    const response = yield call(api.fetchProducts);
    yield put(actions.fetchProductsSuccess(response.data));
  } catch (error) {
    yield put(actions.fetchProductsFailed(error.response.data.reason));
    return null;
  }
}
export function* fetchProduct(action) {
  const productId = action.productId;
  console.log('sagaaaaaa:', productId);
  try {
    const response = yield call(api.fetchProduct, productId);
    yield put(actions.fetchProductSuccess(response.data));
  } catch (error) {
    yield put(actions.fetchProductFailed(error.response.data.reason));
    return null;
  }
}

//BRANDS
export function* fetchBrands() {
  try {
    const response = yield call(api.fetchBrands);
    yield put(actions.fetchBrandsSuccess(response.data));
  } catch (error) {
    yield put(actions.fetchBrandsFailed(error.response.data.reason));
    return null;
  }
}
export function* fetchBrand(action) {
  const productId = action.productId;
  console.log('sagaaaaaa:', productId);
  try {
    const response = yield call(api.fetchProduct, productId);
    yield put(actions.fetchBrandSuccess(response.data));
  } catch (error) {
    yield put(actions.fetchBrandFailed(error.response.data.reason));
    return null;
  }
}

// NAVIGATION
export function* fetchNavigation() {
  try {
    const response = yield call(api.fetchNavigation);
    yield put(actions.fetchNavigationSuccess(response.data));
  } catch (error) {
    yield put(actions.fetchNavigationFailed(error.response.data.reason));
    return null;
  }
}

//USER PROFILE
export function* fetchUserProfile() {
  try {
    const response = yield call(api.fetchUserProfile);
    console.log('response', response);
    yield put(actions.fetchUserProfileSuccess(response.data));
  } catch (error) {
    yield put(actions.fetchUserProfileFailed(error.response.data.reason));
    return null;
  }
}

// CATEGORIES
export function* fetchCategories() {
  try {
    const response = yield call(api.fetchCategories);
    yield put(actions.fetchCategoriesSuccess(response.data));
  } catch (error) {
    yield put(actions.fetchCategoriesFailed(error.response.data.reason));
    return null;
  }
}

export function* fetchCategory(action) {
  const categoryId = action.categoryId;
  console.log('sagaaaaaa:', categoryId);
  try {
    const response = yield call(api.fetchCategory, categoryId);
    yield put(actions.fetchCategorySuccess(response.data));
  } catch (error) {
    yield put(actions.fetchCategoryFailed(error.response.data.reason));
    return null;
  }
}
