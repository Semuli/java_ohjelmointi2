const target = document.querySelector('#target');
const list = ['First item', 'Second item', 'Third item'];
for (let i = 0; i < list.length; i++) {
  const li = document.createElement('li');
  li.innerText = list[i];
  target.appendChild(li);
}
const second = document.querySelectorAll('li')[1];
second.setAttribute('class', 'my-item');