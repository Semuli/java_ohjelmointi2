let num = parseInt(prompt('Give me a integer'));

let div = 0;
let i = 2;
let answer;

while (i < Math.sqrt(num)) {
  if (num % i === 0) {
    div += 1;
  }
  i++;
}

if (div !== 0) {
  answer = 'not a prime number.';
} else {
  answer = 'prime number.';
}

document.querySelector('#prime').innerHTML = `Number ${num} is ${answer}`;

