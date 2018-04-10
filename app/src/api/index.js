import axios from 'axios';

const host = 'http://localhost:3000';
const login = (userName, password) => {
    return axios.post(host + '/api/user/login', {userName, password})
}

const register = (nichName, password) => {
    return axios.post(host + '/api/user/register', {nichName, password})
}

export {
    login,
    register,
}
