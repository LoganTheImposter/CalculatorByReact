import React, { useState } from 'react';
import './App.css';
import { evaluate } from 'math-expression-evaluator';

const App = () => {
  const [displayValue, setDisplayValue] = useState('');

  const handleButtonClick = (value) => {
    setDisplayValue((prevValue) => prevValue + value);
  };

  const handleCalculate = () => {
    try {
      const result = evaluate(displayValue);
       setDisplayValue(result.toString());
    } catch (error) {
      setDisplayValue('Error');
    }
  };

  const handleClear = () => {
    setDisplayValue('');
  };

  const handleDeleteLast = () => {
    setDisplayValue((prevValue) => prevValue.slice(0, -1));
  };

  return (
    <div className='container'>
      <div className="calculator">
        <div className="display">{displayValue}</div>
        <div className="buttons">
          <button onClick={handleClear} className="button clear">AC</button>
          <button onClick={handleDeleteLast} className="button delete">De</button>
          <button onClick={() => handleButtonClick('/')} className="button option">/</button>
          <button onClick={() => handleButtonClick('*')} className="button option">*</button>
          <button onClick={() => handleButtonClick('7')} className="button">7</button>
          <button onClick={() => handleButtonClick('8')} className="button">8</button>
          <button onClick={() => handleButtonClick('9')} className="button">9</button>

          <button onClick={() => handleButtonClick('-')} className="button option">-</button>
          <button onClick={() => handleButtonClick('4')} className="button">4</button>
          <button onClick={() => handleButtonClick('5')} className="button">5</button>
          <button onClick={() => handleButtonClick('6')} className="button">6</button>

          <button onClick={() => handleButtonClick('+')} className="button option">+</button>
          <button onClick={() => handleButtonClick('1')} className="button">1</button>
          <button onClick={() => handleButtonClick('2')} className="button">2</button>
          <button onClick={() => handleButtonClick('3')} className="button">3</button>
          
          <button onClick={() => handleButtonClick('.')} className="button option">.</button>
          <button onClick={() => handleButtonClick('0')} className="button">0</button>
          <button onClick={() => handleButtonClick('00')} className="button">00</button>
          <button onClick={handleCalculate} className="button equal">=</button>
        </div>
      </div>
    </div>
  );
};

export default App;
