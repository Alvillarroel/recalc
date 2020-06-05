import React, { useState, useEffect } from 'react';
import './Calculator.css';
import CalculatorDisplay from './CalculatorDisplay';
import ButtonPanel from './ButtonPanel';
import { calculate } from '../functions/Operations';
const Calculator = props => {
  const [state, setState] = useState({
    total: props.initialValue ? props.initialValue : null,
    next: null,
    operation: null,
  });

  /**
   * Functions that update state according to button press
   * @param {string} buttonName 
   */
  const handleCalculate = buttonName => {
    setState(calculate(state, buttonName));
  };

  return(
    <div>
      <CalculatorDisplay display={state.next || state.total}/>
      <ButtonPanel clickHandler={handleCalculate}/>
    </div>
  );
}

export default Calculator;