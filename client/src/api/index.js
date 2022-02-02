import axios from 'axios'

const url = 'http://localhost:5000'

export const fetchData = () => axios.get(`${url}/dashboard`)
export const registerUser = (userData) => axios.post(`${url}/user/register`, userData)
export const loginUser = (userData) => axios.post(`${url}/user/login`, userData)