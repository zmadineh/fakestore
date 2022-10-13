import React from "react";
import { authReducer, initialAuthReducer } from "./auth.reducer";

export const AuthContext = React.createContext({
  auth: { ...initialAuthReducer },
  authDispatch: () => {},
});
const AuthProvider = ({ children }) => {
  const [auth, authDispatch] = React.useReducer(authReducer, {
    ...initialAuthReducer,
  });
  return (
    <AuthContext.Provider
      value={{
        auth,
        authDispatch,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
