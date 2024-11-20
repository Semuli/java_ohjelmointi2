'use strict';
const form = document.querySelector('form');
const search = document.querySelector('#search');
const target = document.querySelector('#target');
const trymyluck = document.querySelector('#trymyluck');
let jokes;

async function randomjoke() {
  try {
    const response = await fetch('https://api.chucknorris.io/jokes/random');
    const jsonData = await response.json();
    const article = document.createElement('article');
    const p = document.createElement('p');
    p.innerText = jsonData.value;
    article.appendChild(p);
    target.appendChild(article);
  } catch (error) {
    console.log(error.message);
  }
}

form.addEventListener('submit', async function(evt) {
  evt.preventDefault();
  const searchvalue = search.value;
  target.innerHTML = '';
  if (searchvalue == 0)
    randomjoke()
  else {
    try {
      const response = await fetch(
          `https://api.chucknorris.io/jokes/search?query=${searchvalue}`);
      jokes = await response.json();
      let i = 1;
      if (jokes.result.length < 1) {
        target.innerText = 'No search result.';
      } else {
        for (let joke of jokes.result) {
          const article = document.createElement('article');
          const p = document.createElement('p');
          p.innerHTML = `${i}. ${joke.value}`;
          article.appendChild(p);
          target.appendChild(article);
          i++;
        }
      }
    } catch (error) {
      console.log(error.message);
    }
  }
});

trymyluck.addEventListener('click', async function() {
  target.innerHTML = '';
  randomjoke()
});






