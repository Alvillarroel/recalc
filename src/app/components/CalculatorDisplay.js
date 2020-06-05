import React from 'react'
import './CalculatorDisplay.css';
import PropTypes from 'prop-types'


const CalculatorDisplay = (props) => {
  return (
    <div className="calculator-display">
      <h1 className="display-text">{props.display}</h1>
    </div>
  );
}

CalculatorDisplay.propTypes = {
  display:PropTypes.string.isRequired
}

export default CalculatorDisplay;