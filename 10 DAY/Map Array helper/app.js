'use strict';
// Map array istifadəsi və öz array metodumuzun yazılma qaydası 
// Example 1 
const arrEx1 = [1, 2, 3, 4];

const arrNewEx1 = arrEx1.map(function(arr) {
    return arr * 2;
});

console.log(arrNewEx1);

// Example 2 
const arrEx2 = [
    { ad: 'Hikmat', soyad: 'Rajabli' },
    { ad: 'Nail', soyad: 'Romanov' },
    { ad: 'Sahil', soyad: 'Aliev' },
]

const arrNewEx2 = arrEx2.map(function(arr) {
    return arr.ad;
});

console.log(arrNewEx2);