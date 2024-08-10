import HttpClient from '../utils/HttpClient'

class UserService {
  static async login(data, onSuccess, onError) {
    await HttpClient.post('/auth/login', data)
      .then((response) => onSuccess(response.data))
      .catch((error) => onError(error.response.data))
  }

  static async register(data, onSuccess, onError) {
    await HttpClient.post('/auth/register', data)
      .then((response) => onSuccess(response))
      .catch((error) => onError(error.response.data))
  }
}

export default UserService
