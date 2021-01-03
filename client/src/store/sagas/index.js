import { takeEvery, all } from 'redux-saga/effects';

import * as actionTypes from '../actions/actionTypes';

import { authRegisterUserSaga, authLoginUserSaga, logoutSaga, authCheckStateSaga } from './auth';
import { fetchProducts, fetchNavigation, fetchUserProfile, fetchProduct, fetchBrands, fetchBrand } from './webShop';

export function* watchAuth() {
  yield all([
    takeEvery(actionTypes.AUTH_USER_REGISTER, authRegisterUserSaga),
    takeEvery(actionTypes.AUTH_USER_LOGIN, authLoginUserSaga),
    takeEvery(actionTypes.AUTH_INITIATE_LOGOUT, logoutSaga),
    takeEvery(actionTypes.AUTH_CHECK_STATE, authCheckStateSaga),
  ]);
}

export function* watchWebShop() {
  yield all([
    takeEvery(actionTypes.FETCH_PRODUCTS, fetchProducts),
    takeEvery(actionTypes.FETCH_PRODUCT, fetchProduct),
    takeEvery(actionTypes.FETCH_BRANDS, fetchBrands),
    takeEvery(actionTypes.FETCH_BRAND, fetchBrand),
    takeEvery(actionTypes.FETCH_NAVIGATION, fetchNavigation),
    takeEvery(actionTypes.FETCH_USER_PROFILE, fetchUserProfile),
  ]);
}
