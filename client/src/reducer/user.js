import { REGISTER_USER, LOGIN_USER, ERROR_REGISTER, ERROR_LOGIN, LOADING, LOADED }  from '../constants/'

const initialState = {
    token: localStorage.getItem('userToken'),
    isAuthenticated: false,
    loading: false
}

export default (state = initialState, action) => {
    switch (action.type) {
        case LOGIN_USER:
            return {
                ...initialState,
                isAuthenticated: true,
                token: action.payload.userToken,
                username: action.payload.username
            }
        case REGISTER_USER:
            return {
                ...initialState,
                status: action.payload.status,
                msg: action.payload.message,
                user: action.payload.user
            }
        case ERROR_LOGIN:
        case ERROR_REGISTER:
            return {
                ...initialState,
                msg: action.payload.message,
                error: action.payload.status,
            }
        case LOADING:
            return {
                ...initialState,
                loading: true
            }
        case LOADED:
            return {
                ...initialState,
            }
        default:
            return state
    }
}