const initialAuthReducer = {
  isLogin: false,
  token: "",
  firstName: "",
  lastName: "",
  username: "",
};

function authReducer(state = { ...initialAuthReducer }, action) {
  const { type, payload } = action;
  switch (type) {
    case authActions.login: {
      return {
        isLogin: true,
        token: payload.token,
        firstName: payload.firstName,
        lastName: payload.lastName,
        username: payload.username,
      };
    }
    case authActions.logout: {
      return {
        isLogin: false,
        token: "",
        firstName: "",
        lastName: "",
        username: "",
      };
    }
    default: {
      throw new Error("action not found");
    }
  }
}
const authActions = {
  login: "LOGIN",
  logout: "LOGOUT",
};

export { authActions, authReducer, initialAuthReducer };
