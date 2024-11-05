const name = prompt("Give me your name:")

function getRandomInt(max) {
  return Math.floor(Math.random() * max);
}
let num = (getRandomInt(4));
let house
if (num === 0) {
   house = 'Gryffindor'
}
else if (num === 1) {
  house = 'Slytherin'
}
else if (num === 2) {
  house = 'Hufflepuff'
}
else {
  house = 'Ravenclaw'
}
document.querySelector('#sorting').innerHTML = `${name}, you are ${house} `