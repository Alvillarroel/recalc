import React from 'react'
import './Button.css';

const Button = props => {
  const classes = props.className ? `btn ${props.className}`: 'btn btn-gray';
  const style = props.style ? {...props.style} : '';
  return (
    <div className="btn-flex" style={{...style}}>
      <button className={classes} onClick={props.onClick}>{props.name}</button>
    </div>
  );
}

export default Button;

