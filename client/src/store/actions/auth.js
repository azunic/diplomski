import * as actionTypes from './actionTypes';

export const authStart = () => {
  return {
    type: actionTypes.AUTH_START,
  };
};

export const registerSuccess = () => {
  return {
    type: actionTypes.REGISTER_SUCCESS,
  };
};

export const authSuccess = (token) => {
  return {
    type: actionTypes.AUTH_SUCCESS,
    token: token,
  };
};

export const authFail = (error) => {
  return {
    type: actionTypes.AUTH_FAIL,
    error: error,
  };
};

export const errorConfirmed = () => {
  return {
    type: actionTypes.ERROR_CONFIRMED,
  };
};

export const logout = () => {
  return {
    type: actionTypes.AUTH_INITIATE_LOGOUT,
  };
};

export const logoutSucceed = () => {
  return {
    type: actionTypes.AUTH_LOGOUT,
  };
};

export const authRegister = (firstName, lastName, email, password, repeatPassword, username) => {
  return {
    type: actionTypes.AUTH_USER_REGISTER,
    firstName,
    lastName,
    email,
    password,
    repeatPassword,
    username,
  };
};

export const authLogin = (email, password) => {
  return {
    type: actionTypes.AUTH_USER_LOGIN,
    email: email,
    password: password,
  };
};

export const checkAuthTimeout = (expirationTime) => {
  return {
    type: actionTypes.AUTH_CHECK_TIMEOUT,
    expirationTime: expirationTime,
  };
};

export const authCheckState = () => {
  return {
    type: actionTypes.AUTH_CHECK_STATE,
  };
};
