import axios from 'axios'
import {apiConfig, apiUrl} from "../../components/api/apiReference";
import {GET_RESTAURANT_PLACES_SUCCESS} from "../actionTypes";

export function getRestaurantPlaces(id) {
    return async dispatch => {
        try {
            const response = await axios.get(`${apiUrl}/places`, apiConfig);

            const filtered = response.data.results.filter(item => item.restaurant === Number(id))

            dispatch(getRestaurantPlacesSuccess(filtered))
        } catch (e) {
            console.log(e)
        }
    }
}

export function getRestaurantPlacesSuccess(restaurantPlaces) {
    return {
        type: GET_RESTAURANT_PLACES_SUCCESS,
        restaurantPlaces
    }
}