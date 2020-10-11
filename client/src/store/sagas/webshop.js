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
