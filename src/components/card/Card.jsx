import React from "react";
import Button from "../button/Button";
import "./button.style.scss";
const Card = ({ image, name, price, onClick }) => {
  return (
    <div className="Card">
      <img className="Card__image" src={image} alt="" />
      <h2 className="Card__title">{name}</h2>
      <p className="Card_price">{`${price} تومان`}</p>
      <div className="Card__btn">
        <Button onClick={onClick}>{"خرید"}</Button>
      </div>
    </div>
  );
};

export default Card;
