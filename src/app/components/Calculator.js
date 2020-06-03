import React from 'react';
import './Calculator.css';
import CalculatorDisplay from './CalculatorDisplay';
const Calculator = props => {
  return(
    <div>
      <CalculatorDisplay initialValue={props.initialValue}/>
      {props.children}
    </div>
  );
}

export default Calculator;