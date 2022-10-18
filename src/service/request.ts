import axios from 'axios'
import type { AxiosInstance, AxiosRequestConfig } from 'axios'

import { BASE_URL, TIMEOUT } from './config'
class ZQRequest {
  instance: AxiosInstance
  constructor(baseURL: string, timeout: number) {
    this.instance = axios.create({ baseURL, timeout })
    this.instance.interceptors.response.use((data) => data.data)
  }
  request(config: AxiosRequestConfig) {
    return this.instance.request(config)
  }
  get(config: AxiosRequestConfig) {
    return this.request({ ...config, method: 'GET' })
  }
  post(config: AxiosRequestConfig) {
    return this.request({ ...config, method: 'POST' })
  }
}

export default new ZQRequest(BASE_URL, TIMEOUT)
