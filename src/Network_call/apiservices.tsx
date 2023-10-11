import axios, { AxiosRequestConfig, AxiosResponse } from 'axios';

const axiosInstance = axios.create({
  baseURL: process.env.REACT_APP_API_BASE_URL, // Set your API base URL here
  timeout: 1000 * 60 * 2
});

axiosInstance.interceptors.request.use(
  (config) => {
    // const token123 = window.sessionStorage.getItem('@userToken');
    const token = token123;
    config.headers['Access-Control-Allow-Origin'] = '*';
    if (token) {
      config.headers.Authorization = token;
    }
    return config;
  },
  (error) => {
    console.error('Request error:', error);
    return Promise.reject(error);
  }
);

axiosInstance.interceptors.response.use(
  (response) => response.data,
  (error) => {
    console.error('Response error:', error);
    return Promise.reject(error);
  }
);

const getFormData = (object: Record<string, any>): FormData => {
  const formData = new FormData();
  for (const key in object) {
    if (object.hasOwnProperty(key)) {
      formData.append(key, object[key]);
    }
  }
  return formData;
};

const ApiServices = async (
  method: string,
  url: string,
  data: any = null,
  formData = false,
  headers: Record<string, any> = {}
): Promise<any> => {
  const config: AxiosRequestConfig = {
    method: method.toLowerCase(),
    url,
    headers
  };
  if (method.toLowerCase() === 'get' && formData) {
    config.data = formData;
  } else if (method.toLowerCase() === 'get' && data) {
    config.params = data;
  } else if (method.toLowerCase() === 'post') {
    config.data = formData ? getFormData(data) : data;
  } else if (method.toLowerCase() === 'put') {
    config.data = formData ? getFormData(data) : data;
  } else if (method.toLowerCase() === 'delete') {
    config.data = formData ? getFormData(data) : data;
  }

  try {
    const response: AxiosResponse = await axiosInstance(config);
    return response;
  } catch (error) {
    if (error.response) {
      if (error.response.status === 409) {
        alert(error.response.data.message);
      }

      if (error.response.status === 502 || error.response.status === 404) {
        // Handle 502 and 404 errors as needed
      }
      return error.response.data;
    }

    if (error.code === 'ECONNABORTED') {
      // Handle timeout error as needed
      return { status: 400 };
    }

    // Handle other errors
    return { status: 400 };
  }
};

export default ApiServices;

const token123 =
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJmdWxsX25hbWUiOiJBZG1pbiIsImVtYWlsIjoiYWRtaW5zQHlvcG1haWwuY29tIiwiaWQiOiI2NTFiZjQ5MWFmMmIzNDViNjM4NzBmZTQiLCJ0eXBlIjoidG9rZW4iLCJpYXQiOjE2OTcwNDE0MDAsImV4cCI6MTY5OTYzMzQwMH0.taZGdSSO-YW32vFg-ySlnFctjrdpfdVd8NvSCSfs93E';
