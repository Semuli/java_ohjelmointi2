function roll_dice() {
  let num = Math.floor(Math.random() * (6)) + 1;
  return num;
}

const listElement = document.querySelector('#list');
let roll = 0;

while (roll !== 6) {
  roll = roll_dice();
  const li = document.createElement('LI');
  li.innerText = roll;
  listElement.appendChild(li);
}
