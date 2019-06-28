import React from "react";
import './Button.css';

const Button = props => {
    return (
    <div className={`button ${props.modifier || ''}`}
         onClick={props.onClick || (() => {})}>
        {props.label}
    </div>
    )
};

export default Button;
