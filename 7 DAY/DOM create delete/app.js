'use strict';
// Element yaradılması
// Example 1
const a = document.createElement('a');
a.classList = 'colorBlack resetA btn';
a.setAttribute('href', 'https://www.github.com/iamrajabli');
a.textContent = 'My GitHub Profile';
document.body.appendChild(a);