'use strict';
// Every istifadəsi və yazılış qaydası - bütün şərtlər qarşılamalıdır*
// Example 1
let _arr = [1, 2, 3, 4, 5, 6];

const result = _arr.every(__controlArr => {
    return __controlArr > 3;
});

console.log(result);
console.log("*********");