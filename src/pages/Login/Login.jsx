import React, { useContext } from "react";
import Button from "../../components/button/Button";
import { fakeLogin } from "../../db";
import { authActions } from "../../context/auth/auth.reducer";
import "./login.style.scss";
import { AuthContext } from "../../context/auth/AuthProvider";
import { Navigate } from "react-router-dom";
const Login = () => {
  const { authDispatch, auth } = useContext(AuthContext);
  const handleSubmit = (e) => {
    e.preventDefault();
    const form_data = new FormData(e.target);
    const data = Object.fromEntries(form_data.entries());
    fakeLogin(data.username, data.password)
      .then((data) => {
        authDispatch({
          type: authActions.login,
          payload: data,
        });
      })
      .catch((e) => {
        console.log(e);
      });
  };
  if (auth.isLogin) {
    return <Navigate to={"/"} />;
  }
  return (
    <div className="Login">
      <div className="Login__container">
        <form onSubmit={handleSubmit}>
          <div>
            <label htmlFor="username">نام کاربری:</label>
            <input type="text" name="username" id="username" />
          </div>
          <div>
            <label htmlFor="password">کلمه عبور:</label>
            <input type="password" name="password" id="password" />
          </div>
          <div>
            <Button className="Login__submit" type="submit">
              ورود
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
