import * as api from '../api'
import { FETCH_DATA, LOADING, LOADED } from '../constants'

// Action creator
export const getDashboard = () => async (dispatch) => {
    try {
        dispatch({ type: LOADING })
        const { data }= await api.fetchData()
        dispatch({ type: LOADED })
        dispatch({ type: FETCH_DATA, payload: data })
    } catch (error) {
        console.log(error);
    }
}

