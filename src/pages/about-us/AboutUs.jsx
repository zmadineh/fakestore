import React from "react";
import InputForm from "../../components/input-form/InputForm";
import {aboutUs} from "../../data/aboutUs";
import Button from "../../components/button/Button";
import Container from "../../components/container/Container";
import {Link} from "react-router-dom";

const AboutUs = () => {
    const inputChange = () => {

    }

  return (
      <div className={'AboutUs'}>
          <Container>

              <div className={'Login__header'}>
                  <Link to={'/'}>{" < برگشت به صفحه قبل"}</Link>
              </div>
              
            <InputForm title={'لطفا مشخصات خود را جهت تحویل کالا تایید نمایید.'} inputs={aboutUs} inputChange={inputChange} />
            <Button className={'AboutUs_btn'} primary={true} onClick={inputChange}>{'پرداخت'}</Button>
          </Container>
      </div>
  )
};

export default AboutUs;
