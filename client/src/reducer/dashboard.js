import { FETCH_DATA, LOADING, LOADED }  from '../constants/'

const initialState = {
    status: null,
    getData: null,
    isLoading: false
}

export default (dashboardData = initialState, action) => {
    switch (action.type) {
        case FETCH_DATA:
            return {
                ...initialState,
                status: action.payload.status,
                getData: action.payload.getData
            }
        case LOADING:
            return {
                ...initialState,
                isLoading: true,
            }
        case LOADED:
            return {
                ...initialState,
                isLoading: false,
            }
        default:
            return dashboardData
    }
}