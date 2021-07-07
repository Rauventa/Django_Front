import {combineReducers} from "redux";
import restaurantsReducer from "./restaurantsReducer";
import placesReducer from "./placesReducer";

export default combineReducers({
    restaurantsReducer: restaurantsReducer,
    placesReducer: placesReducer
})