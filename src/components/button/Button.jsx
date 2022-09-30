import React from "react";
import clsx from "clsx";
import "./button.style.scss";
const Button = ({ children, primary = false, className = "", ...rest }) => {
  return (
    <button
      className={clsx("Button", primary && "primary", className)}
      {...rest}
    >
      {children}
    </button>
  );
};

export default Button;
