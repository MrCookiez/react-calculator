import React from 'react';
import './../assets/dev/button.scss';

const isOperator = val => {
    return !isNaN(val) || val === '.' || val === "=";
};

const Button = props => (
    <div className={`button ${
        isOperator(props.children) ? null : "operator"
    }`}
    
    onClick={() => props.handleClick(props.children)}>
        {props.children}
    </div>
);

export default Button;