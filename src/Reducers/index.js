import {combineReducers} from "redux";
import { productReducer } from "./productReduces";

const reducers = combineReducers({
    allProducts: productReducer
})

export default reducers;