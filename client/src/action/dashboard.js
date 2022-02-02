import * as api from '../api'
import { FETCH_DATA } from '../constants'

// Action creator
export const getDashboard = () => async (dispatch) => {
    try {
        const { data } = api.fetchData()

        dispatch({ type: FETCH_DATA, payload: data })
    } catch (error) {
        console.log(error);
    }
}

