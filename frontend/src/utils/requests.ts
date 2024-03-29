import axios, { AxiosRequestConfig } from 'axios';
import qs from 'qs';
import history from './history';
import { getAuthData } from './storage';

//export const BASE_URL = 'https://dscatalog-production-1c02.up.railway.app';
//process.env.REACT_APP_BACKEND_URL ?? 'http://localhost:8080';

const CLIENT_ID = process.env.REACT_APP_CLIENT_ID ?? 'dscatalog';
const CLIENT_SECRET = process.env.REACT_APP_CLIENT_SECRET ?? 'dscatalog123';

type LoginData = {
  username: string;
  password: string;
};

export const requestBackendLogin = (loginData: LoginData) => {
  const headers = {
    'Content-Type': 'application/x-www-form-urlencoded',
    Authorization: 'Basic ' + window.btoa(`${CLIENT_ID}:${CLIENT_SECRET}`),
  };

  const data = qs.stringify({
    ...loginData,
    grant_type: 'password',
  });

  return axios({
    method: 'POST',
    baseURL: 'https://dscatalog-production-1c02.up.railway.app',
    url: '/oauth/token',
    data: data,
    headers: headers,
  });
};

export const requestBackend = (config: AxiosRequestConfig) => {
  const headers = config.withCredentials
    ? {
        ...config.headers,
        Authorization: 'Bearer ' + getAuthData().access_token,
      }
    : config.headers;

  return axios({
    ...config,
    baseURL: 'https://dscatalog-production-1c02.up.railway.app',
    headers: headers,
  });
};

// interceptors request (antes da requisão fazer algo)

axios.interceptors.request.use(
  (config) => {
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

// interceptors response (depois que vem a resposta fazer algo)

axios.interceptors.response.use(
  (response) => {
    return response;
  },
  (error) => {
    if (error.response.status === 401) {
      history.push('/admin/auth');
    }

    return Promise.reject(error);
  }
);
