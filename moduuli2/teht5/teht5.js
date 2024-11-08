let list = [];
let sayed = false;

while (sayed != true) {
  let num = parseInt(prompt(`Give a number:`));
  if (list.includes(num)) {
    sayed = true;
  } else {
    list.push(num);
  }
}

list.sort((a, b) => a - b);
for (num of list) {
  console.log(num);
}