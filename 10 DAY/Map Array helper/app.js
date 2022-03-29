'use strict';
// Map array istifadəsi və öz array metodumuzun yazılma qaydası 
// Example 1 

const arrEx1 = [1, 2, 3, 4];

const arrNewEx1 = arrEx1.map(function(arr) {
    return arr * 2;
});

console.log(arrNewEx1);