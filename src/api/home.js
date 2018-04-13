import axios from "./index.js";

// 获取轮播图接口
export let getSliders = () => {
  return axios.get("/sliders");
};

// 获取课程列表接口
export let getLessons = (limit, offset, type) => {
  return axios.get(`/lessons?limit=${limit}&offset=${offset}&type=${type}`);
};
