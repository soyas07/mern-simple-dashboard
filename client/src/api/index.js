import axios from 'axios'

const url = 'http://localhost:5000'

export const fetchData = () => axios.get(`${url}/dashboard`, {
    headers: { 'x-access-token': localStorage.getItem('userToken'), },
})
export const register = (userData) => axios.post(`${url}/user/register`, userData)
export const login = (userData) => axios.post(`${url}/user/login`, userData)