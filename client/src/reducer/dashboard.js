import { FETCH_DATA }  from '../constants/'

export default (dashboardData = [], action) => {
    switch (action.type) {
        case FETCH_DATA:
            return action.payload
        default:
            return dashboardData
    }
}