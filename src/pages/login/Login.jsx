import {Link} from "react-router-dom";
import React from "react";
import SignUp from "../../components/signUp/SignUp";
import SignIn from "../../components/signIn/SignIn";
import Container from "../../components/container/Container";
import './login.style.scss';

const Login = () => {

    return (
        <div className={'Login'}>
            <Container>

                <div className={'Login__header'}>
                    <Link to={'/'}>{" < برگشت به صفحه قبل"}</Link>
                </div>

                <div className={'Login__content'}>
                    <SignUp ></SignUp>
                    <SignIn ></SignIn>
                </div>

            </Container>
        </div>
    )
}

export default Login;