import React from 'react'
import './CalculatorDisplay.css';

const CalculatorDisplay = (props) => {
  return (
    <div className="calculator-display">
      <h1 className="display-text">{props.display || "0"}</h1>
    </div>
  );
}

export default CalculatorDisplay;