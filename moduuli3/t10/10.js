const form = document.querySelector('#source');
const firstname = document.querySelectorAll('input')[0];
const lastname = document.querySelectorAll('input')[1];
const submit = document.querySelectorAll('input')[2];
const target = document.querySelector('#target');

function printnames() {
  const fname = firstname.value;
  const lname = lastname.value;
  target.innerText = `Your name is ${fname} ${lname}`;
}

form.addEventListener('click', function(event) {
  event.preventDefault();
});

submit.addEventListener('click', function() {
  printnames();
});

