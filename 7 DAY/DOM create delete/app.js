'use strict';

// Element yaradılması - сreate
// Example 1
const a = document.createElement('a');
a.classList = 'colorBlack resetA btn';
a.setAttribute('href', 'https://www.github.com/iamrajabli');
a.textContent = 'My GitHub Profile';
document.body.appendChild(a);

// Element dəyişdirilməsi - replace
// Example 2
const h1 = document.createElement('h1');
h1.classList = 'colorBlack resetA btn';
h1.textContent = 'My GitHub Profile';
document.body.replaceChild(h1, a);