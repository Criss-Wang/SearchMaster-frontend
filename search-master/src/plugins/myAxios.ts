import axios from "axios";

const instance = axios.create({
  baseURL: "http://localhost:8102/api",
  timeout: 10000,
  headers: {},
});

// add response interceptor
instance.interceptors.response.use(
  function (response) {
    // 2xx code
    const data = response.data;
    if (data.code === 0) {
      return data.data;
    }
    console.error("request error", data);
    return response.data;
  },
  function (error) {
    // response code beyong 2xx
    return Promise.reject(error);
  }
);

export default instance;
