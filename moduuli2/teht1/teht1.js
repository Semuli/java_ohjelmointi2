let num1 = prompt("Give 1. number:")
let num2 = prompt("Give 2. number:")
let num3 = prompt("Give 3. number:")
let num4 = prompt("Give 4. number:")
let num5 = prompt("Give 5. number:")

let list = [num1, num2, num3, num4, num5]

for (let i = list.length; i !== 0; i--) {
  console.log(list[i-1])
}