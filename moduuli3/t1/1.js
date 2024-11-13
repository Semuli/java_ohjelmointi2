const target = document.querySelector('#target');

target.innerHTML =
    '<li>First item</li>\n' +
    '<li>Second item</li>\n' +
    '<li>Third item</li>';

target.setAttribute('class', 'my-list')