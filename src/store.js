import {createStore,applyMiddleware}from "redux";
import thunk from "redux-thunk";
import rootReducer from "./Reducers";


let enhancer = applyMiddleware(thunk);

const {logger} = require ('redux-logger');

enhancer = applyMiddleware(thunk,logger);


export const configureStore=()=>{
    return createStore(rootReducer,enhancer);
};