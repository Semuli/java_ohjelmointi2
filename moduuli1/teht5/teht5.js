const yearStr = prompt("Tell me a year:")
let  year = parseInt(yearStr)
let print

if (year % 100 === 0 && year % 400 !== 0) {
  print = 'Not a leap year.'
}
else if (year % 100 === 0 && year % 400 === 0) {
  print = 'Leap year.'
}
else if (year % 4 === 0) {
  print = 'Leap year.'
}
else {
  print = 'Not a leap year.'
}

document.querySelector('#leapyear').innerHTML = `The year ${year} is ${print}`




