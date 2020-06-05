import React from "react";
import './App.css';
import Calculator from "./Calculator";

const App = () => {
  return (
    <div className="container-calculator">
      <Calculator initialValue="100"/>
    </div>
  );
};

export default App;