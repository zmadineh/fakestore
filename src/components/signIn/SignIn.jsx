import InputForm from "../input-form/InputForm";
import {signInInputs} from "../../data/signInInputs";
import Button from "../button/Button";
import './sign-in.style.scss';

const SignIp = () => {

    const inputChange = (e) =>{
        console.log(e.target.value)
    }

    const signInClick = () => {
        console.log('sign in')
    }

    return (
        <div className={'signIn'}>
            <InputForm title={'ثبت نام کرده اید؟ وارد شوید.'} inputs={signInInputs} inputChange={inputChange} />
            <Button className={'signIn_btn'} primary={true} onClick={signInClick}>{'ورود'}</Button>
        </div>
    )

}

export default SignIp;