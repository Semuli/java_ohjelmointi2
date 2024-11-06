let dice_amount = parseInt(prompt('Tell me how many dices to roll'));
let sum = 0;

function getRandomInt(max) {
  return Math.floor(Math.random() * max);
}

for (let i = 0; i < dice_amount; i++) {
  let dice_number = getRandomInt(6) + 1;
  sum += dice_number;
}

document.querySelector('#dice').innerHTML = `Sum of the dices is = ${sum}`;