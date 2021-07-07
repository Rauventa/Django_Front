import {GET_RESTAURANT_PLACES_SUCCESS} from "../actionTypes";

const initialState = {
    restaurantPlaces: []
};

export default function placesReducer(state = initialState, action) {
    switch (action.type) {
        case GET_RESTAURANT_PLACES_SUCCESS:
            return {
                ...state,
                restaurantPlaces: action.restaurantPlaces
            }
        default:
            return state
    }
}