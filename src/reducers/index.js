import convertReducer from "./convertReducer";
import { combineReducers } from "redux";

const rootReducer = combineReducers({
    conversor: convertReducer
})

export default rootReducer;