let startingyear = parseInt(prompt('Give starting year'));
let endyear = parseInt(prompt('Give me a en year'));
let year = startingyear;
let list = [];
if (startingyear > endyear) {
  startingyear++;
} else {
  endyear++;
}
while (year !== endyear) {
  if (year % 100 === 0 && year % 400 !== 0) {
    print = 'not a leap year.';
  } else if (year % 100 === 0 && year % 400 === 0) {
    print = 'leap year.';
  } else if (year % 4 === 0) {
    print = 'leap year.';
  } else {
    print = 'not a leap year.';
  }
  list.push(`${year} is ${print}`);
  if (year < endyear) {
    year++;
  } else {
    year--;
  }
}
const yearElement = document.querySelector('#year');

for (let i = 0; i < list.length; i++) {
  const li = document.createElement('LI');
  li.innerText = list[i];
  yearElement.appendChild(li);
}