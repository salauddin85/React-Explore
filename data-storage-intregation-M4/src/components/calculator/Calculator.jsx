// // src/Calculator.js
// export function add(a, b) {
//     return a + b;
//   }
  
//   export function subtract(a, b) {
//     return a - b;
//   }
  
//   export function multiply(a, b) {
//     return a * b;
//   }
  
//   export function divide(a, b) {
//     if (b === 0) {
//       return "Cannot divide by zero";
//     }
//     return a / b;
//   }
  


// allow importing all functions at once

// src/Calculator.js
// function add(a, b) {
//     return a + b;
//   }
  
//   function subtract(a, b) {
//     return a - b;
//   }
  
//   function multiply(a, b) {
//     return a * b;
//   }
  
//   function divide(a, b) {
//     if (b === 0) {
//       return "Cannot divide by zero";
//     }
//     return a / b;
//   }
  
//   // Export everything at once
//   export { add, subtract, multiply, divide };
  


// src/Calculator.js
// // allow importing specific functions
// function add(a, b) {
//     return a + b;
//   }
  
//   function subtract(a, b) {
//     return a - b;
//   }
  
//   function multiply(a, b) {
//     return a * b;
//   }
  
//   function divide(a, b) {
//     if (b === 0) {
//       return "Cannot divide by zero";
//     }
//     return a / b;
//   }
  
//   // Default export a specific function
//   export default multiply;
  
//   // Named exports for others
//   export { add, subtract, divide };
  



// src/Calculator.js
// export an object with all functions
const operations = {
    add(a, b) {
      return a + b;
    },
    subtract(a, b) {
      return a - b;
    },
    multiply(a, b) {
      return a * b;
    },
    divide(a, b) {
      if (b === 0) {
        return "Cannot divide by zero";
      }
      return a / b;
    }
  };
  
  export default operations;
  