import React from "react";
import "./badge.style.scss";
const Badge = ({ children, title }) => {
  return (
    <div className="Badge">
      <div className="Badge__title">{title}</div>
      <div className="Badge__content">{children}</div>
    </div>
  );
};

export default Badge;
