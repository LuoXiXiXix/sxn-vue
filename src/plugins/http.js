import axios from "axios";
import Vue from 'vue'
// import { config } from "vue/types/umd";

const instance = axios.create({
  // 请求地址
  baseURL:"https://cnodejs.org/api/v1",

  timeout:2000,
})

// 请求拦截器
instance.interceptors.request.use((config) => {
  // 请求头配置
  return config
})

// 响应器拦截
instance.interceptors.response.use((res) => {
  return res.data
})


// Vue.prototype.$http = instance

export default instance