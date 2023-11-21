import axios, { AxiosInstance } from 'axios';

export const api = (): AxiosInstance => {
  const instance = axios.create({
    baseURL: 'http://localhost:3005', //MOCKED AS IN TASK DESCRIPTION
    headers: {
      'Content-Type': 'application/json',
    },
  });

  instance.interceptors.request.use(config => {
    config.headers['x-api-key'] = 'thisisapikey'; //Should be moved to .env
    return config;
  });

  return instance;
};
