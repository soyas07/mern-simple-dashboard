import { REGISTER_USER, LOGIN_USER }  from '../constants/'

export default (userData = [], action) => {
    switch (action.type) {
        case REGISTER_USER:
            return action.payload
        case LOGIN_USER:
            return action.payload.userToken ? localStorage.setItem('userToken', action.payload.userToken) : action.payload
        default:
            return userData
    }
}