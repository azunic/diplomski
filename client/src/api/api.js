import axios from './axios';
import {
  USER_SIGNUP,
  USER_LOGIN,
  USER_PROFILE,
  PRODUCTS,
  GET_NAVIGATION,
  BRANDS,
  CATEGORIES,
  USERS,
  WARDROBE,
  POST,
} from './apiRoutes';

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
export const fetchProduct = async (productId) => {
  return await axios.get(`${PRODUCTS}/${productId}`, getToken());
};

// brands
export const fetchBrands = async () => {
  console.log('called brand');
  return await axios.get(BRANDS, getToken());
};
export const fetchBrand = async (brandId) => {
  return await axios.get(`${BRANDS}/${brandId}`, getToken());
};

// get navigation
export const fetchNavigation = async () => {
  return await axios.get(GET_NAVIGATION, getToken());
};

// categories
export const fetchCategories = async () => {
  console.log('called categories');
  return await axios.get(CATEGORIES, getToken());
};

export const fetchCategory = async (categoryId) => {
  return await axios.get(`${CATEGORIES}/${categoryId}`, getToken());
};

export const updateUser = async (user) => {
  return await axios.put(`${USERS}/${user._id}`, user);
};

export const fetchUsers = async () => {
  return await axios.get(USERS, getToken());
};

export const addWardrobeProduct = async (product) => {
  return await axios.post(WARDROBE, product);
};

export const addPost = async (post) => {
  return await axios.post(POST, post);
};

export const addProduct = async (product) => {
  return await axios.post(PRODUCTS, product);
};
