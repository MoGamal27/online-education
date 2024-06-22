import React from 'react';
import './Button.css';

const Button = ({ onClick, children, className }) => (
  <button className={className} onClick={onClick}>
    {children}
  </button>
);

export default Button;
