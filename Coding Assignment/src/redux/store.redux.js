import { legacy_createStore, applyMiddleware } from "redux";
import { rootReducer } from "./rootReducer.redux";
import {thunk} from "redux-thunk";
export const store = legacy_createStore(rootReducer, applyMiddleware(thunk));