import axios from "axios";
import {apiConfig, apiUrl} from "../../components/api/apiReference";
import {GET_RESERVATION} from "../actionTypes";

export function getReservation(id) {
    return async dispatch => {
        try {
            const response = await axios.get(`${apiUrl}/reservations`, apiConfig)

            const data = response.data.results.filter(item => item.restaurant === Number(id));

            dispatch(getReservationSuccess(data))
        } catch (e) {
            console.log(e)
        }
    }
}

export function getReservationSuccess(reservations) {
    return {
        type: GET_RESERVATION,
        reservations
    }
}