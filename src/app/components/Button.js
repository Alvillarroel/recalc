import React from 'react'
import './Button.css';
import PropTypes from 'prop-types'
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
Button.propTypes={
  name:PropTypes.string.isRequired,
  className:PropTypes.string,
  style:PropTypes.object,
  click:PropTypes.func.isRequired
}
export default Button;

