/* import React, { Component } from 'react';
import { render } from "react-dom";
import Calculator from './components/Calculator';
class App extends Component {
  render() {
    return (
      <div>
        <Calculator initialValue="123"/>
      </div>
    );
  }
}

render(<App/>, document.getElementById('app')); */
import React from "react";
import {render} from "react-dom";
import Calculator from './components/Calculator';
import '../styles.css';

const App = () => {
  return (
    <div>
      <Calculator/>
    </div>
  );
};

render(<App/>, document.getElementById("app"));