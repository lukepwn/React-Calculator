import { render } from "@testing-library/react";
import React, { useState } from "react";

function Buttons() {

const [buttonValue, setButtonValue] = useState(0);
const [memory, setMemory] = useState(0);
const [result, setResults] = useState(0);
const [operands, setOperands] = useState("");



const changeButtonValue = (e) => {
    //if (buttonValue != 0)
        setButtonValue(parseInt(e.target.value));
    
}

const changeOperands = (e) => {
    setOperands(e.target.value);
}

const calculate = () => {

    if (operands === '+')
        setMemory(memory + buttonValue);

    else 
        setMemory(memory - buttonValue);
        
    return result;
}

const output = () => {
    setResults(memory);
}



  return (
      <div>
          <button value = '1' onClick = {changeButtonValue}>1</button>
          <button value = '+' onClick = {changeOperands}>+</button> {/* addition */}
          <button value = '-' onClick = {changeOperands}>-</button> {/* subtraction */}
          <button onClick = {calculate}>=</button> {/* equals */}

          <h1>{result}</h1>
      </div>
  )
}

export default Buttons;