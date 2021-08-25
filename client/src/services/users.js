import axios from 'axios'
import { apiUrl } from '../api'

const baseUrl = `${apiUrl}/users`;

const login = (credentials) => {
    const loginUrl = `${baseUrl}/login`

    const data = {
        "email": credentials.email,
        "password": credentials.password
      }

    const response = axios.post(loginUrl, data).then(response => response.data.success)
    return response
}

const register = (userData) => {
    const registerUrl = `${baseUrl}/register`

    const response = axios.post(registerUrl, userData)
    return response
}

export default {
    login,
    register
}