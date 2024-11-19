'use strict';
let jsonData;
const form = document.querySelector('form');
form.addEventListener('submit', async function(evt) {
  evt.preventDefault();
  const query = document.querySelector('#query').value;
  try {
    const response = await fetch(
        `https://api.tvmaze.com/search/shows?q=${query}`);
    jsonData = await response.json();
  } catch (error) {
    console.log(error.message);
  }
  const target = document.querySelector('#results');
  target.innerHTML = '';

  for (let i of jsonData) {
    const h2 = document.createElement('h2');
    h2.innerText = i.show.name;
    const url = document.createElement('a');
    url.src = i.show.url;
    url.target += '_blank';
    const img = document.createElement('img');
    img.src = i.show.image?.medium ||
        'https://via.placeholder.com/210x295?text=Not%20Found';
    img.alt = i.show.name;
    const div = document.createElement('div');
    div.innerHTML = i.show.summary;
    const article = document.createElement('article');
    let elements = [h2, url, img, div];
    for (let h = 0; h < elements.length; h++) {
      article.appendChild(elements[h]);
      console.log(elements[h]);
    }
    target.appendChild(article);
  }
});