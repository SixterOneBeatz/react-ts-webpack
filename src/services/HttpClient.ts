import axios, { AxiosRequestConfig } from 'axios';

axios.defaults.baseURL = process.env.API_URL;
axios.interceptors.request.use(
  config => {
    const TOKEN: string | null = '';
    if (TOKEN !== null) {
      config.headers = {
        Authorization: `bearer ${TOKEN}`,
      };
    }
    return config;
  },
  error => Promise.reject(error)
);

const Client = {
  get<T>(url: string, config?: AxiosRequestConfig) {
    return axios.get<T>(url, config);
  },
  post<T>(url: string, body?: any, config?: AxiosRequestConfig) {
    return axios.post<T>(url, body, config);
  },
  put<T>(url: string, body?: any, config?: AxiosRequestConfig) {
    return axios.put<T>(url, body, config);
  },
  delete<T>(url: string, config?: AxiosRequestConfig) {
    return axios.delete<T>(url, config);
  },
};

export default Client;
