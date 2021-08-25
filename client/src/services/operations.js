import axios from 'axios'
import { apiUrl } from '../api'

const baseUrl = `${apiUrl}/operations`;

let token = null

const setToken = newToken => {
    token = newToken
}



const getAll = () => {
    const config = {
        headers: { "user-token": token}
    }
    const response = axios.get(baseUrl, config).then(response => response.data)
    return response
}

const create = (operationData) => {
    const config = {
        headers: { "user-token": token}
    }
    const response = axios.post(baseUrl, operationData, config).then(response => response.data)
    return response
}

const edit = (newOp) => {
    const config = {
        headers: { "user-token": token}
    }
    const editUrl = `${baseUrl}/${newOp.idOperation}`
    const response = axios.put(editUrl, newOp, config).then(response => response.data)
    return response
}

export default {
    create,
    setToken,
    getAll,
    edit
}