import {
  LOGIN_REQUEST,
  LOGIN_SUCCESS,
  LOGIN_FAILURE,
  LOGOUT,
} from "../actionType.redux";
export const loginRequest = () => ({
  type: LOGIN_REQUEST,
});

export const loginSuccess = (user) => ({
  type: LOGIN_SUCCESS,
  payload: user,
});

export const loginFailure = (error) => ({
  type: LOGIN_FAILURE,
  payload: error,
});

export const logout = () => ({
  type: LOGOUT,
});

export const login = (credentials) => {
  return async (dispatch) => {
    dispatch(loginRequest());
    try {
      //   api calling ....
      await new Promise((resolve) => setTimeout(resolve, 1000));

      if (credentials.username && credentials.password) {
        // HEre will some logic related checking
        const user = {
          id: 1,
          username: credentials.username,
          name: "Demo User",
        };
        localStorage.setItem("user", JSON.stringify(user));
        dispatch(loginSuccess(user));
      } else {
        throw new Error("Invalid credentials");
      }
    } catch (error) {
      dispatch(loginFailure(error.message));
    }
  };
};

// Logout
export const logoutUser = () => {
  return (dispatch) => {
    localStorage.removeItem("user");
    dispatch(logout());
  };
};
