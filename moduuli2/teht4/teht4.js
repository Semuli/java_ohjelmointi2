let num = 1;
let list = [];
let i = 1;

while (num !== 0) {
  num = parseInt(prompt(`Give ${i}. number:`));
  list.push(num);
  i++;
}

list.sort((a, b) => a - b);
list.reverse();

for (num of list) {
  console.log(num);
}