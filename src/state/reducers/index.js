import {combineReducers} from "redux";
import reducer from "./amount";


const reducers = combineReducers( {
    amount : reducer

})

export default reducers;

