import {signUpInputs} from "../../data/signUpInputs";
import './sign-up.style.scss';
import Button from "../button/Button";
import InputForm from "../input-form/InputForm";

const SignUp = () => {

    const inputChange = (e) => {
        console.log(e.target.value)
    }

    const signUpClick = () => {
        console.log('sign up')
    }

    return (
        <div className={'signUp'}>
            <InputForm title={'لطفا مشخصات خود را جهت ثبت نام وارد نمایید.'} inputs={signUpInputs} inputChange={inputChange} />
            <Button className={'signUp_btn'} primary={true} onClick={signUpClick}>{'ثبت نام'}</Button>
        </div>
    )
}

export default SignUp;