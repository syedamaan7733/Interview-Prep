import { TOGGLE_THEME } from "../actionType.redux";

TOGGLE_THEME
const initialTheme = localStorage.getItem("theme") || "light";

const initialState = {
  theme: initialTheme,
};

const themeReducer = (state = initialState, action) => {
  switch (action.type) {
    case TOGGLE_THEME:
      return {
        ...state,
        theme: action.payload,
      };

    default:
      return state;
  }
};

export default themeReducer;
