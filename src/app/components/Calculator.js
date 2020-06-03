import React, { Component, useState } from 'react'
import './Calculator.css';

const Calculator = (props) => {
  const {initialValue} = props;
  const [initial, setInitial] = useState(initialValue!==undefined?initialValue:0);
  return (
    <div className="calculator">
      <h1>{initial}</h1>
    </div>
  );
}

export default Calculator;