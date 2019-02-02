import axios from 'axios'
import Store from '../store'
import baseURL from '../../config/index'
const axio = axios.create({
  baseURL: process.env.BASE_API,
  timeout: 0,
  // withCredentials: true // 允许携带cookie
})
// 添加请求拦截器
axio.interceptors.request.use((config) => {
  config.headers.post['Content-Type']='application/json;charse=UTF-8'
    // 带上用户token
  const authToken = sessionStorage.getItem('token')
  if (authToken) {
    config.headers['Authorization'] = 'Bearer ' + authToken
  }
  let reqUrl = baseURL.server.dev + config.url
  config.url = reqUrl;
  console.log('config', config)
  return config
})
// http response 拦截器 
axio.interceptors.response.use(response => response, (err) => {
  console.log('axios--', err.response.status)
  if (err && err.response) {
    switch (err.response.status) {
      case 400:
        err.message = '请求错误'
        break

      case 401:
        err.message = '未授权，请登录'
        location.href = LOGINPATH
        break

      case 403:
        err.message = '拒绝访问'
        location.href = LOGINPATH
        break

      case 404:
        err.message = `请求地址出错: ${err.response.config.url}`
        break

      case 408:
        err.message = '请求超时'
        break

      case 500:
        err.message = '服务器内部错误'
        break

      case 501:
        err.message = '服务未实现'
        break

      case 502:
        err.message = '网关错误'
        break

      case 503:
        err.message = '服务不可用'
        break

      case 504:
        err.message = '网关超时'
        break

      case 505:
        err.message = 'HTTP版本不受支持'
        break

      default:
    }
  } else if (err.message === 'Network Error') {
    err.message = '网络错误，请稍后再试！'
  }
  if (err && err.response && err.response.data && err.response.data.message) {
    err.message = err.response.data.message
  }
  warn(err.message)
  return Promise.reject(err)
})
export default axio