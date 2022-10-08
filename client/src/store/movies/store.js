

import {createStore, combineReducers} from "redux";

import { reducer  as moviesReducer }  from "./reducer.js";
import {reducer as authReducer}  from "../auth/reducer.js";


const rootReducer=combineReducers({
    auth:authReducer,
    app:moviesReducer
})



export const store=createStore(rootReducer);

console.log(store.getState())