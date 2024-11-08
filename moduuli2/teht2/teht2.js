let participant_num = parseInt(prompt("How many participant:"))
let list = []
let a = 0
while (a < participant_num) {
  let name = prompt(`Give ${a+1}. participant name:`)
  list.push(name)
  a++
}

list.sort()

const listElement = document.querySelector('#list');
for (let i = 0; i < list.length; i++) {
  const li = document.createElement('LI');
  li.innerText = list[i];
  listElement.appendChild(li);
}