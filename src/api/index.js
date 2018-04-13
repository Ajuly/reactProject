import axios from "axios";

// res.data
axios.defaults.baseURL = "http://localhost:3000";
// 请求允许携带cookie
axios.defaults.withCredentials = true;
axios.interceptors.response.use(function(res) {
  return res.data;
});

export default axios;