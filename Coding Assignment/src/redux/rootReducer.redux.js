import { combineReducers } from "redux";
import { authReducer } from "./reducers/auth.reducer";
import productReducer from "./reducers/prodcut.reducer";
import themeReducer from "./reducers/theme.reducer";

export const rootReducer = combineReducers({
  products: productReducer,
  auth: authReducer,
  theme: themeReducer,
});
