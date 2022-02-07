import { REGISTER_USER, LOGIN_USER, ERROR_REGISTER, ERROR_LOGIN }  from '../constants/'

const initialState = {
    token: localStorage.getItem('userToken'),
    isAuthenticated: false,
}

export default (state = initialState, action) => {
    switch (action.type) {
        case LOGIN_USER:
            return {
                isAuthenticated: true,
                token: action.payload.userToken
            }
        case REGISTER_USER:
            return {
                status: action.payload.status,
                msg: action.payload.message,
                user: action.payload.user
            }
        case ERROR_LOGIN:
        case ERROR_REGISTER:
            return {
                msg: action.payload.message,
                error: action.payload.status,
                isAuthenticated: false
            }
        default:
            return state
    }
}