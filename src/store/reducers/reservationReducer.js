import {GET_RESERVATION} from "../actionTypes";

const initialState = {
    reservations: [],
    allReservations: []
};

export default function reservationReducer(state = initialState, action) {
    switch (action.type) {
        case GET_RESERVATION:
            return {
                ...state,
                reservations: action.reservations
            }
        default:
            return state
    }
}