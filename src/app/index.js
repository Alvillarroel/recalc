import React, { useState } from "react";
import {render} from "react-dom";

import './index.css';
import Calculator from "./components/Calculator";
import ButtonPanel from "./components/ButtonPanel";
import Button from './components/Button'

const App = () => {
  const handleButtonClick = () => {
    console.log('click buttonHandle');
  }
  const [value, setValue] = useState(0);
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
    <div className="container-calculator">
      <Calculator initialValue="12">
        <ButtonPanel>
          <Button name="+" onClick={handleButtonClick}/>
          <Button name="-" onClick={handleButtonClick}/>
          <Button name="x" onClick={handleButtonClick}/>
          <Button name="%" onClick={handleButtonClick}/>
        </ButtonPanel>
        <div style={{display:'flex'}}>
          <ButtonPanel style={{display:'flex',flexFlow:'row wrap',alignContent:'center',width:'75%'}}>
            {elements.map(e => <Button name={e.name} className={e.class} onClick={()=>setValue(e)}/>)}
          </ButtonPanel>
          <ButtonPanel style={{display:'flex',flexFlow:'row wrap',alignContent:'center',width:'24%',padding:'0.5% 1% 1% 0.5%'}}>
            <Button name="=" style={{width: '100%',height: '100%'}} className="btn-blue" onClick={handleButtonClick}/>
          </ButtonPanel>
        </div>
      </Calculator>
    </div>
  );
};

render(<App/>, document.getElementById("app"));