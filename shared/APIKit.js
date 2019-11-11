import axios from 'axios';

// Create axios client, pre-configured with baseURL
let APIKit = axios.create({
  baseURL: 'https://app.touchbase.se',
  timeout: 10000,
});

// Set JSON Web Token in Client to be included in all calls
export const setClientToken = token => {
  APIKit.interceptors.request.use(function(config) {
    config.headers.Authorization = `Bearer ${token}`;
    return config;
  });
};

export default APIKit;
