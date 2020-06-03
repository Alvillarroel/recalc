import React from 'react'
import './ButtonPanel.css';

const ButtonPanel = props => {
  const style = props.style ? {...props.style} : ''
  return (
    <div className="buttonPanel" style={{...style}}>
      {props.children}
    </div>
  );
}

export default ButtonPanel;

