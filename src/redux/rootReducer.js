import { combineReducers } from "redux";
import Cart from "./cart/reducer";
import Products from "./product/reducer";

export default combineReducers({ Cart, Products });
