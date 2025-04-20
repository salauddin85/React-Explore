// src/App.js
import React, { useEffect, useState } from 'react';
// import { add,subtract,multiply,divide } from './components/calculator/Calculator';
// import multiply, { add, subtract } from './Calculator';
import operations from './components/calculator/Calculator';
import Watches from './components/watches/Watches';

function App() {
  const [num1, setNum1] = useState('');
  const [num2, setNum2] = useState('');
  const [result, setResult] = useState('');
  const [watches, setWatches] = useState([]);

  useEffect(() => {
    fetch('public/watches.json')
      .then(response => response.json())
      .then(data => setWatches(data));
  }, []); 

  const handleCalculation = (operation) => {
    const n1 = parseFloat(num1);
    const n2 = parseFloat(num2);
    
    let resultValue = 0;
    
    switch (operation) {
      case 'add':
        // resultValue = add(n1, n2);
        resultValue = operations.add(n1, n2);
        break;
      case 'subtract':
        // resultValue = subtract(n1, n2);
        resultValue = operations.subtract(n1, n2);
        break;
      case 'multiply':
        // resultValue = multiply(n1, n2);
        resultValue = operations.multiply(n1, n2);
        break;
      case 'divide':
        // resultValue = divide(n1, n2);
        resultValue = operations.divide(n1, n2);
        break;
      default:
        resultValue = 0;
    }

    setResult(resultValue);
  };

  return (
    <div className="calculator">
      <h1>React Calculator</h1>
      
      <input 
        type="number" 
        placeholder="Enter first number" 
        value={num1} 
        onChange={(e) => setNum1(e.target.value)} 
      />
      <input 
        type="number" 
        placeholder="Enter second number" 
        value={num2} 
        onChange={(e) => setNum2(e.target.value)} 
      />

      <div>
        <button onClick={() => handleCalculation('add')}>Add</button>
        <button onClick={() => handleCalculation('subtract')}>Subtract</button>
        <button onClick={() => handleCalculation('multiply')}>Multiply</button>
        <button onClick={() => handleCalculation('divide')}>Divide</button>
      </div>

      <h2>Result: {result}</h2>

      <Watches watches={watches} />

    </div>

    
  );
}

export default App;
