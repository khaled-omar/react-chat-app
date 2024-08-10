import axios from 'axios'
import env from 'react-dotenv'

const httpConfig = {
  baseURL: env.BASE_API_URL,
  timeout: 10000,
  paramsSerializer: {
    indexes: true, // use brackets with indexes
  },
  headers: {
    'Content-Type': 'application/json',
    'Accept-Language': 'en',
    'client-id': env.CLIENT_ID,
    'client-secret': env.CLIENT_SECRET,
  },
}

class HttpClient {
  static async get(url, config) {
    return await axios.get(url, { ...httpConfig, ...config })
  }

  static async post(url, data, config) {
    return await axios.post(url, data, { ...httpConfig, ...config })
  }

  static async delete(url, config) {
    return await axios.delete(url, { ...httpConfig, ...config })
  }

  static async put(url, data, config) {
    return await axios.put(url, data, { ...httpConfig, ...config })
  }

  static async patch(url, data, config) {
    return await axios.patch(url, data, { ...httpConfig, ...config })
  }

  static async request(url, method, data) {
    return await axios.request({
      method: method,
      url: url,
      data: data,
      ...httpConfig,
    })
  }
}

export default HttpClient
