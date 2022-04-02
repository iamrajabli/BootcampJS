'use strict';
// Some istifadəsi və yazılış qaydası - ən az biri şərti qarşılamalıdır*
// Example 1
let arr = [1, 2, 3, 4, 5, 6];

const result = arr.some(controlArr => {
    return controlArr > 10; // false *
});

console.log(result);