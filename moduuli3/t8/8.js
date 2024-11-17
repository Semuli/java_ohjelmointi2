function math(num1, num2, operation, print) {
  let result;
  let floatnum1 = parseFloat(num1);
  let floatnum2 = parseFloat(num2);
  if (operation === 0) {
    result = floatnum1 + floatnum2;
  } else if (operation === 1) {
    result = floatnum1 - floatnum2;
  } else if (operation === 2) {
    result = floatnum1 * floatnum2;
  } else {
    if (floatnum2 === 0) {
      result = 'Error. Cant divide by 0';
    } else {
      result = floatnum1 / floatnum2;
    }
  }
  if (isNaN(result)) {
    result = 'Give numbers';
  }
  print.innerText = result;
}

const number1 = document.querySelector('input[id=num1]');
const number2 = document.querySelector('input[id=num2]');
const result = document.querySelector('#result');
const selector = document.querySelector('select');
const calculate = document.querySelector('#start');

calculate.addEventListener('click', function() {
  let num1 = number1.value;
  let num2 = number2.value;
  math(num1, num2, selector.selectedIndex, result);
});