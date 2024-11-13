'use strict';
const students = [
  {
    name: 'John',
    id: '2345768',
  },
  {
    name: 'Paul',
    id: '2134657',
  },
  {
    name: 'Jones',
    id: '5423679',
  },
];

const target = document.querySelector('#target')

for (let i of students) {
  const option = document.createElement('option')
  //option.setAttribute('value', i['id'])
  option.value = i.id
  option.innerText = i['name']
  target.appendChild(option)
}