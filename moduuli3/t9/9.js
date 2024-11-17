const input = document.querySelector('input');
const button = document.querySelector('button');
const result = document.querySelector('#result');

function calculate(print) {
  const str = input.value;
  let num = 0;
  let operation = '+';
  let result = 0;

  for (let i = 0; i < str.length; i++) {

    const char = str[i];
    if (!isNaN(char) || char === '.') {
      num = num * 10 + parseFloat(char);
    }
    if (['+', '-', '*', '/'].includes(char) || i === str.length - 1) {
      if (operation === '+') {
        result += num;
      } else if (operation === '-') {
        result -= num;
      } else if (operation === '*') {
        result *= num;
      } else if (operation === '/') {
        if (num === 0) {
          result = 'Don\'t divide with zero...';
        } else {
          result /= num;
        }
      }
      operation = char;
      num = 0;
    }
  }
  print.innerText = result;
}

button.addEventListener('click', function() {
  calculate(result);
});