import { takeEvery, all } from 'redux-saga/effects';

import * as actionTypes from '../actions/actionTypes';

import { authRegisterUserSaga, authLoginUserSaga, logoutSaga, authCheckStateSaga } from './auth';
import { fetchProducts } from './webshop';

export function* watchAuth() {
  yield all([
    takeEvery(actionTypes.AUTH_USER_REGISTER, authRegisterUserSaga),
    takeEvery(actionTypes.AUTH_USER_LOGIN, authLoginUserSaga),
    takeEvery(actionTypes.AUTH_INITIATE_LOGOUT, logoutSaga),
    takeEvery(actionTypes.AUTH_CHECK_STATE, authCheckStateSaga),
  ]);
}

export function* watchWebshop() {
  yield all([takeEvery(actionTypes.FETCH_PRODUCTS, fetchProducts)]);
}
