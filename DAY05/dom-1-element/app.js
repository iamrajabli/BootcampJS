'use strict';

// DOM - tək element seçmək
// ID ə sahib olanları getElementById ilə çağıra bilərik
// Example 1
const titleId = document.getElementById('title');

// Seçdiyimiz element üzərində bir neçə əməliyyat
// Example 2

// Mətni dəyişdirmək
titleId.textContent = 'Title edited'; // 1
titleId.innerText = 'Title edited 2' // 2

// Rəngləri dəyişdirmək
titleId.style.backgroundColor = 'red';
titleId.style.color = 'white';

// Modern seçim - querySelector / querySelectorAll
// Example 3
let titleQuery = document.querySelector('.title');

// querySelector ilə fərqli seçim yolları
// Example 4

// ul tagını seçmək
let ul = document.querySelector('ul');
console.log(ul);

// Şəkilin src-ını dəyişdirmək
let img = document.querySelector('img');
img.setAttribute('src', 'https://source.unsplash.com/200x200');