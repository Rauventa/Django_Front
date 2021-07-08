import {combineReducers} from "redux";
import restaurantsReducer from "./restaurantsReducer";
import placesReducer from "./placesReducer";
import reservationReducer from "./reservationReducer";

export default combineReducers({
    restaurantsReducer: restaurantsReducer,
    placesReducer: placesReducer,
    reservationReducer: reservationReducer
})