const args = process.argv;

const operation = args[2];
const num1 = parseFloat(args[3]);
const num2 = parseFloat(args[4]);

function calculate(op, a, b) {
  switch (op) {
    case 'add':
      return a + b;
    case 'sub':
    case 'subtract':
      return a - b;
    case 'mul':
    case 'multiply':
      return a * b;
    case 'div':
    case 'divide':
      if (b === 0) {
        throw new Error('Cannot divide by zero');
      }
      return a / b;
    case 'mod':
      return a % b;
    case 'pow':
      return Math.pow(a, b);
    default:
      return null;
  }
}

if (!operation || isNaN(num1) || isNaN(num2)) {
  console.log('Invalid usage!');
  console.log('Usage: node calculator.js <operation> <num1> <num2>');
  console.log('Operations: add, sub, mul, div, mod, pow');
} else {
  try {
    const result = calculate(operation, num1, num2);
    if (result === null) {
      console.log(`Invalid operation: "${operation}"`);
      console.log('Supported operations: add, sub, mul, div, mod, pow');
    } else {
      console.log(`Result: ${result}`);
    }
  } catch (err) {
    console.log(`Error: ${err.message}`);
  }
}
