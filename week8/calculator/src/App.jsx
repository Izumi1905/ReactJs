import React, { useState } from 'react';
import './App.css';

function Calculator() {
  const [num1, setNum1] = useState('');
  const [num2, setNum2] = useState('');
  const [result, setResult] = useState(0);

  const handleNum1Change = (event) => {
    setNum1(parseInt(event.target.value));
  }

  const handleNum2Change = (event) => {
    setNum2(parseInt(event.target.value));
  }

  const handleAdd = () => {
    setResult(num1 + num2);
  }

  const handleSubtract = () => {
    setResult(num1 - num2);
  }

  const handleMultiply = () => {
    setResult(num1 * num2);
  }

  const handleDivide = () => {
    setResult(num1 / num2);
  }

  return (
    <div>
      <input type="number" value={num1} onChange={handleNum1Change} /> <br />
      <input type="number" value={num2} onChange={handleNum2Change} /> 
      <p>Result: </p> 
      <button onClick={handleAdd}>+</button>
      <button onClick={handleSubtract}>-</button>
      <button onClick={handleMultiply}>x</button>
      <button onClick={handleDivide}>/</button> 
      <p>Kết quả: {result}</p>
    </div>
  );
}

export default Calculator;
