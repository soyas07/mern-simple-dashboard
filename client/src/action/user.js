import * as api from '../api'
import { REGISTER_USER, LOGIN_USER } from '../constants'

export const registerUser = (userData) => async (dispatch) => {
    try {
        const user = await api.registerUser(userData)

        dispatch({ type: REGISTER_USER, payload: user })
    } catch (error) {
        console.log(error);
    }
}

export const loginUser = (userData) => async (dispatch) => {
    try {
        const { data } = await api.loginUser(userData)

        dispatch({ type: LOGIN_USER, payload: data })
    } catch (error) {
        console.log(error);
    }
}