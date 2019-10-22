import axios from 'axios'
// import $store from '@/store/index'

// create an axios instance
const baseConfig = {
  baseURL: process.env.VUE_APP_BASE_API, // api的base_url
  withCredentials: true,
  timeout: 10000, // request timeout
  headers: {
    'Content-Type': 'application/x-www-form-urlencoded',
    Accept: 'application/json'
  }
}

const service = axios.create(baseConfig)

// request interceptor
service.interceptors.request.use(
  config => {
    // Do something before request is sent
    return config
  },
  error => {
    // Do something with request error
    console.log(error) // for debug
    Promise.reject(error)
  }
)

// respone interceptor
service.interceptors.response.use(
  response => {
    return response
  },
  error => {
    console.log('err' + error) // for debug
    return Promise.reject(error)
  }
)

export default service
