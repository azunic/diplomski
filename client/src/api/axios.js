import axios from 'axios';
import { APP_BASE_URL } from './apiRoutes';

const axiosInstance = axios.create({
  baseURL: APP_BASE_URL,
});

export default axiosInstance;
