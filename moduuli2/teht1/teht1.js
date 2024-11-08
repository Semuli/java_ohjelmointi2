let list =[]


for (let a = 0; a < 5; a++) {
  let num = prompt(`Give ${a+1}. number:`);
  list.push(num)
}


for (let i = list.length; i !== 0; i--) {
  console.log(list[i - 1]);
}