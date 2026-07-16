import axios from 'axios';

const api = axios.create({
  baseURL: 'http://127.0.0.1:8000' // Sustituye esto por la URL real de tu API
});

api.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem('token');
    if (token) {
      config.headers.Authorization = token;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

export default api;