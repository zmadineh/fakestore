import React, { useContext } from "react";
import Button from "../../components/button/Button";
import { fakeLogin } from "../../db";
import "./login.style.scss";
import { Navigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import {login, loginUserAsync} from "../../toolkit/slices/auth.slice";

const Login = () => {

  const isLogin = useSelector((state) => state.auth.isLogin);
  const dispatch = useDispatch();
  const handleSubmit = (e) => {
    e.preventDefault();
    const form_data = new FormData(e.target);
    const data = Object.fromEntries(form_data.entries());
    dispatch(loginUserAsync(data));

  //   fakeLogin(data.username, data.password)
  //     .then((data) => {
  //       dispatch(login(data));
  //     })
  //     .catch((e) => {
  //       console.log(e);
  //     });
   };
  // if (isLogin) {
  //   return <Navigate to={"/"} />;
  // }

  return (
    <div className="Login">
      <div className="Login__container">
        <form onSubmit={handleSubmit}>
          {/*{error && <div></div>}*/}
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
