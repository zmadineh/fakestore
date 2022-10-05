import React from "react";
import Button from "../button/Button";
import "./card.style.scss";
import {Link} from "react-router-dom";

const Card = ({id, image, name, price, onClick }) => {
  return (
    <div className="Card">
      <img className="Card__image" src={image} alt="" />
      <h2 className="Card__title">{name}</h2>
      <p className="Card_price">{`${price} تومان`}</p>
      <div className="Card__btn">
          <Button onClick={onClick}><Link to={`/single-item/${id}`}>{"خرید"}</Link></Button>
      </div>
    </div>
  );
};

export default Card;
