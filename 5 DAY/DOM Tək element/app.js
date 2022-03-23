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