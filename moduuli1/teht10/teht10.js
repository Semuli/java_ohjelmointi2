let dice_amount = parseInt(prompt('Tell me how many dices to roll:'));
let wanted_sum = parseInt(prompt('Tell me what is wanted sum:'));
let sum = 0;
let rightsum = 0;
let rolls = 0;

function getRandomInt(max) {
  return Math.floor(Math.random() * max);
}

while (rolls < 10000) {
  sum = 0;
  for (let i = 0; i < dice_amount; i++) {
    let dice_number = getRandomInt(6) + 1;
    sum += dice_number;
    if (sum === wanted_sum) {
      rightsum++;
    }
  }
  rolls++;
}

let persentage = (rightsum / rolls) * 100;

let answer = `To get sum of ${wanted_sum} on ${dice_amount} dice is ${persentage.toFixed(
    2)}%`;

document.querySelector('#probability').innerHTML = answer;