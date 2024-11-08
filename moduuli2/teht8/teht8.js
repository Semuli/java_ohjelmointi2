function concat(list) {
  let print = '';
  for (i of list) {
    print += i;
  }
  return print;
}

let list = ['Johnny', 'DeeDee', 'Joey', 'Marky'];

let print = concat(list);

document.querySelector('#demo').innerHTML = print;