ask = confirm("Should I calculate the square root?")

let answer

if (ask === true) {
  numberstr = prompt("Give me a number:")
  let number = parseInt(numberstr)
  if (number < 0) {
    answer = 'The square root of a negative number is not defined.'
  }
  else {
    answer = Math.sqrt(number)
  }
}
else {
  answer = ('The square root is not calculated.')
}

document.querySelector('#root').innerHTML = answer