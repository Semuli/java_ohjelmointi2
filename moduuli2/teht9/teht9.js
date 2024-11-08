function even(list) {
  let evenlist = [];
  for (let num of list) {
    if (num % 2 === 0) {
      evenlist.push(num);
    }
  }
  return evenlist;
}

let list = [
  12,
  47,
  35,
  9,
  82,
  61,
  26,
  91,
  71,
  64,
  3,
  57,
  20,
  99,
  41,
  50,
  75,
  34,
  63,
  58];

let evens = even(list);

console.log(list);
console.log(evens);