import React from "react";
import Container from "../../container/Container";
import "./header.style.scss";
import feature from "../../../assets/images/featured.png";
import controller from "../../../assets/images/controller.png";
import black_xbox from "../../../assets/images/balck_xbox.png";
const Header = () => {
  return (
    <header className="Header">
      <Container>
        <div className="Header__content">
          <div className="Header__details">
            <h1>
              {
                "معرفی سایت با جملات شعاری و تقریبا تو سه خط یا چهار خط بر اساس سایز"
              }
            </h1>
            <p>
              {
                "مطلبی در مورد سیاست های سایت یا تبلیغات یا جمله ای با دو هدف بالا"
              }
            </p>
            <a href="/categories">{"دسته بندی محصولات"}</a>
          </div>
          <div className="Header__gallery">
            <div className="Header__primary_image">
              <img width={"100%"} src={feature} alt="" />
            </div>
            <div className="Header__secondary_image_1">
              <img width={"100%"} src={controller} alt="" />
            </div>
            <div className="Header__secondary_image_2">
              <img width={"100%"} src={black_xbox} alt="" />
            </div>
          </div>
        </div>
      </Container>
    </header>
  );
};

export default Header;
