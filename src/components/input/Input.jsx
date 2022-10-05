import React from "react";
import clsx from "clsx";
import "./input.style.scss";

const Input = ({ ...rest }) => {
    return (
        <input className={'Input'} {...rest} />

            // className={clsx("Button", primary && "primary", className)}
            //{children}

    );
};

export default Input;
