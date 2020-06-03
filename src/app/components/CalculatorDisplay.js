import React, { useState } from 'react'
import './CalculatorDisplay.css';

const CalculatorDisplay = (props) => {
  const {initialValue} = props;
  const [initial, setInitial] = useState(initialValue!==undefined?initialValue:0);
  return (
    <div className="calculator-display">
      <h1 className="display-text">{initial}</h1>
    </div>
  );
}

export default CalculatorDisplay;