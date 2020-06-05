import React from 'react'
import './ButtonPanel.css';
import Button from './Button';
import PropTypes from 'prop-types'
const ButtonPanel = props => {
  const handleButtonClick = (btnName) => {
    props.clickHandler(btnName);
  }

  const elements = [{
    name: '7',
    class: ''
  }, {
    name: '8',
    class: ''
  }, {
    name: '9',
    class: ''
  }, {
    name: '4',
    class: ''
  }, {
    name: '5',
    class: ''
  }, {
    name: '6',
    class: ''
  }, {
    name: '1',
    class: ''
  }, {
    name: '2',
    class: ''
  }, {
    name: '3',
    class: ''
  }, {
    name: '0',
    class: ''
  }, {
    name: '.',
    class: ''
  }, {
    name: 'AC',
    class: 'btn-red'
  }]
  return (
    <div>
      <div style={{display:'flex'}}>
        <Button name="+" click={handleButtonClick}/>
        <Button name="-" click={handleButtonClick}/>
        <Button name="x" click={handleButtonClick}/>
        <Button name="÷" click={handleButtonClick}/>
      </div>
      <div style={{display:'flex'}}>
        <div style={{display:'flex',flexFlow:'row wrap',alignContent:'center',width:'75%'}}>
          {elements.map((e,i) => <Button key={i} name={e.name} className={e.class} click={handleButtonClick}/>)}
        </div>
        <div style={{display:'flex',flexFlow:'row wrap',alignContent:'center',width:'22%',margin:'2%'}}>
          <Button name="=" style={{width: '100%',height: '100%'}} className="btn-blue" click={handleButtonClick}/>
        </div>
      </div>
    </div>
  );
}
ButtonPanel.propTypes = {
  clickHandler: PropTypes.func.isRequired
}
export default ButtonPanel;

