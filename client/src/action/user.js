import * as api from '../api'
import { REGISTER_USER, LOGIN_USER, ERROR_LOGIN, ERROR_REGISTER } from '../constants'

export const registerUser = (userData) => async (dispatch) => {
    try {
        const { data } = await api.register(userData)

        if (data.status === 'error') dispatch({ type: ERROR_REGISTER, payload: data })
        else dispatch({ type: REGISTER_USER, payload: data })
    } catch (error) {
        console.log(error);
    }
}

export const loginUser = (userData) => async (dispatch) => {
    try {
        const { data } = await api.login(userData)

        if (data.status === 'error') dispatch({ type: ERROR_LOGIN, payload: data })
        else {
            localStorage.setItem('userToken', data.userToken)
            dispatch({ type: LOGIN_USER, payload: data })
        }
    } catch (error) {
        console.log(error);
    }
}