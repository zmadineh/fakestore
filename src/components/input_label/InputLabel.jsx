import React from "react";
import clsx from "clsx";
import "./input-label.style.scss";

const InputLabel = ({name, title, necessary = false }) => {
    return (
        <div className={'InputLabel'}>
            <label className={'label__title'} htmlFor={name}>{title}</label>
            <label className={'label__necessary'} htmlFor={name}>{necessary ? '*' : ''}</label>
        </div>
    );
};

export default InputLabel;
