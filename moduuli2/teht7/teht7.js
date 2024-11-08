function roll_dice(sides) {
  let num = Math.floor(Math.random() * (sides - 1 + 1)) + 1;
  return num;
}

let sides = parseInt(prompt('How many sided dice you want?'));

const listElement = document.querySelector('#list');
let roll = 0;

while (roll !== sides) {
  roll = roll_dice(sides);
  const li = document.createElement('LI');
  li.innerText = roll;
  listElement.appendChild(li);
}
