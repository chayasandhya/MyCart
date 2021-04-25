import { combineReducers } from "redux";
import { LoginReducer } from "./LoginRegister";
import { ProductReducer } from "./ProductCart";

export const rootReducer = combineReducers({ LoginReducer, ProductReducer });
