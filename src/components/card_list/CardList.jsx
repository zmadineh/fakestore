import React from "react";
import "./card-list.style.scss";
import clsx from "clsx";
import { Link } from "react-router-dom";
const CardList = ({ children, title, href, className = "" }) => {
  return (
    <div className={clsx("CardList", className)}>
      <div className="CardList__header">
        <h2>{title}</h2>
        <Link to={href}>{"مشاهده همه"}</Link>
      </div>
      <div className="CardList__content">{children}</div>
    </div>
  );
};

export default CardList;
