import axios from './axios';
import { USER_SIGNUP, USER_LOGIN, USER_PROFILE, PRODUCTS, GET_NAVIGATION } from './apiRoutes';

const getToken = () => {
  return { headers: { Authorization: `${localStorage.getItem('token')}` } };
};

//auth
export const signup = async (authData) => {
  return await axios.post(USER_SIGNUP, authData);
};
export const login = async (authData) => {
  return await axios.post(USER_LOGIN, authData);
};
export const fetchUserProfile = async () => {
  return await axios.get(USER_PROFILE, getToken());
};

// products
export const fetchProducts = async () => {
  return await axios.get(PRODUCTS, getToken());
};

// get navigation
export const fetchNavigation = async () => {
  return await axios.get(GET_NAVIGATION, getToken());
};
