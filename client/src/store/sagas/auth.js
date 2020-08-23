import { put, call } from "redux-saga/effects";
import jwt_decode from "jwt-decode";
import * as api from "../../api/api";
import * as actions from "../actions/index";

export function* logoutSaga(action) {
  yield call([localStorage, "removeItem"], "token");
  yield call([localStorage, "removeItem"], "exp");
  yield call([localStorage, "removeItem"], "user_id");
  yield put(actions.logoutSucceed());
}

export function* authRegisterUserSaga(action) {
  yield put(actions.authStart());
  const authData = {
    email: action.email,
    password: action.password,
    first_name: action.firstName,
    last_name: action.lastName,
    date_of_birth: action.dateOfBirth,
  };
  try {
    yield call(api.signup, authData);

    // can be used for auto-login after signup
    /* yield localStorage.setItem("token", response.data.auth_token);
    const decoded = jwt_decode(response.data.auth_token);
    yield localStorage.setItem("exp", decoded.exp);
    yield localStorage.setItem("user_id", decoded.user_id);
    yield put(
      actions.authSuccess(response.data.auth_token)
    ); */

    yield put(actions.registerSuccess());
  } catch (error) {
    yield put(actions.authFail(error.response.data.error));
  }
}

export function* authLoginUserSaga(action) {
  yield put(actions.authStart());
  const authData = {
    email: action.email,
    password: action.password,
  };
  try {
    const response = yield call(api.login, authData);
    console.log("response", response);
    yield localStorage.setItem("token", response.data.token);

    const decoded = jwt_decode(response.data.token);
    console.log("decoded", decoded);
    yield localStorage.setItem("exp", decoded.exp);
    yield localStorage.setItem("user_id", decoded.user_id);

    yield put(actions.authSuccess(response.data.token));
  } catch (error) {
    yield put(actions.authFail(error.response.data.reason));
  }
}

export function* authCheckStateSaga(action) {
  const token = yield localStorage.getItem("token");
  if (!token) {
    yield put(actions.logout());
  } else {
    const expirationDate = yield new Date(localStorage.getItem("exp"));
    if (expirationDate <= new Date()) {
      yield put(actions.logout());
    } else {
      const userId = yield localStorage.getItem("user_id");
      yield put(actions.authSuccess(token, userId));
      yield put(
        actions.checkAuthTimeout(
          (expirationDate.getTime() - new Date().getTime()) / 1000
        )
      );
    }
  }
}
