import { TOGGLE_THEME } from "../actionType.redux";


// text - white
// blue - 6000 bg


export const toggleTheme = () => {
  const currentTheme = localStorage.getItem("theme") || "light";
  const newTheme = currentTheme === "light" ? "dark" : "light";

  localStorage.setItem("theme", newTheme);

  return {
    type: TOGGLE_THEME,
    payload: newTheme,
  };
};
