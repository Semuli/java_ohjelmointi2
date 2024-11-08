let list = [];

for (let i = 0; i < 6; i++) {
  let dog = prompt(`Give me ${i + 1}. dog name:`);
  list.push(dog);
}

list.sort();
list.reverse();

const listElement = document.querySelector('#list');

for (let a = 0; a < list.length; a++) {
  const li = document.createElement('li');
  li.innerText = list[a];
  listElement.appendChild(li);
}