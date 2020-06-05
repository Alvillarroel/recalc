import React from 'react'
import './Button.css';

const Button = props => {
  const classes = props.className ? `btn ${props.className}`: 'btn btn-gray';
  const style = props.style ? {...props.style} : '';
  const handleClick = () => {
    props.click(props.name);
  };
  return (
    <div className="btn-flex" style={{...style}}>
      <button className={classes} onClick={handleClick}>{props.name}</button>
    </div>
  );
}

export default Button;

