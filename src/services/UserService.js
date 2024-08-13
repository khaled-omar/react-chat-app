import HttpClient from '../utils/HttpClient'
import {toast} from "material-react-toastify";

class UserService {
    static async register(data, onSuccess, onError) {
        await HttpClient.post('/auth/register', data)
            .then((response) => onSuccess(response))
            .catch((error) => onError(error.response.data))
    }

    static async login(data, onSuccess, onError) {
        await HttpClient.post('/auth/login', data)
            .then((response) => onSuccess(response.data))
            .catch((error) => onError(error.response.data))
    }

    static async forgetPassword(data) {
        return await HttpClient.post('/auth/forgot-password', data)
            .then(() => toast.success('Reset password email sent to your email address'))
            .catch((error) => toast.error(error.response.data?.status?.errors))
    }
}

export default UserService
