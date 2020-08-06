import { put, call } from 'redux-saga/effects';

import * as api from '../../api/api';
import * as actions from '../actions/index';

export function* fetchProducts(action) {
  try {
  } catch (error) {
    console.log("fetchProducts", err);
    return null;
  }
}
