import axios from 'axios'
import {apiConfig, apiUrl} from "../../components/api/apiReference";
import {GET_RESTAURANT_SUCCESS, GET_RESTAURANTS_SUCCESS} from "../actionTypes";

export function getRestaurants() {
    return async dispatch => {
        try {
            const response = await axios.get(`${apiUrl}/restaurants`, apiConfig);

            dispatch(getRestaurantsSuccess(response.data.results))
        } catch (e) {
            console.log(e)
        }
    }
}

export function getRestaurantsSuccess(restaurants) {
    return {
        type: GET_RESTAURANTS_SUCCESS,
        restaurants
    }
}

export function getRestaurant(id) {
    return async dispatch => {
        try {
            const response = await axios.get(`${apiUrl}/restaurants/${id}`, apiConfig);

            dispatch(getRestaurantSuccess(response.data))
        } catch (e) {
            console.log(e)
        }
    }
}

export function getRestaurantSuccess(restaurant) {
    return {
        type: GET_RESTAURANT_SUCCESS,
        restaurant
    }
}