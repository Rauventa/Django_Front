import {GET_RESTAURANT_SUCCESS, GET_RESTAURANTS_SUCCESS} from "../actionTypes";

const initialState = {
    restaurants: [],
    restaurant: {}
};

export default function restaurantsReducer(state = initialState, action) {
    switch (action.type) {
        case GET_RESTAURANTS_SUCCESS:
            return {
                ...state,
                restaurants: action.restaurants
            }
        case GET_RESTAURANT_SUCCESS:
            return {
                ...state,
                restaurant: action.restaurant
            }
        default:
            return state
    }
}