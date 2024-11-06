const num1str = prompt("Anna luku:"), num2str = prompt("Toinen luku:"), num3str = prompt("kolmas luku:")
let num1 = parseInt(num1str)
let num2 = parseInt(num2str)
let num3 = parseInt(num3str)
let sum = num1 + num2 + num3
let product = num1 * num2 * num3
let average = (num1 + num2 + num3) /3
document.querySelector('#sum').innerHTML = `Sum=${sum}`
document.querySelector('#product').innerHTML = `Product=${product}`
document.querySelector('#average').innerHTML = `Average=${average}`